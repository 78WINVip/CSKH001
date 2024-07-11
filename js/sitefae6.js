﻿// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let listLinks = [
    "https://78win80.com/trangchu"
];



function randomLink() {
    let i = parseInt(Math.random() * listLinks.length);
    window.open(listLinks[i], "_blank");
}


var moreText = document.getElementById('text_more');
var readLess = document.querySelector('.see-scope');
var readMore = document.querySelector('.see-more');

function clickReadMore() {
    readMore.addEventListener('click', function () {
        moreText.style.display = 'inline-block';
        this.style.display = 'none';
    });
}

function clickReadLess() {
    readLess.addEventListener('click', function () {
        moreText.style.display = 'none';
        readMore.style.display = 'inline-block';
    });
}
$('.icon-close').on('click', function () {
    $('.content-popup').hide();
    showTab('tab1-tab');
    $('.tab-content').addClass('active');
});

$('.btn-content').each(function () {
    var _this = $(this);
    _this.on('click', function () {
        var tabIdControl = $(this).data('tab-control');

        $('#show-iframe-open .code-iframe').each(function () {
            var tabContentId = $(this).data('content-tab');

            if (tabIdControl == tabContentId) {

                $(this).addClass('active');
                $('#box-iframe').show();
                $('#btn-tawk-small').show();
            } else {
                $(this).removeClass('active');
            }
        });
    });
});



$(document).ready(function () {
    $(".close-customer").click(function () {
        $("#imageModal").modal('hide');
    });

    $('#btn-tawk-small').hide();
    $('#box-iframe').hide();

    $('#btn-tawk-small').on('click', function () {
        $(this).hide();
        $('#box-iframe').hide();
    });

    $('#draggable .chat-dialog').css('display', 'none');
    $('#draggable .chat-dialog').each(function (index, value) {
        if ($(this).hasClass('active')) {
            $(this).css('display', 'block');
            $(this).parent().hide();
        }
    });
});