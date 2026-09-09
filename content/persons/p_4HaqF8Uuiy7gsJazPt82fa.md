---
schema: wang-person/v1
id: p_4HaqF8Uuiy7gsJazPt82fa
status: active
merged_into: null
display_name: 王希曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G122Ps8ndwiLv2NnXrLsBx
        subject_person_id: p_4HaqF8Uuiy7gsJazPt82fa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3G1pc1zC5b9hsgERM2vzU4
          claim_id: c_G122Ps8ndwiLv2NnXrLsBx
          source_id: s_kEdFsfZFxwoEsJA3np6qH6
          stance: supports
          locator: CBDB:342984
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342984）
          source: &a1
            id: s_kEdFsfZFxwoEsJA3np6qH6
            source_type: api_record
            title: 中国历代人物传记资料库：王希曾（CBDB 342984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342984&o=json
            external_identifier: CBDB:342984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.150Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BY7QQp3t9YSdKKuHaG4Akf
        subject_person_id: p_4HaqF8Uuiy7gsJazPt82fa
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
        - id: cs_Ar7o8iUqCBtiT9FX8AssB6
          claim_id: c_BY7QQp3t9YSdKKuHaG4Akf
          source_id: s_kEdFsfZFxwoEsJA3np6qH6
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

# 王希曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希曾 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希曾（CBDB 342984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342984&o=json)
