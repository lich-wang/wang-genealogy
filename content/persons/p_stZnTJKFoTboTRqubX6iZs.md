---
schema: wang-person/v1
id: p_stZnTJKFoTboTRqubX6iZs
status: active
merged_into: null
display_name: 王瓚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_inVVrEQY7m9nwwD6G7cB9K
        subject_person_id: p_stZnTJKFoTboTRqubX6iZs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o1X7EMmHWhrQBfnNXVKUVq
          claim_id: c_inVVrEQY7m9nwwD6G7cB9K
          source_id: s_gJgLKFB8C8MccJ6DtmHGc2
          stance: supports
          locator: CBDB:284076
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284076）
          source: &a1
            id: s_gJgLKFB8C8MccJ6DtmHGc2
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 284076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284076&o=json
            external_identifier: CBDB:284076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.173Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2PhBptf1edo4sAHbyeWTLo
        subject_person_id: p_stZnTJKFoTboTRqubX6iZs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚，明人物。天順元年進士，籍贯襄陽。（中国历代人物传记资料库 CBDB 284076）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2G0ZkRNjOZCmFxxY0SlqUZ
          claim_id: c_2PhBptf1edo4sAHbyeWTLo
          source_id: s_gJgLKFB8C8MccJ6DtmHGc2
          stance: supports
          locator: CBDB:284076
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

# 王瓚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓚 | accepted |
| bio.summary | 王瓚，明人物。天順元年進士，籍贯襄陽。（中国历代人物传记资料库 CBDB 284076） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓚（CBDB 284076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284076&o=json)
