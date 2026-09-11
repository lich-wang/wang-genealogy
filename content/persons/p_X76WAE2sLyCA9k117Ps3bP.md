---
schema: wang-person/v1
id: p_X76WAE2sLyCA9k117Ps3bP
status: active
merged_into: null
display_name: 王綱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2ECV6sk4VkfT2f1DFSpSCR
        subject_person_id: p_X76WAE2sLyCA9k117Ps3bP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4tNqEyDyRKFdey7c5CGhXT
          claim_id: c_2ECV6sk4VkfT2f1DFSpSCR
          source_id: s_wBXa5Ddu2xz39aQ61vuGpw
          stance: supports
          locator: CBDB:67771
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67771）
          source: &a1
            id: s_wBXa5Ddu2xz39aQ61vuGpw
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 67771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67771&o=json
            external_identifier: CBDB:67771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P9vZzc8HZydov1YzdqRant
        subject_person_id: p_X76WAE2sLyCA9k117Ps3bP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱，明人物。入仕進士，曾任戶部主事。（中国历代人物传记资料库 CBDB 67771）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yq1oSTmj6Rl_YI4nBSby0K
          claim_id: c_P9vZzc8HZydov1YzdqRant
          source_id: s_wBXa5Ddu2xz39aQ61vuGpw
          stance: supports
          locator: CBDB:67771
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

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| bio.summary | 王綱，明人物。入仕進士，曾任戶部主事。（中国历代人物传记资料库 CBDB 67771） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 67771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67771&o=json)
