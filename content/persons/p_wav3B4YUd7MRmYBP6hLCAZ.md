---
schema: wang-person/v1
id: p_wav3B4YUd7MRmYBP6hLCAZ
status: active
merged_into: null
display_name: 王明藩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mXcWDAjN2ttT37kDFi9p8G
        subject_person_id: p_wav3B4YUd7MRmYBP6hLCAZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明藩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4FKAm5UAuqtDpYLSQQr9ff
          claim_id: c_mXcWDAjN2ttT37kDFi9p8G
          source_id: s_5vJXHHMbYZRM9YfyJ272gP
          stance: supports
          locator: CBDB:638392
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638392）
          source: &a1
            id: s_5vJXHHMbYZRM9YfyJ272gP
            source_type: api_record
            title: 中国历代人物传记资料库：王明藩（CBDB 638392）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638392&o=json
            external_identifier: CBDB:638392
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.614Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UUaDDMtU1tNS2ttZ351pHn
        subject_person_id: p_wav3B4YUd7MRmYBP6hLCAZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zeiSWFtgGF4bb4tXHvo2M4
          claim_id: c_UUaDDMtU1tNS2ttZ351pHn
          source_id: s_5vJXHHMbYZRM9YfyJ272gP
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

# 王明藩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明藩 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王明藩（CBDB 638392）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638392&o=json)
