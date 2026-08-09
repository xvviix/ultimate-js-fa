document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Layout & Theme ---
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    const closeSidebarBtn = document.getElementById('closeSidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    function openSidebar() { sidebar.classList.add('open'); sidebarOverlay.classList.add('show'); document.body.style.overflow = 'hidden'; }
    function closeSidebar() { sidebar.classList.remove('open'); sidebarOverlay.classList.remove('show'); document.body.style.overflow = ''; }

    if (menuToggle) { menuToggle.addEventListener('click', () => { if (window.innerWidth <= 992) { openSidebar(); } else { sidebar.classList.toggle('desktop-closed'); } }); }
    if (closeSidebarBtn) { closeSidebarBtn.addEventListener('click', closeSidebar); closeSidebarBtn.addEventListener('touchstart', function(e) { e.preventDefault(); closeSidebar(); }, {passive: false}); }
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

    const themeToggleBtn = document.getElementById('themeToggleBtn');
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('js-mastery-theme', theme);
        if (themeToggleBtn) { themeToggleBtn.innerHTML = theme === 'light' ? '☀️' : '🌙'; }
    }
    function initTheme() {
        const savedTheme = localStorage.getItem('js-mastery-theme');
        if (savedTheme) { setTheme(savedTheme); } 
        else { setTheme(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); }
    }
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            themeToggleBtn.style.transform = 'scale(0.8) rotate(180deg)';
            setTimeout(() => { setTheme(newTheme); themeToggleBtn.style.transform = 'scale(1) rotate(0deg)'; }, 150);
        });
    }
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('js-mastery-theme')) setTheme(e.matches ? 'dark' : 'light');
    });
    initTheme();

    // --- 2. Global Modals (Search, Bookmarks, CheatSheet, Toast) ---
    function showToast(message) {
        let toast = document.getElementById('globalToast');
        if (!toast) { toast = document.createElement('div'); toast.id = 'globalToast'; toast.className = 'toast-notification'; document.body.appendChild(toast); }
        toast.innerText = message; toast.classList.add('show');
        if(window.toastTimeout) clearTimeout(window.toastTimeout);
        window.toastTimeout = setTimeout(() => toast.classList.remove('show'), 2500);
    }

    const searchModal = document.getElementById('searchModal');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchToggleBtn = document.getElementById('searchToggleBtn');
    function openSearch() { searchModal.classList.add('active'); searchOverlay.classList.add('active'); searchInput.value = ''; searchResults.innerHTML = '<div class="search-empty">عبارتی را وارد کنید.</div>'; setTimeout(()=>searchInput.focus(),100); }
    function closeSearch() { searchModal.classList.remove('active'); searchOverlay.classList.remove('active'); }
    if(searchToggleBtn) searchToggleBtn.addEventListener('click', openSearch);
    if(searchOverlay) searchOverlay.addEventListener('click', closeSearch);

    if(searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (query.length < 2) { searchResults.innerHTML = '<div class="search-empty">حداقل ۲ حرف وارد کنید.</div>'; return; }
            const results = [];
            for (const [id, chapter] of Object.entries(window.chaptersData)) {
                if(id === 'ch-cert') continue;
                const cleanDesc = chapter.desc.replace(/<[^>]*>?/gm, '');
                if (chapter.title.toLowerCase().includes(query) || cleanDesc.toLowerCase().includes(query)) {
                    results.push({ id, chapter, cleanDesc });
                }
            }
            if (results.length === 0) { searchResults.innerHTML = '<div class="search-empty">هیچ نتیجه‌ای یافت نشد.</div>'; return; }
            searchResults.innerHTML = results.map(r => `
                <div class="search-item" onclick="window.location.hash='#${r.id}'; document.getElementById('searchOverlay').click();">
                    <div class="search-item-title">${r.chapter.title} <span class="search-item-badge">${r.chapter.badge}</span></div>
                    <div class="search-item-desc">${r.cleanDesc.substring(0, 80)}...</div>
                </div>
            `).join('');
        });
    }

    const bookmarksPanel = document.getElementById('bookmarksPanel');
    const bookmarkToggleBtn = document.getElementById('bookmarkToggleBtn');
    const closeBookmarksBtn = document.getElementById('closeBookmarksBtn');
    const bookmarksList = document.getElementById('bookmarksList');
    function renderBookmarksList() {
        if(!bookmarksList) return;
        let bookmarks = JSON.parse(localStorage.getItem('js-mastery-bookmarks') || '[]');
        if (bookmarks.length === 0) { bookmarksList.innerHTML = '<div class="search-empty" style="padding:20px;">هیچ درسی نشانه‌گذاری نشده است.</div>'; return; }
        bookmarksList.innerHTML = bookmarks.map(b => `
            <div class="bookmark-item">
                <div style="flex:1;" onclick="window.location.hash='#${b.id}'; document.getElementById('bookmarksPanel').classList.remove('open');">
                    <div style="font-weight:bold; color:var(--primary); font-size:0.9rem;">${b.title}</div>
                </div>
                <button class="bookmark-remove" data-id="${b.id}" title="حذف">×</button>
            </div>
        `).join('');
        document.querySelectorAll('.bookmark-remove').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                let id = this.getAttribute('data-id');
                let bookmarks = JSON.parse(localStorage.getItem('js-mastery-bookmarks') || '[]');
                bookmarks = bookmarks.filter(b => b.id !== id);
                localStorage.setItem('js-mastery-bookmarks', JSON.stringify(bookmarks));
                renderBookmarksList();
                const pageBtn = document.getElementById('btnBookmarkPage');
                if (pageBtn && pageBtn.getAttribute('data-id') === id) {
                    pageBtn.className = 'btn-bookmark-chapter';
                    pageBtn.style.color = ''; pageBtn.style.borderColor = ''; pageBtn.style.background = '';
                    pageBtn.innerHTML = '<span class="btn-icon">🔖</span> <span>نشانه‌گذاری</span>';
                }
            });
        });
    }
    if(bookmarkToggleBtn) { bookmarkToggleBtn.addEventListener('click', () => { bookmarksPanel.classList.add('open'); renderBookmarksList(); }); }
    if(closeBookmarksBtn) { closeBookmarksBtn.addEventListener('click', () => { bookmarksPanel.classList.remove('open'); }); closeBookmarksBtn.addEventListener('touchstart', (e) => { e.preventDefault(); bookmarksPanel.classList.remove('open'); }, {passive: false}); }

    const cheatSheetBtn = document.getElementById('cheatSheetBtn');
    const cheatSheetModal = document.getElementById('cheatSheetModal');
    const closeCheatSheetBtn = document.getElementById('closeCheatSheetBtn');
    if(cheatSheetBtn) cheatSheetBtn.addEventListener('click', () => cheatSheetModal.classList.add('open'));
    if(closeCheatSheetBtn) closeCheatSheetBtn.addEventListener('click', () => cheatSheetModal.classList.remove('open'));

    document.querySelectorAll('.cs-item').forEach(item => {
        item.setAttribute('title', 'کلیک برای کپی کد');
        item.addEventListener('click', () => {
            const tagElement = item.querySelector('.cs-tag');
            if(tagElement) {
                navigator.clipboard.writeText(tagElement.innerText.trim()).then(() => { showToast('کپی شد: ' + tagElement.innerText.trim()); });
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); if (searchModal.classList.contains('active')) closeSearch(); else openSearch(); }
        if (e.key === 'Escape') { closeSearch(); closeSidebar(); if(bookmarksPanel) bookmarksPanel.classList.remove('open'); if(cheatSheetModal) cheatSheetModal.classList.remove('open'); }
    });

    // --- 3. Syntax Highlighters ---
    function highlightJS(code) {
        let text = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const comments = [];
        text = text.replace(/\/\/[^\n]*|\/\*[\s\S]*?\*\//g, match => { comments.push(match); return `__COMMENT_${comments.length - 1}__`; });
        
        // Strings
        text = text.replace(/(["'`])(?:(?=(\\?))\2.)*?\1/g, '<span class="hl-string">$&</span>');
        // Keywords
        text = text.replace(/\b(const|let|var|function|return|if|else|for|while|async|await|try|catch|new|class|true|false)\b/g, '<span class="hl-keyword">$1</span>');
        // Functions
        text = text.replace(/\b([a-zA-Z0-9_]+)(?=\s*\()/g, '<span class="hl-func">$1</span>');
        // Numbers
        text = text.replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="hl-number">$1</span>');
        
        text = text.replace(/__COMMENT_(\d+)__/g, (m, i) => `<span class="hl-comment">${comments[i]}</span>`);
        return text;
    }

    function highlightHTML(code) {
        let html = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        html = html.replace(/(&lt;\/?)([a-zA-Z0-9\-]+)(.*?)(\/?&gt;)/g, (match, p1, tag, attrs, p4) => {
            let highlightedAttrs = attrs.replace(/([a-zA-Z0-9\-]+)(?:(=)(&quot;.*?&quot;|'.*?'|[^\s&gt;]+))?/g, (m, attrName, eq, attrVal) => {
                let res = `<span class="hl-attr">${attrName}</span>`;
                if (eq && attrVal) res += `<span class="hl-punct">${eq}</span><span class="hl-string">${attrVal}</span>`;
                return res;
            });
            return `<span class="hl-punct">${p1}</span><span class="hl-tag">${tag}</span>${highlightedAttrs}<span class="hl-punct">${p4}</span>`;
        });
        return html;
    }

    // --- 4. Live Editor System (JS Console Execution + DOM) ---
    class LiveEditor {
        constructor(el) {
            this.container = el;
            this.tabs = el.querySelectorAll('.le-tab');
            this.wrappers = el.querySelectorAll('.le-editor-wrapper');
            this.jsTextarea = el.querySelector('.js-code');
            this.htmlTextarea = el.querySelector('.html-code');
            this.jsPre = el.querySelector('.js-hl');
            this.htmlPre = el.querySelector('.html-hl');
            this.iframe = el.querySelector('.le-iframe'); // Target for DOM DOM
            this.consoleOutput = el.querySelector('.console-output'); // Target for JS logs
            
            this.resetBtn = el.querySelector('.le-reset');
            this.runBtn = el.querySelector('.le-run');
            
            this.initialJS = this.jsTextarea ? this.jsTextarea.value.trim() : '';
            this.initialHTML = this.htmlTextarea ? this.htmlTextarea.value.trim() : '';
            
            if(this.jsTextarea) this.jsTextarea.value = this.initialJS;
            if(this.htmlTextarea) this.htmlTextarea.value = this.initialHTML;
            
            this.init();
        }

        init() {
            // Tabs
            this.tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    this.tabs.forEach(t => t.classList.remove('active'));
                    this.wrappers.forEach(w => { w.classList.remove('active'); w.style.display = 'none'; });
                    tab.classList.add('active');
                    const targetWrapper = this.container.querySelector('#' + tab.dataset.target + '-editor');
                    if(targetWrapper) {
                        targetWrapper.style.display = 'block';
                        setTimeout(() => targetWrapper.classList.add('active'), 10);
                    }
                });
            });

            // Textareas sync
            [ {ta: this.jsTextarea, pre: this.jsPre}, {ta: this.htmlTextarea, pre: this.htmlPre} ].forEach(pair => {
                if(!pair.ta) return;
                pair.ta.addEventListener('scroll', () => { pair.pre.scrollTop = pair.ta.scrollTop; pair.pre.scrollLeft = pair.ta.scrollLeft; });
                pair.ta.addEventListener('input', () => this.updateSyntax());
                pair.ta.addEventListener('keydown', (e) => {
                    if (e.key === 'Tab') {
                        e.preventDefault();
                        const start = pair.ta.selectionStart;
                        const end = pair.ta.selectionEnd;
                        pair.ta.value = pair.ta.value.substring(0, start) + '  ' + pair.ta.value.substring(end);
                        pair.ta.selectionStart = pair.ta.selectionEnd = start + 2;
                        this.updateSyntax();
                    }
                });
            });

            if (this.resetBtn) {
                this.resetBtn.addEventListener('click', () => {
                    if(this.jsTextarea) this.jsTextarea.value = this.initialJS;
                    if(this.htmlTextarea) this.htmlTextarea.value = this.initialHTML;
                    this.updateSyntax();
                    if(this.consoleOutput) this.consoleOutput.innerHTML = '';
                    if(this.iframe) this.iframe.srcdoc = '';
                    
                    const originalHTML = this.resetBtn.innerHTML;
                    this.resetBtn.innerHTML = '<span class="btn-icon">✓</span> انجام شد';
                    this.resetBtn.style.color = 'var(--success)'; this.resetBtn.style.borderColor = 'var(--success)';
                    setTimeout(() => { this.resetBtn.innerHTML = originalHTML; this.resetBtn.style.color = ''; this.resetBtn.style.borderColor = ''; }, 1500);
                });
            }

            if (this.runBtn) {
                this.runBtn.addEventListener('click', () => {
                    this.execute();
                    const originalHTML = this.runBtn.innerHTML;
                    this.runBtn.innerHTML = '<span class="btn-icon">🔄</span>';
                    setTimeout(() => { this.runBtn.innerHTML = originalHTML; }, 300);
                });
            }

            this.updateSyntax();
        }

        updateSyntax() {
            if(this.jsPre && this.jsTextarea) this.jsPre.innerHTML = highlightJS(this.jsTextarea.value) + '<br>';
            if(this.htmlPre && this.htmlTextarea) this.htmlPre.innerHTML = highlightHTML(this.htmlTextarea.value) + '<br>';
        }


        execute() {
            const jsCode = this.jsTextarea ? this.jsTextarea.value : '';
            const htmlCode = this.htmlTextarea ? this.htmlTextarea.value : '';
            
            if (this.iframe && htmlCode) {
                const scriptInjection = '<script>' +
                    'window.onerror = function(msg) { document.body.innerHTML += \'<div style="color:red; font-family:monospace; margin-top:10px;">Error: \' + msg + \'</div>\'; return false; };' +
                    jsCode +
                    '<\/script>';
                const baseStyles = '<style>body{font-family:system-ui,-apple-system,sans-serif; line-height:1.6; color:#1f2937; padding:20px; margin:0; direction:rtl;}</style>';
                this.iframe.srcdoc = baseStyles + htmlCode + scriptInjection;
            } 
            else if (this.consoleOutput) {
                this.consoleOutput.innerHTML = ''; 
                
                let sandbox = document.getElementById('js-sandbox-iframe');
                if (!sandbox) {
                    sandbox = document.createElement('iframe');
                    sandbox.id = 'js-sandbox-iframe';
                    sandbox.style.display = 'none';
                    sandbox.setAttribute('sandbox', 'allow-scripts');
                    document.body.appendChild(sandbox);
                }

                const messageHandler = (e) => {
                    if (e.data.source === 'js-sandbox') {
                        const { type, args } = e.data;
                        let formattedArgs = args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ');
                        let color = 'var(--text-main)';
                        if (type === 'error') color = 'var(--danger)';
                        else if (type === 'warn') color = 'var(--warning)';
                        this.consoleOutput.innerHTML += `<div style="color:${color}; margin-bottom:4px;">> ${formattedArgs}</div>`;
                        this.consoleOutput.scrollTop = this.consoleOutput.scrollHeight;
                    }
                };

                if (window.currentSandboxListener) {
                    window.removeEventListener('message', window.currentSandboxListener);
                }
                window.currentSandboxListener = messageHandler;
                window.addEventListener('message', messageHandler);

                const scriptInjection = '<script>' +
                    'const console = {' +
                    '    log: (...args) => window.parent.postMessage({source: "js-sandbox", type: "log", args}, "*"),' +
                    '    error: (...args) => window.parent.postMessage({source: "js-sandbox", type: "error", args}, "*"),' +
                    '    warn: (...args) => window.parent.postMessage({source: "js-sandbox", type: "warn", args}, "*")' +
                    '};' +
                    'window.onerror = (msg) => { console.error(msg); return false; };' +
                    '(async function() {' +
                    '    try {' +
                             jsCode +
                    '    } catch(e) {' +
                    '        console.error(e.message);' +
                    '    }' +
                    '    setTimeout(() => window.parent.postMessage({source: "js-sandbox", type: "finish", args: []}, "*"), 50);' +
                    '})();' +
                    '<\/script>';

                sandbox.srcdoc = scriptInjection;

                setTimeout(() => {
                    if (this.consoleOutput.innerHTML === '') {
                        this.consoleOutput.innerHTML = '<div style="color:var(--text-muted); font-style:italic;">(هیچ خروجی در کنسول چاپ نشد)</div>';
                    }
                }, 150);
            }
        }
    }

    function initLiveEditors() {
        document.querySelectorAll('.live-editor').forEach(el => {
            if (!el.dataset.initialized) { new LiveEditor(el); el.dataset.initialized = 'true'; }
        });
    }

    // --- 5. Quizzes ---
    class QuizWidget {
        constructor(el) {
            this.container = el;
            this.options = el.querySelectorAll('.quiz-option');
            this.submitBtn = el.querySelector('.btn-quiz-submit');
            this.feedback = el.querySelector('.quiz-feedback');
            this.correctIndex = parseInt(el.dataset.correct, 10);
            this.explanation = el.dataset.explanation || '';
            this.isAnswered = false;
            this.questionText = el.querySelector('.quiz-question').innerText.substring(0, 20).replace(/\s+/g, '');
            this.init();
        }

        init() {
            const quizId = 'jsquiz-' + window.location.hash.substring(1) + '-' + this.questionText;
            const savedState = localStorage.getItem(quizId);
            
            if (savedState === 'correct' || savedState === 'wrong') {
                this.isAnswered = true;
                this.options[this.correctIndex].classList.add('correct', 'answered');
                this.submitBtn.style.display = 'none';
                this.options.forEach(opt => opt.classList.add('answered'));
                if (savedState === 'correct') {
                    this.feedback.className = 'quiz-feedback success';
                    this.feedback.innerHTML = `<strong>پاسخ شما قبلاً ثبت شده است. 🎉</strong><br>${this.explanation}`;
                } else {
                    this.feedback.className = 'quiz-feedback error';
                    this.feedback.innerHTML = `<strong>پاسخ اشتباه قبلاً ثبت شده است. ❌</strong><br>${this.explanation}`;
                }
            }

            this.options.forEach((opt, index) => {
                opt.addEventListener('click', () => {
                    if (this.isAnswered) return;
                    this.options.forEach(o => o.classList.remove('selected'));
                    opt.classList.add('selected');
                    opt.dataset.index = index;
                    this.submitBtn.classList.add('active');
                });
            });

            this.submitBtn.addEventListener('click', () => {
                if (this.isAnswered) return;
                const selectedOpt = this.container.querySelector('.quiz-option.selected');
                if (!selectedOpt) return;
                this.isAnswered = true;
                const selectedIndex = parseInt(selectedOpt.dataset.index, 10);
                const isCorrect = selectedIndex === this.correctIndex;
                this.options.forEach(opt => opt.classList.add('answered'));
                this.submitBtn.style.display = 'none';

                if (isCorrect) {
                    selectedOpt.classList.add('correct');
                    this.feedback.className = 'quiz-feedback success';
                    this.feedback.innerHTML = `<strong>آفرین! پاسخ صحیح است. 🎉</strong><br>${this.explanation}`;
                    localStorage.setItem(quizId, 'correct');
                } else {
                    selectedOpt.classList.add('wrong');
                    this.options[this.correctIndex].classList.add('correct');
                    this.feedback.className = 'quiz-feedback error';
                    this.feedback.innerHTML = `<strong>پاسخ اشتباه بود! ❌</strong><br>${this.explanation}`;
                    localStorage.setItem(quizId, 'wrong');
                }
            });
        }
    }
    function initQuizzes() { document.querySelectorAll('.quiz-container').forEach(el => { if (!el.dataset.initialized) { new QuizWidget(el); el.dataset.initialized = 'true'; } }); }

    // --- 6. Routing & Progress Logic ---
    const appContent = document.getElementById('appContent');
    const mainScrollArea = document.getElementById('mainScrollArea');
    const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');
    const chapterKeys = Object.keys(window.chaptersData);

    function updateProgressUI() {
        let completed = JSON.parse(localStorage.getItem('js-mastery-progress') || '[]');
        let total = chapterKeys.filter(k => k !== 'ch-cert').length;
        let cCount = completed.filter(c => chapterKeys.includes(c) && c !== 'ch-cert').length;
        let percentage = total > 0 ? Math.round((cCount / total) * 100) : 0;
        const persianPercentage = percentage.toString().replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
        
        const progressFill = document.querySelector('.progress-fill');
        const progressText = document.querySelector('.progress-info span:last-child');
        if (progressFill) progressFill.style.width = percentage + '%';
        if (progressText) progressText.innerText = persianPercentage + '٪';
        
        document.querySelectorAll('.sidebar-nav li').forEach(li => {
            const link = li.querySelector('a');
            if (link) {
                const hrefId = link.getAttribute('href').substring(1);
                li.classList.toggle('is-completed', completed.includes(hrefId));
            }
        });
    }

    function renderChapter(chapterId) {
        const chapter = window.chaptersData[chapterId] || window.chaptersData[chapterKeys[0]]; 
        const currentId = window.chaptersData[chapterId] ? chapterId : chapterKeys[0];
        const currentIndex = chapterKeys.indexOf(currentId);
        const prevId = currentIndex > 0 ? chapterKeys[currentIndex - 1] : null;
        const nextId = currentIndex < chapterKeys.length - 1 ? chapterKeys[currentIndex + 1] : null;

        let completed = JSON.parse(localStorage.getItem('js-mastery-progress') || '[]');
        let isCurrentCompleted = completed.includes(currentId);
        let bookmarks = JSON.parse(localStorage.getItem('js-mastery-bookmarks') || '[]');
        let isBookmarked = bookmarks.some(b => b.id === currentId);

        let navButtons = `<div>`;
        if(currentId !== 'ch-cert') {
            navButtons += `<button class="btn-complete ${isCurrentCompleted ? 'is-completed' : ''}" id="btnComplete" data-id="${currentId}">
                <span class="btn-icon">${isCurrentCompleted ? '✓' : '☐'}</span> 
                <span>${isCurrentCompleted ? 'تکمیل شده' : 'علامت به عنوان تکمیل'}</span>
            </button>`;
        }
        navButtons += `</div><div style="display:flex; gap: 12px;">`;

        if (prevId) navButtons += `<button class="btn-nav" onclick="window.location.hash='#${prevId}'" style="background: var(--bg-surface); color: var(--text-main); border: 1px solid var(--border); padding: 10px 20px; border-radius: 8px; cursor: pointer;">← قبلی</button>`;
        if (nextId) navButtons += `<button class="btn-nav" onclick="window.location.hash='#${nextId}'" style="background: var(--primary); color: #0f172a; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight:bold;">بعدی →</button>`;
        navButtons += `</div>`;
        
        let notes = localStorage.getItem('js-mastery-notes-' + currentId) || '';
        let notesHTML = currentId !== 'ch-cert' ? `
            <div class="personal-notes" style="display:flex; flex-direction:column; margin-top: 20px; margin-bottom: 20px; background:var(--bg-surface); padding: 20px; border-radius:12px; border:1px solid var(--border);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 15px;">
                    <h3 style="color: var(--primary); font-size: 1.1rem; margin:0;"><span class="btn-icon">✍️</span> دفترچه یادداشت شما</h3>
                    <span style="font-size:0.8rem; color:var(--text-muted);">ذخیره خودکار 💾</span>
                </div>
                <textarea id="chapterNotes" placeholder="نکات مهم این فصل را برای مرور در آینده اینجا بنویسید..." style="position:relative !important; background:var(--bg-main); border:1px solid var(--border); border-radius:8px; height:120px; width:100%; color:var(--text-main); font-family:var(--font-fa); padding: 15px; resize: vertical; line-height:1.6; outline:none; transition:0.2s;" onfocus="this.style.borderColor='var(--primary)'" onblur="this.style.borderColor='var(--border)'">${notes}</textarea>
            </div>
        ` : '';

        appContent.classList.remove('fade-enter');
        
        setTimeout(() => {
            appContent.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                    <div class="chapter-badge">${chapter.badge}</div>
                    ${currentId !== 'ch-cert' ? `<button class="btn-bookmark-chapter ${isBookmarked ? 'is-bookmarked' : ''}" id="btnBookmarkPage" data-id="${currentId}" data-title="${chapter.title}">
                        <span class="btn-icon">🔖</span>
                        <span>${isBookmarked ? 'نشانه‌گذاری شده' : 'نشانه‌گذاری'}</span>
                    </button>` : ''}
                </div>
                <h1 class="page-title">${chapter.title}</h1>
                <p class="page-description">${chapter.desc}</p>
                ${notesHTML}
                <hr style="border:0; border-bottom: 1px dashed var(--border); margin: 30px 0;">
                ${chapter.content}
                <div class="chapter-navigation" style="display:flex; flex-wrap: wrap; gap: 20px; justify-content: space-between; margin-top: 50px; border-top: 1px solid var(--border); padding-top: 30px; padding-bottom: 20px; align-items: center;">
                    ${navButtons}
                </div>
            `;
            
            appContent.classList.add('fade-enter');
            if(mainScrollArea) mainScrollArea.scrollTop = 0;
            if(breadcrumbCurrent) breadcrumbCurrent.innerHTML = `${chapter.badge}: ${chapter.title}`;
            
            const btnComplete = document.getElementById('btnComplete');
            if (btnComplete) {
                btnComplete.addEventListener('click', function() {
                    let completedList = JSON.parse(localStorage.getItem('js-mastery-progress') || '[]');
                    let id = this.getAttribute('data-id');
                    if (completedList.includes(id)) { completedList = completedList.filter(c => c !== id); } 
                    else { completedList.push(id); }
                    localStorage.setItem('js-mastery-progress', JSON.stringify(completedList));
                    updateProgressUI();
                    const isNowCompleted = completedList.includes(id);
                    this.className = `btn-complete ${isNowCompleted ? 'is-completed' : ''}`;
                    this.innerHTML = `<span class="btn-icon">${isNowCompleted ? '✓' : '☐'}</span> <span>${isNowCompleted ? 'تکمیل شده' : 'علامت به عنوان تکمیل'}</span>`;
                });
            }

            const chapterNotes = document.getElementById('chapterNotes');
            if (chapterNotes) { chapterNotes.addEventListener('input', function() { localStorage.setItem('js-mastery-notes-' + currentId, this.value); }); }

            const btnBookmarkPage = document.getElementById('btnBookmarkPage');
            if (btnBookmarkPage) {
                btnBookmarkPage.addEventListener('click', function() {
                    let bms = JSON.parse(localStorage.getItem('js-mastery-bookmarks') || '[]');
                    let exists = bms.findIndex(b => b.id === currentId);
                    if (exists > -1) bms.splice(exists, 1);
                    else bms.push({ id: currentId, title: chapter.title });
                    localStorage.setItem('js-mastery-bookmarks', JSON.stringify(bms));
                    if(typeof renderBookmarksList === 'function') renderBookmarksList();
                    const isNow = exists === -1;
                    this.className = `btn-bookmark-chapter ${isNow ? 'is-bookmarked' : ''}`;
                    this.style.color = ''; this.style.borderColor = ''; this.style.background = '';
                    this.innerHTML = `<span class="btn-icon">🔖</span> <span>${isNow ? 'نشانه‌گذاری شده' : 'نشانه‌گذاری'}</span>`;
                });
            }

            if (currentId === 'ch-cert') {
                const totalChapters = chapterKeys.filter(k => k !== 'ch-cert').length;
                let cList = JSON.parse(localStorage.getItem('js-mastery-progress') || '[]');
                const completedCount = cList.filter(c => chapterKeys.includes(c) && c !== 'ch-cert').length;
                const certContainer = document.getElementById('certContainer');
                
                if (completedCount >= totalChapters) {
                    certContainer.innerHTML = `
                        <h2 style="color: var(--success); text-align:center; margin-bottom: 10px;">🎉 تبریک! شما تمام فصول جاوااسکریپت را با موفقیت پشت سر گذاشتید!</h2>
                        <p style="text-align:center; color: var(--text-muted); margin-bottom: 30px;">برای صدور گواهینامه معتبر پایان دوره، نام خود را وارد کنید:</p>
                        <div style="display:flex; gap:10px; justify-content:center; flex-wrap: wrap;">
                            <input type="text" id="certNameInput" maxlength="35" placeholder="نام و نام خانوادگی شما..." style="padding:12px 20px; border-radius:8px; border:1px solid var(--border); background:var(--bg-main); color:var(--text-main); font-family:var(--font-fa); width:100%; max-width: 300px; font-size: 1rem; outline: none;">
                            <button id="generateCertBtn" class="btn-quiz-submit active" style="margin:0; background: var(--success); color: white;">صدور گواهینامه 🎓</button>
                        </div>
                        <div id="certOutput" style="margin-top:50px; display:none; animation: fadeIn 0.5s ease;">
                            <div class="certificate-wrapper" id="certificateNode" style="background:#fff; color:#0f172a; padding:40px; border-radius:12px; text-align:center; border:1px solid #e2e8f0;">
                                <div class="cert-border" style="border:6px double var(--primary); padding:50px 40px; border-radius:8px;">
                                    <div class="cert-header" style="font-size:2.5rem; font-weight:900; color:#1e293b; margin-bottom:20px;">گواهینامه پایان دوره JS</div>
                                    <div class="cert-sub" style="font-size:1.2rem; color:#64748b; margin-bottom:20px;">بدین‌وسیله گواهی می‌شود که جناب آقای / سرکار خانم</div>
                                    <div class="cert-name" id="certNameDisplay" style="font-size:3rem; font-weight:800; color:var(--primary); margin-bottom:20px;">نام کاربر</div>
                                    <div class="cert-desc" style="font-size:1.2rem; line-height:1.8; margin-bottom:40px; color:#334155;">دوره جامع، تعاملی و پیشرفته <strong>JavaScript Mastery</strong> را با موفقیت کامل و کسب بالاترین سطح مهارت به پایان رسانده است.</div>
                                    <div class="cert-footer" style="display:flex; justify-content:space-around; font-weight:bold; color:#475569; margin-top:40px; border-top:2px dashed #cbd5e1; padding-top:20px;">
                                        <div>تاریخ: ${new Date().toLocaleDateString('fa-IR')}</div>
                                        <div>مدرس: Arena AI</div>
                                        <div>شناسه: JS-${Math.floor(Math.random()*90000) + 10000}</div>
                                    </div>
                                </div>
                            </div>
                            <div style="text-align:center; margin-top:30px;">
                                <button onclick="window.print()" class="btn-quiz-submit active" style="background:var(--accent); color: white;">🖨️ چاپ / ذخیره به عنوان PDF</button>
                            </div>
                        </div>
                    `;
                    document.getElementById('generateCertBtn').addEventListener('click', () => {
                        const name = document.getElementById('certNameInput').value.trim();
                        if(name) {
                            document.getElementById('certNameDisplay').innerText = name;
                            document.getElementById('certOutput').style.display = 'block';
                            document.getElementById('certNameInput').disabled = true;
                            document.getElementById('generateCertBtn').style.display = 'none';
                        } else alert('لطفاً نام خود را وارد کنید.');
                    });
                } else {
                    const remaining = totalChapters - completedCount;
                    certContainer.innerHTML = `
                        <div style="text-align:center; padding: 30px;">
                            <div style="font-size: 4rem; margin-bottom: 20px;">🚧</div>
                            <h2 style="color: #ef4444; margin-bottom: 10px;">دوره هنوز تمام نشده است!</h2>
                            <p style="color: var(--text-main); font-size: 1.1rem; line-height: 1.8;">
                                شما تا این لحظه <strong>${completedCount}</strong> فصل از <strong>${totalChapters}</strong> فصل را تکمیل کرده‌اید.<br>
                                برای دریافت گواهینامه باید <strong>${remaining}</strong> فصل باقی‌مانده را مطالعه کرده و تیک پایین آن‌ها را بزنید.
                            </p>
                        </div>
                    `;
                }
            }

            initLiveEditors();
            initQuizzes();
        }, 30);
        
        document.querySelectorAll('.sidebar-nav li').forEach(li => li.classList.remove('active'));
        const activeLink = document.querySelector(`.sidebar-nav a[href="#${currentId}"]`);
        if (activeLink) {
            activeLink.parentElement.classList.add('active');
            if (typeof activeLink.scrollIntoView === 'function') activeLink.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }

    function handleRouting() {
        let hash = window.location.hash.substring(1); 
        if (!hash) {
            hash = chapterKeys[0];
            window.history.replaceState(null, null, '#' + hash);
        }
        renderChapter(hash);
    }
    window.addEventListener('hashchange', handleRouting);
    
    updateProgressUI();
    handleRouting();
    console.log('✅ Ultimate JS Mastery Initialized!');
});
