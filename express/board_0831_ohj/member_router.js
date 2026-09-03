const express = require('express');
const router = express.Router();
const Member = require('./model'); // 1. Mongoose Model 임포트

// 회원 가입
router.post('/join', async (req, res) => {
    try {
        const member = new Member(req.body);
        const result = await member.save(); // DB에 저장
        res.json({ success: true, data: result });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// 회원 리스트
router.get(['/list', '/'], async (req, res) => {
    try {
        const members = await Member.find({}); // 전체 회원 조회
        res.json({ success: true, data: members });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// 회원정보 상세보기
router.get('/get/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const member = await Member.findOne({ id: id }); // custom 'id' 필드로 검색
        if (!member) {
            return res.status(404).json({ success: false, message: '회원을 찾을 수 없습니다.' });
        }
        res.json({ success: true, data: member });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// 회원정보 수정
router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Member.findOneAndUpdate({ id: id }, req.body, { new: true });
        res.json({ success: true, data: result });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// 회원 삭제
router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Member.deleteOne({ id: id });
        res.json({ success: true, data: '회원삭제 완료' });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;