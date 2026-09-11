---
schema: wang-person/v1
id: p_PMVLTHFAdGBcZxZiDVDas1
status: active
merged_into: null
display_name: 王治瑋
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8GREWugYe1d3iCmJgHC9Jy
        subject_person_id: p_PMVLTHFAdGBcZxZiDVDas1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治瑋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_44cRaT5onLvgpvgtQ3A91N
          claim_id: c_8GREWugYe1d3iCmJgHC9Jy
          source_id: s_T57AP7ShG7iKp48NdwFSEa
          stance: supports
          locator: CBDB:683429
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（683429）
          source: &a1
            id: s_T57AP7ShG7iKp48NdwFSEa
            source_type: api_record
            title: 中国历代人物传记资料库：王治瑋（CBDB 683429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683429&o=json
            external_identifier: CBDB:683429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.458Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_daevuX3iT7mpc7eioHyJe2
        subject_person_id: p_PMVLTHFAdGBcZxZiDVDas1
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
        - id: cs_DB7L1k9izCTAS3BBYzdSQJ
          claim_id: c_daevuX3iT7mpc7eioHyJe2
          source_id: s_T57AP7ShG7iKp48NdwFSEa
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
        id: c_etggokX0rW-fymK_Dx5KDT
        subject_person_id: p_U3NK9uy3HWG3bWNCJcz1D7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PMVLTHFAdGBcZxZiDVDas1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iqi-RSqPyaCF6Dwt_4eudW
          claim_id: c_etggokX0rW-fymK_Dx5KDT
          source_id: s_T57AP7ShG7iKp48NdwFSEa
          stance: supports
          locator: "民國歙縣志: 十六卷，lgid=1163873：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_U3NK9uy3HWG3bWNCJcz1D7
        status: active
        display_name: 王正湖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王治瑋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王治瑋 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_U3NK9uy3HWG3bWNCJcz1D7 | 王正湖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王治瑋（CBDB 683429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683429&o=json)
