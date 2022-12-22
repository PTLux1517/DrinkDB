#!/bin/sh

echo "############################"
echo "Building DrankDB frontend..."
echo "############################"

echo
echo "###############"
echo "Running webpack"
echo "###############"
npm run build || { echo "Webpack failed"; exit 1; }

echo
echo "#####################################"
echo "DrankDB frontend build was successful"
echo "#####################################"
exit 0
