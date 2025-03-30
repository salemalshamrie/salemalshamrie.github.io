// تحديد نموذج الاتصال
const contactForm = document.getElementById('contact-form');

// إضافة مستمع حدث الإرسال إلى النموذج
contactForm.addEventListener('submit', function(event) {
  // منع الإرسال الافتراضي للنموذج
  event.preventDefault();

  // الحصول على قيم الحقول
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // التحقق من صحة الحقول (اختياري)
  if (!name || !email || !message) {
    alert('يرجى ملء جميع الحقول.');
    return;
  }

  // إرسال النموذج إلى الخادم (هذا مثال بسيط، يجب استبداله بكود إرسال حقيقي)
  console.log('الاسم:', name);
  console.log('البريد الإلكتروني:', email);
  console.log('الرسالة:', message);

  // عرض رسالة منبثقة بنجاح الإرسال
  alert('تم إرسال رسالتك بنجاح!');

  // إعادة تعيين النموذج (اختياري)
  contactForm.reset();
});
