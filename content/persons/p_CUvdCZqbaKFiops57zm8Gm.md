---
schema: wang-person/v1
id: p_CUvdCZqbaKFiops57zm8Gm
status: active
merged_into: null
display_name: 王詔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Uc5DjVyPFCnwo39X3BCJz
        subject_person_id: p_CUvdCZqbaKFiops57zm8Gm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vAxy3AMqJRzmvhiEjGN19V
          claim_id: c_4Uc5DjVyPFCnwo39X3BCJz
          source_id: s_2QVsQt6D2JxjvuK9g4FNfx
          stance: supports
          locator: CBDB:577104
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（577104）
          source: &a1
            id: s_2QVsQt6D2JxjvuK9g4FNfx
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 577104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577104&o=json
            external_identifier: CBDB:577104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BLg66Xpa3tmwPL21WfCEaH
        subject_person_id: p_CUvdCZqbaKFiops57zm8Gm
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
        - id: cs_wGfEKMh55CT8BoMhPre6iA
          claim_id: c_BLg66Xpa3tmwPL21WfCEaH
          source_id: s_2QVsQt6D2JxjvuK9g4FNfx
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
        id: c_bdmwgt8HTLVJUhL2z6J9ng
        subject_person_id: p_CUvdCZqbaKFiops57zm8Gm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Cu9S8R2i1sHHizx4TQxj9T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Baf5bz6BSJBjMRd0TL7Yam
          claim_id: c_bdmwgt8HTLVJUhL2z6J9ng
          source_id: s_Zfrju7LDYro2H4h61o67hV
          stance: supports
          locator: "民國歙縣志: 十六卷，lgid=1163714：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Zfrju7LDYro2H4h61o67hV
            source_type: api_record
            title: 中国历代人物传记资料库：王文元（CBDB 577105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577105&o=json
            external_identifier: CBDB:577105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.966Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Cu9S8R2i1sHHizx4TQxj9T
        status: active
        display_name: 王文元
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詔 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Cu9S8R2i1sHHizx4TQxj9T | 王文元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文元（CBDB 577105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577105&o=json)
- [中国历代人物传记资料库：王詔（CBDB 577104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577104&o=json)
