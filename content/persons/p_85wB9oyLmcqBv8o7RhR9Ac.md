---
schema: wang-person/v1
id: p_85wB9oyLmcqBv8o7RhR9Ac
status: active
merged_into: null
display_name: 王冬
cbdb_id: 236746
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZWXJYjMdUW9G6LA78nbJvK
        subject_person_id: p_85wB9oyLmcqBv8o7RhR9Ac
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冬，明人物。正統四年進士，籍贯海陽。（中国历代人物传记资料库 CBDB 236746）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_CZ7DKgikJDHxkANLPRxxl3
          claim_id: c_ZWXJYjMdUW9G6LA78nbJvK
          source_id: s_Kh4R4op2V4EEp9vU63fap8
          stance: supports
          locator: CBDB:236746
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Kh4R4op2V4EEp9vU63fap8
            source_type: api_record
            title: 中国历代人物传记资料库：王冬（CBDB 236746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236746&o=json
            external_identifier: CBDB:236746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wE3S64BhS5jK4Y1CD67NTA
        subject_person_id: p_85wB9oyLmcqBv8o7RhR9Ac
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PS9Achj9Q6A4KAdmCAMQ2Z
          claim_id: c_wE3S64BhS5jK4Y1CD67NTA
          source_id: s_Kh4R4op2V4EEp9vU63fap8
          stance: supports
          locator: CBDB:236746
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
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

# 王冬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王冬，明人物。正統四年進士，籍贯海陽。（中国历代人物传记资料库 CBDB 236746） | accepted |
| name.primary | 王冬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王冬（CBDB 236746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236746&o=json)
