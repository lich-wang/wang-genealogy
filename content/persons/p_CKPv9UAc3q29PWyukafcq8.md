---
schema: wang-person/v1
id: p_CKPv9UAc3q29PWyukafcq8
status: active
merged_into: null
display_name: 王文奎
revision: 13
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_etCRxQjePbbgku2LMpV9Hr
        subject_person_id: p_CKPv9UAc3q29PWyukafcq8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TubvA5pDGFJTiFnTddff1A
          claim_id: c_etCRxQjePbbgku2LMpV9Hr
          source_id: s_Cg2uT2jLBdKAn8ujADvzDV
          stance: supports
          locator: CBDB:267005
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267005）
          source: &a1
            id: s_Cg2uT2jLBdKAn8ujADvzDV
            source_type: api_record
            title: 中国历代人物传记资料库：王文奎（CBDB 267005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267005&o=json
            external_identifier: CBDB:267005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.757Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ygtwg55HH8DDHTTrq6FFn5
        subject_person_id: p_CKPv9UAc3q29PWyukafcq8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文奎，明人物。景泰五年進士，籍贯溧水。（中国历代人物传记资料库 CBDB 267005）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YPRqQ9HmonKfXr782oNQcR
          claim_id: c_Ygtwg55HH8DDHTTrq6FFn5
          source_id: s_Cg2uT2jLBdKAn8ujADvzDV
          stance: supports
          locator: CBDB:267005
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_f--7Ef3bfwXRVwErnaEdjk
        subject_person_id: p_CKPv9UAc3q29PWyukafcq8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B0LJomOgWEjeHsS8Evk1jj
          claim_id: c_f--7Ef3bfwXRVwErnaEdjk
          source_id: s_Cg2uT2jLBdKAn8ujADvzDV
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第六十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_q8jv2duMSqfqCbpkkK9Wow
        status: active
        display_name: 王魯
        merged_into_person_id: null
    - claim:
        id: c_ZMd-wjGvislb0g1Xu67bsv
        subject_person_id: p_CKPv9UAc3q29PWyukafcq8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3FjhEKeM1c8kyPoKNRnB72
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p86Cq03el14bkEpOv4qrXg
          claim_id: c_ZMd-wjGvislb0g1Xu67bsv
          source_id: s_yhYUrbD_wKgMI23rKL9vd9
          stance: supports
          locator: CBDB：兄弟 王魯（198398）之父／母 王文奎
          quotation: null
          interpretation_note: 由兄弟关系推断：王孝 与 王魯 为同胞（CBDB 记「兄」），王魯 之父／母即 王孝 之父／母。
          source:
            id: s_yhYUrbD_wKgMI23rKL9vd9
            source_type: api_record
            title: 中国历代人物传记资料库：王孝（CBDB 267171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267171&o=json
            external_identifier: CBDB:267171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3FjhEKeM1c8kyPoKNRnB72
        status: active
        display_name: 王孝
        merged_into_person_id: null
    - claim:
        id: c_sLa1ybxoHw_l-OfuOW2jkP
        subject_person_id: p_CKPv9UAc3q29PWyukafcq8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6TJyuxKhQ18JjQzDuJGDY4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__FovYeKTxzYlp8PzcTSrmO
          claim_id: c_sLa1ybxoHw_l-OfuOW2jkP
          source_id: s_l7WMjAe31oVQxKX7OK_8tE
          stance: supports
          locator: CBDB：兄弟 王魯（198398）之父／母 王文奎
          quotation: null
          interpretation_note: 由兄弟关系推断：王器 与 王魯 为同胞（CBDB 记「兄」），王魯 之父／母即 王器 之父／母。
          source:
            id: s_l7WMjAe31oVQxKX7OK_8tE
            source_type: api_record
            title: 中国历代人物传记资料库：王器（CBDB 267138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267138&o=json
            external_identifier: CBDB:267138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6TJyuxKhQ18JjQzDuJGDY4
        status: active
        display_name: 王器
        merged_into_person_id: null
    - claim:
        id: c_ikBx9CX8_k2GvJIwxuqRfa
        subject_person_id: p_CKPv9UAc3q29PWyukafcq8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A2FMZcBwz2Z4nhrvf4rDa7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qaDORTQLTKpSfkLNpg3HyD
          claim_id: c_ikBx9CX8_k2GvJIwxuqRfa
          source_id: s_jZAll7DltMUR9BvvS0Qyy7
          stance: supports
          locator: CBDB：兄弟 王魯（198398）之父／母 王文奎
          quotation: null
          interpretation_note: 由兄弟关系推断：王俊 与 王魯 为同胞（CBDB 记「兄」），王魯 之父／母即 王俊 之父／母。
          source:
            id: s_jZAll7DltMUR9BvvS0Qyy7
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 267105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267105&o=json
            external_identifier: CBDB:267105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A2FMZcBwz2Z4nhrvf4rDa7
        status: active
        display_name: 王俊
        merged_into_person_id: null
    - claim:
        id: c_F2lqCwvEGXe8wuaCK6g4Jt
        subject_person_id: p_CKPv9UAc3q29PWyukafcq8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CqjxXJ5m9n5YfJTKbQceeD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-lj7Qk5SFKg_hsLd-YR8oS
          claim_id: c_F2lqCwvEGXe8wuaCK6g4Jt
          source_id: s_zWxthLLF2G0pxVZsm_Q4Y4
          stance: supports
          locator: CBDB：兄弟 王魯（198398）之父／母 王文奎
          quotation: null
          interpretation_note: 由兄弟关系推断：王明 与 王魯 为同胞（CBDB 记「兄」），王魯 之父／母即 王明 之父／母。
          source:
            id: s_zWxthLLF2G0pxVZsm_Q4Y4
            source_type: api_record
            title: 中国历代人物传记资料库：王明（CBDB 267094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267094&o=json
            external_identifier: CBDB:267094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CqjxXJ5m9n5YfJTKbQceeD
        status: active
        display_name: 王明
        merged_into_person_id: null
    - claim:
        id: c_Kmhhk5tPxXpXgBPywr-XHX
        subject_person_id: p_CKPv9UAc3q29PWyukafcq8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E8gXGY9qEndYYMGS6eqbKv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iXhmHMMgPUekjhqkg6FwEB
          claim_id: c_Kmhhk5tPxXpXgBPywr-XHX
          source_id: s_wM1cTG625l2bfZtn3OR8SW
          stance: supports
          locator: CBDB：兄弟 王魯（198398）之父／母 王文奎
          quotation: null
          interpretation_note: 由兄弟关系推断：王佐 与 王魯 为同胞（CBDB 记「弟」），王魯 之父／母即 王佐 之父／母。
          source:
            id: s_wM1cTG625l2bfZtn3OR8SW
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 267060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267060&o=json
            external_identifier: CBDB:267060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_E8gXGY9qEndYYMGS6eqbKv
        status: active
        display_name: 王佐
        merged_into_person_id: null
    - claim:
        id: c_O_KrvgBDFzCwMMpEhnFvJN
        subject_person_id: p_CKPv9UAc3q29PWyukafcq8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Fw6GsK3qMAkvT8eTTxPa7v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OiyNJqrxI2HV5HS7GbmuzP
          claim_id: c_O_KrvgBDFzCwMMpEhnFvJN
          source_id: s_Wqz2mi3F4XPlPqW1kXS3Su
          stance: supports
          locator: CBDB：兄弟 王魯（198398）之父／母 王文奎
          quotation: null
          interpretation_note: 由兄弟关系推断：王文 与 王魯 为同胞（CBDB 记「兄」），王魯 之父／母即 王文 之父／母。
          source:
            id: s_Wqz2mi3F4XPlPqW1kXS3Su
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 267127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267127&o=json
            external_identifier: CBDB:267127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Fw6GsK3qMAkvT8eTTxPa7v
        status: active
        display_name: 王文
        merged_into_person_id: null
    - claim:
        id: c_OfeJaNfHCAz9y9R1VbvXv1
        subject_person_id: p_CKPv9UAc3q29PWyukafcq8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XLFFyyxGCzdnmsqVyYWFKn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ov5btD7qHAr_2D4uXCglLf
          claim_id: c_OfeJaNfHCAz9y9R1VbvXv1
          source_id: s_QW8wd35vqjVT9O6YTqKURP
          stance: supports
          locator: CBDB：兄弟 王魯（198398）之父／母 王文奎
          quotation: null
          interpretation_note: 由兄弟关系推断：王弼 与 王魯 为同胞（CBDB 记「弟」），王魯 之父／母即 王弼 之父／母。
          source:
            id: s_QW8wd35vqjVT9O6YTqKURP
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 267071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267071&o=json
            external_identifier: CBDB:267071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XLFFyyxGCzdnmsqVyYWFKn
        status: active
        display_name: 王弼
        merged_into_person_id: null
    - claim:
        id: c_8GQjk8CtH-2eA0J3AJatJ9
        subject_person_id: p_CKPv9UAc3q29PWyukafcq8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XMQdK2FcGGicPgwMFMaiBE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vazGA9Q8j0gTvYrBuLTe20
          claim_id: c_8GQjk8CtH-2eA0J3AJatJ9
          source_id: s_B3HeTi8G9yE0O5Wf5vn53G
          stance: supports
          locator: CBDB：兄弟 王魯（198398）之父／母 王文奎
          quotation: null
          interpretation_note: 由兄弟关系推断：王辨 与 王魯 为同胞（CBDB 记「兄」），王魯 之父／母即 王辨 之父／母。
          source:
            id: s_B3HeTi8G9yE0O5Wf5vn53G
            source_type: api_record
            title: 中国历代人物传记资料库：王辨（CBDB 267149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267149&o=json
            external_identifier: CBDB:267149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XMQdK2FcGGicPgwMFMaiBE
        status: active
        display_name: 王辨
        merged_into_person_id: null
    - claim:
        id: c__cO7ooev45BNodOXJbX0R3
        subject_person_id: p_CKPv9UAc3q29PWyukafcq8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Zagw2jUXA2bGhFt3Tf6Wc2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sQYkschYChHLPFgoadN-bP
          claim_id: c__cO7ooev45BNodOXJbX0R3
          source_id: s_G8c8S86xVzABH0M6lO7oZh
          stance: supports
          locator: CBDB：兄弟 王魯（198398）之父／母 王文奎
          quotation: null
          interpretation_note: 由兄弟关系推断：王謹 与 王魯 为同胞（CBDB 记「兄」），王魯 之父／母即 王謹 之父／母。
          source:
            id: s_G8c8S86xVzABH0M6lO7oZh
            source_type: api_record
            title: 中国历代人物传记资料库：王謹（CBDB 267160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267160&o=json
            external_identifier: CBDB:267160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zagw2jUXA2bGhFt3Tf6Wc2
        status: active
        display_name: 王謹
        merged_into_person_id: null
    - claim:
        id: c_xUvqRgXvIJwGyBptE_cQNQ
        subject_person_id: p_CKPv9UAc3q29PWyukafcq8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mTrNh2z3rLv3K8dQdvAPr1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oxqkNND2wkIXCxNLvPj4yt
          claim_id: c_xUvqRgXvIJwGyBptE_cQNQ
          source_id: s_LFMk3YnPv9CAiaEpeB8f0m
          stance: supports
          locator: CBDB：兄弟 王魯（198398）之父／母 王文奎
          quotation: null
          interpretation_note: 由兄弟关系推断：王述 与 王魯 为同胞（CBDB 记「兄」），王魯 之父／母即 王述 之父／母。
          source:
            id: s_LFMk3YnPv9CAiaEpeB8f0m
            source_type: api_record
            title: 中国历代人物传记资料库：王述（CBDB 267116）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267116&o=json
            external_identifier: CBDB:267116
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mTrNh2z3rLv3K8dQdvAPr1
        status: active
        display_name: 王述
        merged_into_person_id: null
    - claim:
        id: c_tXC8Rti2IoGsVMq6p5GGxe
        subject_person_id: p_CKPv9UAc3q29PWyukafcq8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rBBhtXWwFwTPfqn7qyEhmD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KTPqhSDh2JeN0GKrdGsz9J
          claim_id: c_tXC8Rti2IoGsVMq6p5GGxe
          source_id: s_mdTbGXRvlBCAMkL5qdr6Wj
          stance: supports
          locator: CBDB：兄弟 王魯（198398）之父／母 王文奎
          quotation: null
          interpretation_note: 由兄弟关系推断：王聰 与 王魯 为同胞（CBDB 记「兄」），王魯 之父／母即 王聰 之父／母。
          source:
            id: s_mdTbGXRvlBCAMkL5qdr6Wj
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 267083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267083&o=json
            external_identifier: CBDB:267083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rBBhtXWwFwTPfqn7qyEhmD
        status: active
        display_name: 王聰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文奎 | accepted |
| bio.summary | 王文奎，明人物。景泰五年進士，籍贯溧水。（中国历代人物传记资料库 CBDB 267005） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_q8jv2duMSqfqCbpkkK9Wow | 王魯 | accepted |
| children | p_3FjhEKeM1c8kyPoKNRnB72 | 王孝 | accepted |
| children | p_6TJyuxKhQ18JjQzDuJGDY4 | 王器 | accepted |
| children | p_A2FMZcBwz2Z4nhrvf4rDa7 | 王俊 | accepted |
| children | p_CqjxXJ5m9n5YfJTKbQceeD | 王明 | accepted |
| children | p_E8gXGY9qEndYYMGS6eqbKv | 王佐 | accepted |
| children | p_Fw6GsK3qMAkvT8eTTxPa7v | 王文 | accepted |
| children | p_XLFFyyxGCzdnmsqVyYWFKn | 王弼 | accepted |
| children | p_XMQdK2FcGGicPgwMFMaiBE | 王辨 | accepted |
| children | p_Zagw2jUXA2bGhFt3Tf6Wc2 | 王謹 | accepted |
| children | p_mTrNh2z3rLv3K8dQdvAPr1 | 王述 | accepted |
| children | p_rBBhtXWwFwTPfqn7qyEhmD | 王聰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 267071）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267071&o=json)
- [中国历代人物传记资料库：王辨（CBDB 267149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267149&o=json)
- [中国历代人物传记资料库：王聰（CBDB 267083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267083&o=json)
- [中国历代人物传记资料库：王謹（CBDB 267160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267160&o=json)
- [中国历代人物传记资料库：王俊（CBDB 267105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267105&o=json)
- [中国历代人物传记资料库：王明（CBDB 267094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267094&o=json)
- [中国历代人物传记资料库：王器（CBDB 267138）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267138&o=json)
- [中国历代人物传记资料库：王述（CBDB 267116）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267116&o=json)
- [中国历代人物传记资料库：王文（CBDB 267127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267127&o=json)
- [中国历代人物传记资料库：王文奎（CBDB 267005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267005&o=json)
- [中国历代人物传记资料库：王孝（CBDB 267171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267171&o=json)
- [中国历代人物传记资料库：王佐（CBDB 267060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267060&o=json)
