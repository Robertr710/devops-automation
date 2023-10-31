pipeline {
    agent any
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
                    sh "docker build -t rrodriguez4570/devops-automation:latest ."
                }
            }
        }

        stage('Push to Docker Hub/Delete container and image') {
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
    }
}





//test1
//test2