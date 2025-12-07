"use client";

import { PropsWithChildren } from "react";
import { ConfigProvider, Layout } from "antd";
import MainSider from "./mainSider";

const { Content } = Layout;
const MainLayout = ({ children }: PropsWithChildren) => {
  // green: "#4CAF50", // 76, 175, 80
  // yellow: "#FBC02D", // 251, 192, 45
  // background: "#FFF8D6",
  // dark: "#2E2E2E", // 46, 46, 46
  return (
    <ConfigProvider
      theme={{
        hashed: false,
        token: {},
        components: {
          Layout: {
            siderBg: "#4caf50",
            lightSiderBg: "#4caf50",
            bodyBg: "#FFF8D6",
          },
          Menu: {
            itemHoverBg: "rgba(255,255,255,0.15)",
            itemColor: "#FFFFFF",
            itemHoverColor: "#FFFFFF",
            itemSelectedColor: "#FFFFFF",
            itemSelectedBg: "rgba(255,255,255,0.15)",
            activeBarBorderWidth: 0,
            subMenuItemSelectedColor: "#FFFFFF",
          },
          Table: {
            headerBg: "#FFFFFF",
            borderColor: "rgba(76, 175, 80, 0.30)", //"rgba(251, 192, 45, 0.20)",
            headerSplitColor: "rgba(255, 255, 255, 0)",
          },
          Input: {
            colorBorder: "rgba(251, 192, 45, 0.40)",
            hoverBorderColor: "rgba(251, 192, 45, 0.40)",
            activeBorderColor: "rgba(251, 192, 45, 0.50)",
            activeShadow: "0 0 0 2px rgba(251, 192, 45, 0.50)",
          },
          Select: {
            colorBorder: "rgba(251, 192, 45, 0.40)",
            hoverBorderColor: "rgba(251, 192, 45, 0.40)",
            activeBorderColor: "rgba(251, 192, 45, 0.50)",
            activeOutlineColor: "rgba(251, 192, 45, 0.40)",
            optionSelectedBg: "rgba(251,193,45,0.3)",
          },
          DatePicker: {
            colorBorder: "rgba(251, 192, 45, 0.40)",
            hoverBorderColor: "rgba(251, 192, 45, 0.40)",
            activeBorderColor: "rgba(251, 192, 45, 0.50)",
            activeShadow: "0 0 0 2px rgba(251, 192, 45, 0.50)",
            colorPrimary: "rgba(251,193,45,1)",
            colorTextLightSolid: "#000000",
          },
          Form: {
            labelColor: "rgba(46, 46, 46, 0.70)",
            itemMarginBottom: 0,
          },
          Drawer: {
            colorBgElevated: "#4caf50",
          },
        },
      }}
    >
      <Layout className="h-screen">
        <MainSider></MainSider>
        <Content className="overflow-scroll">{children}</Content>
      </Layout>
    </ConfigProvider>
  );
};

export default MainLayout;
