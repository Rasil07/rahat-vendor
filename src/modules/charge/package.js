import React, { useContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import { IoCloseCircle, IoSendOutline, IoQrCodeOutline } from 'react-icons/io5';

import { AppContext } from '../../contexts/AppContext';
import Loading from '../global/Loading';
import AppHeader from '../layouts/AppHeader';
import DataService from '../../services/db';
import { RahatService } from '../../services/chain';


export default function ChargePackage(props) {
	const { wallet } = useContext(AppContext);
	let history = useHistory();
	// let beneficiary= props.match.params.beneficiary;
  // let tokenId = props.match.param.tokenId;
  
	const [beneficiaryPhone, setBeneficiaryPhone] = useState('');
	const [loading, showLoading] = useState(null);



const handlePackageCharge = () => {
  console.log("charge")
}

	return (
		<>
		
			<Loading showModal={loading !== null} message={loading} />
			<AppHeader currentMenu="Charge Package" />

      <div id="appCapsule" className="full-height">
				<div className="section mt-2 mb-2">
					<div className="listed-detail mt-3">
						<div className="text-center">
							<img src="/assets/img/brand/icon-72.png" alt="asset" className="image" />
						</div>

						<h3 className="text-center mt-2">ajksdflkj</h3>
					</div>

					<ul className="listview flush transparent simple-listview no-space mt-3">
						<li>
							<strong>Namaa e:</strong>
							<span>sadasdasd</span>
						</li>
						<li>
							<strong>Symbol:</strong>
							<span>BTC</span>
						</li>
						<li>
							<strong>Description</strong>
							<span>Contains lots of items</span>
						</li>
						<li>
							<strong>Value in fiat:</strong>
							<span>
								<span>NRS 100</span>
							</span>
						</li>
						<li>
							<strong>Amoaunt:</strong>
							<h3 className="m-0">11000</h3>
						</li>
					</ul>

<div className='text-right mt-3'>
<button
									type="button"
									id="btncharge"
									className="btn btn-success"
									onClick={handlePackageCharge}
								>
									<IoSendOutline className="ion-icon" /> charge
								</button>
</div>
				
				</div>
				
			</div>
		
		</>  );
    }
