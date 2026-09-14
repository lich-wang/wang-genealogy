---
schema: wang-person/v1
id: p_7VzTA9domDdPkLvFgB5MaX
status: active
merged_into: null
display_name: 王福
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2wccHsj1mQHMzeSuhXMzCA
        subject_person_id: p_7VzTA9domDdPkLvFgB5MaX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NHCqzeD6r4NG3GiLhy9K4i
          claim_id: c_2wccHsj1mQHMzeSuhXMzCA
          source_id: s_7G7uERLDw4DrgyLATxJAWi
          stance: supports
          locator: CBDB:209415
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209415）
          source: &a1
            id: s_7G7uERLDw4DrgyLATxJAWi
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 209415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209415&o=json
            external_identifier: CBDB:209415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.983Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ENa8Dy7GrYS9xRSbfE1vgu
        subject_person_id: p_7VzTA9domDdPkLvFgB5MaX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福，明人物。天順八年進士，籍贯遵化。（中国历代人物传记资料库 CBDB 209415）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G-bLmDGGzHJ49GrtxFeM0l
          claim_id: c_ENa8Dy7GrYS9xRSbfE1vgu
          source_id: s_7G7uERLDw4DrgyLATxJAWi
          stance: supports
          locator: CBDB:209415
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jlgr5CUBYqqgoW8uqST1pn
        subject_person_id: p_LkHA7Eh6TZ3G6EVZV4TAQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7VzTA9domDdPkLvFgB5MaX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_67IHLJcqPpwPtrODFzYn-J
          claim_id: c_jlgr5CUBYqqgoW8uqST1pn
          source_id: s_oESFSE1Icum2kY8YyhNzyC
          stance: supports
          locator: CBDB：兄弟 王昭（198949）之父／母 王斌
          quotation: null
          interpretation_note: 由兄弟关系推断：王福 与 王昭 为同胞（CBDB 记「兄」），王昭 之父／母即 王福 之父／母。
          source:
            id: s_oESFSE1Icum2kY8YyhNzyC
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 209415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209415&o=json
            external_identifier: CBDB:209415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LkHA7Eh6TZ3G6EVZV4TAQp
        status: active
        display_name: 王斌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_YNVZWu0l-nnq7bP-M5F95z
        subject_person_id: p_7VzTA9domDdPkLvFgB5MaX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rueH5VJGf9EEceCDH3UTnn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Aete-JtOBn6dMzGLKFxnAr
          claim_id: c_YNVZWu0l-nnq7bP-M5F95z
          source_id: s_oESFSE1Icum2kY8YyhNzyC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198949 王昭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oESFSE1Icum2kY8YyhNzyC
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 209415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209415&o=json
            external_identifier: CBDB:209415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rueH5VJGf9EEceCDH3UTnn
        status: active
        display_name: 王昭
        merged_into_person_id: null
---

# 王福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福 | accepted |
| bio.summary | 王福，明人物。天順八年進士，籍贯遵化。（中国历代人物传记资料库 CBDB 209415） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LkHA7Eh6TZ3G6EVZV4TAQp | 王斌 | accepted |
| other | p_rueH5VJGf9EEceCDH3UTnn | 王昭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 209415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209415&o=json)
