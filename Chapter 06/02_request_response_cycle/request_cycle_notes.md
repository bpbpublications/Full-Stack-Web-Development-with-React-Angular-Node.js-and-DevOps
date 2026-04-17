# Request–Response Cycle (Quick Notes)

1. Browser creates an HTTP request (method + path + headers + optional body).
2. DNS resolves the domain name to an IP address.
3. TCP connection is established (or reused with keep-alive).
4. Server receives the request, routes it, runs middleware, reads body, and executes logic.
5. Server sends an HTTP response (status + headers + body).
6. Browser renders response and may request extra assets (CSS/JS/images).
