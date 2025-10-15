document.addEventListener('DOMContentLoaded', function() {
    initAnimations();  
    initHoverEffects(); 
});

function initAnimations() {
    const rows = document.querySelectorAll('.employee-row, .org-row');
    rows.forEach(row => {
        row.style.opacity = '1';
    });
}

function initHoverEffects() {
    document.querySelectorAll('.employee-avatar').forEach(avatar => {
        avatar.addEventListener('mouseenter', () => {
            avatar.style.transform = 'scale(1.1)';
        });
        avatar.addEventListener('mouseleave', () => {
            avatar.style.transform = 'scale(1)';
        });
    });
    
    document.querySelectorAll('.time-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-2px)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
        });
    });
    
    document.querySelectorAll('.no-data').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2)';
        });
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1)';
        });
    });
}