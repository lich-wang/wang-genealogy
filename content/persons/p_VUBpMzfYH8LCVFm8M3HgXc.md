---
schema: wang-person/v1
id: p_VUBpMzfYH8LCVFm8M3HgXc
status: active
merged_into: null
display_name: 王佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y7MsBzD9wDJs61pXv987kR
        subject_person_id: p_VUBpMzfYH8LCVFm8M3HgXc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s6gLp6miPCnZLJwovyPKNY
          claim_id: c_y7MsBzD9wDJs61pXv987kR
          source_id: s_dTUXRMkxqmhmdy9hU3p8N8
          stance: supports
          locator: CBDB:199633
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199633）
          source: &a1
            id: s_dTUXRMkxqmhmdy9hU3p8N8
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 199633）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199633&o=json
            external_identifier: CBDB:199633
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.564Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2FmeAt6A7DyCmB458csW1i
        subject_person_id: p_VUBpMzfYH8LCVFm8M3HgXc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1435年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_etocQxd8NmwPwUDV4MU1ic
          claim_id: c_2FmeAt6A7DyCmB458csW1i
          source_id: s_dTUXRMkxqmhmdy9hU3p8N8
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
        id: c_kJHvHHVV7Y7paWNbQcafSA
        subject_person_id: p_VUBpMzfYH8LCVFm8M3HgXc
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
        - id: cs_g6hdCGRvXBMMSNYUehvz3D
          claim_id: c_kJHvHHVV7Y7paWNbQcafSA
          source_id: s_dTUXRMkxqmhmdy9hU3p8N8
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

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| birth.date | 1435年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佐（CBDB 199633）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199633&o=json)
