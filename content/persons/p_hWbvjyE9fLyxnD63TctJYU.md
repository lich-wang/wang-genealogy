---
schema: wang-person/v1
id: p_hWbvjyE9fLyxnD63TctJYU
status: active
merged_into: null
display_name: 王大
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uFmSsMsGMrRETFv8fDK8xL
        subject_person_id: p_hWbvjyE9fLyxnD63TctJYU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EKfEd68puh7DnPsGVACDaa
          claim_id: c_uFmSsMsGMrRETFv8fDK8xL
          source_id: s_gxqEuJr3FmnDZ5vYFdZJui
          stance: supports
          locator: CBDB:481864
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（481864）
          source: &a1
            id: s_gxqEuJr3FmnDZ5vYFdZJui
            source_type: api_record
            title: 中国历代人物传记资料库：王大（CBDB 481864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=481864&o=json
            external_identifier: CBDB:481864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.705Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S3eg3PxCkN9tKvEaBiXS6V
        subject_person_id: p_hWbvjyE9fLyxnD63TctJYU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大，明人物。曾任正千戶。（中国历代人物传记资料库 CBDB 481864）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YdZH65egFzIy526xCfKTwV
          claim_id: c_S3eg3PxCkN9tKvEaBiXS6V
          source_id: s_gxqEuJr3FmnDZ5vYFdZJui
          stance: supports
          locator: CBDB:481864
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

# 王大

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大 | accepted |
| bio.summary | 王大，明人物。曾任正千戶。（中国历代人物传记资料库 CBDB 481864） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大（CBDB 481864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=481864&o=json)
