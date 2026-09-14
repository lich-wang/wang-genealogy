---
schema: wang-person/v1
id: p_ziFePMbdNLKAgyGGN4BwgX
status: active
merged_into: null
display_name: 王洙
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MfTEFvsXmENiw1bGRYN8Gs
        subject_person_id: p_ziFePMbdNLKAgyGGN4BwgX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jyjGHQ4C1CT6viuX331Rrw
          claim_id: c_MfTEFvsXmENiw1bGRYN8Gs
          source_id: s_NW4LqP9V92uigTz1fJ2X9z
          stance: supports
          locator: CBDB:202146
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202146）
          source: &a1
            id: s_NW4LqP9V92uigTz1fJ2X9z
            source_type: api_record
            title: 中国历代人物传记资料库：王洙（CBDB 202146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202146&o=json
            external_identifier: CBDB:202146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.724Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CzrjkbD9L9cDeK8D6c91pg
        subject_person_id: p_ziFePMbdNLKAgyGGN4BwgX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1485年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_awAm6hBHohSPBinMZQC8fY
          claim_id: c_CzrjkbD9L9cDeK8D6c91pg
          source_id: s_NW4LqP9V92uigTz1fJ2X9z
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
        id: c_ULND44rGUNcFBTN87p16q9
        subject_person_id: p_ziFePMbdNLKAgyGGN4BwgX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洙（生于1485年），明人物。明清進士進士，籍贯臨海，入仕進士。（中国历代人物传记资料库 CBDB 202146）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_l-Dh58gDCYT6m5pN5m8SzX
          claim_id: c_ULND44rGUNcFBTN87p16q9
          source_id: s_NW4LqP9V92uigTz1fJ2X9z
          stance: supports
          locator: CBDB:202146
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vcDakHTOUNs_NtG3NKwMgG
        subject_person_id: p_229EQbFCA3PP8BNNQ1HMQL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ziFePMbdNLKAgyGGN4BwgX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IhGA8xNg7_vizoCXdNmNRn
          claim_id: c_vcDakHTOUNs_NtG3NKwMgG
          source_id: s_a9nhVp9EnwoF8N2xcY2o8R
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_a9nhVp9EnwoF8N2xcY2o8R
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 284247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284247&o=json
            external_identifier: CBDB:284247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_229EQbFCA3PP8BNNQ1HMQL
        status: active
        display_name: 王鎬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_R4vkDT81fz3zX9HMS0onD_
        subject_person_id: p_8dUV7JKHEchfA3MC69YFQ9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ziFePMbdNLKAgyGGN4BwgX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Auq7ByUPgoH6KuvOVnl6DQ
          claim_id: c_R4vkDT81fz3zX9HMS0onD_
          source_id: s_D6f6WSR9knTFSk7iYS5fkC
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_D6f6WSR9knTFSk7iYS5fkC
            source_type: api_record
            title: 中国历代人物传记资料库：王亶（CBDB 284246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284246&o=json
            external_identifier: CBDB:284246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8dUV7JKHEchfA3MC69YFQ9
        status: active
        display_name: 王亶
        merged_into_person_id: null
    - claim:
        id: c_jhm9C2s0b2CEuf_NGaWi23
        subject_person_id: p_Bza9ZpF49QRsnKD5tYkYny
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ziFePMbdNLKAgyGGN4BwgX
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SLEf0_jPRiMZGOBWYfaVzp
          claim_id: c_jhm9C2s0b2CEuf_NGaWi23
          source_id: s_caWzJcHb4hdqCqHWfhjfEY
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_caWzJcHb4hdqCqHWfhjfEY
            source_type: api_record
            title: 中国历代人物传记资料库：王周南（CBDB 284245）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284245&o=json
            external_identifier: CBDB:284245
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Bza9ZpF49QRsnKD5tYkYny
        status: active
        display_name: 王周南
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_91-K3j9UwDIwQYo_3VdZUE
        subject_person_id: p_BjB45LHMpMdyCLtRMz28q6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ziFePMbdNLKAgyGGN4BwgX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IZlDZ7ZYePqyUAf-Cbbm1M
          claim_id: c_91-K3j9UwDIwQYo_3VdZUE
          source_id: s_WM2hdeBnewpH0xuBFWKo7-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202146 王洙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WM2hdeBnewpH0xuBFWKo7-
            source_type: api_record
            title: 中国历代人物传记资料库：王汲（CBDB 284256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284256&o=json
            external_identifier: CBDB:284256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BjB45LHMpMdyCLtRMz28q6
        status: active
        display_name: 王汲
        merged_into_person_id: null
    - claim:
        id: c_0yk0VAioLCrlU_dJ6-YgA8
        subject_person_id: p_GR4D45ak4bpBPpSqZCzPSe
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ziFePMbdNLKAgyGGN4BwgX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__ObqIvn-Udhhy6Bvgr9SOV
          claim_id: c_0yk0VAioLCrlU_dJ6-YgA8
          source_id: s_hpe5C7-qQp9BphAkYwg5jJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202146 王洙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hpe5C7-qQp9BphAkYwg5jJ
            source_type: api_record
            title: 中国历代人物传记资料库：王汴（CBDB 284254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284254&o=json
            external_identifier: CBDB:284254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GR4D45ak4bpBPpSqZCzPSe
        status: active
        display_name: 王汴
        merged_into_person_id: null
    - claim:
        id: c_dM_uEW4AZztJPSEB6aZsfj
        subject_person_id: p_HsXZiVC5cACnAa2snywDdb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ziFePMbdNLKAgyGGN4BwgX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JDQfpPYIKvG87HS_4TXhXM
          claim_id: c_dM_uEW4AZztJPSEB6aZsfj
          source_id: s_fi2DXOpYoL8CKchIA3j92P
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202146 王洙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fi2DXOpYoL8CKchIA3j92P
            source_type: api_record
            title: 中国历代人物传记资料库：王泌（CBDB 284250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284250&o=json
            external_identifier: CBDB:284250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HsXZiVC5cACnAa2snywDdb
        status: active
        display_name: 王泌
        merged_into_person_id: null
    - claim:
        id: c_nfJ4oQq0sstSZHOM51PAy3
        subject_person_id: p_NLVSsqFEALrqsyQdea698j
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ziFePMbdNLKAgyGGN4BwgX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7FHltfM15GH9O6WqYWeMSJ
          claim_id: c_nfJ4oQq0sstSZHOM51PAy3
          source_id: s_wd-3FPlbFgodvqnwB-Vgb5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202146 王洙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wd-3FPlbFgodvqnwB-Vgb5
            source_type: api_record
            title: 中国历代人物传记资料库：王匯（CBDB 284253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284253&o=json
            external_identifier: CBDB:284253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NLVSsqFEALrqsyQdea698j
        status: active
        display_name: 王匯
        merged_into_person_id: null
    - claim:
        id: c_wE3pAlqC9O-CYJsZwvi2NH
        subject_person_id: p_Wb6uKtiEP6ePo6mtvwb7P8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ziFePMbdNLKAgyGGN4BwgX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__rGJCQOZn4ZEu4T8GnFb_c
          claim_id: c_wE3pAlqC9O-CYJsZwvi2NH
          source_id: s_hJmBBccfr-_kvvYAtj4vKm
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202146 王洙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hJmBBccfr-_kvvYAtj4vKm
            source_type: api_record
            title: 中国历代人物传记资料库：王淑（CBDB 284257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284257&o=json
            external_identifier: CBDB:284257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Wb6uKtiEP6ePo6mtvwb7P8
        status: active
        display_name: 王淑
        merged_into_person_id: null
    - claim:
        id: c_K0K1bxo8A_cwV5OuKap9bd
        subject_person_id: p_jrykkmzrQXq266DY21HkgQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ziFePMbdNLKAgyGGN4BwgX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OsBWjXCjxuAFezOJ_-fGY3
          claim_id: c_K0K1bxo8A_cwV5OuKap9bd
          source_id: s_A5P0yfuOrecrPkphDhZ-6r
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202146 王洙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_A5P0yfuOrecrPkphDhZ-6r
            source_type: api_record
            title: 中国历代人物传记资料库：王灌（CBDB 284252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284252&o=json
            external_identifier: CBDB:284252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jrykkmzrQXq266DY21HkgQ
        status: active
        display_name: 王灌
        merged_into_person_id: null
    - claim:
        id: c_zyvuCBIFzBrJ-_6errgNCb
        subject_person_id: p_xQGD9wzEMAZCH7mBvFtR3r
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ziFePMbdNLKAgyGGN4BwgX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0u6KxABGFdpIhWaoEGhpJg
          claim_id: c_zyvuCBIFzBrJ-_6errgNCb
          source_id: s_cI17UApEhYci_952pCIzbI
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202146 王洙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cI17UApEhYci_952pCIzbI
            source_type: api_record
            title: 中国历代人物传记资料库：王漙（CBDB 284251）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284251&o=json
            external_identifier: CBDB:284251
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xQGD9wzEMAZCH7mBvFtR3r
        status: active
        display_name: 王漙
        merged_into_person_id: null
---

# 王洙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洙 | accepted |
| birth.date | 1485年 | accepted |
| bio.summary | 王洙（生于1485年），明人物。明清進士進士，籍贯臨海，入仕進士。（中国历代人物传记资料库 CBDB 202146） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_229EQbFCA3PP8BNNQ1HMQL | 王鎬 | accepted |
| ancestors | p_8dUV7JKHEchfA3MC69YFQ9 | 王亶 | accepted |
| ancestors | p_Bza9ZpF49QRsnKD5tYkYny | 王周南 | accepted |
| other | p_BjB45LHMpMdyCLtRMz28q6 | 王汲 | accepted |
| other | p_GR4D45ak4bpBPpSqZCzPSe | 王汴 | accepted |
| other | p_HsXZiVC5cACnAa2snywDdb | 王泌 | accepted |
| other | p_NLVSsqFEALrqsyQdea698j | 王匯 | accepted |
| other | p_Wb6uKtiEP6ePo6mtvwb7P8 | 王淑 | accepted |
| other | p_jrykkmzrQXq266DY21HkgQ | 王灌 | accepted |
| other | p_xQGD9wzEMAZCH7mBvFtR3r | 王漙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汴（CBDB 284254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284254&o=json)
- [中国历代人物传记资料库：王亶（CBDB 284246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284246&o=json)
- [中国历代人物传记资料库：王灌（CBDB 284252）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284252&o=json)
- [中国历代人物传记资料库：王鎬（CBDB 284247）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284247&o=json)
- [中国历代人物传记资料库：王匯（CBDB 284253）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284253&o=json)
- [中国历代人物传记资料库：王汲（CBDB 284256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284256&o=json)
- [中国历代人物传记资料库：王泌（CBDB 284250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284250&o=json)
- [中国历代人物传记资料库：王淑（CBDB 284257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284257&o=json)
- [中国历代人物传记资料库：王漙（CBDB 284251）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284251&o=json)
- [中国历代人物传记资料库：王周南（CBDB 284245）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284245&o=json)
- [中国历代人物传记资料库：王洙（CBDB 202146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202146&o=json)
