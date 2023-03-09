import React from 'react'

function Footer() {
  return (
    <footer className='global-footer'>
            <dl className="global-footer-detail-list">
              <div className="global-footer-detail-item">
                <dt>Email</dt>
                <dd>
                  <a href="mailto:asjask123@gmail.com"
                    ><address>asjask123@gmail.com</address></a
                  >
                </dd>
              </div>
              <div className="global-footer-detail-item">
                <dt>GitHub</dt>
                <dd><a href="https://github.com/hanbitguri">https://github.com/hanbitguri</a></dd>
              </div>
            </dl>
    </footer>
  )
}

export default Footer