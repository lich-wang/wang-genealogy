---
schema: wang-person/v1
id: p_dXbTkC8fTHTjd8NRUY9aDL
status: active
merged_into: null
display_name: 王弼
revision: 13
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZfSqPp1oYTD9biGZhKJoGR
        subject_person_id: p_dXbTkC8fTHTjd8NRUY9aDL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pJ4PnqUhsyZeU8YNdVosPR
          claim_id: c_ZfSqPp1oYTD9biGZhKJoGR
          source_id: s_ZkLWzBEnVE1LYHvpg5QRZ2
          stance: supports
          locator: CBDB:210723
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210723）
          source: &a1
            id: s_ZkLWzBEnVE1LYHvpg5QRZ2
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 210723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210723&o=json
            external_identifier: CBDB:210723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.017Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZFCjjN2Zq7iAmJ2aMb7mXf
        subject_person_id: p_dXbTkC8fTHTjd8NRUY9aDL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼，明人物。隆慶五年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 210723）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fmuSLv9F1Stme90w1HGRdE
          claim_id: c_ZFCjjN2Zq7iAmJ2aMb7mXf
          source_id: s_ZkLWzBEnVE1LYHvpg5QRZ2
          stance: supports
          locator: CBDB:210723
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_N_oWAkIotFtNPNFN-eEMQJ
        subject_person_id: p_dXbTkC8fTHTjd8NRUY9aDL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1CcOiZMUx8iBs7OZe6ObTS
          claim_id: c_N_oWAkIotFtNPNFN-eEMQJ
          source_id: s_ZkLWzBEnVE1LYHvpg5QRZ2
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百七十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sAZUvMC7u8bMFh2JrU8PMj
        status: active
        display_name: 王良心
        merged_into_person_id: null
    - claim:
        id: c_c1yJXB5ATru5lbWgSBFgkF
        subject_person_id: p_dXbTkC8fTHTjd8NRUY9aDL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7UDSX61NMV9BE5LyEoC33N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WwidjQKQydHdNF9qT1duFc
          claim_id: c_c1yJXB5ATru5lbWgSBFgkF
          source_id: s_Yy8aEqoYZLi7LLJVBTa-c-
          stance: supports
          locator: CBDB：兄弟 王良心（205923）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王叔果 与 王良心 为同胞（CBDB 记「弟」），王良心 之父／母即 王叔果 之父／母。
          source:
            id: s_Yy8aEqoYZLi7LLJVBTa-c-
            source_type: api_record
            title: 中国历代人物传记资料库：王叔果（CBDB 210728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210728&o=json
            external_identifier: CBDB:210728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7UDSX61NMV9BE5LyEoC33N
        status: active
        display_name: 王叔果
        merged_into_person_id: null
    - claim:
        id: c_mF486NMIyNiSjb2CkK2Fhd
        subject_person_id: p_dXbTkC8fTHTjd8NRUY9aDL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9E8oYsqeKwVApirRF2TQVh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UfBPHNNvIi1LW21Cusfb_q
          claim_id: c_mF486NMIyNiSjb2CkK2Fhd
          source_id: s_OLS2nbu9F1HdE3hssDLuki
          stance: supports
          locator: CBDB：兄弟 王良心（205923）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王叔懋 与 王良心 为同胞（CBDB 记「弟」），王良心 之父／母即 王叔懋 之父／母。
          source:
            id: s_OLS2nbu9F1HdE3hssDLuki
            source_type: api_record
            title: 中国历代人物传记资料库：王叔懋（CBDB 210727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210727&o=json
            external_identifier: CBDB:210727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9E8oYsqeKwVApirRF2TQVh
        status: active
        display_name: 王叔懋
        merged_into_person_id: null
    - claim:
        id: c_jUD5ppbgEVVuPSKTD-9SRO
        subject_person_id: p_dXbTkC8fTHTjd8NRUY9aDL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BtEFcxCQCBdbeMpPE9EqVj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SNtw-K2IdToyltatIaPwxY
          claim_id: c_jUD5ppbgEVVuPSKTD-9SRO
          source_id: s_0cw_MTbXvdMVZesweQ2Uex
          stance: supports
          locator: CBDB：兄弟 王良心（205923）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王良驄 与 王良心 为同胞（CBDB 记「兄」），王良心 之父／母即 王良驄 之父／母。
          source:
            id: s_0cw_MTbXvdMVZesweQ2Uex
            source_type: api_record
            title: 中国历代人物传记资料库：王良驄（CBDB 210735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210735&o=json
            external_identifier: CBDB:210735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BtEFcxCQCBdbeMpPE9EqVj
        status: active
        display_name: 王良驄
        merged_into_person_id: null
    - claim:
        id: c_5Ft-957t4I3ROzbHDU0lVS
        subject_person_id: p_dXbTkC8fTHTjd8NRUY9aDL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FnfVhzgsVEUkVBTGpRvvhB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OuB-vPmvgs-S7AsnZo9LiD
          claim_id: c_5Ft-957t4I3ROzbHDU0lVS
          source_id: s_Wcbn0Ci50p3Q9YIgCaV0v6
          stance: supports
          locator: CBDB：兄弟 王良心（205923）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王良駿 与 王良心 为同胞（CBDB 记「弟」），王良心 之父／母即 王良駿 之父／母。
          source:
            id: s_Wcbn0Ci50p3Q9YIgCaV0v6
            source_type: api_record
            title: 中国历代人物传记资料库：王良駿（CBDB 210734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210734&o=json
            external_identifier: CBDB:210734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FnfVhzgsVEUkVBTGpRvvhB
        status: active
        display_name: 王良駿
        merged_into_person_id: null
    - claim:
        id: c_qmg3R9He81yqbLqDvkI9A-
        subject_person_id: p_dXbTkC8fTHTjd8NRUY9aDL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MRxE4eWth2oa1n5HHCdezL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yWNIuAkwa82BydeRPC6e_B
          claim_id: c_qmg3R9He81yqbLqDvkI9A-
          source_id: s_w59bExEfHBYD6zz2036Mh6
          stance: supports
          locator: CBDB：兄弟 王良心（205923）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王良騢 与 王良心 为同胞（CBDB 记「兄」），王良心 之父／母即 王良騢 之父／母。
          source:
            id: s_w59bExEfHBYD6zz2036Mh6
            source_type: api_record
            title: 中国历代人物传记资料库：王良騢（CBDB 210738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210738&o=json
            external_identifier: CBDB:210738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MRxE4eWth2oa1n5HHCdezL
        status: active
        display_name: 王良騢
        merged_into_person_id: null
    - claim:
        id: c_66Y8Jc3n0MJ_MKbPLIORWj
        subject_person_id: p_dXbTkC8fTHTjd8NRUY9aDL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Zh3L6fe6rGXcEvqPu9TugV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xunm2DJK-v9gc9R9Ck0W1r
          claim_id: c_66Y8Jc3n0MJ_MKbPLIORWj
          source_id: s_Z145TY3O86DA1mpmngn_3U
          stance: supports
          locator: CBDB：兄弟 王良心（205923）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王叔本 与 王良心 为同胞（CBDB 记「弟」），王良心 之父／母即 王叔本 之父／母。
          source:
            id: s_Z145TY3O86DA1mpmngn_3U
            source_type: api_record
            title: 中国历代人物传记资料库：王叔本（CBDB 210731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210731&o=json
            external_identifier: CBDB:210731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zh3L6fe6rGXcEvqPu9TugV
        status: active
        display_name: 王叔本
        merged_into_person_id: null
    - claim:
        id: c_9Zm5Zd7WyUGJZd3XTcDgg3
        subject_person_id: p_dXbTkC8fTHTjd8NRUY9aDL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bL76HK8tPBRuUJPkdViswC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QX7uunpUc4-iPmt0aBpiRt
          claim_id: c_9Zm5Zd7WyUGJZd3XTcDgg3
          source_id: s_kVMKd2czdCwu0faPP209pi
          stance: supports
          locator: CBDB：兄弟 王良心（205923）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王叔杲 与 王良心 为同胞（CBDB 记「弟」），王良心 之父／母即 王叔杲 之父／母。
          source:
            id: s_kVMKd2czdCwu0faPP209pi
            source_type: api_record
            title: 中国历代人物传记资料库：王叔杲（CBDB 210729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210729&o=json
            external_identifier: CBDB:210729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bL76HK8tPBRuUJPkdViswC
        status: active
        display_name: 王叔杲
        merged_into_person_id: null
    - claim:
        id: c_bPld6mS1osX_cIi6TUwtxn
        subject_person_id: p_dXbTkC8fTHTjd8NRUY9aDL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ejUC7CGVt86beHAZF1QQxo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BomMRsHFoP-rnu__dOISj1
          claim_id: c_bPld6mS1osX_cIi6TUwtxn
          source_id: s_3XMrBKrP8vOW_2pzQyw-3j
          stance: supports
          locator: CBDB：兄弟 王良心（205923）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王德 与 王良心 为同胞（CBDB 记「弟」），王良心 之父／母即 王德 之父／母。
          source:
            id: s_3XMrBKrP8vOW_2pzQyw-3j
            source_type: api_record
            title: 中国历代人物传记资料库：王德（CBDB 210730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210730&o=json
            external_identifier: CBDB:210730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ejUC7CGVt86beHAZF1QQxo
        status: active
        display_name: 王德
        merged_into_person_id: null
    - claim:
        id: c_tQfxMc2nV3WfJlOQYp2GvZ
        subject_person_id: p_dXbTkC8fTHTjd8NRUY9aDL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gFD38TcLYY9Xf6WG4cce5D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bzQJhsEvO_Jscs63r6ELuF
          claim_id: c_tQfxMc2nV3WfJlOQYp2GvZ
          source_id: s_kLd3dQ9Q3J4vhoGXuuOKk-
          stance: supports
          locator: CBDB：兄弟 王良心（205923）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王良驥 与 王良心 为同胞（CBDB 记「弟」），王良心 之父／母即 王良驥 之父／母。
          source:
            id: s_kLd3dQ9Q3J4vhoGXuuOKk-
            source_type: api_record
            title: 中国历代人物传记资料库：王良驥（CBDB 210733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210733&o=json
            external_identifier: CBDB:210733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gFD38TcLYY9Xf6WG4cce5D
        status: active
        display_name: 王良驥
        merged_into_person_id: null
    - claim:
        id: c_DmRl5DYSJbEeHN2UV4XFhr
        subject_person_id: p_dXbTkC8fTHTjd8NRUY9aDL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_maKWGqbbp6R9PCCNrE8KNy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ozciXeFI4cFJ5T86IT7HyH
          claim_id: c_DmRl5DYSJbEeHN2UV4XFhr
          source_id: s_Akkouqpgo4lcgp1N9e95MT
          stance: supports
          locator: CBDB：兄弟 王良心（205923）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王良驂 与 王良心 为同胞（CBDB 记「弟」），王良心 之父／母即 王良驂 之父／母。
          source:
            id: s_Akkouqpgo4lcgp1N9e95MT
            source_type: api_record
            title: 中国历代人物传记资料库：王良驂（CBDB 210732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210732&o=json
            external_identifier: CBDB:210732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_maKWGqbbp6R9PCCNrE8KNy
        status: active
        display_name: 王良驂
        merged_into_person_id: null
    - claim:
        id: c__oh-U8sJEcSabzT1OZ5A8w
        subject_person_id: p_dXbTkC8fTHTjd8NRUY9aDL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o4DAn4WpdTaF7aQ26jY4dG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PHOi2U5THpqYeM9qCM81q6
          claim_id: c__oh-U8sJEcSabzT1OZ5A8w
          source_id: s_Z9UUuSnw_zy7m_Gz9U7Ydy
          stance: supports
          locator: CBDB：兄弟 王良心（205923）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王良駰 与 王良心 为同胞（CBDB 记「兄」），王良心 之父／母即 王良駰 之父／母。
          source:
            id: s_Z9UUuSnw_zy7m_Gz9U7Ydy
            source_type: api_record
            title: 中国历代人物传记资料库：王良駰（CBDB 210736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210736&o=json
            external_identifier: CBDB:210736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_o4DAn4WpdTaF7aQ26jY4dG
        status: active
        display_name: 王良駰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弼 | accepted |
| bio.summary | 王弼，明人物。隆慶五年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 210723） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_sAZUvMC7u8bMFh2JrU8PMj | 王良心 | accepted |
| children | p_7UDSX61NMV9BE5LyEoC33N | 王叔果 | accepted |
| children | p_9E8oYsqeKwVApirRF2TQVh | 王叔懋 | accepted |
| children | p_BtEFcxCQCBdbeMpPE9EqVj | 王良驄 | accepted |
| children | p_FnfVhzgsVEUkVBTGpRvvhB | 王良駿 | accepted |
| children | p_MRxE4eWth2oa1n5HHCdezL | 王良騢 | accepted |
| children | p_Zh3L6fe6rGXcEvqPu9TugV | 王叔本 | accepted |
| children | p_bL76HK8tPBRuUJPkdViswC | 王叔杲 | accepted |
| children | p_ejUC7CGVt86beHAZF1QQxo | 王德 | accepted |
| children | p_gFD38TcLYY9Xf6WG4cce5D | 王良驥 | accepted |
| children | p_maKWGqbbp6R9PCCNrE8KNy | 王良驂 | accepted |
| children | p_o4DAn4WpdTaF7aQ26jY4dG | 王良駰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 210723）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210723&o=json)
- [中国历代人物传记资料库：王德（CBDB 210730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210730&o=json)
- [中国历代人物传记资料库：王良驂（CBDB 210732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210732&o=json)
- [中国历代人物传记资料库：王良驄（CBDB 210735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210735&o=json)
- [中国历代人物传记资料库：王良驥（CBDB 210733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210733&o=json)
- [中国历代人物传记资料库：王良駿（CBDB 210734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210734&o=json)
- [中国历代人物传记资料库：王良騢（CBDB 210738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210738&o=json)
- [中国历代人物传记资料库：王良駰（CBDB 210736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210736&o=json)
- [中国历代人物传记资料库：王叔本（CBDB 210731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210731&o=json)
- [中国历代人物传记资料库：王叔杲（CBDB 210729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210729&o=json)
- [中国历代人物传记资料库：王叔果（CBDB 210728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210728&o=json)
- [中国历代人物传记资料库：王叔懋（CBDB 210727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210727&o=json)
