---
schema: wang-person/v1
id: p_9aVKxPyVaDrWCGVGCNZPGp
status: active
merged_into: null
display_name: 王進賢
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ginKXvHT98ryD1i4paPQQE
        subject_person_id: p_9aVKxPyVaDrWCGVGCNZPGp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cV44LuDEgh7nR1gQKXNQyJ
          claim_id: c_ginKXvHT98ryD1i4paPQQE
          source_id: s_j9uH43zhdBzNHC6ZK1tsqN
          stance: supports
          locator: CBDB:201476
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201476）
          source: &a1
            id: s_j9uH43zhdBzNHC6ZK1tsqN
            source_type: api_record
            title: 中国历代人物传记资料库：王進賢（CBDB 201476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201476&o=json
            external_identifier: CBDB:201476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.676Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RA9TAjP1C8r8m5EjscfMGG
        subject_person_id: p_9aVKxPyVaDrWCGVGCNZPGp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1466年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4D5zV3Tzdivb4B8WSvzPeN
          claim_id: c_RA9TAjP1C8r8m5EjscfMGG
          source_id: s_j9uH43zhdBzNHC6ZK1tsqN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5Gv4zCMJs6JiJJEAFRu7DD
        subject_person_id: p_9aVKxPyVaDrWCGVGCNZPGp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e7y2Y6RZvchnmNE8374urt
          claim_id: c_5Gv4zCMJs6JiJJEAFRu7DD
          source_id: s_j9uH43zhdBzNHC6ZK1tsqN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_e-Rr3iGj6cUlWLhV3HuPFc
        subject_person_id: p_9aVKxPyVaDrWCGVGCNZPGp
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_RP7FwGd4ZFSzs6CWahsx8a
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-qwIOgs0g1XpVyDefC1DHs
          claim_id: c_e-Rr3iGj6cUlWLhV3HuPFc
          source_id: s_nOafqSwaDwOzaMrHjmfYxg
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第三十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nOafqSwaDwOzaMrHjmfYxg
            source_type: api_record
            title: 中国历代人物传记资料库：某氏(王進賢妻)（CBDB 273033）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273033&o=json
            external_identifier: CBDB:273033
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RP7FwGd4ZFSzs6CWahsx8a
        status: active
        display_name: 某氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_-_qG-nJXrQty7NpDIo8mrM
        subject_person_id: p_BtgHHrLDxTH7wTHXnHeht1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9aVKxPyVaDrWCGVGCNZPGp
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sPFXg7iGFeAWLXxI-jWrGB
          claim_id: c_-_qG-nJXrQty7NpDIo8mrM
          source_id: s_j9uH43zhdBzNHC6ZK1tsqN
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第三十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BtgHHrLDxTH7wTHXnHeht1
        status: active
        display_name: 王寬
        merged_into_person_id: null
    - claim:
        id: c_lgzuMl0nYdaM6bOjI5chwI
        subject_person_id: p_Xc9qEvyFBtpCZ2gJfJpwiL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9aVKxPyVaDrWCGVGCNZPGp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xsQlXVwwqIcmh-wwnbUmuQ
          claim_id: c_lgzuMl0nYdaM6bOjI5chwI
          source_id: s_j9uH43zhdBzNHC6ZK1tsqN
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第三十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Xc9qEvyFBtpCZ2gJfJpwiL
        status: active
        display_name: 王謐
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王進賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王進賢 | accepted |
| birth.date | 1466年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_RP7FwGd4ZFSzs6CWahsx8a | 某氏 | accepted |
| ancestors | p_BtgHHrLDxTH7wTHXnHeht1 | 王寬 | accepted |
| ancestors | p_Xc9qEvyFBtpCZ2gJfJpwiL | 王謐 | accepted |

## 外部来源

- [中国历代人物传记资料库：某氏(王進賢妻)（CBDB 273033）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273033&o=json)
- [中国历代人物传记资料库：王進賢（CBDB 201476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201476&o=json)
