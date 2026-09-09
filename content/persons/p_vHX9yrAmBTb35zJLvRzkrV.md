---
schema: wang-person/v1
id: p_vHX9yrAmBTb35zJLvRzkrV
status: active
merged_into: null
display_name: 王玉書
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a84LoSGR54LxT9VjC85BYZ
        subject_person_id: p_vHX9yrAmBTb35zJLvRzkrV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉書
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7AEQVZWrjyFoWWSQqLFF8e
          claim_id: c_a84LoSGR54LxT9VjC85BYZ
          source_id: s_qPiHfxMqro1YDPpV257piY
          stance: supports
          locator: CBDB:702935
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（702935）
          source: &a1
            id: s_qPiHfxMqro1YDPpV257piY
            source_type: api_record
            title: 中国历代人物传记资料库：王玉書（CBDB 702935）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702935&o=json
            external_identifier: CBDB:702935
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.818Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jUHGhnJ4W45698HszoEQas
        subject_person_id: p_vHX9yrAmBTb35zJLvRzkrV
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
        - id: cs_DZjqB4USzDRmBCs8JeR3uP
          claim_id: c_jUHGhnJ4W45698HszoEQas
          source_id: s_qPiHfxMqro1YDPpV257piY
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

# 王玉書

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉書 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玉書（CBDB 702935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702935&o=json)
