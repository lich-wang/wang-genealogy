---
schema: wang-person/v1
id: p_kPCJ2iRV2du6M21NW8Kmm7
status: active
merged_into: null
display_name: 王沼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mqv6vpjMUbLXfTcN2nf3Am
        subject_person_id: p_kPCJ2iRV2du6M21NW8Kmm7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QV6vT1uca5TKHDnBdcR3h2
          claim_id: c_mqv6vpjMUbLXfTcN2nf3Am
          source_id: s_2bU7pfQp1bHfhbjuNJsyMp
          stance: supports
          locator: CBDB:453616
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（453616）
          source: &a1
            id: s_2bU7pfQp1bHfhbjuNJsyMp
            source_type: api_record
            title: 中国历代人物传记资料库：王沼（CBDB 453616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453616&o=json
            external_identifier: CBDB:453616
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.412Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HcwyTZoaMQg5Nm8iKa5zsD
        subject_person_id: p_kPCJ2iRV2du6M21NW8Kmm7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沼，明人物。入仕監生，曾任主簿。（中国历代人物传记资料库 CBDB 453616）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BSFvvjm91yXuoe-Bv79yMc
          claim_id: c_HcwyTZoaMQg5Nm8iKa5zsD
          source_id: s_2bU7pfQp1bHfhbjuNJsyMp
          stance: supports
          locator: CBDB:453616
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

# 王沼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沼 | accepted |
| bio.summary | 王沼，明人物。入仕監生，曾任主簿。（中国历代人物传记资料库 CBDB 453616） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王沼（CBDB 453616）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453616&o=json)
