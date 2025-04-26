import React from 'react'

function Sidebar() {
  const menuItems = [
    { id: 1, title: 'LÃNH ĐẠO', path: '/lanh-dao' },
    { id: 2, title: 'CÁC PHÒNG BAN', path: '/phong-ban' },
    { id: 3, title: 'CÁC KHOA', path: '/khoa' },
    { id: 4, title: 'CÁC VIỆN', path: '/vien' },
    { id: 5, title: 'CÁC TRUNG TÂM', path: '/trung-tam' },
    { id: 6, title: 'CÁC PHÂN HIỆU', path: '/phan-hieu' },
    { id: 7, title: 'ĐOÀN THỂ', path: '/doan-the' },
  ]

  return (
    <aside className="sidebar">
      <div className="organization-structure">
        <h3>CƠ CẤU TỔ CHỨC</h3>
        <ul>
          {menuItems.map(item => (
            <li key={item.id}>
              <a href={item.path}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar