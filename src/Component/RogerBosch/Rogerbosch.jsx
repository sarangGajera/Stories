import React from 'react'
import './rogerbosch.css'
import { CaretRightOutlined } from '@ant-design/icons';

const Rogerbosch = () => {
  return (
    <div className='rogerbosch'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12 col-sm-12 p-0'>
            <div className='rogerbosch_card'>
              <h5 className='d-flex align-items-center'>watch video <CaretRightOutlined className='ml-5'/></h5>
              <h1>
                Roger <br />
                Bosch
              </h1>
              <p>
                A small river named Duden flows <br/> by their place and supplies it with <br/> the necessary regelialia. Far far <br/> away, behind the word <br/> mountains, far from the countries <br/> Vokalia and Consonantia, there <br/> live the blind texts.
              </p>
              <h3>Roger.Bosch</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rogerbosch