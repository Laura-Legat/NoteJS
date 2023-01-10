# after cloning the repo, cd into the cloudnative folder
cd cloudnative
# create the K3D cluster
k3d cluster create --config ./k3d/k3d-cluster-config.yaml
# install ArgoCD
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
# use port-forwarding to access ArgoCD at 127.0.0.1:8080
kubectl port-forward svc/argocd-server -n argocd 8080:443
# create the ArgoCD app for tracking the github repo
kubectl -n argocd apply -f ./argocd-app/argocd-app-config.yaml