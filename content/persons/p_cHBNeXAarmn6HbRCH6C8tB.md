---
schema: wang-person/v1
id: p_cHBNeXAarmn6HbRCH6C8tB
status: active
merged_into: null
display_name: 王克明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WorwUULPFoNfvDA7GTH2PK
        subject_person_id: p_cHBNeXAarmn6HbRCH6C8tB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DWyzMwGxEeSg8225EmGnhn
          claim_id: c_WorwUULPFoNfvDA7GTH2PK
          source_id: s_2LtQWCwDDm6FaVxhdbigei
          stance: supports
          locator: CBDB:22101
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22101）
          source: &a1
            id: s_2LtQWCwDDm6FaVxhdbigei
            source_type: api_record
            title: 中国历代人物传记资料库：王克明（CBDB 22101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22101&o=json
            external_identifier: CBDB:22101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uHCm13u3C5kM3Mws8cGh5G
        subject_person_id: p_cHBNeXAarmn6HbRCH6C8tB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1112年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LSiYBWXNES9p3QpgUNo8mv
          claim_id: c_uHCm13u3C5kM3Mws8cGh5G
          source_id: s_2LtQWCwDDm6FaVxhdbigei
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
        id: c_TPtGPS5DuSnAbDA78DugDa
        subject_person_id: p_cHBNeXAarmn6HbRCH6C8tB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1178年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4cmEVnxeRwTPuvtgEoFR7P
          claim_id: c_TPtGPS5DuSnAbDA78DugDa
          source_id: s_2LtQWCwDDm6FaVxhdbigei
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
        id: c_zJ9YnXFyCoK3xcNiwWvPop
        subject_person_id: p_cHBNeXAarmn6HbRCH6C8tB
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
        - id: cs_MNz5FVrm6YFmjX95idPhyy
          claim_id: c_zJ9YnXFyCoK3xcNiwWvPop
          source_id: s_2LtQWCwDDm6FaVxhdbigei
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

# 王克明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克明 | accepted |
| birth.date | 1112年 | accepted |
| death.date | 1178年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克明（CBDB 22101）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22101&o=json)
