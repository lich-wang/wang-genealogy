---
schema: wang-person/v1
id: p_DaceSCoivWKakaLS5hN3i4
status: active
merged_into: null
display_name: 王滋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p8642yNB3rGAPN2EAPiZit
        subject_person_id: p_DaceSCoivWKakaLS5hN3i4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FADspXoBs24kfaZFg3S63d
          claim_id: c_p8642yNB3rGAPN2EAPiZit
          source_id: s_ocKxjH5yjwiwoNMWYbQ2Ws
          stance: supports
          locator: CBDB:23539
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23539）
          source: &a1
            id: s_ocKxjH5yjwiwoNMWYbQ2Ws
            source_type: api_record
            title: 中国历代人物传记资料库：王滋（CBDB 23539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23539&o=json
            external_identifier: CBDB:23539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sHh4QKU7Pnr57Arx7A4P2C
        subject_person_id: p_DaceSCoivWKakaLS5hN3i4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1094年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F4GDabd6JWzTfhLBuMkHcJ
          claim_id: c_sHh4QKU7Pnr57Arx7A4P2C
          source_id: s_ocKxjH5yjwiwoNMWYbQ2Ws
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
        id: c_Pd2nou6GJWEnXRgMsrGfZo
        subject_person_id: p_DaceSCoivWKakaLS5hN3i4
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
        - id: cs_3PUL1FnAi6eSJWHsWQSfh7
          claim_id: c_Pd2nou6GJWEnXRgMsrGfZo
          source_id: s_ocKxjH5yjwiwoNMWYbQ2Ws
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

# 王滋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王滋 | accepted |
| birth.date | 1094年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王滋（CBDB 23539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23539&o=json)
