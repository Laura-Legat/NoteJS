<img src="https://github.com/Laura-Legat/cloudnative/blob/main/webapp/assets/images/logo.svg" alt="logo" width="200"/>

# NoteJS - JKU Cloudnative project

## Pre-requisites (on Windows)

### Install and setup Docker

https://docs.docker.com/desktop/install/windows-install/

And create a private image repo on Dockerhub

### Install and setup kubectl

https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/

### Install K3D via Chocolatey

https://k3d.io/v5.4.6/#installation

### Download binami's SealedSecrets controller.yaml

https://github.com/bitnami-labs/sealed-secrets/releases

(and apply it after cluster creation with: `kubectl apply -f controller.yaml`)

### Install krew

https://krew.sigs.k8s.io/docs/user-guide/setup/install/

and install kubeseal with `krew install kubeseal`

### Install ArgoCD CLI via curl

https://argo-cd.readthedocs.io/en/stable/cli_installation/

## Setup

Clone the project and create a K3D cluster with

`k3d cluster create --config ./k3d/k3d-cluster-config.yaml`

Create a dockerconfig secret with

`kubectl create secret docker-registry regcred --docker-server=https://index.docker.io/v1/ --docker-username=<docker-username> --docker-password=<docker-pw> --docker-email=<docker-email>`

Create certificate with

`kubeseal --fetch-cert > public.pem`

And use it to create a SealedSecret

`kubeseal --format=yaml --cert=public.pem < regcred.yaml > regcred-sealed.yaml`

The SealedSecret is safe to push instead of the Secret itself.

### ArgoCD

Install ArgoCD with

`kubectl create namespace argocd`

`kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml`

Use port forwarding

`kubectl port-forward svc/argocd-server -n argocd 8080:443`

Create an ArgoCD app with

`kubectl -n argocd apply -f ./argocd-app/argocd-app-config.yaml`
