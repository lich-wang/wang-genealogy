---
schema: wang-person/v1
id: p_vQ7CxFfVeDD5gVP5SnofRA
status: active
merged_into: null
display_name: 王言
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6TF39TNHLFNNdv5D49S5xn
        subject_person_id: p_vQ7CxFfVeDD5gVP5SnofRA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uNEp8PbEc22hBz1cy8zipn
          claim_id: c_6TF39TNHLFNNdv5D49S5xn
          source_id: s_bdh78hDyKTZYMt8wkfB4ky
          stance: supports
          locator: CBDB:331186
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331186）
          source: &a1
            id: s_bdh78hDyKTZYMt8wkfB4ky
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 331186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331186&o=json
            external_identifier: CBDB:331186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.361Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6NCxKyWdBuQYqASjFNDovg
        subject_person_id: p_vQ7CxFfVeDD5gVP5SnofRA
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
        - id: cs_oka5dyb99hFr848VFkT1cu
          claim_id: c_6NCxKyWdBuQYqASjFNDovg
          source_id: s_bdh78hDyKTZYMt8wkfB4ky
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_SvIybh73tngXBriaj4CYRm
        subject_person_id: p_vQ7CxFfVeDD5gVP5SnofRA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3aefzIfXLT6Q2rRdzM-G32
          claim_id: c_SvIybh73tngXBriaj4CYRm
          source_id: s_bdh78hDyKTZYMt8wkfB4ky
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第九十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Tffvt8PaRx7qSEiYdDgfFH
        status: active
        display_name: 王淑陵
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Tffvt8PaRx7qSEiYdDgfFH | 王淑陵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王言（CBDB 331186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331186&o=json)
