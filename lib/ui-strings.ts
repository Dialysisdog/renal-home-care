export const ui = {
  vi: {
    tag: "Cẩm nang cho người bệnh & người chăm sóc",
    heroTitle: "Chạy thận tại nhà",
    heroSubtitle:
      "Chín chủ đề quan trọng nhất khi chạy thận tại nhà, được tổ chức theo dạng sơ đồ tư duy — mỗi nhánh là một mối bận tâm thường gặp trong đời sống hằng ngày.",
    footer: "Trang thông tin tham khảo — không thay thế hướng dẫn y khoa cá nhân hóa.",
    branch: "Nhánh",
    viewDetails: "Xem chi tiết",
    backHome: "Về trang chủ",
    otherTopics: "Chủ đề khác",
    disclaimer:
      "Nội dung trên trang mang tính tham khảo chung, không thay thế hướng dẫn cá nhân hóa từ bác sĩ, điều dưỡng thận hoặc chuyên gia dinh dưỡng của bạn. Khi có dấu hiệu bất thường hoặc không chắc chắn, hãy liên hệ ngay với đội ngũ chăm sóc hoặc hotline của đơn vị thận.",
    siteName: "Cẩm nang chạy thận",
  },
  en: {
    tag: "A guide for patients & caregivers",
    heroTitle: "Home Dialysis",
    heroSubtitle:
      "The nine topics that matter most for home dialysis, organized like a mind map — each branch is a common concern from everyday life.",
    footer: "A reference guide — not a substitute for personalized medical guidance.",
    branch: "Branch",
    viewDetails: "View details",
    backHome: "Back to home",
    otherTopics: "Other topics",
    disclaimer:
      "The content on this page is general reference information, not a substitute for personalized guidance from your doctor, renal nurse, or dietitian. If you notice anything unusual or aren't sure, contact your care team or your dialysis unit's hotline right away.",
    siteName: "Home Dialysis Guide",
  },
} as const;

export type Lang = keyof typeof ui;
