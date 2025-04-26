import React from 'react'

function Sidebar() {
  const menuItems = [
    {
      id: 'lanh-dao',
      title: 'LÃNH ĐẠO',
      submenu: [
        { title: 'ĐẢNG ỦY', path: '/lanh-dao/dang-uy' },
        { title: 'BAN GIÁM HIỆU', path: '/lanh-dao/ban-giam-hieu' }
      ]
    },
    {
      id: 'phong-ban',
      title: 'CÁC PHÒNG BAN',
      submenu: [
        { title: 'PHÒNG TỔ CHỨC - HÀNH CHÍNH', path: '/phong-ban/to-chuc-hanh-chinh' },
        { title: 'PHÒNG TÀI CHÍNH - KẾ TOÁN', path: '/phong-ban/tai-chinh-ke-toan' },
        { title: 'PHÒNG KẾ HOẠCH - ĐẦU TƯ', path: '/phong-ban/ke-hoach-dau-tu' },
        { title: 'PHÒNG ĐÀO TẠO', path: '/phong-ban/dao-tao' },
        { title: 'PHÒNG QUẢN LÝ KHOA HỌC VÀ HỢP TÁC QUỐC TẾ', path: '/phong-ban/quan-ly-khoa-hoc' },
        { title: 'PHÒNG CÔNG TÁC CHÍNH TRỊ VÀ HỖ TRỢ SINH VIÊN', path: '/phong-ban/cong-tac-chinh-tri' },
        { title: 'PHÒNG KHẢO THÍ VÀ ĐẢM BẢO CHẤT LƯỢNG', path: '/phong-ban/khao-thi' },
        { title: 'PHÒNG QUẢN TRỊ', path: '/phong-ban/quan-tri' },
        { title: 'PHÒNG DỊCH VỤ', path: '/phong-ban/dich-vu' },
        { title: 'PHÒNG QUẢN LÝ KÝ TÚC XÁ', path: '/phong-ban/quan-ly-ktx' },
        { title: 'TẠP CHÍ KHOA HỌC VÀ CÔNG NGHỆ', path: '/phong-ban/tap-chi' },
        { title: 'NHÀ XUẤT BẢN', path: '/phong-ban/nha-xuat-ban' }
      ]
    },
    {
      id: 'khoa',
      title: 'CÁC KHOA',
      submenu: [
        { title: 'KHOA CÔNG NGHỆ CƠ KHÍ', path: '/khoa/cong-nghe-co-khi' },
        { title: 'KHOA CÔNG NGHỆ THÔNG TIN', path: '/khoa/cong-nghe-thong-tin' },
        { title: 'KHOA CÔNG NGHỆ ĐIỆN', path: '/khoa/cong-nghe-dien' },
        { title: 'KHOA CÔNG NGHỆ ĐIỆN TỬ', path: '/khoa/cong-nghe-dien-tu' },
        { title: 'KHOA CÔNG NGHỆ ĐỘNG LỰC', path: '/khoa/cong-nghe-dong-luc' },
        { title: 'KHOA CÔNG NGHỆ NHIỆT - LẠNH', path: '/khoa/cong-nghe-nhiet-lanh' },
        { title: 'KHOA CÔNG NGHỆ MAY - THỜI TRANG', path: '/khoa/cong-nghe-may' },
        { title: 'KHOA CÔNG NGHỆ HÓA HỌC', path: '/khoa/cong-nghe-hoa-hoc' },
        { title: 'KHOA KHOA HỌC CƠ BẢN', path: '/khoa/khoa-hoc-co-ban' },
        { title: 'KHOA LUẬT VÀ KHOA HỌC CHÍNH TRỊ', path: '/khoa/luat' },
        { title: 'KHOA NGOẠI NGỮ', path: '/khoa/ngoai-ngu' },
        { title: 'KHOA QUẢN TRỊ KINH DOANH', path: '/khoa/quan-tri-kinh-doanh' },
        { title: 'KHOA THƯƠNG MẠI - DU LỊCH', path: '/khoa/thuong-mai-du-lich' },
        { title: 'KHOA KỸ THUẬT XÂY DỰNG', path: '/khoa/ky-thuat-xay-dung' }
      ]
    },
    {
      id: 'vien',
      title: 'CÁC VIỆN',
      submenu: [
        { title: 'VIỆN TÀI CHÍNH - KẾ TOÁN', path: '/vien/tai-chinh-ke-toan' },
        { title: 'VIỆN ĐÀO TẠO QUỐC TẾ VÀ SAU ĐẠI HỌC', path: '/vien/dao-tao-quoc-te' },
        { title: 'VIỆN CÔNG NGHỆ SINH HỌC VÀ THỰC PHẨM', path: '/vien/cong-nghe-sinh-hoc' },
        { title: 'VIỆN KHOA HỌC CÔNG NGHỆ VÀ QUẢN LÝ MÔI TRƯỜNG', path: '/vien/khoa-hoc-cong-nghe' }
      ]
    },
    {
      id: 'trung-tam',
      title: 'CÁC TRUNG TÂM',
      path: '/trung-tam'
    },
    {
      id: 'phan-hieu',
      title: 'CÁC PHÂN HIỆU',
      path: '/phan-hieu'
    },
    {
      id: 'doan-the',
      title: 'ĐOÀN THỂ',
      path: '/doan-the'
    }
  ];

  return (
    <aside className="sidebar">
      <div className="organization-structure">
        <h3>CƠ CẤU TỔ CHỨC</h3>
        <ul>
          {menuItems.map((item) => (
            <li 
              key={item.id} 
              className={`menu-item ${item.submenu ? 'has-submenu' : ''}`}
            >
              <a href={item.path}>{item.title}</a>
              {item.submenu && (
                <ul className="submenu">
                  {item.submenu.map((subItem, index) => (
                    <li key={index}>
                      <a href={subItem.path}>{subItem.title}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar