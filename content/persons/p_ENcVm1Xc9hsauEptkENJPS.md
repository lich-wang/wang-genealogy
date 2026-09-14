---
schema: wang-person/v1
id: p_ENcVm1Xc9hsauEptkENJPS
status: active
merged_into: null
display_name: 王備
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_264fCwVy2kG2AtDZuLSch5
        subject_person_id: p_ENcVm1Xc9hsauEptkENJPS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王備
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GwMiGA9or9H23NoNtbKXKf
          claim_id: c_264fCwVy2kG2AtDZuLSch5
          source_id: s_esSCFKw1X6MHH5EDjEPy8T
          stance: supports
          locator: CBDB:298820
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（298820）
          source: &a1
            id: s_esSCFKw1X6MHH5EDjEPy8T
            source_type: api_record
            title: 中国历代人物传记资料库：王備（CBDB 298820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298820&o=json
            external_identifier: CBDB:298820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.596Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qC7nmYFRmohoBhXCcAuexb
        subject_person_id: p_ENcVm1Xc9hsauEptkENJPS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王備，明人物。嘉靖十七年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 298820）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GCnXhZDlvipriEN0lTwwfV
          claim_id: c_qC7nmYFRmohoBhXCcAuexb
          source_id: s_esSCFKw1X6MHH5EDjEPy8T
          stance: supports
          locator: CBDB:298820
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XUoFOTIF642-FwdTi1rrfB
        subject_person_id: p_1v36CPdP8tsG1X5DfhzMf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ENcVm1Xc9hsauEptkENJPS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T8E_fxaij3ljMcyCBh_Nvw
          claim_id: c_XUoFOTIF642-FwdTi1rrfB
          source_id: s_hZ5gbOZZ0Zm1FKPE3VUWE1
          stance: supports
          locator: CBDB：兄弟 王健（203037）之父／母 王瓚
          quotation: null
          interpretation_note: 由兄弟关系推断：王備 与 王健 为同胞（CBDB 记「弟」），王健 之父／母即 王備 之父／母。
          source:
            id: s_hZ5gbOZZ0Zm1FKPE3VUWE1
            source_type: api_record
            title: 中国历代人物传记资料库：王備（CBDB 298820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298820&o=json
            external_identifier: CBDB:298820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1v36CPdP8tsG1X5DfhzMf4
        status: active
        display_name: 王瓚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_YLWSPIwXIg_5umNrsHqrD_
        subject_person_id: p_ENcVm1Xc9hsauEptkENJPS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sVZp7AN2wCm1EcSo9rSyTJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ebxwEvOHi1XOmOTeI_70RP
          claim_id: c_YLWSPIwXIg_5umNrsHqrD_
          source_id: s_hZ5gbOZZ0Zm1FKPE3VUWE1
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203037 王健）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hZ5gbOZZ0Zm1FKPE3VUWE1
            source_type: api_record
            title: 中国历代人物传记资料库：王備（CBDB 298820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298820&o=json
            external_identifier: CBDB:298820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sVZp7AN2wCm1EcSo9rSyTJ
        status: active
        display_name: 王健
        merged_into_person_id: null
---

# 王備

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王備 | accepted |
| bio.summary | 王備，明人物。嘉靖十七年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 298820） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1v36CPdP8tsG1X5DfhzMf4 | 王瓚 | accepted |
| other | p_sVZp7AN2wCm1EcSo9rSyTJ | 王健 | accepted |

## 外部来源

- [中国历代人物传记资料库：王備（CBDB 298820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298820&o=json)
