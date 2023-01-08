import React from 'react'
import './About.css'

function About() {
  return (
    <div id="about">
      <h2 className="about-title">About</h2>
      <div className="about-data">
        <div className="about-img">
          <img src="assets/about2.jpg" alt="" />
        </div>
        <div>
          <h2 className="about-subtitle">I'm Berat UYANIK</h2>
          <p className="about-text">
          I am a graduate from Yıldız Technical University industrial engineering and information technologies. 
          I have been actively working in the industry as a Devops engineer for 4 years. I am currently working 
          as Devops Team leader in Westerops IT, but also working as a Devops engineer at TurkNet. I actively use 
          current technologies and cloud environments. I have experience in technologies such as Docker - Kubernetes
          - ELK - Nginx - IIS - HaProxy - NewRelic - Prometheus - Grafana - Zabbix - Azure Devops - Jenkins - Gitlab
           CI/CD and I also master many cloud services on AWS.
            </p>
          <p><b>Languages and tools known:</b> </p>
          <p>
            <img className='tech-image' src="assets/aws.png" alt='aws'/>
            <img className='tech-image' src="assets/docker.png" alt='docker'/>
            <img className='tech-image' src="assets/k8s.png" alt='k8s'/>
            <img className='tech-image' src="assets/alibaba.png" alt="alibabcloud" />
            <img className='tech-image' src="assets/jenkins.png" alt="jenkins" />
            <img className='tech-image' src="assets/prometheus.png" alt='prometheus'/>
            <img className='tech-image' src="assets/grafhana.png" alt='grafana'/>
            <img className='tech-image' src="assets/nginx.png" alt='nginx'/>
            <img className='tech-image' src="assets/elk.png" alt='elk'/>
            <img className='tech-image' src="assets/django.svg" alt='django'/>
            <img className='tech-image' src="assets/zabbix.png" alt='zabbix'/>
            <img className='tech-image' src="assets/python.png" alt='python'/>
            <img className='tech-image' src="assets/newrelic.png" alt="New Relic" />
            <img className='tech-image' src="assets/git.png" alt="git" />
            <img className='tech-image' src="assets/gitlab.png" alt="gitlab" />

          </p>
        </div>
      </div>
    </div>
  )
}

export default About
