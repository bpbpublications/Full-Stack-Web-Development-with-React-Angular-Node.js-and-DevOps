# Generate a local HTTPS certificate (self-signed)

You need `openssl` (available on most Linux/macOS; Windows users can use Git Bash or WSL).

From the `chapter_06_code` folder:

```bash
mkdir -p 03_https_demo/certs
openssl req -x509 -newkey rsa:2048 -nodes \
  -keyout 03_https_demo/certs/key.pem \
  -out 03_https_demo/certs/cert.pem \
  -days 365 \
  -subj "/CN=localhost"
```

Then run:

```bash
npm run start:https
```

Visit: https://localhost:3443

The browser will show a warning because the certificate is self-signed.
