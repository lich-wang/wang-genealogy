---
schema: wang-person/v1
id: p_aEy4RxmjmGXnETHRGP3pm2
status: active
merged_into: null
display_name: 王兌
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KuXghF3DhTZxsjgZsshT3V
        subject_person_id: p_aEy4RxmjmGXnETHRGP3pm2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8uPo9vtdR9CozyBkupjY6c
          claim_id: c_KuXghF3DhTZxsjgZsshT3V
          source_id: s_BEDXWmZabRVmSBSSb2PEQu
          stance: supports
          locator: CBDB:211980
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（211980）
          source: &a1
            id: s_BEDXWmZabRVmSBSSb2PEQu
            source_type: api_record
            title: 中国历代人物传记资料库：王兌（CBDB 211980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211980&o=json
            external_identifier: CBDB:211980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.040Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NCUKUmNu5AsFfEjHjP3odT
        subject_person_id: p_aEy4RxmjmGXnETHRGP3pm2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兌，明人物。隆慶五年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 211980）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LQF0_Uie07WZTW9yDBe2c1
          claim_id: c_NCUKUmNu5AsFfEjHjP3odT
          source_id: s_BEDXWmZabRVmSBSSb2PEQu
          stance: supports
          locator: CBDB:211980
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_eWQ6QTLLyN7hWGinxgz0Nt
        subject_person_id: p_aEy4RxmjmGXnETHRGP3pm2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s3BG2bed1QUGktV4Jrg4UH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f1nWjSKHOYGEbeeXaC_yYy
          claim_id: c_eWQ6QTLLyN7hWGinxgz0Nt
          source_id: s_BEDXWmZabRVmSBSSb2PEQu
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百八十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_s3BG2bed1QUGktV4Jrg4UH
        status: active
        display_name: 王學書
        merged_into_person_id: null
    - claim:
        id: c_PgDmGAIQWVZV0rfk_7pGkF
        subject_person_id: p_aEy4RxmjmGXnETHRGP3pm2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AWSa8tLY68DLhENxSE2F4D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HSq69pPn6qCFmDTG5WDjWA
          claim_id: c_PgDmGAIQWVZV0rfk_7pGkF
          source_id: s_FDsP1gsNnOA4g-D7C2G4vR
          stance: supports
          locator: CBDB：兄弟 王學書（206005）之父／母 王兌
          quotation: null
          interpretation_note: 由兄弟关系推断：王學易 与 王學書 为同胞（CBDB 记「兄」），王學書 之父／母即 王學易 之父／母。
          source:
            id: s_FDsP1gsNnOA4g-D7C2G4vR
            source_type: api_record
            title: 中国历代人物传记资料库：王學易（CBDB 211989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211989&o=json
            external_identifier: CBDB:211989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AWSa8tLY68DLhENxSE2F4D
        status: active
        display_name: 王學易
        merged_into_person_id: null
    - claim:
        id: c_GPkYsri_vTStPlOJ6m5sfZ
        subject_person_id: p_aEy4RxmjmGXnETHRGP3pm2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FojijtxJJhVsRkF2Bt86Mf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5ltSD-k-OOsQ0P4WW3oWMs
          claim_id: c_GPkYsri_vTStPlOJ6m5sfZ
          source_id: s_Sw7CD430-HgYfjclhXVKs8
          stance: supports
          locator: CBDB：兄弟 王學書（206005）之父／母 王兌
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝登 与 王學書 为同胞（CBDB 记「弟」），王學書 之父／母即 王汝登 之父／母。
          source:
            id: s_Sw7CD430-HgYfjclhXVKs8
            source_type: api_record
            title: 中国历代人物传记资料库：王汝登（CBDB 211985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211985&o=json
            external_identifier: CBDB:211985
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FojijtxJJhVsRkF2Bt86Mf
        status: active
        display_name: 王汝登
        merged_into_person_id: null
    - claim:
        id: c__BrZvUJ8m2HmLwhu4PN_LG
        subject_person_id: p_aEy4RxmjmGXnETHRGP3pm2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NQ8mkgAu6KxcsGFUuZARwz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ahFyalo-IXJqxXS-VwkpZg
          claim_id: c__BrZvUJ8m2HmLwhu4PN_LG
          source_id: s_uEYEfT5G-KYUTJNIsunIxo
          stance: supports
          locator: CBDB：兄弟 王學書（206005）之父／母 王兌
          quotation: null
          interpretation_note: 由兄弟关系推断：王學顏 与 王學書 为同胞（CBDB 记「兄」），王學書 之父／母即 王學顏 之父／母。
          source:
            id: s_uEYEfT5G-KYUTJNIsunIxo
            source_type: api_record
            title: 中国历代人物传记资料库：王學顏（CBDB 211990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211990&o=json
            external_identifier: CBDB:211990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NQ8mkgAu6KxcsGFUuZARwz
        status: active
        display_name: 王學顏
        merged_into_person_id: null
    - claim:
        id: c_pLOWFX56Y5_35HEerJxLRx
        subject_person_id: p_aEy4RxmjmGXnETHRGP3pm2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SpPiLCiECtSxJFFSbvvw4H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CAYSooX3AeXT8ubCBJGwXG
          claim_id: c_pLOWFX56Y5_35HEerJxLRx
          source_id: s_dDbnZa-ZS_21JKr9bfJ8ir
          stance: supports
          locator: CBDB：兄弟 王學書（206005）之父／母 王兌
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝科 与 王學書 为同胞（CBDB 记「弟」），王學書 之父／母即 王汝科 之父／母。
          source:
            id: s_dDbnZa-ZS_21JKr9bfJ8ir
            source_type: api_record
            title: 中国历代人物传记资料库：王汝科（CBDB 211986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211986&o=json
            external_identifier: CBDB:211986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SpPiLCiECtSxJFFSbvvw4H
        status: active
        display_name: 王汝科
        merged_into_person_id: null
    - claim:
        id: c_SRwblMTDY59SCuUVTvXmnx
        subject_person_id: p_aEy4RxmjmGXnETHRGP3pm2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fKMuYXt6fUwgZatNXQSatB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_45_FZj69FsbdKF36Gd4lrZ
          claim_id: c_SRwblMTDY59SCuUVTvXmnx
          source_id: s_1OPNsv4sY1iDs9ttoXQ0DR
          stance: supports
          locator: CBDB：兄弟 王學書（206005）之父／母 王兌
          quotation: null
          interpretation_note: 由兄弟关系推断：王學曾 与 王學書 为同胞（CBDB 记「兄」），王學書 之父／母即 王學曾 之父／母。
          source:
            id: s_1OPNsv4sY1iDs9ttoXQ0DR
            source_type: api_record
            title: 中国历代人物传记资料库：王學曾（CBDB 211991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211991&o=json
            external_identifier: CBDB:211991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fKMuYXt6fUwgZatNXQSatB
        status: active
        display_name: 王學曾
        merged_into_person_id: null
    - claim:
        id: c_zwmK5Y3RbxDzFCY9_Q8l9_
        subject_person_id: p_aEy4RxmjmGXnETHRGP3pm2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uWjrDnnhQjXA8NkKCXBTd4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zkbCoK5Vd0SuadSbA36p_m
          claim_id: c_zwmK5Y3RbxDzFCY9_Q8l9_
          source_id: s_g9Br-3YRn2i8I8C42WyXIQ
          stance: supports
          locator: CBDB：兄弟 王學書（206005）之父／母 王兌
          quotation: null
          interpretation_note: 由兄弟关系推断：王學詩 与 王學書 为同胞（CBDB 记「兄」），王學書 之父／母即 王學詩 之父／母。
          source:
            id: s_g9Br-3YRn2i8I8C42WyXIQ
            source_type: api_record
            title: 中国历代人物传记资料库：王學詩（CBDB 211987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211987&o=json
            external_identifier: CBDB:211987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uWjrDnnhQjXA8NkKCXBTd4
        status: active
        display_name: 王學詩
        merged_into_person_id: null
    - claim:
        id: c_eYEOvkO4rRPde2_fwlqk8a
        subject_person_id: p_aEy4RxmjmGXnETHRGP3pm2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yyc6ocVbQU2gcZc6J58PD2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8jJM34iVzqqdHajo5ZcwA3
          claim_id: c_eYEOvkO4rRPde2_fwlqk8a
          source_id: s_bZMw6hrocfvibHXAoJfadR
          stance: supports
          locator: CBDB：兄弟 王學書（206005）之父／母 王兌
          quotation: null
          interpretation_note: 由兄弟关系推断：王學禮 与 王學書 为同胞（CBDB 记「兄」），王學書 之父／母即 王學禮 之父／母。
          source:
            id: s_bZMw6hrocfvibHXAoJfadR
            source_type: api_record
            title: 中国历代人物传记资料库：王學禮（CBDB 211988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211988&o=json
            external_identifier: CBDB:211988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yyc6ocVbQU2gcZc6J58PD2
        status: active
        display_name: 王學禮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王兌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兌 | accepted |
| bio.summary | 王兌，明人物。隆慶五年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 211980） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_s3BG2bed1QUGktV4Jrg4UH | 王學書 | accepted |
| children | p_AWSa8tLY68DLhENxSE2F4D | 王學易 | accepted |
| children | p_FojijtxJJhVsRkF2Bt86Mf | 王汝登 | accepted |
| children | p_NQ8mkgAu6KxcsGFUuZARwz | 王學顏 | accepted |
| children | p_SpPiLCiECtSxJFFSbvvw4H | 王汝科 | accepted |
| children | p_fKMuYXt6fUwgZatNXQSatB | 王學曾 | accepted |
| children | p_uWjrDnnhQjXA8NkKCXBTd4 | 王學詩 | accepted |
| children | p_yyc6ocVbQU2gcZc6J58PD2 | 王學禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王兌（CBDB 211980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211980&o=json)
- [中国历代人物传记资料库：王汝登（CBDB 211985）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211985&o=json)
- [中国历代人物传记资料库：王汝科（CBDB 211986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211986&o=json)
- [中国历代人物传记资料库：王學曾（CBDB 211991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211991&o=json)
- [中国历代人物传记资料库：王學禮（CBDB 211988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211988&o=json)
- [中国历代人物传记资料库：王學詩（CBDB 211987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211987&o=json)
- [中国历代人物传记资料库：王學顏（CBDB 211990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211990&o=json)
- [中国历代人物传记资料库：王學易（CBDB 211989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211989&o=json)
