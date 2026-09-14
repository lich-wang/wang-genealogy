---
schema: wang-person/v1
id: p_4UbRK7w6DiK7iFYWsav6v1
status: active
merged_into: null
display_name: 王都
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_23MbqcEM8dPnpdX422dxJM
        subject_person_id: p_4UbRK7w6DiK7iFYWsav6v1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王都
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SfcZrqPvQift8So4jzVNDu
          claim_id: c_23MbqcEM8dPnpdX422dxJM
          source_id: s_avnRdC5KtG8zzfeDZxHPY8
          stance: supports
          locator: CBDB:207078
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207078）
          source: &a1
            id: s_avnRdC5KtG8zzfeDZxHPY8
            source_type: api_record
            title: 中国历代人物传记资料库：王都（CBDB 207078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207078&o=json
            external_identifier: CBDB:207078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_w9VvfbNDkCrPwFq6cCtEQ8
        subject_person_id: p_4UbRK7w6DiK7iFYWsav6v1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1556年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BxKmHkvEJJaFpmjR7jEskF
          claim_id: c_w9VvfbNDkCrPwFq6cCtEQ8
          source_id: s_avnRdC5KtG8zzfeDZxHPY8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iN4zf14W4xpVzEpPD79KwF
        subject_person_id: p_4UbRK7w6DiK7iFYWsav6v1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王都（生于1556年），明人物。明清進士進士，籍贯鄱陽，入仕進士，曾任推官、都察院觀政。（中国历代人物传记资料库 CBDB 207078）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3n-GRnit6LJueFM9t5M5H3
          claim_id: c_iN4zf14W4xpVzEpPD79KwF
          source_id: s_avnRdC5KtG8zzfeDZxHPY8
          stance: supports
          locator: CBDB:207078
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fRs7tYqEGdbQfJ66r1GgV9
        subject_person_id: p_FygGhfrnq3smeMksbXnbJf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4UbRK7w6DiK7iFYWsav6v1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ce5yaK-XTI4BjRA89ZFsFm
          claim_id: c_fRs7tYqEGdbQfJ66r1GgV9
          source_id: s_avnRdC5KtG8zzfeDZxHPY8
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FygGhfrnq3smeMksbXnbJf
        status: active
        display_name: 王雍熙
        merged_into_person_id: null
  children:
    - claim:
        id: c_vC1F1X13CzGLowDxZV--4Q
        subject_person_id: p_4UbRK7w6DiK7iFYWsav6v1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LCDZSEFLnkNUGBCXB5a5GQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yd80Uk88SA0zTnoXI3b-E3
          claim_id: c_vC1F1X13CzGLowDxZV--4Q
          source_id: s_avnRdC5KtG8zzfeDZxHPY8
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LCDZSEFLnkNUGBCXB5a5GQ
        status: active
        display_name: 王胤登
        merged_into_person_id: null
    - claim:
        id: c_Fj-fvy6ueOOm4SY9pKHoZX
        subject_person_id: p_4UbRK7w6DiK7iFYWsav6v1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B6qxT3z1uEC6DSYrufjY7U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WWj5_EaxlCNFeKd4J22lWk
          claim_id: c_Fj-fvy6ueOOm4SY9pKHoZX
          source_id: s_avnRdC5KtG8zzfeDZxHPY8
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_B6qxT3z1uEC6DSYrufjY7U
        status: active
        display_name: 王胤第
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_m0KzebUUmSEVwHqIrAM4qc
        subject_person_id: p_4UbRK7w6DiK7iFYWsav6v1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_6jY2yYhcd5uuuynd8grDYc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_msLNjZoJozRfxV1qZ5ISlx
          claim_id: c_m0KzebUUmSEVwHqIrAM4qc
          source_id: s_ipltczx7wa8nwtWjNr6FWH
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ipltczx7wa8nwtWjNr6FWH
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王都妻)（CBDB 227295）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227295&o=json
            external_identifier: CBDB:227295
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6jY2yYhcd5uuuynd8grDYc
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_eICVmrOV9ePLbKXqNOxAnP
        subject_person_id: p_o5jgd5GMnToyKrFHTbC9fH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4UbRK7w6DiK7iFYWsav6v1
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b-66HCAUONLKvsdqab0RLT
          claim_id: c_eICVmrOV9ePLbKXqNOxAnP
          source_id: s_avnRdC5KtG8zzfeDZxHPY8
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_o5jgd5GMnToyKrFHTbC9fH
        status: active
        display_name: 王英
        merged_into_person_id: null
    - claim:
        id: c_fCk_rbCAsfIkuXSuz1JdsK
        subject_person_id: p_o6NSmGt2wjqPcWiQP6meF1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4UbRK7w6DiK7iFYWsav6v1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jRGNXQ3a3N3Q8uk-g_ubrA
          claim_id: c_fCk_rbCAsfIkuXSuz1JdsK
          source_id: s_avnRdC5KtG8zzfeDZxHPY8
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_o6NSmGt2wjqPcWiQP6meF1
        status: active
        display_name: 王崙
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_BzQecNoUsy9A-z7B7RZ6Y_
        subject_person_id: p_4UbRK7w6DiK7iFYWsav6v1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_4o6RLir4wuSksA4MPcBjzS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qyjf3Cxn_sI3qyVIMNK8_k
          claim_id: c_BzQecNoUsy9A-z7B7RZ6Y_
          source_id: s_hO_Bvvg4cBJQ0QIcbS1wei
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207078 王都）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hO_Bvvg4cBJQ0QIcbS1wei
            source_type: api_record
            title: 中国历代人物传记资料库：王境（CBDB 227297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227297&o=json
            external_identifier: CBDB:227297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4o6RLir4wuSksA4MPcBjzS
        status: active
        display_name: 王境
        merged_into_person_id: null
    - claim:
        id: c_TmlTipgMBYagUi18ZNBjOq
        subject_person_id: p_4UbRK7w6DiK7iFYWsav6v1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Ccxd8dESoCvX29vwcf9Coy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tqGrZdhUvOyoIG07SZ1TlF
          claim_id: c_TmlTipgMBYagUi18ZNBjOq
          source_id: s_gTzyRAUJ-HoqgM4EOQ_yfC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207078 王都）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gTzyRAUJ-HoqgM4EOQ_yfC
            source_type: api_record
            title: 中国历代人物传记资料库：王一元（CBDB 227298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227298&o=json
            external_identifier: CBDB:227298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ccxd8dESoCvX29vwcf9Coy
        status: active
        display_name: 王一元
        merged_into_person_id: null
    - claim:
        id: c_ZtYZbVJ_Q4YCcyiqYiwPFI
        subject_person_id: p_4UbRK7w6DiK7iFYWsav6v1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Cie96NMvvup3pJi7mJexgp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1rIc3jrK8u1YaRcnvRsLnx
          claim_id: c_ZtYZbVJ_Q4YCcyiqYiwPFI
          source_id: s_uFt9GWdZlbC7AXJJgnGNHU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207078 王都）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uFt9GWdZlbC7AXJJgnGNHU
            source_type: api_record
            title: 中国历代人物传记资料库：王臺（CBDB 227301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227301&o=json
            external_identifier: CBDB:227301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Cie96NMvvup3pJi7mJexgp
        status: active
        display_name: 王臺
        merged_into_person_id: null
    - claim:
        id: c_Aks8IFEH0oumb9ebgQfq-L
        subject_person_id: p_4UbRK7w6DiK7iFYWsav6v1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NSN5WaTsETMpXCJYYGPQeh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5fJ1JQ9dC8Jr27BZLuin53
          claim_id: c_Aks8IFEH0oumb9ebgQfq-L
          source_id: s_Ih07qhNU_a2Jtpi_JmifZD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207078 王都）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ih07qhNU_a2Jtpi_JmifZD
            source_type: api_record
            title: 中国历代人物传记资料库：王永年（CBDB 227302）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227302&o=json
            external_identifier: CBDB:227302
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NSN5WaTsETMpXCJYYGPQeh
        status: active
        display_name: 王永年
        merged_into_person_id: null
    - claim:
        id: c_UJACdEONobbXTrHcG7Qvft
        subject_person_id: p_4UbRK7w6DiK7iFYWsav6v1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TJkmSa4Ku2GQQz1A5EFXrB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zJlTzaNUa7unBxbnqn_Sgh
          claim_id: c_UJACdEONobbXTrHcG7Qvft
          source_id: s_u_LNVH8BxCfFBsNmc1niXx
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207078 王都）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_u_LNVH8BxCfFBsNmc1niXx
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 227296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227296&o=json
            external_identifier: CBDB:227296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TJkmSa4Ku2GQQz1A5EFXrB
        status: active
        display_name: 王璽
        merged_into_person_id: null
    - claim:
        id: c_uBGQLETMScMONcjrvHOza4
        subject_person_id: p_4UbRK7w6DiK7iFYWsav6v1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VP8x2mAqSpnsTMAqqMPMLM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N9KVrPdpGco_Mj2LuE5mkO
          claim_id: c_uBGQLETMScMONcjrvHOza4
          source_id: s_Tsx7wWk9LzRgKj7fUVETVl
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207078 王都）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Tsx7wWk9LzRgKj7fUVETVl
            source_type: api_record
            title: 中国历代人物传记资料库：王至（CBDB 227299）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227299&o=json
            external_identifier: CBDB:227299
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VP8x2mAqSpnsTMAqqMPMLM
        status: active
        display_name: 王至
        merged_into_person_id: null
    - claim:
        id: c_DUa_1H9IHLUPLDUArJfZrS
        subject_person_id: p_4UbRK7w6DiK7iFYWsav6v1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_byyZthQWyZVmWP7uHiLRM9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l03fGPStDzIrrNE-AsKQ7W
          claim_id: c_DUa_1H9IHLUPLDUArJfZrS
          source_id: s_OpnGKK7abl8Rb_Y5wuWLN3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207078 王都）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OpnGKK7abl8Rb_Y5wuWLN3
            source_type: api_record
            title: 中国历代人物传记资料库：王陛（CBDB 227300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227300&o=json
            external_identifier: CBDB:227300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_byyZthQWyZVmWP7uHiLRM9
        status: active
        display_name: 王陛
        merged_into_person_id: null
---

# 王都

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王都 | accepted |
| birth.date | 1556年 | accepted |
| bio.summary | 王都（生于1556年），明人物。明清進士進士，籍贯鄱陽，入仕進士，曾任推官、都察院觀政。（中国历代人物传记资料库 CBDB 207078） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FygGhfrnq3smeMksbXnbJf | 王雍熙 | accepted |
| children | p_LCDZSEFLnkNUGBCXB5a5GQ | 王胤登 | accepted |
| children | p_B6qxT3z1uEC6DSYrufjY7U | 王胤第 | accepted |
| spouses | p_6jY2yYhcd5uuuynd8grDYc | 張氏 | accepted |
| ancestors | p_o5jgd5GMnToyKrFHTbC9fH | 王英 | accepted |
| ancestors | p_o6NSmGt2wjqPcWiQP6meF1 | 王崙 | accepted |
| other | p_4o6RLir4wuSksA4MPcBjzS | 王境 | accepted |
| other | p_Ccxd8dESoCvX29vwcf9Coy | 王一元 | accepted |
| other | p_Cie96NMvvup3pJi7mJexgp | 王臺 | accepted |
| other | p_NSN5WaTsETMpXCJYYGPQeh | 王永年 | accepted |
| other | p_TJkmSa4Ku2GQQz1A5EFXrB | 王璽 | accepted |
| other | p_VP8x2mAqSpnsTMAqqMPMLM | 王至 | accepted |
| other | p_byyZthQWyZVmWP7uHiLRM9 | 王陛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王陛（CBDB 227300）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227300&o=json)
- [中国历代人物传记资料库：王都（CBDB 207078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207078&o=json)
- [中国历代人物传记资料库：王境（CBDB 227297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227297&o=json)
- [中国历代人物传记资料库：王臺（CBDB 227301）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227301&o=json)
- [中国历代人物传记资料库：王璽（CBDB 227296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227296&o=json)
- [中国历代人物传记资料库：王一元（CBDB 227298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227298&o=json)
- [中国历代人物传记资料库：王永年（CBDB 227302）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227302&o=json)
- [中国历代人物传记资料库：王至（CBDB 227299）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227299&o=json)
- [中国历代人物传记资料库：張氏(王都妻)（CBDB 227295）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227295&o=json)
