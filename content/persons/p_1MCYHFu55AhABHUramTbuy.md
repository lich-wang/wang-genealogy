---
schema: wang-person/v1
id: p_1MCYHFu55AhABHUramTbuy
status: active
merged_into: null
display_name: 王彰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JdV5KY88MH4RvDys2S5iD9
        subject_person_id: p_1MCYHFu55AhABHUramTbuy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XAq8kDF57Lcx9WSJMgHgt4
          claim_id: c_JdV5KY88MH4RvDys2S5iD9
          source_id: s_NMMEgBS5WCbpnRYCSxVuFo
          stance: supports
          locator: CBDB:100903
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100903）
          source: &a1
            id: s_NMMEgBS5WCbpnRYCSxVuFo
            source_type: api_record
            title: 中国历代人物传记资料库：王彰（CBDB 100903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100903&o=json
            external_identifier: CBDB:100903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.558Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NPEUS9BQAwsXrhcNd4WfoJ
        subject_person_id: p_1MCYHFu55AhABHUramTbuy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GaQQfUnKzK4xMBs5F7GScd
          claim_id: c_NPEUS9BQAwsXrhcNd4WfoJ
          source_id: s_NMMEgBS5WCbpnRYCSxVuFo
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

# 王彰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彰 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彰（CBDB 100903）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100903&o=json)
