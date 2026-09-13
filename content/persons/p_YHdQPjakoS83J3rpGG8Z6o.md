---
schema: wang-person/v1
id: p_YHdQPjakoS83J3rpGG8Z6o
status: active
merged_into: null
display_name: 王武緯
cbdb_id: 60651
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FM598Jn2AxLdG98XBwn3v3
        subject_person_id: p_YHdQPjakoS83J3rpGG8Z6o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王武緯，明人物。曾任副總兵。（中国历代人物传记资料库 CBDB 60651）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_I23KN6cqAwvAGUwAfJt8RX
          claim_id: c_FM598Jn2AxLdG98XBwn3v3
          source_id: s_w7NPrnR8Ccwzy7QwKjte5C
          stance: supports
          locator: CBDB:60651
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_w7NPrnR8Ccwzy7QwKjte5C
            source_type: api_record
            title: 中国历代人物传记资料库：王武緯（CBDB 60651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60651&o=json
            external_identifier: CBDB:60651
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rB9Go4CorKJvFzH2oiJrpG
        subject_person_id: p_YHdQPjakoS83J3rpGG8Z6o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王武緯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZsbZG9QyoF1d5XNUD9woR6
          claim_id: c_rB9Go4CorKJvFzH2oiJrpG
          source_id: s_w7NPrnR8Ccwzy7QwKjte5C
          stance: supports
          locator: CBDB:60651
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1401-1500）｜历史性依据：CBDB 朝代 = 明
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

# 王武緯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王武緯，明人物。曾任副總兵。（中国历代人物传记资料库 CBDB 60651） | accepted |
| name.primary | 王武緯 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王武緯（CBDB 60651）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60651&o=json)
