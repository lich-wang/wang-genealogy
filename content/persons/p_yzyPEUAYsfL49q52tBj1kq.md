---
schema: wang-person/v1
id: p_yzyPEUAYsfL49q52tBj1kq
status: active
merged_into: null
display_name: 王用中
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dL92FyLqkTEE7KEWPuZXJb
        subject_person_id: p_yzyPEUAYsfL49q52tBj1kq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G9L1HsB1ze7knEc55C4xja
          claim_id: c_dL92FyLqkTEE7KEWPuZXJb
          source_id: s_1SGhdNvrpL4cDvNZ7h9REZ
          stance: supports
          locator: CBDB:221766
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221766）
          source: &a1
            id: s_1SGhdNvrpL4cDvNZ7h9REZ
            source_type: api_record
            title: 中国历代人物传记资料库：王用中（CBDB 221766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221766&o=json
            external_identifier: CBDB:221766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.338Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iLv6b3H16Zm2fTtEU3MGTq
        subject_person_id: p_yzyPEUAYsfL49q52tBj1kq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用中，明人物。萬曆八年進士，籍贯滄州，入仕監生。（中国历代人物传记资料库 CBDB 221766）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__cR1Kz035F66-G1SC0hjd9
          claim_id: c_iLv6b3H16Zm2fTtEU3MGTq
          source_id: s_1SGhdNvrpL4cDvNZ7h9REZ
          stance: supports
          locator: CBDB:221766
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Sxb76yu8h8oW7scHZ_lnie
        subject_person_id: p_yzyPEUAYsfL49q52tBj1kq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_88N8F7QC67BDANQ41w4EaZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZQ5zGod9E3ojBXLlOC954U
          claim_id: c_Sxb76yu8h8oW7scHZ_lnie
          source_id: s_1SGhdNvrpL4cDvNZ7h9REZ
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百一十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_88N8F7QC67BDANQ41w4EaZ
        status: active
        display_name: 王顯仁
        merged_into_person_id: null
    - claim:
        id: c_GidboOyq7wcqisCidfGIyG
        subject_person_id: p_yzyPEUAYsfL49q52tBj1kq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S61J3DNmWarB1tb4V8fXHd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IGV3RFim4HjzkU5PaITIT3
          claim_id: c_GidboOyq7wcqisCidfGIyG
          source_id: s_y9_VPBJFoXkPoiEyNSW4gu
          stance: supports
          locator: CBDB：兄弟 王顯仁（206702）之父／母 王用中
          quotation: null
          interpretation_note: 由兄弟关系推断：王累仁 与 王顯仁 为同胞（CBDB 记「兄」），王顯仁 之父／母即 王累仁 之父／母。
          source:
            id: s_y9_VPBJFoXkPoiEyNSW4gu
            source_type: api_record
            title: 中国历代人物传记资料库：王累仁（CBDB 221773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221773&o=json
            external_identifier: CBDB:221773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_S61J3DNmWarB1tb4V8fXHd
        status: active
        display_name: 王累仁
        merged_into_person_id: null
    - claim:
        id: c_Ji46VKFjDydFRjo0von4ks
        subject_person_id: p_yzyPEUAYsfL49q52tBj1kq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V2V8T19kit7kSV7NWUMBHL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QNrzCuuHx2w-1k_8LVpVjy
          claim_id: c_Ji46VKFjDydFRjo0von4ks
          source_id: s_ct80nNoqxTDC1PVOWo6bbG
          stance: supports
          locator: CBDB：兄弟 王顯仁（206702）之父／母 王用中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同仁 与 王顯仁 为同胞（CBDB 记「兄」），王顯仁 之父／母即 王同仁 之父／母。
          source:
            id: s_ct80nNoqxTDC1PVOWo6bbG
            source_type: api_record
            title: 中国历代人物传记资料库：王同仁（CBDB 221774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221774&o=json
            external_identifier: CBDB:221774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V2V8T19kit7kSV7NWUMBHL
        status: active
        display_name: 王同仁
        merged_into_person_id: null
    - claim:
        id: c_YA4xtsRwYX4VeVZSXN5OF8
        subject_person_id: p_yzyPEUAYsfL49q52tBj1kq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X7R8nrWvDR9JaDQeatiuBC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QwpYI_di64TXOCFx1m_hN0
          claim_id: c_YA4xtsRwYX4VeVZSXN5OF8
          source_id: s_KJspu6uwS8_lUNFM74XrkB
          stance: supports
          locator: CBDB：兄弟 王顯仁（206702）之父／母 王用中
          quotation: null
          interpretation_note: 由兄弟关系推断：王世仁 与 王顯仁 为同胞（CBDB 记「兄」），王顯仁 之父／母即 王世仁 之父／母。
          source:
            id: s_KJspu6uwS8_lUNFM74XrkB
            source_type: api_record
            title: 中国历代人物传记资料库：王世仁（CBDB 221775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221775&o=json
            external_identifier: CBDB:221775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_X7R8nrWvDR9JaDQeatiuBC
        status: active
        display_name: 王世仁
        merged_into_person_id: null
    - claim:
        id: c_qN3yFZ1nNVfuZyYoZhIVVG
        subject_person_id: p_yzyPEUAYsfL49q52tBj1kq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YFaXZA3dXJaciqHKQ72Qru
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PCm4OCKOM9PT-_13LatqEQ
          claim_id: c_qN3yFZ1nNVfuZyYoZhIVVG
          source_id: s_1n59qTyyBQKli26Bg8YWmI
          stance: supports
          locator: CBDB：兄弟 王顯仁（206702）之父／母 王用中
          quotation: null
          interpretation_note: 由兄弟关系推断：王堯仁 与 王顯仁 为同胞（CBDB 记「弟」），王顯仁 之父／母即 王堯仁 之父／母。
          source:
            id: s_1n59qTyyBQKli26Bg8YWmI
            source_type: api_record
            title: 中国历代人物传记资料库：王堯仁（CBDB 221770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221770&o=json
            external_identifier: CBDB:221770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YFaXZA3dXJaciqHKQ72Qru
        status: active
        display_name: 王堯仁
        merged_into_person_id: null
    - claim:
        id: c_5TXVeCdEh7Bux-AvM0F264
        subject_person_id: p_yzyPEUAYsfL49q52tBj1kq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mBPdw1oYct3MP3ifgtesf8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ioKUcUG4AoypDF2GOewGXB
          claim_id: c_5TXVeCdEh7Bux-AvM0F264
          source_id: s_rQABreIYOBuNMaN4e8dv1K
          stance: supports
          locator: CBDB：兄弟 王顯仁（206702）之父／母 王用中
          quotation: null
          interpretation_note: 由兄弟关系推断：王敦仁 与 王顯仁 为同胞（CBDB 记「兄」），王顯仁 之父／母即 王敦仁 之父／母。
          source:
            id: s_rQABreIYOBuNMaN4e8dv1K
            source_type: api_record
            title: 中国历代人物传记资料库：王敦仁（CBDB 221779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221779&o=json
            external_identifier: CBDB:221779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mBPdw1oYct3MP3ifgtesf8
        status: active
        display_name: 王敦仁
        merged_into_person_id: null
    - claim:
        id: c_gdor-x8E4dlEmqHn_OW-_k
        subject_person_id: p_yzyPEUAYsfL49q52tBj1kq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nbCfK5MnFGHSGdFVXbHhPD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nprMMIWZ0adu7rHah4Ufjj
          claim_id: c_gdor-x8E4dlEmqHn_OW-_k
          source_id: s_LP9I9D_xbWjXarRsf-a78M
          stance: supports
          locator: CBDB：兄弟 王顯仁（206702）之父／母 王用中
          quotation: null
          interpretation_note: 由兄弟关系推断：王居仁 与 王顯仁 为同胞（CBDB 记「兄」），王顯仁 之父／母即 王居仁 之父／母。
          source:
            id: s_LP9I9D_xbWjXarRsf-a78M
            source_type: api_record
            title: 中国历代人物传记资料库：王居仁（CBDB 221776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221776&o=json
            external_identifier: CBDB:221776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nbCfK5MnFGHSGdFVXbHhPD
        status: active
        display_name: 王居仁
        merged_into_person_id: null
    - claim:
        id: c_g7OQGh-3EZxVCprvhJfZWe
        subject_person_id: p_yzyPEUAYsfL49q52tBj1kq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qXHjyf2dHVQ28WyLS2CsBC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__wZK4ga5-USszze7S8w5m5
          claim_id: c_g7OQGh-3EZxVCprvhJfZWe
          source_id: s_GOt7pACmwmW_rysqiNnmeK
          stance: supports
          locator: CBDB：兄弟 王顯仁（206702）之父／母 王用中
          quotation: null
          interpretation_note: 由兄弟关系推断：王施仁 与 王顯仁 为同胞（CBDB 记「兄」），王顯仁 之父／母即 王施仁 之父／母。
          source:
            id: s_GOt7pACmwmW_rysqiNnmeK
            source_type: api_record
            title: 中国历代人物传记资料库：王施仁（CBDB 221777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221777&o=json
            external_identifier: CBDB:221777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qXHjyf2dHVQ28WyLS2CsBC
        status: active
        display_name: 王施仁
        merged_into_person_id: null
    - claim:
        id: c_g-lpXcaM3nPoWNbLV_MRP4
        subject_person_id: p_yzyPEUAYsfL49q52tBj1kq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xcVALxfeL7MZt3RyAGBgVa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_As1MXESEqgewVJD7YAdQem
          claim_id: c_g-lpXcaM3nPoWNbLV_MRP4
          source_id: s_tocNDNFo5IFWgILwoCVm6Y
          stance: supports
          locator: CBDB：兄弟 王顯仁（206702）之父／母 王用中
          quotation: null
          interpretation_note: 由兄弟关系推断：王志仁 与 王顯仁 为同胞（CBDB 记「兄」），王顯仁 之父／母即 王志仁 之父／母。
          source:
            id: s_tocNDNFo5IFWgILwoCVm6Y
            source_type: api_record
            title: 中国历代人物传记资料库：王志仁（CBDB 221778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221778&o=json
            external_identifier: CBDB:221778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xcVALxfeL7MZt3RyAGBgVa
        status: active
        display_name: 王志仁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王用中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用中 | accepted |
| bio.summary | 王用中，明人物。萬曆八年進士，籍贯滄州，入仕監生。（中国历代人物传记资料库 CBDB 221766） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_88N8F7QC67BDANQ41w4EaZ | 王顯仁 | accepted |
| children | p_S61J3DNmWarB1tb4V8fXHd | 王累仁 | accepted |
| children | p_V2V8T19kit7kSV7NWUMBHL | 王同仁 | accepted |
| children | p_X7R8nrWvDR9JaDQeatiuBC | 王世仁 | accepted |
| children | p_YFaXZA3dXJaciqHKQ72Qru | 王堯仁 | accepted |
| children | p_mBPdw1oYct3MP3ifgtesf8 | 王敦仁 | accepted |
| children | p_nbCfK5MnFGHSGdFVXbHhPD | 王居仁 | accepted |
| children | p_qXHjyf2dHVQ28WyLS2CsBC | 王施仁 | accepted |
| children | p_xcVALxfeL7MZt3RyAGBgVa | 王志仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敦仁（CBDB 221779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221779&o=json)
- [中国历代人物传记资料库：王居仁（CBDB 221776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221776&o=json)
- [中国历代人物传记资料库：王累仁（CBDB 221773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221773&o=json)
- [中国历代人物传记资料库：王施仁（CBDB 221777）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221777&o=json)
- [中国历代人物传记资料库：王世仁（CBDB 221775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221775&o=json)
- [中国历代人物传记资料库：王同仁（CBDB 221774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221774&o=json)
- [中国历代人物传记资料库：王堯仁（CBDB 221770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221770&o=json)
- [中国历代人物传记资料库：王用中（CBDB 221766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221766&o=json)
- [中国历代人物传记资料库：王志仁（CBDB 221778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221778&o=json)
