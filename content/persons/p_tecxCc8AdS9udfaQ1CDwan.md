---
schema: wang-person/v1
id: p_tecxCc8AdS9udfaQ1CDwan
status: active
merged_into: null
display_name: 王晙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QoU1wgG5EHzLBDbVe146vj
        subject_person_id: p_tecxCc8AdS9udfaQ1CDwan
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wj5h31V7hpz4SLM4rqmyRP
          claim_id: c_QoU1wgG5EHzLBDbVe146vj
          source_id: s_XLMpjZMSy3DN4Fe2vw9XWJ
          stance: supports
          locator: CBDB:150808
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（150808）
          source: &a1
            id: s_XLMpjZMSy3DN4Fe2vw9XWJ
            source_type: api_record
            title: 中国历代人物传记资料库：王晙（CBDB 150808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150808&o=json
            external_identifier: CBDB:150808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.822Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_maGF5VCQa8MNYHQWMcsdgp
        subject_person_id: p_tecxCc8AdS9udfaQ1CDwan
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qsi7FMzRivHoynKz1LRudS
          claim_id: c_maGF5VCQa8MNYHQWMcsdgp
          source_id: s_XLMpjZMSy3DN4Fe2vw9XWJ
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

# 王晙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晙 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晙（CBDB 150808）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150808&o=json)
