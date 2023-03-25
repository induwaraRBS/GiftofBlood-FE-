import React ,{useState} from 'react';
import ProfileItems from './ProfileItems';
import { Nav,NavItem,NavLink,TabContent,TabPane,Row,Col, Card ,Button} from 'reactstrap';
import './Profile.css'
import { UserAuth } from '../../Server/context/Authcontext';
import { useNavigate } from 'react-router-dom';


function Profile() {
    
    const navigate = useNavigate();

    const {logout} = UserAuth();
    // const user = UserAuth();

    const handleLogout = async () => {
      try{
          await logout()
          navigate('/login');
          console.log('You are logged out')
          alert("Are You sure You want to Log out")
      }catch (e) {
        console.log(e.message)
      }
    };
    
    const[activeTab,setActiveTab] = useState('1');

    const toggleTab = (tab) => {
      if(activeTab !== tab) setActiveTab(tab);
    };
 
  const handleProfileInfoClick = () => {
    toggleTab('1');
  };

  const handleHealthDetailsClick = () => {
    toggleTab('2');
  };

  const profilelist = [{
    "id":1,
    "name": {
      "title": "Miss",
      "first": "Jennie",
      "last": "Nichols"
    },
    "location": {
      "city": "Billings",
      },
      "email": "jennie.nichols@example.com",
      "blood":"A+",
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      }
  },
  {
    "id":2,
    "name": {
      "title": "Miss",
      "first": "Maneeshi",
      "last": "Veemansa"
    },
    "location": {
      "city": "Bandarawela",
      },
      "email": "ManeeshiVeemansa@gmail.com",
      "blood":"O+",
      "dob": {
        "date": "1999-055-15T15:13:16.688Z",
        "age": 23
      }
  },
  {
    "id":3,
    "name": {
      "title": "Miss",
      "first": "yashoda",
      "last": "Asirimali"
    },
    "location": {
      "city": "Diyathalawa",
      },
      "email": "Yashranathunga@example.com",
      "blood":"A+",
      "dob": {
        "date": "1999-12-09T15:13:16.688Z",
        "age": 23
      }
  }
];
 
const ProfileListComponent = () => {
  return profilelist.map((aName) =>{
    return(
    <ProfileItems
    key={aName.id}
    name={`${aName.name.first} ${aName.name.last}`}
    city={aName.location.city}
    email={aName.email}
    blood={aName.blood}
    dob={aName.dob.date} 
    />
   );
  });
}

  return (
    <div className='profile_page'>
      <h2>Profile</h2>
      <div className='profile_settings'>
        <Row>
          <Col>
           <Button onClick={handleLogout} color='danger'>LogOut</Button>
          </Col>
        </Row>
      </div>
      <hr/>
      <div className=' profile_box'>
            <Nav tabs>
          <NavItem>
            <NavLink
              className={activeTab === '1' ? 'active' : ''}
              onClick={handleProfileInfoClick}
             
            >
             Profile Information
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === '2' ? 'active' : ''}
              onClick={handleHealthDetailsClick}
            >
              Health Details
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
    <TabPane tabId="1">
      <Row>
        <Col sm="12">
        <hr/>
          <h4>
            Tab 1 Contents
          </h4>
          <ul>
            {ProfileListComponent()}
              
            </ul>
        </Col>
      </Row>
    </TabPane>

    <TabPane tabId="2">
      <Row>
        <Col sm="12">
        <hr/>
          <h4>
            Tab 2 Contents
          </h4>
          <ul>
              {/* <ProfileItems name={`${profilelist.name.first} ${profilelist.name.last}`}
              city={profilelist.location.city}
              email={profilelist.email}
              blood={profilelist.blood}
              dob={profilelist.dob.date} 
              /> */}
             
            </ul>
        </Col>
      </Row>
    </TabPane>
    </TabContent>




          
          
      </div>
        
    </div>
  )
}

export default Profile