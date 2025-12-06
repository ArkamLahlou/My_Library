// بيانات الكتب (يمكنك إضافة المزيد هنا)
const bookData = {
    book1: {
        title: "فن اللامبالاة",
        details: `
            <p><strong>عن الكتاب:</strong> يرى الكاتب مارك مانسون أن السعي وراء السعادة هو بحد ذاته مشكلة، وأن تقبل التجارب السلبية هو المفتاح لحياة سعيدة حقيقية. يقدم الكتاب نظرة عكسية ومُنعشة حول ما يجعل الحياة ذات معنى.</p>
            <p><strong>المحتوى التفصيلي:</strong> يتناول الكتاب مواضيع مثل: عدم الاهتمام بما يقوله الآخرون، تقبل الفشل، واختيار ما يستحق الاهتمام فعلاً في الحياة. إنه دعوة للتخلي عن الإيجابية المفرطة وتبني الواقعية.</p>
            <p><strong>اقتباس:</strong> "لا تحاول. لا تضع أي جهد على الإطلاق في محاولة أن تثبت نفسك لأي شخص آخر غير نفسك."</p>
        `
    },
    book2: {
        title: "قوة عقلك الباطن",
        details: `
            <p><strong>عن الكتاب:</strong> يُعد هذا الكتاب من الكلاسيكيات في مجال المساعدة الذاتية. يوضح جوزيف ميرفي كيف يمكن لعقلك الباطن أن يكون أداة قوية لتحقيق الأهداف وتحسين الصحة والثروة بمجرد تعلم تقنيات بسيطة للتحكم فيه.</p>
            <p><strong>المحتوى التفصيلي:</strong> يقدم الكتاب تمارين عملية وأمثلة واقعية حول قوة الإيمان، وكيف يمكن للتصور الذهني أن يغير حياتك، بالإضافة إلى فصول مخصصة للصحة الجيدة والعلاقات المثالية.</p>
            <p><strong>اقتباس:</strong> "سواء آمنت أنك تستطيع أو آمنت أنك لا تستطيع، فأنت على صواب في كلتا الحالتين."</p>
        `
    }
    // أضف المزيد من الكتب هنا...
};

document.addEventListener('DOMContentLoaded', () => {
    const bookCards = document.querySelectorAll('.book-card');
    const contentPage = document.getElementById('content-page');
    const backButton = document.getElementById('back-button');
    const booksGrid = document.getElementById('books-grid');
    const contentTitle = document.getElementById('content-title');
    const contentDetails = document.getElementById('content-details');
    const mainHeader = document.querySelector('.main-header');

    // 1. معالجة النقر على بطاقة الكتاب
    bookCards.forEach(card => {
        card.addEventListener('click', () => {
            const bookId = card.getAttribute('data-book-id');
            const data = bookData[bookId];

            if (data) {
                // ملء صفحة المحتوى
                contentTitle.textContent = data.title;
                contentDetails.innerHTML = data.details;

                // إخفاء الواجهة الرئيسية وعرض صفحة المحتوى
                booksGrid.style.display = 'none';
                mainHeader.style.display = 'none'; // إخفاء العنوان الرئيسي
                contentPage.classList.add('active');
                window.scrollTo(0, 0); // الانتقال لأعلى الصفحة الجديدة
            }
        });
    });

    // 2. معالجة النقر على زر العودة
    backButton.addEventListener('click', () => {
        // إظهار الواجهة الرئيسية وإخفاء صفحة المحتوى
        booksGrid.style.display = 'flex';
        mainHeader.style.display = 'block'; // إظهار العنوان الرئيسي
        contentPage.classList.remove('active');
    });
});
                          
