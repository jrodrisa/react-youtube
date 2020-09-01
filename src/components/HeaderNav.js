import React, {useState} from 'react';
import {Form, Icon, Image, Input, Menu} from 'semantic-ui-react';
import '../style/HeaderNav.scss';
import logo from '../style/image/logo.jpg';

const HeaderNav = (props) => {

    const [term, setTerm]  = useState('')

    const handleChange = event => {
        setTerm(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log("cridant la api")
        props.handleFormSubmit(term)
    }

    return (
      <Menu borderless className='top-menu' fixed='top'>
        <Menu.Item header className='logo'>
            <Image src={logo} size='tiny'/>
        </Menu.Item>
        <Menu.Menu className='nav-container'>
          <Menu.Item className='search-input'>
            <Form onSubmit={handleSubmit} className='ui form'>
              <Form.Field>
                <Input 
                    placeholder="Search" 
                    onChange={handleChange} 
                    name='video-search' 
                    type="text" 
                    value={term}
                    size='small'
                    action='Search'
                />
              </Form.Field>
            </Form>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Icon className='header-icon' name='video camera' size='large'/>
            </Menu.Item>
            <Menu.Item>
              <Icon className='header-icon' name='grid layout' size='large'/>
            </Menu.Item>
            <Menu.Item>
              <Icon className='header-icon' name='chat' size='large'/>
            </Menu.Item>
            <Menu.Item>
              <Icon className='header-icon' name='alarm' size='large'/>
            </Menu.Item>
            <Menu.Item name='avatar'>
              <Image src='http://via.placeholder.com/80x80' avatar/>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Menu>
      </Menu>
    );
  }

export default HeaderNav;