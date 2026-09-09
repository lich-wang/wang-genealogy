---
schema: wang-person/v1
id: p_LZXN1xVGkATTP3bZhwuDs6
status: active
merged_into: null
display_name: 王貽桂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KNCX4ZY7Y3ankpSZEkKtnn
        subject_person_id: p_LZXN1xVGkATTP3bZhwuDs6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貽桂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bFWLfvyGc6cGzMi8Q17ZBS
          claim_id: c_KNCX4ZY7Y3ankpSZEkKtnn
          source_id: s_PxGtEaVD2r3qQSP6N2CW15
          stance: supports
          locator: CBDB:343512
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343512）
          source: &a1
            id: s_PxGtEaVD2r3qQSP6N2CW15
            source_type: api_record
            title: 中国历代人物传记资料库：王貽桂（CBDB 343512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343512&o=json
            external_identifier: CBDB:343512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.380Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YyEwRj4vQ3PvbXLVSwubNa
        subject_person_id: p_LZXN1xVGkATTP3bZhwuDs6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U1QkDn8QgAidP18mrFqXT2
          claim_id: c_YyEwRj4vQ3PvbXLVSwubNa
          source_id: s_PxGtEaVD2r3qQSP6N2CW15
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

# 王貽桂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貽桂 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王貽桂（CBDB 343512）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343512&o=json)
