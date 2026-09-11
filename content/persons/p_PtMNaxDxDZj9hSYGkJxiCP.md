---
schema: wang-person/v1
id: p_PtMNaxDxDZj9hSYGkJxiCP
status: active
merged_into: null
display_name: 王夔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PTDugxFkQcMoHDJY8BNSCq
        subject_person_id: p_PtMNaxDxDZj9hSYGkJxiCP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uQXcGW9fLokg1phWSUx9rL
          claim_id: c_PTDugxFkQcMoHDJY8BNSCq
          source_id: s_y58UR1wCsw8kVqAotcC2QY
          stance: supports
          locator: CBDB:460023
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（460023）
          source: &a1
            id: s_y58UR1wCsw8kVqAotcC2QY
            source_type: api_record
            title: 中国历代人物传记资料库：王夔（CBDB 460023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460023&o=json
            external_identifier: CBDB:460023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.745Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Sp87Q4egbBUPe4J5NHRYNx
        subject_person_id: p_PtMNaxDxDZj9hSYGkJxiCP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夔，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 460023）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TurFL0r_jqm0-01iiOSQZc
          claim_id: c_Sp87Q4egbBUPe4J5NHRYNx
          source_id: s_y58UR1wCsw8kVqAotcC2QY
          stance: supports
          locator: CBDB:460023
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

# 王夔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夔 | accepted |
| bio.summary | 王夔，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 460023） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夔（CBDB 460023）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460023&o=json)
