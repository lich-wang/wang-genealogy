---
schema: wang-person/v1
id: p_rfGZtWQ8pfDBATdxzFKLBp
status: active
merged_into: null
display_name: 王榮
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a4MWaLVE5hFa4tLh13ZgPR
        subject_person_id: p_rfGZtWQ8pfDBATdxzFKLBp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G8BNyNy2byy1aG5asFnQ1n
          claim_id: c_a4MWaLVE5hFa4tLh13ZgPR
          source_id: s_4N1QCK7dLGi7viStf4QAuR
          stance: supports
          locator: CBDB:237975
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237975）
          source: &a1
            id: s_4N1QCK7dLGi7viStf4QAuR
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 237975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237975&o=json
            external_identifier: CBDB:237975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.866Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w31R4iDkYcuhnB266tnD11
        subject_person_id: p_rfGZtWQ8pfDBATdxzFKLBp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮，明人物。成化二年進士，籍贯威縣。（中国历代人物传记资料库 CBDB 237975）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9IbnADf2d7Sd75NDxxWvrm
          claim_id: c_w31R4iDkYcuhnB266tnD11
          source_id: s_4N1QCK7dLGi7viStf4QAuR
          stance: supports
          locator: CBDB:237975
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_zwQEWRZNWMOaUjkDlIkc9P
        subject_person_id: p_rfGZtWQ8pfDBATdxzFKLBp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XbUzXxzW1NKiE1b2phZgUS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O4FvviVDPi1SM9_qx5k_52
          claim_id: c_zwQEWRZNWMOaUjkDlIkc9P
          source_id: s_4N1QCK7dLGi7viStf4QAuR
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第九十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XbUzXxzW1NKiE1b2phZgUS
        status: active
        display_name: 王濬
        merged_into_person_id: null
    - claim:
        id: c_EplfVpRrzLFcdODOyMqtAG
        subject_person_id: p_rfGZtWQ8pfDBATdxzFKLBp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3yzEBQaW4CweFF5zP5io5X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mRmi4CC-h9oHzAiHIcenW4
          claim_id: c_EplfVpRrzLFcdODOyMqtAG
          source_id: s_hTeb4GRMLThgwpayB8HzkO
          stance: supports
          locator: CBDB：兄弟 王濬（126841）之父／母 王榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王寬 与 王濬 为同胞（CBDB 记「弟」），王濬 之父／母即 王寬 之父／母。
          source:
            id: s_hTeb4GRMLThgwpayB8HzkO
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 238020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238020&o=json
            external_identifier: CBDB:238020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3yzEBQaW4CweFF5zP5io5X
        status: active
        display_name: 王寬
        merged_into_person_id: null
    - claim:
        id: c_h_iebETmzQNe3qVHGQx6gM
        subject_person_id: p_rfGZtWQ8pfDBATdxzFKLBp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PRJuz6g1EPua8SAJHMVxc8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t-tDnMvVQvm280u6qlvVS9
          claim_id: c_h_iebETmzQNe3qVHGQx6gM
          source_id: s_pVYoLt12lIQ8YWpiIw85BZ
          stance: supports
          locator: CBDB：兄弟 王濬（126841）之父／母 王榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王振 与 王濬 为同胞（CBDB 记「弟」），王濬 之父／母即 王振 之父／母。
          source:
            id: s_pVYoLt12lIQ8YWpiIw85BZ
            source_type: api_record
            title: 中国历代人物传记资料库：王振（CBDB 238075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238075&o=json
            external_identifier: CBDB:238075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PRJuz6g1EPua8SAJHMVxc8
        status: active
        display_name: 王振
        merged_into_person_id: null
    - claim:
        id: c_iCrQ25tuP-3ibgg8N6KkL4
        subject_person_id: p_rfGZtWQ8pfDBATdxzFKLBp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U91Yi4XsjUnTQKezbKmFZ4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rQAOlypgRbNOai1T_f5Ofb
          claim_id: c_iCrQ25tuP-3ibgg8N6KkL4
          source_id: s_ZDXnc54ONlYy116mgCPvHL
          stance: supports
          locator: CBDB：兄弟 王濬（126841）之父／母 王榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王友才 与 王濬 为同胞（CBDB 记「弟」），王濬 之父／母即 王友才 之父／母。
          source:
            id: s_ZDXnc54ONlYy116mgCPvHL
            source_type: api_record
            title: 中国历代人物传记资料库：王友才（CBDB 238031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238031&o=json
            external_identifier: CBDB:238031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U91Yi4XsjUnTQKezbKmFZ4
        status: active
        display_name: 王友才
        merged_into_person_id: null
    - claim:
        id: c_sn53XoXaFzu3l7N4d2QZqR
        subject_person_id: p_rfGZtWQ8pfDBATdxzFKLBp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f13BewmCUu5tL2gG3mx3vv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zmzK6OJbCCsxxh0YSrJdZK
          claim_id: c_sn53XoXaFzu3l7N4d2QZqR
          source_id: s_VR5x7HOFlXvRNQe1otBoMZ
          stance: supports
          locator: CBDB：兄弟 王濬（126841）之父／母 王榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王通 与 王濬 为同胞（CBDB 记「弟」），王濬 之父／母即 王通 之父／母。
          source:
            id: s_VR5x7HOFlXvRNQe1otBoMZ
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 238053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238053&o=json
            external_identifier: CBDB:238053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_f13BewmCUu5tL2gG3mx3vv
        status: active
        display_name: 王通
        merged_into_person_id: null
    - claim:
        id: c_I4ZwTJaRKm3YD2CrHH8GXL
        subject_person_id: p_rfGZtWQ8pfDBATdxzFKLBp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rFDtpHcmA3zSJdT1XjKQ9W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8p-j-WuM0n7YVIxAylPHq7
          claim_id: c_I4ZwTJaRKm3YD2CrHH8GXL
          source_id: s_q5EBLgX64IPfRHytyB9yWK
          stance: supports
          locator: CBDB：兄弟 王濬（126841）之父／母 王榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王恭 与 王濬 为同胞（CBDB 记「弟」），王濬 之父／母即 王恭 之父／母。
          source:
            id: s_q5EBLgX64IPfRHytyB9yWK
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 238064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238064&o=json
            external_identifier: CBDB:238064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rFDtpHcmA3zSJdT1XjKQ9W
        status: active
        display_name: 王恭
        merged_into_person_id: null
    - claim:
        id: c_gDMzovPDWS7fpKBMK6fgAM
        subject_person_id: p_rfGZtWQ8pfDBATdxzFKLBp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_stVWCV7M3bfYpduLX48CKy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J3FX_dQ9sNK4gxzJ7G4-nE
          claim_id: c_gDMzovPDWS7fpKBMK6fgAM
          source_id: s_rEyptl88OSnTXuOKGvy6gy
          stance: supports
          locator: CBDB：兄弟 王濬（126841）之父／母 王榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王澤 与 王濬 为同胞（CBDB 记「弟」），王濬 之父／母即 王澤 之父／母。
          source:
            id: s_rEyptl88OSnTXuOKGvy6gy
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 238042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238042&o=json
            external_identifier: CBDB:238042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_stVWCV7M3bfYpduLX48CKy
        status: active
        display_name: 王澤
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮 | accepted |
| bio.summary | 王榮，明人物。成化二年進士，籍贯威縣。（中国历代人物传记资料库 CBDB 237975） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_XbUzXxzW1NKiE1b2phZgUS | 王濬 | accepted |
| children | p_3yzEBQaW4CweFF5zP5io5X | 王寬 | accepted |
| children | p_PRJuz6g1EPua8SAJHMVxc8 | 王振 | accepted |
| children | p_U91Yi4XsjUnTQKezbKmFZ4 | 王友才 | accepted |
| children | p_f13BewmCUu5tL2gG3mx3vv | 王通 | accepted |
| children | p_rFDtpHcmA3zSJdT1XjKQ9W | 王恭 | accepted |
| children | p_stVWCV7M3bfYpduLX48CKy | 王澤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恭（CBDB 238064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238064&o=json)
- [中国历代人物传记资料库：王寬（CBDB 238020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238020&o=json)
- [中国历代人物传记资料库：王榮（CBDB 237975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237975&o=json)
- [中国历代人物传记资料库：王通（CBDB 238053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238053&o=json)
- [中国历代人物传记资料库：王友才（CBDB 238031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238031&o=json)
- [中国历代人物传记资料库：王澤（CBDB 238042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238042&o=json)
- [中国历代人物传记资料库：王振（CBDB 238075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238075&o=json)
