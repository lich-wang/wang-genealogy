---
schema: wang-person/v1
id: p_fDGhxh43LJhS9gJPp6M4XH
status: active
merged_into: null
display_name: 王柄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cUPvQP2Ds7qTm3NoFo7skw
        subject_person_id: p_fDGhxh43LJhS9gJPp6M4XH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PkSWaETZTSDewXCS4z5g6v
          claim_id: c_cUPvQP2Ds7qTm3NoFo7skw
          source_id: s_1sDPfGjaCT62UpncGGzxQ6
          stance: supports
          locator: CBDB:97930
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97930）
          source: &a1
            id: s_1sDPfGjaCT62UpncGGzxQ6
            source_type: api_record
            title: 中国历代人物传记资料库：王柄（CBDB 97930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97930&o=json
            external_identifier: CBDB:97930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.239Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ctBGK39S9Ek9qmE3MCgmzz
        subject_person_id: p_fDGhxh43LJhS9gJPp6M4XH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柄，宋人物。曾任承議郎。（中国历代人物传记资料库 CBDB 97930）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9RC-fDYRArsk4Lj2FFGoI1
          claim_id: c_ctBGK39S9Ek9qmE3MCgmzz
          source_id: s_1sDPfGjaCT62UpncGGzxQ6
          stance: supports
          locator: CBDB:97930
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

# 王柄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王柄 | accepted |
| bio.summary | 王柄，宋人物。曾任承議郎。（中国历代人物传记资料库 CBDB 97930） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王柄（CBDB 97930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97930&o=json)
