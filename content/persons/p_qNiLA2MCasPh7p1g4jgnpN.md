---
schema: wang-person/v1
id: p_qNiLA2MCasPh7p1g4jgnpN
status: active
merged_into: null
display_name: 王遜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1FbJ9LoAsJbSTgmrBfFUv3
        subject_person_id: p_qNiLA2MCasPh7p1g4jgnpN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HThWqmgNPt5XsRc26Bbr2L
          claim_id: c_1FbJ9LoAsJbSTgmrBfFUv3
          source_id: s_m7F1PmhnzPorDc5mXhjxQd
          stance: supports
          locator: CBDB:702039
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（702039）
          source: &a1
            id: s_m7F1PmhnzPorDc5mXhjxQd
            source_type: api_record
            title: 中国历代人物传记资料库：王遜（CBDB 702039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702039&o=json
            external_identifier: CBDB:702039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.810Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Th69MZQ2UV1ePzrtvPy9Uy
        subject_person_id: p_qNiLA2MCasPh7p1g4jgnpN
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
        - id: cs_fbPjDcofGhnUzaD4gHEP8U
          claim_id: c_Th69MZQ2UV1ePzrtvPy9Uy
          source_id: s_m7F1PmhnzPorDc5mXhjxQd
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
        id: c_CdWWqjsoRNRbLWROKWdD9g
        subject_person_id: p_FZHK6N7NZLGKbaRxdux9zY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qNiLA2MCasPh7p1g4jgnpN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0NUIZsxbsY3nbONiSABcXf
          claim_id: c_CdWWqjsoRNRbLWROKWdD9g
          source_id: s_m7F1PmhnzPorDc5mXhjxQd
          stance: supports
          locator: 錢塘縣志，lgid=219873：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FZHK6N7NZLGKbaRxdux9zY
        status: active
        display_name: 王佑賢
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王遜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遜 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FZHK6N7NZLGKbaRxdux9zY | 王佑賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遜（CBDB 702039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702039&o=json)
