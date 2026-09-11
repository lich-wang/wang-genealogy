---
schema: wang-person/v1
id: p_6UumBsx3Q2pbWs5c5i9mzL
status: active
merged_into: null
display_name: 王宏基
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4jmAUKP4v1ePiL9xP8bWCV
        subject_person_id: p_6UumBsx3Q2pbWs5c5i9mzL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dxD5BSV3iQrmf7QK1e3EmG
          claim_id: c_4jmAUKP4v1ePiL9xP8bWCV
          source_id: s_NGwGkdHRH11KBus5KznEii
          stance: supports
          locator: CBDB:557388
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557388）
          source: &a1
            id: s_NGwGkdHRH11KBus5KznEii
            source_type: api_record
            title: 中国历代人物传记资料库：王宏基（CBDB 557388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557388&o=json
            external_identifier: CBDB:557388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.539Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L2mja5XepWp7xQGkomshzA
        subject_person_id: p_6UumBsx3Q2pbWs5c5i9mzL
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
        - id: cs_s8ewX4haUBhC7VHiHfvU8d
          claim_id: c_L2mja5XepWp7xQGkomshzA
          source_id: s_NGwGkdHRH11KBus5KznEii
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
        id: c_KU5i9T_BzjR3IYl2yPnLOr
        subject_person_id: p_6UumBsx3Q2pbWs5c5i9mzL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H4PFRqg81ax7x3yi8yi1uD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tynCgfNJ_Obo73lRD0gC1b
          claim_id: c_KU5i9T_BzjR3IYl2yPnLOr
          source_id: s_NGwGkdHRH11KBus5KznEii
          stance: supports
          locator: 南陽府志，lgid=878778：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_H4PFRqg81ax7x3yi8yi1uD
        status: active
        display_name: 王文
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宏基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宏基 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_H4PFRqg81ax7x3yi8yi1uD | 王文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宏基（CBDB 557388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557388&o=json)
