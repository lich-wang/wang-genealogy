---
schema: wang-person/v1
id: p_FXGy51BqjTDmjpArhrp4G2
status: active
merged_into: null
display_name: 王鎰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3sAg2m6FVq2puT4Hx282aW
        subject_person_id: p_FXGy51BqjTDmjpArhrp4G2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_grwT3e2kX8bFsfVSttGoQo
          claim_id: c_3sAg2m6FVq2puT4Hx282aW
          source_id: s_EGqFNmRPHWVPPTLHvHr1j5
          stance: supports
          locator: CBDB:186351
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186351）
          source: &a1
            id: s_EGqFNmRPHWVPPTLHvHr1j5
            source_type: api_record
            title: 中国历代人物传记资料库：王鎰（CBDB 186351）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186351&o=json
            external_identifier: CBDB:186351
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.271Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_H1DCKsQLAgtmtc9FhUcExM
        subject_person_id: p_FXGy51BqjTDmjpArhrp4G2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 852年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EZf92Ny6dTw62ofDXL4h9C
          claim_id: c_H1DCKsQLAgtmtc9FhUcExM
          source_id: s_EGqFNmRPHWVPPTLHvHr1j5
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
        id: c_Dr2wBXbwbR46UfvtEtNUBn
        subject_person_id: p_FXGy51BqjTDmjpArhrp4G2
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
        - id: cs_oga9mrU2mBeVB87EGb6dyr
          claim_id: c_Dr2wBXbwbR46UfvtEtNUBn
          source_id: s_EGqFNmRPHWVPPTLHvHr1j5
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

# 王鎰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎰 | accepted |
| death.date | 852年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎰（CBDB 186351）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186351&o=json)
