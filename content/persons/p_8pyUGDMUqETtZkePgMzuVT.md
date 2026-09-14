---
schema: wang-person/v1
id: p_8pyUGDMUqETtZkePgMzuVT
status: active
merged_into: null
display_name: 王傅
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YDFbK3p7rck2t6goQ8eoQM
        subject_person_id: p_8pyUGDMUqETtZkePgMzuVT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xJt9LV71RwexnU5HBSivH6
          claim_id: c_YDFbK3p7rck2t6goQ8eoQM
          source_id: s_s6CMfRj6ewwNqLCCwAL4gg
          stance: supports
          locator: CBDB:298821
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（298821）
          source: &a1
            id: s_s6CMfRj6ewwNqLCCwAL4gg
            source_type: api_record
            title: 中国历代人物传记资料库：王傅（CBDB 298821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298821&o=json
            external_identifier: CBDB:298821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.597Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JnaqX426FGx94bK3dknj8R
        subject_person_id: p_8pyUGDMUqETtZkePgMzuVT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傅，明人物。嘉靖十七年進士，籍贯永嘉，入仕監生。（中国历代人物传记资料库 CBDB 298821）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A3TssSPR4WcweEN9cU49oO
          claim_id: c_JnaqX426FGx94bK3dknj8R
          source_id: s_s6CMfRj6ewwNqLCCwAL4gg
          stance: supports
          locator: CBDB:298821
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BtPfjapDr_gqSngmZf7TOR
        subject_person_id: p_1v36CPdP8tsG1X5DfhzMf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8pyUGDMUqETtZkePgMzuVT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uSPFf2us-Tce5mi1Kv_1Lf
          claim_id: c_BtPfjapDr_gqSngmZf7TOR
          source_id: s_kOUA6JSdSR3LPkg_19X-Cd
          stance: supports
          locator: CBDB：兄弟 王健（203037）之父／母 王瓚
          quotation: null
          interpretation_note: 由兄弟关系推断：王傅 与 王健 为同胞（CBDB 记「弟」），王健 之父／母即 王傅 之父／母。
          source:
            id: s_kOUA6JSdSR3LPkg_19X-Cd
            source_type: api_record
            title: 中国历代人物传记资料库：王傅（CBDB 298821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298821&o=json
            external_identifier: CBDB:298821
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
        id: c_gwg1As-W-7L75NjjALTGTg
        subject_person_id: p_8pyUGDMUqETtZkePgMzuVT
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
        - id: cs_Co1JFqA0pbka-U_E71g018
          claim_id: c_gwg1As-W-7L75NjjALTGTg
          source_id: s_kOUA6JSdSR3LPkg_19X-Cd
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203037 王健）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kOUA6JSdSR3LPkg_19X-Cd
            source_type: api_record
            title: 中国历代人物传记资料库：王傅（CBDB 298821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298821&o=json
            external_identifier: CBDB:298821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sVZp7AN2wCm1EcSo9rSyTJ
        status: active
        display_name: 王健
        merged_into_person_id: null
---

# 王傅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傅 | accepted |
| bio.summary | 王傅，明人物。嘉靖十七年進士，籍贯永嘉，入仕監生。（中国历代人物传记资料库 CBDB 298821） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1v36CPdP8tsG1X5DfhzMf4 | 王瓚 | accepted |
| other | p_sVZp7AN2wCm1EcSo9rSyTJ | 王健 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傅（CBDB 298821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298821&o=json)
