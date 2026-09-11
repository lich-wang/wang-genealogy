---
schema: wang-person/v1
id: p_GUBF5xYpVcU5txwspcxGii
status: active
merged_into: null
display_name: 王練
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cG3nAgWoNZCwPbd3hHmmJX
        subject_person_id: p_GUBF5xYpVcU5txwspcxGii
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王練
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zdcTzVVe8LcS55epAmE25m
          claim_id: c_cG3nAgWoNZCwPbd3hHmmJX
          source_id: s_4xpa4VFSZKbH3rYq13dwhk
          stance: supports
          locator: CBDB:327962
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327962）
          source: &a1
            id: s_4xpa4VFSZKbH3rYq13dwhk
            source_type: api_record
            title: 中国历代人物传记资料库：王練（CBDB 327962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327962&o=json
            external_identifier: CBDB:327962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.279Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_amxgPXTTDFrn3mU431otvN
        subject_person_id: p_GUBF5xYpVcU5txwspcxGii
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王練，明人物。嘉靖四十一年進士，籍贯文安。（中国历代人物传记资料库 CBDB 327962）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-oAcx7lh8aMVct--oRXmoZ
          claim_id: c_amxgPXTTDFrn3mU431otvN
          source_id: s_4xpa4VFSZKbH3rYq13dwhk
          stance: supports
          locator: CBDB:327962
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

# 王練

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王練 | accepted |
| bio.summary | 王練，明人物。嘉靖四十一年進士，籍贯文安。（中国历代人物传记资料库 CBDB 327962） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王練（CBDB 327962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327962&o=json)
