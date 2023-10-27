pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Checkout your code from your Git repository
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'githubtoken', url: 'https://github.com/Robertr710/devops-automation']])
            }
        }
        stage('Install dependencies') {
            steps {
                sh "npm install"
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Build a Docker image from the project's root directory
                    sh "docker build -t rrodriguez4570/devops-automation:latest ."
                }
            }
        }
        stage('Build React Application') {
            steps {
                script {
                    // Perform the build (e.g., using Webpack or other build tools) in the project's root directory
                    sh 'npm run build'
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                script {
                    // Tag the Docker image and push it to Docker Hub
                    // Credentials usage with credentials block
                    withCredentials([usernamePassword(credentialsId: 'dockerhub_id', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) {
                        sh "docker login -u $USERNAME -p $PASSWORD"
                        sh "docker push rrodriguez4570/devops-automation:latest"
                    }
                }
            }
        }
        stage('Deploy to Dev Kubernetes') {
            steps {
                script {
                    // Apply Kubernetes Deployment and Service YAML files for the development environment
                    sh "kubectl apply -f dev-deployment.yaml"
                    sh "kubectl apply -f dev-service.yaml"
                }
            }
        }
       
    }
}





//test
