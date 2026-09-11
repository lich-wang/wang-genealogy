---
schema: wang-person/v1
id: p_i8P5XYor9pTLuVz9iyU6Zd
status: active
merged_into: null
display_name: 王璽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AJURzLsDBRTLGmdYib4qx6
        subject_person_id: p_i8P5XYor9pTLuVz9iyU6Zd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Rw2euyTre65H5YuJF5stp1
          claim_id: c_AJURzLsDBRTLGmdYib4qx6
          source_id: s_WmrcX8FDZcE1kPZXVAM6hh
          stance: supports
          locator: CBDB:478142
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（478142）
          source: &a1
            id: s_WmrcX8FDZcE1kPZXVAM6hh
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 478142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478142&o=json
            external_identifier: CBDB:478142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.555Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5LKsvqJugqC17N5xeZS18X
        subject_person_id: p_i8P5XYor9pTLuVz9iyU6Zd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽，明人物。入仕監生，曾任縣丞、知縣。（中国历代人物传记资料库 CBDB 478142）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2s9SnHpzf_5m084F7apvjt
          claim_id: c_5LKsvqJugqC17N5xeZS18X
          source_id: s_WmrcX8FDZcE1kPZXVAM6hh
          stance: supports
          locator: CBDB:478142
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

# 王璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璽 | accepted |
| bio.summary | 王璽，明人物。入仕監生，曾任縣丞、知縣。（中国历代人物传记资料库 CBDB 478142） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璽（CBDB 478142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478142&o=json)
