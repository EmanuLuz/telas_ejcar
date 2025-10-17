document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('signaturePad');
    const clearBtn = document.getElementById('clearSignature');
    const ctx = canvas.getContext('2d');
    
    function initCanvas() {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = 200;
        
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = '#000';
        ctx.fillStyle = '#f9f9f9';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    initCanvas();
    
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    
    function startDrawing(e) {
        isDrawing = true;
        const pos = getPosition(e);
        [lastX, lastY] = [pos.x, pos.y];
        
        e.preventDefault();
    }
    
    function draw(e) {
        if (!isDrawing) return;
        
        const pos = getPosition(e);
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
        
        [lastX, lastY] = [pos.x, pos.y];
        
        e.preventDefault();
    }
    
    function stopDrawing() {
        isDrawing = false;
    }

    function getPosition(e) {
        const rect = canvas.getBoundingClientRect();
        let clientX, clientY;
        
        if (e.type.includes('touch')) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }
    
    function clearSignature() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#f9f9f9';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#000'; 
    }
    
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    
    canvas.addEventListener('touchstart', startDrawing, { passive: false });
    canvas.addEventListener('touchmove', draw, { passive: false });
    canvas.addEventListener('touchend', stopDrawing);
    
    clearBtn.addEventListener('click', clearSignature);
    window.addEventListener('resize', initCanvas);
    
    function temAssinatura() {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < imageData.data.length; i += 4) {
            if (imageData.data[i + 3] !== 0) {
                return true;
            }
        }
        return false;
    }
    
    const concluirBtn = document.getElementById('concluirBtn');
    concluirBtn.addEventListener('click', function() {
    
        if (!document.getElementById('termoCheckbox').checked) {
            alert('Você deve marcar "Eu li e concordo com as condições apresentadas" para concluir a vistoria.');
            return;
        }
        
        if (!temAssinatura()) {
            alert('Por favor, assine o termo de aceitação antes de salvar.');
            return;
        }
        
        const dados = {
            step: document.getElementById('boxstep').checked ? 'Possui' : 'Não possui',
            macaco: document.getElementById('boxmacaco').checked ? 'Possui' : 'Não possui',
            chave: document.getElementById('boxchave').checked ? 'Possui' : 'Não possui',
            outrosItens: document.getElementById('descricao').value || 'Nenhum',
            proprietario: document.getElementById('proprietario').value,
            marcaModelo: document.getElementById('marcaModelo').value,
            placa: document.getElementById('placa').value,
            termoAceito: 'Aceito',
            data: new Date().toLocaleString()
        };
        
        localStorage.setItem('vistoria', JSON.stringify(dados));
        
        console.log('Dados da Vistoria:', dados);
        
        alert('Vistoria salva com sucesso!');
    });
});