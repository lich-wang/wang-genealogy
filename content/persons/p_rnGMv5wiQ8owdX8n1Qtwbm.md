---
schema: wang-person/v1
id: p_rnGMv5wiQ8owdX8n1Qtwbm
status: active
merged_into: null
display_name: 王嘉言
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wsGgfSNkbXXZWfF69qvWez
        subject_person_id: p_rnGMv5wiQ8owdX8n1Qtwbm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5hP5ZeEMcmZ6Q2BE6m7EUE
          claim_id: c_wsGgfSNkbXXZWfF69qvWez
          source_id: s_d1V3aRDkQunmSQesybG8HJ
          stance: supports
          locator: CBDB:126780
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126780）
          source: &a1
            id: s_d1V3aRDkQunmSQesybG8HJ
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉言（CBDB 126780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126780&o=json
            external_identifier: CBDB:126780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.198Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6sEHxZ1M5FXt7yYbFFe4sB
        subject_person_id: p_rnGMv5wiQ8owdX8n1Qtwbm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1524年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nFhyBKYVQeVDBiaCet8pH1
          claim_id: c_6sEHxZ1M5FXt7yYbFFe4sB
          source_id: s_d1V3aRDkQunmSQesybG8HJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Q2tzuZi6fK4UzyD17zbc1D
        subject_person_id: p_rnGMv5wiQ8owdX8n1Qtwbm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1579年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CYoy52U426jE58crTRruNR
          claim_id: c_Q2tzuZi6fK4UzyD17zbc1D
          source_id: s_d1V3aRDkQunmSQesybG8HJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nhP29yWUevKBwKhM787LNF
        subject_person_id: p_rnGMv5wiQ8owdX8n1Qtwbm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉言（1524年—1579年），明人物。明清進士進士，籍贯江陰，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 126780）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y3ObrRXzQSoJc0nau6bzoL
          claim_id: c_nhP29yWUevKBwKhM787LNF
          source_id: s_d1V3aRDkQunmSQesybG8HJ
          stance: supports
          locator: CBDB:126780
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zeotAMauKDorlyNAzd0rIK
        subject_person_id: p_qo5VK1CeeyLVbmsSuofcsc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rnGMv5wiQ8owdX8n1Qtwbm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mp_uuFxz3VHEFwr_sCJNOy
          claim_id: c_zeotAMauKDorlyNAzd0rIK
          source_id: s_hF1yw9XY7gc18TAMpszZnX
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第六十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hF1yw9XY7gc18TAMpszZnX
            source_type: api_record
            title: 中国历代人物传记资料库：王魯（CBDB 327854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327854&o=json
            external_identifier: CBDB:327854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.264Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qo5VK1CeeyLVbmsSuofcsc
        status: active
        display_name: 王魯
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_PNKYMIcrKaCe6Wk6bz6oku
        subject_person_id: p_5X4eitoFo5XjwFMw6N8aoW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rnGMv5wiQ8owdX8n1Qtwbm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wjtvU--xpFpug1_2cFrADu
          claim_id: c_PNKYMIcrKaCe6Wk6bz6oku
          source_id: s_fSmeJPbUaJvpJQSy5fK9cG
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第六十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fSmeJPbUaJvpJQSy5fK9cG
            source_type: api_record
            title: 中国历代人物传记资料库：王室（CBDB 327851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327851&o=json
            external_identifier: CBDB:327851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.261Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5X4eitoFo5XjwFMw6N8aoW
        status: active
        display_name: 王室
        merged_into_person_id: null
    - claim:
        id: c_wxybOGtt1SA7R60Oe1jlnb
        subject_person_id: p_PdjAKCdWFs1WD9c4aiR9nQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rnGMv5wiQ8owdX8n1Qtwbm
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i2RtN_lJtxKU2blB_Ih4y9
          claim_id: c_wxybOGtt1SA7R60Oe1jlnb
          source_id: s_BnB6ivwajYr5Mu3FG1N4sp
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第六十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BnB6ivwajYr5Mu3FG1N4sp
            source_type: api_record
            title: 中国历代人物传记资料库：王琥（CBDB 327853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327853&o=json
            external_identifier: CBDB:327853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.262Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PdjAKCdWFs1WD9c4aiR9nQ
        status: active
        display_name: 王琥
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_AIz0tBYHOtdq1KT7nuMoZO
        subject_person_id: p_CP6EGKFosPfxiG1YjQE6t5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rnGMv5wiQ8owdX8n1Qtwbm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LVVCc-N-0gG7PhvnVjfr9K
          claim_id: c_AIz0tBYHOtdq1KT7nuMoZO
          source_id: s_U-L-ce14QwgqtpTA-p7wch
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126780 王嘉言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_U-L-ce14QwgqtpTA-p7wch
            source_type: api_record
            title: 中国历代人物传记资料库：王三重（CBDB 327862）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327862&o=json
            external_identifier: CBDB:327862
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CP6EGKFosPfxiG1YjQE6t5
        status: active
        display_name: 王三重
        merged_into_person_id: null
    - claim:
        id: c_lfUeIkVC01RdXnV2sENuYw
        subject_person_id: p_CSyJkiw1MtJqHu1iZ2CXUP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rnGMv5wiQ8owdX8n1Qtwbm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7gNmMPramxmjiZ4sFMAXyZ
          claim_id: c_lfUeIkVC01RdXnV2sENuYw
          source_id: s_BTXMQ9wTICL0W4rb11etcr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126780 王嘉言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BTXMQ9wTICL0W4rb11etcr
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉善（CBDB 327861）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327861&o=json
            external_identifier: CBDB:327861
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CSyJkiw1MtJqHu1iZ2CXUP
        status: active
        display_name: 王嘉善
        merged_into_person_id: null
    - claim:
        id: c_FEMn9SJWHjkxS3L7S4Yfvm
        subject_person_id: p_HEExozV5FFmX2MBPEFU7W3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rnGMv5wiQ8owdX8n1Qtwbm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZLzLODySiGTqHna6qDzzEY
          claim_id: c_FEMn9SJWHjkxS3L7S4Yfvm
          source_id: s_GOIpi5QS629bY_dGtutR5l
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126780 王嘉言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GOIpi5QS629bY_dGtutR5l
            source_type: api_record
            title: 中国历代人物传记资料库：王鍊（CBDB 327858）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327858&o=json
            external_identifier: CBDB:327858
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HEExozV5FFmX2MBPEFU7W3
        status: active
        display_name: 王鍊
        merged_into_person_id: null
    - claim:
        id: c_2Hjq_fV9BdrGYwScrWJepW
        subject_person_id: p_UQ2CAEcY93V7nzCVPmH8am
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rnGMv5wiQ8owdX8n1Qtwbm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jwycDf0oMbAwdS2X3SCnCk
          claim_id: c_2Hjq_fV9BdrGYwScrWJepW
          source_id: s_ZU0NnenoSbnSqwxv3arwdR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126780 王嘉言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZU0NnenoSbnSqwxv3arwdR
            source_type: api_record
            title: 中国历代人物传记资料库：王旒（CBDB 327860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327860&o=json
            external_identifier: CBDB:327860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UQ2CAEcY93V7nzCVPmH8am
        status: active
        display_name: 王旒
        merged_into_person_id: null
    - claim:
        id: c_Z5skuLnf0pvasrXAjRUMMp
        subject_person_id: p_nK8emXNxJJzAR2czmwK7c9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rnGMv5wiQ8owdX8n1Qtwbm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4b6vbbBCV1fTVBPCNVezod
          claim_id: c_Z5skuLnf0pvasrXAjRUMMp
          source_id: s_dkFenWhsFyYNaIzDwox8vM
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126780 王嘉言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dkFenWhsFyYNaIzDwox8vM
            source_type: api_record
            title: 中国历代人物传记资料库：王三策（CBDB 327864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327864&o=json
            external_identifier: CBDB:327864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nK8emXNxJJzAR2czmwK7c9
        status: active
        display_name: 王三策
        merged_into_person_id: null
    - claim:
        id: c_pcGVbyqeBsH1RMwiRLCgIi
        subject_person_id: p_rnGMv5wiQ8owdX8n1Qtwbm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zhidv6byuE2uj5tRHBDfMB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OByp7kD6_vd2fEo9yJUVPT
          claim_id: c_pcGVbyqeBsH1RMwiRLCgIi
          source_id: s_l8DOuPLt0wF9XZDI12YITv
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126780 王嘉言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_l8DOuPLt0wF9XZDI12YITv
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉謀（CBDB 327859）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327859&o=json
            external_identifier: CBDB:327859
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zhidv6byuE2uj5tRHBDfMB
        status: active
        display_name: 王嘉謀
        merged_into_person_id: null
---

# 王嘉言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉言 | accepted |
| birth.date | 1524年 | accepted |
| death.date | 1579年 | accepted |
| bio.summary | 王嘉言（1524年—1579年），明人物。明清進士進士，籍贯江陰，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 126780） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qo5VK1CeeyLVbmsSuofcsc | 王魯 | accepted |
| ancestors | p_5X4eitoFo5XjwFMw6N8aoW | 王室 | accepted |
| ancestors | p_PdjAKCdWFs1WD9c4aiR9nQ | 王琥 | accepted |
| other | p_CP6EGKFosPfxiG1YjQE6t5 | 王三重 | accepted |
| other | p_CSyJkiw1MtJqHu1iZ2CXUP | 王嘉善 | accepted |
| other | p_HEExozV5FFmX2MBPEFU7W3 | 王鍊 | accepted |
| other | p_UQ2CAEcY93V7nzCVPmH8am | 王旒 | accepted |
| other | p_nK8emXNxJJzAR2czmwK7c9 | 王三策 | accepted |
| other | p_zhidv6byuE2uj5tRHBDfMB | 王嘉謀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琥（CBDB 327853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327853&o=json)
- [中国历代人物传记资料库：王嘉謀（CBDB 327859）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327859&o=json)
- [中国历代人物传记资料库：王嘉善（CBDB 327861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327861&o=json)
- [中国历代人物传记资料库：王嘉言（CBDB 126780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126780&o=json)
- [中国历代人物传记资料库：王鍊（CBDB 327858）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327858&o=json)
- [中国历代人物传记资料库：王旒（CBDB 327860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327860&o=json)
- [中国历代人物传记资料库：王魯（CBDB 327854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327854&o=json)
- [中国历代人物传记资料库：王三策（CBDB 327864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327864&o=json)
- [中国历代人物传记资料库：王三重（CBDB 327862）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327862&o=json)
- [中国历代人物传记资料库：王室（CBDB 327851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327851&o=json)
