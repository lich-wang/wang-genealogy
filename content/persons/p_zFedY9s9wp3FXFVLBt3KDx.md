---
schema: wang-person/v1
id: p_zFedY9s9wp3FXFVLBt3KDx
status: active
merged_into: null
display_name: 王容
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ytFvNioDWN29kiFEZ5K42J
        subject_person_id: p_zFedY9s9wp3FXFVLBt3KDx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王容
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zbctJ3GAvkt4zAKm55qsji
          claim_id: c_ytFvNioDWN29kiFEZ5K42J
          source_id: s_eDTJ7Ex5hKZ34BZLiK8pPg
          stance: supports
          locator: CBDB:141970
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141970）
          source: &a1
            id: s_eDTJ7Ex5hKZ34BZLiK8pPg
            source_type: api_record
            title: 中国历代人物传记资料库：王容（CBDB 141970）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141970&o=json
            external_identifier: CBDB:141970
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.572Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TukhnkUDHhjs4KpsCKdZ6e
        subject_person_id: p_zFedY9s9wp3FXFVLBt3KDx
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 845年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MjNSF2HckYf1WRz6B3LD41
          claim_id: c_TukhnkUDHhjs4KpsCKdZ6e
          source_id: s_eDTJ7Ex5hKZ34BZLiK8pPg
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
        id: c_FK8SjGnmpLvQW8o3cmWXCL
        subject_person_id: p_zFedY9s9wp3FXFVLBt3KDx
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 862年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L6mbHhuVy4hGt4FLQgH7X4
          claim_id: c_FK8SjGnmpLvQW8o3cmWXCL
          source_id: s_eDTJ7Ex5hKZ34BZLiK8pPg
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
        id: c_gFbQ9VpS3htj4fnPAViU4a
        subject_person_id: p_zFedY9s9wp3FXFVLBt3KDx
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
        - id: cs_aV7BEdLLhVeCV61m9YbLjM
          claim_id: c_gFbQ9VpS3htj4fnPAViU4a
          source_id: s_eDTJ7Ex5hKZ34BZLiK8pPg
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

# 王容

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王容 | accepted |
| birth.date | 845年 | accepted |
| death.date | 862年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王容（CBDB 141970）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141970&o=json)
