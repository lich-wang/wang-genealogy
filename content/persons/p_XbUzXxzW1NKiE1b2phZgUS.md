---
schema: wang-person/v1
id: p_XbUzXxzW1NKiE1b2phZgUS
status: active
merged_into: null
display_name: 王濬
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AgUWXxb3uTEoQYJ9bX7KdB
        subject_person_id: p_XbUzXxzW1NKiE1b2phZgUS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J52Ri5SFKYS4VE2DF34jTP
          claim_id: c_AgUWXxb3uTEoQYJ9bX7KdB
          source_id: s_VgQmdDdn2FCKmNKoQism56
          stance: supports
          locator: CBDB:126841
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126841）
          source: &a1
            id: s_VgQmdDdn2FCKmNKoQism56
            source_type: api_record
            title: 中国历代人物传记资料库：王濬（CBDB 126841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126841&o=json
            external_identifier: CBDB:126841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.254Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LkNN7ZQ642EvDsw8rCwZSL
        subject_person_id: p_XbUzXxzW1NKiE1b2phZgUS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濬，明人物。明清進士進士，籍贯威縣，入仕進士，曾任都察院右僉都御史。（中国历代人物传记资料库 CBDB 126841）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kwGPGn7Db06cFkkmibp7on
          claim_id: c_LkNN7ZQ642EvDsw8rCwZSL
          source_id: s_VgQmdDdn2FCKmNKoQism56
          stance: supports
          locator: CBDB:126841
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zwQEWRZNWMOaUjkDlIkc9P
        subject_person_id: p_rfGZtWQ8pfDBATdxzFKLBp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XbUzXxzW1NKiE1b2phZgUS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O4FvviVDPi1SM9_qx5k_52
          claim_id: c_zwQEWRZNWMOaUjkDlIkc9P
          source_id: s_4N1QCK7dLGi7viStf4QAuR
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第九十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4N1QCK7dLGi7viStf4QAuR
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 237975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237975&o=json
            external_identifier: CBDB:237975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.866Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rfGZtWQ8pfDBATdxzFKLBp
        status: active
        display_name: 王榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_nQXnMGggru6NS39LY1fqg1
        subject_person_id: p_eRAEh5LnWC8uZKYHPCivge
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XbUzXxzW1NKiE1b2phZgUS
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wDGvRDJ6MdVOIy30LhqHUQ
          claim_id: c_nQXnMGggru6NS39LY1fqg1
          source_id: s_HU1t1FRJ8MvpSaNQEKVPia
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第九十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HU1t1FRJ8MvpSaNQEKVPia
            source_type: api_record
            title: 中国历代人物传记资料库：王志剛（CBDB 237964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237964&o=json
            external_identifier: CBDB:237964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.865Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eRAEh5LnWC8uZKYHPCivge
        status: active
        display_name: 王志剛
        merged_into_person_id: null
    - claim:
        id: c_piObVy5_HyhB6GfyakBcJ7
        subject_person_id: p_R8ZEEwGq43WU2bsz7jCJvE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XbUzXxzW1NKiE1b2phZgUS
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RdRN_mNWULT5FQEmjBJHzH
          claim_id: c_piObVy5_HyhB6GfyakBcJ7
          source_id: s_Ut6GQoiPgQ6NqJB4Kh4gAE
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第九十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ut6GQoiPgQ6NqJB4Kh4gAE
            source_type: api_record
            title: 中国历代人物传记资料库：王伯成（CBDB 237953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237953&o=json
            external_identifier: CBDB:237953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.863Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_R8ZEEwGq43WU2bsz7jCJvE
        status: active
        display_name: 王伯成
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_ZtDAmjyGmhhp6jbp4cFnlA
        subject_person_id: p_3yzEBQaW4CweFF5zP5io5X
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XbUzXxzW1NKiE1b2phZgUS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zH65aryoS5XX1Hw9UbAVXn
          claim_id: c_ZtDAmjyGmhhp6jbp4cFnlA
          source_id: s_hTeb4GRMLThgwpayB8HzkO
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126841 王濬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hTeb4GRMLThgwpayB8HzkO
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 238020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238020&o=json
            external_identifier: CBDB:238020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3yzEBQaW4CweFF5zP5io5X
        status: active
        display_name: 王寬
        merged_into_person_id: null
    - claim:
        id: c_n-MgxaUjh-4yL2iS7kQWx0
        subject_person_id: p_PRJuz6g1EPua8SAJHMVxc8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XbUzXxzW1NKiE1b2phZgUS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4AJnK6dPZPQPX0t_3pZQL6
          claim_id: c_n-MgxaUjh-4yL2iS7kQWx0
          source_id: s_pVYoLt12lIQ8YWpiIw85BZ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126841 王濬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pVYoLt12lIQ8YWpiIw85BZ
            source_type: api_record
            title: 中国历代人物传记资料库：王振（CBDB 238075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238075&o=json
            external_identifier: CBDB:238075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PRJuz6g1EPua8SAJHMVxc8
        status: active
        display_name: 王振
        merged_into_person_id: null
    - claim:
        id: c_t-hqPWm45RNOHxw3VTyuI-
        subject_person_id: p_U91Yi4XsjUnTQKezbKmFZ4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XbUzXxzW1NKiE1b2phZgUS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v8X5L1z4qeqY96aDkdhj5Q
          claim_id: c_t-hqPWm45RNOHxw3VTyuI-
          source_id: s_ZDXnc54ONlYy116mgCPvHL
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126841 王濬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZDXnc54ONlYy116mgCPvHL
            source_type: api_record
            title: 中国历代人物传记资料库：王友才（CBDB 238031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238031&o=json
            external_identifier: CBDB:238031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U91Yi4XsjUnTQKezbKmFZ4
        status: active
        display_name: 王友才
        merged_into_person_id: null
    - claim:
        id: c_-ms48-g7EOpMX6mtYWWpAC
        subject_person_id: p_XbUzXxzW1NKiE1b2phZgUS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_f13BewmCUu5tL2gG3mx3vv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FyNWBvL6bhm5hfjkYwGror
          claim_id: c_-ms48-g7EOpMX6mtYWWpAC
          source_id: s_VR5x7HOFlXvRNQe1otBoMZ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126841 王濬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VR5x7HOFlXvRNQe1otBoMZ
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 238053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238053&o=json
            external_identifier: CBDB:238053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_f13BewmCUu5tL2gG3mx3vv
        status: active
        display_name: 王通
        merged_into_person_id: null
    - claim:
        id: c_gCBDFVDuJazHUvaz2N-guX
        subject_person_id: p_XbUzXxzW1NKiE1b2phZgUS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rFDtpHcmA3zSJdT1XjKQ9W
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Km6IeG18WjYN0B09TaX6H
          claim_id: c_gCBDFVDuJazHUvaz2N-guX
          source_id: s_q5EBLgX64IPfRHytyB9yWK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126841 王濬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_q5EBLgX64IPfRHytyB9yWK
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 238064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238064&o=json
            external_identifier: CBDB:238064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rFDtpHcmA3zSJdT1XjKQ9W
        status: active
        display_name: 王恭
        merged_into_person_id: null
    - claim:
        id: c_MjPPNwZRGmpIhd2KLdhfuG
        subject_person_id: p_XbUzXxzW1NKiE1b2phZgUS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_stVWCV7M3bfYpduLX48CKy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yUj5U1ooS5d0ohkBjT5FC1
          claim_id: c_MjPPNwZRGmpIhd2KLdhfuG
          source_id: s_rEyptl88OSnTXuOKGvy6gy
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126841 王濬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rEyptl88OSnTXuOKGvy6gy
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 238042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238042&o=json
            external_identifier: CBDB:238042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_stVWCV7M3bfYpduLX48CKy
        status: active
        display_name: 王澤
        merged_into_person_id: null
---

# 王濬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濬 | accepted |
| bio.summary | 王濬，明人物。明清進士進士，籍贯威縣，入仕進士，曾任都察院右僉都御史。（中国历代人物传记资料库 CBDB 126841） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rfGZtWQ8pfDBATdxzFKLBp | 王榮 | accepted |
| ancestors | p_eRAEh5LnWC8uZKYHPCivge | 王志剛 | accepted |
| ancestors | p_R8ZEEwGq43WU2bsz7jCJvE | 王伯成 | accepted |
| other | p_3yzEBQaW4CweFF5zP5io5X | 王寬 | accepted |
| other | p_PRJuz6g1EPua8SAJHMVxc8 | 王振 | accepted |
| other | p_U91Yi4XsjUnTQKezbKmFZ4 | 王友才 | accepted |
| other | p_f13BewmCUu5tL2gG3mx3vv | 王通 | accepted |
| other | p_rFDtpHcmA3zSJdT1XjKQ9W | 王恭 | accepted |
| other | p_stVWCV7M3bfYpduLX48CKy | 王澤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯成（CBDB 237953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237953&o=json)
- [中国历代人物传记资料库：王恭（CBDB 238064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238064&o=json)
- [中国历代人物传记资料库：王濬（CBDB 126841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126841&o=json)
- [中国历代人物传记资料库：王寬（CBDB 238020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238020&o=json)
- [中国历代人物传记资料库：王榮（CBDB 237975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237975&o=json)
- [中国历代人物传记资料库：王通（CBDB 238053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238053&o=json)
- [中国历代人物传记资料库：王友才（CBDB 238031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238031&o=json)
- [中国历代人物传记资料库：王澤（CBDB 238042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238042&o=json)
- [中国历代人物传记资料库：王振（CBDB 238075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238075&o=json)
- [中国历代人物传记资料库：王志剛（CBDB 237964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237964&o=json)
