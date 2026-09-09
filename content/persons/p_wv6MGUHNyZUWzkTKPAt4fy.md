---
schema: wang-person/v1
id: p_wv6MGUHNyZUWzkTKPAt4fy
status: active
merged_into: null
display_name: 王克中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XjuYL7brG5XQiBWF32yPNr
        subject_person_id: p_wv6MGUHNyZUWzkTKPAt4fy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qYPXV21Se8DsBTVpnrwSBq
          claim_id: c_XjuYL7brG5XQiBWF32yPNr
          source_id: s_HECGaGteAnRqVSSRSWzw3v
          stance: supports
          locator: CBDB:237173
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237173）
          source: &a1
            id: s_HECGaGteAnRqVSSRSWzw3v
            source_type: api_record
            title: 中国历代人物传记资料库：王克中（CBDB 237173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237173&o=json
            external_identifier: CBDB:237173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.821Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U4Bh3RJE7xbCBQXHFE3T2A
        subject_person_id: p_wv6MGUHNyZUWzkTKPAt4fy
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
        - id: cs_GvNCAQhFF9hxjb5MEXgjNn
          claim_id: c_U4Bh3RJE7xbCBQXHFE3T2A
          source_id: s_HECGaGteAnRqVSSRSWzw3v
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

# 王克中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克中 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克中（CBDB 237173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237173&o=json)
