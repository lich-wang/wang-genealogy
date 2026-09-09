---
schema: wang-person/v1
id: p_JpKAwvv1MK7gdEG1QmEGyd
status: active
merged_into: null
display_name: 王湘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ynuLVQzyMJZK7TGPtv8J14
        subject_person_id: p_JpKAwvv1MK7gdEG1QmEGyd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DQz1sDUtYqKULDP3bM5URN
          claim_id: c_ynuLVQzyMJZK7TGPtv8J14
          source_id: s_NermVzVV9QPvKMju5axFM1
          stance: supports
          locator: CBDB:205964
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205964）
          source: &a1
            id: s_NermVzVV9QPvKMju5axFM1
            source_type: api_record
            title: 中国历代人物传记资料库：王湘（CBDB 205964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205964&o=json
            external_identifier: CBDB:205964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.877Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JM7A9T1mrM3z8FThJJBABD
        subject_person_id: p_JpKAwvv1MK7gdEG1QmEGyd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1538年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qM8c3NmYXo2PZneWKjj4w2
          claim_id: c_JM7A9T1mrM3z8FThJJBABD
          source_id: s_NermVzVV9QPvKMju5axFM1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wKjh39e9TzU3Nw1PwE1hKQ
        subject_person_id: p_JpKAwvv1MK7gdEG1QmEGyd
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
        - id: cs_UJTt57wz4NNyNPPXLN3X8G
          claim_id: c_wKjh39e9TzU3Nw1PwE1hKQ
          source_id: s_NermVzVV9QPvKMju5axFM1
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

# 王湘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王湘 | accepted |
| birth.date | 1538年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王湘（CBDB 205964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205964&o=json)
