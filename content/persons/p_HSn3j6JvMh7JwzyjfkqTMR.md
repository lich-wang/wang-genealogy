---
schema: wang-person/v1
id: p_HSn3j6JvMh7JwzyjfkqTMR
status: active
merged_into: null
display_name: 王獻圖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4yBPQfkfwbRjcut2dDB9k8
        subject_person_id: p_HSn3j6JvMh7JwzyjfkqTMR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻圖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qRvTyX7BKFtDEvniuC9YGk
          claim_id: c_4yBPQfkfwbRjcut2dDB9k8
          source_id: s_tJRhNcFPjq3T82ddFcRAKx
          stance: supports
          locator: CBDB:415094
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（415094）
          source: &a1
            id: s_tJRhNcFPjq3T82ddFcRAKx
            source_type: api_record
            title: 中国历代人物传记资料库：王獻圖（CBDB 415094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415094&o=json
            external_identifier: CBDB:415094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.988Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zUSvr8SodscbhXbGDsVMQF
        subject_person_id: p_HSn3j6JvMh7JwzyjfkqTMR
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
        - id: cs_nUVJUFjG5GPCUU6gUjChFN
          claim_id: c_zUSvr8SodscbhXbGDsVMQF
          source_id: s_tJRhNcFPjq3T82ddFcRAKx
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

# 王獻圖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王獻圖 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王獻圖（CBDB 415094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415094&o=json)
