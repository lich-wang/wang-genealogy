---
schema: wang-person/v1
id: p_DkL4KAP3Vyt4DGq87NkgHu
status: active
merged_into: null
display_name: 王尚學
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hFUCRuCwK5ArTE2PCZtiAp
        subject_person_id: p_DkL4KAP3Vyt4DGq87NkgHu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NtqeUHNzGyRppbnFzcVaBN
          claim_id: c_hFUCRuCwK5ArTE2PCZtiAp
          source_id: s_M4Ex9mBFUeX1FeRXYNTaAu
          stance: supports
          locator: CBDB:294537
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294537）
          source: &a1
            id: s_M4Ex9mBFUeX1FeRXYNTaAu
            source_type: api_record
            title: 中国历代人物传记资料库：王尚學（CBDB 294537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294537&o=json
            external_identifier: CBDB:294537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.469Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uDHsb8rN1e3WXUwou6iQLf
        subject_person_id: p_DkL4KAP3Vyt4DGq87NkgHu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚學，明人物。嘉靖十一年進士，籍贯東莞，曾任府同知、朝列大夫。（中国历代人物传记资料库 CBDB 294537）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fjTP2QRcrViDLvitcnspvL
          claim_id: c_uDHsb8rN1e3WXUwou6iQLf
          source_id: s_M4Ex9mBFUeX1FeRXYNTaAu
          stance: supports
          locator: CBDB:294537
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_z81Pcfo5JJEnNISP9eu5ll
        subject_person_id: p_DkL4KAP3Vyt4DGq87NkgHu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aJQ3escM6jBxZ8EP2idom6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9eLQNn25BSZNhp9859vDP5
          claim_id: c_z81Pcfo5JJEnNISP9eu5ll
          source_id: s_KnMS3iSfMsUJhjJLWsaYyT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百零七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KnMS3iSfMsUJhjJLWsaYyT
            source_type: api_record
            title: 中国历代人物传记资料库：王玉汝（CBDB 202795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202795&o=json
            external_identifier: CBDB:202795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.756Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aJQ3escM6jBxZ8EP2idom6
        status: active
        display_name: 王玉汝
        merged_into_person_id: null
    - claim:
        id: c_dqFW5ld4WFzWTH_PRDtYed
        subject_person_id: p_DkL4KAP3Vyt4DGq87NkgHu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2415asAcUVyLyfd79JjPmQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k0Eb5MUaC-lzZmDdov88Ks
          claim_id: c_dqFW5ld4WFzWTH_PRDtYed
          source_id: s_dyK34MsAz8cCbwLDabK808
          stance: supports
          locator: CBDB：兄弟 王玉汝（202795）之父／母 王尚學
          quotation: null
          interpretation_note: 由兄弟关系推断：王士鳳 与 王玉汝 为同胞（CBDB 记「兄」），王玉汝 之父／母即 王士鳳 之父／母。
          source:
            id: s_dyK34MsAz8cCbwLDabK808
            source_type: api_record
            title: 中国历代人物传记资料库：王士鳳（CBDB 294545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294545&o=json
            external_identifier: CBDB:294545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2415asAcUVyLyfd79JjPmQ
        status: active
        display_name: 王士鳳
        merged_into_person_id: null
    - claim:
        id: c_u23cTR8HIXk8rLEGrCfV-L
        subject_person_id: p_DkL4KAP3Vyt4DGq87NkgHu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3og8Ykbn24Asu288von2ma
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_temOl-0LvNDRcahGK1uqZl
          claim_id: c_u23cTR8HIXk8rLEGrCfV-L
          source_id: s_F6hy_QlYgmONZJ2IUhrBGm
          stance: supports
          locator: CBDB：兄弟 王玉汝（202795）之父／母 王尚學
          quotation: null
          interpretation_note: 由兄弟关系推断：王用汝 与 王玉汝 为同胞（CBDB 记「兄」），王玉汝 之父／母即 王用汝 之父／母。
          source:
            id: s_F6hy_QlYgmONZJ2IUhrBGm
            source_type: api_record
            title: 中国历代人物传记资料库：王用汝（CBDB 294544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294544&o=json
            external_identifier: CBDB:294544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3og8Ykbn24Asu288von2ma
        status: active
        display_name: 王用汝
        merged_into_person_id: null
    - claim:
        id: c_1FqAuSal0VvDc0wYLCqYe2
        subject_person_id: p_DkL4KAP3Vyt4DGq87NkgHu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JtMZbN3npmxduN2y4UXNK8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q_Ft-tYqg1phcfCiF1OWsF
          claim_id: c_1FqAuSal0VvDc0wYLCqYe2
          source_id: s_dj9icWwY1oAkZ8w6M-llS9
          stance: supports
          locator: CBDB：兄弟 王玉汝（202795）之父／母 王尚學
          quotation: null
          interpretation_note: 由兄弟关系推断：王士鵬 与 王玉汝 为同胞（CBDB 记「弟」），王玉汝 之父／母即 王士鵬 之父／母。
          source:
            id: s_dj9icWwY1oAkZ8w6M-llS9
            source_type: api_record
            title: 中国历代人物传记资料库：王士鵬（CBDB 294542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294542&o=json
            external_identifier: CBDB:294542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JtMZbN3npmxduN2y4UXNK8
        status: active
        display_name: 王士鵬
        merged_into_person_id: null
    - claim:
        id: c_mqpqGDsZKVShoFJg7frEM9
        subject_person_id: p_DkL4KAP3Vyt4DGq87NkgHu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S2b3QdFBLGeU8i6k4mbu98
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jyvx_4mpnQ2KjbXVxuF1_C
          claim_id: c_mqpqGDsZKVShoFJg7frEM9
          source_id: s_eDuZjee28P_aoTnmyszWAy
          stance: supports
          locator: CBDB：兄弟 王玉汝（202795）之父／母 王尚學
          quotation: null
          interpretation_note: 由兄弟关系推断：王士鶚 与 王玉汝 为同胞（CBDB 记「兄」），王玉汝 之父／母即 王士鶚 之父／母。
          source:
            id: s_eDuZjee28P_aoTnmyszWAy
            source_type: api_record
            title: 中国历代人物传记资料库：王士鶚（CBDB 294546）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294546&o=json
            external_identifier: CBDB:294546
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_S2b3QdFBLGeU8i6k4mbu98
        status: active
        display_name: 王士鶚
        merged_into_person_id: null
    - claim:
        id: c_-Yc6ypsmWA6CTeq2F80hy9
        subject_person_id: p_DkL4KAP3Vyt4DGq87NkgHu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ayW5qG1vMKBQxPjRXZf4bJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uz0ZjrJMI9AgGiG-MgG-5F
          claim_id: c_-Yc6ypsmWA6CTeq2F80hy9
          source_id: s_Yn3DSW3gkDun6k59Tc8Dzj
          stance: supports
          locator: CBDB：兄弟 王玉汝（202795）之父／母 王尚學
          quotation: null
          interpretation_note: 由兄弟关系推断：王與汝 与 王玉汝 为同胞（CBDB 记「兄」），王玉汝 之父／母即 王與汝 之父／母。
          source:
            id: s_Yn3DSW3gkDun6k59Tc8Dzj
            source_type: api_record
            title: 中国历代人物传记资料库：王與汝（CBDB 294547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294547&o=json
            external_identifier: CBDB:294547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ayW5qG1vMKBQxPjRXZf4bJ
        status: active
        display_name: 王與汝
        merged_into_person_id: null
    - claim:
        id: c_mPAQ-c7_OK0pL_Zq4wFB_i
        subject_person_id: p_DkL4KAP3Vyt4DGq87NkgHu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vWV3VtwRtV5Ab4UPTVqiof
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-APGm1J0-gLmji6jM91qUT
          claim_id: c_mPAQ-c7_OK0pL_Zq4wFB_i
          source_id: s_Pnv28j9mdVEVd2sIl6W3Vb
          stance: supports
          locator: CBDB：兄弟 王玉汝（202795）之父／母 王尚學
          quotation: null
          interpretation_note: 由兄弟关系推断：王士鸞 与 王玉汝 为同胞（CBDB 记「兄」），王玉汝 之父／母即 王士鸞 之父／母。
          source:
            id: s_Pnv28j9mdVEVd2sIl6W3Vb
            source_type: api_record
            title: 中国历代人物传记资料库：王士鸞（CBDB 294543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294543&o=json
            external_identifier: CBDB:294543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vWV3VtwRtV5Ab4UPTVqiof
        status: active
        display_name: 王士鸞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王尚學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚學 | accepted |
| bio.summary | 王尚學，明人物。嘉靖十一年進士，籍贯東莞，曾任府同知、朝列大夫。（中国历代人物传记资料库 CBDB 294537） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_aJQ3escM6jBxZ8EP2idom6 | 王玉汝 | accepted |
| children | p_2415asAcUVyLyfd79JjPmQ | 王士鳳 | accepted |
| children | p_3og8Ykbn24Asu288von2ma | 王用汝 | accepted |
| children | p_JtMZbN3npmxduN2y4UXNK8 | 王士鵬 | accepted |
| children | p_S2b3QdFBLGeU8i6k4mbu98 | 王士鶚 | accepted |
| children | p_ayW5qG1vMKBQxPjRXZf4bJ | 王與汝 | accepted |
| children | p_vWV3VtwRtV5Ab4UPTVqiof | 王士鸞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尚學（CBDB 294537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294537&o=json)
- [中国历代人物传记资料库：王士鶚（CBDB 294546）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294546&o=json)
- [中国历代人物传记资料库：王士鳳（CBDB 294545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294545&o=json)
- [中国历代人物传记资料库：王士鸞（CBDB 294543）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294543&o=json)
- [中国历代人物传记资料库：王士鵬（CBDB 294542）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294542&o=json)
- [中国历代人物传记资料库：王用汝（CBDB 294544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294544&o=json)
- [中国历代人物传记资料库：王與汝（CBDB 294547）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294547&o=json)
- [中国历代人物传记资料库：王玉汝（CBDB 202795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202795&o=json)
