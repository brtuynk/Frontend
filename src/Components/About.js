import React from 'react'
import './About.css'

function About() {
  return (
    <div id="about">
      <h2 className="about-title">About</h2>
      <div className="about-data">
        <div className="about-img">
          <img src="assets/about.jpeg" alt="" />
        </div>
        <div>
          <h2 className="about-subtitle">I'am Berat UYANIK</h2>
          <p className="about-text">
          I am a graduate from Yıldız Technical University industrial engineering and information technologies. 
          I have been actively working in the industry as a Devops engineer for 3 years. I am currently working 
          as Devops Team leader in Westerops IT, but also working as a Devops engineer at TurkNet. I actively use 
          current technologies and cloud environments. I have experience in technologies such as Docker - Kubernetes
          - ELK - Nginx - IIS - HaProxy - NewRelic - Prometheus - Grafana - Zabbix - Azure Devops - Jenkins - Gitlab
           CI/CD and I also master many cloud services on AWS.
            </p>
          <p><b>Languages and tools known:</b> </p>
          <p>
            <img className='tech-image' src="https://techtalent.ca/wp-content/uploads/2020/12/1_b_al7C5p26tbZG4sy-CWqw.png" alt='aws'/>
            <img className='tech-image' src="https://www.clipartmax.com/png/full/126-1266864_docker-docker-php.png" alt='docker'/>
            <img className='tech-image' src="https://cncf-branding.netlify.app/img/projects/kubernetes/icon/color/kubernetes-icon-color.png" alt='k8s'/>
            <img className='tech-image' src="http://assets.stickpng.com/images/58480984cef1014c0b5e4902.png" alt="jenkins" />
            <img className='tech-image' src="https://coralogix.com/wp-content/uploads/2021/02/Prometheus@2x.png" alt='prometheus'/>
            <img className='tech-image' src="https://www.clipartmax.com/png/full/450-4503037_grafana-prometheus-grafana-logo.png" alt='grafana'/>
            <img className='tech-image' src="https://www.clipartmax.com/png/full/142-1427076_nginx-nginx-logo-svg.png" alt='nginx'/>
            <img className='tech-image' src="https://www.clipartmax.com/png/full/220-2204780_illustration-for-add-data-to-elasticsearch-elastic-search-logo-png.png" alt='elk'/>
            <img className='tech-image' src="https://cdn.worldvectorlogo.com/logos/django.svg" alt='django'/>
            <img className='tech-image' src="https://cdn.icon-icons.com/icons2/2699/PNG/512/zabbix_logo_icon_167937.png" alt='zabbix'/>
            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/5c058a388828bb5fde0bcafd4bc867b5bb3f26f3/topics/python/python.png" alt='python'/>
            <img className='tech-image' src="https://www.clipartmax.com/png/full/112-1128947_view-more-info-new-relic-new-relic-logo-png.png" alt="New Relic" />
            <img className='tech-image' src="http://assets.stickpng.com/images/5847f981cef1014c0b5e48be.png" alt="git" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
