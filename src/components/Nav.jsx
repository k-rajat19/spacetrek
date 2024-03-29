import {React,useState} from 'react'
import {Link} from 'react-router-dom'
import '../scss/nav.css'
import bellimg from '../images/bell.png'

export default function Nav() {
    const [open, setOpen] = useState('');  
    const [clicked, setClicked] = useState('');  
    const account_settings=()=>{
        open===''?setOpen('true'):setOpen(''); 
        if(clicked){
            setClicked('');
        }

    }
    const change_password=()=>{
        clicked===''?setClicked('true'):setClicked(''); 
    }
    const active= (i)=>{
        let element=document.getElementsByClassName('nav-tab');
        for(var  j=0 ; j<element.length; j++){ 
             i===j?element[j].classList.add('active'):element[j].classList.remove('active');      
        }
   }

    return (
        <>
       <div id="nav">    
          <Link to='/spacetrek' onClick={()=>{active(0)}} className="nav-tab active">
              <div></div>
              <div>Dashboard</div>
          </Link>
          <Link to='/spacetrek/class' onClick={()=>{active(1)}} className="nav-tab">
              <div></div>
              <div>Class</div>
          </Link>
          <Link to='/spacetrek/devices'onClick={()=>{active(2)}} className="nav-tab">
              <div></div>
              <div>Devices</div>
          </Link>
          <Link to='/spacetrek/experiments' onClick={()=>{active(3)}} className="nav-tab">
              <div></div>
              <div>Experiments</div>
          </Link>
            <div className="nav-content" onClick={account_settings}>
                     <div className="nav-content_info">
                         <div>Test Teacher</div>
                         <div>test.teacher@gmail.com</div>
                     </div>
                     <div className="nav-content_img">
                         <img src={bellimg} alt="bell" />
                     </div>
            </div>
         {
             open&&
            <div id="account-setting">
               <div onClick={change_password}>Change Password</div>
               <div>Notification</div>
               <div>Logout</div>
            </div>
         }  
        {
            clicked&&
         <form id="change-password">
             <div>Change Password</div>
             <input placeholder='Enter New Password' type="text" />
             <input placeholder='Confirm New Password' type="text" />
             <button type='submit'>Submit</button>
         </form>  
        }    
       </div>
       {/* For Mobile devices */}
       <nav role="navigation" className='header-mobile'>
                   <div id="menuToggle">
                   <input type="checkbox" />
                   <span></span>
                   <span></span>
                   <span></span>
                   <ul id="menu">
                     <Link to="/dashboard"><li>Dashboard</li></Link>
                     <Link to="/class"><li>Class</li></Link>
                     <Link to="/devices"><li>Devices</li></Link>
                     <Link to="/experiments"><li>Experiments</li></Link>
                     <div className="mobile-header-content">
                     <div className="mobile-header-content-img">
                         <img src={bellimg} alt="bell" />
                     </div>
                     <div className="mobile-header-content-info">
                         <div>
                         Test Teacher
                         
                         </div>
                         <div>test.teacher@gmail.com</div>
                     </div>
                    </div>
                   </ul>
                 </div>
               </nav>
       </>
    )
}
