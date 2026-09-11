---
schema: wang-person/v1
id: p_nMGCJmQq2Zcy4irJuKbEXy
status: active
merged_into: null
display_name: 王遇亨
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kzF7DNqTVN7VTLhp4eFem9
        subject_person_id: p_nMGCJmQq2Zcy4irJuKbEXy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遇亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oV3RTsFQ6rNyLYQ5dRi9J1
          claim_id: c_kzF7DNqTVN7VTLhp4eFem9
          source_id: s_camKSGdFC6NkAHaT57S6W8
          stance: supports
          locator: CBDB:640432
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640432）
          source: &a1
            id: s_camKSGdFC6NkAHaT57S6W8
            source_type: api_record
            title: 中国历代人物传记资料库：王遇亨（CBDB 640432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640432&o=json
            external_identifier: CBDB:640432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.260Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KSutvAgw4Dy1sH6878rxKk
        subject_person_id: p_nMGCJmQq2Zcy4irJuKbEXy
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
        - id: cs_dgGQd1rU4Tvvbsh1bECovd
          claim_id: c_KSutvAgw4Dy1sH6878rxKk
          source_id: s_camKSGdFC6NkAHaT57S6W8
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
        id: c__CZjzaTLrxCiI_r-35CYTd
        subject_person_id: p_nMGCJmQq2Zcy4irJuKbEXy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X9phLcbY9Wqsi1CQ2BDzXh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H6nRJeye-MHuJthvJpwfEF
          claim_id: c__CZjzaTLrxCiI_r-35CYTd
          source_id: s_camKSGdFC6NkAHaT57S6W8
          stance: supports
          locator: 吳門補乘，lgid=177497：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_X9phLcbY9Wqsi1CQ2BDzXh
        status: active
        display_name: 王利謙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王遇亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遇亨 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_X9phLcbY9Wqsi1CQ2BDzXh | 王利謙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遇亨（CBDB 640432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640432&o=json)
