#!/bin/bash

while true; do
  apibara run --allow-env=env-goerli src/adventurers.ts -A dna_Ph4f46VVexs9XUi0qVd6 --status-server-address 0.0.0.0:1001 --persist-to-fs=.apibara --sink-id=adventurers
  echo "Apibara exited with status $? - Restarting..." >&2
  sleep 1
done
