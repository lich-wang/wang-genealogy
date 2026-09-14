---
schema: wang-person/v1
id: p_kUCuDeuG8a7t95vC5CL3P3
status: active
merged_into: null
display_name: 王惟幾
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q1aNeqNwgaMt1x5fayRaW6
        subject_person_id: p_kUCuDeuG8a7t95vC5CL3P3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟幾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q3ZyLdWF9oD253uYDRPvJv
          claim_id: c_q1aNeqNwgaMt1x5fayRaW6
          source_id: s_G9LQA5kv1xWtyUi2PTHzhJ
          stance: supports
          locator: CBDB:205658
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205658）
          source: &a1
            id: s_G9LQA5kv1xWtyUi2PTHzhJ
            source_type: api_record
            title: 中国历代人物传记资料库：王惟幾（CBDB 205658）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205658&o=json
            external_identifier: CBDB:205658
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.869Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ddhsA14xcXjkq2ePTpEGTT
        subject_person_id: p_kUCuDeuG8a7t95vC5CL3P3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1531年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BwQ4q1rcxZEUkfPBND5StD
          claim_id: c_ddhsA14xcXjkq2ePTpEGTT
          source_id: s_G9LQA5kv1xWtyUi2PTHzhJ
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
        id: c_wbZEhMQ6e6J2whqS8fssVi
        subject_person_id: p_kUCuDeuG8a7t95vC5CL3P3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟幾（生于1531年），明人物。隆慶二年進士，籍贯文安，入仕進士。（中国历代人物传记资料库 CBDB 205658）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gSJCXmlTcOSRM2Y2vw7C4U
          claim_id: c_wbZEhMQ6e6J2whqS8fssVi
          source_id: s_G9LQA5kv1xWtyUi2PTHzhJ
          stance: supports
          locator: CBDB:205658
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_J7d6Tp0TCpUaNNCHl76w5_
        subject_person_id: p_ftDTX1CGK9535aJ5ssi8pm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kUCuDeuG8a7t95vC5CL3P3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eMak-l3XOO3-xPhzdghO9E
          claim_id: c_J7d6Tp0TCpUaNNCHl76w5_
          source_id: s_gJtwo2DHCP5ApF7q4Ns4wK
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百零九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gJtwo2DHCP5ApF7q4Ns4wK
            source_type: api_record
            title: 中国历代人物传记资料库：王佩（CBDB 336609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336609&o=json
            external_identifier: CBDB:336609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.493Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ftDTX1CGK9535aJ5ssi8pm
        status: active
        display_name: 王佩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_z6dSEBkksBdmHiAqXLtAS2
        subject_person_id: p_2Z5KsjF2Qv6FAxDM7L8oeW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kUCuDeuG8a7t95vC5CL3P3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BSTNfZV__mdlHRf_JpmGBo
          claim_id: c_z6dSEBkksBdmHiAqXLtAS2
          source_id: s_994toR8SiaEAkfdHLoJqGW
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百零九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_994toR8SiaEAkfdHLoJqGW
            source_type: api_record
            title: 中国历代人物传记资料库：王深（CBDB 336608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336608&o=json
            external_identifier: CBDB:336608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.492Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2Z5KsjF2Qv6FAxDM7L8oeW
        status: active
        display_name: 王深
        merged_into_person_id: null
    - claim:
        id: c_5Hx_-rxl8IjQplvtfCxXvT
        subject_person_id: p_aqrbZvweVg6DTUHQBLVAPF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kUCuDeuG8a7t95vC5CL3P3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FNeZGyhDKdR2KVs11JZLQG
          claim_id: c_5Hx_-rxl8IjQplvtfCxXvT
          source_id: s_6NMQq9Y4MBMMn9zzLzPBUS
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百零九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6NMQq9Y4MBMMn9zzLzPBUS
            source_type: api_record
            title: 中国历代人物传记资料库：王翱（CBDB 336607）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336607&o=json
            external_identifier: CBDB:336607
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.490Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aqrbZvweVg6DTUHQBLVAPF
        status: active
        display_name: 王翱
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_S6qhP09JBZL6JEDUWOIKqB
        subject_person_id: p_3zYCjbZcQo6nRLakkYjU2T
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kUCuDeuG8a7t95vC5CL3P3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OW5W8hgnrdSDy6Z8RCglzR
          claim_id: c_S6qhP09JBZL6JEDUWOIKqB
          source_id: s_i-rDYezt5xSc0w94Bn9rG_
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205658 王惟幾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_i-rDYezt5xSc0w94Bn9rG_
            source_type: api_record
            title: 中国历代人物传记资料库：王為時（CBDB 336614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336614&o=json
            external_identifier: CBDB:336614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3zYCjbZcQo6nRLakkYjU2T
        status: active
        display_name: 王為時
        merged_into_person_id: null
    - claim:
        id: c_bfdR4mm5bqFCU5FZcT9fJv
        subject_person_id: p_8BwY1SjEdt5pff19FsyCCg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kUCuDeuG8a7t95vC5CL3P3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_10aI6ECO6Dh1I9CjoUadvk
          claim_id: c_bfdR4mm5bqFCU5FZcT9fJv
          source_id: s_RZ3rnJ5vIJEB64XfVRLCIE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205658 王惟幾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RZ3rnJ5vIJEB64XfVRLCIE
            source_type: api_record
            title: 中国历代人物传记资料库：王惟祗（CBDB 336617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336617&o=json
            external_identifier: CBDB:336617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8BwY1SjEdt5pff19FsyCCg
        status: active
        display_name: 王惟祗
        merged_into_person_id: null
    - claim:
        id: c_i-qNR-Koesz7_zU0_lpjbA
        subject_person_id: p_CuWvnnDEUpVkNe2DobN7J9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kUCuDeuG8a7t95vC5CL3P3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hiM73O4yJAzNhKfYEXH2TI
          claim_id: c_i-qNR-Koesz7_zU0_lpjbA
          source_id: s_Mbu6WQZabi-Pknh-sx00SP
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205658 王惟幾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Mbu6WQZabi-Pknh-sx00SP
            source_type: api_record
            title: 中国历代人物传记资料库：王惟垣（CBDB 336613）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336613&o=json
            external_identifier: CBDB:336613
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CuWvnnDEUpVkNe2DobN7J9
        status: active
        display_name: 王惟垣
        merged_into_person_id: null
    - claim:
        id: c_w3nvVJgyKUWphRjkA343-9
        subject_person_id: p_VFQ8oDe67KTSTHKBVdkHry
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kUCuDeuG8a7t95vC5CL3P3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gKfsdxicVWBKYDSRBv-2i9
          claim_id: c_w3nvVJgyKUWphRjkA343-9
          source_id: s_IFPep_qOa6AAYkZp_mV-0B
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205658 王惟幾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IFPep_qOa6AAYkZp_mV-0B
            source_type: api_record
            title: 中国历代人物传记资料库：王惟翰（CBDB 336619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336619&o=json
            external_identifier: CBDB:336619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VFQ8oDe67KTSTHKBVdkHry
        status: active
        display_name: 王惟翰
        merged_into_person_id: null
    - claim:
        id: c_LP1a99D4p7Vx0Gf19VxtPT
        subject_person_id: p_bCPz1L5uYHts2697j5csj2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kUCuDeuG8a7t95vC5CL3P3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L0WRlkdIi-kH-4XZltk0Q5
          claim_id: c_LP1a99D4p7Vx0Gf19VxtPT
          source_id: s_Pay5YrRuWkiDB9CcVhP9Zr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205658 王惟幾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Pay5YrRuWkiDB9CcVhP9Zr
            source_type: api_record
            title: 中国历代人物传记资料库：王惟邦（CBDB 336616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336616&o=json
            external_identifier: CBDB:336616
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bCPz1L5uYHts2697j5csj2
        status: active
        display_name: 王惟邦
        merged_into_person_id: null
    - claim:
        id: c_F-kH7tnG-mZCb9FVsG_Als
        subject_person_id: p_eBNjXtfVNJPNAKQX1AXBEC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kUCuDeuG8a7t95vC5CL3P3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hSo5wTNQZ7KiaMJb_3GV0w
          claim_id: c_F-kH7tnG-mZCb9FVsG_Als
          source_id: s_Nlxm3-oMcf9emY9rixIWzT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205658 王惟幾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Nlxm3-oMcf9emY9rixIWzT
            source_type: api_record
            title: 中国历代人物传记资料库：王惟誠（CBDB 336615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336615&o=json
            external_identifier: CBDB:336615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eBNjXtfVNJPNAKQX1AXBEC
        status: active
        display_name: 王惟誠
        merged_into_person_id: null
    - claim:
        id: c_X_aOCixIyJfjRHSwgf_SrT
        subject_person_id: p_kUCuDeuG8a7t95vC5CL3P3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ogs8LYM1HCL9aWfwQunUhX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fJd9I960CbcJSZ56LV9vTA
          claim_id: c_X_aOCixIyJfjRHSwgf_SrT
          source_id: s_4-2PMUimYUNFBsC0m1snfW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205658 王惟幾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4-2PMUimYUNFBsC0m1snfW
            source_type: api_record
            title: 中国历代人物传记资料库：王惟玄（CBDB 336618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336618&o=json
            external_identifier: CBDB:336618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ogs8LYM1HCL9aWfwQunUhX
        status: active
        display_name: 王惟玄
        merged_into_person_id: null
---

# 王惟幾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟幾 | accepted |
| birth.date | 1531年 | accepted |
| bio.summary | 王惟幾（生于1531年），明人物。隆慶二年進士，籍贯文安，入仕進士。（中国历代人物传记资料库 CBDB 205658） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ftDTX1CGK9535aJ5ssi8pm | 王佩 | accepted |
| ancestors | p_2Z5KsjF2Qv6FAxDM7L8oeW | 王深 | accepted |
| ancestors | p_aqrbZvweVg6DTUHQBLVAPF | 王翱 | accepted |
| other | p_3zYCjbZcQo6nRLakkYjU2T | 王為時 | accepted |
| other | p_8BwY1SjEdt5pff19FsyCCg | 王惟祗 | accepted |
| other | p_CuWvnnDEUpVkNe2DobN7J9 | 王惟垣 | accepted |
| other | p_VFQ8oDe67KTSTHKBVdkHry | 王惟翰 | accepted |
| other | p_bCPz1L5uYHts2697j5csj2 | 王惟邦 | accepted |
| other | p_eBNjXtfVNJPNAKQX1AXBEC | 王惟誠 | accepted |
| other | p_ogs8LYM1HCL9aWfwQunUhX | 王惟玄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翱（CBDB 336607）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336607&o=json)
- [中国历代人物传记资料库：王佩（CBDB 336609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336609&o=json)
- [中国历代人物传记资料库：王深（CBDB 336608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336608&o=json)
- [中国历代人物传记资料库：王惟邦（CBDB 336616）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336616&o=json)
- [中国历代人物传记资料库：王惟誠（CBDB 336615）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336615&o=json)
- [中国历代人物传记资料库：王惟翰（CBDB 336619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336619&o=json)
- [中国历代人物传记资料库：王惟幾（CBDB 205658）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205658&o=json)
- [中国历代人物传记资料库：王惟玄（CBDB 336618）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336618&o=json)
- [中国历代人物传记资料库：王惟垣（CBDB 336613）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336613&o=json)
- [中国历代人物传记资料库：王惟祗（CBDB 336617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336617&o=json)
- [中国历代人物传记资料库：王為時（CBDB 336614）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336614&o=json)
