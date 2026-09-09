---
schema: wang-person/v1
id: p_idFGhxp89gx2A42LcmhSeP
status: active
merged_into: null
display_name: 王宸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BfaHbag3G5zQrorDtNoW7F
        subject_person_id: p_idFGhxp89gx2A42LcmhSeP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_31iGo8jRV5gYyTKgcqn7sZ
          claim_id: c_BfaHbag3G5zQrorDtNoW7F
          source_id: s_P5B3KN71nPb7BUM6iCG7NQ
          stance: supports
          locator: CBDB:278870
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（278870）
          source: &a1
            id: s_P5B3KN71nPb7BUM6iCG7NQ
            source_type: api_record
            title: 中国历代人物传记资料库：王宸（CBDB 278870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278870&o=json
            external_identifier: CBDB:278870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.974Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hNAqq66oLVRzM3LJxz2CJE
        subject_person_id: p_idFGhxp89gx2A42LcmhSeP
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
        - id: cs_K6keurNKsFSAPgqECeLX6s
          claim_id: c_hNAqq66oLVRzM3LJxz2CJE
          source_id: s_P5B3KN71nPb7BUM6iCG7NQ
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

# 王宸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宸 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宸（CBDB 278870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278870&o=json)
