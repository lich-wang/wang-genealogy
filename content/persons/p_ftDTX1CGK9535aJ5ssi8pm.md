---
schema: wang-person/v1
id: p_ftDTX1CGK9535aJ5ssi8pm
status: active
merged_into: null
display_name: 王佩
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1gm1Vjuu6Eis31gwCCA1Er
        subject_person_id: p_ftDTX1CGK9535aJ5ssi8pm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2PN4HZ3ANB7WNi7wwF53tc
          claim_id: c_1gm1Vjuu6Eis31gwCCA1Er
          source_id: s_gJtwo2DHCP5ApF7q4Ns4wK
          stance: supports
          locator: CBDB:336609
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336609）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VrZDijFX9TbHRrAiQJGu7C
        subject_person_id: p_ftDTX1CGK9535aJ5ssi8pm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩，明人物。隆慶二年進士，籍贯文安，曾任知府。（中国历代人物传记资料库 CBDB 336609）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xLAg8OyHQsoc8lYOVoCAuE
          claim_id: c_VrZDijFX9TbHRrAiQJGu7C
          source_id: s_gJtwo2DHCP5ApF7q4Ns4wK
          stance: supports
          locator: CBDB:336609
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_kUCuDeuG8a7t95vC5CL3P3
        status: active
        display_name: 王惟幾
        merged_into_person_id: null
    - claim:
        id: c_EeZ7Dr-_41M-hX4xK4-0zK
        subject_person_id: p_ftDTX1CGK9535aJ5ssi8pm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3zYCjbZcQo6nRLakkYjU2T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UROL4F99xZTMnt0U3CAfO2
          claim_id: c_EeZ7Dr-_41M-hX4xK4-0zK
          source_id: s_i-rDYezt5xSc0w94Bn9rG_
          stance: supports
          locator: CBDB：兄弟 王惟幾（205658）之父／母 王佩
          quotation: null
          interpretation_note: 由兄弟关系推断：王為時 与 王惟幾 为同胞（CBDB 记「弟」），王惟幾 之父／母即 王為時 之父／母。
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
        id: c_Sc6pK9QYIq40LaJlyeSMu2
        subject_person_id: p_ftDTX1CGK9535aJ5ssi8pm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8BwY1SjEdt5pff19FsyCCg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6iot2Q85piDmdKWWkRJsvB
          claim_id: c_Sc6pK9QYIq40LaJlyeSMu2
          source_id: s_RZ3rnJ5vIJEB64XfVRLCIE
          stance: supports
          locator: CBDB：兄弟 王惟幾（205658）之父／母 王佩
          quotation: null
          interpretation_note: 由兄弟关系推断：王惟祗 与 王惟幾 为同胞（CBDB 记「兄」），王惟幾 之父／母即 王惟祗 之父／母。
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
        id: c_-H4ZBvMKOz1JGAGwWK7f1Z
        subject_person_id: p_ftDTX1CGK9535aJ5ssi8pm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CuWvnnDEUpVkNe2DobN7J9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sj6VUofrlg4CO84Y7FJi6T
          claim_id: c_-H4ZBvMKOz1JGAGwWK7f1Z
          source_id: s_Mbu6WQZabi-Pknh-sx00SP
          stance: supports
          locator: CBDB：兄弟 王惟幾（205658）之父／母 王佩
          quotation: null
          interpretation_note: 由兄弟关系推断：王惟垣 与 王惟幾 为同胞（CBDB 记「弟」），王惟幾 之父／母即 王惟垣 之父／母。
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
        id: c_rxXhSn1YzD4bFlVCI7QVfh
        subject_person_id: p_ftDTX1CGK9535aJ5ssi8pm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VFQ8oDe67KTSTHKBVdkHry
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XBHYdiV089oTjMlPPUMDBy
          claim_id: c_rxXhSn1YzD4bFlVCI7QVfh
          source_id: s_IFPep_qOa6AAYkZp_mV-0B
          stance: supports
          locator: CBDB：兄弟 王惟幾（205658）之父／母 王佩
          quotation: null
          interpretation_note: 由兄弟关系推断：王惟翰 与 王惟幾 为同胞（CBDB 记「兄」），王惟幾 之父／母即 王惟翰 之父／母。
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
        id: c_tvqhSiU7YVBO9kTaeVlpFq
        subject_person_id: p_ftDTX1CGK9535aJ5ssi8pm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bCPz1L5uYHts2697j5csj2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hCmxp4aVqs8jR0VAUn3A7Q
          claim_id: c_tvqhSiU7YVBO9kTaeVlpFq
          source_id: s_Pay5YrRuWkiDB9CcVhP9Zr
          stance: supports
          locator: CBDB：兄弟 王惟幾（205658）之父／母 王佩
          quotation: null
          interpretation_note: 由兄弟关系推断：王惟邦 与 王惟幾 为同胞（CBDB 记「兄」），王惟幾 之父／母即 王惟邦 之父／母。
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
        id: c_FOZEXHxIFjSNeDNWDgfYqe
        subject_person_id: p_ftDTX1CGK9535aJ5ssi8pm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eBNjXtfVNJPNAKQX1AXBEC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2xMnFEZpWwrVUOTgn7hrYi
          claim_id: c_FOZEXHxIFjSNeDNWDgfYqe
          source_id: s_Nlxm3-oMcf9emY9rixIWzT
          stance: supports
          locator: CBDB：兄弟 王惟幾（205658）之父／母 王佩
          quotation: null
          interpretation_note: 由兄弟关系推断：王惟誠 与 王惟幾 为同胞（CBDB 记「兄」），王惟幾 之父／母即 王惟誠 之父／母。
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
        id: c__wECjalo96jHLVAyErmuQw
        subject_person_id: p_ftDTX1CGK9535aJ5ssi8pm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ogs8LYM1HCL9aWfwQunUhX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YTTg_H8mgUrdyHjpc9kqKI
          claim_id: c__wECjalo96jHLVAyErmuQw
          source_id: s_4-2PMUimYUNFBsC0m1snfW
          stance: supports
          locator: CBDB：兄弟 王惟幾（205658）之父／母 王佩
          quotation: null
          interpretation_note: 由兄弟关系推断：王惟玄 与 王惟幾 为同胞（CBDB 记「兄」），王惟幾 之父／母即 王惟玄 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佩 | accepted |
| bio.summary | 王佩，明人物。隆慶二年進士，籍贯文安，曾任知府。（中国历代人物传记资料库 CBDB 336609） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_kUCuDeuG8a7t95vC5CL3P3 | 王惟幾 | accepted |
| children | p_3zYCjbZcQo6nRLakkYjU2T | 王為時 | accepted |
| children | p_8BwY1SjEdt5pff19FsyCCg | 王惟祗 | accepted |
| children | p_CuWvnnDEUpVkNe2DobN7J9 | 王惟垣 | accepted |
| children | p_VFQ8oDe67KTSTHKBVdkHry | 王惟翰 | accepted |
| children | p_bCPz1L5uYHts2697j5csj2 | 王惟邦 | accepted |
| children | p_eBNjXtfVNJPNAKQX1AXBEC | 王惟誠 | accepted |
| children | p_ogs8LYM1HCL9aWfwQunUhX | 王惟玄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佩（CBDB 336609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336609&o=json)
- [中国历代人物传记资料库：王惟邦（CBDB 336616）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336616&o=json)
- [中国历代人物传记资料库：王惟誠（CBDB 336615）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336615&o=json)
- [中国历代人物传记资料库：王惟翰（CBDB 336619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336619&o=json)
- [中国历代人物传记资料库：王惟玄（CBDB 336618）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336618&o=json)
- [中国历代人物传记资料库：王惟垣（CBDB 336613）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336613&o=json)
- [中国历代人物传记资料库：王惟祗（CBDB 336617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336617&o=json)
- [中国历代人物传记资料库：王為時（CBDB 336614）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336614&o=json)
