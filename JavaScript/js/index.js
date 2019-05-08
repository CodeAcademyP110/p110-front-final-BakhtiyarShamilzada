// Header Start

$(document).ready(function()
{
    "use strict";
    $('.menu-mobil').hide();
    $('.sub-menu').hide();
    $(document).on('click', '.fa-bars', function()
    {
        $('.menu-mobil').slideToggle();
    })
    $(document).on('click', '.badge-pill', function()
    {
        $(this).parent().next().slideToggle();
        
    })
    
})

// Header End

// Slider Start

const img = $('.lenta img');
const chevronLeft = $('.fa-chevron-left');
const chevronRight = $('.fa-chevron-right')
const lenta = $('.lenta');
const LentaLi = $('.lenta li');
let index = 0;

$(document).on('click', '.fa-chevron-left', function()
{
    prev();
})
$(document).on('click', '.fa-chevron-right', function()
{
    next();
})
function slide()
{
    lenta.css('left', -img.width() * index);
}

function prev()
{
    index--;
    if(index < 0)
    {
        index = LentaLi.length - 1;
    }
    slide();
}
function next()
{    
    index++;
    if(index === LentaLi.length)
    {
        index = 0;
    }
    slide();
}
// Slider End

// Tabs Start

$(document).on('click', 'button.tab', function()
{
    $('button.tab.active').removeClass('active');
    $(this).addClass('active');
})

$('.tab.content.flights').hide();

$(document).on('click', 'button.tab.flights', function()
{
    $('.tab.content').hide();
    $('.tab.content.flights').show();
})

$(document).on('click', 'button.tab.hotels', function()
{
    $('.tab.content').hide();
    $('.tab.content.hotels').show();
})
let indexButton = 1;
const buttonGroup = $('.button-group-mobil button');
function updateButton()
{
    $('.tab.mobil').hide();
    $('.tab.mobil.active').show();
}
updateButton();

$(document).on('click', '.fa-long-arrow-alt-right', function()
{
    buttonNext();
})
function buttonNext()
{
    index++;
    
    if(index === buttonGroup.length)
    {
        buttonGroup.find('.tab.mobil.hotels').addClass('active');
        updateButton();
        index = 0;
    }
    else
    {
        $('.tab.mobil.active').removeClass('active').next().addClass('active');
        updateButton();
    }
    
}
// Tabs End

// Before Accordion
$(' #tabs-extra .accordion-content').hide();
$(document).on('click', '.accordion-menu', function()
{
    $(this).find('span').toggleClass('active');
    $(this).next().slideToggle();
})

// Tabs Start

$(document).on('click', 'button.tab', function()
{
    $('button.tab.active').removeClass('active');
    $(this).addClass('active');
})

$('.tab.content').hide();
$('.tab.content.honeymoon').show();

$(document).on('click', 'button.tab.honeymoon', function()
{
    $('.tab.content').hide();
    $('.tab.content.honeymoon').show();
})

$(document).on('click', 'button.tab.family', function()
{
    $('.tab.content').hide();
    $('.tab.content.family').show();
})

$(document).on('click', 'button.tab.weekends', function()
{
    $('.tab.content').hide();
    $('.tab.content.weekends').show();
})

$(document).on('click', 'button.tab.friends', function()
{
    $('.tab.content').hide();
    $('.tab.content.friends').show();
})

// Tabs End