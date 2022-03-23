#!/bin/bash
PORT=8055

# Dev Server
python -m pipenv run python -m mkdocs serve --dev-addr 0.0.0.0:$PORT