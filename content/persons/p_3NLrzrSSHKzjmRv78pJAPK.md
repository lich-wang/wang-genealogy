---
schema: wang-person/v1
id: p_3NLrzrSSHKzjmRv78pJAPK
status: active
merged_into: null
display_name: 王士逵
cbdb_id: 336303
revision: 11
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eQTZa73tw77FnR4F8qHLSe
        subject_person_id: p_3NLrzrSSHKzjmRv78pJAPK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士逵，明人物。隆慶二年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 336303）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_2zhVrr5oasw1cWq19GpKPw
          claim_id: c_eQTZa73tw77FnR4F8qHLSe
          source_id: s_ZEzLzBt8XxPVyNeRGY1FvK
          stance: supports
          locator: CBDB:336303
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZEzLzBt8XxPVyNeRGY1FvK
            source_type: api_record
            title: 中国历代人物传记资料库：王士逵（CBDB 336303）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336303&o=json
            external_identifier: CBDB:336303
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1jTHU9znWxAk957dG85tbJ
        subject_person_id: p_3NLrzrSSHKzjmRv78pJAPK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士逵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9B3pgr2Qjjhf38ynQQCp9S
          claim_id: c_1jTHU9znWxAk957dG85tbJ
          source_id: s_ZEzLzBt8XxPVyNeRGY1FvK
          stance: supports
          locator: CBDB:336303
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_99crtNrT2UbTVX9pUi1G07
        subject_person_id: p_3NLrzrSSHKzjmRv78pJAPK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_viaM6m196hS8EVYS6L8gg8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_huZLz-wVMycE4IhqPGd_SN
          claim_id: c_99crtNrT2UbTVX9pUi1G07
          source_id: s_ZEzLzBt8XxPVyNeRGY1FvK
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百八十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZEzLzBt8XxPVyNeRGY1FvK
            source_type: api_record
            title: 中国历代人物传记资料库：王士逵（CBDB 336303）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336303&o=json
            external_identifier: CBDB:336303
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_viaM6m196hS8EVYS6L8gg8
        status: active
        display_name: 王宣化
        merged_into_person_id: null
    - claim:
        id: c_o9-9TtT5kHnszlSiN0isDT
        subject_person_id: p_3NLrzrSSHKzjmRv78pJAPK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6J8oSnKSNtHfh1yzZiK5kg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UzigSm4wJtR-RpqhKZIJdr
          claim_id: c_o9-9TtT5kHnszlSiN0isDT
          source_id: s_s3Qb7CddeBisg38ZHI2lp3
          stance: supports
          locator: CBDB：兄弟 王宣化（205636）之父／母 王士逵
          quotation: null
          interpretation_note: 由兄弟关系推断：王德化 与 王宣化 为同胞（CBDB 记「兄」），王宣化 之父／母即 王德化 之父／母。
          source:
            id: s_s3Qb7CddeBisg38ZHI2lp3
            source_type: api_record
            title: 中国历代人物传记资料库：王德化（CBDB 336315）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336315&o=json
            external_identifier: CBDB:336315
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6J8oSnKSNtHfh1yzZiK5kg
        status: active
        display_name: 王德化
        merged_into_person_id: null
    - claim:
        id: c_L4poqeNEdcWdCSh7juA5W1
        subject_person_id: p_3NLrzrSSHKzjmRv78pJAPK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_73pZsW4xoAzx28W5LWhaP9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FcdjK_v8CmXFrTdINwRD3X
          claim_id: c_L4poqeNEdcWdCSh7juA5W1
          source_id: s_KvEmS9bBxRW1OZo97BiHC_
          stance: supports
          locator: CBDB：兄弟 王宣化（205636）之父／母 王士逵
          quotation: null
          interpretation_note: 由兄弟关系推断：王雨化 与 王宣化 为同胞（CBDB 记「兄」），王宣化 之父／母即 王雨化 之父／母。
          source:
            id: s_KvEmS9bBxRW1OZo97BiHC_
            source_type: api_record
            title: 中国历代人物传记资料库：王雨化（CBDB 336313）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336313&o=json
            external_identifier: CBDB:336313
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_73pZsW4xoAzx28W5LWhaP9
        status: active
        display_name: 王雨化
        merged_into_person_id: null
    - claim:
        id: c_4rJYHhFArnPN-k2McMWtZ_
        subject_person_id: p_3NLrzrSSHKzjmRv78pJAPK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CJhV3iHxp58rQ5FFcEEMAN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fuAR2xnedV48X8E1K20YvV
          claim_id: c_4rJYHhFArnPN-k2McMWtZ_
          source_id: s_Ztm-UwutIwop01Ax1EhnN4
          stance: supports
          locator: CBDB：兄弟 王宣化（205636）之父／母 王士逵
          quotation: null
          interpretation_note: 由兄弟关系推断：王替化 与 王宣化 为同胞（CBDB 记「兄」），王宣化 之父／母即 王替化 之父／母。
          source:
            id: s_Ztm-UwutIwop01Ax1EhnN4
            source_type: api_record
            title: 中国历代人物传记资料库：王替化（CBDB 336311）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336311&o=json
            external_identifier: CBDB:336311
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CJhV3iHxp58rQ5FFcEEMAN
        status: active
        display_name: 王替化
        merged_into_person_id: null
    - claim:
        id: c_cHY6FRxJKW-6KueSZycyW3
        subject_person_id: p_3NLrzrSSHKzjmRv78pJAPK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DNwgA2Ggo7xNy7LzH6H4Ug
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t6JmAbFJuWqHRQbKMY4SJV
          claim_id: c_cHY6FRxJKW-6KueSZycyW3
          source_id: s_sr1UW7T3k4G9_tjT6yWuTz
          stance: supports
          locator: CBDB：兄弟 王宣化（205636）之父／母 王士逵
          quotation: null
          interpretation_note: 由兄弟关系推断：王如化 与 王宣化 为同胞（CBDB 记「兄」），王宣化 之父／母即 王如化 之父／母。
          source:
            id: s_sr1UW7T3k4G9_tjT6yWuTz
            source_type: api_record
            title: 中国历代人物传记资料库：王如化（CBDB 336308）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336308&o=json
            external_identifier: CBDB:336308
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DNwgA2Ggo7xNy7LzH6H4Ug
        status: active
        display_name: 王如化
        merged_into_person_id: null
    - claim:
        id: c__nUssxAk-JvuthWwTe34oH
        subject_person_id: p_3NLrzrSSHKzjmRv78pJAPK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K8N3JYXyV4KQhFBG5Yeqz6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_12Mxi4n1yUDmSMD_vBnIZR
          claim_id: c__nUssxAk-JvuthWwTe34oH
          source_id: s_lYSmb8PdXpTOf95CgFTBEH
          stance: supports
          locator: CBDB：兄弟 王宣化（205636）之父／母 王士逵
          quotation: null
          interpretation_note: 由兄弟关系推断：王推化 与 王宣化 为同胞（CBDB 记「弟」），王宣化 之父／母即 王推化 之父／母。
          source:
            id: s_lYSmb8PdXpTOf95CgFTBEH
            source_type: api_record
            title: 中国历代人物传记资料库：王推化（CBDB 336306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336306&o=json
            external_identifier: CBDB:336306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_K8N3JYXyV4KQhFBG5Yeqz6
        status: active
        display_name: 王推化
        merged_into_person_id: null
    - claim:
        id: c_Ygojk_pqBUXkerkk22Hmbj
        subject_person_id: p_3NLrzrSSHKzjmRv78pJAPK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WAAAqa4AXCz8dRLVRMAbmW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fw-QXSQt10I7UWIkvw5itD
          claim_id: c_Ygojk_pqBUXkerkk22Hmbj
          source_id: s_p6dwuFTvN4DIoJ8mkf4ayW
          stance: supports
          locator: CBDB：兄弟 王宣化（205636）之父／母 王士逵
          quotation: null
          interpretation_note: 由兄弟关系推断：王運化 与 王宣化 为同胞（CBDB 记「兄」），王宣化 之父／母即 王運化 之父／母。
          source:
            id: s_p6dwuFTvN4DIoJ8mkf4ayW
            source_type: api_record
            title: 中国历代人物传记资料库：王運化（CBDB 336312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336312&o=json
            external_identifier: CBDB:336312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WAAAqa4AXCz8dRLVRMAbmW
        status: active
        display_name: 王運化
        merged_into_person_id: null
    - claim:
        id: c_VYlWTRB9K_I55wThisJdQC
        subject_person_id: p_3NLrzrSSHKzjmRv78pJAPK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z7ZY6f1BLeHfACq1Q6k7Y7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AeWTJP-0V4Q8GxwE4Vh4Ha
          claim_id: c_VYlWTRB9K_I55wThisJdQC
          source_id: s_IdJzQ0heBhdhS4tjFWPMtd
          stance: supports
          locator: CBDB：兄弟 王宣化（205636）之父／母 王士逵
          quotation: null
          interpretation_note: 由兄弟关系推断：王永化 与 王宣化 为同胞（CBDB 记「兄」），王宣化 之父／母即 王永化 之父／母。
          source:
            id: s_IdJzQ0heBhdhS4tjFWPMtd
            source_type: api_record
            title: 中国历代人物传记资料库：王永化（CBDB 336314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336314&o=json
            external_identifier: CBDB:336314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Z7ZY6f1BLeHfACq1Q6k7Y7
        status: active
        display_name: 王永化
        merged_into_person_id: null
    - claim:
        id: c__izNFHSUMYjxsq1zTUMKvf
        subject_person_id: p_3NLrzrSSHKzjmRv78pJAPK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nCrxFgDnWbo6QZrG4H7Ki3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3ImB1CHCoTUTZo5vbKpqcm
          claim_id: c__izNFHSUMYjxsq1zTUMKvf
          source_id: s_kbB53MPq8_Wqy8ThPgGagI
          stance: supports
          locator: CBDB：兄弟 王宣化（205636）之父／母 王士逵
          quotation: null
          interpretation_note: 由兄弟关系推断：王孚化 与 王宣化 为同胞（CBDB 记「兄」），王宣化 之父／母即 王孚化 之父／母。
          source:
            id: s_kbB53MPq8_Wqy8ThPgGagI
            source_type: api_record
            title: 中国历代人物传记资料库：王孚化（CBDB 336307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336307&o=json
            external_identifier: CBDB:336307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nCrxFgDnWbo6QZrG4H7Ki3
        status: active
        display_name: 王孚化
        merged_into_person_id: null
    - claim:
        id: c_tRcWximvYnut7Bdlwwcfsi
        subject_person_id: p_3NLrzrSSHKzjmRv78pJAPK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ps6PQC3K74XifXLFgCnEzU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iKlXQ8zFoYM2-7gXZfsx5X
          claim_id: c_tRcWximvYnut7Bdlwwcfsi
          source_id: s_MCvSzGpCcSLGyrnhuQuDMN
          stance: supports
          locator: CBDB：兄弟 王宣化（205636）之父／母 王士逵
          quotation: null
          interpretation_note: 由兄弟关系推断：王觀化 与 王宣化 为同胞（CBDB 记「兄」），王宣化 之父／母即 王觀化 之父／母。
          source:
            id: s_MCvSzGpCcSLGyrnhuQuDMN
            source_type: api_record
            title: 中国历代人物传记资料库：王觀化（CBDB 336309）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336309&o=json
            external_identifier: CBDB:336309
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ps6PQC3K74XifXLFgCnEzU
        status: active
        display_name: 王觀化
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士逵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士逵，明人物。隆慶二年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 336303） | accepted |
| name.primary | 王士逵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_viaM6m196hS8EVYS6L8gg8 | 王宣化 | accepted |
| children | p_6J8oSnKSNtHfh1yzZiK5kg | 王德化 | accepted |
| children | p_73pZsW4xoAzx28W5LWhaP9 | 王雨化 | accepted |
| children | p_CJhV3iHxp58rQ5FFcEEMAN | 王替化 | accepted |
| children | p_DNwgA2Ggo7xNy7LzH6H4Ug | 王如化 | accepted |
| children | p_K8N3JYXyV4KQhFBG5Yeqz6 | 王推化 | accepted |
| children | p_WAAAqa4AXCz8dRLVRMAbmW | 王運化 | accepted |
| children | p_Z7ZY6f1BLeHfACq1Q6k7Y7 | 王永化 | accepted |
| children | p_nCrxFgDnWbo6QZrG4H7Ki3 | 王孚化 | accepted |
| children | p_ps6PQC3K74XifXLFgCnEzU | 王觀化 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德化（CBDB 336315）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336315&o=json)
- [中国历代人物传记资料库：王孚化（CBDB 336307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336307&o=json)
- [中国历代人物传记资料库：王觀化（CBDB 336309）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336309&o=json)
- [中国历代人物传记资料库：王如化（CBDB 336308）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336308&o=json)
- [中国历代人物传记资料库：王士逵（CBDB 336303）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336303&o=json)
- [中国历代人物传记资料库：王替化（CBDB 336311）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336311&o=json)
- [中国历代人物传记资料库：王推化（CBDB 336306）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336306&o=json)
- [中国历代人物传记资料库：王永化（CBDB 336314）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336314&o=json)
- [中国历代人物传记资料库：王雨化（CBDB 336313）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336313&o=json)
- [中国历代人物传记资料库：王運化（CBDB 336312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336312&o=json)
