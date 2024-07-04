import { useState } from 'react';
import Container from "./Container";

const LatestProduct = () => {
    const [activeTab, setActiveTab] = useState('NewArrival');

    return (
        <section>
            <Container>
                <div className="text-center my-10">
                    <h2 className='font-jose font-bold text-[40px] text-[#1A0B5B]'>Leatest Products</h2>
                </div>
                <div className="">
                    <div className="mb-4">
                        <ul className="flex flex-wrap justify-center -mb-px text-sm font-medium text-center" id="default-tab" role="tablist">
                            <li className="me-2" role="presentation">
                                <button className={`inline-block p-4 border-b-4 font-lato font-normal text-[18px] ${activeTab === 'NewArrival' ? 'border-[#FB4997] text-[#FB4997]' : 'border-transparent text-[#151875]'}`} id="NewArrival-tab" onClick={() => setActiveTab('NewArrival')} type="button" role="tab" aria-controls="NewArrival" aria-selected={activeTab === 'NewArrival'}>New Arrival</button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button className={`inline-block p-4 border-b-4 font-lato font-normal text-[18px] ${activeTab === 'BestSeller' ? 'border-[#FB4997] text-[#FB4997]' : 'border-transparent text-[#151875]'}`} id="BestSeller-tab" onClick={() => setActiveTab('BestSeller')} type="button" role="tab" aria-controls="BestSeller" aria-selected={activeTab === 'BestSeller'}>Best Seller</button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button className={`inline-block p-4 border-b-4 font-lato font-normal text-[18px] ${activeTab === 'Featured' ? 'border-[#FB4997] text-[#FB4997]' : 'border-transparent text-[#151875]'}`} id="Featured-tab" onClick={() => setActiveTab('Featured')} type="button" role="tab" aria-controls="Featured" aria-selected={activeTab === 'Featured'}>Featured</button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button className={`inline-block p-4 border-b-4 font-lato font-normal text-[18px] ${activeTab === 'SpecialOffer' ? 'border-[#FB4997] text-[#FB4997]' : 'border-transparent text-[#151875]'}`} id="SpecialOffer-tab" onClick={() => setActiveTab('SpecialOffer')} type="button" role="tab" aria-controls="SpecialOffer" aria-selected={activeTab === 'SpecialOffer'}>Special Offer</button>
                            </li>
                        </ul>
                    </div>
                    <div id="default-tab-content">
                        <div className={`${activeTab === 'NewArrival' ? 'block' : 'hidden'} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} id="NewArrival" role="tabpanel" aria-labelledby="NewArrival-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content for the <strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the content visibility and styling.</p>
                        </div>
                        <div className={`${activeTab === 'BestSeller' ? 'block' : 'hidden'} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} id="BestSeller" role="tabpanel" aria-labelledby="BestSeller-tab">
                            <h2>hi</h2>
                        </div>
                        <div className={`${activeTab === 'Featured' ? 'block' : 'hidden'} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} id="Featured" role="tabpanel" aria-labelledby="Featured-tab">
                            <h2>hello</h2>
                        </div>
                        <div className={`${activeTab === 'SpecialOffer' ? 'block' : 'hidden'} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} id="SpecialOffer" role="tabpanel" aria-labelledby="SpecialOffer-tab">
                            <h2>hello</h2>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default LatestProduct;
