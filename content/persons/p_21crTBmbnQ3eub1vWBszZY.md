---
schema: wang-person/v1
id: p_21crTBmbnQ3eub1vWBszZY
status: active
merged_into: null
display_name: 王愛民
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p19X4mn2o6BYtJs6EwTfKc
        subject_person_id: p_21crTBmbnQ3eub1vWBszZY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愛民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_idLEC1qwAcdNSocsc5gpwF
          claim_id: c_p19X4mn2o6BYtJs6EwTfKc
          source_id: s_2YaYqkmT7rKLCJVHsdsaH4
          stance: supports
          locator: CBDB:336587
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336587）
          source: &a1
            id: s_2YaYqkmT7rKLCJVHsdsaH4
            source_type: api_record
            title: 中国历代人物传记资料库：王愛民（CBDB 336587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336587&o=json
            external_identifier: CBDB:336587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.488Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8MJ3JW9Attsf4igurNTZ18
        subject_person_id: p_21crTBmbnQ3eub1vWBszZY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愛民，明人物。隆慶二年進士，籍贯合肥。（中国历代人物传记资料库 CBDB 336587）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-fzj1h8xNVa17xT26qCHNP
          claim_id: c_8MJ3JW9Attsf4igurNTZ18
          source_id: s_2YaYqkmT7rKLCJVHsdsaH4
          stance: supports
          locator: CBDB:336587
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RJCuRkzjOPoV7yhkME5-sA
        subject_person_id: p_rzdGCJdbAnivH2NuEMbZHX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_21crTBmbnQ3eub1vWBszZY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_42r6yFcRqBzJp2l961BevE
          claim_id: c_RJCuRkzjOPoV7yhkME5-sA
          source_id: s_bXvnpNdUZO7bV5v6HlrKeI
          stance: supports
          locator: CBDB：兄弟 王恩民（205656）之父／母 王世學
          quotation: null
          interpretation_note: 由兄弟关系推断：王愛民 与 王恩民 为同胞（CBDB 记「兄」），王恩民 之父／母即 王愛民 之父／母。
          source:
            id: s_bXvnpNdUZO7bV5v6HlrKeI
            source_type: api_record
            title: 中国历代人物传记资料库：王愛民（CBDB 336587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336587&o=json
            external_identifier: CBDB:336587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rzdGCJdbAnivH2NuEMbZHX
        status: active
        display_name: 王世學
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_vV2AWLbXe9VljMi8CNbxCF
        subject_person_id: p_21crTBmbnQ3eub1vWBszZY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_3iyxEBFwgRpJCsXBwB3FWC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QvKMI3-O-tEVZJFCSuh5BF
          claim_id: c_vV2AWLbXe9VljMi8CNbxCF
          source_id: s_bXvnpNdUZO7bV5v6HlrKeI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205656 王恩民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bXvnpNdUZO7bV5v6HlrKeI
            source_type: api_record
            title: 中国历代人物传记资料库：王愛民（CBDB 336587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336587&o=json
            external_identifier: CBDB:336587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3iyxEBFwgRpJCsXBwB3FWC
        status: active
        display_name: 王恩民
        merged_into_person_id: null
---

# 王愛民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愛民 | accepted |
| bio.summary | 王愛民，明人物。隆慶二年進士，籍贯合肥。（中国历代人物传记资料库 CBDB 336587） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rzdGCJdbAnivH2NuEMbZHX | 王世學 | accepted |
| other | p_3iyxEBFwgRpJCsXBwB3FWC | 王恩民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王愛民（CBDB 336587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336587&o=json)
