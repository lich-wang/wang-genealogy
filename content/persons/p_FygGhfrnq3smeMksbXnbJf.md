---
schema: wang-person/v1
id: p_FygGhfrnq3smeMksbXnbJf
status: active
merged_into: null
display_name: 王雍熙
cbdb_id: 227290
revision: 9
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FPn4RymhpkiTPmFVhm5AzW
        subject_person_id: p_FygGhfrnq3smeMksbXnbJf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雍熙，明人物。萬曆丙戌科進士進士，籍贯臨清，曾任百戶、散官。（中国历代人物传记资料库 CBDB 227290）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_zKEaq9S7MvjWmj614TLiAZ
          claim_id: c_FPn4RymhpkiTPmFVhm5AzW
          source_id: s_LMpqUV3rwN8evhwmD2cqrD
          stance: supports
          locator: CBDB:227290
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LMpqUV3rwN8evhwmD2cqrD
            source_type: api_record
            title: 中国历代人物传记资料库：王雍熙（CBDB 227290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227290&o=json
            external_identifier: CBDB:227290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ADKZno9CJx6BJu6mMTQv4y
        subject_person_id: p_FygGhfrnq3smeMksbXnbJf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雍熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mUdeuEm4Xk8YPK4x16LunV
          claim_id: c_ADKZno9CJx6BJu6mMTQv4y
          source_id: s_LMpqUV3rwN8evhwmD2cqrD
          stance: supports
          locator: CBDB:227290
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source:
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
      object_person:
        id: p_4UbRK7w6DiK7iFYWsav6v1
        status: active
        display_name: 王都
        merged_into_person_id: null
    - claim:
        id: c_eWNgNN-n6f2UUUt7YCKgfB
        subject_person_id: p_FygGhfrnq3smeMksbXnbJf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4o6RLir4wuSksA4MPcBjzS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_APPTCrAhf54LyUByYirPqt
          claim_id: c_eWNgNN-n6f2UUUt7YCKgfB
          source_id: s_hO_Bvvg4cBJQ0QIcbS1wei
          stance: supports
          locator: CBDB：兄弟 王都（207078）之父／母 王雍熙
          quotation: null
          interpretation_note: 由兄弟关系推断：王境 与 王都 为同胞（CBDB 记「弟」），王都 之父／母即 王境 之父／母。
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
        id: c_1VNl5S6aCOhRNvva5myS5u
        subject_person_id: p_FygGhfrnq3smeMksbXnbJf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ccxd8dESoCvX29vwcf9Coy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D4Z0mx09iNCiYAe_9D5nlt
          claim_id: c_1VNl5S6aCOhRNvva5myS5u
          source_id: s_gTzyRAUJ-HoqgM4EOQ_yfC
          stance: supports
          locator: CBDB：兄弟 王都（207078）之父／母 王雍熙
          quotation: null
          interpretation_note: 由兄弟关系推断：王一元 与 王都 为同胞（CBDB 记「弟」），王都 之父／母即 王一元 之父／母。
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
        id: c_XRH394c5-YeHegPcalgXWD
        subject_person_id: p_FygGhfrnq3smeMksbXnbJf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Cie96NMvvup3pJi7mJexgp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8eXCywFgEpjr218PvzQAGZ
          claim_id: c_XRH394c5-YeHegPcalgXWD
          source_id: s_uFt9GWdZlbC7AXJJgnGNHU
          stance: supports
          locator: CBDB：兄弟 王都（207078）之父／母 王雍熙
          quotation: null
          interpretation_note: 由兄弟关系推断：王臺 与 王都 为同胞（CBDB 记「兄」），王都 之父／母即 王臺 之父／母。
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
        id: c_GuCDYWmVPqtX2e3lCOMn75
        subject_person_id: p_FygGhfrnq3smeMksbXnbJf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NSN5WaTsETMpXCJYYGPQeh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_akRKPkDoodMeox82d9EIjt
          claim_id: c_GuCDYWmVPqtX2e3lCOMn75
          source_id: s_Ih07qhNU_a2Jtpi_JmifZD
          stance: supports
          locator: CBDB：兄弟 王都（207078）之父／母 王雍熙
          quotation: null
          interpretation_note: 由兄弟关系推断：王永年 与 王都 为同胞（CBDB 记「兄」），王都 之父／母即 王永年 之父／母。
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
        id: c_pYQNe-myP8_7Z57sqV-Gqd
        subject_person_id: p_FygGhfrnq3smeMksbXnbJf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TJkmSa4Ku2GQQz1A5EFXrB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vqAHwZCdV-PvML2IM_I6sr
          claim_id: c_pYQNe-myP8_7Z57sqV-Gqd
          source_id: s_u_LNVH8BxCfFBsNmc1niXx
          stance: supports
          locator: CBDB：兄弟 王都（207078）之父／母 王雍熙
          quotation: null
          interpretation_note: 由兄弟关系推断：王璽 与 王都 为同胞（CBDB 记「弟」），王都 之父／母即 王璽 之父／母。
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
        id: c_dJpJ4fRFkBTCSg1d9C6PJ9
        subject_person_id: p_FygGhfrnq3smeMksbXnbJf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VP8x2mAqSpnsTMAqqMPMLM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bmdiuJQ9ym34qXXXwt4u7f
          claim_id: c_dJpJ4fRFkBTCSg1d9C6PJ9
          source_id: s_Tsx7wWk9LzRgKj7fUVETVl
          stance: supports
          locator: CBDB：兄弟 王都（207078）之父／母 王雍熙
          quotation: null
          interpretation_note: 由兄弟关系推断：王至 与 王都 为同胞（CBDB 记「兄」），王都 之父／母即 王至 之父／母。
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
        id: c_T95nfXMsI-dqxsEpj1hSKz
        subject_person_id: p_FygGhfrnq3smeMksbXnbJf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_byyZthQWyZVmWP7uHiLRM9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LmZ2uyOm9Hl2WJ7PMH9D5N
          claim_id: c_T95nfXMsI-dqxsEpj1hSKz
          source_id: s_OpnGKK7abl8Rb_Y5wuWLN3
          stance: supports
          locator: CBDB：兄弟 王都（207078）之父／母 王雍熙
          quotation: null
          interpretation_note: 由兄弟关系推断：王陛 与 王都 为同胞（CBDB 记「兄」），王都 之父／母即 王陛 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王雍熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王雍熙，明人物。萬曆丙戌科進士進士，籍贯臨清，曾任百戶、散官。（中国历代人物传记资料库 CBDB 227290） | accepted |
| name.primary | 王雍熙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4UbRK7w6DiK7iFYWsav6v1 | 王都 | accepted |
| children | p_4o6RLir4wuSksA4MPcBjzS | 王境 | accepted |
| children | p_Ccxd8dESoCvX29vwcf9Coy | 王一元 | accepted |
| children | p_Cie96NMvvup3pJi7mJexgp | 王臺 | accepted |
| children | p_NSN5WaTsETMpXCJYYGPQeh | 王永年 | accepted |
| children | p_TJkmSa4Ku2GQQz1A5EFXrB | 王璽 | accepted |
| children | p_VP8x2mAqSpnsTMAqqMPMLM | 王至 | accepted |
| children | p_byyZthQWyZVmWP7uHiLRM9 | 王陛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王陛（CBDB 227300）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227300&o=json)
- [中国历代人物传记资料库：王都（CBDB 207078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207078&o=json)
- [中国历代人物传记资料库：王境（CBDB 227297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227297&o=json)
- [中国历代人物传记资料库：王臺（CBDB 227301）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227301&o=json)
- [中国历代人物传记资料库：王璽（CBDB 227296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227296&o=json)
- [中国历代人物传记资料库：王一元（CBDB 227298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227298&o=json)
- [中国历代人物传记资料库：王雍熙（CBDB 227290）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227290&o=json)
- [中国历代人物传记资料库：王永年（CBDB 227302）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227302&o=json)
- [中国历代人物传记资料库：王至（CBDB 227299）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227299&o=json)
