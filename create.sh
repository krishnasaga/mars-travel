#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Set the project name
PROJECT_NAME="my-turborepo"

# Define library names
LIBRARIES=("library-one" "library-two" "library-three" "library-four" "library-five")

# Create the project directory
mkdir "$PROJECT_NAME"
cd "$PROJECT_NAME"

# Initialize a new git repository
git init

# Initialize package.json with default values
yarn init -y

# Overwrite package.json with necessary configurations
cat > package.json <<EOL
{
  "private": true,
  "name": "$PROJECT_NAME",
  "version": "1.0.0",
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev",
    "lint": "turbo run lint",
    "test": "turbo run test"
  },
  "devDependencies": {
    "turbo": "^1.10.12"
  }
}
EOL

# Install Turborepo as a development dependency
yarn add -D turbo

# Create turbo.json configuration file
cat > turbo.json <<EOL
{
  "\$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**"]
    },
    "dev": {
      "cache": false
    },
    "lint": {},
    "test": {}
  }
}
EOL

# Create the packages directory
mkdir packages

# Create each library
for LIB in "${LIBRARIES[@]}"; do
  mkdir "packages/$LIB"
  cd "packages/$LIB"

  # Initialize package.json for the library
  yarn init -y

  # Overwrite package.json with custom configurations
  cat > package.json <<EOL
{
  "name": "@$PROJECT_NAME/$LIB",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "build": "echo 'Building $LIB'",
    "dev": "echo 'Running $LIB in dev mode'",
    "lint": "echo 'Linting $LIB'",
    "test": "echo 'Testing $LIB'"
  }
}
EOL

  # Create an index.js file for the library
  echo "// $LIB - Example code" > index.js

  # Navigate back to the root directory
  cd ../../
done

# Display completion message
echo "Turborepo project with Yarn workspaces and 5 libraries has been set up in '$PROJECT_NAME'."

