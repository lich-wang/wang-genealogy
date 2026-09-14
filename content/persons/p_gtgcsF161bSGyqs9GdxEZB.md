---
schema: wang-person/v1
id: p_gtgcsF161bSGyqs9GdxEZB
status: active
merged_into: null
display_name: 王鵾
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_efvh7U3Z3NcbD54TZiKcy8
        subject_person_id: p_gtgcsF161bSGyqs9GdxEZB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ynsfZwDXhV546QBkPa8dP8
          claim_id: c_efvh7U3Z3NcbD54TZiKcy8
          source_id: s_TFgYfx152QQ5u1X47MSA34
          stance: supports
          locator: CBDB:217983
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（217983）
          source: &a1
            id: s_TFgYfx152QQ5u1X47MSA34
            source_type: api_record
            title: 中国历代人物传记资料库：王鵾（CBDB 217983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217983&o=json
            external_identifier: CBDB:217983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.262Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JkeLbmaUSSYwhLtXZLAHew
        subject_person_id: p_gtgcsF161bSGyqs9GdxEZB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵾，明人物。萬曆五年進士，籍贯長安，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 217983）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SH7mGuKUPLSfgQmmZzdGtY
          claim_id: c_JkeLbmaUSSYwhLtXZLAHew
          source_id: s_TFgYfx152QQ5u1X47MSA34
          stance: supports
          locator: CBDB:217983
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_GetaqOxZxDd1Ei5Z_9zthR
        subject_person_id: p_gtgcsF161bSGyqs9GdxEZB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MoTp1H1qMsn6hE765X8qFG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ys30yOON_tEDJZf-aAb7-U
          claim_id: c_GetaqOxZxDd1Ei5Z_9zthR
          source_id: s_TFgYfx152QQ5u1X47MSA34
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百七十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MoTp1H1qMsn6hE765X8qFG
        status: active
        display_name: 王九儀
        merged_into_person_id: null
    - claim:
        id: c_1tb56yWyz5JaMujTUTs_dT
        subject_person_id: p_gtgcsF161bSGyqs9GdxEZB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4pYw1nM36fCxddDyxG2NdT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f9gKQ1gyBqZPzdJN38fFaQ
          claim_id: c_1tb56yWyz5JaMujTUTs_dT
          source_id: s_zDjVLyYezj_9OBBjZEYnb3
          stance: supports
          locator: CBDB：兄弟 王九儀（206435）之父／母 王鵾
          quotation: null
          interpretation_note: 由兄弟关系推断：王九官 与 王九儀 为同胞（CBDB 记「弟」），王九儀 之父／母即 王九官 之父／母。
          source:
            id: s_zDjVLyYezj_9OBBjZEYnb3
            source_type: api_record
            title: 中国历代人物传记资料库：王九官（CBDB 217986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217986&o=json
            external_identifier: CBDB:217986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4pYw1nM36fCxddDyxG2NdT
        status: active
        display_name: 王九官
        merged_into_person_id: null
    - claim:
        id: c_xwCETNvSNBwrumYYwIpU3S
        subject_person_id: p_gtgcsF161bSGyqs9GdxEZB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6Ha9dCMYpRHitjL4LwGKLh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kzK1cPJgjY_4BcC--ihcor
          claim_id: c_xwCETNvSNBwrumYYwIpU3S
          source_id: s_U1M-kL6v9QHzFwGqov_sgx
          stance: supports
          locator: CBDB：兄弟 王九儀（206435）之父／母 王鵾
          quotation: null
          interpretation_note: 由兄弟关系推断：王九有 与 王九儀 为同胞（CBDB 记「兄」），王九儀 之父／母即 王九有 之父／母。
          source:
            id: s_U1M-kL6v9QHzFwGqov_sgx
            source_type: api_record
            title: 中国历代人物传记资料库：王九有（CBDB 217993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217993&o=json
            external_identifier: CBDB:217993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6Ha9dCMYpRHitjL4LwGKLh
        status: active
        display_name: 王九有
        merged_into_person_id: null
    - claim:
        id: c_jOWM6QIsB9nmpBAsAb02s3
        subject_person_id: p_gtgcsF161bSGyqs9GdxEZB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VsHXhzLcS1rSRcDLWuJf1a
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KYe_w5NvHeHvG1BiBswrGv
          claim_id: c_jOWM6QIsB9nmpBAsAb02s3
          source_id: s_gZl2UnWmdVluVZ-64e9E6a
          stance: supports
          locator: CBDB：兄弟 王九儀（206435）之父／母 王鵾
          quotation: null
          interpretation_note: 由兄弟关系推断：王九命 与 王九儀 为同胞（CBDB 记「弟」），王九儀 之父／母即 王九命 之父／母。
          source:
            id: s_gZl2UnWmdVluVZ-64e9E6a
            source_type: api_record
            title: 中国历代人物传记资料库：王九命（CBDB 217987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217987&o=json
            external_identifier: CBDB:217987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VsHXhzLcS1rSRcDLWuJf1a
        status: active
        display_name: 王九命
        merged_into_person_id: null
    - claim:
        id: c_4TerdMD4VerRsX35hm_jq7
        subject_person_id: p_gtgcsF161bSGyqs9GdxEZB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Wkz7ZLqzXV1LZi9St3QLLC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l4VmTusPEenozet-q7raMV
          claim_id: c_4TerdMD4VerRsX35hm_jq7
          source_id: s_YTT6dRX2vQlmd2o0a3IZkF
          stance: supports
          locator: CBDB：兄弟 王九儀（206435）之父／母 王鵾
          quotation: null
          interpretation_note: 由兄弟关系推断：王九功 与 王九儀 为同胞（CBDB 记「弟」），王九儀 之父／母即 王九功 之父／母。
          source:
            id: s_YTT6dRX2vQlmd2o0a3IZkF
            source_type: api_record
            title: 中国历代人物传记资料库：王九功（CBDB 217988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217988&o=json
            external_identifier: CBDB:217988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Wkz7ZLqzXV1LZi9St3QLLC
        status: active
        display_name: 王九功
        merged_into_person_id: null
    - claim:
        id: c_Jkt28QcZMSDOjcjMQFLZ7H
        subject_person_id: p_gtgcsF161bSGyqs9GdxEZB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gsXCBL17jD8SQSFJWYeuUy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R1slV9WLropvw-8KULmIlz
          claim_id: c_Jkt28QcZMSDOjcjMQFLZ7H
          source_id: s_1mnlAXHWygpfTOtIrM-h4U
          stance: supports
          locator: CBDB：兄弟 王九儀（206435）之父／母 王鵾
          quotation: null
          interpretation_note: 由兄弟关系推断：王九章 与 王九儀 为同胞（CBDB 记「兄」），王九儀 之父／母即 王九章 之父／母。
          source:
            id: s_1mnlAXHWygpfTOtIrM-h4U
            source_type: api_record
            title: 中国历代人物传记资料库：王九章（CBDB 217990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217990&o=json
            external_identifier: CBDB:217990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gsXCBL17jD8SQSFJWYeuUy
        status: active
        display_name: 王九章
        merged_into_person_id: null
    - claim:
        id: c_4XsOI5uJrKyk3dSgmGmExT
        subject_person_id: p_gtgcsF161bSGyqs9GdxEZB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zxLXBFuG5vobvocjbzPzxu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RozDWQl9ioJA8enFc29gau
          claim_id: c_4XsOI5uJrKyk3dSgmGmExT
          source_id: s_WeCk3SXeF2ppG18ui0Uv8R
          stance: supports
          locator: CBDB：兄弟 王九儀（206435）之父／母 王鵾
          quotation: null
          interpretation_note: 由兄弟关系推断：王九卿 与 王九儀 为同胞（CBDB 记「弟」），王九儀 之父／母即 王九卿 之父／母。
          source:
            id: s_WeCk3SXeF2ppG18ui0Uv8R
            source_type: api_record
            title: 中国历代人物传记资料库：王九卿（CBDB 217989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217989&o=json
            external_identifier: CBDB:217989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zxLXBFuG5vobvocjbzPzxu
        status: active
        display_name: 王九卿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鵾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鵾 | accepted |
| bio.summary | 王鵾，明人物。萬曆五年進士，籍贯長安，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 217983） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_MoTp1H1qMsn6hE765X8qFG | 王九儀 | accepted |
| children | p_4pYw1nM36fCxddDyxG2NdT | 王九官 | accepted |
| children | p_6Ha9dCMYpRHitjL4LwGKLh | 王九有 | accepted |
| children | p_VsHXhzLcS1rSRcDLWuJf1a | 王九命 | accepted |
| children | p_Wkz7ZLqzXV1LZi9St3QLLC | 王九功 | accepted |
| children | p_gsXCBL17jD8SQSFJWYeuUy | 王九章 | accepted |
| children | p_zxLXBFuG5vobvocjbzPzxu | 王九卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王九功（CBDB 217988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217988&o=json)
- [中国历代人物传记资料库：王九官（CBDB 217986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217986&o=json)
- [中国历代人物传记资料库：王九命（CBDB 217987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217987&o=json)
- [中国历代人物传记资料库：王九卿（CBDB 217989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217989&o=json)
- [中国历代人物传记资料库：王九有（CBDB 217993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217993&o=json)
- [中国历代人物传记资料库：王九章（CBDB 217990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217990&o=json)
- [中国历代人物传记资料库：王鵾（CBDB 217983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217983&o=json)
