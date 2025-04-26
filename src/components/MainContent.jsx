import React from 'react'

function MainContent() {
  const announcements = [
    { id: 1, date: '24-04-2025', title: 'Thông báo v/v kế hoạch nghỉ hè đối với sinh viên năm 2025' },
    { id: 2, date: '21-04-2025', title: 'Thông báo tuyển chọn nam sinh tốt nghiệp đại học cho các trường quân đội' },
    { id: 3, date: '20-03-2025', title: 'Thông báo v/v tuyển sinh đại học văn bằng hai, đợt 1 năm 2025' }
  ]

  const news = [
    {
      id: 1,
      image: '/news1.jpg',
      title: 'AVEVA tài trợ gói phần mềm trị giá 180.000 đô Mỹ cho Đại học Công nghiệp',
      date: '25-04-2025'
    },
    {
      id: 2,
      image: '/news2.jpg',
      title: 'Hội nghị khoa học quốc tế BAIC 2025 lần 2 tại IUH - Sức mạnh AI trong...',
      date: '22-04-2025'
    }
  ]

  return (
    <main className="main-content">
      <div className="banner">
        <img src="/banner-50-nam.jpg" alt="Chào mừng kỷ niệm 50 năm ngày giải phóng miền Nam" />
      </div>

      <div className="content-grid">
        <section className="announcements">
          <h3>THÔNG BÁO <a href="/thong-bao" className="view-all">Xem tất cả</a></h3>
          <ul>
            {announcements.map(item => (
              <li key={item.id}>
                <span className="date">{item.date}</span>
                <a href={`/thong-bao/${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="news-section">
          <h3>TIN TỨC - SỰ KIỆN <a href="/tin-tuc" className="view-all">Xem tất cả</a></h3>
          <div className="news-grid">
            {news.map(item => (
              <article key={item.id} className="news-card">
                <img src={item.image} alt={item.title} />
                <div className="news-content">
                  <h4><a href={`/tin-tuc/${item.id}`}>{item.title}</a></h4>
                  <span className="date">{item.date}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="international">
          <h3>HỢP TÁC QUỐC TẾ <a href="/hop-tac-quoc-te" className="view-all">Xem tất cả</a></h3>
          <div className="news-grid">
            {/* International cooperation news items would go here */}
          </div>
        </section>
      </div>
    </main>
  )
}

export default MainContent