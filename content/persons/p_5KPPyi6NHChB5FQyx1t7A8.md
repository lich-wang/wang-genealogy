---
schema: wang-person/v1
id: p_5KPPyi6NHChB5FQyx1t7A8
status: active
merged_into: null
display_name: 王亨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4AHbMqJ9KzbPpiGCc8dUua
        subject_person_id: p_5KPPyi6NHChB5FQyx1t7A8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7PkB5vWM79xC7ahGo69kiM
          claim_id: c_4AHbMqJ9KzbPpiGCc8dUua
          source_id: s_WTz9tvT3L4xTZMzmgu5Zgk
          stance: supports
          locator: CBDB:483129
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（483129）
          source: &a1
            id: s_WTz9tvT3L4xTZMzmgu5Zgk
            source_type: api_record
            title: 中国历代人物传记资料库：王亨（CBDB 483129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483129&o=json
            external_identifier: CBDB:483129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.775Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X6LNsNgqLiZSPjfpdwKLVb
        subject_person_id: p_5KPPyi6NHChB5FQyx1t7A8
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
        - id: cs_SAB8p967Dtn2qNCuZSjGJi
          claim_id: c_X6LNsNgqLiZSPjfpdwKLVb
          source_id: s_WTz9tvT3L4xTZMzmgu5Zgk
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

# 王亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亨 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王亨（CBDB 483129）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483129&o=json)
