---
schema: wang-person/v1
id: p_irooaMCyG8JBBsSKCCr16W
status: active
merged_into: null
display_name: 王一善
revision: 13
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BiVWQv9sWdPmMjYjBunHAJ
        subject_person_id: p_irooaMCyG8JBBsSKCCr16W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dnkudpqx8uXpHE1oC6UnyJ
          claim_id: c_BiVWQv9sWdPmMjYjBunHAJ
          source_id: s_dqCYFtVdCivkzFi6Cp9Q4y
          stance: supports
          locator: CBDB:308736
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（308736）
          source: &a1
            id: s_dqCYFtVdCivkzFi6Cp9Q4y
            source_type: api_record
            title: 中国历代人物传记资料库：王一善（CBDB 308736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308736&o=json
            external_identifier: CBDB:308736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jwL4EFmfJmBYyMxnJWqWwu
        subject_person_id: p_irooaMCyG8JBBsSKCCr16W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一善，明人物。嘉靖二十六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 308736）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TMVk-rgmBTvSGC7fspaRdr
          claim_id: c_jwL4EFmfJmBYyMxnJWqWwu
          source_id: s_dqCYFtVdCivkzFi6Cp9Q4y
          stance: supports
          locator: CBDB:308736
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_1aTTVPK28DOLBcQBKF7oPy
        subject_person_id: p_irooaMCyG8JBBsSKCCr16W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LPzYRgFrvHZtoR8m7zKq9v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jzmouYMQ6cEN712F_J5cfQ
          claim_id: c_1aTTVPK28DOLBcQBKF7oPy
          source_id: s_dqCYFtVdCivkzFi6Cp9Q4y
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第二十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LPzYRgFrvHZtoR8m7zKq9v
        status: active
        display_name: 王時槐
        merged_into_person_id: null
    - claim:
        id: c_MlbLix16AB3X2Lciv2O4Gt
        subject_person_id: p_irooaMCyG8JBBsSKCCr16W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2eMHAS5LFDZtP66je2KBzU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ey291MiC6sBwGJffYWj8rR
          claim_id: c_MlbLix16AB3X2Lciv2O4Gt
          source_id: s_SeFnqt9ee0I44eoPEtK32-
          stance: supports
          locator: CBDB：兄弟 王時槐（126653）之父／母 王一善
          quotation: null
          interpretation_note: 由兄弟关系推断：王時梅 与 王時槐 为同胞（CBDB 记「弟」），王時槐 之父／母即 王時梅 之父／母。
          source:
            id: s_SeFnqt9ee0I44eoPEtK32-
            source_type: api_record
            title: 中国历代人物传记资料库：王時梅（CBDB 308743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308743&o=json
            external_identifier: CBDB:308743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2eMHAS5LFDZtP66je2KBzU
        status: active
        display_name: 王時梅
        merged_into_person_id: null
    - claim:
        id: c_vyrunPQeOVOyc7y5piyb1o
        subject_person_id: p_irooaMCyG8JBBsSKCCr16W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BFFpmbsbBqF81LxAmvvQoo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HTUuIPNvMJ6LYyWGifelMs
          claim_id: c_vyrunPQeOVOyc7y5piyb1o
          source_id: s_mKX87FC-TGugUgOHtuRVGc
          stance: supports
          locator: CBDB：兄弟 王時槐（126653）之父／母 王一善
          quotation: null
          interpretation_note: 由兄弟关系推断：王時楠 与 王時槐 为同胞（CBDB 记「兄」），王時槐 之父／母即 王時楠 之父／母。
          source:
            id: s_mKX87FC-TGugUgOHtuRVGc
            source_type: api_record
            title: 中国历代人物传记资料库：王時楠（CBDB 308752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308752&o=json
            external_identifier: CBDB:308752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BFFpmbsbBqF81LxAmvvQoo
        status: active
        display_name: 王時楠
        merged_into_person_id: null
    - claim:
        id: c_4PnskOYndhCcA8RawwR8FK
        subject_person_id: p_irooaMCyG8JBBsSKCCr16W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DGUd8ZLCHnTj9z5r8CrKp3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ScLmJfjuG1chCwq_J2EX2z
          claim_id: c_4PnskOYndhCcA8RawwR8FK
          source_id: s_3nsK_cqGO5jGxfiwDhviwT
          stance: supports
          locator: CBDB：兄弟 王時槐（126653）之父／母 王一善
          quotation: null
          interpretation_note: 由兄弟关系推断：王時柏 与 王時槐 为同胞（CBDB 记「弟」），王時槐 之父／母即 王時柏 之父／母。
          source:
            id: s_3nsK_cqGO5jGxfiwDhviwT
            source_type: api_record
            title: 中国历代人物传记资料库：王時柏（CBDB 308745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308745&o=json
            external_identifier: CBDB:308745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DGUd8ZLCHnTj9z5r8CrKp3
        status: active
        display_name: 王時柏
        merged_into_person_id: null
    - claim:
        id: c_ims8TG2Nen2_rHjqWYTZgb
        subject_person_id: p_irooaMCyG8JBBsSKCCr16W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Qb4sm1YTpasuXLiEN1oacY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kaNBL8FHIR2aRlWl8aPcwq
          claim_id: c_ims8TG2Nen2_rHjqWYTZgb
          source_id: s_fflSM-tA8nYOKWNi_2dAcF
          stance: supports
          locator: CBDB：兄弟 王時槐（126653）之父／母 王一善
          quotation: null
          interpretation_note: 由兄弟关系推断：王時松 与 王時槐 为同胞（CBDB 记「弟」），王時槐 之父／母即 王時松 之父／母。
          source:
            id: s_fflSM-tA8nYOKWNi_2dAcF
            source_type: api_record
            title: 中国历代人物传记资料库：王時松（CBDB 308744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308744&o=json
            external_identifier: CBDB:308744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Qb4sm1YTpasuXLiEN1oacY
        status: active
        display_name: 王時松
        merged_into_person_id: null
    - claim:
        id: c_HBGIoDTrHZzmipoxS7jDzK
        subject_person_id: p_irooaMCyG8JBBsSKCCr16W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V57BmCNK9BwJStiF9LE1tu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EDaVrMX0Cz-spt3r_rD7AX
          claim_id: c_HBGIoDTrHZzmipoxS7jDzK
          source_id: s_7Q8KZCb8ocqfESi8TmiLFX
          stance: supports
          locator: CBDB：兄弟 王時槐（126653）之父／母 王一善
          quotation: null
          interpretation_note: 由兄弟关系推断：王時相 与 王時槐 为同胞（CBDB 记「兄」），王時槐 之父／母即 王時相 之父／母。
          source:
            id: s_7Q8KZCb8ocqfESi8TmiLFX
            source_type: api_record
            title: 中国历代人物传记资料库：王時相（CBDB 308749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308749&o=json
            external_identifier: CBDB:308749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V57BmCNK9BwJStiF9LE1tu
        status: active
        display_name: 王時相
        merged_into_person_id: null
    - claim:
        id: c_DbwzSvr_MVVI1Ur6-aU8F9
        subject_person_id: p_irooaMCyG8JBBsSKCCr16W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z5Q5wZSLUAE4cbFJYD7coD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mZ21r2GPSWjfmrSdFd0S8L
          claim_id: c_DbwzSvr_MVVI1Ur6-aU8F9
          source_id: s_GkhXkHeHpHmWKD2Zep6qJj
          stance: supports
          locator: CBDB：兄弟 王時槐（126653）之父／母 王一善
          quotation: null
          interpretation_note: 由兄弟关系推断：王時梧 与 王時槐 为同胞（CBDB 记「兄」），王時槐 之父／母即 王時梧 之父／母。
          source:
            id: s_GkhXkHeHpHmWKD2Zep6qJj
            source_type: api_record
            title: 中国历代人物传记资料库：王時梧（CBDB 308748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308748&o=json
            external_identifier: CBDB:308748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Z5Q5wZSLUAE4cbFJYD7coD
        status: active
        display_name: 王時梧
        merged_into_person_id: null
    - claim:
        id: c_rmTizut7bHBCZ1Y9HHfY69
        subject_person_id: p_irooaMCyG8JBBsSKCCr16W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iNxqBS7vuAqjwMzH7Q4baF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kPNmYzI0pomV-zczYwgnhQ
          claim_id: c_rmTizut7bHBCZ1Y9HHfY69
          source_id: s_RFEwNfVUVnHrpnV7P_XTWU
          stance: supports
          locator: CBDB：兄弟 王時槐（126653）之父／母 王一善
          quotation: null
          interpretation_note: 由兄弟关系推断：王時椿 与 王時槐 为同胞（CBDB 记「弟」），王時槐 之父／母即 王時椿 之父／母。
          source:
            id: s_RFEwNfVUVnHrpnV7P_XTWU
            source_type: api_record
            title: 中国历代人物传记资料库：王時椿（CBDB 308742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308742&o=json
            external_identifier: CBDB:308742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iNxqBS7vuAqjwMzH7Q4baF
        status: active
        display_name: 王時椿
        merged_into_person_id: null
    - claim:
        id: c_KSjPC5Sq655wGLHtDvcXZt
        subject_person_id: p_irooaMCyG8JBBsSKCCr16W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_k7CvaGdec7qarz8yuA66Ut
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Fa-EfUn8YosaDBV-xeErt
          claim_id: c_KSjPC5Sq655wGLHtDvcXZt
          source_id: s_x2lY2aaMNzTMgQX2z0qTf7
          stance: supports
          locator: CBDB：兄弟 王時槐（126653）之父／母 王一善
          quotation: null
          interpretation_note: 由兄弟关系推断：王時格 与 王時槐 为同胞（CBDB 记「兄」），王時槐 之父／母即 王時格 之父／母。
          source:
            id: s_x2lY2aaMNzTMgQX2z0qTf7
            source_type: api_record
            title: 中国历代人物传记资料库：王時格（CBDB 308747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308747&o=json
            external_identifier: CBDB:308747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_k7CvaGdec7qarz8yuA66Ut
        status: active
        display_name: 王時格
        merged_into_person_id: null
    - claim:
        id: c_Z24yzVL-xuvI2ryLKYNmlX
        subject_person_id: p_irooaMCyG8JBBsSKCCr16W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_n2e1BVsajZZyZHka399uvx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gKmR4pFSg-KKYzp7DHqbH0
          claim_id: c_Z24yzVL-xuvI2ryLKYNmlX
          source_id: s_NvWsy9uA4JskzLLqA-XDQe
          stance: supports
          locator: CBDB：兄弟 王時槐（126653）之父／母 王一善
          quotation: null
          interpretation_note: 由兄弟关系推断：王時桂 与 王時槐 为同胞（CBDB 记「弟」），王時槐 之父／母即 王時桂 之父／母。
          source:
            id: s_NvWsy9uA4JskzLLqA-XDQe
            source_type: api_record
            title: 中国历代人物传记资料库：王時桂（CBDB 308746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308746&o=json
            external_identifier: CBDB:308746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_n2e1BVsajZZyZHka399uvx
        status: active
        display_name: 王時桂
        merged_into_person_id: null
    - claim:
        id: c_9_ZPxSVFf23AEAo1-oLfr9
        subject_person_id: p_irooaMCyG8JBBsSKCCr16W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_n8RsAChmbMkPJKyY4LbY2P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jzZfgyBg2HKjL89rPof61N
          claim_id: c_9_ZPxSVFf23AEAo1-oLfr9
          source_id: s_Cb9aXRnZvrIik4gDE4zqOU
          stance: supports
          locator: CBDB：兄弟 王時槐（126653）之父／母 王一善
          quotation: null
          interpretation_note: 由兄弟关系推断：王時權 与 王時槐 为同胞（CBDB 记「兄」），王時槐 之父／母即 王時權 之父／母。
          source:
            id: s_Cb9aXRnZvrIik4gDE4zqOU
            source_type: api_record
            title: 中国历代人物传记资料库：王時權（CBDB 308753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308753&o=json
            external_identifier: CBDB:308753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_n8RsAChmbMkPJKyY4LbY2P
        status: active
        display_name: 王時權
        merged_into_person_id: null
    - claim:
        id: c_rqKjAdu9xDPAAxewiDwGBO
        subject_person_id: p_irooaMCyG8JBBsSKCCr16W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y1a7x1TCqmAopJVcqD1nEZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rvZ5cg5Tk7pQaQVeK4uhZx
          claim_id: c_rqKjAdu9xDPAAxewiDwGBO
          source_id: s_RP4MmI4zMxrqI_LyljHgod
          stance: supports
          locator: CBDB：兄弟 王時槐（126653）之父／母 王一善
          quotation: null
          interpretation_note: 由兄弟关系推断：王時棟 与 王時槐 为同胞（CBDB 记「兄」），王時槐 之父／母即 王時棟 之父／母。
          source:
            id: s_RP4MmI4zMxrqI_LyljHgod
            source_type: api_record
            title: 中国历代人物传记资料库：王時棟（CBDB 308750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308750&o=json
            external_identifier: CBDB:308750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y1a7x1TCqmAopJVcqD1nEZ
        status: active
        display_name: 王時棟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王一善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一善 | accepted |
| bio.summary | 王一善，明人物。嘉靖二十六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 308736） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_LPzYRgFrvHZtoR8m7zKq9v | 王時槐 | accepted |
| children | p_2eMHAS5LFDZtP66je2KBzU | 王時梅 | accepted |
| children | p_BFFpmbsbBqF81LxAmvvQoo | 王時楠 | accepted |
| children | p_DGUd8ZLCHnTj9z5r8CrKp3 | 王時柏 | accepted |
| children | p_Qb4sm1YTpasuXLiEN1oacY | 王時松 | accepted |
| children | p_V57BmCNK9BwJStiF9LE1tu | 王時相 | accepted |
| children | p_Z5Q5wZSLUAE4cbFJYD7coD | 王時梧 | accepted |
| children | p_iNxqBS7vuAqjwMzH7Q4baF | 王時椿 | accepted |
| children | p_k7CvaGdec7qarz8yuA66Ut | 王時格 | accepted |
| children | p_n2e1BVsajZZyZHka399uvx | 王時桂 | accepted |
| children | p_n8RsAChmbMkPJKyY4LbY2P | 王時權 | accepted |
| children | p_y1a7x1TCqmAopJVcqD1nEZ | 王時棟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時柏（CBDB 308745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308745&o=json)
- [中国历代人物传记资料库：王時椿（CBDB 308742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308742&o=json)
- [中国历代人物传记资料库：王時棟（CBDB 308750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308750&o=json)
- [中国历代人物传记资料库：王時格（CBDB 308747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308747&o=json)
- [中国历代人物传记资料库：王時桂（CBDB 308746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308746&o=json)
- [中国历代人物传记资料库：王時梅（CBDB 308743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308743&o=json)
- [中国历代人物传记资料库：王時楠（CBDB 308752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308752&o=json)
- [中国历代人物传记资料库：王時權（CBDB 308753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308753&o=json)
- [中国历代人物传记资料库：王時松（CBDB 308744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308744&o=json)
- [中国历代人物传记资料库：王時梧（CBDB 308748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308748&o=json)
- [中国历代人物传记资料库：王時相（CBDB 308749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308749&o=json)
- [中国历代人物传记资料库：王一善（CBDB 308736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308736&o=json)
