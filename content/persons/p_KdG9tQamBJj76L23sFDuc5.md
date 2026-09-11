---
schema: wang-person/v1
id: p_KdG9tQamBJj76L23sFDuc5
status: active
merged_into: null
display_name: 王元士
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sgE5qGGpBCKsiT6mH7SBD8
        subject_person_id: p_KdG9tQamBJj76L23sFDuc5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元士
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WfBu1FQd472Dwgs3FMXDDi
          claim_id: c_sgE5qGGpBCKsiT6mH7SBD8
          source_id: s_NocPjPc2KQw7tBKSav12R2
          stance: supports
          locator: CBDB:487396
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（487396）
          source: &a1
            id: s_NocPjPc2KQw7tBKSav12R2
            source_type: api_record
            title: 中国历代人物传记资料库：王元士（CBDB 487396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487396&o=json
            external_identifier: CBDB:487396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LBzp8sQDDbjJbEf2EGFAZK
        subject_person_id: p_KdG9tQamBJj76L23sFDuc5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元士，明人物。曾任知州。（中国历代人物传记资料库 CBDB 487396）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_78uzi2VUseWspBqXnrPC9z
          claim_id: c_LBzp8sQDDbjJbEf2EGFAZK
          source_id: s_NocPjPc2KQw7tBKSav12R2
          stance: supports
          locator: CBDB:487396
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

# 王元士

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元士 | accepted |
| bio.summary | 王元士，明人物。曾任知州。（中国历代人物传记资料库 CBDB 487396） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元士（CBDB 487396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487396&o=json)
