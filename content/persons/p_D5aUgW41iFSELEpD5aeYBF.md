---
schema: wang-person/v1
id: p_D5aUgW41iFSELEpD5aeYBF
status: active
merged_into: null
display_name: 王松
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hqDmoGHFPwNtkwxpouNJe3
        subject_person_id: p_D5aUgW41iFSELEpD5aeYBF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yAyBXiD1sBH2qcYh7DUA7r
          claim_id: c_hqDmoGHFPwNtkwxpouNJe3
          source_id: s_dzuSWy337YD48yHbbTiwsv
          stance: supports
          locator: CBDB:236474
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236474）
          source: &a1
            id: s_dzuSWy337YD48yHbbTiwsv
            source_type: api_record
            title: 中国历代人物传记资料库：王松（CBDB 236474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236474&o=json
            external_identifier: CBDB:236474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.782Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1F17F73B2w7fWP1TPL9Wgu
        subject_person_id: p_D5aUgW41iFSELEpD5aeYBF
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
        - id: cs_GM18fhYtK5mADHqHz5PPZX
          claim_id: c_1F17F73B2w7fWP1TPL9Wgu
          source_id: s_dzuSWy337YD48yHbbTiwsv
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

# 王松

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王松 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王松（CBDB 236474）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236474&o=json)
