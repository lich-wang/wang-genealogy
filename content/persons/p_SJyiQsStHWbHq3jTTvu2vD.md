---
schema: wang-person/v1
id: p_SJyiQsStHWbHq3jTTvu2vD
status: active
merged_into: null
display_name: 王楫
revision: 18
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P3PWnm95GHg6CQuP24DcS8
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kmDD3Qay5yQDbRebabb1Pa
          claim_id: c_P3PWnm95GHg6CQuP24DcS8
          source_id: s_wJpM1N4oZgpquY1gcYeU1P
          stance: supports
          locator: CBDB:327945
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327945）
          source: &a1
            id: s_wJpM1N4oZgpquY1gcYeU1P
            source_type: api_record
            title: 中国历代人物传记资料库：王楫（CBDB 327945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327945&o=json
            external_identifier: CBDB:327945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.272Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uG1NaQMb1KQATzCvVyd9Yt
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楫，明人物。嘉靖四十一年進士，籍贯文安。（中国历代人物传记资料库 CBDB 327945）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6U3SUV_chBQtcjI8D60niW
          claim_id: c_uG1NaQMb1KQATzCvVyd9Yt
          source_id: s_wJpM1N4oZgpquY1gcYeU1P
          stance: supports
          locator: CBDB:327945
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_I5huK4fvM09TaXPK6L45Pz
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CDPdNvxabQX9Mzpz2bTClj
          claim_id: c_I5huK4fvM09TaXPK6L45Pz
          source_id: s_NxyvnQDn1eZ9nvxr3JFUPK
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第七十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NxyvnQDn1eZ9nvxr3JFUPK
            source_type: api_record
            title: 中国历代人物传记资料库：王以纁（CBDB 205075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205075&o=json
            external_identifier: CBDB:205075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.850Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DYviEpoQ7QNEe7UQdPVSd4
        status: active
        display_name: 王以纁
        merged_into_person_id: null
    - claim:
        id: c_vm7XZBaZTTNu-SQxQdwzzW
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7s8BAPmNWBK223SSZme44D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pIeWnZA_Oe-_5GcjBe1K67
          claim_id: c_vm7XZBaZTTNu-SQxQdwzzW
          source_id: s_gbxkTKWad_OTgXxfO6v3Jo
          stance: supports
          locator: CBDB：兄弟 王以纁（205075）之父／母 王楫
          quotation: null
          interpretation_note: 由兄弟关系推断：王緘 与 王以纁 为同胞（CBDB 记「兄」），王以纁 之父／母即 王緘 之父／母。
          source:
            id: s_gbxkTKWad_OTgXxfO6v3Jo
            source_type: api_record
            title: 中国历代人物传记资料库：王緘（CBDB 327961）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327961&o=json
            external_identifier: CBDB:327961
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7s8BAPmNWBK223SSZme44D
        status: active
        display_name: 王緘
        merged_into_person_id: null
    - claim:
        id: c_Aou4rXnHLHcoZHm8x2n5U-
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_858rFw8Q6P9UNfpyN3uBVB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2XTF9HQofB4vlpZfpQch2c
          claim_id: c_Aou4rXnHLHcoZHm8x2n5U-
          source_id: s_UrZYd_NRdJvjHCapq-9ZGB
          stance: supports
          locator: CBDB：兄弟 王以纁（205075）之父／母 王楫
          quotation: null
          interpretation_note: 由兄弟关系推断：王統 与 王以纁 为同胞（CBDB 记「弟」），王以纁 之父／母即 王統 之父／母。
          source:
            id: s_UrZYd_NRdJvjHCapq-9ZGB
            source_type: api_record
            title: 中国历代人物传记资料库：王統（CBDB 327960）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327960&o=json
            external_identifier: CBDB:327960
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_858rFw8Q6P9UNfpyN3uBVB
        status: active
        display_name: 王統
        merged_into_person_id: null
    - claim:
        id: c_GAnnYo0ImhYMl5DejER9wh
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B1Kw46B7WBT48xCkV36EkN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d3MuSm39Vh1sD7rgvgCesN
          claim_id: c_GAnnYo0ImhYMl5DejER9wh
          source_id: s_R7gLFAjCxhhQuxCnNVlzn-
          stance: supports
          locator: CBDB：兄弟 王以纁（205075）之父／母 王楫
          quotation: null
          interpretation_note: 由兄弟关系推断：王紳 与 王以纁 为同胞（CBDB 记「弟」），王以纁 之父／母即 王紳 之父／母。
          source:
            id: s_R7gLFAjCxhhQuxCnNVlzn-
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 327951）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327951&o=json
            external_identifier: CBDB:327951
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_B1Kw46B7WBT48xCkV36EkN
        status: active
        display_name: 王紳
        merged_into_person_id: null
    - claim:
        id: c__TD-13R6gNqQA1qXB-SzUN
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GUBF5xYpVcU5txwspcxGii
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pSlzEIZblUAS71YwXUZ0UT
          claim_id: c__TD-13R6gNqQA1qXB-SzUN
          source_id: s_s67Wde2kiVgZ1itZjVYGw6
          stance: supports
          locator: CBDB：兄弟 王以纁（205075）之父／母 王楫
          quotation: null
          interpretation_note: 由兄弟关系推断：王練 与 王以纁 为同胞（CBDB 记「兄」），王以纁 之父／母即 王練 之父／母。
          source:
            id: s_s67Wde2kiVgZ1itZjVYGw6
            source_type: api_record
            title: 中国历代人物传记资料库：王練（CBDB 327962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327962&o=json
            external_identifier: CBDB:327962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GUBF5xYpVcU5txwspcxGii
        status: active
        display_name: 王練
        merged_into_person_id: null
    - claim:
        id: c_JuzdYEWLTMH4Ou-3szNKST
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H8DB8C3cPyHMGK8CbvSLv8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7MJBk2aNpRIVSjrrp0fB99
          claim_id: c_JuzdYEWLTMH4Ou-3szNKST
          source_id: s_HsP9HOrPwi8s_I_d6bB2Yq
          stance: supports
          locator: CBDB：兄弟 王以纁（205075）之父／母 王楫
          quotation: null
          interpretation_note: 由兄弟关系推断：王綵 与 王以纁 为同胞（CBDB 记「弟」），王以纁 之父／母即 王綵 之父／母。
          source:
            id: s_HsP9HOrPwi8s_I_d6bB2Yq
            source_type: api_record
            title: 中国历代人物传记资料库：王綵（CBDB 327956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327956&o=json
            external_identifier: CBDB:327956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_H8DB8C3cPyHMGK8CbvSLv8
        status: active
        display_name: 王綵
        merged_into_person_id: null
    - claim:
        id: c_f6Uhqr6nKJjfI8nuePYE98
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HsH2tHxo8zSYxpnHpBoPLZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__tpqFy0BLDWu4rIeQZQZVB
          claim_id: c_f6Uhqr6nKJjfI8nuePYE98
          source_id: s_js7rCQ3jhThXii4znjFPTF
          stance: supports
          locator: CBDB：兄弟 王以纁（205075）之父／母 王楫
          quotation: null
          interpretation_note: 由兄弟关系推断：王纉 与 王以纁 为同胞（CBDB 记「弟」），王以纁 之父／母即 王纉 之父／母。
          source:
            id: s_js7rCQ3jhThXii4znjFPTF
            source_type: api_record
            title: 中国历代人物传记资料库：王纉（CBDB 327954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327954&o=json
            external_identifier: CBDB:327954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HsH2tHxo8zSYxpnHpBoPLZ
        status: active
        display_name: 王纉
        merged_into_person_id: null
    - claim:
        id: c_EW9JwGEmTyZjmaLg8JzQ0u
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Jw3V9gcCZgE2uB8eYMnY58
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FwRL5CVTuqK1BPI1p1_MCR
          claim_id: c_EW9JwGEmTyZjmaLg8JzQ0u
          source_id: s_TrMHkXuU21FF9msb42A1se
          stance: supports
          locator: CBDB：兄弟 王以纁（205075）之父／母 王楫
          quotation: null
          interpretation_note: 由兄弟关系推断：王絲 与 王以纁 为同胞（CBDB 记「兄」），王以纁 之父／母即 王絲 之父／母。
          source:
            id: s_TrMHkXuU21FF9msb42A1se
            source_type: api_record
            title: 中国历代人物传记资料库：王絲（CBDB 327964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327964&o=json
            external_identifier: CBDB:327964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Jw3V9gcCZgE2uB8eYMnY58
        status: active
        display_name: 王絲
        merged_into_person_id: null
    - claim:
        id: c_bvbbZZjd5u7xd8o3i7gGQb
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Tzev94VoedK2unqkseUDPf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MUk2hGgKQ6v-xY3RhST3HE
          claim_id: c_bvbbZZjd5u7xd8o3i7gGQb
          source_id: s_oykuFz70MtsOaJ-51wDUSJ
          stance: supports
          locator: CBDB：兄弟 王以纁（205075）之父／母 王楫
          quotation: null
          interpretation_note: 由兄弟关系推断：王絡 与 王以纁 为同胞（CBDB 记「弟」），王以纁 之父／母即 王絡 之父／母。
          source:
            id: s_oykuFz70MtsOaJ-51wDUSJ
            source_type: api_record
            title: 中国历代人物传记资料库：王絡（CBDB 327958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327958&o=json
            external_identifier: CBDB:327958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Tzev94VoedK2unqkseUDPf
        status: active
        display_name: 王絡
        merged_into_person_id: null
    - claim:
        id: c_v94nfMXc0oK7dp_ovCDAmL
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z2dzASTzEFzCvxNk31CAkL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZbsJOstpKbixj96KhS3sNL
          claim_id: c_v94nfMXc0oK7dp_ovCDAmL
          source_id: s_3LjgxgQpMfybrNYOcLkv5g
          stance: supports
          locator: CBDB：兄弟 王以纁（205075）之父／母 王楫
          quotation: null
          interpretation_note: 由兄弟关系推断：王緒 与 王以纁 为同胞（CBDB 记「弟」），王以纁 之父／母即 王緒 之父／母。
          source:
            id: s_3LjgxgQpMfybrNYOcLkv5g
            source_type: api_record
            title: 中国历代人物传记资料库：王緒（CBDB 327948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327948&o=json
            external_identifier: CBDB:327948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Z2dzASTzEFzCvxNk31CAkL
        status: active
        display_name: 王緒
        merged_into_person_id: null
    - claim:
        id: c_DT22Anhb0n5CUcWzkDrZYF
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aRwuGCsBp9XwQBCDQ9TQcm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zTQmmNpPXnlMIn5hD3P3m2
          claim_id: c_DT22Anhb0n5CUcWzkDrZYF
          source_id: s_eQrihrfQZWR4-17r4V5g5e
          stance: supports
          locator: CBDB：兄弟 王以纁（205075）之父／母 王楫
          quotation: null
          interpretation_note: 由兄弟关系推断：王繕 与 王以纁 为同胞（CBDB 记「弟」），王以纁 之父／母即 王繕 之父／母。
          source:
            id: s_eQrihrfQZWR4-17r4V5g5e
            source_type: api_record
            title: 中国历代人物传记资料库：王繕（CBDB 327959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327959&o=json
            external_identifier: CBDB:327959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aRwuGCsBp9XwQBCDQ9TQcm
        status: active
        display_name: 王繕
        merged_into_person_id: null
    - claim:
        id: c_nb-5mdQPxr1CzG-BVHdB-F
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_c6EZKhcAeKEGNkKKjkJYbo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ciOvqmuZGPPPF62IUSEtr8
          claim_id: c_nb-5mdQPxr1CzG-BVHdB-F
          source_id: s_-NErw36ins0IIS2wmcSq6D
          stance: supports
          locator: CBDB：兄弟 王以纁（205075）之父／母 王楫
          quotation: null
          interpretation_note: 由兄弟关系推断：王緼 与 王以纁 为同胞（CBDB 记「兄」），王以纁 之父／母即 王緼 之父／母。
          source:
            id: s_-NErw36ins0IIS2wmcSq6D
            source_type: api_record
            title: 中国历代人物传记资料库：王緼（CBDB 327965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327965&o=json
            external_identifier: CBDB:327965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_c6EZKhcAeKEGNkKKjkJYbo
        status: active
        display_name: 王緼
        merged_into_person_id: null
    - claim:
        id: c_HR_fElaEwSdBe6ZPLzRZDL
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dXQNHYX57uwhFKcBCaCTvm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MLmM7l0Ws2u-11hhSjcDP_
          claim_id: c_HR_fElaEwSdBe6ZPLzRZDL
          source_id: s_5uvVL1d6pDYcyyRtHY2szG
          stance: supports
          locator: CBDB：兄弟 王以纁（205075）之父／母 王楫
          quotation: null
          interpretation_note: 由兄弟关系推断：王維 与 王以纁 为同胞（CBDB 记「弟」），王以纁 之父／母即 王維 之父／母。
          source:
            id: s_5uvVL1d6pDYcyyRtHY2szG
            source_type: api_record
            title: 中国历代人物传记资料库：王維（CBDB 327949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327949&o=json
            external_identifier: CBDB:327949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dXQNHYX57uwhFKcBCaCTvm
        status: active
        display_name: 王維
        merged_into_person_id: null
    - claim:
        id: c_L7VvqKE8UIkXniizDipiBA
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g3EiLD53uQMuc5qwxSS8Qa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fwimI4cgbvaHGyTpCpSjCS
          claim_id: c_L7VvqKE8UIkXniizDipiBA
          source_id: s_BC3XiEFqS192XZcvBhyvIy
          stance: supports
          locator: CBDB：兄弟 王以纁（205075）之父／母 王楫
          quotation: null
          interpretation_note: 由兄弟关系推断：王織 与 王以纁 为同胞（CBDB 记「弟」），王以纁 之父／母即 王織 之父／母。
          source:
            id: s_BC3XiEFqS192XZcvBhyvIy
            source_type: api_record
            title: 中国历代人物传记资料库：王織（CBDB 327957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327957&o=json
            external_identifier: CBDB:327957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g3EiLD53uQMuc5qwxSS8Qa
        status: active
        display_name: 王織
        merged_into_person_id: null
    - claim:
        id: c_MFUp7E3k60Z4zlxQlDRBm8
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mZeDep1J2jXrGYbGRwS2AL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1oBMuJp-c-No5N1gTRysk-
          claim_id: c_MFUp7E3k60Z4zlxQlDRBm8
          source_id: s_dHg17AUvcla8llL-DQVlcb
          stance: supports
          locator: CBDB：兄弟 王以纁（205075）之父／母 王楫
          quotation: null
          interpretation_note: 由兄弟关系推断：王縉 与 王以纁 为同胞（CBDB 记「弟」），王以纁 之父／母即 王縉 之父／母。
          source:
            id: s_dHg17AUvcla8llL-DQVlcb
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 327953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327953&o=json
            external_identifier: CBDB:327953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mZeDep1J2jXrGYbGRwS2AL
        status: active
        display_name: 王縉
        merged_into_person_id: null
    - claim:
        id: c_M8ZkFC5moj6QV5G0RxKAZS
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_p7YXJqS1tPmq2Dnq2Ur8cH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cMnelS3SnRJGc5e0N8A_oM
          claim_id: c_M8ZkFC5moj6QV5G0RxKAZS
          source_id: s_KtdxWCEWaHVasFTaNOvZS4
          stance: supports
          locator: CBDB：兄弟 王以纁（205075）之父／母 王楫
          quotation: null
          interpretation_note: 由兄弟关系推断：王緄 与 王以纁 为同胞（CBDB 记「弟」），王以纁 之父／母即 王緄 之父／母。
          source:
            id: s_KtdxWCEWaHVasFTaNOvZS4
            source_type: api_record
            title: 中国历代人物传记资料库：王緄（CBDB 327950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327950&o=json
            external_identifier: CBDB:327950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_p7YXJqS1tPmq2Dnq2Ur8cH
        status: active
        display_name: 王緄
        merged_into_person_id: null
    - claim:
        id: c_J-lLZ4yQhaseIKBJ-QFCTy
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tAM5wcGVWvfoWBvQ6tKyVK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CyTRnnkKp1G0Wqzs5CZjUn
          claim_id: c_J-lLZ4yQhaseIKBJ-QFCTy
          source_id: s_yUy4P6xdRHGDSKattfLuKg
          stance: supports
          locator: CBDB：兄弟 王以纁（205075）之父／母 王楫
          quotation: null
          interpretation_note: 由兄弟关系推断：王守訓 与 王以纁 为同胞（CBDB 记「弟」），王以纁 之父／母即 王守訓 之父／母。
          source:
            id: s_yUy4P6xdRHGDSKattfLuKg
            source_type: api_record
            title: 中国历代人物传记资料库：王守訓（CBDB 327955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327955&o=json
            external_identifier: CBDB:327955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tAM5wcGVWvfoWBvQ6tKyVK
        status: active
        display_name: 王守訓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王楫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楫 | accepted |
| bio.summary | 王楫，明人物。嘉靖四十一年進士，籍贯文安。（中国历代人物传记资料库 CBDB 327945） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DYviEpoQ7QNEe7UQdPVSd4 | 王以纁 | accepted |
| children | p_7s8BAPmNWBK223SSZme44D | 王緘 | accepted |
| children | p_858rFw8Q6P9UNfpyN3uBVB | 王統 | accepted |
| children | p_B1Kw46B7WBT48xCkV36EkN | 王紳 | accepted |
| children | p_GUBF5xYpVcU5txwspcxGii | 王練 | accepted |
| children | p_H8DB8C3cPyHMGK8CbvSLv8 | 王綵 | accepted |
| children | p_HsH2tHxo8zSYxpnHpBoPLZ | 王纉 | accepted |
| children | p_Jw3V9gcCZgE2uB8eYMnY58 | 王絲 | accepted |
| children | p_Tzev94VoedK2unqkseUDPf | 王絡 | accepted |
| children | p_Z2dzASTzEFzCvxNk31CAkL | 王緒 | accepted |
| children | p_aRwuGCsBp9XwQBCDQ9TQcm | 王繕 | accepted |
| children | p_c6EZKhcAeKEGNkKKjkJYbo | 王緼 | accepted |
| children | p_dXQNHYX57uwhFKcBCaCTvm | 王維 | accepted |
| children | p_g3EiLD53uQMuc5qwxSS8Qa | 王織 | accepted |
| children | p_mZeDep1J2jXrGYbGRwS2AL | 王縉 | accepted |
| children | p_p7YXJqS1tPmq2Dnq2Ur8cH | 王緄 | accepted |
| children | p_tAM5wcGVWvfoWBvQ6tKyVK | 王守訓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綵（CBDB 327956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327956&o=json)
- [中国历代人物传记资料库：王緄（CBDB 327950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327950&o=json)
- [中国历代人物传记资料库：王楫（CBDB 327945）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327945&o=json)
- [中国历代人物传记资料库：王緘（CBDB 327961）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327961&o=json)
- [中国历代人物传记资料库：王縉（CBDB 327953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327953&o=json)
- [中国历代人物传记资料库：王練（CBDB 327962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327962&o=json)
- [中国历代人物传记资料库：王絡（CBDB 327958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327958&o=json)
- [中国历代人物传记资料库：王繕（CBDB 327959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327959&o=json)
- [中国历代人物传记资料库：王紳（CBDB 327951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327951&o=json)
- [中国历代人物传记资料库：王守訓（CBDB 327955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327955&o=json)
- [中国历代人物传记资料库：王絲（CBDB 327964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327964&o=json)
- [中国历代人物传记资料库：王統（CBDB 327960）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327960&o=json)
- [中国历代人物传记资料库：王維（CBDB 327949）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327949&o=json)
- [中国历代人物传记资料库：王緒（CBDB 327948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327948&o=json)
- [中国历代人物传记资料库：王以纁（CBDB 205075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205075&o=json)
- [中国历代人物传记资料库：王緼（CBDB 327965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327965&o=json)
- [中国历代人物传记资料库：王織（CBDB 327957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327957&o=json)
- [中国历代人物传记资料库：王纉（CBDB 327954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327954&o=json)
