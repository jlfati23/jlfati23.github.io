---
tags: 
- k8s
- devops
date: 2024-09-08
---

# Kubernetes  Essentials

## Kubernetes Basics

### Quick Commands

- **Creating Resources**
    - Use `kubectl create -f <filename.yaml>` for general resource creation.
    - Deploy a container with `kubectl run redis --image=redis --namespace=finance`.
- **Modifying Resources**
    - Delete and recreate resources or use `kubectl replace -f elephant.yaml --force` to forcefully update.
    - Scale deployments or replicas with `kubectl scale`:
        - `kubectl scale replicaset <replicaset-name> --replicas=2`
        - `kubectl scale deployment frontend --replicas=0`
    - Edit resources with `kubectl edit` and apply changes with `kubectl apply -f <filename>`.
    - Update container images using `kubectl set image deployment/<deployment-name> <container-name>=<new-container>`.
- **Viewing and Describing Resources**
    - List all resources related to a specific item: `kubectl get all | grep redis`.
    - Describe resources: `kubectl describe pod/deployment/sa/sc <resource_name>`.
    - Check pod user: `kubectl exec <pod_name> -- whoami`.
    - Use `kubectl explain <resource>.<field>` for field explanations.
- **Imperative Commands**
    - Use `dry-run` to test commands without actual execution.
    - Output resource definitions in YAML with `o yaml`.

### Configuration Tips

- **Common Settings**
    - Override Dockerfile defaults using `command` and `args`.
    - Set environment variables in `spec.containers.env`.
    - Use `securityContext.runAsUser` for user permissions.
    - Apply node taints and tolerations:
        - Taint node: `kubectl taint nodes node01 spray=mortein:NoSchedule`
        - Untaint node: `kubectl taint nodes controlplane node-role.kubernetes.io/control-plane:NoSchedule-`
    - Label nodes: `kubectl label node node01 color=blue`.

### Namespaces

- **Managing Namespaces**
    - View pods across all namespaces: `kubectl get pods --all-namespaces`.
    - List namespaces: `kubectl get namespaces` or `kubectl get ns`.
- **kube-system Namespace**
    - Contains system resources like kube-apiserver, kube-controller-manager, and network proxies.
    - Manage with caution as it includes critical Kubernetes components.

### Environment Variables in Kubernetes

- **Setting Environment Variables**
    - Directly in Pod YAML:
        
        ```yaml
        spec:
          containers:
            - name: my-container
              image: my-image
              env:
                - name: ENV_VARIABLE_1
                  value: value1
                - name: ENV_VARIABLE_2
                  value: value2
        
        ```
        
    - Using ConfigMaps:
    Reference in Pod:
        
        ```yaml
        apiVersion: v1
        kind: ConfigMap
        metadata:
          name: my-configmap
        data:
          ENV_VARIABLE_1: value1
          ENV_VARIABLE_2: value2
        
        ```
        
        ```yaml
        spec:
          containers:
            - name: my-container
              image: my-image
              envFrom:
                - configMapRef:
                    name: my-configmap
        
        ```
        
    - Using Secrets for sensitive data:
    Reference in Pod:
        
        ```yaml
        apiVersion: v1
        kind: Secret
        metadata:
          name: my-secret
        data:
          ENV_VARIABLE_1: dmFsdWUx
          ENV_VARIABLE_2: dmFsdWUy
        type: Opaque
        
        ```
        
        ```yaml
        spec:
          containers:
            - name: my-container
              image: my-image
              envFrom:
                - secretRef:
                    name: my-secret
        
        ```
        
    - Command-line parameters:
        
        ```bash
        kubectl create deployment my-deployment --image=my-image --env=ENV_VARIABLE_1=value1 --env=ENV_VARIABLE_2=value2
        
        ```
        

### etcd Server


- **Overview**
    - etcd is a distributed key-value store used by Kubernetes for storing cluster data, configuration, and metadata.
    - Provides strong consistency, distributed storage, and supports transactions.

### Kubelet and Metrics Server

- **Deployment Strategies**
    - Options: Recreate, RollingUpdate, Blue/Green, Canary.
    - Rollback with `kubectl rollout undo` and view history with `kubectl rollout history`.

### Network and Services

- **Access and Exposure**
    - Use `kubectl expose` to create a service that makes a pod accessible.
    - Example: `kubectl expose pod redis --port=6379 --name redis-service`.
- **Service Types**
    - NodePort, ClusterIP, LoadBalancer.
- **Ingress**
    - Manage external access to services using an Ingress controller.

### Authorization Mechanism

- **Check Access**
    - Verify permissions with `kubectl auth can-i <action> <resource>`.

## References

[Kubernetes for the Absolute Beginners - Hands-on](https://www.udemy.com/course/learn-kubernetes/)

[Kubernetes Certified Application Developer (CKAD) Training](https://www.udemy.com/course/certified-kubernetes-application-developer/?couponCode=SKILLS4SALEB)