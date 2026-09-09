---
schema: wang-person/v1
id: p_2qTZooEbZbF273z11NcuG3
status: active
merged_into: null
display_name: 王復元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i94CeAqxYohUVEK8TVdiUF
        subject_person_id: p_2qTZooEbZbF273z11NcuG3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DvJevLZZWtzr8kbALttMRL
          claim_id: c_i94CeAqxYohUVEK8TVdiUF
          source_id: s_k5BkmjL36UYMQULGuP9M89
          stance: supports
          locator: CBDB:145524
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145524）
          source: &a1
            id: s_k5BkmjL36UYMQULGuP9M89
            source_type: api_record
            title: 中国历代人物传记资料库：王復元（CBDB 145524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145524&o=json
            external_identifier: CBDB:145524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.682Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_L1b4BXL45zRXXA9H3iBkAi
        subject_person_id: p_2qTZooEbZbF273z11NcuG3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 782年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8zLaVv71FV4o74sxnAR4ua
          claim_id: c_L1b4BXL45zRXXA9H3iBkAi
          source_id: s_k5BkmjL36UYMQULGuP9M89
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
        id: c_yAEHDTCnDKeRGVgdbBis8h
        subject_person_id: p_2qTZooEbZbF273z11NcuG3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 840年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TJXPC3rYL5ZyGoLq64zg4U
          claim_id: c_yAEHDTCnDKeRGVgdbBis8h
          source_id: s_k5BkmjL36UYMQULGuP9M89
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
        id: c_Xta3h7TbNQBLegG8qRH8Fw
        subject_person_id: p_2qTZooEbZbF273z11NcuG3
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
        - id: cs_BDRUAG5rhspnkGfvU6vZYD
          claim_id: c_Xta3h7TbNQBLegG8qRH8Fw
          source_id: s_k5BkmjL36UYMQULGuP9M89
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

# 王復元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王復元 | accepted |
| birth.date | 782年 | accepted |
| death.date | 840年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王復元（CBDB 145524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145524&o=json)
