angular.module('regalConsultancy', ['angular-flexslider']).controller('homeCtrl', ['$scope', function ($scope) {
    $scope.sliderData = [{
        index: 0,
        img: 'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
        caption: 'Australia'
    }, {
        index: 1,
        img: 'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
        caption: 'Canada'
    }, {
        index: 2,
        img: 'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
        caption: 'NewZealand'
    }, {
        index: 3,
        img: 'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg',
        caption: 'USA'
    }];

    $scope.assesibilityData = [{
        index: 'A',
        title: 'Free Assessment of your eligibility',
        detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },{
        index: 'B',
        title: 'Start to finish immigration package',
        detail: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },{
        index: 'C',
        title: 'Immigration plan to become qualified',
        detail: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.'
    },{
        index: 'D',
        title: 'Hourly consultation (In person, phone, email)',
        detail: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    }];

    $scope.visasType = [{
        index: 0,
        visaType: 'Business Visas',
        visaDesc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur'
    },{
        index: 1,
        visaType: 'Family Sponsorship',
        visaDesc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
    },{
        index: 0,
        visaType: 'Student Visas',
        visaDesc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'
    },{
        index: 0,
        visaType: 'Visitor Visas',
        visaDesc: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'
    }];
}]);
