   document.addEventListener('DOMContentLoaded', function() {
            const canvas = document.getElementById('signaturePad');
            const clearBtn = document.getElementById('clearSignature');
            const signatureData = document.getElementById('signatureData');
            const ctx = canvas.getContext('2d');
            
        
            const scale = window.devicePixelRatio || 1;
            canvas.width = canvas.offsetWidth * scale;
            canvas.height = canvas.offsetHeight * scale;
            ctx.scale(scale, scale);
            
            
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.strokeStyle = '#000';
            
            let isDrawing = false;
            let lastX = 0;
            let lastY = 0;
            
         
            function startDrawing(e) {
                isDrawing = true;
                const pos = getPosition(e);
                [lastX, lastY] = [pos.x, pos.y];
            }
            
         
            function draw(e) {
                if (!isDrawing) return;
                
                const pos = getPosition(e);
                ctx.beginPath();
                ctx.moveTo(lastX, lastY);
                ctx.lineTo(pos.x, pos.y);
                ctx.stroke();
                
                [lastX, lastY] = [pos.x, pos.y];
              
                signatureData.value = canvas.toDataURL();
            }
            
     
            function stopDrawing() {
                isDrawing = false;
                signatureData.value = canvas.toDataURL();
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
                    x: (clientX - rect.left) * (canvas.width / rect.width / scale),
                    y: (clientY - rect.top) * (canvas.height / rect.height / scale)
                };
            }
            
           
            function clearSignature() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                signatureData.value = '';
            }
            
          
            canvas.addEventListener('mousedown', startDrawing);
            canvas.addEventListener('mousemove', draw);
            canvas.addEventListener('mouseup', stopDrawing);
            canvas.addEventListener('mouseout', stopDrawing);
            
     
            canvas.addEventListener('touchstart', startDrawing);
            canvas.addEventListener('touchmove', draw);
            canvas.addEventListener('touchend', stopDrawing);

            clearBtn.addEventListener('click', clearSignature);
            
    
            const concluirBtn = document.getElementById('concluirBtn');
            concluirBtn.addEventListener('click', function() {
                alert('Vistoria registrada com sucesso! Obrigado.');
            });
        });