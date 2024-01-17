import React from 'react'
import './blog.css'
import Projects from '../../assets/projects.svg'
import Member from '../../assets/member.svg'

const Blog = () => {
  return (
      <div className='saas__blog-container'>
        <div className='saas__blog-header'>
          <h2>Your Archive of progress</h2>
        </div>
        <div className='saas__blog-content'>
          <div className='saas__blog-content_projects'>
            <div className='saas__blog-content_projects-header'>
              <h4>Projects</h4>
              <p>Organize, follow, and archive.</p>
            </div>
            <div className='saas__blog-content_projects-image'>
              <img src={Projects} alt="" />
            </div>
          </div>
          <div className='saas__blog-content_members'>
            <div className='saas__blog-content_members-header'>
              <h4>Member profiles</h4>
              <p>Automatic portfolios of your work.</p>
            </div>
            <div className='saas__blog-content_members-image'>
              <img src={Member} alt="" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Blog