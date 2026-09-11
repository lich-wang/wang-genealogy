---
schema: wang-person/v1
id: p_GczyBYQVW5M66zqphLv3dQ
status: active
merged_into: null
display_name: 王章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_czNuHMGoFQNbGLFvKmV4ED
        subject_person_id: p_GczyBYQVW5M66zqphLv3dQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g6gzFBifAKceqrHEvAKiFA
          claim_id: c_czNuHMGoFQNbGLFvKmV4ED
          source_id: s_ECP5xMWovekM3QuwBG7yBW
          stance: supports
          locator: CBDB:690150
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690150）
          source: &a1
            id: s_ECP5xMWovekM3QuwBG7yBW
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 690150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690150&o=json
            external_identifier: CBDB:690150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.582Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k2DepuFC6bDncF5DPuBpam
        subject_person_id: p_GczyBYQVW5M66zqphLv3dQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章，宋人物。身份为業進士。（中国历代人物传记资料库 CBDB 690150）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gSmoGCbdNWLxEnYR4-E-vO
          claim_id: c_k2DepuFC6bDncF5DPuBpam
          source_id: s_ECP5xMWovekM3QuwBG7yBW
          stance: supports
          locator: CBDB:690150
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

# 王章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王章 | accepted |
| bio.summary | 王章，宋人物。身份为業進士。（中国历代人物传记资料库 CBDB 690150） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王章（CBDB 690150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690150&o=json)
