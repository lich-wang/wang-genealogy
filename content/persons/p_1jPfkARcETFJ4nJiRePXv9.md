---
schema: wang-person/v1
id: p_1jPfkARcETFJ4nJiRePXv9
status: active
merged_into: null
display_name: 王澤
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WptZh5FGvbrcX25AQLGFDE
        subject_person_id: p_1jPfkARcETFJ4nJiRePXv9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3pW8LmHXrNA4Z9L64HptvJ
          claim_id: c_WptZh5FGvbrcX25AQLGFDE
          source_id: s_vdqk83WZX9TMAWfsCbSTD7
          stance: supports
          locator: CBDB:259344
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259344）
          source: &a1
            id: s_vdqk83WZX9TMAWfsCbSTD7
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 259344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259344&o=json
            external_identifier: CBDB:259344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.458Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JUg9dQSBhQtAArBmfVvit2
        subject_person_id: p_1jPfkARcETFJ4nJiRePXv9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤，明人物。成化二十三年進士，籍贯灤州。（中国历代人物传记资料库 CBDB 259344）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FukoMmQb1f4CFp4wHCVdGT
          claim_id: c_JUg9dQSBhQtAArBmfVvit2
          source_id: s_vdqk83WZX9TMAWfsCbSTD7
          stance: supports
          locator: CBDB:259344
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FbV2waQ3bOhIR5Fcjav3oP
        subject_person_id: p_Yjvr1HxMf73RSYqrbeaxV5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1jPfkARcETFJ4nJiRePXv9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4AqyFZlTA1j3izYJpA0yIQ
          claim_id: c_FbV2waQ3bOhIR5Fcjav3oP
          source_id: s_iun7Xa9lHFB1aASgOO2jGW
          stance: supports
          locator: CBDB：兄弟 王濟（200530）之父／母 王能
          quotation: null
          interpretation_note: 由兄弟关系推断：王澤 与 王濟 为同胞（CBDB 记「兄」），王濟 之父／母即 王澤 之父／母。
          source:
            id: s_iun7Xa9lHFB1aASgOO2jGW
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 259344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259344&o=json
            external_identifier: CBDB:259344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Yjvr1HxMf73RSYqrbeaxV5
        status: active
        display_name: 王能
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Glbi1LtF6RQbODRp4pEjHM
        subject_person_id: p_1jPfkARcETFJ4nJiRePXv9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GXh7yMNfU8L5d25yyNJsVi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mcQ9wmSQr04MEmzIG8avM9
          claim_id: c_Glbi1LtF6RQbODRp4pEjHM
          source_id: s_iun7Xa9lHFB1aASgOO2jGW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200530 王濟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iun7Xa9lHFB1aASgOO2jGW
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 259344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259344&o=json
            external_identifier: CBDB:259344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GXh7yMNfU8L5d25yyNJsVi
        status: active
        display_name: 王濟
        merged_into_person_id: null
---

# 王澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澤 | accepted |
| bio.summary | 王澤，明人物。成化二十三年進士，籍贯灤州。（中国历代人物传记资料库 CBDB 259344） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Yjvr1HxMf73RSYqrbeaxV5 | 王能 | accepted |
| other | p_GXh7yMNfU8L5d25yyNJsVi | 王濟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澤（CBDB 259344）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259344&o=json)
