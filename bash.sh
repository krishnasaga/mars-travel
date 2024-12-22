#!/bin/bash

# Set the base directory where your Turbo repo is located
TURBO_REPO_DIR="/path/to/your/turbo-repo"
DEST_DIR="/path/to/destination"

# Build all projects using Turbo (without changing the current directory)
echo "Starting to build all projects with Turbo..."
# Using the absolute path to the turbo executable if necessary
turbo run build

# Check if Turbo build was successful
if [ $? -eq 0 ]; then
    echo "All projects built successfully."
else
    echo "Build failed. Exiting."
    exit 1
fi

# Run file copy task
echo "Starting file copy task..."
cp -r "$TURBO_REPO_DIR/dist" "$DEST_DIR"
echo "File copy task completed."

# End of script
