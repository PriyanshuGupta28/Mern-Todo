import React from "react";
import {
  AlipayOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoOutlined,
  UserOutlined,
  WeiboOutlined,
} from "@ant-design/icons";
import {
  LoginFormPage,
  ProConfigProvider,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from "@ant-design/pro-components";
import { Button, Divider, Space, Tabs, message, theme } from "antd";
import { ConfigProvider } from "antd";

import en_US from "antd/locale/en_US";

import { useState } from "react";

const iconStyles = {
  color: "rgba(0, 0, 0, 0.2)",
  fontSize: "18px",
  verticalAlign: "middle",
  cursor: "pointer",
};

const Page = () => {
  const [loginType, setLoginType] = useState("phone");
  const { token } = theme.useToken();
  return (
    <div>
      <div
        style={{
          backgroundColor: "white",
          height: "100vh",
        }}
      >
        <LoginFormPage
          backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
          logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
          title="Github"
          containerStyle={{
            backgroundColor: "rgba(0, 0, 0,0.65)",
            backdropFilter: "blur(4px)",
          }}
          subTitle="World's largest code hosting platform"
          activityConfig={{
            style: {
              boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
              color: token.colorTextHeading,
              borderRadius: 8,
              backgroundColor: "rgba(255,255,255,0.25)",
              backdropFilter: "blur(4px)",
            },
            title: "Activity Title, can be configured with image",
            subTitle: "Activity introduction description",
            action: (
              <Button
                size="large"
                style={{
                  borderRadius: 20,
                  background: token.colorBgElevated,
                  color: token.colorPrimary,
                  width: 120,
                }}
              >
                Go check it out
              </Button>
            ),
          }}
          actions={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Divider plain>
                <span
                  style={{
                    color: token.colorTextPlaceholder,
                    fontWeight: "normal",
                    fontSize: 14,
                  }}
                >
                  Other login methods
                </span>
              </Divider>
              <Space align="center" size={24}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    height: 40,
                    width: 40,
                    border: "1px solid " + token.colorPrimaryBorder,
                    borderRadius: "50%",
                  }}
                >
                  <AlipayOutlined style={{ ...iconStyles, color: "#1677FF" }} />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    height: 40,
                    width: 40,
                    border: "1px solid " + token.colorPrimaryBorder,
                    borderRadius: "50%",
                  }}
                >
                  <TaobaoOutlined style={{ ...iconStyles, color: "#FF6A10" }} />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    height: 40,
                    width: 40,
                    border: "1px solid " + token.colorPrimaryBorder,
                    borderRadius: "50%",
                  }}
                >
                  <WeiboOutlined style={{ ...iconStyles, color: "#1890ff" }} />
                </div>
              </Space>
            </div>
          }
        >
          <Tabs
            centered
            activeKey={loginType}
            onChange={(activeKey) => setLoginType(activeKey)}
          >
            <Tabs.TabPane key={"account"} tab={"Account Password Login"} />
            <Tabs.TabPane key={"phone"} tab={"Mobile Number Login"} />
          </Tabs>
          {loginType === "account" && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: "large",
                  prefix: (
                    <UserOutlined
                      style={{
                        color: token.colorText,
                      }}
                      className={"prefixIcon"}
                    />
                  ),
                }}
                placeholder={"Username: admin or user"}
                rules={[
                  {
                    required: true,
                    message: "Please enter your username!",
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: "large",
                  prefix: (
                    <LockOutlined
                      style={{
                        color: token.colorText,
                      }}
                      className={"prefixIcon"}
                    />
                  ),
                }}
                placeholder={"Password: ant.design"}
                rules={[
                  {
                    required: true,
                    message: "Please enter your password!",
                  },
                ]}
              />
            </>
          )}
          {loginType === "phone" && (
            <>
              <ProFormText
                fieldProps={{
                  size: "large",
                  prefix: (
                    <MobileOutlined
                      style={{
                        color: token.colorText,
                      }}
                      className={"prefixIcon"}
                    />
                  ),
                }}
                name="mobile"
                placeholder={"Mobile Number"}
                rules={[
                  {
                    required: true,
                    message: "Please enter your mobile number!",
                  },
                  {
                    pattern: /^1\d{10}$/,
                    message: "Incorrect mobile number format!",
                  },
                ]}
              />
              <ProFormCaptcha
                fieldProps={{
                  size: "large",
                  prefix: (
                    <LockOutlined
                      style={{
                        color: token.colorText,
                      }}
                      className={"prefixIcon"}
                    />
                  ),
                }}
                captchaProps={{
                  size: "large",
                }}
                placeholder={"Enter Verification Code"}
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `${count} ${"Get Code"}`;
                  }
                  return "Get Code";
                }}
                name="captcha"
                rules={[
                  {
                    required: true,
                    message: "Please enter the verification code!",
                  },
                ]}
                onGetCaptcha={async () => {
                  message.success(
                    "Verification code sent successfully! The code is: 1234"
                  );
                }}
              />
            </>
          )}
          <div
            style={{
              marginBlockEnd: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              Auto Login
            </ProFormCheckbox>
            <a
              style={{
                float: "right",
              }}
            >
              Forgot Password
            </a>
          </div>
        </LoginFormPage>
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <ProConfigProvider dark>
      <ConfigProvider locale={en_US}>
        <Page />
      </ConfigProvider>
    </ProConfigProvider>
  );
};

export default Login;
