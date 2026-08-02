export type Section = {
  heading: string;
  items: string[];
};

export type LocalizedContent = {
  title: string;
  shortTitle: string;
  summary: string;
  sections: Section[];
};

export type Topic = {
  slug: string;
  icon: string; // lucide icon name
  color: string; // hex
  colorSoft: string; // light tint for backgrounds
  vi: LocalizedContent;
  en: LocalizedContent;
};

export const topics: Topic[] = [
  {
    slug: "giao-tiep-tieng-anh",
    icon: "MessageCircle",
    color: "#4C5FD5",
    colorSoft: "#EEF0FC",
    vi: {
      title: "Giao tiếp tiếng Anh với đội ngũ y tế",
      shortTitle: "Giao tiếp tiếng Anh",
      summary:
        "Những câu và từ vựng cần thiết khi gọi điện hoặc trao đổi với y tá, bác sĩ trong lúc chạy thận tại nhà.",
      sections: [
        {
          heading: "Khi gọi cho y tá trực (on-call nurse)",
          items: [
            "\"My dialysis machine is alarming.\" — Máy chạy thận của tôi đang báo động.",
            "\"The alarm says low drain / high drain pressure.\" — Báo động ghi là thoát dịch thấp / áp lực thoát dịch cao.",
            "\"My drain fluid looks cloudy this morning.\" — Nước thải sáng nay của tôi bị đục.",
            "\"My weight has gone up since yesterday.\" — Cân nặng của tôi tăng so với hôm qua.",
            "\"I feel dizzy / short of breath / feverish.\" — Tôi thấy chóng mặt / khó thở / sốt.",
          ],
        },
        {
          heading: "Từ vựng thiết bị thường gặp",
          items: [
            "drain — thoát dịch",
            "fill — bơm dịch vào",
            "dwell time — thời gian lưu dịch trong bụng",
            "UF / ultrafiltration — siêu lọc, lượng dịch thừa được rút ra",
            "cycler — máy chạy thận tự động dùng ban đêm",
            "exit site — vị trí ống thông ra da",
            "peritonitis — viêm phúc mạc",
            "effluent — nước thải / dịch dẫn lưu",
          ],
        },
        {
          heading: "Mẹo giao tiếp",
          items: [
            "Viết sẵn câu ra giấy hoặc ghi chú trong điện thoại trước khi gọi.",
            "Yêu cầu phiên dịch: \"Can I have a Vietnamese interpreter, please?\"",
            "Xin họ nói chậm lại: \"Could you please speak slowly?\"",
            "Xin lặp lại nếu chưa nghe rõ: \"Could you repeat that, please?\"",
            "Nhiều bệnh viện có dịch vụ thông dịch miễn phí qua điện thoại — bạn luôn có quyền yêu cầu.",
          ],
        },
      ],
    },
    en: {
      title: "Communicating in English with Your Care Team",
      shortTitle: "English Communication",
      summary:
        "Key phrases and vocabulary for calling or speaking with nurses and doctors during home dialysis.",
      sections: [
        {
          heading: "When calling the on-call nurse",
          items: [
            "\"My dialysis machine is alarming.\" — Máy chạy thận của tôi đang báo động.",
            "\"The alarm says low drain / high drain pressure.\" — Báo động ghi là thoát dịch thấp / áp lực thoát dịch cao.",
            "\"My drain fluid looks cloudy this morning.\" — Nước thải sáng nay của tôi bị đục.",
            "\"My weight has gone up since yesterday.\" — Cân nặng của tôi tăng so với hôm qua.",
            "\"I feel dizzy / short of breath / feverish.\" — Tôi thấy chóng mặt / khó thở / sốt.",
          ],
        },
        {
          heading: "Common equipment vocabulary",
          items: [
            "drain — the fluid draining out of the abdomen",
            "fill — fluid being pumped into the abdomen",
            "dwell time — how long the fluid stays in the abdomen",
            "UF / ultrafiltration — the amount of excess fluid removed",
            "cycler — the automated machine used for overnight dialysis",
            "exit site — where the catheter exits the skin",
            "peritonitis — infection of the abdominal lining",
            "effluent — the drained dialysis fluid",
          ],
        },
        {
          heading: "Communication tips",
          items: [
            "Write your sentences down or save them in your phone before calling.",
            "Ask for an interpreter: \"Can I have a Vietnamese interpreter, please?\"",
            "Ask them to slow down: \"Could you please speak slowly?\"",
            "Ask them to repeat: \"Could you repeat that, please?\"",
            "Many hospitals offer free phone interpreter services — you always have the right to ask for one.",
          ],
        },
      ],
    },
  },
  {
    slug: "nhiem-trung-phong-ngua",
    icon: "ShieldAlert",
    color: "#E1573E",
    colorSoft: "#FCEEEC",
    vi: {
      title: "Nhiễm trùng và cách phòng ngừa",
      shortTitle: "Nhiễm trùng & phòng ngừa",
      summary:
        "Nhận biết sớm các loại nhiễm trùng thường gặp và thói quen vệ sinh giúp phòng ngừa hiệu quả.",
      sections: [
        {
          heading: "Các loại nhiễm trùng thường gặp",
          items: [
            "Viêm phúc mạc (peritonitis): nhiễm trùng trong khoang bụng, thường do vi khuẩn xâm nhập qua ống thông.",
            "Nhiễm trùng vị trí ra da (exit-site infection): đỏ, sưng, đau, có mủ quanh nơi ống thông ra da.",
            "Nhiễm trùng đường hầm (tunnel infection): dọc theo đoạn ống nằm dưới da.",
          ],
        },
        {
          heading: "Dấu hiệu cần gọi ngay cho đội ngũ y tế",
          items: [
            "Nước thải đục hoặc có sợi tơ trắng.",
            "Đau bụng, sốt, ớn lạnh.",
            "Vị trí ra da đỏ, sưng, chảy mủ hoặc đau khi chạm.",
            "Buồn nôn, nôn kèm đau bụng.",
          ],
        },
        {
          heading: "Cách phòng ngừa hằng ngày",
          items: [
            "Rửa tay kỹ bằng xà phòng ít nhất 30 giây trước khi chạm vào ống thông hoặc thiết bị.",
            "Đeo khẩu trang khi kết nối/tháo ống, dùng kỹ thuật \"không chạm\" (no-touch).",
            "Vệ sinh vị trí ra da mỗi ngày đúng theo hướng dẫn của điều dưỡng.",
            "Giữ vị trí ra da khô ráo, tránh ngâm nước (bồn tắm, hồ bơi) trừ khi được cho phép.",
            "Kiểm tra hạn sử dụng và độ nguyên vẹn của túi dịch trước khi dùng.",
            "Thay băng đúng lịch, không tự ý bỏ qua.",
          ],
        },
      ],
    },
    en: {
      title: "Infections and Prevention",
      shortTitle: "Infections & Prevention",
      summary:
        "Recognize common infections early, and build daily habits that help prevent them.",
      sections: [
        {
          heading: "Common types of infection",
          items: [
            "Peritonitis: an infection inside the abdominal cavity, usually caused by bacteria entering through the catheter.",
            "Exit-site infection: redness, swelling, pain, or pus around where the catheter exits the skin.",
            "Tunnel infection: infection along the section of tubing under the skin.",
          ],
        },
        {
          heading: "Warning signs — call your care team right away",
          items: [
            "Cloudy drain fluid or fluid with white strands.",
            "Abdominal pain, fever, chills.",
            "Exit site that is red, swollen, draining pus, or painful to touch.",
            "Nausea or vomiting along with abdominal pain.",
          ],
        },
        {
          heading: "Daily prevention habits",
          items: [
            "Wash your hands thoroughly with soap for at least 30 seconds before touching the catheter or equipment.",
            "Wear a mask when connecting or disconnecting tubing, using \"no-touch\" technique.",
            "Clean the exit site every day exactly as your nurse showed you.",
            "Keep the exit site dry; avoid soaking it (baths, pools) unless your care team says it's okay.",
            "Check the expiration date and integrity of the dialysis bag before use.",
            "Change dressings on schedule — don't skip it.",
          ],
        },
      ],
    },
  },
  {
    slug: "bao-dong-ban-dem",
    icon: "BellRing",
    color: "#D68A2C",
    colorSoft: "#FBF1E4",
    vi: {
      title: "Xử trí khi máy báo động ban đêm",
      shortTitle: "Báo động ban đêm",
      summary:
        "Các bước bình tĩnh kiểm tra khi máy cycler kêu báo động lúc nửa đêm, và khi nào cần gọi hotline.",
      sections: [
        {
          heading: "Các báo động thường gặp trên máy cycler",
          items: [
            "Door open — cửa máy chưa đóng kín.",
            "Low drain / high drain — dòng chảy thoát dịch bất thường.",
            "Line kinked / tube blocked — dây bị gập, tắc.",
            "Bag empty — túi dịch đã hết.",
            "Low UF — lượng siêu lọc thấp hơn dự kiến.",
          ],
        },
        {
          heading: "Các bước kiểm tra trước khi gọi hotline",
          items: [
            "Kiểm tra dây có bị gập, bị đè, hoặc vướng vào chăn/mền không.",
            "Đổi tư thế nằm — đôi khi nghiêng người giúp dịch thoát dễ hơn.",
            "Kiểm tra cửa máy và các đầu kết nối đã cài chặt chưa.",
            "Không tự ý tháo rời hệ thống nếu chưa chắc chắn thao tác đúng.",
          ],
        },
        {
          heading: "Khi nào cần gọi hotline khẩn cấp",
          items: [
            "Báo động lặp lại nhiều lần dù đã kiểm tra các bước trên.",
            "Đau bụng dữ dội kèm theo báo động.",
            "Máy báo lỗi mà bạn không hiểu hoặc không tự khắc phục được.",
            "Luôn dán sẵn số hotline 24/7 của đơn vị thận gần máy hoặc lưu trong điện thoại.",
          ],
        },
      ],
    },
    en: {
      title: "Handling Nighttime Machine Alarms",
      shortTitle: "Nighttime Alarms",
      summary:
        "Calm, step-by-step checks for when the cycler alarms in the middle of the night, and when to call the hotline.",
      sections: [
        {
          heading: "Common cycler alarms",
          items: [
            "Door open — the machine door isn't fully closed.",
            "Low drain / high drain — abnormal drain flow.",
            "Line kinked / tube blocked — the tubing is bent or blocked.",
            "Bag empty — the solution bag has run out.",
            "Low UF — less fluid removed than expected.",
          ],
        },
        {
          heading: "Checks to try before calling the hotline",
          items: [
            "Check whether the tubing is kinked, pinched, or tangled in the blanket.",
            "Try changing your sleeping position — sometimes turning onto your side helps fluid drain.",
            "Check that the machine door and all connectors are securely closed.",
            "Don't disconnect the system yourself unless you're sure of the correct steps.",
          ],
        },
        {
          heading: "When to call the emergency hotline",
          items: [
            "The alarm keeps repeating even after you've checked everything above.",
            "Severe abdominal pain along with the alarm.",
            "An error you don't understand or can't resolve yourself.",
            "Always keep your dialysis unit's 24/7 hotline number near the machine or saved in your phone.",
          ],
        },
      ],
    },
  },
  {
    slug: "mau-nuoc-thai-buoi-sang",
    icon: "Droplets",
    color: "#1E8A7D",
    colorSoft: "#E7F4F1",
    vi: {
      title: "Màu nước thải (dịch dẫn lưu) buổi sáng",
      shortTitle: "Màu nước thải buổi sáng",
      summary:
        "Quan sát màu sắc túi dịch mỗi sáng là cách sớm nhất để phát hiện dấu hiệu nhiễm trùng.",
      sections: [
        {
          heading: "Ý nghĩa các màu sắc thường gặp",
          items: [
            "Trong, hơi vàng nhạt: bình thường.",
            "Đục như nước vo gạo hoặc có sợi tơ trắng: nghi ngờ nhiễm trùng (viêm phúc mạc) — cần báo ngay.",
            "Hồng nhạt hoặc lẫn máu: đôi khi gặp (ví dụ sau vận động mạnh, kỳ kinh ở phụ nữ), vẫn nên báo cho điều dưỡng.",
            "Nâu đậm: hiếm gặp, cần báo ngay lập tức.",
            "Vàng đậm bất thường: nên được kiểm tra thêm.",
          ],
        },
        {
          heading: "Cách quan sát đúng",
          items: [
            "Quan sát dưới ánh sáng đủ, đặt túi dịch trước nền hoặc tờ giấy trắng để dễ so màu.",
            "So sánh với túi dịch của những ngày trước.",
            "Chụp ảnh hoặc ghi chú lại nếu thấy bất thường, để mô tả chính xác khi gọi điều dưỡng.",
          ],
        },
        {
          heading: "Việc cần làm khi nghi ngờ bất thường",
          items: [
            "Không đổ bỏ túi dịch ngay — giữ lại phòng khi nhân viên y tế cần kiểm tra.",
            "Gọi cho đơn vị thận nhân tạo càng sớm càng tốt, mô tả rõ màu sắc, mùi, và có kèm đau bụng/sốt hay không.",
          ],
        },
      ],
    },
    en: {
      title: "Morning Drain Fluid Color",
      shortTitle: "Morning Fluid Color",
      summary:
        "Checking the color of your drain bag each morning is the earliest way to catch signs of infection.",
      sections: [
        {
          heading: "What each color usually means",
          items: [
            "Clear, pale yellow: normal.",
            "Cloudy, like rice-washing water, or with white strands: possible infection (peritonitis) — report it right away.",
            "Light pink or blood-tinged: sometimes happens (e.g. after strenuous activity, or during a woman's period), but still worth mentioning to your nurse.",
            "Dark brown: rare, report immediately.",
            "Unusually dark yellow: should be checked further.",
          ],
        },
        {
          heading: "How to check it properly",
          items: [
            "Look under good lighting, holding the bag against a white background or sheet of paper for an accurate comparison.",
            "Compare with the previous day's bag.",
            "Take a photo or note it down if something looks off, so you can describe it accurately when you call.",
          ],
        },
        {
          heading: "What to do if something looks abnormal",
          items: [
            "Don't pour the bag out right away — keep it in case staff need to test it.",
            "Call your dialysis unit as soon as possible, describing the color, smell, and whether you also have pain or fever.",
          ],
        },
      ],
    },
  },
  {
    slug: "can-nang-huyet-ap",
    icon: "Gauge",
    color: "#6B5CA5",
    colorSoft: "#F1EEF9",
    vi: {
      title: "Theo dõi cân nặng và huyết áp",
      shortTitle: "Cân nặng & huyết áp",
      summary:
        "Đo và ghi lại cân nặng, huyết áp sau mỗi lần chạy thận để phát hiện sớm tình trạng dư hoặc thiếu dịch.",
      sections: [
        {
          heading: "Vì sao cần đo mỗi ngày",
          items: [
            "Cân nặng tăng nhanh bất thường có thể là dấu hiệu giữ nước (quá tải dịch).",
            "Huyết áp thấp có thể do rút dịch quá mức; huyết áp cao có thể liên quan đến dư dịch hoặc thuốc.",
          ],
        },
        {
          heading: "Cách đo đúng",
          items: [
            "Cân vào cùng thời điểm mỗi ngày, thường là buổi sáng, sau khi đi vệ sinh, trước khi ăn.",
            "Đo huyết áp ở tư thế ngồi, nghỉ ngơi ít nhất 5 phút trước khi đo.",
            "Ghi lại kết quả vào sổ theo dõi hoặc ứng dụng điện thoại để mang theo khi tái khám.",
          ],
        },
        {
          heading: "Khi nào cần liên hệ đội ngũ y tế",
          items: [
            "Cân nặng thay đổi đột ngột so với \"cân khô\" (dry weight) đã được bác sĩ xác định.",
            "Huyết áp quá cao hoặc quá thấp so với mức thường ngày, đặc biệt kèm chóng mặt, hoa mắt, khó thở.",
            "Đội ngũ chăm sóc sẽ cung cấp ngưỡng cụ thể phù hợp riêng cho bạn — luôn theo hướng dẫn cá nhân hóa đó.",
          ],
        },
      ],
    },
    en: {
      title: "Tracking Weight and Blood Pressure",
      shortTitle: "Weight & Blood Pressure",
      summary:
        "Measuring weight and blood pressure after each dialysis session helps catch fluid overload or dehydration early.",
      sections: [
        {
          heading: "Why measure every day",
          items: [
            "A sudden weight increase can signal fluid retention (fluid overload).",
            "Low blood pressure can result from removing too much fluid; high blood pressure can relate to excess fluid or medication.",
          ],
        },
        {
          heading: "How to measure correctly",
          items: [
            "Weigh yourself at the same time each day, usually in the morning, after using the bathroom, before eating.",
            "Take your blood pressure while seated, after resting for at least 5 minutes.",
            "Record your results in a log or phone app to bring to your appointments.",
          ],
        },
        {
          heading: "When to contact your care team",
          items: [
            "Weight changes suddenly compared to your \"dry weight\" set by your doctor.",
            "Blood pressure is much higher or lower than your usual range, especially with dizziness, lightheadedness, or shortness of breath.",
            "Your care team will give you specific thresholds tailored to you — always follow that personalized guidance rather than a general number.",
          ],
        },
      ],
    },
  },
  {
    slug: "uf-thap",
    icon: "TrendingDown",
    color: "#B4436C",
    colorSoft: "#FAECF1",
    vi: {
      title: "Khi UF (siêu lọc) bị thấp",
      shortTitle: "UF thấp — cần làm gì",
      summary:
        "UF thấp nghĩa là lượng dịch rút ra ít hơn dự kiến. Đây là những nguyên nhân thường gặp và việc nên làm.",
      sections: [
        {
          heading: "UF là gì",
          items: [
            "UF (ultrafiltration) là lượng dịch thừa được rút ra khỏi cơ thể sau mỗi chu kỳ chạy thận.",
            "UF thấp nghĩa là lượng dịch rút ra ít hơn mức dự kiến của chu kỳ đó.",
          ],
        },
        {
          heading: "Những nguyên nhân thường gặp",
          items: [
            "Táo bón — ruột đầy có thể cản trở dịch lưu thông trong khoang bụng, đây là nguyên nhân rất phổ biến.",
            "Dây hoặc ống thông bị gập, tắc.",
            "Thời gian lưu dịch (dwell time) chưa phù hợp với chu kỳ đó.",
            "Khả năng lọc của màng bụng thay đổi theo thời gian.",
          ],
        },
        {
          heading: "Những việc có thể làm",
          items: [
            "Kiểm tra và xử lý táo bón theo hướng dẫn đã được bác sĩ/điều dưỡng cung cấp trước đó.",
            "Kiểm tra dây/ống có bị gập không.",
            "Không tự ý thay đổi loại dịch hoặc nồng độ đường (dextrose) khi chưa có chỉ định — việc này cần bác sĩ điều chỉnh.",
            "Ghi lại số lần UF thấp liên tiếp và báo cho đội ngũ chăm sóc thận, vì UF thấp kéo dài có thể cần đánh giá lại phác đồ.",
          ],
        },
      ],
    },
    en: {
      title: "When UF (Ultrafiltration) Is Low",
      shortTitle: "Low UF — What to Do",
      summary:
        "Low UF means less fluid was removed than expected. Here are common causes and what you can do.",
      sections: [
        {
          heading: "What UF is",
          items: [
            "UF (ultrafiltration) is the amount of excess fluid removed from the body after each dialysis cycle.",
            "Low UF means less fluid was drained than the cycle's expected amount.",
          ],
        },
        {
          heading: "Common causes",
          items: [
            "Constipation — a full bowel can block fluid movement in the abdominal cavity; this is a very common cause.",
            "Kinked or blocked tubing/catheter.",
            "A dwell time that doesn't match that particular cycle.",
            "The peritoneal membrane's filtering ability changing over time.",
          ],
        },
        {
          heading: "What you can do",
          items: [
            "Manage constipation following the guidance your doctor or nurse already gave you.",
            "Check whether tubing is kinked.",
            "Don't change the type of solution or dextrose concentration yourself without instruction — that adjustment needs to come from your doctor.",
            "Keep track of repeated low-UF days and report it to your renal care team, since ongoing low UF may mean your prescription needs to be reviewed.",
          ],
        },
      ],
    },
  },
  {
    slug: "dinh-duong",
    icon: "Apple",
    color: "#5E7C3B",
    colorSoft: "#EFF3E7",
    vi: {
      title: "Dinh dưỡng cho người chạy thận tại nhà",
      shortTitle: "Thực phẩm dinh dưỡng",
      summary:
        "Nguyên tắc ăn uống chung — kế hoạch cụ thể nên do chuyên gia dinh dưỡng thận xây dựng riêng cho từng người.",
      sections: [
        {
          heading: "Nguyên tắc chung",
          items: [
            "Nhu cầu đạm (protein) của người chạy thận phúc mạc thường cao hơn người bình thường, vì một phần đạm bị mất qua dịch lọc mỗi ngày.",
            "Cân bằng năng lượng, đạm, và lượng dịch — kế hoạch cụ thể nên do chuyên gia dinh dưỡng thận xây dựng riêng.",
          ],
        },
        {
          heading: "Nhóm thực phẩm nên ưu tiên",
          items: [
            "Đạm chất lượng cao: trứng, thịt nạc, cá, ức gà, đậu hũ, theo lượng được khuyến nghị riêng.",
            "Rau củ ít kali khi cần kiểm soát kali: bắp cải, súp lơ, dưa leo, ớt chuông.",
            "Ngũ cốc nguyên hạt vừa phải, theo hướng dẫn về phốt pho.",
          ],
        },
        {
          heading: "Theo dõi lượng nước uống",
          items: [
            "Lượng dịch được phép uống mỗi ngày phụ thuộc vào lượng nước tiểu còn lại và lượng UF đạt được — do bác sĩ chỉ định riêng.",
            "Mẹo giảm khát: ngậm đá viên nhỏ, súc miệng nước lạnh, hạn chế đồ ăn mặn vì muối gây khát.",
          ],
        },
      ],
    },
    en: {
      title: "Nutrition for Home Dialysis",
      shortTitle: "Nutrition",
      summary:
        "General eating principles — your specific plan should be built by a renal dietitian for your individual needs.",
      sections: [
        {
          heading: "General principles",
          items: [
            "People on peritoneal dialysis usually need more protein than average, since some protein is lost through the dialysate each day.",
            "Balancing energy, protein, and fluid intake — the specific plan should be built by a renal dietitian.",
          ],
        },
        {
          heading: "Foods to prioritize",
          items: [
            "High-quality protein: eggs, lean meat, fish, chicken breast, tofu, in amounts specifically recommended for you.",
            "Lower-potassium vegetables when potassium needs to be controlled: cabbage, cauliflower, cucumber, bell peppers.",
            "Whole grains in moderation, following your phosphorus guidance.",
          ],
        },
        {
          heading: "Tracking fluid intake",
          items: [
            "How much fluid you're allowed each day depends on your remaining urine output and the UF you're achieving — set specifically by your doctor.",
            "Tips for thirst: suck on small ice chips, rinse your mouth with cold water, limit salty food since salt increases thirst.",
          ],
        },
      ],
    },
  },
  {
    slug: "thuc-pham-can-tranh",
    icon: "Ban",
    color: "#B23A2E",
    colorSoft: "#FBEBEA",
    vi: {
      title: "Thực phẩm cần hạn chế hoặc tránh",
      shortTitle: "Thực phẩm cần tránh",
      summary:
        "Danh sách tổng quát — mức độ hạn chế cụ thể tùy theo kết quả xét nghiệm máu và tình trạng riêng của từng người.",
      sections: [
        {
          heading: "Thực phẩm nhiều kali (potassium)",
          items: [
            "Chuối, cam, nước cam, khoai tây, cà chua, bơ, nho khô, các loại đậu khô.",
            "Kali cao bất thường có thể gây rối loạn nhịp tim — rất nguy hiểm nếu không kiểm soát.",
          ],
        },
        {
          heading: "Thực phẩm nhiều phốt pho (phosphorus)",
          items: [
            "Sữa và chế phẩm từ sữa, phô mai, các loại hạt, nội tạng động vật, nước ngọt có gas màu sậm (cola).",
            "Thực phẩm chế biến sẵn thường chứa phụ gia phốt pho ẩn — nên đọc kỹ nhãn thành phần.",
          ],
        },
        {
          heading: "Thực phẩm nhiều natri (muối)",
          items: [
            "Đồ ăn nhanh, thực phẩm đóng hộp, mì gói, nước mắm/nước tương dùng nhiều, đồ muối chua.",
            "Muối cao làm tăng cảm giác khát, dễ gây quá tải dịch.",
          ],
        },
        {
          heading: "Lưu ý quan trọng",
          items: [
            "Danh sách này mang tính tổng quát; mức độ hạn chế cụ thể tùy thuộc vào kết quả xét nghiệm máu và tình trạng riêng.",
            "Luôn trao đổi với chuyên gia dinh dưỡng thận trước khi thay đổi chế độ ăn.",
          ],
        },
      ],
    },
    en: {
      title: "Foods to Limit or Avoid",
      shortTitle: "Foods to Avoid",
      summary:
        "A general list — the specific level of restriction depends on your blood test results and individual condition.",
      sections: [
        {
          heading: "High-potassium foods",
          items: [
            "Bananas, oranges, orange juice, potatoes, tomatoes, avocado, raisins, dried beans.",
            "Abnormally high potassium can cause dangerous heart rhythm problems.",
          ],
        },
        {
          heading: "High-phosphorus foods",
          items: [
            "Milk and dairy products, cheese, nuts, organ meats, dark-colored sodas (cola).",
            "Processed foods often contain hidden phosphorus additives — check ingredient labels closely.",
          ],
        },
        {
          heading: "High-sodium foods",
          items: [
            "Fast food, canned food, instant noodles, heavy use of fish sauce/soy sauce, pickled foods.",
            "High sodium increases thirst and makes fluid overload more likely.",
          ],
        },
        {
          heading: "Important note",
          items: [
            "This list is general; your specific restrictions depend on your blood test results and individual condition.",
            "Always talk with your renal dietitian before changing your diet.",
          ],
        },
      ],
    },
  },
  {
    slug: "cham-soc-giai-doan-cuoi",
    icon: "HeartHandshake",
    color: "#2B3A67",
    colorSoft: "#EAECF3",
    vi: {
      title: "Chăm sóc người bệnh thận giai đoạn cuối",
      shortTitle: "Chăm sóc giai đoạn cuối",
      summary:
        "Hỗ trợ thể chất, tinh thần cho người bệnh — và cả cho chính người chăm sóc.",
      sections: [
        {
          heading: "Hỗ trợ thể chất",
          items: [
            "Phối hợp chặt chẽ với đội ngũ thận và, nếu cần, đội chăm sóc giảm nhẹ (palliative care) để kiểm soát triệu chứng như mệt mỏi, ngứa, buồn nôn, đau.",
            "Theo dõi sát các dấu hiệu bất thường đã nêu ở các mục khác và ghi chép để trao đổi với bác sĩ.",
          ],
        },
        {
          heading: "Hỗ trợ tinh thần và cảm xúc",
          items: [
            "Lắng nghe mà không vội đưa ra giải pháp; nhiều người bệnh giai đoạn cuối cần được chia sẻ cảm xúc hơn là lời khuyên.",
            "Khuyến khích trò chuyện về mong muốn chăm sóc (advance care planning) khi người bệnh sẵn sàng, để tôn trọng nguyện vọng của họ.",
          ],
        },
        {
          heading: "Chăm sóc người chăm sóc (caregiver)",
          items: [
            "Đừng ngần ngại nhờ người thân, bạn bè, hoặc dịch vụ hỗ trợ thay phiên chăm sóc để bạn có thời gian nghỉ ngơi.",
            "Theo dõi sức khỏe tinh thần của chính mình — kiệt sức khi chăm sóc lâu dài là điều rất phổ biến, không phải dấu hiệu yếu đuối.",
            "Tìm hiểu các nhóm hỗ trợ (support group) dành cho người chăm sóc bệnh nhân thận, trực tuyến hoặc tại địa phương.",
          ],
        },
        {
          heading: "Khi cần thêm hỗ trợ chuyên môn",
          items: [
            "Nếu việc chăm sóc trở nên quá sức, hãy trao đổi với nhân viên công tác xã hội (social worker) của đơn vị thận — họ có thể kết nối các nguồn lực hỗ trợ tại nhà.",
          ],
        },
      ],
    },
    en: {
      title: "Caring for a Loved One with End-Stage Kidney Disease",
      shortTitle: "End-Stage Care",
      summary:
        "Physical and emotional support for the patient — and for the caregiver too.",
      sections: [
        {
          heading: "Physical support",
          items: [
            "Work closely with the renal team and, if needed, a palliative care team to manage symptoms like fatigue, itching, nausea, and pain.",
            "Watch closely for the warning signs covered in the other sections, and keep notes to discuss with the doctor.",
          ],
        },
        {
          heading: "Emotional support",
          items: [
            "Listen without rushing to offer solutions; many patients at this stage need to be heard more than advised.",
            "Encourage conversations about advance care planning when the patient is ready, to honor their wishes.",
          ],
        },
        {
          heading: "Caring for the caregiver",
          items: [
            "Don't hesitate to ask family, friends, or respite services to share caregiving duties so you can rest.",
            "Pay attention to your own mental health — caregiver burnout is very common, not a sign of weakness.",
            "Look into support groups for kidney-disease caregivers, whether online or local.",
          ],
        },
        {
          heading: "When to seek more professional support",
          items: [
            "If caregiving becomes overwhelming, talk to the renal unit's social worker — they can connect you to resources for home support.",
          ],
        },
      ],
    },
  },
];

export function getTopic(slug: string) {
  return topics.find((t) => t.slug === slug);
}
