#!/bin/bash

while true; do
  apibara run --allow-env=env-goerli src/battles.ts -A dna_jX3t04zs9zywBnHWVmUq --status-server-address 0.0.0.0:1002 --persist-to-fs=.apibara --sink-id=battles
  echo "Apibara exited with status $? - Restarting..." >&2
  sleep 1
done
