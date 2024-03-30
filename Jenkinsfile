pipeline {
  agent {
    kubernetes {
      yaml '''
        apiVersion: v1
        kind: Pod
        spec:
          containers:
          - name: docker
            image: docker:latest
            command:
            - cat
            tty: true
            volumeMounts:
             - mountPath: /var/run/docker.sock
               name: docker-sock
          - name: git
            image: achmadacm11/git:latest
            command:
            - sleep
            args:
            - 9999999
          volumes:
          - name: docker-sock
            hostPath:
              path: /var/run/docker.sock    
        '''
    }
  }
  environment {
    UID_REPO = credentials("uid-qonstanta-gitlab")
    APP_NAME = "qonstanta-auth"
    IMAGE_TAG = "${BUILD_NUMBER}"
  }
  options {
    disableConcurrentBuilds()
  }
  stages {
    stage('Build Staging') {
      when {
        branch 'dev'
      }
      steps {
        container('docker') {
          echo 'BUILD EXECUTION STARTED'
          sh "cp config/.env.stg .env"
          sh "docker build -t registry.gitlab.com/ardhi.ansyah2662/qonstanta-auth:${IMAGE_TAG} ."
          sh "docker login registry.gitlab.com -u ${UID_REPO_USR} -p ${UID_REPO_PSW}"
          sh "docker push registry.gitlab.com/ardhi.ansyah2662/qonstanta-auth:${IMAGE_TAG}"
        }
      }
    }
    stage('Deploy to Staging') {
      when {
        branch 'dev'
      }
      steps {
        container(name: 'git', shell: '/bin/sh') {
          sh '''#!/bin/sh
          git --version
          git config --global user.email "achmadmauliddin2@gmail.com"
          git config --global user.name "achmad-acm11"
          cd ..
          git clone https://${UID_REPO_USR}:${UID_REPO_PSW}@gitlab.com/achmad-acm11/argocd-qonstanta-config.git -b main
          cd argocd-qonstanta-config/staging
          sed -i "s/${APP_NAME}.*/${APP_NAME}:${IMAGE_TAG}/g" account-qonstanta.yaml
          cat account-qonstanta.yaml
          git add account-qonstanta.yaml
          git commit -m "Update account-qonstanta.yaml ${IMAGE_TAG}"
          git push -f https://${UID_REPO_USR}:${UID_REPO_PSW}@gitlab.com/achmad-acm11/argocd-qonstanta-config.git main
          echo 'FINISH'
          '''
        }
      }
    }
    stage('Build Production') {
      when {
        branch 'main'
      }
      steps {
        container('docker') {
          echo 'BUILD EXECUTION STARTED'
          sh "cp config/.env.prod .env"
          sh "docker build -t registry.gitlab.com/ardhi.ansyah2662/qonstanta-auth:prod-${IMAGE_TAG} ."
          sh "docker login registry.gitlab.com -u ${UID_REPO_USR} -p ${UID_REPO_PSW}"
          sh "docker push registry.gitlab.com/ardhi.ansyah2662/qonstanta-auth:prod-${IMAGE_TAG}"
        }
      }
    }
    stage('Deploy to Production') {
      when {
        branch 'main'
      }
      steps {
        container(name: 'git', shell: '/bin/sh') {
          sh '''#!/bin/sh
          git --version
          git config --global user.email "achmadmauliddin2@gmail.com"
          git config --global user.name "achmad-acm11"
          cd ..
          git clone https://${UID_REPO_USR}:${UID_REPO_PSW}@gitlab.com/achmad-acm11/argocd-qonstanta-config.git -b main
          cd argocd-qonstanta-config/production
          sed -i "s/${APP_NAME}.*/${APP_NAME}:prod-${IMAGE_TAG}/g" account-qonstanta.yaml
          cat account-qonstanta.yaml
          git add account-qonstanta.yaml
          git commit -m "Update account-qonstanta.yaml prod ${IMAGE_TAG}"
          git push -f https://${UID_REPO_USR}:${UID_REPO_PSW}@gitlab.com/achmad-acm11/argocd-qonstanta-config.git main
          echo 'FINISH'
          '''
        }
      }
    }
  }
}
