import React from 'react'
import logo from '../assets/images/logo.jpg'

function Header() {
  return (
    <>
      <div className="top-header">
        <div className="top-header-content">
          <a href="/e-office">E-OFFICE</a>
          <a href="/email">EMAIL</a>
          <a href="/thu-vien">THƯ VIỆN - THÔNG TIN</a>
          <a href="/lien-he">KẾT NỐI | LIÊN HỆ</a>
        </div>
      </div>
      <header className="main-header">
        <div className="logo-container">
          <img src={logo} alt="IUH Logo" />
          <div className="header-text">
            <h1>BỘ CÔNG THƯƠNG</h1>
            <h2>ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</h2>
            <p>Đổi mới tư duy, làm giàu thêm tri thức - đời sống</p>
          </div>
        </div>
        <nav className="main-nav">
          <ul>
            <li><a href="/">TRANG CHỦ</a></li>
            <li><a href="/gioi-thieu">GIỚI THIỆU</a></li>
            <li><a href="/dao-tao">ĐÀO TẠO</a></li>
            <li><a href="/tuyen-sinh">TUYỂN SINH</a></li>
            <li><a href="/nghien-cuu">NGHIÊN CỨU</a></li>
            <li><a href="/sinh-vien">SINH VIÊN</a></li>
            <li><a href="/giang-vien">GIẢNG VIÊN</a></li>
            <li><a href="/van-bang">VĂN BẰNG</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header