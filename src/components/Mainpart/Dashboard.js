import * as React from 'react';
import logo from '../../../src/images/logo.svg';
import token from '../../../src/images/token.svg';
import apply from '../../../src/images/apply.svg';
import nft from '../../../src/images/NFT.svg';
import documentation from '../../../src/images/Documentation.svg';
import './Dashboard.css';



const Dashboard = () => {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2" style={{ backgroundColor: '#FFFFFF',position:'sticky' }}>
                    <img className='mt-3' style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%' }} src={logo} alt="" />
                    <div class="px-0 mt-4 text-center"><button class="" style={{ minHeight: "2.6rem;" }}>Connect Wallet</button>
                    </div>
                    <ul class="list-group mt-3 border-0">
                        <li class="list-group-item border-0" >
                            <img src={token} alt="" /> 
                            <a class="btn btn-none" style={{fontWeight:'600'}} href="/" role="button">Token management</a></li>
                        <li class="list-group-item border-0"><img src={apply} alt="" /><a class="btn btn-none" style={{fontWeight:'600'}} href="/" role="button">Apply for IDO</a></li>
                        <li class="list-group-item border-0"><img src={nft} alt="" /><a class="btn btn-none" style={{fontWeight:'600'}} href="/" role="button">NFT</a></li>
                        <li class="list-group-item border-0"><img src={documentation} alt="" /><a class="btn btn-none" style={{fontWeight:'600'}} href="/" role="button">Documentation</a></li>
                    
                    </ul>

                </div>
                <div className="col-md-10" style={{ backgroundColor: '#F0EBF4',minHeight:'600' }}>
                    <p className='' style={{marginLeft:'40%',marginTop:'20%',marginBottom:'30%'}}>Please connect your wallet</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;