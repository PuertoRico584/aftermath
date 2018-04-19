var slider = tns({
    container: "#autoHeight",
    autoHeight: true,
    items: 1,
    controls: false,
    arrowKeys: true,
    mouseDrag: true,
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2
      },
      700: {
        gutter: 30
      },
      900: {
        items: 3
      }
    }
  });
