---
schema: wang-person/v1
id: p_nqkQ2QrQi1t9x1JULvJyMw
status: active
merged_into: null
display_name: 王寬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XjLJjSiKLjX9ETzU62qsMr
        subject_person_id: p_nqkQ2QrQi1t9x1JULvJyMw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jaLK7Jjxs8TSGZY3A36GPr
          claim_id: c_XjLJjSiKLjX9ETzU62qsMr
          source_id: s_cMZatkoP3kn358qrgnrtDq
          stance: supports
          locator: CBDB:198482
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198482）
          source: &a1
            id: s_cMZatkoP3kn358qrgnrtDq
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 198482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198482&o=json
            external_identifier: CBDB:198482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.496Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zYovgfVVdJBL6kvZQDwYHs
        subject_person_id: p_nqkQ2QrQi1t9x1JULvJyMw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1424年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oKNcNZy6qq8niJM8ESXsG3
          claim_id: c_zYovgfVVdJBL6kvZQDwYHs
          source_id: s_cMZatkoP3kn358qrgnrtDq
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
        id: c_YaDG4CJvAKZaqBGE6LxRXS
        subject_person_id: p_nqkQ2QrQi1t9x1JULvJyMw
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
        - id: cs_jEGc3hRRQSB3ZR6A69M1Fn
          claim_id: c_YaDG4CJvAKZaqBGE6LxRXS
          source_id: s_cMZatkoP3kn358qrgnrtDq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gDiX7QNXxwUbzzstnQBL0c
        subject_person_id: p_kdUPqDPveaddB8fucGD47J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nqkQ2QrQi1t9x1JULvJyMw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qRupH7Vk7QiP9RhZOZhhTh
          claim_id: c_gDiX7QNXxwUbzzstnQBL0c
          source_id: s_UUReVZ2o6tzJGy6AdeH3H7
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百七十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UUReVZ2o6tzJGy6AdeH3H7
            source_type: api_record
            title: 中国历代人物传记资料库：王子良（CBDB 278120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278120&o=json
            external_identifier: CBDB:278120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.960Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kdUPqDPveaddB8fucGD47J
        status: active
        display_name: 王子良
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寬 | accepted |
| birth.date | 1424年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kdUPqDPveaddB8fucGD47J | 王子良 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寬（CBDB 198482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198482&o=json)
- [中国历代人物传记资料库：王子良（CBDB 278120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278120&o=json)
