# Use the official Node.js image as the base image
FROM node:22-bullseye

RUN apt update \
    && apt install sudo

RUN useradd -m gekal -s /bin/bash \
    && echo "gekal ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/gekal

# Create and change to the app directory
WORKDIR /usr/src/app

# # Expose the port the app runs on
EXPOSE 3000
