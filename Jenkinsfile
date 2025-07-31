pipeline {
    agent any

    environment {
        IMAGE_NAME = 'nandvanshi-taxi:latest'
        CONTAINER_NAME = 'nandvanshi-taxi-container'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/prashanty3/nandvanshi.git', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Stop and Remove Existing Container') {
            steps {
                script {
                    sh 'docker rm -f $CONTAINER_NAME || true'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 8080:80 --name $CONTAINER_NAME $IMAGE_NAME'
            }
        }
    }

    post {
        success {
            echo '✅ Deployed successfully on http://<jenkins-server-ip>:8080'
        }
        failure {
            echo '❌ Build or deploy failed!'
        }
    }
}
