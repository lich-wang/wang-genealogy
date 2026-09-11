---
schema: wang-person/v1
id: p_B9CSkxyVG7WBfsSZpKSTGf
status: active
merged_into: null
display_name: 王作孚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XenmzADQLY95MXJB9PH5mf
        subject_person_id: p_B9CSkxyVG7WBfsSZpKSTGf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作孚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UMGXQYbWzgnZoWEvmGCfq8
          claim_id: c_XenmzADQLY95MXJB9PH5mf
          source_id: s_Up7oHYmZRPYHhEJTuixB87
          stance: supports
          locator: CBDB:699039
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699039）
          source: &a1
            id: s_Up7oHYmZRPYHhEJTuixB87
            source_type: api_record
            title: 中国历代人物传记资料库：王作孚（CBDB 699039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699039&o=json
            external_identifier: CBDB:699039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.750Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tAvW7XWUKMo97UG9bncrLH
        subject_person_id: p_B9CSkxyVG7WBfsSZpKSTGf
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
        - id: cs_X2kDc62Q4krDsjSzis963B
          claim_id: c_tAvW7XWUKMo97UG9bncrLH
          source_id: s_Up7oHYmZRPYHhEJTuixB87
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uuRFAObnCoXhFN651eFGsU
        subject_person_id: p_phyeEqSq8dsFBd6QTWPuEQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B9CSkxyVG7WBfsSZpKSTGf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KhiwaFI4IOfkPFVvX1tSFf
          claim_id: c_uuRFAObnCoXhFN651eFGsU
          source_id: s_Up7oHYmZRPYHhEJTuixB87
          stance: supports
          locator: 新修菏澤縣志，lgid=725115：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_phyeEqSq8dsFBd6QTWPuEQ
        status: active
        display_name: 王芝田
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王作孚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王作孚 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_phyeEqSq8dsFBd6QTWPuEQ | 王芝田 | accepted |

## 外部来源

- [中国历代人物传记资料库：王作孚（CBDB 699039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699039&o=json)
