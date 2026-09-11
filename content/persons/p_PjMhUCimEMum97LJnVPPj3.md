---
schema: wang-person/v1
id: p_PjMhUCimEMum97LJnVPPj3
status: active
merged_into: null
display_name: 王邦正
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E8VjJtDb74hiGKKmBBfoiP
        subject_person_id: p_PjMhUCimEMum97LJnVPPj3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A9hd6DCRnK7PbeGWxLoM3j
          claim_id: c_E8VjJtDb74hiGKKmBBfoiP
          source_id: s_mCN8N1U3MDo26TdsCX766U
          stance: supports
          locator: CBDB:461637
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（461637）
          source: &a1
            id: s_mCN8N1U3MDo26TdsCX766U
            source_type: api_record
            title: 中国历代人物传记资料库：王邦正（CBDB 461637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=461637&o=json
            external_identifier: CBDB:461637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.818Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LwFWmk9tBBpaCqhuM5Yhh3
        subject_person_id: p_PjMhUCimEMum97LJnVPPj3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦正，明人物。曾任學正。（中国历代人物传记资料库 CBDB 461637）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IPZG_KAe7pYPlD1Boole3P
          claim_id: c_LwFWmk9tBBpaCqhuM5Yhh3
          source_id: s_mCN8N1U3MDo26TdsCX766U
          stance: supports
          locator: CBDB:461637
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

# 王邦正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邦正 | accepted |
| bio.summary | 王邦正，明人物。曾任學正。（中国历代人物传记资料库 CBDB 461637） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王邦正（CBDB 461637）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=461637&o=json)
