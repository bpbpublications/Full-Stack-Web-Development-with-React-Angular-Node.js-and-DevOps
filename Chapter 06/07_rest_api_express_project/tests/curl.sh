#!/usr/bin/env bash
set -e

API="http://localhost:3007"

echo "Health:"
curl -s "$API/api/health" ; echo
echo

echo "List products:"
curl -s "$API/api/products" ; echo
echo

echo "Create product:"
curl -s -X POST "$API/api/products" -H "Content-Type: application/json" \
  -d '{"name":"Keyboard","price":899,"tags":["electronics"]}' ; echo
echo

echo "Filter by tag=electronics:"
curl -s "$API/api/products?tag=electronics" ; echo
echo

echo "Login (sets cookie demo_user):"
curl -s -c /tmp/auth.txt -X POST "$API/api/auth/login" -H "Content-Type: application/json" \
  -d '{"username":"rupesh"}' ; echo
echo

echo "Me (reads cookie):"
curl -s -b /tmp/auth.txt "$API/api/auth/me" ; echo
echo
