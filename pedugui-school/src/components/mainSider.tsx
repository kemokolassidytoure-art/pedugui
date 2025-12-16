"use client";
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuOutlined,
  MenuUnfoldOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
  TrophyOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Drawer, Layout, Menu } from "antd";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import Link from "next/link";
import { ReactNode, useState } from "react";
const { Sider } = Layout;

interface BaseMenuItem {
  key: string;
  path?: string;
  icon?: ReactNode;
  label: ReactNode;
  collapsedIcon?: ReactNode;
  children?: BaseMenuItem[];
}

const MainSider = () => {
  const [mobileDrawerVisible, setMobileDrawerVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const items: BaseMenuItem[] = [
    {
      key: "1",
      collapsedIcon: <HomeOutlined />,
      icon: (
        <HomeOutlined className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-sm" />
      ),
      label: "Élève",
      children: [
        {
          key: "11",
          label: "Enregistrer",
          path: "/student/register",
          icon: (
            <HomeOutlined className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-sm" />
          ),
        },
      ],
    },
    {
      key: "2",
      collapsedIcon: <HomeOutlined />,
      icon: (
        <HomeOutlined className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-sm" />
      ),
      label: "Enseignant",
      children: [
        {
          key: "21",
          label: "Enregistrer",
          path: "/teacher/register",
          icon: (
            <HomeOutlined className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-sm" />
          ),
        },
      ],
    },
    {
      key: "3",
      label: "Paramètres",
      path: "/settings",
      icon: (
        <HomeOutlined className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-sm" />
      ),
    },
  ];

  const baseItemToAntdItem = (item: BaseMenuItem): ItemType<MenuItemType> => {
    let antdChildren: ItemType<MenuItemType>[] | undefined;
    if (item.children?.length) {
      antdChildren = item.children.map(baseItemToAntdItem);
    }
    return {
      key: item.key,
      // icon: item.icon,
      label: item.path ? (
        <Link href={item.path}>{item.label}</Link>
      ) : (
        item.label
      ),
      children: antdChildren,
    };
  };

  const antdMenuItems = items.map(baseItemToAntdItem);

  return (
    <>
      <button
        className="md:hidden fixed top-3 left-3 bg-portal-green text-white w-10 h-10 flex items-center justify-center rounded-xl shadow z-50"
        onClick={() => setMobileDrawerVisible(true)}
      >
        <MenuOutlined />
      </button>

      <Drawer
        placement="left"
        open={mobileDrawerVisible}
        styles={{
          wrapper: { width: "256px" },
        }}
        zIndex={1000}
        onClose={() => setMobileDrawerVisible(false)}
        mask={{ blur: false }}
      >
        <div className="mt-9 flex flex-col items-start gap-8">
          <div className="flex flex-col items-center gap-3">
            <div>
              <img src="logo.png" />
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">
                🎓
              </div>
              <div className="">
                <p className="font-semibold text-lg leading-tight">
                  Portail Scolaire
                </p>
                <p className="text-xs text-white/80">Bienvenue!</p>
              </div>
            </div>
          </div>
          <Menu
            mode="inline"
            items={antdMenuItems}
            style={{ background: "transparent" }}
          />
        </div>
      </Drawer>

      <Sider
        className={`hidden md:block text-white ${
          !collapsed ? "md:px-6 md:py-6" : ""
        }`}
        collapsible={true}
        collapsed={collapsed}
        collapsedWidth={80}
        width={256}
        trigger={null}
      >
        <button
          className="absolute top-4 right-[22px] w-9 h-9 rounded-xl bg-portal-yellow text-portal-dark flex items-center justify-center shadow cursor-pointer"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed && <MenuUnfoldOutlined />}
          {!collapsed && <MenuFoldOutlined />}
        </button>

        {collapsed && (
          <ul className="mt-14 space-y-1">
            {/* {collapsedItems.map((i) => {
              return (
                <li
                  key={i.key}
                  className="flex items-center justify-center px-4 py-2"
                >
                  <div className="w-8 h-8 m-auto bg-white/10 hover:bg-white/20 flex justify-center items-center rounded-xl cursor-pointer">
                    {i.collapsedIcon}
                  </div>
                </li>
              );
            })} */}
          </ul>
        )}
        {!collapsed && (
          <div className="mt-9 flex flex-col items-start gap-8">
            <div className="flex flex-col items-center gap-3">
              <div>
                <img src="/logo.png" />
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">
                  🎓
                </div>
                <div className="">
                  <p className="font-semibold text-lg leading-tight">
                    Portail Scolaire
                  </p>
                  <p className="text-xs text-white/80">Bienvenue!</p>
                </div>
              </div>
            </div>
            <Menu
              mode="inline"
              items={antdMenuItems}
              style={{ background: "transparent" }}
            />
          </div>
        )}
      </Sider>
    </>
  );
};

export default MainSider;
