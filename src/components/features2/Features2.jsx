import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './featuress.css';

export default function Features2(props) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="features24-container2 thq-section-max-width p-20">
      {/* Tabs Menu */}
      <div className="features24-tabs-menu">
        {/* Tab 1 */}
        <div
          onClick={() => setActiveTab(0)}
          className={`features24-tab-horizontal1 ${activeTab === 0 ? 'active-tab' : ''}`}
        >
          <div className="features24-divider-container1">
            {activeTab === 0 && <div className="features24-vertical-line"></div>}
          </div>
          <div className="features24-content1">
            <h2 className="features24-text3 text-3xl font-semibold">College</h2>
            <span className="features24-text6">
            Shri Mata Vaishno Devi University (SMVDU) is a college located in Jammu, India. It is known for its engineering programs and innovative projects.
            </span>
          </div>
        </div>
        
        {/* Tab 2 */}
        <div
          onClick={() => setActiveTab(1)}
          className={`features24-tab-horizontal2 ${activeTab === 1 ? 'active-tab' : ''}`}
        >
          <div className="features24-divider-container2">
            {activeTab === 1 && <div className="features24-vertical-line"></div>}
          </div>
          <div className="features24-content2">
            <h2 className="features24-text2 text-3xl font-semibold">Vehicle Specs</h2>
            <span className="features24-text4">
            Our electric vehicle is designed for the SAE BAJA competition, featuring a lightweight chassis, powerful electric motor, and advanced suspension system.
            </span>
          </div>
        </div>
        
        {/* Tab 3 */}
        <div
          onClick={() => setActiveTab(2)}
          className={`features24-tab-horizontal3 ${activeTab === 2 ? 'active-tab' : ''}`}
        >
          <div className="features24-divider-container3">
            {activeTab === 2 && <div className="features24-vertical-line"></div>}
          </div>
          <div className="features24-content3">
            <h2 className="features24-text5 text-3xl font-semibold">Team</h2>
            <span className="features24-text1">
            The SMVDU College team consists of dedicated students from various engineering disciplines who are passionate about designing and building innovative vehicles.
            </span>
          </div>
        </div>
      </div>

      {/* Image Container */}
      <div className="features24-image-container">
        {activeTab === 0 && (
          <img
            alt={props.feature1ImgAlt}
            src={props.feature1ImgSrc}
            className="features24-image1"
          />
        )}
        {activeTab === 1 && (
          <img
            alt={props.feature2ImgAlt}
            src={props.feature2ImgSrc}
            className="features24-image2"
          />
        )}
        {activeTab === 2 && (
          <img
            alt={props.feature3ImgAlt}
            src={props.feature3ImgSrc}
            className="features24-image3"
          />
        )}
      </div>
    </div>
  );
}

Features2.propTypes = {
  feature1ImgSrc: PropTypes.string.isRequired,
  feature2ImgSrc: PropTypes.string.isRequired,
  feature3ImgSrc: PropTypes.string.isRequired,
  feature1ImgAlt: PropTypes.string.isRequired,
  feature2ImgAlt: PropTypes.string.isRequired,
  feature3ImgAlt: PropTypes.string.isRequired,
};

Features2.defaultProps = {
  feature1ImgSrc: 'https://images.unsplash.com/photo-1722573783625-eceb04251036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjY4NzA3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgSrc: 'https://images.unsplash.com/photo-1617886322168-72b886573c35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjY4NzA3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgSrc: 'https://images.unsplash.com/photo-1594443787110-73423138299e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjY4NzA3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'Description for image 1',
  feature2ImgAlt: 'Description for image 2',
  feature3ImgAlt: 'Description for image 3',
};
