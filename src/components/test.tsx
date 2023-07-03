// import React, { Component } from "react";
// import { Layout, Menu } from "antd";
// import "./App.css";

// const { Header, Content, Footer } = Layout;

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.skipToContentAnchorTag = React.createRef();
//     this.content = React.createRef();
//   }

//   /**
//    * Skips focus  past the navigation links to main content div on click/enter of skip to content link
//    */
//   handleClickOnSelectSkipToContent = () => {
//     this.skipToContentAnchorTag.current.className = "skip-to-content-invisible";
//     this.content.current.focus();
//   };

//   /**
//    * makes the 'Skip-to-content' anchor visible on focus
//    */
//   handleFocusOfSkipToContentAnchor = () => {
//     this.skipToContentAnchorTag.current.className = "skip-to-content-visible";
//   };

//   /**
//    * makes the 'skip-to-content' anchor invisible on blur
//    */
//   handleBlurOfSkipToContentAnchor = () => {
//     this.skipToContentAnchorTag.current.className = "skip-to-content-invisible";
//   };

//   render() {
//     return (
//       <Layout className="layout">
//         <a
//           href="#"
//           id="skip-to-content-anchor"
//           ref={this.skipToContentAnchorTag}
//           className="skip-to-content-invisible"
//           onFocus={() => this.handleFocusOfSkipToContentAnchor()}
//           onBlur={() => this.handleBlurOfSkipToContentAnchor()}
//           onClick={() => this.handleClickOnSelectSkipToContent()}
//         >
//           <u>Skip To Content</u>
//         </a>

//         <Header>
//           <Menu theme="dark" mode="horizontal">
//             <Menu.Item key="1" className="nav-link" tabIndex="0">
//               nav 1
//             </Menu.Item>
//             <Menu.Item key="2" className="nav-link" tabIndex="0">
//               nav 2
//             </Menu.Item>
//             <Menu.Item key="3" className="nav-link" tabIndex="0">
//               nav 3
//             </Menu.Item>
//           </Menu>
//         </Header>

//         <br />

//         <Content className="content-body">
//           <div className="site-layout-content" ref={this.content} tabIndex="0">
//             Content
//           </div>
//         </Content>

//         <Footer className="footer" tabIndex="0">
//           #Skip-To-Content@Accessibility
//         </Footer>

//       </Layout>
//     );
//   }
// }
// export default App;

import React from "react";

interface SkipLinkProperties {
  className?: string;

  children: React.ReactElement;
  /**
   * The css query aiding the selection of the
   * container (main, section etc) we want to scroll to;
   */
  skipTo: string;
}

const SkipLink: React.FC<SkipLinkProperties> = (props) => {
  const onClick = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const container: HTMLElement | null = document.querySelector(props.skipTo);

    if (container) {
      container.tabIndex = -1;
      container.focus();
      setTimeout(() => container.removeAttribute("tabindex"), 1000);
    }
  };

  return React.cloneElement(props.children, {
    onClick,
    className: props.className,
  });
};

SkipLink.defaultProps = {
  className: "skip-link",
  skipTo: "main:first-of-type",
};

export default SkipLink;
