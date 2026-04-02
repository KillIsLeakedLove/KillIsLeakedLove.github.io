// Translations
const i18n = {
  zh: {
    navHome: '首页',
    navBlog: '博客',
    navAbout: '关于',
    themeLight: '明亮',
    themeDark: '黑暗',
    themeSystem: '系统',
    heroTitle: '艺术 · 生活 · 思考',
    heroSubtitle: '在代码与画笔之间寻找平衡',
    blogTitle: '博客文章',
    backToBlog: '返回博客',
    readTime8: '8 分钟',
    readTime6: '6 分钟',
    readTime7: '7 分钟',
    readTime10: '10 分钟',
    article1Title: '梵高：燃烧的灵魂',
    article1Excerpt: '文森特·梵高，这位荷兰后印象派画家，用他短暂而炽热的生命，为世界留下了无数珍贵的艺术遗产...',
    article2Title: '浮世绘的艺术魅力',
    article2Excerpt: '浮世绘是日本江户时代兴起的一种独特的艺术形式，以其精美的线条和鲜明的色彩闻名于世...',
    article3Title: '光影大师维米尔',
    article3Excerpt: '约翰内斯·维米尔是荷兰黄金时代最伟大的画家之一，他以其对光线的精妙处理而闻名...',
    article4Title: '达·芬奇的永恒之谜',
    article4Excerpt: '列奥纳多·达·芬奇是文艺复兴时期最杰出的代表之一。《蒙娜丽莎》那神秘的微笑...',
    aboutTitle: '关于我',
    aboutDesc: '一个热爱艺术与技术的创作者',
    introTitle: '简介',
    introText: '你好，我是 Art Blog 的创作者。我是一名热爱艺术与技术的开发者。在这个博客中，我希望分享对世界名画的欣赏与思考，探索艺术背后的历史与文化。',
    passionText: '我相信艺术能够跨越时空，触动每一个人的心灵。无论是梵高的星空，还是维米尔的光影，都蕴含着人类最深刻的情感表达。',
    skillsTitle: '技能与兴趣',
    skill1: '前端开发',
    skill2: 'UI/UX 设计',
    skill3: '艺术史研究',
    skill4: '摄影',
    contactTitle: '联系方式',
    footer: '用热爱构建',
    // Article content
    article1Content: `文森特·梵高，这位荷兰后印象派画家，用他短暂而炽热的生命，为世界留下了无数珍贵的艺术遗产。

《星月夜》创作于1889年，是梵高在圣雷米精神病院期间的作品。画面中旋转的星空、起伏的山峦、宁静的村庄，构成了一幅充满动感的夜景。那些漩涡状的星云，仿佛是他内心激情的具象化表达。

梵高的一生充满了苦难与挣扎，但他从未放弃对艺术的追求。在阿尔勒的黄色小屋中，他创作了大量杰作。他的笔触粗犷有力，色彩浓烈奔放，每一幅画都仿佛在燃烧着他的生命。

"我梦想着绘画，我画着我的梦想。"——文森特·梵高`,
    article2Content: `浮世绘是日本江户时代兴起的一种独特的艺术形式，以其精美的线条和鲜明的色彩闻名于世。

葛饰北斋的《神奈川冲浪里》是浮世绘最著名的作品之一。画面中巨大的海浪仿佛要吞噬一切，而远处的富士山却岿然不动，形成强烈的对比。这种对自然力量的描绘，体现了日本人对自然的敬畏。

浮世绘不仅影响了日本本土的艺术发展，更对西方的印象派画家产生了深远的影响。梵高的作品中就能看到浮世绘的影子，他曾多次临摹浮世绘作品，并将其融入自己的创作中。

浮世绘的"浮世"二字，意为"浮世"或"尘世"，表达了及时行乐的人生态度。这种艺术形式记录了江户时代市民生活的方方面面，是了解日本历史文化的珍贵资料。`,
    article3Content: `约翰内斯·维米尔是荷兰黄金时代最伟大的画家之一，他以其对光线的精妙处理而闻名。

《戴珍珠耳环的少女》被誉为"北方的蒙娜丽莎"。画中少女回眸的瞬间，那神秘的目光仿佛能穿透时空，与观者进行无声的对话。珍珠耳环在暗色背景中闪烁着柔和的光芒，成为整幅画的焦点。

维米尔的作品数量稀少，但每一幅都是精品。他善于运用暗箱技术，创造出独特的光影效果。他的画作中，光线仿佛有了生命，静静地流淌在画面之中。

维米尔对色彩的运用也极为讲究。他常常使用昂贵的群青颜料，这种从青金石中提取的蓝色，赋予了他的作品独特的魅力。`,
    article4Content: `列奥纳多·达·芬奇是文艺复兴时期最杰出的代表之一。《蒙娜丽莎》那神秘的微笑，数百年来一直吸引着无数观众和艺术史学家。

这幅画作于1503年至1519年间，是达·芬奇最具代表性的作品。画中女子的微笑若隐若现，不同的角度、不同的光线，都会给人不同的感受。这种"渐隐法"技法的运用，使得画面产生了神秘的氛围。

达·芬奇不仅是一位画家，还是科学家、发明家、解剖学家。他的笔记本中充满了各种奇思妙想，许多设计在当时看来简直是天方夜谭，但在今天却成为了现实。直升机、坦克、机器人的雏形，都能在他的笔记中找到。

《蒙娜丽莎》现藏于巴黎卢浮宫，每年吸引着数百万游客前来瞻仰。她的微笑，将永远是艺术史上最迷人的谜题。`,
  },
  en: {
    navHome: 'Home',
    navBlog: 'Blog',
    navAbout: 'About',
    themeLight: 'Light',
    themeDark: 'Dark',
    themeSystem: 'System',
    heroTitle: 'Art · Life · Thoughts',
    heroSubtitle: 'Finding balance between code and brush',
    blogTitle: 'Blog Posts',
    backToBlog: 'Back to Blog',
    readTime8: '8 min',
    readTime6: '6 min',
    readTime7: '7 min',
    readTime10: '10 min',
    article1Title: 'Van Gogh: Burning Soul',
    article1Excerpt: 'Vincent van Gogh, the Dutch Post-Impressionist painter, left countless precious artistic legacies to the world...',
    article2Title: 'The Art of Ukiyo-e',
    article2Excerpt: 'Ukiyo-e is a unique art form that emerged during Japan\'s Edo period, renowned worldwide...',
    article3Title: 'Vermeer: Master of Light',
    article3Excerpt: 'Johannes Vermeer was one of the greatest painters of the Dutch Golden Age...',
    article4Title: 'Da Vinci: Eternal Mystery',
    article4Excerpt: 'Leonardo da Vinci was one of the most outstanding representatives of the Renaissance period...',
    aboutTitle: 'About Me',
    aboutDesc: 'A creator passionate about art and technology',
    introTitle: 'Introduction',
    introText: 'Hello, I am the creator of Art Blog. I am a developer passionate about art and technology. In this blog, I hope to share my appreciation and thoughts on world-famous paintings, exploring the history and culture behind art.',
    passionText: 'I believe that art can transcend time and space, touching everyone\'s heart. Whether it is Van Gogh\'s starry sky or Vermeer\'s light and shadow, they all contain the deepest emotional expression of humanity.',
    skillsTitle: 'Skills & Interests',
    skill1: 'Frontend Dev',
    skill2: 'UI/UX Design',
    skill3: 'Art History',
    skill4: 'Photography',
    contactTitle: 'Contact',
    footer: 'Built with love',
    // Article content
    article1Content: `Vincent van Gogh, the Dutch Post-Impressionist painter, left countless precious artistic legacies to the world with his short and passionate life.

"The Starry Night" was created in 1889 during Van Gogh's stay at the Saint-Paul-de-Mausole asylum. The swirling sky, rolling hills, and quiet village form a dynamic night scene. Those spiral nebulae seem to be the concrete expression of his inner passion.

Van Gogh's life was full of suffering and struggle, but he never gave up his pursuit of art. In the Yellow House in Arles, he created numerous masterpieces. His brushstrokes are bold and powerful, his colors intense and unrestrained—each painting seems to be burning with his life.

"I dream of painting, and then I paint my dream." — Vincent van Gogh`,
    article2Content: `Ukiyo-e is a unique art form that emerged during Japan's Edo period, renowned worldwide for its exquisite lines and vivid colors.

Katsushika Hokusai's "The Great Wave off Kanagawa" is one of the most famous ukiyo-e works. The massive wave in the painting seems to swallow everything, while Mount Fuji in the distance remains unmoved, creating a strong contrast. This depiction of natural power reflects the Japanese reverence for nature.

Ukiyo-e not only influenced the development of Japanese art but also had a profound impact on Western Impressionist painters. Van Gogh's works show the influence of ukiyo-e—he copied ukiyo-e works many times and incorporated them into his own creations.

The term "ukiyo" means "floating world" or "secular world," expressing a carpe diem attitude toward life. This art form recorded various aspects of Edo period civilian life and is precious material for understanding Japanese history and culture.`,
    article3Content: `Johannes Vermeer was one of the greatest painters of the Dutch Golden Age, renowned for his exquisite treatment of light.

"Girl with a Pearl Earring" is known as the "Mona Lisa of the North." The moment the girl turns her head, that mysterious gaze seems to penetrate time and space, engaging in a silent dialogue with the viewer. The pearl earring shines with soft light against the dark background, becoming the focal point of the entire painting.

Vermeer's works are few in number, but each one is a masterpiece. He was skilled at using the camera obscura technique to create unique lighting effects. In his paintings, light seems to have life, flowing quietly through the canvas.

Vermeer was also extremely particular about color. He often used expensive ultramarine pigment, a blue extracted from lapis lazuli, which gave his works unique charm.`,
    article4Content: `Leonardo da Vinci was one of the most outstanding representatives of the Renaissance period. The mysterious smile of the Mona Lisa has attracted countless viewers and art historians for hundreds of years.

This painting was created between 1503 and 1519 and is Da Vinci's most representative work. The woman's smile is elusive—different angles and different lighting give different impressions. The use of the "sfumato" technique creates a mysterious atmosphere in the painting.

Da Vinci was not only a painter but also a scientist, inventor, and anatomist. His notebooks were filled with various ingenious ideas. Many designs seemed like fantasies at the time, but have become reality today. The prototypes of helicopters, tanks, and robots can all be found in his notes.

The Mona Lisa is now housed in the Louvre in Paris, attracting millions of visitors each year. Her smile will always be the most enchanting mystery in art history.`,
  },
};

// Current language
let currentLang = localStorage.getItem('lang') || 'zh';

// Update all i18n elements
function updateLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[currentLang][key]) {
      el.textContent = i18n[currentLang][key];
    }
  });
}

// Set language
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  updateLanguage();
}

// Initialize
updateLanguage();
