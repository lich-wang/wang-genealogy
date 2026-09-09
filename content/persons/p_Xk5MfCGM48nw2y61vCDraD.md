---
schema: wang-person/v1
id: p_Xk5MfCGM48nw2y61vCDraD
status: active
merged_into: null
display_name: 王鐸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DR3PTy8KsFacSLngSZ7fr5
        subject_person_id: p_Xk5MfCGM48nw2y61vCDraD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PKtbT1SvnKS5Ey9RgWj9wr
          claim_id: c_DR3PTy8KsFacSLngSZ7fr5
          source_id: s_2Qtn2i8gQeEjCgPFtZoKcA
          stance: supports
          locator: CBDB:92066
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92066）
          source: &a1
            id: s_2Qtn2i8gQeEjCgPFtZoKcA
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 92066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92066&o=json
            external_identifier: CBDB:92066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.112Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_RDTBhdztcb7oC8KZALAJgC
        subject_person_id: p_Xk5MfCGM48nw2y61vCDraD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 884年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oeBVpi25AvHp1vJSFX5DFd
          claim_id: c_RDTBhdztcb7oC8KZALAJgC
          source_id: s_2Qtn2i8gQeEjCgPFtZoKcA
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
        id: c_meFdcm6YwM28tarUk7jm4u
        subject_person_id: p_Xk5MfCGM48nw2y61vCDraD
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
        - id: cs_W9YbCJ88KycDFpE9GxhTua
          claim_id: c_meFdcm6YwM28tarUk7jm4u
          source_id: s_2Qtn2i8gQeEjCgPFtZoKcA
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

# 王鐸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐸 | accepted |
| death.date | 884年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鐸（CBDB 92066）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92066&o=json)
