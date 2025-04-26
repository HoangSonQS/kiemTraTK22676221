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
            <li className="has-dropdown">
              <a href="/gioi-thieu">GIỚI THIỆU</a>
              <ul className="dropdown-menu">
                <li><a href="/gioi-thieu/gioi-thieu-chung">Giới thiệu chung</a></li>
                <li><a href="/gioi-thieu/tam-nhin-su-mang">Tầm nhìn - Sứ mạng</a></li>
                <li><a href="/gioi-thieu/triet-ly">Triết lý giáo dục</a></li>
                <li><a href="/gioi-thieu/phuong-cham">Phương châm hoạt động</a></li>
                <li><a href="/gioi-thieu/gia-tri">Giá trị cốt lõi</a></li>
                <li><a href="/gioi-thieu/chinh-sach">Chính sách chất lượng</a></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <a href="/dao-tao">ĐÀO TẠO</a>
              <ul className="dropdown-menu">
                <li><a href="/dao-tao/dai-hoc">Chuyên Trang Đào Tạo</a></li>
                <li><a href="/dao-tao/sau-dai-hoc">Đào tạo Quốc Tế</a></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <a href="/tuyen-sinh">TUYỂN SINH</a>
              <ul className="dropdown-menu">
                <li><a href="/tuyen-sinh/dai-hoc">Tuyển sinh Đại học</a></li>
                <li><a href="/tuyen-sinh/sau-dai-hoc">Tuyển sinh Sau đại học</a></li>
                <li><a href="/tuyen-sinh/van-bang-2">Tuyển sinh Văn bằng 2</a></li>
                <li><a href="/tuyen-sinh/lien-thong">Tuyển sinh Liên thông</a></li>
              </ul>
            </li>
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