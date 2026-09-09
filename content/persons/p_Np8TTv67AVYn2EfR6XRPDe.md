---
schema: wang-person/v1
id: p_Np8TTv67AVYn2EfR6XRPDe
status: active
merged_into: null
display_name: 王允功
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4qCy1dZg1Auf6ZLBp8KSht
        subject_person_id: p_Np8TTv67AVYn2EfR6XRPDe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允功
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WbMUH6tpBpEvjEqW8q13MZ
          claim_id: c_4qCy1dZg1Auf6ZLBp8KSht
          source_id: s_GTHJvxzgWcmou5k1dAxrXQ
          stance: supports
          locator: CBDB:38261
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38261）
          source: &a1
            id: s_GTHJvxzgWcmou5k1dAxrXQ
            source_type: api_record
            title: 中国历代人物传记资料库：王允功（CBDB 38261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38261&o=json
            external_identifier: CBDB:38261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.406Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GL1aqgjhkRB6CGfh1z16Mh
        subject_person_id: p_Np8TTv67AVYn2EfR6XRPDe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1128年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LKSbGDUNUFNp7eyWKhQdZF
          claim_id: c_GL1aqgjhkRB6CGfh1z16Mh
          source_id: s_GTHJvxzgWcmou5k1dAxrXQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LE3YoLV9TrTG8o5nA5SwyR
        subject_person_id: p_Np8TTv67AVYn2EfR6XRPDe
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
        - id: cs_wAPXY3ZTkNBCR1QC1yvKuB
          claim_id: c_LE3YoLV9TrTG8o5nA5SwyR
          source_id: s_GTHJvxzgWcmou5k1dAxrXQ
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

# 王允功

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允功 | accepted |
| death.date | 1128年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王允功（CBDB 38261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38261&o=json)
