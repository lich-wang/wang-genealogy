---
schema: wang-person/v1
id: p_ixdKU8xtDH1yyYVoiSMbkK
status: active
merged_into: null
display_name: 王軫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EsFNowF4wSzPfwPokBjCCW
        subject_person_id: p_ixdKU8xtDH1yyYVoiSMbkK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XHX3PEtwA7NBbEWX9U5KuG
          claim_id: c_EsFNowF4wSzPfwPokBjCCW
          source_id: s_WWLCBNPKevz3QhYa7ZVDhY
          stance: supports
          locator: CBDB:261848
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261848）
          source: &a1
            id: s_WWLCBNPKevz3QhYa7ZVDhY
            source_type: api_record
            title: 中国历代人物传记资料库：王軫（CBDB 261848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261848&o=json
            external_identifier: CBDB:261848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.564Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J93t21M4BR4w41vjQ1cxaW
        subject_person_id: p_ixdKU8xtDH1yyYVoiSMbkK
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
        - id: cs_uXtTA8tB8zwN461U87MrF2
          claim_id: c_J93t21M4BR4w41vjQ1cxaW
          source_id: s_WWLCBNPKevz3QhYa7ZVDhY
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

# 王軫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王軫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王軫（CBDB 261848）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261848&o=json)
