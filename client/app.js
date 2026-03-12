(async () => {
    const icon = (u, l) =>
      '<img class="icon__img" src="' +
      u +
      '" alt="' +
      l +
      '" loading="lazy">';
  
    const iconS = icon(
      'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/spotify.svg',
      'Spotify'
    );
    const iconA = icon(
      'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/applemusic.svg',
      'Apple Music'
    );
    const iconY = icon(
      'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/youtube.svg',
      'YouTube'
    );
    const iconD = icon(
      'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/deezer.svg',
      'Deezer'
    );
  
    const exts = ['webp', 'png', 'jpg', 'jpeg'];
    const shared = ['חלק מהלב', 'סובבת אותי', 'נופל לזה שוב'];
  
    const credits = {
      'תשעבערב':
        'מילים ולחן: אביעד בידרמן, יואב רוזן<br/>הפקה מוזיקלית, מיקס ומאסטר: איתמר אפרים<br/>גיטרות ותכנותים נוספים: אלון סולוז\'ון<br/>ניהול וייצוג: אור הראל',
      'אני לא חוזר':
        'מילים ולחן: יואב רוזן<br/>הפקה, מיקס מאסטר: איתמר אפרים<br/>גיטרות והפקה נוספת: אלון סולוזון<br/>ארט: איתמר אפרים, אור הראל',
      'איזה סימן':
        'מילים ולחן: יואב רוזן, אור הראל<br/>הפקה מוזיקלית, מיקס: איתמר אפרים<br/>קלידים, חצוצרות ותכנותים נוספים: אלון סולוז\'ון<br/>מאסטר: איתמר אפרים, גיא "גיאקו" כהן<br/>ניהול וייצוג: אור הראל',
      'שאלות':
        'מילים ולחן: יואב רוזן<br/>הפקה, מיקס ומאסטר: איתמר אפרים<br/>גיטרות: אלון סולוזון<br/>קולות: אלון סולוזון, איתמר אפרים',
      'הכל בשבילך':
        'מבוסס על היצירה ״זה הכל בשבילך״ של דני סנדרסון<br/>מילים: דני סנדרסון, יואב רוזן<br/>לחן: דני סנדרסון<br/>הפקה, מיקס ומאסטר: איתמר אפרים<br/>ארט: נוגה שהרבני',
      'חלק מהלב':
        'מילים ולחן: יותם ישראל, יואב רוזן<br/>הפקה מוזיקלית, מיקס ומאסטר: איתמר אפרים',
      'סובבת אותי':
        'מילים ולחן: יותם ישראל, יואב רוזן<br/>הפקה מוזיקלית, מיקס ומאסטר: איתמר אפרים',
      'נופל לזה שוב':
        'מילים ולחן: יותם ישראל, יואב רוזן<br/>הפקה, מיקס מאסטר: איתמר אפרים<br/>הפקה נוספת: ירדן יפרח<br/>גיטרות: תומר מלמד<br/>ייעוץ וניהול מוזיקלי: אור הראל'
    };
  
    const songs = [
      {
        title: 'תשעבערב',
        cover: 'תשעבערב',
        youtube: 'qcLMFeMzWqo',
        spotify: 'https://open.spotify.com/search/רוזן%20תשעבערב',
        appleMusic:
          'https://music.apple.com/il/album/תשעבערב/1860877723?i=1860877994',
        fanlink: 'https://fanlink.tv/teshabaerev',
        deezer: 'https://www.deezer.com/us/track/3712862852'
      },
      {
        title: 'אני לא חוזר',
        cover: 'אני לא חוזר',
        youtube: 'LNuwoOi-dwU',
        spotify: 'https://open.spotify.com/search/רוזן%20אני%20לא%20חוזר',
        appleMusic:
          'https://music.apple.com/il/album/אני-לא-חוזר-single/1780986376',
        fanlink: 'https://fanlink.tv/AniLoHozer',
        deezer: 'https://www.deezer.com/us/track/3106775361'
      },
      {
        title: 'איזה סימן',
        cover: 'איזה סימן',
        youtube: '_1bAH2ahM50',
        spotify: 'https://open.spotify.com/search/רוזן%20איזה%20סימן',
        appleMusic:
          'https://music.apple.com/il/album/איזה-סימן/1844466950?i=1844466951',
        fanlink: 'https://fanlink.tv/EizeSimanRosen',
        deezer: 'https://www.deezer.com/us/track/3587183891'
      },
      {
        title: 'שאלות',
        cover: 'שאלות',
        youtube: '_TlQ_YyuFkM',
        spotify: 'https://open.spotify.com/search/רוזן%20שאלות',
        appleMusic:
          'https://music.apple.com/il/album/שאלות/1818493327?i=1818493328',
        fanlink: 'https://fanlink.tv/SheelotRosen',
        deezer: 'https://www.deezer.com/us/track/3397204491'
      },
      {
        title: 'הכל בשבילך',
        cover: 'הכל בשבילך',
        youtube: 'D38oOmW3f8Q',
        spotify: 'https://open.spotify.com/search/רוזן%20הכל%20בשבילך',
        appleMusic:
          'https://music.apple.com/il/album/הכל-בשבילך/1806821953?i=1806821954',
        fanlink: 'https://fanlink.tv/ZeAkol',
        deezer: 'https://www.deezer.com/us/track/3311572851'
      },
      {
        title: 'חלק מהלב',
        cover: 'חלק מהלב',
        youtube: '5d6QkwcZep8',
        spotify: 'https://open.spotify.com/search/רוזן%20חלק%20מהלב',
        appleMusic:
          'https://music.apple.com/il/album/לא-מתחרט-על-כלום/1827646297?i=1827646300',
        deezer: 'https://www.deezer.com/us/track/3466912831'
      },
      {
        title: 'סובבת אותי',
        cover: 'סובבת אותי',
        youtube: 'tmM8v0VhyGY',
        spotify: 'https://open.spotify.com/search/רוזן%20סובבת%20אותי',
        appleMusic:
          'https://music.apple.com/il/album/לא-מתחרט-על-כלום/1827646297?i=1827646301',
        deezer: 'https://www.deezer.com/us/track/3466912841'
      },
      {
        title: 'נופל לזה שוב',
        cover: 'חלק מהלב',
        youtube: 'VO8SK5qJEdw',
        spotify: 'https://open.spotify.com/search/רוזן%20נופל%20לזה%20שוב',
        appleMusic:
          'https://music.apple.com/il/album/נופל-לזה-שוב-feat-רוזן-single/1827752963',
        fanlink: 'https://fanlink.tv/NofelLezeShuv',
        deezer: 'https://www.deezer.com/us/track/3467730521'
      }
    ];
  
    const localCoverMap = {
      'תשעבערב': 'תשעבערב.png',
      'אני לא חוזר': 'אני לא חוזר.png',
      'איזה סימן': 'איזה סימן.JPG',
      'שאלות': 'שאלות.JPG',
      'הכל בשבילך': 'הכל בשבילך.png',
      'חלק מהלב': 'חלק מהלב.JPG',
      'סובבת אותי': 'חלק מהלב.JPG',
      'נופל לזה שוב': 'חלק מהלב.JPG'
    };
  
  const galleryFiles = [
      'IMG_6083 photo 1.JPG',
      'IMG_0216 photo 2.JPG',
      'IMG_0027 photo 3.png',
      'IMG_4113_Original photo 4.jpg',
      '579714ed-2845-4571-a44c-298d03927a3c photo 5.JPG'
    ];
  
    const coverBy = async (t) => {
      const f = localCoverMap[t];
      return f ? 'assets/covers/' + encodeURI(f) : '';
    };
  
    const songsEl = document.getElementById('songs');
    const galleryEl = document.getElementById('galleryGrid');
  
    if (songsEl) {
      songsEl.innerHTML = (
        await Promise.all(
          songs.map(async (s) => {
            const cover = await coverBy(s.cover);
            const yt = s.youtube
              ? 'https://www.youtube.com/watch?v=' + s.youtube
              : 'https://www.youtube.com/results?search_query=' +
                encodeURIComponent('רוזן ' + s.title);
            const note = credits[s.title] || '';
  
            return (
              '<article class="song">' +
              (cover
                ? '<div class="song__cover"><img src="' +
                  cover +
                  '" alt="עטיפה של השיר ' +
                  s.title +
                  '"></div>'
                : '') +
              '<h3>' +
              s.title +
              '</h3>' +
              (note ? '<p class="note">' + note + '</p>' : '') +
              '<div class="song__links">' +
              '<a class="button" href="' +
              (s.spotify ||
                'https://open.spotify.com/search/' +
                  encodeURIComponent('רוזן ' + s.title)) +
              '" target="_blank" rel="noopener">' +
              iconS +
              '</a>' +
              '<a class="button" href="' +
              (s.appleMusic ||
                'https://music.apple.com/il/search?term=' +
                  encodeURIComponent('רוזן ' + s.title)) +
              '" target="_blank" rel="noopener">' +
              iconA +
              '</a>' +
              '<a class="button" href="' +
              yt +
              '" target="_blank" rel="noopener">' +
              iconY +
              '</a>' +
              '<a class="button" href="' +
              (s.deezer || 'https://www.deezer.com/us/artist/150277642') +
              '" target="_blank" rel="noopener">' +
              iconD +
              '</a>' +
              '</div>' +
              '</article>'
            );
          })
        )
      ).join('');
    }
  
    if (galleryEl && galleryFiles.length) {
      galleryEl.innerHTML = galleryFiles
        .map(
          (f, i) =>
            '<div class="gallery-item">' +
            '<img src="assets/gallery/' +
            encodeURI(f) +
            '" alt="תמונה ' +
            (i + 1) +
            ' מהגלריה">' +
            '</div>'
        )
        .join('');

      const galleryPrev = document.getElementById('galleryPrev'); // visually RIGHT arrow
      const galleryNext = document.getElementById('galleryNext'); // visually LEFT arrow
      const galleryItems = galleryEl.querySelectorAll('.gallery-item');
      let galleryIndex = 0;

      function updateArrows() {
        if (!galleryPrev || !galleryNext) return;
        // אם אנחנו על הראשונה – אין עוד שמאלה => להסתיר את החץ השמאלי (LEFT arrow)
        galleryNext.style.visibility = galleryIndex <= 0 ? 'hidden' : 'visible';
        // אם אנחנו על האחרונה – אין עוד ימינה => להסתיר את החץ הימני (RIGHT arrow)
        galleryPrev.style.visibility =
          galleryIndex >= galleryItems.length - 1 ? 'hidden' : 'visible';
      }

      function scrollToIndex(index) {
        if (!galleryItems.length) return;
        galleryIndex = Math.max(0, Math.min(index, galleryItems.length - 1));
        const item = galleryItems[galleryIndex];
        if (item && item.scrollIntoView) {
          item.scrollIntoView({
            behavior: 'smooth',
            inline: 'start',
            block: 'nearest'
          });
        }
        updateArrows();
      }

      function nextSlide() {
        // 3. nextSlide: index++
        scrollToIndex(galleryIndex + 1);
      }

      function prevSlide() {
        // 4. prevSlide: index--
        scrollToIndex(galleryIndex - 1);
      }

      if (galleryPrev) {
        // RIGHT arrow (→) = NEXT slide
        galleryPrev.addEventListener('click', nextSlide);
      }
      if (galleryNext) {
        // LEFT arrow (←) = PREVIOUS slide
        galleryNext.addEventListener('click', prevSlide);
      }

      // להתחיל על התמונה הראשונה ולהגדיר חצים
      scrollToIndex(0);
    }
  
    const y = document.getElementById('year');
    if (y) y.textContent = String(new Date().getFullYear());
  
    // משפטים מתחלפים בהרואו
    const heroQuotes = [
      'המחשבות אצלי בראש זה כמו הר געש',
      'פילוסוף בשקל שנשאר לו בלי מילים',
      'היית לי הסיבה שהאמנתי בניסים',
      'היית לי הסולם בעולם שכולו רק מוקף בנחשים',
      'עדיין לא החלטתי זה שיר של פרידה או פריקה',
      'הרוזן הוא על כס אז זה כס מלוכה',
      'כל סטורי שלך מרגיש לי כמו חתך',
      'יצאת בהצהרות פוליטיקאית אין לך פלאן בי'
    ];
    const heroQuoteEl = document.getElementById('heroQuote');
    let heroQueue = [];

    function shuffleQuotes() {
      heroQueue = heroQuotes
        .slice()
        .sort(() => Math.random() - 0.5);
    }

    function pickHeroQuote() {
      if (!heroQuoteEl || !heroQuotes.length) return;
      if (!heroQueue.length) {
        shuffleQuotes();
      }
      const next = heroQueue.shift();
      heroQuoteEl.textContent = '״' + next + '״';
    }

    if (heroQuoteEl) {
      shuffleQuotes();
      pickHeroQuote();
      setInterval(pickHeroQuote, 3000 + Math.random() * 1000);
    }
  
    // ווידג'ט נגישות
    const bodyEl = document.body;
    const videoEl = document.querySelector('.bg-video');
    const a11yToggle = document.getElementById('accessibilityToggle');
    const a11yPanel = document.getElementById('accessibilityPanel');
    const a11yTextBtn = document.getElementById('a11yText');
    const a11yContrastBtn = document.getElementById('a11yContrast');
    const a11yVideoBtn = document.getElementById('a11yVideo');
  
    function toggleBodyClass(cls) {
      if (!bodyEl) return;
      const has = bodyEl.classList.toggle(cls);
  
      if (cls === 'a11y-no-video' && videoEl) {
        try {
          if (has) videoEl.pause();
          else videoEl.play();
        } catch (_) {}
      }
    }
  
  if (a11yToggle && a11yPanel) {
      a11yToggle.addEventListener('click', () => {
        const open = a11yPanel.style.display === 'block';
        a11yPanel.style.display = open ? 'none' : 'block';
        a11yToggle.setAttribute('aria-expanded', open ? 'false' : 'true');
        a11yPanel.setAttribute('aria-hidden', open ? 'true' : 'false');
      });
  
      document.addEventListener('click', (e) => {
        if (!a11yPanel || !a11yToggle) return;
        if (a11yPanel.style.display !== 'block') return;
        const t = e.target;
        if (
          t !== a11yPanel &&
          t !== a11yToggle &&
          !a11yPanel.contains(t)
        ) {
          a11yPanel.style.display = 'none';
          a11yToggle.setAttribute('aria-expanded', 'false');
          a11yPanel.setAttribute('aria-hidden', 'true');
        }
      });
  
      if (a11yTextBtn) {
        a11yTextBtn.addEventListener('click', () =>
          toggleBodyClass('a11y-large-text')
        );
      }
      if (a11yContrastBtn) {
        a11yContrastBtn.addEventListener('click', () =>
          toggleBodyClass('a11y-high-contrast')
        );
      }
      if (a11yVideoBtn) {
        a11yVideoBtn.addEventListener('click', () =>
          toggleBodyClass('a11y-no-video')
        );
      }
    }

  // גלילה למטה מההרואו
  const scrollIndicator = document.getElementById('scrollIndicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const target = document.getElementById('music');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // החלפת רקע לווידאו/תמונה לפי גלילה
  window.addEventListener('scroll', () => {
    if (!bodyEl) return;
    const y = window.scrollY || window.pageYOffset || 0;
    if (y > 80) {
      bodyEl.classList.add('scrolled-bg');
    } else {
      bodyEl.classList.remove('scrolled-bg');
    }
  });
  })();