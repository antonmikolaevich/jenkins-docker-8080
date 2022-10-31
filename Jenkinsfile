
pipeline {
  agent any
    
  stages { 
    stage('Build'){
        steps {
            bat 'npm install'
        }
    }   
            
    stage('Test') {
      steps {
        bat 'npm test'
      }
    }
  }
   post {
      always {
        junit allowEmptyResults: true, testResults: '**/test-results/*.xml'
      }
   } 
}