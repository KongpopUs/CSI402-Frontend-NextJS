pipeline {
    agent any
    stages{
        stage('Check Out') {
            steps {
                print "Check Out"
                checkout([
                    $class: 'GitSCM', 
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [ [ 
                    credentialsId: 'Kongpop', 
                    url: 'https://github.com/KongpopUs/CSI402-Frontend-NextJS.git'
            ] ]
            ])
            print "Clone Success"
            }
        }
        stage('Build') {
            steps {
                print "Build Docker"
        }
            steps {
                sh "docker build -t <csi402frontend>"
            }
        }
        stage('Test') {
            steps {
                print "Testing"
            }
        }
    }
}