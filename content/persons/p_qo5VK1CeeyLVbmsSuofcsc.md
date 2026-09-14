---
schema: wang-person/v1
id: p_qo5VK1CeeyLVbmsSuofcsc
status: active
merged_into: null
display_name: 王魯
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_67S6C9z32zqas8dFk7dKDo
        subject_person_id: p_qo5VK1CeeyLVbmsSuofcsc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王魯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TnUHG9Y1KTzWVErXa4Dq49
          claim_id: c_67S6C9z32zqas8dFk7dKDo
          source_id: s_hF1yw9XY7gc18TAMpszZnX
          stance: supports
          locator: CBDB:327854
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327854）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b4TrTUeWEBRy8GBzfpc4jw
        subject_person_id: p_qo5VK1CeeyLVbmsSuofcsc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王魯，明人物。嘉靖四十一年進士，籍贯常熟，曾任州同知。（中国历代人物传记资料库 CBDB 327854）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cuNmQAt_E3d9b4AMWimgdK
          claim_id: c_b4TrTUeWEBRy8GBzfpc4jw
          source_id: s_hF1yw9XY7gc18TAMpszZnX
          stance: supports
          locator: CBDB:327854
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_rnGMv5wiQ8owdX8n1Qtwbm
        status: active
        display_name: 王嘉言
        merged_into_person_id: null
    - claim:
        id: c_sr8BXyEofsetTEEDVWNN53
        subject_person_id: p_qo5VK1CeeyLVbmsSuofcsc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CP6EGKFosPfxiG1YjQE6t5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EmdROeTXKgeDGqRR4UoW9o
          claim_id: c_sr8BXyEofsetTEEDVWNN53
          source_id: s_U-L-ce14QwgqtpTA-p7wch
          stance: supports
          locator: CBDB：兄弟 王嘉言（126780）之父／母 王魯
          quotation: null
          interpretation_note: 由兄弟关系推断：王三重 与 王嘉言 为同胞（CBDB 记「兄」），王嘉言 之父／母即 王三重 之父／母。
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
        id: c_m8nOgCbPjuMNTHvJFInZcr
        subject_person_id: p_qo5VK1CeeyLVbmsSuofcsc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CSyJkiw1MtJqHu1iZ2CXUP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__w5G6GV_OMiQ5UevU0p0L6
          claim_id: c_m8nOgCbPjuMNTHvJFInZcr
          source_id: s_BTXMQ9wTICL0W4rb11etcr
          stance: supports
          locator: CBDB：兄弟 王嘉言（126780）之父／母 王魯
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉善 与 王嘉言 为同胞（CBDB 记「兄」），王嘉言 之父／母即 王嘉善 之父／母。
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
        id: c_VLL1Uo6R7vtDZeg4yGH6QI
        subject_person_id: p_qo5VK1CeeyLVbmsSuofcsc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HEExozV5FFmX2MBPEFU7W3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SLW-haI8NSPrC5AsRSq53e
          claim_id: c_VLL1Uo6R7vtDZeg4yGH6QI
          source_id: s_GOIpi5QS629bY_dGtutR5l
          stance: supports
          locator: CBDB：兄弟 王嘉言（126780）之父／母 王魯
          quotation: null
          interpretation_note: 由兄弟关系推断：王鍊 与 王嘉言 为同胞（CBDB 记「弟」），王嘉言 之父／母即 王鍊 之父／母。
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
        id: c_ZOlGM-E6eMeTdFFoWKM2-q
        subject_person_id: p_qo5VK1CeeyLVbmsSuofcsc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UQ2CAEcY93V7nzCVPmH8am
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3KsShfxFlJJImwxWAsRRWA
          claim_id: c_ZOlGM-E6eMeTdFFoWKM2-q
          source_id: s_ZU0NnenoSbnSqwxv3arwdR
          stance: supports
          locator: CBDB：兄弟 王嘉言（126780）之父／母 王魯
          quotation: null
          interpretation_note: 由兄弟关系推断：王旒 与 王嘉言 为同胞（CBDB 记「弟」），王嘉言 之父／母即 王旒 之父／母。
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
        id: c_Occ1veNojpWNilzobQG5Ml
        subject_person_id: p_qo5VK1CeeyLVbmsSuofcsc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nK8emXNxJJzAR2czmwK7c9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1TodxAUKsJgIoR0GXeekBn
          claim_id: c_Occ1veNojpWNilzobQG5Ml
          source_id: s_dkFenWhsFyYNaIzDwox8vM
          stance: supports
          locator: CBDB：兄弟 王嘉言（126780）之父／母 王魯
          quotation: null
          interpretation_note: 由兄弟关系推断：王三策 与 王嘉言 为同胞（CBDB 记「兄」），王嘉言 之父／母即 王三策 之父／母。
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
        id: c_YowegG7Zs0t88Og0EqtXta
        subject_person_id: p_qo5VK1CeeyLVbmsSuofcsc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zhidv6byuE2uj5tRHBDfMB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-04ukqZgyfGphN_6cZ69F9
          claim_id: c_YowegG7Zs0t88Og0EqtXta
          source_id: s_l8DOuPLt0wF9XZDI12YITv
          stance: supports
          locator: CBDB：兄弟 王嘉言（126780）之父／母 王魯
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉謀 与 王嘉言 为同胞（CBDB 记「弟」），王嘉言 之父／母即 王嘉謀 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王魯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王魯 | accepted |
| bio.summary | 王魯，明人物。嘉靖四十一年進士，籍贯常熟，曾任州同知。（中国历代人物传记资料库 CBDB 327854） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_rnGMv5wiQ8owdX8n1Qtwbm | 王嘉言 | accepted |
| children | p_CP6EGKFosPfxiG1YjQE6t5 | 王三重 | accepted |
| children | p_CSyJkiw1MtJqHu1iZ2CXUP | 王嘉善 | accepted |
| children | p_HEExozV5FFmX2MBPEFU7W3 | 王鍊 | accepted |
| children | p_UQ2CAEcY93V7nzCVPmH8am | 王旒 | accepted |
| children | p_nK8emXNxJJzAR2czmwK7c9 | 王三策 | accepted |
| children | p_zhidv6byuE2uj5tRHBDfMB | 王嘉謀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉謀（CBDB 327859）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327859&o=json)
- [中国历代人物传记资料库：王嘉善（CBDB 327861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327861&o=json)
- [中国历代人物传记资料库：王鍊（CBDB 327858）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327858&o=json)
- [中国历代人物传记资料库：王旒（CBDB 327860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327860&o=json)
- [中国历代人物传记资料库：王魯（CBDB 327854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327854&o=json)
- [中国历代人物传记资料库：王三策（CBDB 327864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327864&o=json)
- [中国历代人物传记资料库：王三重（CBDB 327862）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327862&o=json)
