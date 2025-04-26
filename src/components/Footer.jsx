import React from 'react'

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="contact-info">
          <h4>LIÊN HỆ</h4>
          <p>ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</p>
          <p>Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, Thành phố Hồ Chí Minh</p>
          <p>
            Điện thoại: <a href="tel:02838940390">028 38940 390</a> - 100
          </p>
          <p>
            Tuyển sinh: <a href="tel:02839851932">028 3985 1932</a> -{' '}
            <a href="tel:02838955858">028 3895 5858</a> -{' '}
            <a href="tel:02839851917">028 3985 1917</a>
          </p>
          <p>
            Email: <a href="mailto:dhcn@iuh.edu.vn">dhcn@iuh.edu.vn</a>
          </p>
        </div>
        
        <div className="stats">
          <p>Số lượt truy cập: 288,835,384</p>
          <p>Hôm nay: 21,737</p>
          <p>Đang xem: 94</p>
          <div className="social-links">
            Chia sẻ
            <a href="https://facebook.com/iuh.edu.vn" className="facebook">Facebook</a>
            <a href="https://twitter.com/iuh_edu_vn" className="twitter">Twitter</a>
            <a href="https://linkedin.com/school/iuh-edu-vn" className="linkedin">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="copyright">
        <p>© Bản quyền 2015 - Đại học Công nghiệp Thành phố Hồ Chí Minh</p>
        <p className="legal-notice">
          Mọi hành động sử dụng nội dung đăng tải trên Website iuh.edu.vn phải có sự đồng ý bằng văn bản của Đại học Công nghiệp Thành phố Hồ Chí Minh.
        </p>
      </div>
    </footer>
  )
}

export default Footer