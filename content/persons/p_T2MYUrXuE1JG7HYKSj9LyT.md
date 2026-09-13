---
schema: wang-person/v1
id: p_T2MYUrXuE1JG7HYKSj9LyT
status: active
merged_into: null
display_name: 王師醇
cbdb_id: 10687
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jWY7rmRgrQUrG2tHL3wKD3
        subject_person_id: p_T2MYUrXuE1JG7HYKSj9LyT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師醇，史料所见人物。本项目依据《中国历代人物传记资料库：王師醇（CBDB 10687）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_4Lunf8QKHDSW23SAvJSFiD
          claim_id: c_jWY7rmRgrQUrG2tHL3wKD3
          source_id: s_bqJHUwHAFtBxo1PSQXyNUz
          stance: supports
          locator: CBDB:10687
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_bqJHUwHAFtBxo1PSQXyNUz
            source_type: api_record
            title: 中国历代人物传记资料库：王師醇（CBDB 10687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10687&o=json
            external_identifier: CBDB:10687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jyuyN59eb8aQW5aRBJ3h15
        subject_person_id: p_T2MYUrXuE1JG7HYKSj9LyT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師醇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_h4guJjo8kaEjgrrxgikyvN
          claim_id: c_jyuyN59eb8aQW5aRBJ3h15
          source_id: s_bqJHUwHAFtBxo1PSQXyNUz
          stance: supports
          locator: CBDB:10687
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1XX_OF2Y6RuoIMLJF8FKjv
        subject_person_id: p_35wd94gwG3pzokf4a6CedM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T2MYUrXuE1JG7HYKSj9LyT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zkY8jsZOu49mcMLu8-swLz
          claim_id: c_1XX_OF2Y6RuoIMLJF8FKjv
          source_id: s_jnU1wrcswMwACQgeP5fatf
          stance: supports
          locator: CBDB 双向互证（子 王師醇 ⇄ 父 王登）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_jnU1wrcswMwACQgeP5fatf
            source_type: api_record
            title: 中国历代人物传记资料库：王登（CBDB 10686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10686&o=json
            external_identifier: CBDB:10686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.540Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_35wd94gwG3pzokf4a6CedM
        status: active
        display_name: 王登
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王師醇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王師醇，史料所见人物。本项目依据《中国历代人物传记资料库：王師醇（CBDB 10687）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王師醇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_35wd94gwG3pzokf4a6CedM | 王登 | accepted |

## 外部来源

- [中国历代人物传记资料库：王登（CBDB 10686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10686&o=json)
- [中国历代人物传记资料库：王師醇（CBDB 10687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10687&o=json)
