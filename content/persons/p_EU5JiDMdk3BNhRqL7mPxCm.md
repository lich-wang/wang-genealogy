---
schema: wang-person/v1
id: p_EU5JiDMdk3BNhRqL7mPxCm
status: active
merged_into: null
display_name: 王銳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B7gsW5T2kWbJt19PDMFzHr
        subject_person_id: p_EU5JiDMdk3BNhRqL7mPxCm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nYGYi9CjbyQPXsE6s8u3Xq
          claim_id: c_B7gsW5T2kWbJt19PDMFzHr
          source_id: s_8rghfnEdEJXq2KbCN3GV34
          stance: supports
          locator: CBDB:501439
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（501439）
          source: &a1
            id: s_8rghfnEdEJXq2KbCN3GV34
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 501439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501439&o=json
            external_identifier: CBDB:501439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C4PTHDkitLZBYGWLsApquS
        subject_person_id: p_EU5JiDMdk3BNhRqL7mPxCm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳，清人物。入仕武舉進士，曾任軍守備。（中国历代人物传记资料库 CBDB 501439）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F0aXuaGDbXaZsPMhTnOjFD
          claim_id: c_C4PTHDkitLZBYGWLsApquS
          source_id: s_8rghfnEdEJXq2KbCN3GV34
          stance: supports
          locator: CBDB:501439
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

# 王銳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銳 | accepted |
| bio.summary | 王銳，清人物。入仕武舉進士，曾任軍守備。（中国历代人物传记资料库 CBDB 501439） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銳（CBDB 501439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501439&o=json)
