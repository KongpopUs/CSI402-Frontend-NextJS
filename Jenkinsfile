pipeline {
    agent any
    stages {
        stage ('Clone') {
            steps {
                git branch: main , url: 'https://github.com/KongpopUs/CSI402-Frontend-NextJS.git'
                }
        }
        stage ('Build') {
            steps {
                sh "docker bulid"
                }
        }
        stage ('Deploy Image') {
            steps {
                print "Hello Jenkins Deploy Image"
                }
        }
        stage ('Testing') {
            steps {
                print "Hello Jenkins Testing"
                }
            }
    }
}