var panorama1, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7, panorama8, panorama9, panorama10, panorama11, panorama12, viewer, container, infospot, font;
var panorama13, panorama14, panorama15, panorama16, panorama17, panorama18, panorama19, panorama20, panorama21, panorama22, panorama23, panorama24;
var panorama25, panorama26;

container = document.querySelector( '#container' );

function createTextShape ( message, size = 10, count ) {
        message = makeMultiLine( message, count );
        var shapes = font.generateShapes( message, size );
        var geometry = new THREE.ShapeGeometry( shapes );
        var matLite = new THREE.MeshBasicMaterial( {
          color: 0xffffff,
          transparent: true,
          opacity: 1,
          side: THREE.DoubleSide
        } );
        geometry.computeBoundingBox();
        var xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
        geometry.translate( xMid, 0, 0 );
        return new THREE.Mesh( geometry, matLite );
}
function makeMultiLine ( text = '', count = 40 ) {
        let lineCharacterLimit = 0;
        return text.split(' ').map( word => {
          lineCharacterLimit += word.length;
          if ( lineCharacterLimit > count ) {
            word += '\n';
            lineCharacterLimit = 0;
          }
          return word;
        }).join(' ').replace( /\n /g, '\n' );
}

panorama1 = new PANOLENS.ImagePanorama( './asset/PIC_1.jpg' );
panorama2 = new PANOLENS.ImagePanorama( './asset/PIC_2.jpg' );
panorama3 = new PANOLENS.ImagePanorama( './asset/PIC_3.jpg' );
panorama4 = new PANOLENS.ImagePanorama( './asset/PIC_4.jpg' );
panorama5 = new PANOLENS.ImagePanorama( './asset/PIC_5.jpg' );
panorama6 = new PANOLENS.ImagePanorama( './asset/PIC_6.jpg' );
panorama7 = new PANOLENS.ImagePanorama( './asset/PIC_7.jpg' );
panorama8 = new PANOLENS.ImagePanorama( './asset/PIC_8.jpg' );
panorama9 = new PANOLENS.ImagePanorama( './asset/PIC_9.jpg' );
panorama10 = new PANOLENS.ImagePanorama( './asset/PIC_10.jpg' );
panorama11 = new PANOLENS.ImagePanorama( './asset/PIC_11.jpg' );
panorama12 = new PANOLENS.ImagePanorama( './asset/PIC_12.jpg' );
panorama13 = new PANOLENS.ImagePanorama( './asset/PIC_13.jpg' );
panorama14 = new PANOLENS.ImagePanorama( './asset/PIC_14.jpg' );
panorama15 = new PANOLENS.ImagePanorama( './asset/PIC_15.jpg' );
panorama16 = new PANOLENS.ImagePanorama( './asset/PIC_16.jpg' );
panorama17 = new PANOLENS.ImagePanorama( './asset/PIC_17.jpg' );
panorama18 = new PANOLENS.ImagePanorama( './asset/PIC_18.jpg' );
panorama19 = new PANOLENS.ImagePanorama( './asset/PIC_19.jpg' );
panorama20 = new PANOLENS.ImagePanorama( './asset/PIC_20.jpg' );
panorama21 = new PANOLENS.ImagePanorama( './asset/PIC_21.jpg' );
panorama22 = new PANOLENS.ImagePanorama( './asset/PIC_22.jpg' );
panorama23 = new PANOLENS.ImagePanorama( './asset/PIC_23.jpg' );
panorama24 = new PANOLENS.ImagePanorama( './asset/PIC_24.jpg' );
panorama25 = new PANOLENS.ImagePanorama( './asset/PIC_25.jpg' );
panorama26 = new PANOLENS.ImagePanorama( './asset/PIC_26.jpg' );

viewer = new PANOLENS.Viewer( {output: 'console', container: container});
viewer.add( panorama1, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7, panorama8, panorama9, panorama10, panorama11, panorama12);
viewer.add( panorama13, panorama14, panorama15, panorama16, panorama17, panorama18, panorama19, panorama20, panorama21, panorama22, panorama23, panorama24);
viewer.add( panorama25, panorama26);

panorama1.link( panorama2, new THREE.Vector3( 4911.04, -153.09, 872.99 ) );
panorama1.link( panorama3, new THREE.Vector3( 689.78, 386.77, -4930.77 ) );

panorama1.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(68.04, 368.83, -4950.77), 0 );
} );

panorama2.link( panorama1, new THREE.Vector3( -4231.52, 57.11, -2647.73 ) );
panorama2.link( panorama7, new THREE.Vector3( 964.32, 189.88, -4895.11 ) );

panorama2.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(1199.92, 204.75, -4839.45), 0 );
} );

panorama3.link( panorama1, new THREE.Vector3( 2733.93, -503.82, -4144.14 ) );
panorama3.link( panorama4, new THREE.Vector3( 4318.77, -26.40, 2515.58 ) );
panorama3.link( panorama23, new THREE.Vector3( -3999.19, -115.58, -2988.39 ) );

panorama3.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-2953.08, 480.79, 4000.36), 0 );
} );

panorama4.link( panorama3, new THREE.Vector3( -4750.16, 189.09, -1535.54 ) );
panorama4.link( panorama5, new THREE.Vector3( 1466.61, -164.93, 4769.61 ) );
panorama4.link( panorama24, new THREE.Vector3( -770.14, 39.74, 4931.83 ) );

panorama4.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(2772.32, -158.41, 4145.87), 0 );
} );

panorama5.link( panorama4, new THREE.Vector3( -2780.13, -223.28, 4137.76 ) );
panorama5.link( panorama6, new THREE.Vector3( -4971.26, -35.09, 522.03 ) );

panorama5.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-2609.39, 81.94, -4255.26), 0 );
} );

panorama6.link( panorama4, new THREE.Vector3( 2835.34, -485.45, -4080.87 ) );
panorama6.link( panorama5, new THREE.Vector3( -1967.95, -156.42, -4586.39 ) );

panorama6.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(968.71, -140.96, 4896.36), 0 );
} );

panorama7.link( panorama2, new THREE.Vector3( -4617.28, -182.72, 1884.58 ) );
panorama7.link( panorama8, new THREE.Vector3( 4192.66, -8.96, 2711.04 ) );

panorama7.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4972.60, 69.84, -470.45), 0 );
} );

panorama8.link( panorama7, new THREE.Vector3( 2032.30, 92.08, 4564.38 ) );
panorama8.link( panorama9, new THREE.Vector3( -3871.66, -194.10, 3140.98 ) );
panorama8.link( panorama10, new THREE.Vector3( 1265.51, 55.36, -4827.95 ) );
panorama8.link( panorama13, new THREE.Vector3( 4925.64, -202.65, 768.35 ) );
panorama8.link( panorama23, new THREE.Vector3( -2722.51, 20.73, 4184.66 ) );

panorama8.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(1443.43, -80.70, -4779.24), 0 );
} );

panorama9.link( panorama8, new THREE.Vector3( -3626.83, -445.95, -3403.82 ) );

panorama9.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4917.90, 85.12, -846.73), 0 );
} );

panorama10.link( panorama8, new THREE.Vector3( 4008.31, -166.28, -2973.98 ) );
panorama10.link( panorama11, new THREE.Vector3( 3091.86, -16.98, 3920.39 ) );
panorama10.link( panorama12, new THREE.Vector3( 463.68, -350.38, -4961.93 ) );
panorama10.link( panorama13, new THREE.Vector3( -2358.60, -136.62, 4396.16 ) );
panorama10.link( panorama21, new THREE.Vector3( -4560.70, -52.92, 2042.90 ) );

panorama10.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-1740.22, -382.68, 4664.297), 0 );
} );

panorama11.link( panorama10, new THREE.Vector3( 2499.48, -398.53, -4311.24 ) );

panorama11.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-2424.10, -485.86, 4339.11), 0 );
} );

panorama12.link( panorama10, new THREE.Vector3( 3275.37, -8.48, -3772.21 ) );

panorama12.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-65.99, 323.28, 4983.84), 0 );
} );

panorama13.link( panorama10, new THREE.Vector3( -2747.52, -65.39, -4166.32 ) );
panorama13.link( panorama14, new THREE.Vector3( 3376.62, 963.27, 3546.94 ) );

panorama13.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(2906.20, -108.72, 4061.25), 0 );
} );

panorama14.link( panorama13, new THREE.Vector3( -222.06, -77.39, -4985.32 ) );
panorama14.link( panorama15, new THREE.Vector3( 163.08, 7.57, 4991.16 ) );
panorama14.link( panorama16, new THREE.Vector3( -704.95, 41.60, 4942.08 ) );
panorama14.link( panorama17, new THREE.Vector3( -4910.36, -227.75, 858.54 ) );
panorama14.link( panorama18, new THREE.Vector3( 428.77, 57.16, 4975.28 ) );
panorama14.link( panorama19, new THREE.Vector3( 1067.64, 55.34, 4880.971 ) );
panorama14.link( panorama20, new THREE.Vector3( 1523.89, 45.09, 4759.13 ) );

panorama14.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-133.42, -15.45, 4992.40), 0 );
} );

panorama15.link( panorama14, new THREE.Vector3( -3693.75, -144.07, 3359.63 ) );

panorama15.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4907.41, -522.10, 737.80), 0 );
} );

panorama16.link( panorama14, new THREE.Vector3( -2215.88, -35.24, 4473.34 ) );

panorama16.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(1357.12, -61.26, -4803.16), 0 );
} );

panorama17.link( panorama14, new THREE.Vector3( -883.22, 91.93, 4911.85 ) );

panorama17.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(198.55, -409.49, -4972.15), 0 );
} );

panorama18.link( panorama14, new THREE.Vector3( 4966.39, -114.47, 533.22 ) );

panorama18.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4349.02, 16.78, -2461.46), 0 );
} );

panorama19.link( panorama14, new THREE.Vector3( 3377.57, -373.08, 3663.11 ) );

panorama19.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(2571.97, -151.49, -4276.30), 0 );
} );

panorama20.link( panorama14, new THREE.Vector3( -2726.38, -289.48, -4169.57 ) );

panorama20.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-1594.74, -166.36, 4729.23), 0 );
} );

panorama21.link( panorama10, new THREE.Vector3( 4189.65, -224.79, -2700.12 ) );
panorama21.link( panorama22, new THREE.Vector3( 4859.90, 132.01, -1134.63 ) );

panorama21.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-2386.75, -226.54, 4377.86), 0 );
} );

panorama22.link( panorama21, new THREE.Vector3( 311.45, -284.18, -4972.51 ) );

panorama22.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4898.79, -59.63, -973.78), 0 );
} );

panorama23.link( panorama3, new THREE.Vector3( 4094.30, -41.47, 2860.16 ) );
panorama23.link( panorama8, new THREE.Vector3( -4992.47, -80.89, -83.03 ) );
panorama23.link( panorama25, new THREE.Vector3( 3590.81, 45.38, 3468.05 ) );
panorama23.link( panorama26, new THREE.Vector3( -3220.03, -196.10, -3807.55 ) );

panorama23.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4164.48, -246.77, -2737.30), 0 );
} );

panorama24.link( panorama4, new THREE.Vector3( 4858.18, -504.89, 1050.16 ) );

panorama24.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-421.16, -356.42, -4963.92), 0 );
} );

panorama25.link( panorama23, new THREE.Vector3( -4847.73, -169.22, -1174.42 ) );

panorama25.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(3863.49, -125.14, 3155.37), 0 );
} );

panorama26.link( panorama23, new THREE.Vector3( -2689.84, -84.89, 4202.88 ) );

panorama26.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4802.84, -148.41, -1345.11), 0 );
} );

radius = 1500;
var loader = new THREE.FontLoader();
var info_p2_1, info_p6_1, info_p8_1, info_p9_1, info_p9_2, info_p10_1, info_p11_1, info_p13_1_1, info_p13_1_2, info_p13_2_1, info_p13_4_1, info_p13_4_2, info_p13_4_3, info_p13_4_4, info_p14_1_1, info_p14_1_2, info_p14_1_3, info_p15_2_1, info_p15_2_2;

loader.load( './fonts/tbi.json', onFontLoaded );
function onFontLoaded ( _font ) {
        font = _font;

p3_t1 = createLabel('Конференц-зал', 0.7, 170);
//panorama3.add( p3_t1 );
p5_t1 = createLabel('Кабинет дополнительного \n        образования', 2.4, -50);
//panorama5.add( p5_t1 );
p5_t2 = createLabel('Мастерские', 1.1, -130);
//panorama5.add( p5_t2 );
p1_t4 = createLabel('3-й этаж', 0.8, 80);
//panorama1.add( p1_t4 );
p1_t5 = createLabel('Кабинет для работы \n    с документами', 0.7, -175);
//panorama1.add( p1_t5 );

p17_1_t1 = createLabel('Коридор 1-го этажа', 5.9, -175);
//panorama17_1.add( p17_1_t1 );

p17_2_t1 = createLabel('Коридор 1-го этажа', 4.5, -175);
//panorama17_2.add( p17_2_t1 );

p2_t1 = createLabel('К лабораториям', 4.6, 20);
//panorama2.add( p2_t1 );
p2_t2 = createLabel('Коридор 1-го этажа', 1.3, -250);
//panorama2.add( p2_t2 );

p3_t1 = createLabel('Санпропускник', 5.05, -20);
//panorama3.add( p3_t1 );
p3_t2 = createLabel('Автоклавная', 4.83, -330);
//panorama3.add( p3_t2 );
p3_t3 = createLabel('Микробиологические \n      исследования', 0.65, -100);
//panorama3.add( p3_t3 );
p3_t4 = createLabel('Микробиологические \n      исследования', 1.4, 00);
//panorama3.add( p3_t4 );
p3_t5 = createLabel('Микологические исследования', 3.2, -45);
//panorama3.add( p3_t5 );
p3_t6 = createLabel('Забор проб', 2.83, -55);
//panorama3.add( p3_t6 );

p4_t1 = createLabel('Коридор 1-го этажа', 0.55, -150);
//panorama4.add( p4_t1 );

p5_t1 = createLabel('Коридор 1-го этажа', 3.4, -175);
//panorama5.add( p5_t1 );

p6_t1 = createLabel('Коридор 1-го этажа', 2.4, -20);
//panorama6.add( p6_t1 );

p7_t1 = createLabel('Коридор 1-го этажа', 0.3, -20);
//panorama7.add( p7_t1 );

p8_t1 = createLabel('Коридор 1-го этажа', 2.2, -200);
//panorama8.add( p8_t1 );

p9_t1 = createLabel('Коридор 1-го этажа', 0.1, -100);
//panorama9.add( p9_t1 );

p10_t1 = createLabel('Коридор 1-го этажа', 1.16, -130);
//panorama10.add( p10_t1 );
p10_t2 = createLabel('Термостатная', 4.2, -10);
//panorama10.add( p10_t2 );

p12_t1 = createLabel('На 1-й этаж', 5.35, -130);
//panorama12.add( p12_t1 );
p12_t2 = createLabel('    Проведение \n физико-химических \n    исследований', 0.85, 250);
//panorama12.add( p12_t2 );
p12_t3 = createLabel('    Проведение \n физико-химических \n    исследований', 2.35, 100);
//panorama12.add( p12_t3 );
p12_t4 = createLabel('    Проведение \n физико-химических \n    исследований', 3.95, 50);
//panorama12.add( p12_t4 );

info_p5_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p5_1.position.set( -2519.86, -2234.82, 3687.60 );
info_p5_1.addHoverElement( document.getElementById( 'desc-p5_1' ), 200 );
//panorama5.add( info_p5_1 );

info_p6_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p6_1.position.set( 2870.49, -2174.70, 3456.64 );
info_p6_1.addHoverElement( document.getElementById( 'desc-p6_1' ), 200 );
//panorama6.add( info_p6_1 );

info_p8_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p8_1.position.set( -1157.05, 220.09, -4850.32 );
info_p8_1.addHoverElement( document.getElementById( 'desc-p8_1' ), 200 );
//panorama8.add( info_p8_1 );

info_p9_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p9_1.position.set( 4585.20, 326.18, 1952.45 );
info_p9_1.addHoverElement( document.getElementById( 'desc-p9_1' ), 200 );
//panorama9.add( info_p9_1 );

info_p9_2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p9_2.position.set( 4462.10, -1174.62, -1918.06 );
info_p9_2.addHoverElement( document.getElementById( 'desc-p9_2' ), 200 );
//panorama9.add( info_p9_2 );

info_p10_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p10_1.position.set( 2853.84, 443.19, -4074.81 );
info_p10_1.addHoverElement( document.getElementById( 'desc-p10_1' ), 200 );
//panorama10.add( info_p10_1 );

info_p11_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p11_1.position.set( 3079.23, -373.10, 3912.63 );
info_p11_1.addHoverElement( document.getElementById( 'desc-p11_1' ), 200 );
//panorama11.add( info_p11_1 );

info_p13_1_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_1_1.position.set( 3745.09, -2321.64, 2348.57 );
info_p13_1_1.addHoverElement( document.getElementById( 'desc-p13_1_1' ), 200 );
//panorama13_1.add( info_p13_1_1 );
info_p13_1_2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_1_2.position.set( -910.80, -2366.09, -4305.69 );
info_p13_1_2.addHoverElement( document.getElementById( 'desc-p13_1_2' ), 200 );
//panorama13_1.add( info_p13_1_2 );

info_p13_2_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_2_1.position.set( -4919.62, 225.32, 800.70 );
info_p13_2_1.addHoverElement( document.getElementById( 'desc-p13_2_1' ), 200 );
//panorama13_2.add( info_p13_2_1 );

info_p13_4_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_4_1.position.set( 2255.78, -2283.40, 3830.85 );
info_p13_4_1.addHoverElement( document.getElementById( 'desc-p13_4_1' ), 200 );
//panorama13_4.add( info_p13_4_1 );
info_p13_4_2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_4_2.position.set( 3963.87, -1368.49, 2706.61 );
info_p13_4_2.addHoverElement( document.getElementById( 'desc-p13_4_2' ), 200 );
//panorama13_4.add( info_p13_4_2 );
info_p13_4_3 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_4_3.position.set( 4585.53, -1505.99, -1276.95 );
info_p13_4_3.addHoverElement( document.getElementById( 'desc-p13_4_3' ), 200 );
//panorama13_4.add( info_p13_4_3 );
info_p13_4_4 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_4_4.position.set( -1331.62, -3079.72, -3697.05 );
info_p13_4_4.addHoverElement( document.getElementById( 'desc-p13_4_4' ), 200 );
//panorama13_4.add( info_p13_4_4 );

info_p14_1_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p14_1_1.position.set( -4615.91, -1770.56, -681.55 );
info_p14_1_1.addHoverElement( document.getElementById( 'desc-p14_1_1' ), 200 );
//panorama14_1.add( info_p14_1_1 );
info_p14_1_2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p14_1_2.position.set( -4950.63, -539.46, -315.52 );
info_p14_1_2.addHoverElement( document.getElementById( 'desc-p14_1_2' ), 200 );
//panorama14_1.add( info_p14_1_2 );
info_p14_1_3 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p14_1_3.position.set( -2884.14, -1090.44, 3931.56 );
info_p14_1_3.addHoverElement( document.getElementById( 'desc-p14_1_3' ), 200 );
//panorama14_1.add( info_p14_1_3 );

info_p15_2_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p15_2_1.position.set( 4173.26, -1802.17, 2060.94 );
info_p15_2_1.addHoverElement( document.getElementById( 'desc-p15_2_1' ), 200 );
//panorama15_2.add( info_p15_2_1 );
info_p15_2_2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p15_2_2.position.set( -4820.01, -821.60, -1035.75 );
info_p15_2_2.addHoverElement( document.getElementById( 'desc-p15_2_2' ), 200 );
//panorama15_2.add( info_p15_2_2 );

}

function createLabel(text='', angle=0, height=0)
{
    titleSprite = createTextShape( text, 15);
    titleSprite.position.set( radius * Math.sin( -angle ), height, radius * Math.cos( -angle ) );
    titleSprite.position.y += 45;
    titleSprite.rotation.y = Math.PI - angle;
    titleSprite.scale.multiplyScalar( 2 );
    return titleSprite;
}




