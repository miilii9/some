import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SideSlide.css';

export default function sideSlide() {
  return (
    <div>
      <div className="sideSlid">
        <div className="flexdis">
          <FontAwesomeIcon
            className="icon"
            icon="fa-solid fa-headset"
            fixedWidth
            size="2x"
          />
          <div>
            <p className="bold-m">مشاوره تخصصی 78371-021</p>
            <p className="grey-s">
              پشتیبانی انلاین تمام وقت,مشاوره خرید ,تعیین برند
            </p>
          </div>
        </div>
        <div className="flexdis">
          <FontAwesomeIcon
            className="icon"
            icon="fa-solid fa-truck-fast"
            fixedWidth
            size="2x"
          />
          <div>
            <p className="bold-m">ارسال سریع به سراسر ایران</p>
            <p className="grey-s">
              ارسال رایگان برای کالا های بالای 200 هزار تومان{' '}
            </p>
          </div>
        </div>
        <div className="flexdis">
          <FontAwesomeIcon
            className="icon"
            icon="fa-solid fa-certificate"
            fixedWidth
            size="2x"
          />
          <div>
            <p className="bold-m">تضمین اصالت کالا</p>
            <p className="grey-s">تضمین استفاده از برند های معتبر و مختلف </p>
          </div>
        </div>
        <div className="flexdis">
          <FontAwesomeIcon
            className="icon"
            icon="fa-solid fa-calendar-check"
            fixedWidth
            size="2x"
          />
          <div>
            <p className="bold-m">فرضت 7 روزه بازگشت کالا</p>
            <p className="grey-s">
              فرصت 7 روزه بازگشت کالا در صورت بروز اشکال{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
