---
schema: wang-person/v1
id: p_N4a2gCmkB7n5Y2FKeQCxw3
status: active
merged_into: null
display_name: 王知新
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uRGBU9qf7Cy1KnMVMk1USN
        subject_person_id: p_N4a2gCmkB7n5Y2FKeQCxw3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LBDvbEuNDQhzVgB4mJgpGP
          claim_id: c_uRGBU9qf7Cy1KnMVMk1USN
          source_id: s_AHBNpFoFhoXnZQV4fbaAFh
          stance: supports
          locator: CBDB:37646
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37646）
          source: &a1
            id: s_AHBNpFoFhoXnZQV4fbaAFh
            source_type: api_record
            title: 中国历代人物传记资料库：王知新（CBDB 37646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37646&o=json
            external_identifier: CBDB:37646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.218Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wwWHaw4RVSV26ih8dZ7uLJ
        subject_person_id: p_N4a2gCmkB7n5Y2FKeQCxw3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知新，宋人物。曾任刺史、武功郎、副都統制。（中国历代人物传记资料库 CBDB 37646）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xOSdbUkHUI5pKfFlH10oFY
          claim_id: c_wwWHaw4RVSV26ih8dZ7uLJ
          source_id: s_AHBNpFoFhoXnZQV4fbaAFh
          stance: supports
          locator: CBDB:37646
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

# 王知新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王知新 | accepted |
| bio.summary | 王知新，宋人物。曾任刺史、武功郎、副都統制。（中国历代人物传记资料库 CBDB 37646） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王知新（CBDB 37646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37646&o=json)
