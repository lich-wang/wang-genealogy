---
schema: wang-person/v1
id: p_56g4UF9YQ8m8jkN9C3sKoP
status: active
merged_into: null
display_name: 王雄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Wv2d2fiGCRdhk6yc43pMKg
        subject_person_id: p_56g4UF9YQ8m8jkN9C3sKoP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WTVorHwzMq6Xxnypy2h4kV
          claim_id: c_Wv2d2fiGCRdhk6yc43pMKg
          source_id: s_Yb6s9yw3EmEBPKsoUETrPT
          stance: supports
          locator: CBDB:486875
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（486875）
          source: &a1
            id: s_Yb6s9yw3EmEBPKsoUETrPT
            source_type: api_record
            title: 中国历代人物传记资料库：王雄（CBDB 486875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486875&o=json
            external_identifier: CBDB:486875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.925Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cta2YgkBD58cdBBR6McRHb
        subject_person_id: p_56g4UF9YQ8m8jkN9C3sKoP
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
        - id: cs_KEFHi4sUUPmy3KVUxhp8Q5
          claim_id: c_cta2YgkBD58cdBBR6McRHb
          source_id: s_Yb6s9yw3EmEBPKsoUETrPT
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

# 王雄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雄 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雄（CBDB 486875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486875&o=json)
