/**
 * Toggles boolean state by changing it to true if it is false and
 * changing it to false if it is true.
 * @returns {boolean}
 * @param {boolean} boolState
 */
function toggleBooleanState( boolState ) {
  if( boolState ) {
    boolState = false;
  } else  {
    boolState = true;
  }
  return boolState;
}

/**
 * @returns {object}
 * @param {object} original
 */
function cloneObject(original) {
  return (JSON.parse(JSON.stringify(original)))
}

function deepClone(original) {
  let destination = {};
  for (var property in original) {
    if (typeof original[property] === "object" && original[property] !== null && destination[property]) {
      deepClone(destination[property], original[property]);
    } else {
        destination[property] = original[property];
    }
  }
  return destination;
}

function trimRightOfDelta( delta ) {
  const ops = delta.ops;
  const lastOps = ops[ ops.length -1 ];
  lastOps.insert = lastOps.insert.trimRight();
  lastOps.insert = lastOps.insert.replace(/(\r\n|\n|\r|\s|↵)+$/, "" );
  return delta;
}

function preventInputKeys(e) {
  //e.preventDefault();
  const allowedKeyCodes = [
    8, 9, 13, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36,
    37, 38, 39, 40, 46, 91, 92, 93, 112, 113, 114, 115,
    116, 117, 118, 119, 120, 121, 122, 123, 144, 145
  ];
  let isAllowed = false;
  allowedKeyCodes.forEach( (code) => {
    // find a match
    if( e.keyCode === code ) {
      isAllowed = true;
      return
    }
  });

  if( !isAllowed ) {
    e.preventDefault();
  }
}

/**
  Obtains the css property of an element.
  @param {Node} element Dom element
  @param {string} property CSS property
  @returns {string} value
*/
function css( element, property ) {
  const style = window.getComputedStyle( element );
  return style.getPropertyValue( property );
}

/**
 * @param {Element} dropDownTrigger This is the element that is clicked on that triggers the drop down menu.
 * @param {function} hideMenuFn A function called that handles the removal of the drop down menu.
*/
function hideDropDownOnOutsideClick( dropDownTrigger , hideMenuFn ) {
  document.body.addEventListener("click", _menuCloser, false)

  function _menuCloser(e) {
    if( e.target != dropDownTrigger ) {
      document.body.removeEventListener("click", _menuCloser, false );
      hideMenuFn();
    }
  }
}



export default {
  toggleBooleanState,
  cloneObject,
  deepClone,
  trimRightOfDelta,
  preventInputKeys,
  css,
  hideDropDownOnOutsideClick,
};
