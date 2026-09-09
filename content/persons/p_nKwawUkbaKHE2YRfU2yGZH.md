---
schema: wang-person/v1
id: p_nKwawUkbaKHE2YRfU2yGZH
status: active
merged_into: null
display_name: 王岩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6VNmLWtBXo2MkNRg4czLCS
        subject_person_id: p_nKwawUkbaKHE2YRfU2yGZH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岩
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FVhPSFFwJqMc2EZMwiHjWS
          claim_id: c_6VNmLWtBXo2MkNRg4czLCS
          source_id: s_mYCYgLS1jgECbN6rqmz7jr
          stance: supports
          locator: CBDB:97873
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97873）
          source: &a1
            id: s_mYCYgLS1jgECbN6rqmz7jr
            source_type: api_record
            title: 中国历代人物传记资料库：王岩（CBDB 97873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97873&o=json
            external_identifier: CBDB:97873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.217Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wwN16wdK7yH85CGw6L3xRW
        subject_person_id: p_nKwawUkbaKHE2YRfU2yGZH
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
        - id: cs_L5kvSqta1QiqA2zZni7uQh
          claim_id: c_wwN16wdK7yH85CGw6L3xRW
          source_id: s_mYCYgLS1jgECbN6rqmz7jr
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

# 王岩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王岩 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王岩（CBDB 97873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97873&o=json)
