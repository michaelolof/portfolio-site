# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.154.2/containers/javascript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version: 14, 12, 10
ARG VARIANT="10"
FROM node:10.23.1-alpine3.11

WORKDIR /app

RUN apk update && \
    apk upgrade && \
    apk add git

COPY ./package.json ./

RUN npm install

COPY . .

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"


CMD [ "/bin/ash" ]

# WORKDIR /app

# COPY ./package.json ./package-lock.json ./
# RUN npm install


# FROM nginx:1.19.4-alpine

