import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './features.css';

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="thq-section-padding p-20 mt-8">
      <div className="features24-container2 thq-section-max-width">
        
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
        
        {/* Tabs Menu */}
        <div className="features24-tabs-menu pl-10">
          {/* Tab 1 */}
          <div
            onClick={() => setActiveTab(0)}
            className={`features24-tab-horizontal1 ${activeTab === 0 ? 'active-tab' : ''}`}
          >
            <div className="features24-divider-container1">
              {activeTab === 0 && <div className="features24-vertical-line"></div>}
            </div>
            <div className="features24-content1">
              <h2 className="features24-text3 text-3xl font-semibold">Vehicle Specs</h2>
              <span className="features24-text6 ">
                Learn about the specifications and features of our electric vehicle.
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
              <h2 className="features24-text2 text-3xl font-semibold">Meet the Team</h2>
              <span className="features24-text4 ">
                Meet the dedicated team of students working on the electric vehicle project.
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
              <h2 className="features24-text5 text-3xl font-semibold">Progress Blog Updates</h2>
              <span className="features24-text1 ">
                Follow our progress as we build and test our electric vehicle for the competition.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Features24.defaultProps = {
  feature1ImgSrc: 'https://images.unsplash.com/photo-1673969206260-7cca51be9f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjY4NzA3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgSrc: 'https://images.unsplash.com/photo-1593985818125-f506da53a292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjY4NzA3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgSrc: 'https://images.unsplash.com/photo-1580795478966-561ba4f1ce68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjY4NzA3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'Electric Vehicle Prototype',
  feature2ImgAlt: 'Team members discussing design plans',
  feature3ImgAlt: 'Team working on the electric vehicle',
};

Features24.propTypes = {
  feature1ImgSrc: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
};

export default Features24;
