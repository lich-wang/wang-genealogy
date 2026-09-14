---
schema: wang-person/v1
id: p_43jCdaQscpAsd5Gw1VzpwH
status: active
merged_into: null
display_name: 王宸
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QjC429zeDxHL3Cp4bm2pCb
        subject_person_id: p_43jCdaQscpAsd5Gw1VzpwH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C2LV5TeGKtPt9FYA2oKvvs
          claim_id: c_QjC429zeDxHL3Cp4bm2pCb
          source_id: s_2fQdgU9EJNAPTPZq3DVYTA
          stance: supports
          locator: CBDB:260073
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260073）
          source: &a1
            id: s_2fQdgU9EJNAPTPZq3DVYTA
            source_type: api_record
            title: 中国历代人物传记资料库：王宸（CBDB 260073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260073&o=json
            external_identifier: CBDB:260073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.475Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LQ6f2gSG2UK2Q1THFDnANX
        subject_person_id: p_43jCdaQscpAsd5Gw1VzpwH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宸，明人物。成化二十三年進士，籍贯濬縣，曾任義官。（中国历代人物传记资料库 CBDB 260073）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_l_blbkpudXH6DIIdXrMQlq
          claim_id: c_LQ6f2gSG2UK2Q1THFDnANX
          source_id: s_2fQdgU9EJNAPTPZq3DVYTA
          stance: supports
          locator: CBDB:260073
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_aU4PJY8iQaLcrrAfdmnUjH
        subject_person_id: p_43jCdaQscpAsd5Gw1VzpwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6nEkGFMvqFS2nrjxSDZLbY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bv-tIBscsy886eKyvQB9Of
          claim_id: c_aU4PJY8iQaLcrrAfdmnUjH
          source_id: s_2fQdgU9EJNAPTPZq3DVYTA
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百五十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6nEkGFMvqFS2nrjxSDZLbY
        status: active
        display_name: 王洧
        merged_into_person_id: null
    - claim:
        id: c_9woNI9iaUHtkPiDwmCe6Df
        subject_person_id: p_43jCdaQscpAsd5Gw1VzpwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CxvvvR9t3nw4Ay25SD6mhr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gtFCovyixzliW538-bh_Pd
          claim_id: c_9woNI9iaUHtkPiDwmCe6Df
          source_id: s_49IOdIYDhEODuUQcMprbLj
          stance: supports
          locator: CBDB：兄弟 王洧（126589）之父／母 王宸
          quotation: null
          interpretation_note: 由兄弟关系推断：王濟 与 王洧 为同胞（CBDB 记「兄」），王洧 之父／母即 王濟 之父／母。
          source:
            id: s_49IOdIYDhEODuUQcMprbLj
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 260083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260083&o=json
            external_identifier: CBDB:260083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CxvvvR9t3nw4Ay25SD6mhr
        status: active
        display_name: 王濟
        merged_into_person_id: null
    - claim:
        id: c_dXhRg7lsnVN1DoQvecMmeI
        subject_person_id: p_43jCdaQscpAsd5Gw1VzpwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Pomxb7pynJzNAWnCY4tBLY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_41yUHMVGOr0td863KtdowB
          claim_id: c_dXhRg7lsnVN1DoQvecMmeI
          source_id: s_toY4kyH-aWImND61Fi4V1C
          stance: supports
          locator: CBDB：兄弟 王洧（126589）之父／母 王宸
          quotation: null
          interpretation_note: 由兄弟关系推断：王瀾 与 王洧 为同胞（CBDB 记「兄」），王洧 之父／母即 王瀾 之父／母。
          source:
            id: s_toY4kyH-aWImND61Fi4V1C
            source_type: api_record
            title: 中国历代人物传记资料库：王瀾（CBDB 260082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260082&o=json
            external_identifier: CBDB:260082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Pomxb7pynJzNAWnCY4tBLY
        status: active
        display_name: 王瀾
        merged_into_person_id: null
    - claim:
        id: c_WmBPwj3cT1yCPN6btVNlOp
        subject_person_id: p_43jCdaQscpAsd5Gw1VzpwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UYpyoyS3CtMBLFhi67q6tz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YsB6zitV6RNDXa21_WXgbB
          claim_id: c_WmBPwj3cT1yCPN6btVNlOp
          source_id: s_3pKF0ITNPJO186e0Wy1_SJ
          stance: supports
          locator: CBDB：兄弟 王洧（126589）之父／母 王宸
          quotation: null
          interpretation_note: 由兄弟关系推断：王溱 与 王洧 为同胞（CBDB 记「弟」），王洧 之父／母即 王溱 之父／母。
          source:
            id: s_3pKF0ITNPJO186e0Wy1_SJ
            source_type: api_record
            title: 中国历代人物传记资料库：王溱（CBDB 260081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260081&o=json
            external_identifier: CBDB:260081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UYpyoyS3CtMBLFhi67q6tz
        status: active
        display_name: 王溱
        merged_into_person_id: null
    - claim:
        id: c_zV2VS4SGeNMC_Vj_Efvpea
        subject_person_id: p_43jCdaQscpAsd5Gw1VzpwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gDTouPaE4SJUD3RujrydbV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wJ7kqQUL94x2kPYW-snb3j
          claim_id: c_zV2VS4SGeNMC_Vj_Efvpea
          source_id: s_XUMJdE9AE4rUBZpiTOXoSd
          stance: supports
          locator: CBDB：兄弟 王洧（126589）之父／母 王宸
          quotation: null
          interpretation_note: 由兄弟关系推断：王涿 与 王洧 为同胞（CBDB 记「弟」），王洧 之父／母即 王涿 之父／母。
          source:
            id: s_XUMJdE9AE4rUBZpiTOXoSd
            source_type: api_record
            title: 中国历代人物传记资料库：王涿（CBDB 260080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260080&o=json
            external_identifier: CBDB:260080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gDTouPaE4SJUD3RujrydbV
        status: active
        display_name: 王涿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宸 | accepted |
| bio.summary | 王宸，明人物。成化二十三年進士，籍贯濬縣，曾任義官。（中国历代人物传记资料库 CBDB 260073） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6nEkGFMvqFS2nrjxSDZLbY | 王洧 | accepted |
| children | p_CxvvvR9t3nw4Ay25SD6mhr | 王濟 | accepted |
| children | p_Pomxb7pynJzNAWnCY4tBLY | 王瀾 | accepted |
| children | p_UYpyoyS3CtMBLFhi67q6tz | 王溱 | accepted |
| children | p_gDTouPaE4SJUD3RujrydbV | 王涿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宸（CBDB 260073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260073&o=json)
- [中国历代人物传记资料库：王濟（CBDB 260083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260083&o=json)
- [中国历代人物传记资料库：王瀾（CBDB 260082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260082&o=json)
- [中国历代人物传记资料库：王溱（CBDB 260081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260081&o=json)
- [中国历代人物传记资料库：王涿（CBDB 260080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260080&o=json)
