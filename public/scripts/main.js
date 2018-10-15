//jQuery for Tab selection
//Used this code from http://www.minerva18.com/blog/creating-switchable-lightning-design-tabs-in-salesforce/
$(document).ready(function(){
  $('.slds-tabs_default__link').click(function(){
    $(this).parent().parent().find('.slds-tabs_default__link').attr('aria-selected','false');
    $(this).attr('aria-selected','true');
    $(this).parent().parent().find('.slds-tabs_default__link').attr('tabindex','-1');
    $(this).attr('tabindex','0');
    $(this).parent().addClass('slds-is-active').siblings().removeClass('slds-is-active');
    $(this).parent().parent().parent().find('.'+$(this).parent().parent().parent().find('.slds-tabs_default__content')[0].classList[0]).removeClass('slds-show').addClass('slds-hide');
    $(this).parent().parent().parent().find('#'+$(this).attr('aria-controls')).removeClass('slds-hide').addClass('slds-show');
  });
});
