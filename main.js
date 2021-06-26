const checkAll = document.querySelector('.check-all');
const checkNaverService = document.querySelector('.check-naver-service');
const checkPrivacyService = document.querySelector('.check-privacy-service');
const checkLocationService = document.querySelector('.check-location-service');
const checkPromotionService = document.querySelector('.check-promotion-service');

checkAll.addEventListener('click', function () {
  if (checkAll.classList.contains('checked')) {
    checkAll.classList.remove('checked');
    checkNaverService.classList.remove('checked');
    checkPrivacyService.classList.remove('checked');
    checkLocationService.classList.remove('checked');
    checkPromotionService.classList.remove('checked');

  } else {
    checkAll.classList.add('checked');
    checkNaverService.classList.add('checked');
    checkPrivacyService.classList.add('checked');
    checkLocationService.classList.add('checked');
    checkPromotionService.classList.add('checked');
  }
});

checkNaverService.addEventListener('click', function () {
  if (checkNaverService.classList.contains('checked')) {
    checkNaverService.classList.remove('checked');
  } else {
    checkNaverService.classList.add('checked');
  }
});

checkPrivacyService.addEventListener('click', function () {
  if (checkPrivacyService.classList.contains('checked')) {
    checkPrivacyService.classList.remove('checked');
  } else {
    checkPrivacyService.classList.add('checked');
  }
});

checkLocationService.addEventListener('click', function () {
  if (checkLocationService.classList.contains('checked')) {
    checkLocationService.classList.remove('checked');
  } else {
    checkLocationService.classList.add('checked');
  }
});

checkPromotionService.addEventListener('click', function () {
  if (checkPromotionService.classList.contains('checked')) {
    checkPromotionService.classList.remove('checked');
  } else {
    checkPromotionService.classList.add('checked');
  }
});