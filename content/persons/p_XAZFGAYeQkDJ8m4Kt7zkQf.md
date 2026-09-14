---
schema: wang-person/v1
id: p_XAZFGAYeQkDJ8m4Kt7zkQf
status: active
merged_into: null
display_name: 王宗曜
cbdb_id: 258050
revision: 12
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EZ1Ua1Q2H4JezjDvPPDgW7
        subject_person_id: p_XAZFGAYeQkDJ8m4Kt7zkQf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗曜，明人物。成化二十三年進士，籍贯寧海。（中国历代人物传记资料库 CBDB 258050）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_1xL4DZqQrblH6K9QlcqbbZ
          claim_id: c_EZ1Ua1Q2H4JezjDvPPDgW7
          source_id: s_UZW7prP5gENTbsK36GuEPH
          stance: supports
          locator: CBDB:258050
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_UZW7prP5gENTbsK36GuEPH
            source_type: api_record
            title: 中国历代人物传记资料库：王宗曜（CBDB 258050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258050&o=json
            external_identifier: CBDB:258050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zhgfw6B2odi1NVfifFZGeF
        subject_person_id: p_XAZFGAYeQkDJ8m4Kt7zkQf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗曜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cMD7JeUZQzhsBtzPXwMNWc
          claim_id: c_Zhgfw6B2odi1NVfifFZGeF
          source_id: s_UZW7prP5gENTbsK36GuEPH
          stance: supports
          locator: CBDB:258050
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Op5FC_jf765rWXpgKy6gq0
        subject_person_id: p_XAZFGAYeQkDJ8m4Kt7zkQf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x8mQMeJnHp1fPict2xPV7L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yKjVL3f5VqnIjQB-_WPe9z
          claim_id: c_Op5FC_jf765rWXpgKy6gq0
          source_id: s_UZW7prP5gENTbsK36GuEPH
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第五十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UZW7prP5gENTbsK36GuEPH
            source_type: api_record
            title: 中国历代人物传记资料库：王宗曜（CBDB 258050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258050&o=json
            external_identifier: CBDB:258050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_x8mQMeJnHp1fPict2xPV7L
        status: active
        display_name: 王中
        merged_into_person_id: null
    - claim:
        id: c_qkncn0y0m0MLIM9nj9hFM2
        subject_person_id: p_XAZFGAYeQkDJ8m4Kt7zkQf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7XWkven58npQrrRbKAf8FD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bj9uw5MxkfBXpylccqtPzG
          claim_id: c_qkncn0y0m0MLIM9nj9hFM2
          source_id: s_HK9vCb0SrCmLoI4-hkFk5w
          stance: supports
          locator: CBDB：兄弟 王中（200448）之父／母 王宗曜
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟鑑 与 王中 为同胞（CBDB 记「兄」），王中 之父／母即 王孟鑑 之父／母。
          source:
            id: s_HK9vCb0SrCmLoI4-hkFk5w
            source_type: api_record
            title: 中国历代人物传记资料库：王孟鑑（CBDB 258061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258061&o=json
            external_identifier: CBDB:258061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7XWkven58npQrrRbKAf8FD
        status: active
        display_name: 王孟鑑
        merged_into_person_id: null
    - claim:
        id: c_YaN8L1NJ5ETCFVuHCg5JCs
        subject_person_id: p_XAZFGAYeQkDJ8m4Kt7zkQf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7Y6h92yvWxBQAUwmv4t23M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oqU4FQwl9-cmpG9Dkh6KNQ
          claim_id: c_YaN8L1NJ5ETCFVuHCg5JCs
          source_id: s_1ET4kDrrO3W07eW0GocHDK
          stance: supports
          locator: CBDB：兄弟 王中（200448）之父／母 王宗曜
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟遠 与 王中 为同胞（CBDB 记「弟」），王中 之父／母即 王孟遠 之父／母。
          source:
            id: s_1ET4kDrrO3W07eW0GocHDK
            source_type: api_record
            title: 中国历代人物传记资料库：王孟遠（CBDB 258055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258055&o=json
            external_identifier: CBDB:258055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7Y6h92yvWxBQAUwmv4t23M
        status: active
        display_name: 王孟遠
        merged_into_person_id: null
    - claim:
        id: c_QpgY6gdZlwEZxCaIh1RYvw
        subject_person_id: p_XAZFGAYeQkDJ8m4Kt7zkQf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Bvs1tpB2TZ6i77o8kc3BTS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7YRHmjQKKW4Y0pgNWiohnp
          claim_id: c_QpgY6gdZlwEZxCaIh1RYvw
          source_id: s_jiKDMs8ryx1DEhvAnjNH5J
          stance: supports
          locator: CBDB：兄弟 王中（200448）之父／母 王宗曜
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟鍠 与 王中 为同胞（CBDB 记「兄」），王中 之父／母即 王孟鍠 之父／母。
          source:
            id: s_jiKDMs8ryx1DEhvAnjNH5J
            source_type: api_record
            title: 中国历代人物传记资料库：王孟鍠（CBDB 258060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258060&o=json
            external_identifier: CBDB:258060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Bvs1tpB2TZ6i77o8kc3BTS
        status: active
        display_name: 王孟鍠
        merged_into_person_id: null
    - claim:
        id: c_QqE3kf7VEKcacQoK-Huzat
        subject_person_id: p_XAZFGAYeQkDJ8m4Kt7zkQf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MmBv8UuDK8TCMHPc1z1WJW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qPffCHVSRgirPpbmx6UCmp
          claim_id: c_QqE3kf7VEKcacQoK-Huzat
          source_id: s_0ZxH-IVAou0-kF8ZDmA38k
          stance: supports
          locator: CBDB：兄弟 王中（200448）之父／母 王宗曜
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟鈞 与 王中 为同胞（CBDB 记「兄」），王中 之父／母即 王孟鈞 之父／母。
          source:
            id: s_0ZxH-IVAou0-kF8ZDmA38k
            source_type: api_record
            title: 中国历代人物传记资料库：王孟鈞（CBDB 258059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258059&o=json
            external_identifier: CBDB:258059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MmBv8UuDK8TCMHPc1z1WJW
        status: active
        display_name: 王孟鈞
        merged_into_person_id: null
    - claim:
        id: c_hjF0FR-hJQvgiJtVZcM8W9
        subject_person_id: p_XAZFGAYeQkDJ8m4Kt7zkQf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PBwmAQoDn382AYrqgEADiL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IC4bWfmdQeCAPpEUhysY7Q
          claim_id: c_hjF0FR-hJQvgiJtVZcM8W9
          source_id: s_PTmsKbSo4xo8E4_SHRNxCh
          stance: supports
          locator: CBDB：兄弟 王中（200448）之父／母 王宗曜
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟良 与 王中 为同胞（CBDB 记「弟」），王中 之父／母即 王孟良 之父／母。
          source:
            id: s_PTmsKbSo4xo8E4_SHRNxCh
            source_type: api_record
            title: 中国历代人物传记资料库：王孟良（CBDB 258056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258056&o=json
            external_identifier: CBDB:258056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PBwmAQoDn382AYrqgEADiL
        status: active
        display_name: 王孟良
        merged_into_person_id: null
    - claim:
        id: c_kVGuPniY2sSIs9_ToXfbAr
        subject_person_id: p_XAZFGAYeQkDJ8m4Kt7zkQf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QTZhJQRm4DvyvhM9cqV8VT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xussPvQ-EeAMyIEsc4SMHd
          claim_id: c_kVGuPniY2sSIs9_ToXfbAr
          source_id: s_lKqnSh2ddlzdmadtP1-WNT
          stance: supports
          locator: CBDB：兄弟 王中（200448）之父／母 王宗曜
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟鎧 与 王中 为同胞（CBDB 记「兄」），王中 之父／母即 王孟鎧 之父／母。
          source:
            id: s_lKqnSh2ddlzdmadtP1-WNT
            source_type: api_record
            title: 中国历代人物传记资料库：王孟鎧（CBDB 258064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258064&o=json
            external_identifier: CBDB:258064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QTZhJQRm4DvyvhM9cqV8VT
        status: active
        display_name: 王孟鎧
        merged_into_person_id: null
    - claim:
        id: c_zmhTRH860lMERG1FIqwP7k
        subject_person_id: p_XAZFGAYeQkDJ8m4Kt7zkQf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g1CdQkAjpo6aBj7U56pDri
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pIxxBxGlNr7pE5vpSSHoKK
          claim_id: c_zmhTRH860lMERG1FIqwP7k
          source_id: s_Su6gRgFac-jCvpelsNsviy
          stance: supports
          locator: CBDB：兄弟 王中（200448）之父／母 王宗曜
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟錢 与 王中 为同胞（CBDB 记「兄」），王中 之父／母即 王孟錢 之父／母。
          source:
            id: s_Su6gRgFac-jCvpelsNsviy
            source_type: api_record
            title: 中国历代人物传记资料库：王孟錢（CBDB 258063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258063&o=json
            external_identifier: CBDB:258063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g1CdQkAjpo6aBj7U56pDri
        status: active
        display_name: 王孟錢
        merged_into_person_id: null
    - claim:
        id: c_EAmoYopoAvAyQ_2ziTkSpQ
        subject_person_id: p_XAZFGAYeQkDJ8m4Kt7zkQf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mrif1eywc1pQdgqjKdUDJ6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hVqOTHUmndE5jXRD0cIBco
          claim_id: c_EAmoYopoAvAyQ_2ziTkSpQ
          source_id: s_KAt4ExcKusU-CJ3jmGdWJQ
          stance: supports
          locator: CBDB：兄弟 王中（200448）之父／母 王宗曜
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟洪 与 王中 为同胞（CBDB 记「弟」），王中 之父／母即 王孟洪 之父／母。
          source:
            id: s_KAt4ExcKusU-CJ3jmGdWJQ
            source_type: api_record
            title: 中国历代人物传记资料库：王孟洪（CBDB 258054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258054&o=json
            external_identifier: CBDB:258054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mrif1eywc1pQdgqjKdUDJ6
        status: active
        display_name: 王孟洪
        merged_into_person_id: null
    - claim:
        id: c_W7HEVsQ86nAsrqhHm7yimP
        subject_person_id: p_XAZFGAYeQkDJ8m4Kt7zkQf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ventMwBMX62g8cCmpzeTXW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_18aBJtlc2yfAo74nv_gMF_
          claim_id: c_W7HEVsQ86nAsrqhHm7yimP
          source_id: s_bQGAWoUQNleWjkCpLGiSTQ
          stance: supports
          locator: CBDB：兄弟 王中（200448）之父／母 王宗曜
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟寬 与 王中 为同胞（CBDB 记「弟」），王中 之父／母即 王孟寬 之父／母。
          source:
            id: s_bQGAWoUQNleWjkCpLGiSTQ
            source_type: api_record
            title: 中国历代人物传记资料库：王孟寬（CBDB 258058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258058&o=json
            external_identifier: CBDB:258058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ventMwBMX62g8cCmpzeTXW
        status: active
        display_name: 王孟寬
        merged_into_person_id: null
    - claim:
        id: c_AgsTIdok5sS2RKFeW327KF
        subject_person_id: p_XAZFGAYeQkDJ8m4Kt7zkQf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_whxfs6F7FGcjhCSBTAZMKC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0suy5AfpoCj-WgJwkJCOT0
          claim_id: c_AgsTIdok5sS2RKFeW327KF
          source_id: s_KisyDkVUdcsEeZTIZpkVjV
          stance: supports
          locator: CBDB：兄弟 王中（200448）之父／母 王宗曜
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟錡 与 王中 为同胞（CBDB 记「兄」），王中 之父／母即 王孟錡 之父／母。
          source:
            id: s_KisyDkVUdcsEeZTIZpkVjV
            source_type: api_record
            title: 中国历代人物传记资料库：王孟錡（CBDB 258062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258062&o=json
            external_identifier: CBDB:258062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_whxfs6F7FGcjhCSBTAZMKC
        status: active
        display_name: 王孟錡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗曜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗曜，明人物。成化二十三年進士，籍贯寧海。（中国历代人物传记资料库 CBDB 258050） | accepted |
| name.primary | 王宗曜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_x8mQMeJnHp1fPict2xPV7L | 王中 | accepted |
| children | p_7XWkven58npQrrRbKAf8FD | 王孟鑑 | accepted |
| children | p_7Y6h92yvWxBQAUwmv4t23M | 王孟遠 | accepted |
| children | p_Bvs1tpB2TZ6i77o8kc3BTS | 王孟鍠 | accepted |
| children | p_MmBv8UuDK8TCMHPc1z1WJW | 王孟鈞 | accepted |
| children | p_PBwmAQoDn382AYrqgEADiL | 王孟良 | accepted |
| children | p_QTZhJQRm4DvyvhM9cqV8VT | 王孟鎧 | accepted |
| children | p_g1CdQkAjpo6aBj7U56pDri | 王孟錢 | accepted |
| children | p_mrif1eywc1pQdgqjKdUDJ6 | 王孟洪 | accepted |
| children | p_ventMwBMX62g8cCmpzeTXW | 王孟寬 | accepted |
| children | p_whxfs6F7FGcjhCSBTAZMKC | 王孟錡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孟洪（CBDB 258054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258054&o=json)
- [中国历代人物传记资料库：王孟鍠（CBDB 258060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258060&o=json)
- [中国历代人物传记资料库：王孟鑑（CBDB 258061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258061&o=json)
- [中国历代人物传记资料库：王孟鈞（CBDB 258059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258059&o=json)
- [中国历代人物传记资料库：王孟鎧（CBDB 258064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258064&o=json)
- [中国历代人物传记资料库：王孟寬（CBDB 258058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258058&o=json)
- [中国历代人物传记资料库：王孟良（CBDB 258056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258056&o=json)
- [中国历代人物传记资料库：王孟錡（CBDB 258062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258062&o=json)
- [中国历代人物传记资料库：王孟錢（CBDB 258063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258063&o=json)
- [中国历代人物传记资料库：王孟遠（CBDB 258055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258055&o=json)
- [中国历代人物传记资料库：王宗曜（CBDB 258050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258050&o=json)
