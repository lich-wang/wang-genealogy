---
schema: wang-person/v1
id: p_iSxLyB45PSS63juDYWmSoG
status: active
merged_into: null
display_name: 王蔚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3kQXaKPxRPcMiba4M2eD65
        subject_person_id: p_iSxLyB45PSS63juDYWmSoG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蔚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xx7U6kLJc6C2z51484jNX3
          claim_id: c_3kQXaKPxRPcMiba4M2eD65
          source_id: s_HoJx8v2MiZzMB1WNfsK9zT
          stance: supports
          locator: CBDB:192827
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192827）
          source: &a1
            id: s_HoJx8v2MiZzMB1WNfsK9zT
            source_type: api_record
            title: 中国历代人物传记资料库：王蔚（CBDB 192827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192827&o=json
            external_identifier: CBDB:192827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.415Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Ux9XpoKmZDj8D3DtMgQ52H
        subject_person_id: p_iSxLyB45PSS63juDYWmSoG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 885年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N99bK1Bqst5DrSoXQwj2Ve
          claim_id: c_Ux9XpoKmZDj8D3DtMgQ52H
          source_id: s_HoJx8v2MiZzMB1WNfsK9zT
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
        id: c_FdrLnchMCxBuEqUDTWrphM
        subject_person_id: p_iSxLyB45PSS63juDYWmSoG
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
        - id: cs_QV1gjqUB8fKFjq2MkRhCVm
          claim_id: c_FdrLnchMCxBuEqUDTWrphM
          source_id: s_HoJx8v2MiZzMB1WNfsK9zT
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

# 王蔚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蔚 | accepted |
| death.date | 885年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蔚（CBDB 192827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192827&o=json)
