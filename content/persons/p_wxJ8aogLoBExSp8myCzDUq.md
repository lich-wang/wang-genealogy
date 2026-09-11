---
schema: wang-person/v1
id: p_wxJ8aogLoBExSp8myCzDUq
status: active
merged_into: null
display_name: 王元
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NoHJMajfGWXAfeFPjM887s
        subject_person_id: p_wxJ8aogLoBExSp8myCzDUq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i4LnXWmL5dojmVW5C3b2pN
          claim_id: c_NoHJMajfGWXAfeFPjM887s
          source_id: s_u2q9U5x7iGPfjkKH1Y6gsS
          stance: supports
          locator: CBDB:206402
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206402）
          source: &a1
            id: s_u2q9U5x7iGPfjkKH1Y6gsS
            source_type: api_record
            title: 中国历代人物传记资料库：王元（CBDB 206402）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206402&o=json
            external_identifier: CBDB:206402
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.893Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iAj2Uf7BQfkPDYrVXX7GDz
        subject_person_id: p_wxJ8aogLoBExSp8myCzDUq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1548年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gsVHdeNxq8DX7aEiDjpE8X
          claim_id: c_iAj2Uf7BQfkPDYrVXX7GDz
          source_id: s_u2q9U5x7iGPfjkKH1Y6gsS
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
        id: c_ANk3NKeazgD52vvWiSQhRc
        subject_person_id: p_wxJ8aogLoBExSp8myCzDUq
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
        - id: cs_35Qbra8ZMXX9PMG3E6SnWY
          claim_id: c_ANk3NKeazgD52vvWiSQhRc
          source_id: s_u2q9U5x7iGPfjkKH1Y6gsS
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
  spouses: []
  ancestors:
    - claim:
        id: c_DFN38qIl6RCfZG5BUPV6Gm
        subject_person_id: p_EBBDGouXFwRt5NBVVq7oT2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wxJ8aogLoBExSp8myCzDUq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x7q_WbSaGdGaHBwQbrOyYZ
          claim_id: c_DFN38qIl6RCfZG5BUPV6Gm
          source_id: s_xKzrAxj1LgEgyR5x4kEGwt
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百三十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xKzrAxj1LgEgyR5x4kEGwt
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 217538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217538&o=json
            external_identifier: CBDB:217538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.254Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EBBDGouXFwRt5NBVVq7oT2
        status: active
        display_name: 王銳
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元 | accepted |
| birth.date | 1548年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_EBBDGouXFwRt5NBVVq7oT2 | 王銳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王銳（CBDB 217538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217538&o=json)
- [中国历代人物传记资料库：王元（CBDB 206402）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206402&o=json)
