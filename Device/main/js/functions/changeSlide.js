(function (exports) {
'use strict';

/*Слайдеры*/
const firstSliderData = {
  firstListSlides: Array.from(document.querySelectorAll(`.slide`)),
  firstListToggles: Array.from(document.querySelectorAll(`.option__item`)),
  classForSlide: `hidden`,
  classForBtn: `option--active`,
};

const secondSliderData = {
  firstListSlides: Array.from(document.querySelectorAll(`.serves`)),
  firstListToggles: Array.from(document.querySelectorAll(`.serves__btn`)),
  classForSlide: `hidden`,
  classForBtn: `serves--active`,
};

class Slider {
  constructor(slidesArray, btnList, class1, class2) {
    this.slides = slidesArray;
    this.btns = btnList;
    this.classSlide = class1;
    this.classBtn = class2;
  }

  changeSlide(index) {
    this.slides.forEach((item)=> {
      item.classList.add(this.classSlide);
    });

    this.slides[index].classList.remove(this.classSlide);
  }

  changeBtnDecor(index) {
    this.btns.forEach((item) => {
      item.classList.remove(this.classBtn);
    });

    this.btns[index].classList.add(this.classBtn);
  }
}

const firstSlider = new Slider(firstSliderData.firstListSlides, firstSliderData.firstListToggles,
  firstSliderData.classForSlide, firstSliderData.classForBtn);

const secondSlider = new Slider(secondSliderData.firstListSlides, secondSliderData.firstListToggles,
  secondSliderData.classForSlide, secondSliderData.classForBtn);

const firstSliderHandler = (evt) => {
  evt.preventDefault();

  if (evt.target.classList.contains(`option__item`)) {
    const index = evt.target.getAttribute(`data-index`);

    firstSlider.changeSlide(index);
    firstSlider.changeBtnDecor(index);
  }
};

const secondSliderHandler = (evt) => {
  evt.preventDefault();

  if (evt.target.classList.contains(`serves__btn`)) {
    const index = evt.target.getAttribute(`data-index`);

    secondSlider.changeSlide(index);
    secondSlider.changeBtnDecor(index);
  }
};

exports.firstSliderHandler = firstSliderHandler;
exports.secondSliderHandler = secondSliderHandler;

}((this.changeSlide = this.changeSlide || {})));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zL2NoYW5nZVNsaWRlLmpzIiwic291cmNlcyI6WyJzb3VyY2UvanMvZnVuY3Rpb25zL2NoYW5nZVNsaWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8q0KHQu9Cw0LnQtNC10YDRiyovXG5jb25zdCBmaXJzdFNsaWRlckRhdGEgPSB7XG4gIGZpcnN0TGlzdFNsaWRlczogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuc2xpZGVgKSksXG4gIGZpcnN0TGlzdFRvZ2dsZXM6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLm9wdGlvbl9faXRlbWApKSxcbiAgY2xhc3NGb3JTbGlkZTogYGhpZGRlbmAsXG4gIGNsYXNzRm9yQnRuOiBgb3B0aW9uLS1hY3RpdmVgLFxufTtcblxuY29uc3Qgc2Vjb25kU2xpZGVyRGF0YSA9IHtcbiAgZmlyc3RMaXN0U2xpZGVzOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5zZXJ2ZXNgKSksXG4gIGZpcnN0TGlzdFRvZ2dsZXM6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnNlcnZlc19fYnRuYCkpLFxuICBjbGFzc0ZvclNsaWRlOiBgaGlkZGVuYCxcbiAgY2xhc3NGb3JCdG46IGBzZXJ2ZXMtLWFjdGl2ZWAsXG59O1xuXG5jbGFzcyBTbGlkZXIge1xuICBjb25zdHJ1Y3RvcihzbGlkZXNBcnJheSwgYnRuTGlzdCwgY2xhc3MxLCBjbGFzczIpIHtcbiAgICB0aGlzLnNsaWRlcyA9IHNsaWRlc0FycmF5O1xuICAgIHRoaXMuYnRucyA9IGJ0bkxpc3Q7XG4gICAgdGhpcy5jbGFzc1NsaWRlID0gY2xhc3MxO1xuICAgIHRoaXMuY2xhc3NCdG4gPSBjbGFzczI7XG4gIH1cblxuICBjaGFuZ2VTbGlkZShpbmRleCkge1xuICAgIHRoaXMuc2xpZGVzLmZvckVhY2goKGl0ZW0pPT4ge1xuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NTbGlkZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNsaWRlc1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzU2xpZGUpO1xuICB9XG5cbiAgY2hhbmdlQnRuRGVjb3IoaW5kZXgpIHtcbiAgICB0aGlzLmJ0bnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NCdG4pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5idG5zW2luZGV4XS5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NCdG4pO1xuICB9XG59XG5cbmNvbnN0IGZpcnN0U2xpZGVyID0gbmV3IFNsaWRlcihmaXJzdFNsaWRlckRhdGEuZmlyc3RMaXN0U2xpZGVzLCBmaXJzdFNsaWRlckRhdGEuZmlyc3RMaXN0VG9nZ2xlcyxcbiAgZmlyc3RTbGlkZXJEYXRhLmNsYXNzRm9yU2xpZGUsIGZpcnN0U2xpZGVyRGF0YS5jbGFzc0ZvckJ0bik7XG5cbmNvbnN0IHNlY29uZFNsaWRlciA9IG5ldyBTbGlkZXIoc2Vjb25kU2xpZGVyRGF0YS5maXJzdExpc3RTbGlkZXMsIHNlY29uZFNsaWRlckRhdGEuZmlyc3RMaXN0VG9nZ2xlcyxcbiAgc2Vjb25kU2xpZGVyRGF0YS5jbGFzc0ZvclNsaWRlLCBzZWNvbmRTbGlkZXJEYXRhLmNsYXNzRm9yQnRuKTtcblxuY29uc3QgZmlyc3RTbGlkZXJIYW5kbGVyID0gKGV2dCkgPT4ge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoYG9wdGlvbl9faXRlbWApKSB7XG4gICAgY29uc3QgaW5kZXggPSBldnQudGFyZ2V0LmdldEF0dHJpYnV0ZShgZGF0YS1pbmRleGApO1xuXG4gICAgZmlyc3RTbGlkZXIuY2hhbmdlU2xpZGUoaW5kZXgpO1xuICAgIGZpcnN0U2xpZGVyLmNoYW5nZUJ0bkRlY29yKGluZGV4KTtcbiAgfVxufTtcblxuY29uc3Qgc2Vjb25kU2xpZGVySGFuZGxlciA9IChldnQpID0+IHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGBzZXJ2ZXNfX2J0bmApKSB7XG4gICAgY29uc3QgaW5kZXggPSBldnQudGFyZ2V0LmdldEF0dHJpYnV0ZShgZGF0YS1pbmRleGApO1xuXG4gICAgc2Vjb25kU2xpZGVyLmNoYW5nZVNsaWRlKGluZGV4KTtcbiAgICBzZWNvbmRTbGlkZXIuY2hhbmdlQnRuRGVjb3IoaW5kZXgpO1xuICB9XG59O1xuXG5leHBvcnQge2ZpcnN0U2xpZGVySGFuZGxlciwgc2Vjb25kU2xpZGVySGFuZGxlcn07XG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBLE1BQU0sZUFBZSxHQUFHO0VBQ3RCLGVBQWUsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7RUFDaEUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0VBQ3hFLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQztFQUN2QixXQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUM7Q0FDOUIsQ0FBQzs7QUFFRixNQUFNLGdCQUFnQixHQUFHO0VBQ3ZCLGVBQWUsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDakUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0VBQ3ZFLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQztFQUN2QixXQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUM7Q0FDOUIsQ0FBQzs7QUFFRixNQUFNLE1BQU0sQ0FBQztFQUNYLFdBQVcsQ0FB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
