#!/bin/bash

SCRIPT_DIR=$(cd $(dirname $0) && pwd)

docker-compose stop || exit
