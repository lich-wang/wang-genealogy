---
schema: wang-person/v1
id: p_rhYt9t4gYuDEpCnQq4aywZ
status: active
merged_into: null
display_name: 王利
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cGDeCEmaLgFqdVTUfaQJq5
        subject_person_id: p_rhYt9t4gYuDEpCnQq4aywZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王利
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K8jBGZQiFRZFZCB8eY8AJj
          claim_id: c_cGDeCEmaLgFqdVTUfaQJq5
          source_id: s_SzSeGZ9EqJCgsqiPZLij7C
          stance: supports
          locator: CBDB:329344
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329344）
          source: &a1
            id: s_SzSeGZ9EqJCgsqiPZLij7C
            source_type: api_record
            title: 中国历代人物传记资料库：王利（CBDB 329344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329344&o=json
            external_identifier: CBDB:329344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.319Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P4YbBU27naZMTErkFDzAaq
        subject_person_id: p_rhYt9t4gYuDEpCnQq4aywZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王利，明人物。嘉靖四十一年進士，籍贯定遠，曾任工部郎中。（中国历代人物传记资料库 CBDB 329344）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Swwm3YpPIAmie13NQZeAin
          claim_id: c_P4YbBU27naZMTErkFDzAaq
          source_id: s_SzSeGZ9EqJCgsqiPZLij7C
          stance: supports
          locator: CBDB:329344
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_GTyKZ3w_Znap-K66YHd5l9
        subject_person_id: p_rhYt9t4gYuDEpCnQq4aywZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MT9QqQenXKizWtnnGxJQyH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k8EY4a8Gz_njIp-qBgVYRu
          claim_id: c_GTyKZ3w_Znap-K66YHd5l9
          source_id: s_SzSeGZ9EqJCgsqiPZLij7C
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第二百零九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MT9QqQenXKizWtnnGxJQyH
        status: active
        display_name: 王輦
        merged_into_person_id: null
    - claim:
        id: c_zuQEb-AShlVA0OHdca94aY
        subject_person_id: p_rhYt9t4gYuDEpCnQq4aywZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2omi1iD2DH3mmzWtSgzetd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vhDJumUoi-99UdoVkWTynu
          claim_id: c_zuQEb-AShlVA0OHdca94aY
          source_id: s_v7AXsZ14glWfMtkh_TOnJA
          stance: supports
          locator: CBDB：兄弟 王輦（205182）之父／母 王利
          quotation: null
          interpretation_note: 由兄弟关系推断：王軫 与 王輦 为同胞（CBDB 记「兄」），王輦 之父／母即 王軫 之父／母。
          source:
            id: s_v7AXsZ14glWfMtkh_TOnJA
            source_type: api_record
            title: 中国历代人物传记资料库：王軫（CBDB 329352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329352&o=json
            external_identifier: CBDB:329352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2omi1iD2DH3mmzWtSgzetd
        status: active
        display_name: 王軫
        merged_into_person_id: null
    - claim:
        id: c_TtyvXxhlAFXA1dJSrenBFZ
        subject_person_id: p_rhYt9t4gYuDEpCnQq4aywZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4gA1e5BWfPswHNcfbKTQ7T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LzGIvuQ02rc3Klak7JtvCj
          claim_id: c_TtyvXxhlAFXA1dJSrenBFZ
          source_id: s_0ICrKJpFfR1QihmBpsI2Xk
          stance: supports
          locator: CBDB：兄弟 王輦（205182）之父／母 王利
          quotation: null
          interpretation_note: 由兄弟关系推断：王輻 与 王輦 为同胞（CBDB 记「兄」），王輦 之父／母即 王輻 之父／母。
          source:
            id: s_0ICrKJpFfR1QihmBpsI2Xk
            source_type: api_record
            title: 中国历代人物传记资料库：王輻（CBDB 329357）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329357&o=json
            external_identifier: CBDB:329357
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4gA1e5BWfPswHNcfbKTQ7T
        status: active
        display_name: 王輻
        merged_into_person_id: null
    - claim:
        id: c_PrN7WFdzKAeirs7d4dQMnz
        subject_person_id: p_rhYt9t4gYuDEpCnQq4aywZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6D72VCCtVu5zyK1zSakJfA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NAB_RB0cMCBnr84PI5k-Gv
          claim_id: c_PrN7WFdzKAeirs7d4dQMnz
          source_id: s_HXbdI623hgvevUeElD_3SQ
          stance: supports
          locator: CBDB：兄弟 王輦（205182）之父／母 王利
          quotation: null
          interpretation_note: 由兄弟关系推断：王輗 与 王輦 为同胞（CBDB 记「兄」），王輦 之父／母即 王輗 之父／母。
          source:
            id: s_HXbdI623hgvevUeElD_3SQ
            source_type: api_record
            title: 中国历代人物传记资料库：王輗（CBDB 329355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329355&o=json
            external_identifier: CBDB:329355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6D72VCCtVu5zyK1zSakJfA
        status: active
        display_name: 王輗
        merged_into_person_id: null
    - claim:
        id: c_XsuLvGxy8RVaGuxg_ggXUR
        subject_person_id: p_rhYt9t4gYuDEpCnQq4aywZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K7HhPzvcPxufDAUCR72Cf8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tomtFLM_xjqw4nx5_TwA4Z
          claim_id: c_XsuLvGxy8RVaGuxg_ggXUR
          source_id: s_eVfBsVsUH72wx8DieOrS-q
          stance: supports
          locator: CBDB：兄弟 王輦（205182）之父／母 王利
          quotation: null
          interpretation_note: 由兄弟关系推断：王載 与 王輦 为同胞（CBDB 记「弟」），王輦 之父／母即 王載 之父／母。
          source:
            id: s_eVfBsVsUH72wx8DieOrS-q
            source_type: api_record
            title: 中国历代人物传记资料库：王載（CBDB 329351）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329351&o=json
            external_identifier: CBDB:329351
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_K7HhPzvcPxufDAUCR72Cf8
        status: active
        display_name: 王載
        merged_into_person_id: null
    - claim:
        id: c_UTO2evtxLTShNlZo87Adez
        subject_person_id: p_rhYt9t4gYuDEpCnQq4aywZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SNxcwVE3mRaMhzML1z9b1H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QTRXrg95Y50TZZohBDLZAV
          claim_id: c_UTO2evtxLTShNlZo87Adez
          source_id: s_ClC3sF8nXjat-_f_PxI7XU
          stance: supports
          locator: CBDB：兄弟 王輦（205182）之父／母 王利
          quotation: null
          interpretation_note: 由兄弟关系推断：王軏 与 王輦 为同胞（CBDB 记「兄」），王輦 之父／母即 王軏 之父／母。
          source:
            id: s_ClC3sF8nXjat-_f_PxI7XU
            source_type: api_record
            title: 中国历代人物传记资料库：王軏（CBDB 329356）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329356&o=json
            external_identifier: CBDB:329356
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SNxcwVE3mRaMhzML1z9b1H
        status: active
        display_name: 王軏
        merged_into_person_id: null
    - claim:
        id: c_FJdRzUwvcjyBYqfNLqd8TC
        subject_person_id: p_rhYt9t4gYuDEpCnQq4aywZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Wre7pV46EMD77fsT1jQG8C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rUZBcRhGhuAJKhjh2l7VT9
          claim_id: c_FJdRzUwvcjyBYqfNLqd8TC
          source_id: s_16ke1tPqtNnUpyJVk-Qz-h
          stance: supports
          locator: CBDB：兄弟 王輦（205182）之父／母 王利
          quotation: null
          interpretation_note: 由兄弟关系推断：王軔 与 王輦 为同胞（CBDB 记「弟」），王輦 之父／母即 王軔 之父／母。
          source:
            id: s_16ke1tPqtNnUpyJVk-Qz-h
            source_type: api_record
            title: 中国历代人物传记资料库：王軔（CBDB 329350）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329350&o=json
            external_identifier: CBDB:329350
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Wre7pV46EMD77fsT1jQG8C
        status: active
        display_name: 王軔
        merged_into_person_id: null
    - claim:
        id: c_TQDOGkDE9XlIoBMPFvURVk
        subject_person_id: p_rhYt9t4gYuDEpCnQq4aywZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XPQGW4b2oZE9vHJ9vwQSw5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dRZLYpu8LHnavEfrzfcauP
          claim_id: c_TQDOGkDE9XlIoBMPFvURVk
          source_id: s_IrLtd8ctAm-ZvIDfYBHupa
          stance: supports
          locator: CBDB：兄弟 王輦（205182）之父／母 王利
          quotation: null
          interpretation_note: 由兄弟关系推断：王範 与 王輦 为同胞（CBDB 记「弟」），王輦 之父／母即 王範 之父／母。
          source:
            id: s_IrLtd8ctAm-ZvIDfYBHupa
            source_type: api_record
            title: 中国历代人物传记资料库：王範（CBDB 329348）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329348&o=json
            external_identifier: CBDB:329348
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XPQGW4b2oZE9vHJ9vwQSw5
        status: active
        display_name: 王範
        merged_into_person_id: null
    - claim:
        id: c__hIB0gxJ6ahuLREe2xjilk
        subject_person_id: p_rhYt9t4gYuDEpCnQq4aywZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e56pacND3mCEEv2EAQdG4F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cUDR4L52BKdC0HQjClDM9b
          claim_id: c__hIB0gxJ6ahuLREe2xjilk
          source_id: s_RnBtdCrLMlKP8VaqnijpBI
          stance: supports
          locator: CBDB：兄弟 王輦（205182）之父／母 王利
          quotation: null
          interpretation_note: 由兄弟关系推断：王轂 与 王輦 为同胞（CBDB 记「兄」），王輦 之父／母即 王轂 之父／母。
          source:
            id: s_RnBtdCrLMlKP8VaqnijpBI
            source_type: api_record
            title: 中国历代人物传记资料库：王轂（CBDB 329353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329353&o=json
            external_identifier: CBDB:329353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e56pacND3mCEEv2EAQdG4F
        status: active
        display_name: 王轂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王利

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王利 | accepted |
| bio.summary | 王利，明人物。嘉靖四十一年進士，籍贯定遠，曾任工部郎中。（中国历代人物传记资料库 CBDB 329344） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_MT9QqQenXKizWtnnGxJQyH | 王輦 | accepted |
| children | p_2omi1iD2DH3mmzWtSgzetd | 王軫 | accepted |
| children | p_4gA1e5BWfPswHNcfbKTQ7T | 王輻 | accepted |
| children | p_6D72VCCtVu5zyK1zSakJfA | 王輗 | accepted |
| children | p_K7HhPzvcPxufDAUCR72Cf8 | 王載 | accepted |
| children | p_SNxcwVE3mRaMhzML1z9b1H | 王軏 | accepted |
| children | p_Wre7pV46EMD77fsT1jQG8C | 王軔 | accepted |
| children | p_XPQGW4b2oZE9vHJ9vwQSw5 | 王範 | accepted |
| children | p_e56pacND3mCEEv2EAQdG4F | 王轂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王範（CBDB 329348）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329348&o=json)
- [中国历代人物传记资料库：王輻（CBDB 329357）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329357&o=json)
- [中国历代人物传记资料库：王轂（CBDB 329353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329353&o=json)
- [中国历代人物传记资料库：王利（CBDB 329344）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329344&o=json)
- [中国历代人物传记资料库：王輗（CBDB 329355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329355&o=json)
- [中国历代人物传记资料库：王軔（CBDB 329350）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329350&o=json)
- [中国历代人物传记资料库：王軏（CBDB 329356）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329356&o=json)
- [中国历代人物传记资料库：王載（CBDB 329351）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329351&o=json)
- [中国历代人物传记资料库：王軫（CBDB 329352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329352&o=json)
