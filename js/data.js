window.chaptersData = {
    'ch1': {
        badge: 'فصل ۱',
        title: 'مقدمه و متغیرها',
        desc: 'به مغز متفکر وب خوش آمدید! جاوااسکریپت (JS) زبان برنامه‌نویسی است که وب‌سایت‌های مرده را به برنامه‌های زنده و پویا تبدیل می‌کند.',
        content: `
            <div class="lesson-card">
                <h2>متغیرها: جعبه‌های حافظه</h2>
                <p>برای انجام هر کاری در برنامه‌نویسی، ابتدا باید اطلاعات را ذخیره کنیم. جاوااسکریپت به ما سه کلمه کلیدی برای ساخت جعبه (متغیر) می‌دهد:</p>
                <ul style="margin-right: 20px; line-height: 2.2; margin-top: 15px;">
                    <li><strong style="color: var(--primary);">let:</strong> جعبه‌ای که مقدار داخل آن <strong>قابل تغییر</strong> است. (مدرن و استاندارد)</li>
                    <li><strong style="color: var(--primary);">const:</strong> جعبه‌ای که در آن قفل می‌شود! مقدار آن <strong>غیرقابل تغییر (ثابت)</strong> است.</li>
                    <li><del style="color: #64748b;">var:</del> مدل قدیمی و پر از باگ. <span style="color:var(--danger)">دیگر از آن استفاده نکنید!</span></li>
                </ul>

                <div class="edu-box edu-info">
                    <span class="edu-icon">📌</span>
                    <div class="edu-content">
                        <span class="edu-title">Console.log چیست؟</span>
                        بهترین دوست یک برنامه‌نویس! این دستور باعث می‌شود اطلاعات داخل جعبه‌ها به یک پنجره مخفی به نام کنسول (Terminal) فرستاده شود تا شما بتوانید ببینید برنامه‌تان درست کار می‌کند یا نه.
                    </div>
                </div>

                <div class="live-editor" style="margin-top: 30px;">
                    <div class="le-header">
                        <div class="le-title">
                            <div class="mac-dots"><div class="mac-dot red"></div><div class="mac-dot yellow"></div><div class="mac-dot green"></div></div>
                            variables.js
                        </div>
                        <div class="le-actions">
                            <button class="le-btn primary le-run"><span class="btn-icon">▶</span> اجرا در کنسول</button>
                            <button class="le-btn le-reset"><span class="btn-icon">↺</span> ریست</button>
                        </div>
                    </div>
                    <div class="le-body">
                        <div class="le-code" style="border-right: none;">
                            <div class="le-editor-wrapper active">
                                <pre class="le-highlight js-hl" aria-hidden="true"></pre>
<textarea class="le-textarea js-code" spellcheck="false">
// 1. ساخت یک متغیر قابل تغییر
let playerName = "علی";
console.log("اسم اول:", playerName);

// تغییر دادن مقدار آن جعبه
playerName = "رضا";
console.log("اسم دوم:", playerName);

// 2. ساخت یک ثابت (مخصوص مقادیری که هرگز عوض نمیشوند)
const pi = 3.14;
console.log("عدد پی:", pi);

// اگر سعی کنید const را تغییر دهید، برنامه ارور میدهد!
// pi = 5; (این خط ارور میدهد)
</textarea>
                            </div>
                        </div>
                        <div class="le-preview" style="background:#0d1117; border-top:1px solid #30363d;">
                            <div class="panel-header" style="background:#161b22; color:#8b949e; padding:5px 15px; font-family:var(--font-en); font-size:0.8rem; border-bottom:1px solid #30363d;">Console Output</div>
                            <div class="console-output" style="padding:15px; color:#c9d1d9; font-family:var(--font-code); font-size:14px; overflow:auto; flex:1; direction:ltr; text-align:left;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'ch2': {
        badge: 'فصل ۲',
        title: 'انواع داده‌ها (Data Types)',
        desc: 'کامپیوترها خنگ هستند! آن‌ها نمی‌دانند کلمه "سلام" یک متن است یا یک عدد. ما باید نوع هر داده را برای آن‌ها مشخص کنیم.',
        content: `
            <div class="lesson-card">
                <h2>داده‌های پایه (Primitives)</h2>
                <ul style="margin-right: 20px; line-height: 2.2; margin-top: 15px;">
                    <li><strong style="color: var(--primary);">String (رشته):</strong> متن‌ها. همیشه داخل کوتیشن قرار می‌گیرند: <code>"سلام"</code> یا <code>'Hello'</code></li>
                    <li><strong style="color: var(--primary);">Number (عدد):</strong> اعداد صحیح یا اعشاری. کوتیشن ندارند: <code>25</code> یا <code>-3.14</code></li>
                    <li><strong style="color: var(--primary);">Boolean (منطقی):</strong> فقط دو حالت دارد: <code>true</code> (درست) یا <code>false</code> (غلط).</li>
                    <li><strong style="color: var(--danger);">Undefined:</strong> یعنی متغیری ساخته شده اما هنوز هیچ مقداری درون آن قرار نگرفته است.</li>
                    <li><strong style="color: var(--danger);">Null:</strong> یعنی این جعبه عمداً خالی نگه داشته شده است.</li>
                </ul>

                <div class="edu-box edu-pro">
                    <span class="edu-icon">💡</span>
                    <div class="edu-content">
                        <span class="edu-title">دستور جادویی typeof</span>
                        اگر گیج شدید و ندانستید یک داده از چه نوعی است، دستور <code>typeof</code> آن را برای شما فاش می‌کند!
                    </div>
                </div>

                <div class="live-editor" style="margin-top: 30px;">
                    <div class="le-header">
                        <div class="le-title">
                            <div class="mac-dots"><div class="mac-dot red"></div><div class="mac-dot yellow"></div><div class="mac-dot green"></div></div>
                            types.js
                        </div>
                        <div class="le-actions">
                            <button class="le-btn primary le-run"><span class="btn-icon">▶</span> اجرا در کنسول</button>
                            <button class="le-btn le-reset"><span class="btn-icon">↺</span> ریست</button>
                        </div>
                    </div>
                    <div class="le-body">
                        <div class="le-code" style="border-right: none;">
                            <div class="le-editor-wrapper active">
                                <pre class="le-highlight js-hl" aria-hidden="true"></pre>
<textarea class="le-textarea js-code" spellcheck="false">
const name = "آریا";
const age = 25;
const isDeveloper = true;
let x; // مقداری ندارد

console.log("نوع name:", typeof name);
console.log("نوع age:", typeof age);
console.log("نوع isDeveloper:", typeof isDeveloper);
console.log("نوع x:", typeof x);

// خطر جاوااسکریپت: جمع زدن متن و عدد!
const result = "5" + 2;
console.log("نتیجه 5 متن با 2 عدد:", result); 
// جواب 7 نیست! جاوااسکریپت 2 را به متن تبدیل میکند.
</textarea>
                            </div>
                        </div>
                        <div class="le-preview" style="background:#0d1117; border-top:1px solid #30363d;">
                            <div class="panel-header" style="background:#161b22; color:#8b949e; padding:5px 15px; font-family:var(--font-en); font-size:0.8rem; border-bottom:1px solid #30363d;">Console Output</div>
                            <div class="console-output" style="padding:15px; color:#c9d1d9; font-family:var(--font-code); font-size:14px; overflow:auto; flex:1; direction:ltr; text-align:left;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'ch3': {
        badge: 'فصل ۳',
        title: 'عملگرها (Operators)',
        desc: 'جاوااسکریپت یک ماشین حساب فوق‌هوشمند است. در این فصل یاد می‌گیریم چگونه با اعداد بازی کنیم و مقادیر را با هم مقایسه کنیم.',
        content: `
            <div class="lesson-card">
                <h2>ریاضیات و مقایسه</h2>
                <p>عملگرهای ریاضی مثل <code>+</code>، <code>-</code>، <code>*</code> و <code>/</code> کاملاً مشخص هستند. اما عملگرهای مقایسه‌ای نیاز به توجه دارند:</p>
                <ul style="margin-right: 20px; line-height: 2.2; margin-top: 15px;">
                    <li><code>==</code> : برابری <strong>مقدار</strong> را چک می‌کند (نوع برایش مهم نیست).</li>
                    <li><code style="color: var(--primary);">===</code> : برابری <strong>مقدار و نوع</strong> را دقیق چک می‌کند. (همیشه از این استفاده کنید!)</li>
                    <li><code>!=</code> : مساوی <strong>نیست</strong>.</li>
                    <li><code>&gt;</code> و <code>&lt;</code> : بزرگتر و کوچکتر.</li>
                </ul>

                <div class="edu-box edu-warn">
                    <span class="edu-icon">⚠️</span>
                    <div class="edu-content">
                        <span class="edu-title">بزرگترین باگ تازه‌کارها</span>
                        علامت <code>=</code> (یک مساوی) برای <strong>قرار دادن مقدار داخل متغیر</strong> است (انتساب).<br>
                        علامت <code>===</code> (سه مساوی) برای <strong>پرسش آیا مساوی هستند؟</strong> است.
                    </div>
                </div>

                <div class="quiz-container" data-correct="2" data-explanation="سه مساوی (===) هم مقدار و هم نوع داده را چک می‌کند. چون یکی رشته و دیگری عدد است، نتیجه false خواهد بود.">
                    <div class="quiz-header">
                        <span class="quiz-icon">🧠</span>
                        <div class="quiz-title">آزمون شماره ۱</div>
                    </div>
                    <div class="quiz-question">نتیجه اجرای کد <code>console.log(5 === "5");</code> در مرورگر چیست؟</div>
                    <div class="quiz-options">
                        <div class="quiz-option">
                            true (درست)
                            <div class="quiz-radio"></div>
                        </div>
                        <div class="quiz-option">
                            ارور سینتکس میدهد
                            <div class="quiz-radio"></div>
                        </div>
                        <div class="quiz-option">
                            false (غلط)
                            <div class="quiz-radio"></div>
                        </div>
                        <div class="quiz-option">
                            undefined
                            <div class="quiz-radio"></div>
                        </div>
                    </div>
                    <div class="quiz-submit-wrapper">
                        <button class="btn-quiz-submit">بررسی پاسخ</button>
                    </div>
                    <div class="quiz-feedback"></div>
                </div>
            </div>
        `
    },
    'ch4': {
        badge: 'فصل ۴',
        title: 'شرط‌ها (If/Else)',
        desc: 'هوش مصنوعی! با شرط‌ها به برنامه‌ی خود قدرت تصمیم‌گیری می‌دهید. "اگر پسورد درست بود وارد شو، در غیر این صورت اخطار بده."',
        content: `
            <div class="lesson-card">
                <h2>ساختار If و Else</h2>
                <p>منطق شرط‌ها بسیار شبیه زبان انسان است. اگر (if) فلان اتفاق افتاد، این کار را بکن. وگرنه (else) کار دیگری بکن.</p>
                
                <div class="live-editor" style="margin-top: 30px;">
                    <div class="le-header">
                        <div class="le-title">
                            <div class="mac-dots"><div class="mac-dot red"></div><div class="mac-dot yellow"></div><div class="mac-dot green"></div></div>
                            logic.js
                        </div>
                        <div class="le-actions">
                            <button class="le-btn primary le-run"><span class="btn-icon">▶</span> اجرا در کنسول</button>
                            <button class="le-btn le-reset"><span class="btn-icon">↺</span> ریست</button>
                        </div>
                    </div>
                    <div class="le-body">
                        <div class="le-code" style="border-right: none;">
                            <div class="le-editor-wrapper active">
                                <pre class="le-highlight js-hl" aria-hidden="true"></pre>
<textarea class="le-textarea js-code" spellcheck="false">
const age = 16;
console.log("سن کاربر:", age);

if (age >= 18) {
  console.log("✅ شما مجاز به ورود هستید.");
} else if (age >= 15) {
  console.log("⚠️ ورود فقط با رضایت والدین ممکن است.");
} else {
  console.log("❌ ورود افراد زیر 15 سال ممنوع است.");
}
</textarea>
                            </div>
                        </div>
                        <div class="le-preview" style="background:#0d1117; border-top:1px solid #30363d;">
                            <div class="panel-header" style="background:#161b22; color:#8b949e; padding:5px 15px; font-family:var(--font-en); font-size:0.8rem; border-bottom:1px solid #30363d;">Console Output</div>
                            <div class="console-output" style="padding:15px; color:#c9d1d9; font-family:var(--font-code); font-size:14px; overflow:auto; flex:1; direction:ltr; text-align:left;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'ch5': {
        badge: 'فصل ۵',
        title: 'حلقه‌ها (Loops)',
        desc: 'کامپیوترها خسته نمی‌شوند. اگر بخواهید یک کار را هزار بار تکرار کنید، به جای هزار خط کدنویسی، از حلقه‌ها استفاده می‌کنید.',
        content: `
            <div class="lesson-card">
                <h2>حلقه For</h2>
                <p>حلقه <code>for</code> از ۳ بخش تشکیل شده است: ۱. متغیر شمارنده، ۲. شرط پایان، ۳. گام حرکت.</p>

                <div class="live-editor" style="margin-top: 30px;">
                    <div class="le-header">
                        <div class="le-title">
                            <div class="mac-dots"><div class="mac-dot red"></div><div class="mac-dot yellow"></div><div class="mac-dot green"></div></div>
                            loops.js
                        </div>
                        <div class="le-actions">
                            <button class="le-btn primary le-run"><span class="btn-icon">▶</span> اجرا در کنسول</button>
                            <button class="le-btn le-reset"><span class="btn-icon">↺</span> ریست</button>
                        </div>
                    </div>
                    <div class="le-body">
                        <div class="le-code" style="border-right: none;">
                            <div class="le-editor-wrapper active">
                                <pre class="le-highlight js-hl" aria-hidden="true"></pre>
<textarea class="le-textarea js-code" spellcheck="false">
console.log("شمارش معکوس پرتاب موشک:");

// i از 5 شروع میشود، تا وقتی بزرگتر از 0 باشد ادامه میدهد، و هر بار یکی کم میشود
for (let i = 5; i > 0; i--) {
  console.log(i + "...");
}

console.log("🚀 پرتاب!");
</textarea>
                            </div>
                        </div>
                        <div class="le-preview" style="background:#0d1117; border-top:1px solid #30363d;">
                            <div class="panel-header" style="background:#161b22; color:#8b949e; padding:5px 15px; font-family:var(--font-en); font-size:0.8rem; border-bottom:1px solid #30363d;">Console Output</div>
                            <div class="console-output" style="padding:15px; color:#c9d1d9; font-family:var(--font-code); font-size:14px; overflow:auto; flex:1; direction:ltr; text-align:left;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'ch6': {
        badge: 'فصل ۶',
        title: 'توابع (Functions)',
        desc: 'توابع مانند کارخانه‌های کوچکی هستند که مواد اولیه (ورودی) را می‌گیرند، روی آن کار انجام می‌دهند و محصول نهایی (خروجی) را پس می‌دهند.',
        content: `
            <div class="lesson-card">
                <h2>ساخت توابع سفارشی</h2>
                <p>وقتی کدی می‌نویسیم که قرار است چندین بار در برنامه استفاده شود، آن را داخل یک تابع بسته‌بندی می‌کنیم.</p>
                
                <div class="edu-box edu-pro">
                    <span class="edu-icon">💡</span>
                    <div class="edu-content">
                        <span class="edu-title">ورودی و خروجی</span>
                        توابع با کلمه کلیدی <code>return</code> نتیجه را به دنیای بیرون پس می‌دهند. اگر return ننویسید، تابع مقدار <code>undefined</code> برمی‌گرداند.
                    </div>
                </div>

                <div class="live-editor" style="margin-top: 30px;">
                    <div class="le-header">
                        <div class="le-title">
                            <div class="mac-dots"><div class="mac-dot red"></div><div class="mac-dot yellow"></div><div class="mac-dot green"></div></div>
                            functions.js
                        </div>
                        <div class="le-actions">
                            <button class="le-btn primary le-run"><span class="btn-icon">▶</span> اجرا در کنسول</button>
                            <button class="le-btn le-reset"><span class="btn-icon">↺</span> ریست</button>
                        </div>
                    </div>
                    <div class="le-body">
                        <div class="le-code" style="border-right: none;">
                            <div class="le-editor-wrapper active">
                                <pre class="le-highlight js-hl" aria-hidden="true"></pre>
<textarea class="le-textarea js-code" spellcheck="false">
// 1. تعریف تابع
function calculateArea(width, height) {
  const area = width * height;
  return area;
}

// 2. فراخوانی تابع (استفاده از آن)
const room1 = calculateArea(5, 4);
const room2 = calculateArea(10, 10);

console.log("مساحت اتاق اول:", room1);
console.log("مساحت اتاق دوم:", room2);
</textarea>
                            </div>
                        </div>
                        <div class="le-preview" style="background:#0d1117; border-top:1px solid #30363d;">
                            <div class="panel-header" style="background:#161b22; color:#8b949e; padding:5px 15px; font-family:var(--font-en); font-size:0.8rem; border-bottom:1px solid #30363d;">Console Output</div>
                            <div class="console-output" style="padding:15px; color:#c9d1d9; font-family:var(--font-code); font-size:14px; overflow:auto; flex:1; direction:ltr; text-align:left;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'ch7': {
        badge: 'فصل ۷',
        title: 'آرایه‌ها (Arrays)',
        desc: 'تا اینجا هر متغیر فقط یک مقدار می‌گرفت. اگر بخواهیم نام تمام دانش‌آموزان یک کلاس را ذخیره کنیم چه؟ از لیست‌ها (آرایه‌ها) استفاده می‌کنیم.',
        content: `
            <div class="lesson-card">
                <h2>لیست‌ها در جاوااسکریپت</h2>
                <p>آرایه‌ها با براکت <code>[]</code> ساخته می‌شوند. توجه کنید که در برنامه‌نویسی شمارش همیشه از صفر شروع می‌شود!</p>

                <div class="live-editor" style="margin-top: 30px;">
                    <div class="le-header">
                        <div class="le-title">
                            <div class="mac-dots"><div class="mac-dot red"></div><div class="mac-dot yellow"></div><div class="mac-dot green"></div></div>
                            arrays.js
                        </div>
                        <div class="le-actions">
                            <button class="le-btn primary le-run"><span class="btn-icon">▶</span> اجرا در کنسول</button>
                            <button class="le-btn le-reset"><span class="btn-icon">↺</span> ریست</button>
                        </div>
                    </div>
                    <div class="le-body">
                        <div class="le-code" style="border-right: none;">
                            <div class="le-editor-wrapper active">
                                <pre class="le-highlight js-hl" aria-hidden="true"></pre>
<textarea class="le-textarea js-code" spellcheck="false">
const fruits = ["سیب", "موز", "پرتقال"];

console.log("کل لیست:", fruits);
console.log("میوه اول:", fruits[0]); // شماره از صفر شروع میشود
console.log("تعداد میوه‌ها:", fruits.length);

// اضافه کردن به لیست
fruits.push("کیوی");
console.log("لیست جدید:", fruits);
</textarea>
                            </div>
                        </div>
                        <div class="le-preview" style="background:#0d1117; border-top:1px solid #30363d;">
                            <div class="panel-header" style="background:#161b22; color:#8b949e; padding:5px 15px; font-family:var(--font-en); font-size:0.8rem; border-bottom:1px solid #30363d;">Console Output</div>
                            <div class="console-output" style="padding:15px; color:#c9d1d9; font-family:var(--font-code); font-size:14px; overflow:auto; flex:1; direction:ltr; text-align:left;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'ch8': {
        badge: 'فصل ۸',
        title: 'اشیاء (Objects)',
        desc: 'آرایه‌ها برای لیست‌های ساده خوبند، اما اگر بخواهیم مشخصات یک انسان (مثل نام، سن و شغل) را یکپارچه کنیم، به Object نیاز داریم.',
        content: `
            <div class="lesson-card">
                <h2>داده‌های ساختاریافته</h2>
                <p>آبجکت‌ها با آکولاد <code>{}</code> ساخته می‌شوند و بر پایه جفت‌های (Key: Value) یا (کلید: مقدار) کار می‌کنند.</p>

                <div class="live-editor" style="margin-top: 30px;">
                    <div class="le-header">
                        <div class="le-title">
                            <div class="mac-dots"><div class="mac-dot red"></div><div class="mac-dot yellow"></div><div class="mac-dot green"></div></div>
                            objects.js
                        </div>
                        <div class="le-actions">
                            <button class="le-btn primary le-run"><span class="btn-icon">▶</span> اجرا در کنسول</button>
                            <button class="le-btn le-reset"><span class="btn-icon">↺</span> ریست</button>
                        </div>
                    </div>
                    <div class="le-body">
                        <div class="le-code" style="border-right: none;">
                            <div class="le-editor-wrapper active">
                                <pre class="le-highlight js-hl" aria-hidden="true"></pre>
<textarea class="le-textarea js-code" spellcheck="false">
const user = {
  firstName: "مریم",
  lastName: "احمدی",
  age: 28,
  isAdmin: true
};

console.log("اطلاعات کامل کاربر:");
console.log(user);

// دسترسی به یک کلید خاص با نقطه
console.log("فقط اسم:", user.firstName);
</textarea>
                            </div>
                        </div>
                        <div class="le-preview" style="background:#0d1117; border-top:1px solid #30363d;">
                            <div class="panel-header" style="background:#161b22; color:#8b949e; padding:5px 15px; font-family:var(--font-en); font-size:0.8rem; border-bottom:1px solid #30363d;">Console Output</div>
                            <div class="console-output" style="padding:15px; color:#c9d1d9; font-family:var(--font-code); font-size:14px; overflow:auto; flex:1; direction:ltr; text-align:left;"></div>
                        </div>
                    </div>
                </div>

                <div class="quiz-container" data-correct="1" data-explanation="در برنامه‌نویسی، شمارش آرایه‌ها (Index) از 0 شروع می‌شود. بنابراین اندیس صفر برابر 10، اندیس یک برابر 20 و اندیس دو برابر 30 خواهد بود.">
                    <div class="quiz-header">
                        <span class="quiz-icon">🧠</span>
                        <div class="quiz-title">آزمون شماره ۲</div>
                    </div>
                    <div class="quiz-question">در آرایه <code>const arr = [10, 20, 30]</code> برای دسترسی به عدد 20 باید چه دستوری بنویسیم؟</div>
                    <div class="quiz-options">
                        <div class="quiz-option">
                            arr[2]
                            <div class="quiz-radio"></div>
                        </div>
                        <div class="quiz-option">
                            arr[1]
                            <div class="quiz-radio"></div>
                        </div>
                        <div class="quiz-option">
                            arr.get(20)
                            <div class="quiz-radio"></div>
                        </div>
                        <div class="quiz-option">
                            arr[0]
                            <div class="quiz-radio"></div>
                        </div>
                    </div>
                    <div class="quiz-submit-wrapper">
                        <button class="btn-quiz-submit">بررسی پاسخ</button>
                    </div>
                    <div class="quiz-feedback"></div>
                </div>
            </div>
        `
    },
    'ch9': {
        badge: 'فصل ۹',
        title: 'تعامل با صفحه (DOM)',
        desc: 'زمان آن رسیده که جاوااسکریپت به کدهای HTML و صفحه سایت نفوذ کند! ما با استفاده از Document Object Model (DOM) متن‌ها، استایل‌ها و صفحات را در لحظه تغییر می‌دهیم.',
        content: `
            <div class="lesson-card">
                <h2>دستکاری زنده وب‌سایت</h2>
                <p>آبجکت <code>document</code> در جاوااسکریپت، نماینده کل فایل HTML شماست. با دستوراتی مثل <code>document.getElementById()</code> می‌توانیم عناصر صفحه را پیدا کنیم و تغییر دهیم.</p>

                <div class="edu-box edu-info">
                    <span class="edu-icon">⚡</span>
                    <div class="edu-content">
                        <span class="edu-title">رویدادها (Events)</span>
                        با دستور <code>addEventListener</code> می‌توانیم منتظر بمانیم تا کاربر کاری انجام دهد (مثل کلیک روی دکمه)، و سپس کدهای خود را اجرا کنیم. این جادوی پویایی وب است.
                    </div>
                </div>

                <div class="live-editor" style="margin-top: 30px;">
                    <div class="le-header">
                        <div class="le-tabs" style="display:flex;">
                            <button class="le-tab active" data-target="js">script.js</button>
                            <button class="le-tab" data-target="html">index.html</button>
                        </div>
                        <div class="le-actions">
                            <button class="le-btn primary le-run"><span class="btn-icon">▶</span> اجرا در محیط</button>
                            <button class="le-btn le-reset"><span class="btn-icon">↺</span> ریست</button>
                        </div>
                    </div>
                    <div class="le-body">
                        <div class="le-code">
                            <div class="le-editor-wrapper active" id="js-editor">
                                <pre class="le-highlight js-hl" aria-hidden="true"></pre>
<textarea class="le-textarea js-code" spellcheck="false">
// پیدا کردن عناصر از داخل HTML
const myTitle = document.getElementById("title");
const myBtn = document.getElementById("action-btn");

// دادن گوش‌بزنگ (Event Listener) به دکمه
myBtn.addEventListener("click", function() {
  
  // تغییر متن تیتر
  myTitle.innerHTML = "جادوی جاوااسکریپت! ✨";
  
  // تغییر رنگ تیتر با CSS
  myTitle.style.color = "#eab308";
  
});
</textarea>
                            </div>
                            <div class="le-editor-wrapper" id="html-editor" style="display:none;">
                                <pre class="le-highlight html-hl" aria-hidden="true"></pre>
<textarea class="le-textarea html-code" spellcheck="false">
<div style="text-align: center; padding: 40px; font-family: tahoma;">
  <h1 id="title" style="transition: 0.3s;">سلام دنیا!</h1>
  <br>
  <button id="action-btn" style="padding:10px 20px; font-size:16px; cursor:pointer;">
    روی من کلیک کن
  </button>
</div>
</textarea>
                            </div>
                        </div>
                        <div class="le-preview" style="background:#fff;"><iframe class="le-iframe" sandbox="allow-scripts allow-modals"></iframe></div>
                    </div>
                </div>
            </div>
        `
    },
    'ch10': {
        badge: 'فصل ۱۰',
        title: 'امکانات مدرن (ES6+)',
        desc: 'جاوااسکریپت در سال ۲۰۱۵ با یک آپدیت بزرگ به نام ES6 متحول شد. توابع پیکانی (Arrow Functions) و دستکاری راحت‌تر رشته‌ها (Template Literals) از جمله این آپدیت‌ها هستند.',
        content: `
            <div class="lesson-card">
                <h2>کدنویسی تمیزتر و کوتاه‌تر</h2>
                <ul style="margin-right: 20px; line-height: 2.2; margin-top: 15px;">
                    <li><strong style="color: var(--primary);">توابع پیکانی (Arrow):</strong> راهی کوتاه‌تر برای نوشتن توابع. به جای کلمه <code>function</code> از علامت <code>=&gt;</code> استفاده می‌شود.</li>
                    <li><strong style="color: var(--primary);">Template Literals:</strong> به جای چسباندن رشته‌ها با علامت <code>+</code>، از بک‌تیک <code>\`</code> و نماد <code>\${}</code> استفاده می‌کنیم.</li>
                </ul>

                <div class="live-editor" style="margin-top: 30px;">
                    <div class="le-header">
                        <div class="le-title">
                            <div class="mac-dots"><div class="mac-dot red"></div><div class="mac-dot yellow"></div><div class="mac-dot green"></div></div>
                            es6.js
                        </div>
                        <div class="le-actions">
                            <button class="le-btn primary le-run"><span class="btn-icon">▶</span> اجرا در کنسول</button>
                            <button class="le-btn le-reset"><span class="btn-icon">↺</span> ریست</button>
                        </div>
                    </div>
                    <div class="le-body">
                        <div class="le-code" style="border-right: none;">
                            <div class="le-editor-wrapper active">
                                <pre class="le-highlight js-hl" aria-hidden="true"></pre>
<textarea class="le-textarea js-code" spellcheck="false">
// 1. Template Literals (تزریق متغیر داخل متن)
const name = "سپهر";
const age = 22;
console.log(\`سلام، من \${name} هستم و \${age} سال دارم.\`);

// 2. Arrow Functions (توابع مدرن و کوتاه)
const multiply = (a, b) => a * b;

console.log("نتیجه ضرب 5 در 4:", multiply(5, 4));
</textarea>
                            </div>
                        </div>
                        <div class="le-preview" style="background:#0d1117; border-top:1px solid #30363d;">
                            <div class="panel-header" style="background:#161b22; color:#8b949e; padding:5px 15px; font-family:var(--font-en); font-size:0.8rem; border-bottom:1px solid #30363d;">Console Output</div>
                            <div class="console-output" style="padding:15px; color:#c9d1d9; font-family:var(--font-code); font-size:14px; overflow:auto; flex:1; direction:ltr; text-align:left;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    'ch11': {
        badge: 'فصل ۱۱',
        title: 'همزمانی و Promises',
        desc: 'ارتباط با سرور زمان‌بر است. جاوااسکریپت برای اینکه هنگام دریافت اطلاعات متوقف نشود، از سیستم کدهای ناهمگام (Asynchronous) استفاده می‌کند.',
        content: `
            <div class="lesson-card">
                <h2>جاوااسکریپت منتظر نمی‌ماند!</h2>
                <p>مفاهیمی مثل <code>async</code> و <code>await</code> به ما اجازه می‌دهند به مرورگر بگوییم: "این کار زمان‌بر است (مثل دانلود اطلاعات)، برو بقیه کدها را اجرا کن و هر وقت این تمام شد، خبرم کن."</p>

                <div class="edu-box edu-danger">
                    <span class="edu-icon">🚫</span>
                    <div class="edu-content">
                        <span class="edu-title">بدون Async چه می‌شود؟</span>
                        اگر این مکانیزم وجود نداشت، وقتی کاربر دکمه "دریافت آب و هوا" را می‌زد، کل وب‌سایت برای چند ثانیه کاملاً فریز می‌شد تا اطلاعات از سرور برسد!
                    </div>
                </div>

                <div class="live-editor" style="margin-top: 30px;">
                    <div class="le-header">
                        <div class="le-title">
                            <div class="mac-dots"><div class="mac-dot red"></div><div class="mac-dot yellow"></div><div class="mac-dot green"></div></div>
                            fetch.js
                        </div>
                        <div class="le-actions">
                            <button class="le-btn primary le-run"><span class="btn-icon">▶</span> دریافت از سرور</button>
                            <button class="le-btn le-reset"><span class="btn-icon">↺</span> ریست</button>
                        </div>
                    </div>
                    <div class="le-body">
                        <div class="le-code" style="border-right: none;">
                            <div class="le-editor-wrapper active">
                                <pre class="le-highlight js-hl" aria-hidden="true"></pre>
<textarea class="le-textarea js-code" spellcheck="false">
console.log("1. در حال اتصال به سرور...");

// استفاده از API عمومی برای دریافت یک جوک برنامه‌نویسی!
async function fetchJoke() {
  try {
    // منتظر بمان (await) تا اطلاعات از سرور بیاید
    const response = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
    const data = await response.json();
    
    console.log("✅ جوک دریافت شد:");
    console.log(data.joke);
  } catch (error) {
    console.error("خطا در ارتباط با سرور:", error);
  }
}

// صدا زدن تابع
fetchJoke();

console.log("2. من کد بعد از تابع هستم و معطل سرور نمی‌مانم!");
</textarea>
                            </div>
                        </div>
                        <div class="le-preview" style="background:#0d1117; border-top:1px solid #30363d;">
                            <div class="panel-header" style="background:#161b22; color:#8b949e; padding:5px 15px; font-family:var(--font-en); font-size:0.8rem; border-bottom:1px solid #30363d;">Console Output</div>
                            <div class="console-output" style="padding:15px; color:#c9d1d9; font-family:var(--font-code); font-size:14px; overflow:auto; flex:1; direction:ltr; text-align:left;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'ch12': {
        badge: 'فصل ۱۲',
        title: 'حافظه مرورگر (Storage)',
        desc: 'چگونه وب‌سایت‌ها تنظیمات شما را به خاطر می‌سپارند؟ (مثل حالت تاریک یا وضعیت ورود). این کار با حافظه اختصاصی مرورگر انجام می‌شود.',
        content: `
            <div class="lesson-card">
                <h2>دیتابیس در جیب کاربر!</h2>
                <p>جاوااسکریپت به ما اجازه می‌دهد اطلاعات کاربر را مستقیماً درون مرورگر خودش ذخیره کنیم تا با رفرش شدن صفحه اطلاعات از بین نرود. دو روش اصلی وجود دارد:</p>
                
                <ul style="margin-right: 20px; line-height: 2.2; margin-top: 15px;">
                    <li><strong style="color: var(--primary);">LocalStorage:</strong> حافظه دائمی. اطلاعات اینجا ذخیره بمانند، حتی اگر کاربر تب را ببندد یا کامپیوتر را خاموش کند پاک نمی‌شوند (مگر اینکه خودش پاک کند).</li>
                    <li><strong style="color: var(--primary);">SessionStorage:</strong> حافظه موقت. اطلاعات فقط تا زمانی که همان تب مرورگر باز است حفظ می‌شوند.</li>
                </ul>

                <div class="edu-box edu-info">
                    <span class="edu-icon">📌</span>
                    <div class="edu-content">
                        <span class="edu-title">تبدیل به JSON</span>
                        حافظه مرورگر فقط <strong>متن (String)</strong> قبول می‌کند. بنابراین اگر می‌خواهید یک آرایه یا آبجکت را ذخیره کنید، اول باید با <code>JSON.stringify()</code> آن را به متن تبدیل کنید.
                    </div>
                </div>

                <div class="live-editor" style="margin-top: 30px;">
                    <div class="le-header">
                        <div class="le-title">
                            <div class="mac-dots"><div class="mac-dot red"></div><div class="mac-dot yellow"></div><div class="mac-dot green"></div></div>
                            storage.js
                        </div>
                        <div class="le-actions">
                            <button class="le-btn primary le-run"><span class="btn-icon">▶</span> اجرا در کنسول</button>
                            <button class="le-btn le-reset"><span class="btn-icon">↺</span> ریست</button>
                        </div>
                    </div>
                    <div class="le-body">
                        <div class="le-code" style="border-right: none;">
                            <div class="le-editor-wrapper active">
                                <pre class="le-highlight js-hl" aria-hidden="true"></pre>
<textarea class="le-textarea js-code" spellcheck="false">
// 1. ذخیره یک متن ساده در حافظه دائمی
localStorage.setItem("username", "آریا استارک");

// 2. خواندن اطلاعات از حافظه
const savedName = localStorage.getItem("username");
console.log("کاربر ذخیره شده:", savedName);

// 3. حذف یک کلید خاص
// localStorage.removeItem("username");

// 4. ذخیره یک آبجکت پیچیده (تبدیل به متن)
const settings = { theme: "dark", volume: 80 };
localStorage.setItem("appSettings", JSON.stringify(settings));

// خواندن و تبدیل دوباره به آبجکت
const getSettings = JSON.parse(localStorage.getItem("appSettings"));
console.log("تنظیمات:", getSettings.theme);
</textarea>
                            </div>
                        </div>
                        <div class="le-preview" style="background:#0d1117; border-top:1px solid #30363d;">
                            <div class="panel-header" style="background:#161b22; color:#8b949e; padding:5px 15px; font-family:var(--font-en); font-size:0.8rem; border-bottom:1px solid #30363d;">Console Output</div>
                            <div class="console-output" style="padding:15px; color:#c9d1d9; font-family:var(--font-code); font-size:14px; overflow:auto; flex:1; direction:ltr; text-align:left;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'ch13': {
        badge: 'فصل ۱۳',
        title: 'مدیریت خطاها (Try/Catch)',
        desc: 'حتی بهترین برنامه‌نویس‌ها هم کدشان باگ می‌دهد یا سرورشان قطع می‌شود. یک برنامه خوب هرگز متوقف نمی‌شود، بلکه خطاها را کنترل می‌کند.',
        content: `
            <div class="lesson-card">
                <h2>جلوگیری از مرگ برنامه!</h2>
                <p>وقتی در جاوااسکریپت خطای مرگباری رخ دهد (مثلاً فراخوانی متغیری که وجود ندارد)، اجرای برنامه در همان خط متوقف شده و بقیه کدهای پایین‌تر هرگز اجرا نمی‌شوند. ساختار <code>try...catch</code> راه حل این مشکل است.</p>

                <div class="live-editor" style="margin-top: 30px;">
                    <div class="le-header">
                        <div class="le-title">
                            <div class="mac-dots"><div class="mac-dot red"></div><div class="mac-dot yellow"></div><div class="mac-dot green"></div></div>
                            errors.js
                        </div>
                        <div class="le-actions">
                            <button class="le-btn primary le-run"><span class="btn-icon">▶</span> اجرا در کنسول</button>
                            <button class="le-btn le-reset"><span class="btn-icon">↺</span> ریست</button>
                        </div>
                    </div>
                    <div class="le-body">
                        <div class="le-code" style="border-right: none;">
                            <div class="le-editor-wrapper active">
                                <pre class="le-highlight js-hl" aria-hidden="true"></pre>
<textarea class="le-textarea js-code" spellcheck="false">
console.log("مرحله 1: شروع برنامه");

try {
  // کدهای خطرناک را اینجا میگذاریم
  console.log("در حال اجرای کدهای خطرناک...");
  
  // ما متغیر user را تعریف نکردیم پس اینجا قطعا ارور میدهد!
  console.log(user.name);
  
} catch (error) {
  // اگر بالا ارور داد، برنامه نمیمیرد! بلکه وارد اینجا میشود
  console.error("متاسفانه خطایی رخ داد: ", error.message);
} finally {
  // این بخش تحت هر شرایطی (چه ارور بدهد چه ندهد) اجرا میشود
  console.log("عملیات پاکسازی...");
}

console.log("مرحله 2: برنامه زنده است و ادامه میدهد! 🎉");
</textarea>
                            </div>
                        </div>
                        <div class="le-preview" style="background:#0d1117; border-top:1px solid #30363d;">
                            <div class="panel-header" style="background:#161b22; color:#8b949e; padding:5px 15px; font-family:var(--font-en); font-size:0.8rem; border-bottom:1px solid #30363d;">Console Output</div>
                            <div class="console-output" style="padding:15px; color:#c9d1d9; font-family:var(--font-code); font-size:14px; overflow:auto; flex:1; direction:ltr; text-align:left;"></div>
                        </div>
                    </div>
                </div>

                <div class="quiz-container" data-correct="2" data-explanation="دستور await در داخل توابعی که کلمه async را قبل از خود دارند نوشته می‌شود و وظیفه‌اش متوقف کردن موقت 'همان بلوک از کد' تا زمان بازگشت نتیجه از سمت سرور است (بدون اینکه بقیه سایت فریز شود).">
                    <div class="quiz-header">
                        <span class="quiz-icon">🧠</span>
                        <div class="quiz-title">آزمون شماره ۳ (پایانی)</div>
                    </div>
                    <div class="quiz-question">در جاوااسکریپت مدرن، کلمه کلیدی <code>await</code> چه کاری انجام می‌دهد؟</div>
                    <div class="quiz-options">
                        <div class="quiz-option">
                            سرعت اینترنت کاربر را افزایش می‌دهد.
                            <div class="quiz-radio"></div>
                        </div>
                        <div class="quiz-option">
                            مرورگر را وادار می‌کند تا وب‌سایت را ببندد.
                            <div class="quiz-radio"></div>
                        </div>
                        <div class="quiz-option">
                            منتظر می‌ماند تا یک عملیات ناهمگام (مثل دریافت از سرور) کامل شود.
                            <div class="quiz-radio"></div>
                        </div>
                        <div class="quiz-option">
                            کدهای HTML را به جاوااسکریپت تبدیل می‌کند.
                            <div class="quiz-radio"></div>
                        </div>
                    </div>
                    <div class="quiz-submit-wrapper">
                        <button class="btn-quiz-submit">بررسی پاسخ</button>
                    </div>
                    <div class="quiz-feedback"></div>
                </div>
            </div>
        `
    },

    'ch-cert': {
        badge: 'فاز نهایی',
        title: 'دریافت گواهینامه 🎓',
        desc: 'تبریک! شما به پایان دوره Ultimate JS Mastery رسیدید.',
        content: `
            <div class="lesson-card" id="certContainer">
                <div style="text-align:center; padding: 40px;">
                    <div class="loading-spinner" style="margin: 0 auto; width: 40px; height: 40px; border: 3px solid var(--border); border-top-color: var(--primary); border-radius: 50%; animation: spin 0.8s linear infinite;"></div>
                    <p style="margin-top:15px;">در حال بررسی وضعیت پیشرفت شما...</p>
                </div>
            </div>
        `
    }
};
