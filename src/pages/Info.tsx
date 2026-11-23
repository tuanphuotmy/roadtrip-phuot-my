// Các trang thông tin: giới thiệu, đại lý, liên hệ, pháp lý, 404.
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { Media } from '../components/Media';
import { Icon } from '../components/Icon';
import { PageHero, Section, LeadForm, CtaBand } from '../components/ui';
import { CONTACT, SITE, SOCIAL } from '../data/site';
import { GROUPS } from '../data/taxonomy';

const btn = 'flex min-h-[48px] items-center justify-center text-center py-2 rounded-lg px-5 font-bold';

function ContactList() {
  const rows = [
    { icon: 'phone', label: 'Hotline Việt Nam', c: CONTACT.hotlineVN },
    { icon: 'phone', label: 'Văn phòng Mỹ', c: CONTACT.office },
    { icon: 'phone', label: 'Khẩn cấp khi đang đi tour', c: CONTACT.emergency },
    { icon: 'chat', label: 'Zalo', c: CONTACT.zalo },
    { icon: 'mail', label: 'Email', c: CONTACT.email },
  ] as const;
  return (
    <ul className="divide-y divide-line rounded-lg border-[1.5px] border-line bg-white">
      {rows.map((r) => (
        <li key={r.label}>
          <a href={r.c.href} className="flex min-h-[56px] items-center gap-3 px-4" {...(r.c.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
            <Icon name={r.icon} size={20} />
            <span className="flex-1 text-sm text-mountain">{r.label}</span>
            <strong>{r.c.label}</strong>
          </a>
        </li>
      ))}
      <li className="flex min-h-[56px] items-center gap-3 px-4 py-3">
        <Icon name="pin" size={20} />
        <span className="flex-1 text-sm">{CONTACT.address}<br /><span className="text-mountain">{CONTACT.offices}</span></span>
      </li>
    </ul>
  );
}

export function About() {
  return (
    <>
      <Seo title="Về Phượt Mỹ" description={`${SITE.legalName} – đơn vị tour Mỹ cho khách Việt, trụ sở tại California. ${SITE.motto}.`} image="buaToiDoan" />
      <PageHero title="Về Phượt Mỹ" intro={`${SITE.motto}. ${SITE.tagline}.`} crumbs={[{ name: 'Trang chủ', to: '/' }, { name: 'Về Phượt Mỹ' }]} />
      <Section className="!pt-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <Media k="buaToiDoan" priority className="h-60 w-full rounded-lg lg:h-96" sizes="(max-width: 1024px) 100vw, 600px" />
          <div className="space-y-4 text-[17px] leading-[28px]">
            <p>{SITE.legalName} là công ty du lịch có trụ sở tại Santa Ana, California, chuyên tour road trip và caravan khắp nước Mỹ, Canada cho khách Việt.</p>
            <p>Người sáng lập – anh Tuấn Phùng – có 20 năm làm du lịch trải nghiệm và kết nối giao thương Việt – Mỹ. Đội ngũ người Việt tại Mỹ đi cùng đoàn, cùng một văn phòng đại diện tại Hà Nội hỗ trợ hồ sơ và tư vấn trước chuyến đi.</p>
            <p>Triết lý của chúng tôi gói trong một câu: <strong>“{SITE.motto}”</strong>. Mỗi hành trình được thiết kế để khách sống cùng nước Mỹ — nấu bữa tối giữa rừng, lái xe trên những cung đường đẹp — thay vì chỉ đi qua và chụp ảnh.</p>
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="mb-4 font-display text-2xl font-bold">Chúng tôi làm gì</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS['loai-hinh'].terms.map((t) => (
            <Link key={t.slug} to={`/loai-hinh/${t.slug}`} className="rounded-lg border-[1.5px] border-line bg-white p-4 hover:border-navy">
              <strong className="font-display text-lg">{t.name}</strong>
              <p className="mt-1 text-[15px] leading-[23px] text-mountain">{t.short}</p>
            </Link>
          ))}
          <Link to="/dai-ly" className="rounded-lg border-[1.5px] border-line bg-white p-4 hover:border-navy">
            <strong className="font-display text-lg">Land tour cho đại lý</strong>
            <p className="mt-1 text-[15px] leading-[23px] text-mountain">Cung cấp dịch vụ mặt đất tại Mỹ cho công ty du lịch Việt Nam.</p>
          </Link>
        </div>
      </Section>
      <Section>
        <h2 className="mb-4 font-display text-2xl font-bold">Liên hệ & mạng xã hội</h2>
        <div className="grid gap-5 lg:grid-cols-2">
          <ContactList />
          <ul className="grid content-start gap-2">
            {SOCIAL.map((s) => <li key={s.key}><a href={s.href} target="_blank" rel="noopener noreferrer" className={`${btn} border-[1.5px] border-navy`}>{s.label}</a></li>)}
          </ul>
        </div>
      </Section>
      <div className="h-10" />
    </>
  );
}

export function Agents() {
  return (
    <>
      <Seo title="Hợp tác đại lý – Land tour Mỹ" description="Phượt Mỹ cung cấp land tour tại Mỹ cho công ty du lịch Việt Nam: báo giá theo đoàn, hợp đồng nguyên tắc song ngữ, đội ngũ người Việt tại California." image="doanArizona" />
      <PageHero title="Hợp tác đại lý" intro="Dịch vụ land tour tại Mỹ cho công ty du lịch Việt Nam — anh chị bán tour, Phượt Mỹ lo phần mặt đất." crumbs={[{ name: 'Trang chủ', to: '/' }, { name: 'Đại lý' }]} />
      <Section className="!pt-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <Media k="doanArizona" priority className="h-60 w-full rounded-lg lg:h-full" sizes="(max-width: 1024px) 100vw, 600px" showCaption />
          <div>
            <h2 className="mb-2 font-display text-2xl font-bold">Đối tác nhận được gì</h2>
            <ul className="list-disc space-y-2 pl-5 text-[17px] leading-[26px]">
              <li>Báo giá land tour theo lịch trình và số khách của đoàn, kèm bảng chi tiết để đối chiếu.</li>
              <li>Hợp đồng nguyên tắc song ngữ Anh – Việt giữa Phượt Mỹ và đối tác.</li>
              <li>Đội ngũ người Việt tại California điều hành và đi cùng đoàn.</li>
              <li>Các tuyến đang vận hành: Đông Tây Hoa Kỳ, xuyên biên giới Mỹ – Canada, caravan tự lái California.</li>
            </ul>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <a href={CONTACT.zalo.href} target="_blank" rel="noopener noreferrer" className={`${btn} bg-navy text-cream`}>Nhắn Zalo yêu cầu báo giá</a>
              <a href={CONTACT.email.href} className={`${btn} border-[1.5px] border-navy`}>Gửi email</a>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="mx-auto max-w-xl"><LeadForm title="Gửi yêu cầu hợp tác" tourName="Hợp tác đại lý" /></div>
      </Section>
      <div className="h-10" />
    </>
  );
}

export function Contact() {
  return (
    <>
      <Seo title="Liên hệ" description={`Hotline Việt Nam ${CONTACT.hotlineVN.label}, Zalo ${CONTACT.zalo.label}, văn phòng ${CONTACT.address}.`} />
      <PageHero title="Liên hệ" intro="Gọi, nhắn Zalo hoặc để lại thông tin — Phượt Mỹ phản hồi sớm nhất có thể." crumbs={[{ name: 'Trang chủ', to: '/' }, { name: 'Liên hệ' }]} />
      <Section className="!pt-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <ContactList />
          <LeadForm />
        </div>
      </Section>
      <div className="h-10" />
    </>
  );
}

const LEGAL = {
  terms: {
    title: 'Điều khoản dịch vụ',
    blocks: [
      ['Phạm vi', `Điều khoản này áp dụng cho các dịch vụ du lịch do ${SITE.legalName} cung cấp và cho việc sử dụng website ${SITE.url.replace('https://', '')}.`],
      ['Thông tin tour', 'Lịch trình, giá và điều kiện trên website mang tính tham khảo và có thể thay đổi. Thông tin chính thức của từng chuyến là xác nhận đặt tour hoặc hợp đồng gửi riêng cho khách.'],
      ['Đặt tour, thanh toán, huỷ đổi', 'Điều kiện đặt cọc, thanh toán, huỷ và đổi được ghi cụ thể trong xác nhận đặt tour hoặc hợp đồng của từng chuyến.'],
      ['Giấy tờ', 'Khách tự chịu trách nhiệm về hộ chiếu, thị thực và giấy tờ nhập cảnh. Phượt Mỹ hỗ trợ tư vấn hồ sơ nhưng không quyết định kết quả cấp thị thực.'],
      ['Thay đổi do bất khả kháng', 'Khi thời tiết, đóng cửa công viên hoặc sự kiện ngoài tầm kiểm soát ảnh hưởng tới lịch trình, Phượt Mỹ sẽ điều chỉnh để bảo đảm an toàn và trải nghiệm tương đương nhất có thể.'],
      ['Liên hệ', `${CONTACT.email.label} · ${CONTACT.hotlineVN.label} · ${CONTACT.address}`],
    ],
  },
  privacy: {
    title: 'Chính sách bảo mật',
    blocks: [
      ['Thông tin thu thập', 'Họ tên, email, số điện thoại, số người và ngày dự kiến đi mà anh chị gửi qua form đăng ký.'],
      ['Mục đích', 'Chỉ dùng để tư vấn, báo giá và phục vụ chuyến đi của anh chị.'],
      ['Chia sẻ', 'Không bán hay cho thuê thông tin. Chỉ chia sẻ với nhà cung cấp dịch vụ (khách sạn, xe, vé) khi cần cho chuyến đi đã đặt.'],
      ['Đo lường', 'Website dùng Google Analytics để thống kê lượt truy cập ẩn danh.'],
      ['Quyền của anh chị', `Anh chị có thể yêu cầu xem, sửa hoặc xoá thông tin bằng cách email ${CONTACT.email.label}.`],
    ],
  },
} as const;

export function Legal({ kind }: { kind: keyof typeof LEGAL }) {
  const doc = LEGAL[kind];
  return (
    <>
      <Seo title={doc.title} />
      <PageHero title={doc.title} crumbs={[{ name: 'Trang chủ', to: '/' }, { name: doc.title }]} />
      <Section className="!pt-6">
        <div className="max-w-3xl space-y-5 text-[17px] leading-[27px]">
          {doc.blocks.map(([h, p]) => <div key={h}><h2 className="font-display text-xl font-bold">{h}</h2><p className="mt-1">{p}</p></div>)}
        </div>
      </Section>
      <div className="h-10" />
    </>
  );
}

export function NotFound() {
  return (
    <>
      <Seo title="Không tìm thấy trang" noindex />
      <PageHero title="Không tìm thấy trang" intro="Đường này chưa có trên bản đồ. Mời anh chị quay lại trang chủ hoặc xem các tour đang mở." crumbs={[{ name: 'Trang chủ', to: '/' }]}>
        <div className="mt-2 flex flex-col gap-2 sm:flex-row">
          <Link to="/" className={`${btn} bg-navy text-cream`}>Về trang chủ</Link>
          <Link to="/tour" className={`${btn} border-[1.5px] border-navy`}>Xem tour</Link>
        </div>
      </PageHero>
      <CtaBand />
      <div className="h-10" />
    </>
  );
}
