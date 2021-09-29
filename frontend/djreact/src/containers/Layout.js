import React from 'react'
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import {Link} from 'react-router-dom'
// import { Anchor } from 'antd';

// const { Link } = Anchor;

const { Header, Content, Footer } = Layout;


const CustomLayout = (props) => {
    return (
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key={1}><Link to='/'>Home</Link> </Menu.Item>
            <Menu.Item key={2}><Link to='/new'>New Post</Link> </Menu.Item>
            {
              !props.token ? <Menu.Item key={4}><Link to='/login'>Login</Link> </Menu.Item> :
              <Menu.Item key={3}><Button type='primary'>Logout</Button></Menu.Item>
            }
            
          </Menu>
          
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to='/new'>New Post</Link></Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
             {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}></Footer>
      </Layout>
    )
}

export default CustomLayout
  




