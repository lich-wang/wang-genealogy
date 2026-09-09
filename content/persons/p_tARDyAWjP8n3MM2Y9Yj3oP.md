---
schema: wang-person/v1
id: p_tARDyAWjP8n3MM2Y9Yj3oP
status: active
merged_into: null
display_name: 王鏐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iLNujAQnUFgo7vGGG5tdL8
        subject_person_id: p_tARDyAWjP8n3MM2Y9Yj3oP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9Cy6FMjoPM1yG9tNr5Wwhy
          claim_id: c_iLNujAQnUFgo7vGGG5tdL8
          source_id: s_6HV2oh1KAHEMQaYPRtNu46
          stance: supports
          locator: CBDB:543641
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（543641）
          source: &a1
            id: s_6HV2oh1KAHEMQaYPRtNu46
            source_type: api_record
            title: 中国历代人物传记资料库：王鏐（CBDB 543641）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543641&o=json
            external_identifier: CBDB:543641
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.483Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5ua3H43zYgy4VPR7n13Yby
        subject_person_id: p_tARDyAWjP8n3MM2Y9Yj3oP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cq1SreRaPrRyUjQifW42B1
          claim_id: c_5ua3H43zYgy4VPR7n13Yby
          source_id: s_6HV2oh1KAHEMQaYPRtNu46
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

# 王鏐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏐 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鏐（CBDB 543641）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543641&o=json)
