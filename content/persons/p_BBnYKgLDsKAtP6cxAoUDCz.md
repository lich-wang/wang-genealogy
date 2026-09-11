---
schema: wang-person/v1
id: p_BBnYKgLDsKAtP6cxAoUDCz
status: active
merged_into: null
display_name: 王永烈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r98jED3DXsB1HNPnFkie55
        subject_person_id: p_BBnYKgLDsKAtP6cxAoUDCz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kXhQHdzeL1KCa7hbC3727F
          claim_id: c_r98jED3DXsB1HNPnFkie55
          source_id: s_J9SLGQxG7oF8aDDrwC3WYz
          stance: supports
          locator: CBDB:456625
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（456625）
          source: &a1
            id: s_J9SLGQxG7oF8aDDrwC3WYz
            source_type: api_record
            title: 中国历代人物传记资料库：王永烈（CBDB 456625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456625&o=json
            external_identifier: CBDB:456625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.585Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T9LMeVeCzRhJu8b7czszkm
        subject_person_id: p_BBnYKgLDsKAtP6cxAoUDCz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永烈，清人物。入仕監生，曾任知州。（中国历代人物传记资料库 CBDB 456625）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7hkJErzYIm6dSpaYl4jvIh
          claim_id: c_T9LMeVeCzRhJu8b7czszkm
          source_id: s_J9SLGQxG7oF8aDDrwC3WYz
          stance: supports
          locator: CBDB:456625
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

# 王永烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永烈 | accepted |
| bio.summary | 王永烈，清人物。入仕監生，曾任知州。（中国历代人物传记资料库 CBDB 456625） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永烈（CBDB 456625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456625&o=json)
