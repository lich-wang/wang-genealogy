---
schema: wang-person/v1
id: p_RwDXYA3Qv94RjH4co8bTGv
status: active
merged_into: null
display_name: 王進
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LS1AhPmUBt5JJ9VC1EaqT5
        subject_person_id: p_RwDXYA3Qv94RjH4co8bTGv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Bfu7kVyJGLPCsW9RTc2Pxm
          claim_id: c_LS1AhPmUBt5JJ9VC1EaqT5
          source_id: s_2U3A9iFZD4kTmpekwswwtk
          stance: supports
          locator: CBDB:126726
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126726）
          source: &a1
            id: s_2U3A9iFZD4kTmpekwswwtk
            source_type: api_record
            title: 中国历代人物传记资料库：王進（CBDB 126726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126726&o=json
            external_identifier: CBDB:126726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.155Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8dwRQsw3fuS2JsaKp19R3V
        subject_person_id: p_RwDXYA3Qv94RjH4co8bTGv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1355年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LCQkKF6BzWykScY9ovdTKU
          claim_id: c_8dwRQsw3fuS2JsaKp19R3V
          source_id: s_2U3A9iFZD4kTmpekwswwtk
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
        id: c_JX7j3G7BoyD4hESJhGZ8iF
        subject_person_id: p_RwDXYA3Qv94RjH4co8bTGv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1426年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XEVfHQ8kwTDD34vHmcY1Hg
          claim_id: c_JX7j3G7BoyD4hESJhGZ8iF
          source_id: s_2U3A9iFZD4kTmpekwswwtk
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
        id: c_A2pUrvSftRz9iDZai6oH14
        subject_person_id: p_RwDXYA3Qv94RjH4co8bTGv
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
        - id: cs_wKh9ZPEkWBe4jiKVFzE5t3
          claim_id: c_A2pUrvSftRz9iDZai6oH14
          source_id: s_2U3A9iFZD4kTmpekwswwtk
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

# 王進

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王進 | accepted |
| birth.date | 1355年 | accepted |
| death.date | 1426年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王進（CBDB 126726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126726&o=json)
