---
schema: wang-person/v1
id: p_mUEYbRX4aVLjLFKBFLuBm7
status: active
merged_into: null
display_name: 王繼勳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bp8kAsCM1xQyqvTMePALaT
        subject_person_id: p_mUEYbRX4aVLjLFKBFLuBm7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼勳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pF2BdbWoUMBrCRAzCJVWtd
          claim_id: c_bp8kAsCM1xQyqvTMePALaT
          source_id: s_84h7BmaPpEg3Bv3N54P32n
          stance: supports
          locator: CBDB:38451
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38451）
          source: &a1
            id: s_84h7BmaPpEg3Bv3N54P32n
            source_type: api_record
            title: 中国历代人物传记资料库：王繼勳（CBDB 38451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38451&o=json
            external_identifier: CBDB:38451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mnej3HiVg5WHQuH2BFg8oN
        subject_person_id: p_mUEYbRX4aVLjLFKBFLuBm7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 912年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QsPGzUBqz8SY2iqeP4x18L
          claim_id: c_mnej3HiVg5WHQuH2BFg8oN
          source_id: s_84h7BmaPpEg3Bv3N54P32n
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_mXPTgU2HLEbFA7yDLtkfGa
        subject_person_id: p_mUEYbRX4aVLjLFKBFLuBm7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 956年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j6jHERxNzKqdUxF2MQ57XS
          claim_id: c_mXPTgU2HLEbFA7yDLtkfGa
          source_id: s_84h7BmaPpEg3Bv3N54P32n
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
        id: c_r9e3P1N1DxKYmSL4No2wYm
        subject_person_id: p_mUEYbRX4aVLjLFKBFLuBm7
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
        - id: cs_YrEeM3jjTbYX7CQp4o8KEY
          claim_id: c_r9e3P1N1DxKYmSL4No2wYm
          source_id: s_84h7BmaPpEg3Bv3N54P32n
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

# 王繼勳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼勳 | accepted |
| birth.date | 912年 | accepted |
| death.date | 956年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼勳（CBDB 38451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38451&o=json)
