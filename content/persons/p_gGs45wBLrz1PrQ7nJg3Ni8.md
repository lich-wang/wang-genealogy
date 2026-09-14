---
schema: wang-person/v1
id: p_gGs45wBLrz1PrQ7nJg3Ni8
status: active
merged_into: null
display_name: 王璋
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qm1qyJKgeMQB8shD7HAn8a
        subject_person_id: p_gGs45wBLrz1PrQ7nJg3Ni8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GxrDEZGDE2Tgzg1DRka467
          claim_id: c_Qm1qyJKgeMQB8shD7HAn8a
          source_id: s_FBKhA7M3A4jwqAZB2SSZVx
          stance: supports
          locator: CBDB:290151
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290151）
          source: &a1
            id: s_FBKhA7M3A4jwqAZB2SSZVx
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 290151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290151&o=json
            external_identifier: CBDB:290151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.318Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kMnJCHo94NYGb7Pd44UE88
        subject_person_id: p_gGs45wBLrz1PrQ7nJg3Ni8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋，明人物。嘉靖八年進士，籍贯灤州，曾任縣丞。（中国历代人物传记资料库 CBDB 290151）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KiHz3BVgRXR30R2e-PDBNf
          claim_id: c_kMnJCHo94NYGb7Pd44UE88
          source_id: s_FBKhA7M3A4jwqAZB2SSZVx
          stance: supports
          locator: CBDB:290151
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_fNrU73mImhYyMxqxoO9bBd
        subject_person_id: p_gGs45wBLrz1PrQ7nJg3Ni8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8fLyT7ZEVM5q6B59fHgKMb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Kl4Ky_cPKQXecj3YfJY1U
          claim_id: c_fNrU73mImhYyMxqxoO9bBd
          source_id: s_zQhfYZPNcGJvYKAzCCCRiq
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百七十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zQhfYZPNcGJvYKAzCCCRiq
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 126866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126866&o=json
            external_identifier: CBDB:126866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.270Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8fLyT7ZEVM5q6B59fHgKMb
        status: active
        display_name: 王鎬
        merged_into_person_id: null
    - claim:
        id: c_fM-uH29iPketfSfKc-wNa5
        subject_person_id: p_gGs45wBLrz1PrQ7nJg3Ni8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Fm2iQDbmFbKHLVyH3V4kJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gVR7Q2-P_U1BJ1wHLL5Wqv
          claim_id: c_fM-uH29iPketfSfKc-wNa5
          source_id: s_XkdbUUG3l4m3cGoxSsXjgh
          stance: supports
          locator: CBDB：兄弟 王鎬（126866）之父／母 王璋
          quotation: null
          interpretation_note: 由兄弟关系推断：王鎧 与 王鎬 为同胞（CBDB 记「弟」），王鎬 之父／母即 王鎧 之父／母。
          source:
            id: s_XkdbUUG3l4m3cGoxSsXjgh
            source_type: api_record
            title: 中国历代人物传记资料库：王鎧（CBDB 290155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290155&o=json
            external_identifier: CBDB:290155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2Fm2iQDbmFbKHLVyH3V4kJ
        status: active
        display_name: 王鎧
        merged_into_person_id: null
    - claim:
        id: c_kmZcG9-_CFXq1Mtc0flkv9
        subject_person_id: p_gGs45wBLrz1PrQ7nJg3Ni8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4kvJ86QQSjr1B343YbNCZP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r-1G8PphBF7x6eydWyOMLu
          claim_id: c_kmZcG9-_CFXq1Mtc0flkv9
          source_id: s_60_zIxBDL5-OHUbugcndgj
          stance: supports
          locator: CBDB：兄弟 王鎬（126866）之父／母 王璋
          quotation: null
          interpretation_note: 由兄弟关系推断：王鉦 与 王鎬 为同胞（CBDB 记「弟」），王鎬 之父／母即 王鉦 之父／母。
          source:
            id: s_60_zIxBDL5-OHUbugcndgj
            source_type: api_record
            title: 中国历代人物传记资料库：王鉦（CBDB 290157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290157&o=json
            external_identifier: CBDB:290157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4kvJ86QQSjr1B343YbNCZP
        status: active
        display_name: 王鉦
        merged_into_person_id: null
    - claim:
        id: c_FvsZQFJqu40S1eBWlR16Rl
        subject_person_id: p_gGs45wBLrz1PrQ7nJg3Ni8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AKJXYFdDqBy4XJSPu7jiys
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-SFIBmUs6EwY7EBrEfzEUv
          claim_id: c_FvsZQFJqu40S1eBWlR16Rl
          source_id: s_oSLWl9cKrcIqRcBdgXSe6W
          stance: supports
          locator: CBDB：兄弟 王鎬（126866）之父／母 王璋
          quotation: null
          interpretation_note: 由兄弟关系推断：王鍔 与 王鎬 为同胞（CBDB 记「兄」），王鎬 之父／母即 王鍔 之父／母。
          source:
            id: s_oSLWl9cKrcIqRcBdgXSe6W
            source_type: api_record
            title: 中国历代人物传记资料库：王鍔（CBDB 290160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290160&o=json
            external_identifier: CBDB:290160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AKJXYFdDqBy4XJSPu7jiys
        status: active
        display_name: 王鍔
        merged_into_person_id: null
    - claim:
        id: c_iv93wN1_d8lpXYPe1pLoJk
        subject_person_id: p_gGs45wBLrz1PrQ7nJg3Ni8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BTehwp42KiMdKffd7GA7q3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_moMrVxEjctOX62XWXtolq5
          claim_id: c_iv93wN1_d8lpXYPe1pLoJk
          source_id: s_GwI-0uYJgE_Wye1Ab98y4t
          stance: supports
          locator: CBDB：兄弟 王鎬（126866）之父／母 王璋
          quotation: null
          interpretation_note: 由兄弟关系推断：王鈿 与 王鎬 为同胞（CBDB 记「兄」），王鎬 之父／母即 王鈿 之父／母。
          source:
            id: s_GwI-0uYJgE_Wye1Ab98y4t
            source_type: api_record
            title: 中国历代人物传记资料库：王鈿（CBDB 290159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290159&o=json
            external_identifier: CBDB:290159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BTehwp42KiMdKffd7GA7q3
        status: active
        display_name: 王鈿
        merged_into_person_id: null
    - claim:
        id: c_bJimnsvbjAP8EDfwPmVSzD
        subject_person_id: p_gGs45wBLrz1PrQ7nJg3Ni8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F1ds9LMASFJvYHkcnvDo4m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8o-ctOqp1OeXIVBQSLCACp
          claim_id: c_bJimnsvbjAP8EDfwPmVSzD
          source_id: s_gNVyX_xaqCH1M_-iNyf7e7
          stance: supports
          locator: CBDB：兄弟 王鎬（126866）之父／母 王璋
          quotation: null
          interpretation_note: 由兄弟关系推断：王鏞 与 王鎬 为同胞（CBDB 记「弟」），王鎬 之父／母即 王鏞 之父／母。
          source:
            id: s_gNVyX_xaqCH1M_-iNyf7e7
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 290158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290158&o=json
            external_identifier: CBDB:290158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_F1ds9LMASFJvYHkcnvDo4m
        status: active
        display_name: 王鏞
        merged_into_person_id: null
    - claim:
        id: c_vVE1gNCnjIut8VxVWKadhS
        subject_person_id: p_gGs45wBLrz1PrQ7nJg3Ni8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HFBQavfgQLSJXDLPGZSadz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K4JWC7pTAK-_vzI28Vnd0n
          claim_id: c_vVE1gNCnjIut8VxVWKadhS
          source_id: s_EeqZxOU2h64d1NdyClYYqt
          stance: supports
          locator: CBDB：兄弟 王鎬（126866）之父／母 王璋
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑰 与 王鎬 为同胞（CBDB 记「弟」），王鎬 之父／母即 王鑰 之父／母。
          source:
            id: s_EeqZxOU2h64d1NdyClYYqt
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰（CBDB 290156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290156&o=json
            external_identifier: CBDB:290156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HFBQavfgQLSJXDLPGZSadz
        status: active
        display_name: 王鑰
        merged_into_person_id: null
    - claim:
        id: c_GLk8yqn6QIKD4Vm3iIZS7Y
        subject_person_id: p_gGs45wBLrz1PrQ7nJg3Ni8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QkqCDKLBd8RA2R89nAgixU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PAZjS6noKia20CehMIfjJ3
          claim_id: c_GLk8yqn6QIKD4Vm3iIZS7Y
          source_id: s_K60a-4w6kwjvgsuZdi_IyF
          stance: supports
          locator: CBDB：兄弟 王鎬（126866）之父／母 王璋
          quotation: null
          interpretation_note: 由兄弟关系推断：王鍊 与 王鎬 为同胞（CBDB 记「兄」），王鎬 之父／母即 王鍊 之父／母。
          source:
            id: s_K60a-4w6kwjvgsuZdi_IyF
            source_type: api_record
            title: 中国历代人物传记资料库：王鍊（CBDB 290161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290161&o=json
            external_identifier: CBDB:290161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QkqCDKLBd8RA2R89nAgixU
        status: active
        display_name: 王鍊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璋 | accepted |
| bio.summary | 王璋，明人物。嘉靖八年進士，籍贯灤州，曾任縣丞。（中国历代人物传记资料库 CBDB 290151） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8fLyT7ZEVM5q6B59fHgKMb | 王鎬 | accepted |
| children | p_2Fm2iQDbmFbKHLVyH3V4kJ | 王鎧 | accepted |
| children | p_4kvJ86QQSjr1B343YbNCZP | 王鉦 | accepted |
| children | p_AKJXYFdDqBy4XJSPu7jiys | 王鍔 | accepted |
| children | p_BTehwp42KiMdKffd7GA7q3 | 王鈿 | accepted |
| children | p_F1ds9LMASFJvYHkcnvDo4m | 王鏞 | accepted |
| children | p_HFBQavfgQLSJXDLPGZSadz | 王鑰 | accepted |
| children | p_QkqCDKLBd8RA2R89nAgixU | 王鍊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鍔（CBDB 290160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290160&o=json)
- [中国历代人物传记资料库：王鎬（CBDB 126866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126866&o=json)
- [中国历代人物传记资料库：王鎧（CBDB 290155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290155&o=json)
- [中国历代人物传记资料库：王鍊（CBDB 290161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290161&o=json)
- [中国历代人物传记资料库：王鈿（CBDB 290159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290159&o=json)
- [中国历代人物传记资料库：王鑰（CBDB 290156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290156&o=json)
- [中国历代人物传记资料库：王鏞（CBDB 290158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290158&o=json)
- [中国历代人物传记资料库：王璋（CBDB 290151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290151&o=json)
- [中国历代人物传记资料库：王鉦（CBDB 290157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290157&o=json)
