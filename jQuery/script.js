$(() => {
    // 1. การดักจับเหตุการณ์การคลิก (Event Handling)
    $('#addBtn').on('click', function() {
        const taskText = $('#taskInput').val();

        if (taskText !== "") {
            // 2. การสร้าง Element และ Append เข้าไปใน List
            const listItem = $(`<li>
                <span>${taskText}</span>
                <span class="delete-btn">X</span>
            </li>`).hide(); // ซ่อนไว้ก่อนเพื่อทำ Animation

            $('#taskList').append(listItem);
            listItem.fadeIn(300); // แสดงผลแบบค่อยๆ ปรากฏ

            $('#taskInput').val(''); // ล้างช่อง input
        }
    });

    // 3. การใช้ Event Delegation (สำคัญสำหรับ Element ที่สร้างขึ้นใหม่)
    $('#taskList').on('click', '.delete-btn', function() {
        $(this).parent().fadeOut(300, function() {
            $(this).remove();
        });
    });
});