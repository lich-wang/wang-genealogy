---
schema: wang-person/v1
id: p_ajPx8SrP67WXjyut5BBExs
status: active
merged_into: null
display_name: 王睿
cbdb_id: 314679
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8fmpjLpJbo86gtQ3Ee7BF3
        subject_person_id: p_ajPx8SrP67WXjyut5BBExs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睿，明人物。嘉靖二十九年進士，籍贯東陽。（中国历代人物传记资料库 CBDB 314679）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_i2WT7oCaSHrjBAqJokjqLC
          claim_id: c_8fmpjLpJbo86gtQ3Ee7BF3
          source_id: s_fGCPjzVEA74N9JZyJDe8YP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_fGCPjzVEA74N9JZyJDe8YP
            source_type: api_record
            title: 维基数据：王睿（Q45442408）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45442408
            external_identifier: Q45442408
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:09.271Z
            metadata_json: null
        - id: cs_T_L2E09iICkvyBtA3eTWJe
          claim_id: c_8fmpjLpJbo86gtQ3Ee7BF3
          source_id: s_Fgk8mdNb9CUTVmfGXxF46A
          stance: supports
          locator: CBDB:314679
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Fgk8mdNb9CUTVmfGXxF46A
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王睿（314679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314679&o=json
            external_identifier: CBDB:314679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:09.449Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_97qaQS6hs8KRofe8MY5SRd
        subject_person_id: p_ajPx8SrP67WXjyut5BBExs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睿
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6mhxddTpQ2w7V9XzyPeQqd
          claim_id: c_97qaQS6hs8KRofe8MY5SRd
          source_id: s_fGCPjzVEA74N9JZyJDe8YP
          stance: supports
          locator: Q45442408
          quotation: null
          interpretation_note: null
          source:
            id: s_fGCPjzVEA74N9JZyJDe8YP
            source_type: api_record
            title: 维基数据：王睿（Q45442408）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45442408
            external_identifier: Q45442408
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:09.271Z
            metadata_json: null
        - id: cs_uo1i7f9pAZDsj6kiNqsbhL
          claim_id: c_97qaQS6hs8KRofe8MY5SRd
          source_id: s_Fgk8mdNb9CUTVmfGXxF46A
          stance: supports
          locator: Q45442408
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mBPjx4qVx8uMCrxUpZdSEE
        subject_person_id: p_XafvmbqFiWanFhRfKjJh1p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ajPx8SrP67WXjyut5BBExs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g2emKDW9J94nS2S8FPtMsH
          claim_id: c_mBPjx4qVx8uMCrxUpZdSEE
          source_id: s_fGCPjzVEA74N9JZyJDe8YP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_Dd8dKsAWhae6TMoGzVhFoJ
          claim_id: c_mBPjx4qVx8uMCrxUpZdSEE
          source_id: s_V82c4Y2GCs47mYwENCUT7M
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_V82c4Y2GCs47mYwENCUT7M
            source_type: api_record
            title: 维基数据：王通（Q45442342）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45442342
            external_identifier: Q45442342
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:17.760Z
            metadata_json: null
      object_person:
        id: p_XafvmbqFiWanFhRfKjJh1p
        status: active
        display_name: 王通
        merged_into_person_id: null
  children:
    - claim:
        id: c_RV5FvhjL5nv9WvgpnqDLmA
        subject_person_id: p_ajPx8SrP67WXjyut5BBExs
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_jWRBXNs9hNQYimujJ64LcZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FwY4fViPEWbtAYPBCHbCmr
          claim_id: c_RV5FvhjL5nv9WvgpnqDLmA
          source_id: s_fGCPjzVEA74N9JZyJDe8YP
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fGCPjzVEA74N9JZyJDe8YP
            source_type: api_record
            title: 维基数据：王睿（Q45442408）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45442408
            external_identifier: Q45442408
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:09.271Z
            metadata_json: null
        - id: cs_NKzdPNwAjrdSYatqstQHii
          claim_id: c_RV5FvhjL5nv9WvgpnqDLmA
          source_id: s_vmbSm4M2V7WEGi1zAPPHbV
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vmbSm4M2V7WEGi1zAPPHbV
            source_type: api_record
            title: 维基数据：王𫓧（Q15934129）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934129
            external_identifier: Q15934129
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:28.909Z
            metadata_json: null
      object_person:
        id: p_jWRBXNs9hNQYimujJ64LcZ
        status: active
        display_name: 王𫓧
        merged_into_person_id: null
    - claim:
        id: c__HIUS8DGQzeSb_nlbeBtBd
        subject_person_id: p_ajPx8SrP67WXjyut5BBExs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KdnEK5JvxzCLuhzpo1b35X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zPKLBMGVifz3pyF9TqlAVk
          claim_id: c__HIUS8DGQzeSb_nlbeBtBd
          source_id: s_PFzSq6kQwtCdVXYvMpdpPB
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第二百名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PFzSq6kQwtCdVXYvMpdpPB
            source_type: api_record
            title: 中国历代人物传记资料库：王鈇（CBDB 67912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67912&o=json
            external_identifier: CBDB:67912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.029Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KdnEK5JvxzCLuhzpo1b35X
        status: active
        display_name: 王鈇
        merged_into_person_id: null
    - claim:
        id: c_gSTh6GI1McS36OBs53dQTi
        subject_person_id: p_ajPx8SrP67WXjyut5BBExs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QJK9XJ9ZEXTCk6iked9SP5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zT-6uRSXKW-DTF0o2DXbAY
          claim_id: c_gSTh6GI1McS36OBs53dQTi
          source_id: s_10aTJDp4rHE-9ENifUuyLG
          stance: supports
          locator: CBDB：兄弟 王鈇（67912）之父／母 王睿
          quotation: null
          interpretation_note: 由兄弟关系推断：王鍭 与 王鈇 为同胞（CBDB 记「兄」），王鈇 之父／母即 王鍭 之父／母。
          source:
            id: s_10aTJDp4rHE-9ENifUuyLG
            source_type: api_record
            title: 中国历代人物传记资料库：王鍭（CBDB 314687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314687&o=json
            external_identifier: CBDB:314687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QJK9XJ9ZEXTCk6iked9SP5
        status: active
        display_name: 王鍭
        merged_into_person_id: null
    - claim:
        id: c_G_MLp4L7GsYGI2oZ4hwLD6
        subject_person_id: p_ajPx8SrP67WXjyut5BBExs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dcZKDCpxxun7GCXzDXEhJt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wTPfErWVrc00NmLTo9xRzU
          claim_id: c_G_MLp4L7GsYGI2oZ4hwLD6
          source_id: s_frXPhK1wDtynP4iTSj_hFx
          stance: supports
          locator: CBDB：兄弟 王鈇（67912）之父／母 王睿
          quotation: null
          interpretation_note: 由兄弟关系推断：王鉞 与 王鈇 为同胞（CBDB 记「弟」），王鈇 之父／母即 王鉞 之父／母。
          source:
            id: s_frXPhK1wDtynP4iTSj_hFx
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 314683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314683&o=json
            external_identifier: CBDB:314683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dcZKDCpxxun7GCXzDXEhJt
        status: active
        display_name: 王鉞
        merged_into_person_id: null
    - claim:
        id: c_kjt9xTatODy6zeFKqdmcNu
        subject_person_id: p_ajPx8SrP67WXjyut5BBExs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qCjLfAKLwFwjMUFYHPpXw6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TQSvum-b1EhXRTG6bW6rS1
          claim_id: c_kjt9xTatODy6zeFKqdmcNu
          source_id: s_1xTI8u-b3wvsft9Pb36N8M
          stance: supports
          locator: CBDB：兄弟 王鈇（67912）之父／母 王睿
          quotation: null
          interpretation_note: 由兄弟关系推断：王釗 与 王鈇 为同胞（CBDB 记「弟」），王鈇 之父／母即 王釗 之父／母。
          source:
            id: s_1xTI8u-b3wvsft9Pb36N8M
            source_type: api_record
            title: 中国历代人物传记资料库：王釗（CBDB 314685）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314685&o=json
            external_identifier: CBDB:314685
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qCjLfAKLwFwjMUFYHPpXw6
        status: active
        display_name: 王釗
        merged_into_person_id: null
    - claim:
        id: c_sRyDMad26J_sY6IC-5zmll
        subject_person_id: p_ajPx8SrP67WXjyut5BBExs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x1y2Sco2EiGeft7UMMrtKD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H2o_nvFWefqF-8I6QC3OlT
          claim_id: c_sRyDMad26J_sY6IC-5zmll
          source_id: s_07mKGqRcGg1jvB-uEDt4I-
          stance: supports
          locator: CBDB：兄弟 王鈇（67912）之父／母 王睿
          quotation: null
          interpretation_note: 由兄弟关系推断：王鐸 与 王鈇 为同胞（CBDB 记「弟」），王鈇 之父／母即 王鐸 之父／母。
          source:
            id: s_07mKGqRcGg1jvB-uEDt4I-
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 314686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314686&o=json
            external_identifier: CBDB:314686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_x1y2Sco2EiGeft7UMMrtKD
        status: active
        display_name: 王鐸
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王睿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王睿，明人物。嘉靖二十九年進士，籍贯東陽。（中国历代人物传记资料库 CBDB 314679） | accepted |
| name.primary | 王睿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XafvmbqFiWanFhRfKjJh1p | 王通 | accepted |
| children | p_jWRBXNs9hNQYimujJ64LcZ | 王𫓧 | accepted |
| children | p_KdnEK5JvxzCLuhzpo1b35X | 王鈇 | accepted |
| children | p_QJK9XJ9ZEXTCk6iked9SP5 | 王鍭 | accepted |
| children | p_dcZKDCpxxun7GCXzDXEhJt | 王鉞 | accepted |
| children | p_qCjLfAKLwFwjMUFYHPpXw6 | 王釗 | accepted |
| children | p_x1y2Sco2EiGeft7UMMrtKD | 王鐸 | accepted |

## 外部来源

- [维基数据：王𫓧（Q15934129）](https://www.wikidata.org/wiki/Q15934129)
- [维基数据：王睿（Q45442408）](https://www.wikidata.org/wiki/Q45442408)
- [维基数据：王通（Q45442342）](https://www.wikidata.org/wiki/Q45442342)
- [中国历代人物传记资料库：王鐸（CBDB 314686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314686&o=json)
- [中国历代人物传记资料库：王鈇（CBDB 67912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67912&o=json)
- [中国历代人物传记资料库：王鍭（CBDB 314687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314687&o=json)
- [中国历代人物传记资料库：王鉞（CBDB 314683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314683&o=json)
- [中国历代人物传记资料库：王釗（CBDB 314685）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314685&o=json)
- [CBDB 中国历代人物传记资料库：王睿（314679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314679&o=json)
