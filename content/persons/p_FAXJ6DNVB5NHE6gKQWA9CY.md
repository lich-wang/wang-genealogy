---
schema: wang-person/v1
id: p_FAXJ6DNVB5NHE6gKQWA9CY
status: active
merged_into: null
display_name: 王恭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g3tgHi3GgHdWNZuQ5NKUsF
        subject_person_id: p_FAXJ6DNVB5NHE6gKQWA9CY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_frYrFJvPQzCAD9Gdo2wk1C
          claim_id: c_g3tgHi3GgHdWNZuQ5NKUsF
          source_id: s_T2kj9HSzz9vTHnr6ag24Zx
          stance: supports
          locator: CBDB:276680
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276680）
          source: &a1
            id: s_T2kj9HSzz9vTHnr6ag24Zx
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 276680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276680&o=json
            external_identifier: CBDB:276680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GF1D7TboRQXRCv6ZWzuWw5
        subject_person_id: p_FAXJ6DNVB5NHE6gKQWA9CY
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
        - id: cs_2K75m1YuQdAP9U496NXucM
          claim_id: c_GF1D7TboRQXRCv6ZWzuWw5
          source_id: s_T2kj9HSzz9vTHnr6ag24Zx
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

# 王恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恭 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恭（CBDB 276680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276680&o=json)
