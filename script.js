function updateTimes() {
    const now = new Date();
    
    // 東京時間（日本時間）
    const tokyoTime = now.toLocaleTimeString('ja-JP', { 
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('tokyo-time').textContent = tokyoTime;

    // ニューヨーク時間
    const newyorkTime = now.toLocaleTimeString('ja-JP', {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('newyork-time').textContent = newyorkTime;

    // 時差計算（ニューヨーク）
    const newyorkDate = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
    const newyorkDiff = Math.round((newyorkDate.getTime() - now.getTime()) / (1000 * 60 * 60));
    document.getElementById('newyork-diff').textContent = 
        `日本との時差: ${Math.abs(newyorkDiff)}時間${newyorkDiff > 0 ? '進み' : '遅れ'}`;

    // ロンドン時間
    const londonTime = now.toLocaleTimeString('ja-JP', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('london-time').textContent = londonTime;

    // 時差計算（ロンドン）
    const londonDate = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/London' }));
    const londonDiff = Math.round((londonDate.getTime() - now.getTime()) / (1000 * 60 * 60));
    document.getElementById('london-diff').textContent = 
        `日本との時差: ${Math.abs(londonDiff)}時間${londonDiff > 0 ? '進み' : '遅れ'}`;
}

// 初回実行
updateTimes();

// 1秒ごとに更新
setInterval(updateTimes, 1000);
