#!/usr/bin/env bash
set -e

echo "---- Cookies demo ----"
echo "1) Set cookie"
curl -i -s http://localhost:3002/set | head -n 20
echo

echo "2) Read cookie (with cookie jar)"
curl -s -c /tmp/cj.txt http://localhost:3002/set >/dev/null
curl -s -b /tmp/cj.txt http://localhost:3002/read
echo
echo

echo "---- Sessions demo ----"
echo "1) First visit (creates session)"
curl -s -c /tmp/sj.txt http://localhost:3003/visit
echo

echo "2) Second visit (same session)"
curl -s -b /tmp/sj.txt http://localhost:3003/visit
echo

echo "3) Set name"
curl -s -b /tmp/sj.txt "http://localhost:3003/whoami?name=Rupesh"
echo
