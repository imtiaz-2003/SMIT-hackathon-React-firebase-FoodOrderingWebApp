import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserShield, FaPlusCircle, FaListAlt } from 'react-icons/fa';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <div className="container" id='adminContainer'>
        <div className="row ">
          <div className="col">
            <Layout id='layout'>
              <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                  theme="dark"
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  items={[
                    {
                      key: '1',
                      icon: <UserOutlined />,
                      label: <Link to="/">Dashboard</Link>,
                    },
                    {
                      key: '2',
                      icon: <UploadOutlined />,
                      label: <Link to="createItem">Add Food Items</Link>,
                    },
                    {
                      key: '3',
                      icon: <VideoCameraOutlined />,
                      label: <Link to="showFoods">Show Food Items</Link>,
                    },
                    {
                      key: '4',
                      icon: <VideoCameraOutlined />,
                      label: <Link to="/dashboard/showusers">Show Customers</Link>,
                    },
                    {
                      key: '5',
                      icon: <VideoCameraOutlined />,
                      label: <Link to="/dashboard/showorders">Show Orders</Link>,
                    },
                    {
                      key: '5',
                      icon: <VideoCameraOutlined />,
                      label: <Link to="/dashboard/showreservation">Show Reservations</Link>,
                    },

                  ]}
                />
              </Sider>
              <Layout>
                <Header
                  style={{
                    padding: 0,
                    background: colorBgContainer,
                  }}
                >
                  <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                      fontSize: '16px',
                      width: 64,
                      height: 64,
                    }}
                  />
                </Header>
                <Content
                  className='xs:w-full sm:w-full'
                  style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                  }}
                >
                  {/* content start here  */}

                  <div className="text-center xs:my-1 sm:my-1">
                    <div className="xs:w-full sm:w-full xs:h-[300px] sm:h-[300px] lg:h-auto xs:text-left sm:text-left bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-6 rounded-lg 
                    shadow-lg flex items-center justify-center">
                      <FaUserShield className="text-white lg:text-5xl xs:text-xl sm:text-xl mr-4 pb-2" />
                      <h2 className='xs:text-sm sm:text-sm lg:text-4xl font-semibold mb-4 pt-1 text-white'>
                        Welcome to Admin Dashboard
                      </h2>
                    </div>

                    {/* Cards for Add Food Items and Show Food Items */}
                    <div className="flex flex-wrap justify-center mt-2 gap-8 hidden md:flex">
                      {/* Add Food Items Card */}
                      <div className="max-w-xs rounded-lg shadow-lg overflow-hidden bg-white transform transition-transform duration-200 hover:scale-105">
                        <div className="flex justify-center items-center p-4">
                          <img
                            src='https://icons.iconarchive.com/icons/custom-icon-design/flatastic-11/512/Shopping-basket-add-icon.png'
                            alt="Add Food"
                            className="w-32 h-32 items-center object-cover rounded-full"
                          />
                        </div>
                        <div className="p-3">
                          <p className="text-sm font-semibold text-gray-800 mb-4">Want To Add New Food Items</p>
                          <Link
                            to="/createItem"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center"
                          >
                            <FaPlusCircle className="mr-2" />
                            Add Food Items
                          </Link>
                        </div>
                      </div>

                      {/* Show Food Items Card */}
                      <div className="max-w-xs rounded-lg shadow-lg overflow-hidden bg-white transform transition-transform duration-200 hover:scale-105">
                        <div className="flex justify-center items-center p-4">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXkEmlMOlJ4oDwPmnqMQdYUPeQ1ry9wHIZHQ&s" // Image for Show Food Items
                            alt="Show Foods"
                            className="w-32 h-32 items-center object-cover rounded-full"
                          />
                        </div>
                        <div className="p-3">
                          <p className="text-sm font-semibold text-gray-800 mb-4 text-left">Click Below to Show All Food Items</p>
                          <Link
                            to="showFoods"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center"
                          >
                            <FaListAlt className="mr-2" />
                            Show Food Items
                          </Link>
                        </div>
                      </div>
                    </div>

                  </div>
                </Content>
              </Layout>
            </Layout>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
