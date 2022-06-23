const {Targetables} = require('@magento/pwa-buildpack');

function localIntercept(targets) {
    const targetables = Targetables.using(targets);
 


const Header = targetables.reactComponent(
        '@magento/venia-ui/lib/components/Header/header.js'
      );
    const Text = Header.addImport("{Text} from 'customTheme'");
    
    Header.insertAfterJSX(
        '<div className={classes.toolbar}>',
        `<${Text}  />`
        );





const galleryItem = targetables.reactComponent(
          '@magento/venia-ui/lib/components/Gallery/item.js'
        );
    const colorPlate = galleryItem.addImport("{Test} from 'customTheme'");
    
    galleryItem.insertAfterJSX(
        "<div data-cy=\"GalleryItem-price\" className={classes.price}>",
        `<${colorPlate} item={item} />`
    );




  const Logo = targetables.reactComponent(
        '@magento/venia-ui/lib/components/Logo/logo.js'
        );

  const CustomLogo = Logo.addImport(
          '{Logo as CustomLogo} from "customTheme"') 

  Logo.setJSXProps('Image', {
        src: `{${CustomLogo}}`,
        className: '"custom-logo-class"',
        title: '"custom title"',
        alt: '"custom alt"'
      })

// //Remove menu to new block
// //-------------------
// const header = targetables.reactComponent(
//   '@magento/venia-ui/lib/components/Header/header.js'
// )
// header.insertAfterJSX(
//   "<div className={classes.toolbar} />",
//   "div className='custom-menu-wrapper'"
// )
// .appendJSX(
//   "<div className='custom-menu-wrapper'>",
//   "<MegaMenu />"
// )
// .removeJSX(
//   "MegaMenu"
// )
// .addJSXClassName(
// '<div className={classes.switchersContainer} />',
// '"custom-background-blue"'
// )
// .addJSXClassName(
//   '<div className={classes.switchers} />',
//   '"custom-col-white"'
// )

// //Currency switcher menu
// //----------------------
// const customCurrencySwitcher = targetables.reactComponent(
// '@magento/venia-ui/lib/components/Header/currencySwitcher.js'
// );
// customCurrencySwitcher.addJSXClassName(
// '<div className={menuClassName} />',
// '"custom-background-blue"'
// )
// .addJSXClassName(
// '<li key={code} className={classes.menuItem} />',
// '"custom-currensy-switcher-hover"'
// );

// //Add blue color and position menu
// //-------------------
// const customMenu = targetables.reactComponent(
// '@magento/venia-ui/lib/components/MegaMenu/megaMenu.js'
// );
// customMenu.addJSXClassName(
//   '<nav className={classes.megaMenu} />',
//   '"custom-menu-style"');

// //Custom search button
// //--------------------
// const customSearch = targetables.reactComponent(
// '@magento/venia-ui/lib/components/Header/searchTrigger.js'
// );
// customSearch.removeJSX(
// '<span className={classes.label} />'
// )
// .addJSXClassName(
// '<button className={searchClass} />',
// '"custom-round-btn"'
// )

// //Custom signe-in button
// //--------------------
// const customSignIn = targetables.reactComponent(
// '@magento/venia-ui/lib/components/Header/accountTrigger.js'
// );
// customSignIn.removeJSX(
// '<button className={classes.trigger} />'
// )
// const customCart = targetables.reactComponent(
// '@magento/venia-ui/lib/components/Header/cartTrigger.js'
// );
// customCart.addJSXClassName(
// '<button className={classes.trigger} />',
// '"custom-round-btn"'
// )




    // // Header
    // //--------------------
    // const headerRenders = targetables.esModule(
    //        '@magento/venia-ui/lib/components/Header/header.js'
    // )
    // headerRenders.addImport('import CustomHeader from "../../../../../../src/components/CustomHeader"');

    // headerRenders.insertBeforeSource(
    //     '<div className={classes.switchersContainer}>',
    //     '<CustomHeader />'
    // )
      
    // // Footer
    // //--------------------
    // const copyright = targetables.reactComponent(
    //   '@magento/venia-ui/lib/components/Footer/footer.js'
    // );
    // copyright.removeJSX('<ul className={classes.legal} />')
    //       .addJSXClassName('<div className={classes.branding}>', '"custom-color-blue copyright-custom-designe"')

    // // Джигурда-block
    // // -------------------
    // // Джигурда в карточке товара
    // const ProductFullDetailComponent = targetables.reactComponent(
    //     '@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.js'
    // );
    // ProductFullDetailComponent.insertAfterJSX(
    //     '<h1        className={classes.productName}        data-cy="ProductFullDetail-productName"    ></h1>',
    //     '<div className="custom-class">Джигурда</div>'
    // );
    // // Джигурда на карусели
    // let galleryItem = targetables.reactComponent(
    //   '@magento/venia-ui/lib/components/Gallery/item.js'
    // );
    // galleryItem.insertAfterJSX(
    //     '<Price/>',
    //     '<div className="custom-text"><p className="custom-class custom-color-blue">Джигурда</p></div>'
    // )


    //Add block in slider if slider is module
    //----------------------
    // let slider = targetables.module(
    //     '@magento/venia-ui/lib/components/Gallery/item.js'
    //   );
    // const justBlock = targetables.reactComponent(
    //     '@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail'
    // );
    // slider.insertAfterSource(
    //     '<Price/>',
    //     '<QuantityStepper />'
    // );


    // Try to hide 'import' via 'wrapper'
    // const logo = targetables.esModule(
    //     "@magento/venia-ui/lib/components/Logo/logo.js"
    //   );
    // logo.wrapWithFile(
    //     "import logo from './VeniaLogo.svg'",
    //     "pwa/src/wrapper"
    //   );

    // const ProductDetails = targetables.reactComponent(
    //     "@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.js"
    //   );
    //   const Custom = ProductDetails.addImport("{Custom} from 'custom'");
    //   ProductDetails.insertAfterJSX(
    //     "<RichText content={productDetails.description} />",
    //     `<${Custom} categoriesListData={productDetails.categoriesListData} />`
    //   );

}
module.exports = localIntercept;