---
schema: wang-person/v1
id: p_Up279P947ZwFFPS97rV6eK
status: active
merged_into: null
display_name: 王億
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qVnX4xsMM7LWz4gM8QJVhv
        subject_person_id: p_Up279P947ZwFFPS97rV6eK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王億
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JFYnZhAwXxFmK2sKGvqX1b
          claim_id: c_qVnX4xsMM7LWz4gM8QJVhv
          source_id: s_3RaEuvHMkMb43iJfQ24rNX
          stance: supports
          locator: CBDB:7378
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（7378）
          source: &a1
            id: s_3RaEuvHMkMb43iJfQ24rNX
            source_type: api_record
            title: 中国历代人物传记资料库：王億（CBDB 7378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7378&o=json
            external_identifier: CBDB:7378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rvDA7PN9LYFFfAySbn1SeW
        subject_person_id: p_Up279P947ZwFFPS97rV6eK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王億，宋人物。籍贯太和，入仕進士，曾任尚書省兵部職方司員外郎。（中国历代人物传记资料库 CBDB 7378）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iuoXitiNVk6LOmnfU-6GvA
          claim_id: c_rvDA7PN9LYFFfAySbn1SeW
          source_id: s_3RaEuvHMkMb43iJfQ24rNX
          stance: supports
          locator: CBDB:7378
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_x0LnCsk0IY9_aMhOF7R6X1
        subject_person_id: p_BsUPyN3PgHdrLvMeySeRLR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Up279P947ZwFFPS97rV6eK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jrr1ADUeeBO-TitDyxBDi0
          claim_id: c_x0LnCsk0IY9_aMhOF7R6X1
          source_id: s_b5JJkQ_83FIS9gPynBDacW
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1781）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_b5JJkQ_83FIS9gPynBDacW
            source_type: api_record
            title: 中国历代人物传记资料库：王億（CBDB 7378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7378&o=json
            external_identifier: CBDB:7378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BsUPyN3PgHdrLvMeySeRLR
        status: active
        display_name: 王贄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王億

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王億 | accepted |
| bio.summary | 王億，宋人物。籍贯太和，入仕進士，曾任尚書省兵部職方司員外郎。（中国历代人物传记资料库 CBDB 7378） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BsUPyN3PgHdrLvMeySeRLR | 王贄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王億（CBDB 7378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7378&o=json)
