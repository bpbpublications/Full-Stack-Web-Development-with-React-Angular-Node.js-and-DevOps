#!/usr/bin/env bash
set -e

echo "GET /hello"
curl -s "http://localhost:3000/hello?name=Rupesh" | jq . || curl -s "http://localhost:3000/hello?name=Rupesh"
echo

echo "POST /api/echo"
curl -s -X POST "http://localhost:3000/api/echo" \
  -H "Content-Type: application/json" \
  -d '{"topic":"http","ok":true}' | jq . || true
echo

echo "DELETE /api/resource (expects 204)"
curl -i -X DELETE "http://localhost:3000/api/resource"
