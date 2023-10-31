pipeline {
    agent any
    environment {
        registry = "624435411155.dkr.ecr.us-east-1.amazonaws.com/devops-automation-ecr"
    }
    stages {
        stage('Checkout') {
            steps {
                // Checkout your code from your Git repository
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'githubtoken', url: 'https://github.com/Robertr710/devops-automation']])
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Build a Docker image from the project's root directory
                  dockerimage = docker.build registry
                }
            }
        }

        stage('Push to ECR') {
    steps {
        script {
           sh 'aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 624435411155.dkr.ecr.us-east-1.amazonaws.com'
           sh 'docker push 624435411155.dkr.ecr.us-east-1.amazonaws.com/devops-automation-ecr:latest'
        }
    }
}    
    }
}





//test1
//test2