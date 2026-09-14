---
schema: wang-person/v1
id: p_MmVpUWztCQKaC484qaKxXc
status: active
merged_into: null
display_name: 王汝濂
cbdb_id: 205966
revision: 13
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L8r44g1tMcDGH7qGQY3m14
        subject_person_id: p_MmVpUWztCQKaC484qaKxXc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝濂（生于1534年），明人物。明清進士進士，籍贯懷仁，入仕進士。（中国历代人物传记资料库 CBDB 205966）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs__U-rpymhRh7rxm87fw1k5J
          claim_id: c_L8r44g1tMcDGH7qGQY3m14
          source_id: s_ZciW7GUxUz51DqwGXD8dM7
          stance: supports
          locator: CBDB:205966
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZciW7GUxUz51DqwGXD8dM7
            source_type: api_record
            title: 中国历代人物传记资料库：王汝濂（CBDB 205966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205966&o=json
            external_identifier: CBDB:205966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_P4m5XVK7CH7XM1d3RAHkgV
        subject_person_id: p_MmVpUWztCQKaC484qaKxXc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1534年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1534-01-01
            latest: 1534-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NSoCrjfNo1TDguYXYQiGPB
          claim_id: c_P4m5XVK7CH7XM1d3RAHkgV
          source_id: s_ZciW7GUxUz51DqwGXD8dM7
          stance: supports
          locator: CBDB:205966
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1534
          source:
            id: s_ZciW7GUxUz51DqwGXD8dM7
            source_type: api_record
            title: 中国历代人物传记资料库：王汝濂（CBDB 205966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205966&o=json
            external_identifier: CBDB:205966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GLmMaAX4BmHafLjrLrKcJB
        subject_person_id: p_MmVpUWztCQKaC484qaKxXc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝濂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_C3Pf6a2hHZLtM93RCARQfM
          claim_id: c_GLmMaAX4BmHafLjrLrKcJB
          source_id: s_ZciW7GUxUz51DqwGXD8dM7
          stance: supports
          locator: CBDB:205966
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1534
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_M5ZgXEBVRbTG49918D5hKE
        subject_person_id: p_5NvgpfYRCbA6xFX2b2beZH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MmVpUWztCQKaC484qaKxXc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g0vmr-PKXdcEtcJJgAj1-i
          claim_id: c_M5ZgXEBVRbTG49918D5hKE
          source_id: s_6Qxigr21Es5GTqyWWcgpWX
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百三十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6Qxigr21Es5GTqyWWcgpWX
            source_type: api_record
            title: 中国历代人物传记资料库：王繼（CBDB 211406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211406&o=json
            external_identifier: CBDB:211406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.037Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5NvgpfYRCbA6xFX2b2beZH
        status: active
        display_name: 王繼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_GVd5LIhXMy_6cihWQy_ZJ0
        subject_person_id: p_AywMygZPLFaHqgWmY6BNZH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MmVpUWztCQKaC484qaKxXc
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HutU5lMPcHS0HY1RpAOEIH
          claim_id: c_GVd5LIhXMy_6cihWQy_ZJ0
          source_id: s_8jwyBjxBDZN7EQv1hyL8RN
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百三十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8jwyBjxBDZN7EQv1hyL8RN
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 211404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211404&o=json
            external_identifier: CBDB:211404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.036Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AywMygZPLFaHqgWmY6BNZH
        status: active
        display_name: 王智
        merged_into_person_id: null
    - claim:
        id: c_Si9t63UTlbyU1pfEEvzS9P
        subject_person_id: p_iQEFuYUXmCmgNUR4fobt4K
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MmVpUWztCQKaC484qaKxXc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DHmt7zSBOiT4ZkebbXgJxK
          claim_id: c_Si9t63UTlbyU1pfEEvzS9P
          source_id: s_MTwDgH4b4MfBH9ZV2zBkzx
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百三十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MTwDgH4b4MfBH9ZV2zBkzx
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 211405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211405&o=json
            external_identifier: CBDB:211405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.037Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iQEFuYUXmCmgNUR4fobt4K
        status: active
        display_name: 王瑛
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_Dvr_Sg3tfDhnMKiEC8OzKG
        subject_person_id: p_DK1eBMbHVfxDanwn7xNzmC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MmVpUWztCQKaC484qaKxXc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KC_a1sjGDNnvX3gJxrD8J7
          claim_id: c_Dvr_Sg3tfDhnMKiEC8OzKG
          source_id: s_smwMzzKRylT882ZrNxP8hx
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205966 王汝濂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_smwMzzKRylT882ZrNxP8hx
            source_type: api_record
            title: 中国历代人物传记资料库：王汝汲（CBDB 211413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211413&o=json
            external_identifier: CBDB:211413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DK1eBMbHVfxDanwn7xNzmC
        status: active
        display_name: 王汝汲
        merged_into_person_id: null
    - claim:
        id: c_bCn8ClFI3y3Y4lTtBjAWNo
        subject_person_id: p_MmVpUWztCQKaC484qaKxXc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RBNJVK32JNJqkQW1RZ4x3m
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ufl1uqU5sGv6coJnWtqLv5
          claim_id: c_bCn8ClFI3y3Y4lTtBjAWNo
          source_id: s_RtfQIQC3STwGMFXdAS1JrE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205966 王汝濂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RtfQIQC3STwGMFXdAS1JrE
            source_type: api_record
            title: 中国历代人物传记资料库：王汝洽（CBDB 211410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211410&o=json
            external_identifier: CBDB:211410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RBNJVK32JNJqkQW1RZ4x3m
        status: active
        display_name: 王汝洽
        merged_into_person_id: null
    - claim:
        id: c_IG2nMxr-C62XEDLjrfgcpm
        subject_person_id: p_MmVpUWztCQKaC484qaKxXc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SB6NxrCz8PK82o2uBChmi4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JKekoadL7phdEmrzwP25Hf
          claim_id: c_IG2nMxr-C62XEDLjrfgcpm
          source_id: s_WXrLBXNCd6XnltltodPQib
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205966 王汝濂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WXrLBXNCd6XnltltodPQib
            source_type: api_record
            title: 中国历代人物传记资料库：王汝浹（CBDB 211416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211416&o=json
            external_identifier: CBDB:211416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SB6NxrCz8PK82o2uBChmi4
        status: active
        display_name: 王汝浹
        merged_into_person_id: null
    - claim:
        id: c_8hj_-voFvk09pLJTmLhRgo
        subject_person_id: p_MmVpUWztCQKaC484qaKxXc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VKs3zJCUbWxWdVGecS8kFY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4gufNom123wS5RM7gPkdPt
          claim_id: c_8hj_-voFvk09pLJTmLhRgo
          source_id: s_j55oimwKYN9feYTaQRcMVH
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205966 王汝濂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_j55oimwKYN9feYTaQRcMVH
            source_type: api_record
            title: 中国历代人物传记资料库：王汝淓（CBDB 211415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211415&o=json
            external_identifier: CBDB:211415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VKs3zJCUbWxWdVGecS8kFY
        status: active
        display_name: 王汝淓
        merged_into_person_id: null
    - claim:
        id: c_orLtuxUxB5rPxc7nN_Dznx
        subject_person_id: p_MmVpUWztCQKaC484qaKxXc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WGHmo7NBqH3etfk4iAcoJ7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R0quPb-lpyU5tBHY3G62D2
          claim_id: c_orLtuxUxB5rPxc7nN_Dznx
          source_id: s_NUoyG9EuDQxuYrVeNATTHO
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205966 王汝濂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NUoyG9EuDQxuYrVeNATTHO
            source_type: api_record
            title: 中国历代人物传记资料库：王汝湞（CBDB 211412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211412&o=json
            external_identifier: CBDB:211412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WGHmo7NBqH3etfk4iAcoJ7
        status: active
        display_name: 王汝湞
        merged_into_person_id: null
    - claim:
        id: c_ZTIfcmtycrOl_06D8du9h3
        subject_person_id: p_MmVpUWztCQKaC484qaKxXc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hmLDYN1bVWXedTQ3iy22EJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WxiT5z1ofs0TY_H1c8D1jj
          claim_id: c_ZTIfcmtycrOl_06D8du9h3
          source_id: s_mxVjYn2n4rfmLk1YNjmX2l
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205966 王汝濂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mxVjYn2n4rfmLk1YNjmX2l
            source_type: api_record
            title: 中国历代人物传记资料库：王汝蒞（CBDB 211418）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211418&o=json
            external_identifier: CBDB:211418
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hmLDYN1bVWXedTQ3iy22EJ
        status: active
        display_name: 王汝蒞
        merged_into_person_id: null
    - claim:
        id: c_nMDiXvi1ceq-opuSUP7QOi
        subject_person_id: p_MmVpUWztCQKaC484qaKxXc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qMVBXrXHRKvQfbSVAM8wUy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aW7-04po0rRvO-sIu1032o
          claim_id: c_nMDiXvi1ceq-opuSUP7QOi
          source_id: s_YbzPc9iBsQ23a7kn3Jmz4w
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205966 王汝濂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YbzPc9iBsQ23a7kn3Jmz4w
            source_type: api_record
            title: 中国历代人物传记资料库：王汝湘（CBDB 211409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211409&o=json
            external_identifier: CBDB:211409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qMVBXrXHRKvQfbSVAM8wUy
        status: active
        display_name: 王汝湘
        merged_into_person_id: null
    - claim:
        id: c_fArv4oe91A_as1zeq6thGp
        subject_person_id: p_MmVpUWztCQKaC484qaKxXc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s3HVN1grcfFzbn44w8tFqy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N1yc0n8H7q0mgKDE-SvcCo
          claim_id: c_fArv4oe91A_as1zeq6thGp
          source_id: s_-wn02ab0U-H8iZwYHOm1mz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205966 王汝濂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-wn02ab0U-H8iZwYHOm1mz
            source_type: api_record
            title: 中国历代人物传记资料库：王崇涑（CBDB 211417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211417&o=json
            external_identifier: CBDB:211417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s3HVN1grcfFzbn44w8tFqy
        status: active
        display_name: 王崇涑
        merged_into_person_id: null
    - claim:
        id: c_YGb5e4TVgfgR7gHn9KobGN
        subject_person_id: p_MmVpUWztCQKaC484qaKxXc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_w8CP1WN1DoH2uadPLEGj1c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OtxS4LCip6FXCKTqlRZ-hl
          claim_id: c_YGb5e4TVgfgR7gHn9KobGN
          source_id: s_gL0N9ZUC9qTnci9A2pR_HD
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205966 王汝濂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gL0N9ZUC9qTnci9A2pR_HD
            source_type: api_record
            title: 中国历代人物传记资料库：王崇瀾（CBDB 211411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211411&o=json
            external_identifier: CBDB:211411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_w8CP1WN1DoH2uadPLEGj1c
        status: active
        display_name: 王崇瀾
        merged_into_person_id: null
---

# 王汝濂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝濂（生于1534年），明人物。明清進士進士，籍贯懷仁，入仕進士。（中国历代人物传记资料库 CBDB 205966） | accepted |
| birth.date | 1534年 | accepted |
| name.primary | 王汝濂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5NvgpfYRCbA6xFX2b2beZH | 王繼 | accepted |
| ancestors | p_AywMygZPLFaHqgWmY6BNZH | 王智 | accepted |
| ancestors | p_iQEFuYUXmCmgNUR4fobt4K | 王瑛 | accepted |
| other | p_DK1eBMbHVfxDanwn7xNzmC | 王汝汲 | accepted |
| other | p_RBNJVK32JNJqkQW1RZ4x3m | 王汝洽 | accepted |
| other | p_SB6NxrCz8PK82o2uBChmi4 | 王汝浹 | accepted |
| other | p_VKs3zJCUbWxWdVGecS8kFY | 王汝淓 | accepted |
| other | p_WGHmo7NBqH3etfk4iAcoJ7 | 王汝湞 | accepted |
| other | p_hmLDYN1bVWXedTQ3iy22EJ | 王汝蒞 | accepted |
| other | p_qMVBXrXHRKvQfbSVAM8wUy | 王汝湘 | accepted |
| other | p_s3HVN1grcfFzbn44w8tFqy | 王崇涑 | accepted |
| other | p_w8CP1WN1DoH2uadPLEGj1c | 王崇瀾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇瀾（CBDB 211411）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211411&o=json)
- [中国历代人物传记资料库：王崇涑（CBDB 211417）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211417&o=json)
- [中国历代人物传记资料库：王繼（CBDB 211406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211406&o=json)
- [中国历代人物传记资料库：王汝湞（CBDB 211412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211412&o=json)
- [中国历代人物传记资料库：王汝淓（CBDB 211415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211415&o=json)
- [中国历代人物传记资料库：王汝汲（CBDB 211413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211413&o=json)
- [中国历代人物传记资料库：王汝浹（CBDB 211416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211416&o=json)
- [中国历代人物传记资料库：王汝蒞（CBDB 211418）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211418&o=json)
- [中国历代人物传记资料库：王汝濂（CBDB 205966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205966&o=json)
- [中国历代人物传记资料库：王汝洽（CBDB 211410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211410&o=json)
- [中国历代人物传记资料库：王汝湘（CBDB 211409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211409&o=json)
- [中国历代人物传记资料库：王瑛（CBDB 211405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211405&o=json)
- [中国历代人物传记资料库：王智（CBDB 211404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211404&o=json)
