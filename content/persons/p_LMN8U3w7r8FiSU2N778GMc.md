---
schema: wang-person/v1
id: p_LMN8U3w7r8FiSU2N778GMc
status: active
merged_into: null
display_name: 王勳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1Gi8Gk13dQ6bbW1vhv6zNZ
        subject_person_id: p_LMN8U3w7r8FiSU2N778GMc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M6ScqCojuXXu17ELw3ukPS
          claim_id: c_1Gi8Gk13dQ6bbW1vhv6zNZ
          source_id: s_qFS2NUhysAJ7sWECtbuJy6
          stance: supports
          locator: CBDB:1818
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1818）
          source: &a1
            id: s_qFS2NUhysAJ7sWECtbuJy6
            source_type: api_record
            title: 中国历代人物传记资料库：王勳（CBDB 1818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1818&o=json
            external_identifier: CBDB:1818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.283Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_S9c2HGYZML6pnQgApYETKi
        subject_person_id: p_LMN8U3w7r8FiSU2N778GMc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1138年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3DP9KxqDzx389uDCPf78GY
          claim_id: c_S9c2HGYZML6pnQgApYETKi
          source_id: s_qFS2NUhysAJ7sWECtbuJy6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cY7Uk7Fj25xjkkS9KMRq8g
        subject_person_id: p_LMN8U3w7r8FiSU2N778GMc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mFHmU3dh1U55tpMgQ75dbS
          claim_id: c_cY7Uk7Fj25xjkkS9KMRq8g
          source_id: s_qFS2NUhysAJ7sWECtbuJy6
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
  ancestors: []
  descendants: []
  other: []
---

# 王勳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勳 | accepted |
| death.date | 1138年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勳（CBDB 1818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1818&o=json)
