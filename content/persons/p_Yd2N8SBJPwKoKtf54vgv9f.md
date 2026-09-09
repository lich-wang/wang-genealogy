---
schema: wang-person/v1
id: p_Yd2N8SBJPwKoKtf54vgv9f
status: active
merged_into: null
display_name: 王遇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1762HjnqWcc1gdatxLdgxn
        subject_person_id: p_Yd2N8SBJPwKoKtf54vgv9f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TT6gE6Gye5b1cpowGo2hLi
          claim_id: c_1762HjnqWcc1gdatxLdgxn
          source_id: s_c2hoY6DUxnL4SL7usM1tkU
          stance: supports
          locator: CBDB:494368
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（494368）
          source: &a1
            id: s_c2hoY6DUxnL4SL7usM1tkU
            source_type: api_record
            title: 中国历代人物传记资料库：王遇（CBDB 494368）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494368&o=json
            external_identifier: CBDB:494368
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.445Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JS5RVuUBF2rSeBxHQ5vX7D
        subject_person_id: p_Yd2N8SBJPwKoKtf54vgv9f
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
        - id: cs_Xur217AEzg47BZn98AkKz7
          claim_id: c_JS5RVuUBF2rSeBxHQ5vX7D
          source_id: s_c2hoY6DUxnL4SL7usM1tkU
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

# 王遇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遇 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遇（CBDB 494368）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494368&o=json)
