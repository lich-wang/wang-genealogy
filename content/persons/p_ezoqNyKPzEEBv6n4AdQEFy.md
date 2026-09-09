---
schema: wang-person/v1
id: p_ezoqNyKPzEEBv6n4AdQEFy
status: active
merged_into: null
display_name: 王安
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ioD12vLNJkgT7rJ6ijaeiW
        subject_person_id: p_ezoqNyKPzEEBv6n4AdQEFy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zDNcY5zbFiPfEx2LN49eZW
          claim_id: c_ioD12vLNJkgT7rJ6ijaeiW
          source_id: s_QScHPF3JNHtZCDfZtP3dha
          stance: supports
          locator: CBDB:138766
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（138766）
          source: &a1
            id: s_QScHPF3JNHtZCDfZtP3dha
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 138766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138766&o=json
            external_identifier: CBDB:138766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.361Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6wRFvm4kvCmBZ3U3SQuMFY
        subject_person_id: p_ezoqNyKPzEEBv6n4AdQEFy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 568年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G8uW53pq73RNafot2JAmXi
          claim_id: c_6wRFvm4kvCmBZ3U3SQuMFY
          source_id: s_QScHPF3JNHtZCDfZtP3dha
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_siVzivLJNudeL1KHpKAqBt
        subject_person_id: p_ezoqNyKPzEEBv6n4AdQEFy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 634年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DJbx8g3CLmn4NsAREdkGx9
          claim_id: c_siVzivLJNudeL1KHpKAqBt
          source_id: s_QScHPF3JNHtZCDfZtP3dha
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
        id: c_KzkESukAfb3FQZH1xhJjJ7
        subject_person_id: p_ezoqNyKPzEEBv6n4AdQEFy
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
        - id: cs_QBoaXq3s3SBfnGn2DLR2g9
          claim_id: c_KzkESukAfb3FQZH1xhJjJ7
          source_id: s_QScHPF3JNHtZCDfZtP3dha
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

# 王安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安 | accepted |
| birth.date | 568年 | accepted |
| death.date | 634年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 138766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138766&o=json)
