---
schema: wang-person/v1
id: p_Ev8XowZ6nSYmLVFhftHwD9
status: active
merged_into: null
display_name: 王彬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tn74SxLmGWGLn1PNuosrhg
        subject_person_id: p_Ev8XowZ6nSYmLVFhftHwD9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hPF2EpcL6Yie6bXna2MpP4
          claim_id: c_tn74SxLmGWGLn1PNuosrhg
          source_id: s_KhL1QVcWVym2A4HW67B91h
          stance: supports
          locator: CBDB:36852
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（36852）
          source: &a1
            id: s_KhL1QVcWVym2A4HW67B91h
            source_type: api_record
            title: 中国历代人物传记资料库：王彬（CBDB 36852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36852&o=json
            external_identifier: CBDB:36852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.178Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_89WmszePvRoQNQXBtTFUsz
        subject_person_id: p_Ev8XowZ6nSYmLVFhftHwD9
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
        - id: cs_CdtdWyeyZU1jCZxmKSu8oL
          claim_id: c_89WmszePvRoQNQXBtTFUsz
          source_id: s_KhL1QVcWVym2A4HW67B91h
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
  ancestors:
    - claim:
        id: c_WtGFfR5EZsVLqwxNkvL_v7
        subject_person_id: p_Ue4bc6JWNDY3CgoJjDceoC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Ev8XowZ6nSYmLVFhftHwD9
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bdfB9xSRvB0uro-1JRlWbi
          claim_id: c_WtGFfR5EZsVLqwxNkvL_v7
          source_id: s_KhL1QVcWVym2A4HW67B91h
          stance: supports
          locator: 宋人傳記資料索引(電子版)：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ue4bc6JWNDY3CgoJjDceoC
        status: active
        display_name: 王丕
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王彬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彬 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_Ue4bc6JWNDY3CgoJjDceoC | 王丕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彬（CBDB 36852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36852&o=json)
