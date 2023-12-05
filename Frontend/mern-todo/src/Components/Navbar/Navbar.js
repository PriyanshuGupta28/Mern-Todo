import React from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  const handleMenuClick = (e) => {
    if (e.key === "logout") {
      // Handle logout logic
      console.log("Logout clicked");
    }
    // Add logic for other menu items if needed
  };

  return (
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        onClick={handleMenuClick}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<AppstoreOutlined />}>
          Categories
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          Profile
        </Menu.Item>
        <Menu.Item
          key="logout"
          icon={<LogoutOutlined />}
          style={{ float: "right" }}
        >
          Logout
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
