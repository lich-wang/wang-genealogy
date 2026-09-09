---
schema: wang-person/v1
id: p_wVWD91i8nHFULhDK68aKM7
status: active
merged_into: null
display_name: 王材
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sa5tJyC9gwziM5nzh4EaHG
        subject_person_id: p_wVWD91i8nHFULhDK68aKM7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王材
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dtMCjEmRm6Ms6m4hyM9i3H
          claim_id: c_sa5tJyC9gwziM5nzh4EaHG
          source_id: s_b8xwN94GvqbDpnKDRZDaVD
          stance: supports
          locator: CBDB:296931
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（296931）
          source: &a1
            id: s_b8xwN94GvqbDpnKDRZDaVD
            source_type: api_record
            title: 中国历代人物传记资料库：王材（CBDB 296931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296931&o=json
            external_identifier: CBDB:296931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.530Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2KSRtWVVsxQu2FsY5o3R7p
        subject_person_id: p_wVWD91i8nHFULhDK68aKM7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v5p1z2Ea8zinpUAVeKHFid
          claim_id: c_2KSRtWVVsxQu2FsY5o3R7p
          source_id: s_b8xwN94GvqbDpnKDRZDaVD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王材

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王材 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王材（CBDB 296931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296931&o=json)
