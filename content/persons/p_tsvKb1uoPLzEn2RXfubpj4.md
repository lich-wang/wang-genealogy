---
schema: wang-person/v1
id: p_tsvKb1uoPLzEn2RXfubpj4
status: active
merged_into: null
display_name: 王渙之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KLz9vkx8MANiDFs4o5hceB
        subject_person_id: p_tsvKb1uoPLzEn2RXfubpj4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渙之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2Kmw2RS7GcdofXvhnDGK67
          claim_id: c_KLz9vkx8MANiDFs4o5hceB
          source_id: s_2ZpAmAbUp7STYVeL2PCBGB
          stance: supports
          locator: CBDB:468993
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（468993）
          source: &a1
            id: s_2ZpAmAbUp7STYVeL2PCBGB
            source_type: api_record
            title: 中国历代人物传记资料库：王渙之（CBDB 468993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=468993&o=json
            external_identifier: CBDB:468993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.107Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dj6tGaGRFR5HpiKZzjLygx
        subject_person_id: p_tsvKb1uoPLzEn2RXfubpj4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pczAjUKz2AFkwA7XJhn3Cn
          claim_id: c_dj6tGaGRFR5HpiKZzjLygx
          source_id: s_2ZpAmAbUp7STYVeL2PCBGB
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

# 王渙之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王渙之 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王渙之（CBDB 468993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=468993&o=json)
