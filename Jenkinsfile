
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
        junit '**/test-results/*.xml'
      }
   } 
}