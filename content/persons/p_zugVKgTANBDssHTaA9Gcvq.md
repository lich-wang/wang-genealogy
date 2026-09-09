---
schema: wang-person/v1
id: p_zugVKgTANBDssHTaA9Gcvq
status: active
merged_into: null
display_name: 王式
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ajE1ELmYFBid1jVTuZmoev
        subject_person_id: p_zugVKgTANBDssHTaA9Gcvq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hBsF3gh3nwCjV9JWFz2m3u
          claim_id: c_ajE1ELmYFBid1jVTuZmoev
          source_id: s_rJAG1g6PQA7Ft7XW4v2LU2
          stance: supports
          locator: CBDB:38702
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38702）
          source: &a1
            id: s_rJAG1g6PQA7Ft7XW4v2LU2
            source_type: api_record
            title: 中国历代人物传记资料库：王式（CBDB 38702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38702&o=json
            external_identifier: CBDB:38702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.528Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_SthP938EL1KF9rNWesyCPk
        subject_person_id: p_zugVKgTANBDssHTaA9Gcvq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 974年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yvqZpEwXjx3wtA3A2Mw7aP
          claim_id: c_SthP938EL1KF9rNWesyCPk
          source_id: s_rJAG1g6PQA7Ft7XW4v2LU2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Vbp4oBbAjYFq53s9gaYAPD
        subject_person_id: p_zugVKgTANBDssHTaA9Gcvq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1038年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DwapxiqfmRHoFk6VJ8Q2km
          claim_id: c_Vbp4oBbAjYFq53s9gaYAPD
          source_id: s_rJAG1g6PQA7Ft7XW4v2LU2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FTBE8eQU4vtg7PPu1bUcLs
        subject_person_id: p_zugVKgTANBDssHTaA9Gcvq
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
        - id: cs_kK8BN4ZAjHen8iejE3EBAz
          claim_id: c_FTBE8eQU4vtg7PPu1bUcLs
          source_id: s_rJAG1g6PQA7Ft7XW4v2LU2
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

# 王式

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王式 | accepted |
| birth.date | 974年 | accepted |
| death.date | 1038年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王式（CBDB 38702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38702&o=json)
