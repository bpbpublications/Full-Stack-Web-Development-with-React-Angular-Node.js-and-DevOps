03_kubernetes_manifests – Kubernetes Deployment + Service

Matches the "kubectl apply", scaling, and service exposure ideas in the chapter.

Files:
- deployment.yaml
- service.yaml

Usage:
  kubectl apply -f deployment.yaml
  kubectl apply -f service.yaml
  kubectl scale deployment web-deployment --replicas=3
