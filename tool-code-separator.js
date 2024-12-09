<script>
document.getElementById('separateCodeBtn').addEventListener('click', () => {
      const inputCode = document.getElementById('inputCode').value;
      let htmlCode = '';
      let cssCode = '';
      let jsCode = '';

      const cssRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
      const jsRegex = /]*>([\s\S]*?)<\/script>/gi;

      htmlCode = inputCode.replace(cssRegex, '').replace(jsRegex, '').trim();
      cssCode = (inputCode.match(cssRegex) || []).map(tag => tag.replace(/<\/?style[^>]*>/gi, '')).join('\n').trim();
      jsCode = (inputCode.match(jsRegex) || []).map(tag => tag.replace(/<\/?script[^>]*>/gi, '')).join('\n').trim();

      document.getElementById('htmlOutput').value = htmlCode;
      document.getElementById('cssOutput').value = cssCode;
      document.getElementById('jsOutput').value = jsCode;
    });

    document.getElementById('clearCodeBtn').addEventListener('click', () => {
      document.getElementById('inputCode').value = '';
      document.getElementById('htmlOutput').value = '';
      document.getElementById('cssOutput').value = '';
      document.getElementById('jsOutput').value = '';
    });

    function copyToClipboard(elementId) {
      const textarea = document.getElementById(elementId);
      textarea.select();
      textarea.setSelectionRange(0, 99999); // For mobile devices
      document.execCommand('copy');
      alert('Copied to clipboard: ' + elementId);
    }
</script>
