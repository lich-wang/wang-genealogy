---
schema: wang-person/v1
id: p_27BPorQNXnn8j87VAb5VEU
status: active
merged_into: null
display_name: 王曰杏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yKKR5h8fztFFeGyt6U6jHW
        subject_person_id: p_27BPorQNXnn8j87VAb5VEU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰杏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AUkx4u7Y7HWVZYSAHfJ734
          claim_id: c_yKKR5h8fztFFeGyt6U6jHW
          source_id: s_FyQU7CH5VwBEKg57XNeccZ
          stance: supports
          locator: CBDB:638528
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638528）
          source: &a1
            id: s_FyQU7CH5VwBEKg57XNeccZ
            source_type: api_record
            title: 中国历代人物传记资料库：王曰杏（CBDB 638528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638528&o=json
            external_identifier: CBDB:638528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.662Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M3QQapwuEAz529Nrh2hWFG
        subject_person_id: p_27BPorQNXnn8j87VAb5VEU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰杏，清人物。籍贯無錫，曾任戶部主事。（中国历代人物传记资料库 CBDB 638528）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lngQOm6jBU_L2YcG1DK6WP
          claim_id: c_M3QQapwuEAz529Nrh2hWFG
          source_id: s_FyQU7CH5VwBEKg57XNeccZ
          stance: supports
          locator: CBDB:638528
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王曰杏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曰杏 | accepted |
| bio.summary | 王曰杏，清人物。籍贯無錫，曾任戶部主事。（中国历代人物传记资料库 CBDB 638528） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王曰杏（CBDB 638528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638528&o=json)
