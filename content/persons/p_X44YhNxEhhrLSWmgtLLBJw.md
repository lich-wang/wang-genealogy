---
schema: wang-person/v1
id: p_X44YhNxEhhrLSWmgtLLBJw
status: active
merged_into: null
display_name: 王來聘
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WS8NUE5E9jyNf6jrfrnFGq
        subject_person_id: p_X44YhNxEhhrLSWmgtLLBJw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fTqHySeQ2pC3LE5KNBC9LZ
          claim_id: c_WS8NUE5E9jyNf6jrfrnFGq
          source_id: s_Mee2RaP6tdBsAtwUUSnzgh
          stance: supports
          locator: CBDB:215740
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215740）
          source: &a1
            id: s_Mee2RaP6tdBsAtwUUSnzgh
            source_type: api_record
            title: 中国历代人物传记资料库：王來聘（CBDB 215740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215740&o=json
            external_identifier: CBDB:215740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.192Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hAzyr1Nx6Sq5CXzRE5R7uv
        subject_person_id: p_X44YhNxEhhrLSWmgtLLBJw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來聘，明人物。萬曆五年進士，籍贯烏程。（中国历代人物传记资料库 CBDB 215740）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r18VrdqoXpmmWO9DJ65znX
          claim_id: c_hAzyr1Nx6Sq5CXzRE5R7uv
          source_id: s_Mee2RaP6tdBsAtwUUSnzgh
          stance: supports
          locator: CBDB:215740
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_n8Ph9EwZdil0txNw_ZgQrI
        subject_person_id: p_X44YhNxEhhrLSWmgtLLBJw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dJSjDNjDHVG2RbXzuMWW8y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0HDHLLH2_qJ0D3Xf0ofbLZ
          claim_id: c_n8Ph9EwZdil0txNw_ZgQrI
          source_id: s_srhDtd6DbjLfh4nqE5bLrk
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第二十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_srhDtd6DbjLfh4nqE5bLrk
            source_type: api_record
            title: 中国历代人物传记资料库：王豫（CBDB 206279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206279&o=json
            external_identifier: CBDB:206279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dJSjDNjDHVG2RbXzuMWW8y
        status: active
        display_name: 王豫
        merged_into_person_id: null
    - claim:
        id: c_N_CZJqjTE6u4m9ZojccAQm
        subject_person_id: p_X44YhNxEhhrLSWmgtLLBJw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6Jq7APJLyRSkVbB5jo8KSU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_edRD4fiOo_mzHE1nnsFcwe
          claim_id: c_N_CZJqjTE6u4m9ZojccAQm
          source_id: s_czrUcKnvOBXR49BUe-aU61
          stance: supports
          locator: CBDB：兄弟 王豫（206279）之父／母 王來聘
          quotation: null
          interpretation_note: 由兄弟关系推断：王復 与 王豫 为同胞（CBDB 记「弟」），王豫 之父／母即 王復 之父／母。
          source:
            id: s_czrUcKnvOBXR49BUe-aU61
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 215743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215743&o=json
            external_identifier: CBDB:215743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6Jq7APJLyRSkVbB5jo8KSU
        status: active
        display_name: 王復
        merged_into_person_id: null
    - claim:
        id: c_VSk1bcQBIvhREhNCFffA3S
        subject_person_id: p_X44YhNxEhhrLSWmgtLLBJw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DsXwYBz5HvWgcJfPSnT3i5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hp1fQeUJW0D_Uhl-4Elfkv
          claim_id: c_VSk1bcQBIvhREhNCFffA3S
          source_id: s_hRC-ZEr9I6ecBImPHaSvMH
          stance: supports
          locator: CBDB：兄弟 王豫（206279）之父／母 王來聘
          quotation: null
          interpretation_note: 由兄弟关系推断：王謙 与 王豫 为同胞（CBDB 记「弟」），王豫 之父／母即 王謙 之父／母。
          source:
            id: s_hRC-ZEr9I6ecBImPHaSvMH
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 215745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215745&o=json
            external_identifier: CBDB:215745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DsXwYBz5HvWgcJfPSnT3i5
        status: active
        display_name: 王謙
        merged_into_person_id: null
    - claim:
        id: c_gVztA1uZC3CMKrwff7HSO-
        subject_person_id: p_X44YhNxEhhrLSWmgtLLBJw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ge2jLJb12F2R29PPiZDSzr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WKtNXXA2S62GDOmTjlz5U9
          claim_id: c_gVztA1uZC3CMKrwff7HSO-
          source_id: s_OviynzzLYzpXrnTouZOHMC
          stance: supports
          locator: CBDB：兄弟 王豫（206279）之父／母 王來聘
          quotation: null
          interpretation_note: 由兄弟关系推断：王鼎 与 王豫 为同胞（CBDB 记「兄」），王豫 之父／母即 王鼎 之父／母。
          source:
            id: s_OviynzzLYzpXrnTouZOHMC
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 215748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215748&o=json
            external_identifier: CBDB:215748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ge2jLJb12F2R29PPiZDSzr
        status: active
        display_name: 王鼎
        merged_into_person_id: null
    - claim:
        id: c_Hw8-zFJn3iHU-F4QpjXnHU
        subject_person_id: p_X44YhNxEhhrLSWmgtLLBJw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JjoQAGTzHNCyvCTMEUaPR1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O8DvDscqXwIDgn8Q8XOrHG
          claim_id: c_Hw8-zFJn3iHU-F4QpjXnHU
          source_id: s_5ikqz-IUGQSNhLteNyWiJg
          stance: supports
          locator: CBDB：兄弟 王豫（206279）之父／母 王來聘
          quotation: null
          interpretation_note: 由兄弟关系推断：王渙 与 王豫 为同胞（CBDB 记「兄」），王豫 之父／母即 王渙 之父／母。
          source:
            id: s_5ikqz-IUGQSNhLteNyWiJg
            source_type: api_record
            title: 中国历代人物传记资料库：王渙（CBDB 215750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215750&o=json
            external_identifier: CBDB:215750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JjoQAGTzHNCyvCTMEUaPR1
        status: active
        display_name: 王渙
        merged_into_person_id: null
    - claim:
        id: c_ADC7K3yn1xhFn4sa6jiMjj
        subject_person_id: p_X44YhNxEhhrLSWmgtLLBJw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UHWBWX4Z5omFgARChps5w5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ItVnyqUIF4v9ho5o4k3mKe
          claim_id: c_ADC7K3yn1xhFn4sa6jiMjj
          source_id: s_IybXQgWjrp65nb-SpuFM58
          stance: supports
          locator: CBDB：兄弟 王豫（206279）之父／母 王來聘
          quotation: null
          interpretation_note: 由兄弟关系推断：王隨 与 王豫 为同胞（CBDB 记「兄」），王豫 之父／母即 王隨 之父／母。
          source:
            id: s_IybXQgWjrp65nb-SpuFM58
            source_type: api_record
            title: 中国历代人物传记资料库：王隨（CBDB 215746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215746&o=json
            external_identifier: CBDB:215746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UHWBWX4Z5omFgARChps5w5
        status: active
        display_name: 王隨
        merged_into_person_id: null
    - claim:
        id: c_jWwEUNhoilYQHNVt2WMyD-
        subject_person_id: p_X44YhNxEhhrLSWmgtLLBJw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fQ2iDLrvXCodytRj3Fv8EE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sRUa8h_fzBDEHzEV0M45p8
          claim_id: c_jWwEUNhoilYQHNVt2WMyD-
          source_id: s_2fNJEm6mtrwFHN4H8xoMNd
          stance: supports
          locator: CBDB：兄弟 王豫（206279）之父／母 王來聘
          quotation: null
          interpretation_note: 由兄弟关系推断：王師 与 王豫 为同胞（CBDB 记「弟」），王豫 之父／母即 王師 之父／母。
          source:
            id: s_2fNJEm6mtrwFHN4H8xoMNd
            source_type: api_record
            title: 中国历代人物传记资料库：王師（CBDB 215744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215744&o=json
            external_identifier: CBDB:215744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fQ2iDLrvXCodytRj3Fv8EE
        status: active
        display_name: 王師
        merged_into_person_id: null
    - claim:
        id: c_FFxEJ9yyMC2Ysbbo7cOmFY
        subject_person_id: p_X44YhNxEhhrLSWmgtLLBJw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gEzAcLHQACLTrFmkBxH4MR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rhm7CzB2MLN51wEg54BYdZ
          claim_id: c_FFxEJ9yyMC2Ysbbo7cOmFY
          source_id: s_832HLBAS8RadzSoAlijXzH
          stance: supports
          locator: CBDB：兄弟 王豫（206279）之父／母 王來聘
          quotation: null
          interpretation_note: 由兄弟关系推断：王晉 与 王豫 为同胞（CBDB 记「兄」），王豫 之父／母即 王晉 之父／母。
          source:
            id: s_832HLBAS8RadzSoAlijXzH
            source_type: api_record
            title: 中国历代人物传记资料库：王晉（CBDB 215749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215749&o=json
            external_identifier: CBDB:215749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gEzAcLHQACLTrFmkBxH4MR
        status: active
        display_name: 王晉
        merged_into_person_id: null
    - claim:
        id: c_quSFllqdwvma3e8edIo9as
        subject_person_id: p_X44YhNxEhhrLSWmgtLLBJw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sszQgtJbvH2fNQJN3Kq15V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6fldHiSXds24-B3Lev4UD5
          claim_id: c_quSFllqdwvma3e8edIo9as
          source_id: s_no9ta3BPmtd_JbMD1yOl4X
          stance: supports
          locator: CBDB：兄弟 王豫（206279）之父／母 王來聘
          quotation: null
          interpretation_note: 由兄弟关系推断：王震 与 王豫 为同胞（CBDB 记「兄」），王豫 之父／母即 王震 之父／母。
          source:
            id: s_no9ta3BPmtd_JbMD1yOl4X
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 215751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215751&o=json
            external_identifier: CBDB:215751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sszQgtJbvH2fNQJN3Kq15V
        status: active
        display_name: 王震
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王來聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王來聘 | accepted |
| bio.summary | 王來聘，明人物。萬曆五年進士，籍贯烏程。（中国历代人物传记资料库 CBDB 215740） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dJSjDNjDHVG2RbXzuMWW8y | 王豫 | accepted |
| children | p_6Jq7APJLyRSkVbB5jo8KSU | 王復 | accepted |
| children | p_DsXwYBz5HvWgcJfPSnT3i5 | 王謙 | accepted |
| children | p_Ge2jLJb12F2R29PPiZDSzr | 王鼎 | accepted |
| children | p_JjoQAGTzHNCyvCTMEUaPR1 | 王渙 | accepted |
| children | p_UHWBWX4Z5omFgARChps5w5 | 王隨 | accepted |
| children | p_fQ2iDLrvXCodytRj3Fv8EE | 王師 | accepted |
| children | p_gEzAcLHQACLTrFmkBxH4MR | 王晉 | accepted |
| children | p_sszQgtJbvH2fNQJN3Kq15V | 王震 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 215748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215748&o=json)
- [中国历代人物传记资料库：王復（CBDB 215743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215743&o=json)
- [中国历代人物传记资料库：王渙（CBDB 215750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215750&o=json)
- [中国历代人物传记资料库：王晉（CBDB 215749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215749&o=json)
- [中国历代人物传记资料库：王來聘（CBDB 215740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215740&o=json)
- [中国历代人物传记资料库：王謙（CBDB 215745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215745&o=json)
- [中国历代人物传记资料库：王師（CBDB 215744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215744&o=json)
- [中国历代人物传记资料库：王隨（CBDB 215746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215746&o=json)
- [中国历代人物传记资料库：王豫（CBDB 206279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206279&o=json)
- [中国历代人物传记资料库：王震（CBDB 215751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215751&o=json)
