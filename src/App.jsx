import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/Home/Home.jsx'
import AboutMe from './pages/AboutMe/AboutMe.jsx'
import ContactUs from './pages/ContactUs/ContactUs.jsx'
import TechnicalConcepts from './pages/TechnicalConcepts/TechnicalConcepts.jsx'
import Kubernetes from './pages/Kubernetes/Kubernetes.jsx'
import AIGuide from './pages/AIGuide/AIGuide.jsx'
import Ansible from './pages/Ansible/Ansible.jsx'
import AWS from './pages/AWS/AWS.jsx'
import VMWare from './pages/VMWare/VMWare.jsx'
import GitHub from './pages/GitHub/GitHub.jsx'
import Docker from './pages/Docker/Docker.jsx'
import Jenkins from './pages/Jenkins/Jenkins.jsx'
import InterviewQuestions from './pages/InterviewQuestions/InterviewQuestions.jsx'
import Linux from './pages/InterviewQuestions/LinuxIntQsns.jsx'
import CCIDIntQsns from './pages/InterviewQuestions/CICDIntQsns.jsx'
import DevOpsIntQsns from './pages/InterviewQuestions/DevOpsIntQsns.jsx'
import JenkinsIntQsns from './pages/InterviewQuestions/JenkinsIntQsns.jsx'
import Miscellaneous from './pages/InterviewQuestions/Miscellaneous.jsx'
import ConceptPage from './pages/ConceptPage/ConceptPage.jsx'
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions.jsx'
import Footer from './components/Footer/Footer.jsx'
import Azure from './pages/Azure/Azure.jsx'
import Cloud from './pages/Cloud/Cloud.jsx'
import OpenShift from './pages/OpenShift/OpenShift.jsx'
import GCP from './pages/GCP/GCP.jsx'
import MigrationConcepts from './pages/MigrationConcepts/MigrationConcepts.jsx'
import Terraform from './pages/Terraform/Terraform.jsx'
import RefArticles from './pages/RefArticles/RefArticles.jsx'
import DevOpsCmds from './pages/InterviewQuestions/DevOpsCmds.jsx'

function App() {
 

  return (
    <>
   <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe/>} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/technical-concepts" element={<TechnicalConcepts />} />
        <Route path="/kubernetes" element={<Kubernetes />}/>
        <Route path='/ai-guide' element={<AIGuide />} />
        <Route path="/concept/:name" element={<ConceptPage />} />
        <Route path="/ansible" element={<Ansible />} />
        <Route path="/aws" element={<AWS />} />
        <Route path="/azure" element={<Azure />} />
        <Route path="/vmware" element={<VMWare />}/>
        <Route path="/docker" element={<Docker />} />
        <Route path="/github" element={<GitHub />} />
        <Route path="/jenkins" element={<Jenkins/>}/>
        <Route path="/terraform" element={<Terraform/>}/>
        <Route path="/gcp" element={<GCP />}/>
        <Route path="/openshift" element={<OpenShift />}/>
        <Route path="/migration-concepts" element={<MigrationConcepts/>}/>
        <Route path="/reference-articles" element={<RefArticles />}/>
        <Route path="/cloud" element={<Cloud/>}/>
         {/* Interview route with nested subroutes */}
        <Route path="/interview" element={<InterviewQuestions />}>
          <Route path="/interview/linux" element={<Linux />} />
          <Route path="/interview/ccid" element={<CCIDIntQsns />} />
          <Route path="/interview/devops" element={<DevOpsIntQsns />} />
          <Route path="/interview/jenkins-interview-qsns" element={<JenkinsIntQsns />} />
          <Route path="/interview/miscellaneous" element={<Miscellaneous />} />
          <Route path="/interview/devopscmds" element={<DevOpsCmds />}/>
        </Route>
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App
