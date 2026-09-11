---
schema: wang-person/v1
id: p_bBAHTQCPs83hxsFYz17EfP
status: active
merged_into: null
display_name: 王湘若
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EWoyE87RctDMLoAhHuB12u
        subject_person_id: p_bBAHTQCPs83hxsFYz17EfP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湘若
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QqEvRVfhfcqS1GSQQdW6vg
          claim_id: c_EWoyE87RctDMLoAhHuB12u
          source_id: s_cFxuqYQP6Z7bgeXhweq2dn
          stance: supports
          locator: CBDB:456191
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（456191）
          source: &a1
            id: s_cFxuqYQP6Z7bgeXhweq2dn
            source_type: api_record
            title: 中国历代人物传记资料库：王湘若（CBDB 456191）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456191&o=json
            external_identifier: CBDB:456191
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.568Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LHmGe5jwNn8ZHBxvh82BW7
        subject_person_id: p_bBAHTQCPs83hxsFYz17EfP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湘若，清人物。曾任同知、州判。（中国历代人物传记资料库 CBDB 456191）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GmpbZOxO_52oblKnpnOgqI
          claim_id: c_LHmGe5jwNn8ZHBxvh82BW7
          source_id: s_cFxuqYQP6Z7bgeXhweq2dn
          stance: supports
          locator: CBDB:456191
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

# 王湘若

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王湘若 | accepted |
| bio.summary | 王湘若，清人物。曾任同知、州判。（中国历代人物传记资料库 CBDB 456191） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王湘若（CBDB 456191）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456191&o=json)
