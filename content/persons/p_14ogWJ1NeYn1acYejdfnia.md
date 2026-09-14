---
schema: wang-person/v1
id: p_14ogWJ1NeYn1acYejdfnia
status: active
merged_into: null
display_name: 王斌
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dgWm9NKfrQhwSQ4V6NHKH9
        subject_person_id: p_14ogWJ1NeYn1acYejdfnia
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9zKqhwAMNXJhuCB7zC73Yg
          claim_id: c_dgWm9NKfrQhwSQ4V6NHKH9
          source_id: s_thB3sU3j7kNQGdrbhbCxjz
          stance: supports
          locator: CBDB:239881
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（239881）
          source: &a1
            id: s_thB3sU3j7kNQGdrbhbCxjz
            source_type: api_record
            title: 中国历代人物传记资料库：王斌（CBDB 239881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239881&o=json
            external_identifier: CBDB:239881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JciV2iEb3qKrT1mFH2Akio
        subject_person_id: p_14ogWJ1NeYn1acYejdfnia
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斌，明人物。正统十年進士，籍贯永寧衛。（中国历代人物传记资料库 CBDB 239881）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xVOSHBca7oLLdxXBhbTLBu
          claim_id: c_JciV2iEb3qKrT1mFH2Akio
          source_id: s_thB3sU3j7kNQGdrbhbCxjz
          stance: supports
          locator: CBDB:239881
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_FqksDHW_vFcMjk2TIe9u_u
        subject_person_id: p_14ogWJ1NeYn1acYejdfnia
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e8Zr493vi2djpmCUjmBf8z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XAedQwgBS0Qp5Oqy-ECUvd
          claim_id: c_FqksDHW_vFcMjk2TIe9u_u
          source_id: s_thB3sU3j7kNQGdrbhbCxjz
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第六十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_e8Zr493vi2djpmCUjmBf8z
        status: active
        display_name: 王敞
        merged_into_person_id: null
    - claim:
        id: c_5z15dTxx1cd42KQWxwATHY
        subject_person_id: p_14ogWJ1NeYn1acYejdfnia
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2r8Au5ZzVLePdKoJ3pQCdM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YI5skXJZeFaxj10VFyEVQh
          claim_id: c_5z15dTxx1cd42KQWxwATHY
          source_id: s_0Kdh4TxPpBQyqdAV4sMqDO
          stance: supports
          locator: CBDB：兄弟 王敞（208063）之父／母 王斌
          quotation: null
          interpretation_note: 由兄弟关系推断：王宣 与 王敞 为同胞（CBDB 记「弟」），王敞 之父／母即 王宣 之父／母。
          source:
            id: s_0Kdh4TxPpBQyqdAV4sMqDO
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 239885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239885&o=json
            external_identifier: CBDB:239885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2r8Au5ZzVLePdKoJ3pQCdM
        status: active
        display_name: 王宣
        merged_into_person_id: null
    - claim:
        id: c_DRYC_1ZSXEsENABPp37ATm
        subject_person_id: p_14ogWJ1NeYn1acYejdfnia
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4tszZyq4YwSXc6oh2uxsMW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0rZTC9s_uZvWFkpSpM8bIS
          claim_id: c_DRYC_1ZSXEsENABPp37ATm
          source_id: s_38-gGBZv4Y9rkXl45LI8cK
          stance: supports
          locator: CBDB：兄弟 王敞（208063）之父／母 王斌
          quotation: null
          interpretation_note: 由兄弟关系推断：王啟 与 王敞 为同胞（CBDB 记「兄」），王敞 之父／母即 王啟 之父／母。
          source:
            id: s_38-gGBZv4Y9rkXl45LI8cK
            source_type: api_record
            title: 中国历代人物传记资料库：王啟（CBDB 239889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239889&o=json
            external_identifier: CBDB:239889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4tszZyq4YwSXc6oh2uxsMW
        status: active
        display_name: 王啟
        merged_into_person_id: null
    - claim:
        id: c_i3GZ97OePvW0j1wU73Kisr
        subject_person_id: p_14ogWJ1NeYn1acYejdfnia
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7Zjzt4Lr67WLdBigA3Pfnd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MvEhAgaIIeTVfyvJsaY6o4
          claim_id: c_i3GZ97OePvW0j1wU73Kisr
          source_id: s_IBOPCSKkqR6JscMYAOdNmU
          stance: supports
          locator: CBDB：兄弟 王敞（208063）之父／母 王斌
          quotation: null
          interpretation_note: 由兄弟关系推断：王恕 与 王敞 为同胞（CBDB 记「兄」），王敞 之父／母即 王恕 之父／母。
          source:
            id: s_IBOPCSKkqR6JscMYAOdNmU
            source_type: api_record
            title: 中国历代人物传记资料库：王恕（CBDB 239891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239891&o=json
            external_identifier: CBDB:239891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7Zjzt4Lr67WLdBigA3Pfnd
        status: active
        display_name: 王恕
        merged_into_person_id: null
    - claim:
        id: c_uQnQyPfREu_i9jsmUOgAB8
        subject_person_id: p_14ogWJ1NeYn1acYejdfnia
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e58PAAbNT1rmaNc6DQb55X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bcex7hQlxVIvwxMSTaNel2
          claim_id: c_uQnQyPfREu_i9jsmUOgAB8
          source_id: s_GHA4wDibuxjCPEf668CrRC
          stance: supports
          locator: CBDB：兄弟 王敞（208063）之父／母 王斌
          quotation: null
          interpretation_note: 由兄弟关系推断：王敏 与 王敞 为同胞（CBDB 记「弟」），王敞 之父／母即 王敏 之父／母。
          source:
            id: s_GHA4wDibuxjCPEf668CrRC
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 239888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239888&o=json
            external_identifier: CBDB:239888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e58PAAbNT1rmaNc6DQb55X
        status: active
        display_name: 王敏
        merged_into_person_id: null
    - claim:
        id: c_SLG5jWWKgzsbboMUPmx-Th
        subject_person_id: p_14ogWJ1NeYn1acYejdfnia
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fg5dttMaBqxJcJXQ2NTiGw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xj1i_Ah09tQfBlL35TwgKv
          claim_id: c_SLG5jWWKgzsbboMUPmx-Th
          source_id: s_9s_31UxuHaYMxjxHveCuP0
          stance: supports
          locator: CBDB：兄弟 王敞（208063）之父／母 王斌
          quotation: null
          interpretation_note: 由兄弟关系推断：王整 与 王敞 为同胞（CBDB 记「兄」），王敞 之父／母即 王整 之父／母。
          source:
            id: s_9s_31UxuHaYMxjxHveCuP0
            source_type: api_record
            title: 中国历代人物传记资料库：王整（CBDB 239890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239890&o=json
            external_identifier: CBDB:239890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fg5dttMaBqxJcJXQ2NTiGw
        status: active
        display_name: 王整
        merged_into_person_id: null
    - claim:
        id: c_oO_iDfeyVj1yiyoykcZhOM
        subject_person_id: p_14ogWJ1NeYn1acYejdfnia
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_otrtoeJnXhdY9sAS6CGtcV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8ycHgf83IccPrWIXXujZlj
          claim_id: c_oO_iDfeyVj1yiyoykcZhOM
          source_id: s_tDbi49v5_ButEyRcQxrQfO
          stance: supports
          locator: CBDB：兄弟 王敞（208063）之父／母 王斌
          quotation: null
          interpretation_note: 由兄弟关系推断：王謹 与 王敞 为同胞（CBDB 记「兄」），王敞 之父／母即 王謹 之父／母。
          source:
            id: s_tDbi49v5_ButEyRcQxrQfO
            source_type: api_record
            title: 中国历代人物传记资料库：王謹（CBDB 239892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239892&o=json
            external_identifier: CBDB:239892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_otrtoeJnXhdY9sAS6CGtcV
        status: active
        display_name: 王謹
        merged_into_person_id: null
    - claim:
        id: c_KM_aLTpFTrC1gIud4ALUz-
        subject_person_id: p_14ogWJ1NeYn1acYejdfnia
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ryNwZtKtmdtBDcfWVDhtag
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2ntQzTd_LdTVIlG3qoNnbb
          claim_id: c_KM_aLTpFTrC1gIud4ALUz-
          source_id: s_sozvIU01ygvM43ZkrMz0Gi
          stance: supports
          locator: CBDB：兄弟 王敞（208063）之父／母 王斌
          quotation: null
          interpretation_note: 由兄弟关系推断：王政 与 王敞 为同胞（CBDB 记「弟」），王敞 之父／母即 王政 之父／母。
          source:
            id: s_sozvIU01ygvM43ZkrMz0Gi
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 239887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239887&o=json
            external_identifier: CBDB:239887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ryNwZtKtmdtBDcfWVDhtag
        status: active
        display_name: 王政
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王斌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王斌 | accepted |
| bio.summary | 王斌，明人物。正统十年進士，籍贯永寧衛。（中国历代人物传记资料库 CBDB 239881） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_e8Zr493vi2djpmCUjmBf8z | 王敞 | accepted |
| children | p_2r8Au5ZzVLePdKoJ3pQCdM | 王宣 | accepted |
| children | p_4tszZyq4YwSXc6oh2uxsMW | 王啟 | accepted |
| children | p_7Zjzt4Lr67WLdBigA3Pfnd | 王恕 | accepted |
| children | p_e58PAAbNT1rmaNc6DQb55X | 王敏 | accepted |
| children | p_fg5dttMaBqxJcJXQ2NTiGw | 王整 | accepted |
| children | p_otrtoeJnXhdY9sAS6CGtcV | 王謹 | accepted |
| children | p_ryNwZtKtmdtBDcfWVDhtag | 王政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斌（CBDB 239881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239881&o=json)
- [中国历代人物传记资料库：王謹（CBDB 239892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239892&o=json)
- [中国历代人物传记资料库：王敏（CBDB 239888）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239888&o=json)
- [中国历代人物传记资料库：王啟（CBDB 239889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239889&o=json)
- [中国历代人物传记资料库：王恕（CBDB 239891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239891&o=json)
- [中国历代人物传记资料库：王宣（CBDB 239885）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239885&o=json)
- [中国历代人物传记资料库：王整（CBDB 239890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239890&o=json)
- [中国历代人物传记资料库：王政（CBDB 239887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239887&o=json)
