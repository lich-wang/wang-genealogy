---
schema: wang-person/v1
id: p_TYG64pVwN87PZZRyTci79Y
status: active
merged_into: null
display_name: 王耀斗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U9j4Cp3x454pTdmbJeyc52
        subject_person_id: p_TYG64pVwN87PZZRyTci79Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耀斗
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Vxm2qutKUxoug9YxRzZfqX
          claim_id: c_U9j4Cp3x454pTdmbJeyc52
          source_id: s_ZA1e5hRrsYxfMiqwPSK7GW
          stance: supports
          locator: CBDB:639917
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639917）
          source: &a1
            id: s_ZA1e5hRrsYxfMiqwPSK7GW
            source_type: api_record
            title: 中国历代人物传记资料库：王耀斗（CBDB 639917）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639917&o=json
            external_identifier: CBDB:639917
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.083Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A9wybTqHKkana2PADwQ34A
        subject_person_id: p_TYG64pVwN87PZZRyTci79Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耀斗，清人物。籍贯束鹿，曾任藍翎侍衛。（中国历代人物传记资料库 CBDB 639917）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_43LRsqzNDjcW4KT5mmRkrA
          claim_id: c_A9wybTqHKkana2PADwQ34A
          source_id: s_ZA1e5hRrsYxfMiqwPSK7GW
          stance: supports
          locator: CBDB:639917
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

# 王耀斗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王耀斗 | accepted |
| bio.summary | 王耀斗，清人物。籍贯束鹿，曾任藍翎侍衛。（中国历代人物传记资料库 CBDB 639917） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王耀斗（CBDB 639917）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639917&o=json)
