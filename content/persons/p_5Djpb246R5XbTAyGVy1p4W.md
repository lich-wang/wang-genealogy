---
schema: wang-person/v1
id: p_5Djpb246R5XbTAyGVy1p4W
status: active
merged_into: null
display_name: 王翊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k2J22gDL7ffgaDhoHbiP9Q
        subject_person_id: p_5Djpb246R5XbTAyGVy1p4W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hk2JCCWHTAQKM7M5EqJruT
          claim_id: c_k2J22gDL7ffgaDhoHbiP9Q
          source_id: s_Dp5FEMhEdALctyBTzryQeH
          stance: supports
          locator: CBDB:69339
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69339）
          source: &a1
            id: s_Dp5FEMhEdALctyBTzryQeH
            source_type: api_record
            title: 中国历代人物传记资料库：王翊（CBDB 69339）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69339&o=json
            external_identifier: CBDB:69339
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.217Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kc2SYPoXeZDPP3soHDxcSg
        subject_person_id: p_5Djpb246R5XbTAyGVy1p4W
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1616年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VkyhGjcb2ECKXu8Nd7BsBe
          claim_id: c_kc2SYPoXeZDPP3soHDxcSg
          source_id: s_Dp5FEMhEdALctyBTzryQeH
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
        id: c_xg3qWRbJ3ZDB8nYMXeupSz
        subject_person_id: p_5Djpb246R5XbTAyGVy1p4W
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1651年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aGzQ5bvqCwA6BdiCQZvh6t
          claim_id: c_xg3qWRbJ3ZDB8nYMXeupSz
          source_id: s_Dp5FEMhEdALctyBTzryQeH
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
        id: c_2S4EdFU7BihMCwNCSvGh2H
        subject_person_id: p_5Djpb246R5XbTAyGVy1p4W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kk1ypytDa146UyvftvRMS1
          claim_id: c_2S4EdFU7BihMCwNCSvGh2H
          source_id: s_Dp5FEMhEdALctyBTzryQeH
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

# 王翊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翊 | accepted |
| birth.date | 1616年 | accepted |
| death.date | 1651年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翊（CBDB 69339）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69339&o=json)
