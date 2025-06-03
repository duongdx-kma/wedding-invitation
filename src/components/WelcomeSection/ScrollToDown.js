import React from 'react';

import { styScrollWrapper } from './styles';
import { bool, func } from 'prop-types';

function ClickToSeeDetail({ loading, onClick }) {
  return (
    <div css={styScrollWrapper} onClick={onClick}>
      <section id="scroll" class="scroll__icon">
        <div className="button">
          <span></span>
        </div>
        <span className="text">{loading ? 'Đang chuẩn bị dữ liệu..' : 'Nhấn để xem chi tiết sự kiện'}</span>
      </section>
    </div>
  );
}

ClickToSeeDetail.propTypes = {
  loading: bool.isRequired,
  onClick: func.isRequired,
};

export default ClickToSeeDetail;
