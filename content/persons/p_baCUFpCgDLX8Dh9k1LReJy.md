---
schema: wang-person/v1
id: p_baCUFpCgDLX8Dh9k1LReJy
status: active
merged_into: null
display_name: 王衍恆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aJZCQ3E2GEPrtivmz5p5xf
        subject_person_id: p_baCUFpCgDLX8Dh9k1LReJy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衍恆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aKqgebXjGWNKuSiZqww2HP
          claim_id: c_aJZCQ3E2GEPrtivmz5p5xf
          source_id: s_cZWXDhwBcRdWkSCD3QoJVV
          stance: supports
          locator: CBDB:640199
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640199）
          source: &a1
            id: s_cZWXDhwBcRdWkSCD3QoJVV
            source_type: api_record
            title: 中国历代人物传记资料库：王衍恆（CBDB 640199）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640199&o=json
            external_identifier: CBDB:640199
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.181Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Vb6kN9Nzu4QXBBNn86RyVF
        subject_person_id: p_baCUFpCgDLX8Dh9k1LReJy
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
        - id: cs_h1iYtHK414t3TLrHAVNX2w
          claim_id: c_Vb6kN9Nzu4QXBBNn86RyVF
          source_id: s_cZWXDhwBcRdWkSCD3QoJVV
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

# 王衍恆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衍恆 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王衍恆（CBDB 640199）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640199&o=json)
