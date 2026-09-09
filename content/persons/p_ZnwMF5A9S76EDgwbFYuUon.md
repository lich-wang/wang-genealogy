---
schema: wang-person/v1
id: p_ZnwMF5A9S76EDgwbFYuUon
status: active
merged_into: null
display_name: 王昌齡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JPD8oj4U2UUzmAk5U7ANUi
        subject_person_id: p_ZnwMF5A9S76EDgwbFYuUon
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F59s16uHrcRR4XhrRo6uy4
          claim_id: c_JPD8oj4U2UUzmAk5U7ANUi
          source_id: s_xKrCdds1YK4PTzmzaT6st4
          stance: supports
          locator: CBDB:281097
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（281097）
          source: &a1
            id: s_xKrCdds1YK4PTzmzaT6st4
            source_type: api_record
            title: 中国历代人物传记资料库：王昌齡（CBDB 281097）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281097&o=json
            external_identifier: CBDB:281097
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.046Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_64uW9u2HQF1MYtzuncpEAk
        subject_person_id: p_ZnwMF5A9S76EDgwbFYuUon
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
        - id: cs_7ftXDFevfNum1v7a1GuPNH
          claim_id: c_64uW9u2HQF1MYtzuncpEAk
          source_id: s_xKrCdds1YK4PTzmzaT6st4
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

# 王昌齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌齡 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昌齡（CBDB 281097）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281097&o=json)
