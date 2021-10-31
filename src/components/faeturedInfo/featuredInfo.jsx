import React from 'react';
import { ArrowDownward, ArrowUpward} from '@mui/icons-material'
import "./featuredInfo.css"
const Featuredinfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">
                    Revanue
                </span>

                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,232</span>
                    <span className="featuredMoneyRate">-11.4
                        <ArrowDownward />
                    </span>
                </div>

                <span className="featuredSub">Compared to last month</span>

            </div>

                   <div className="featuredItem">
                <span className="featuredTitle">
                    Sales
                </span>

                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$103,23</span>
                    <span className="featuredMoneyRate">+22.4
                        <ArrowDownward />
                    </span>
                </div>

                <span className="featuredSub">Compared to last month</span>

            </div>

                   <div className="featuredItem">
                <span className="featuredTitle">
                    Cost
                </span>

                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$23,232</span>
                    <span className="featuredMoneyRate">-11.4
                        <ArrowUpward />
                    </span>
                </div>

                <span className="featuredSub">Compared to last month</span>

            </div>
        </div>
    );
}

export default Featuredinfo;
