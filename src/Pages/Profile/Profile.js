import React ,{useState} from 'react';
import ProfileItems from './ProfileItems';
import { Nav,NavItem,NavLink,TabContent,TabPane,Row,Col, Card ,Button, Form, Label, Input, FormGroup} from 'reactstrap';
import './Profile.css'
import { useNavigate } from 'react-router-dom';
import {db } from '../../Server/firebase';
import { addDoc,collection,doc,serverTimestamp,setDoc } from 'firebase/firestore';

function Profile() {
    
    const navigate = useNavigate();

    const [error,setError] =useState('')


    const[info,newinfo] = useState({
      weight:'',
      Updates:'',
      Height:'',
      email:'',
    });

    const handleInput = (e) =>{
      const id =e.target.id;
      const value = e.target.value;

      newinfo(prevData => ({...prevData,[id]:value}));
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      try{
       const res= await setDoc(doc(db,"healthudpates",res.healthupdates.uid),{
          ...info,
          timeStamp:serverTimestamp()
        });
      }catch(error){
        console.log(error);
      }
    }
  

    const handleLogout = async () => {
    
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

  const handleupdatehealth =() =>{
    toggleTab('3');
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
          <NavItem>
            <NavLink
              className={activeTab === '3' ? 'active' : ''}
              onClick={handleupdatehealth}
             
            >
             Profile Information
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
    <TabPane tabId="1">
      <Row>
        <Col sm="12">
        <hr/>
          <h4>
           Account Details
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
           Health Details
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

    <TabPane tabId="3">
      <Row>
        <Col sm="12">
        <hr/>
          <h4>
            Update Health Information
          </h4>
          <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input 
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email'
              value={info.email}
              onChange={handleInput}          />
          </FormGroup>
            <FormGroup>
              <Label>Weight</Label>
              <Input
            type="number"
            name="weight"
            id="weight"
            value={info.weight}
            onChange={handleInput}
            placeholder="Enter your weight in kilograms"
          />
            </FormGroup>
            <FormGroup>
              <Label>Height</Label>
              <Input
            type="number"
            name="weight"
            id="weight"
            value={info.Height}
            onChange={handleInput}
            placeholder="Enter your height in Centemeters"
          />
            </FormGroup>
            <FormGroup>
              <Label>Health Updates</Label>
              <Input
             type="text"
             name="Updates"
             id="Updates"
             value={info.heartRate}
             onChange={handleInput}
             placeholder="Enter your Health Updates"
             />
            </FormGroup>

            <FormGroup>
          <Label for="image">Upload Health files</Label>
          <Input
            type="file"
            name="image"
            id="image"
            onChange={handleInput}
          />
        </FormGroup>
        <Button type="submit" color="primary">Submit</Button>
          </Form>
        </Col>
      </Row>
    </TabPane>       

    </TabContent>




          
          
      </div>
        
    </div>
  )
}

export default Profile