---
schema: wang-person/v1
id: p_e8Zr493vi2djpmCUjmBf8z
status: active
merged_into: null
display_name: 王敞
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AZmdN9SiYz5Vi7qggca7qS
        subject_person_id: p_e8Zr493vi2djpmCUjmBf8z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4RVKAxKNcqrHqSa3JE797i
          claim_id: c_AZmdN9SiYz5Vi7qggca7qS
          source_id: s_aE6p2JN9AKMB4RiGi2NsRa
          stance: supports
          locator: CBDB:208063
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208063）
          source: &a1
            id: s_aE6p2JN9AKMB4RiGi2NsRa
            source_type: api_record
            title: 中国历代人物传记资料库：王敞（CBDB 208063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208063&o=json
            external_identifier: CBDB:208063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ChebR8jLuEse1G6Eo1giyB
        subject_person_id: p_e8Zr493vi2djpmCUjmBf8z
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1411年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wYr9kdZB9qyd5yoscxD2Yq
          claim_id: c_ChebR8jLuEse1G6Eo1giyB
          source_id: s_aE6p2JN9AKMB4RiGi2NsRa
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
        id: c_6e4e9Hp9at8R4HR8sFS4NG
        subject_person_id: p_e8Zr493vi2djpmCUjmBf8z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敞（生于1411年），明人物。明清進士進士，籍贯永寧衛，入仕進士。（中国历代人物传记资料库 CBDB 208063）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vGsB2UHAxuNlVh8WiW_YrT
          claim_id: c_6e4e9Hp9at8R4HR8sFS4NG
          source_id: s_aE6p2JN9AKMB4RiGi2NsRa
          stance: supports
          locator: CBDB:208063
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_14ogWJ1NeYn1acYejdfnia
        status: active
        display_name: 王斌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_d8W9UM11k5m-Fk8W1aHXlA
        subject_person_id: p_BJgvXxRKD9rteYtVcW6w5x
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_e8Zr493vi2djpmCUjmBf8z
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ei3wwkw2v6IFgcrp6f67vi
          claim_id: c_d8W9UM11k5m-Fk8W1aHXlA
          source_id: s_8XkQf4HHc6JAKy7zhTt7iQ
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第六十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8XkQf4HHc6JAKy7zhTt7iQ
            source_type: api_record
            title: 中国历代人物传记资料库：王興（CBDB 239880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239880&o=json
            external_identifier: CBDB:239880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BJgvXxRKD9rteYtVcW6w5x
        status: active
        display_name: 王興
        merged_into_person_id: null
    - claim:
        id: c_XHUkHhrGlhclo4LTHnpH0x
        subject_person_id: p_tT3AHMVCDA6J2Jocyd9E1J
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_e8Zr493vi2djpmCUjmBf8z
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j8brIICzNaW-Zkywze8VXb
          claim_id: c_XHUkHhrGlhclo4LTHnpH0x
          source_id: s_sQr49zkzngEj8QWATa1oCU
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第六十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sQr49zkzngEj8QWATa1oCU
            source_type: api_record
            title: 中国历代人物传记资料库：王隆（CBDB 239879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239879&o=json
            external_identifier: CBDB:239879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tT3AHMVCDA6J2Jocyd9E1J
        status: active
        display_name: 王隆
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_U3iRxa2SKfxVy9iNbqaBVI
        subject_person_id: p_2r8Au5ZzVLePdKoJ3pQCdM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_e8Zr493vi2djpmCUjmBf8z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Glowhc3RDmTRYesb_4Zzcg
          claim_id: c_U3iRxa2SKfxVy9iNbqaBVI
          source_id: s_0Kdh4TxPpBQyqdAV4sMqDO
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 208063 王敞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_Xez1vFyYr0jInLYb93AYnz
        subject_person_id: p_4tszZyq4YwSXc6oh2uxsMW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_e8Zr493vi2djpmCUjmBf8z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_75cALcbnmwqINmPK6msWtI
          claim_id: c_Xez1vFyYr0jInLYb93AYnz
          source_id: s_38-gGBZv4Y9rkXl45LI8cK
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 208063 王敞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_aV9Qerls9DHTUTcG8EFARq
        subject_person_id: p_7Zjzt4Lr67WLdBigA3Pfnd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_e8Zr493vi2djpmCUjmBf8z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_As6z3hy27Mh1or4ujubAJO
          claim_id: c_aV9Qerls9DHTUTcG8EFARq
          source_id: s_IBOPCSKkqR6JscMYAOdNmU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 208063 王敞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_HTHTzUvpFEFN2yzyqCXNo6
        subject_person_id: p_e58PAAbNT1rmaNc6DQb55X
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_e8Zr493vi2djpmCUjmBf8z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LPWlYFmISpC8OWvunUkzjQ
          claim_id: c_HTHTzUvpFEFN2yzyqCXNo6
          source_id: s_GHA4wDibuxjCPEf668CrRC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 208063 王敞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_VFM9NUdGmPsnpFdHon4saz
        subject_person_id: p_e8Zr493vi2djpmCUjmBf8z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fg5dttMaBqxJcJXQ2NTiGw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z7q50yukwQE5B_J7y2WkFr
          claim_id: c_VFM9NUdGmPsnpFdHon4saz
          source_id: s_9s_31UxuHaYMxjxHveCuP0
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 208063 王敞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_zXPudQedlsgvP4ksCKmF3u
        subject_person_id: p_e8Zr493vi2djpmCUjmBf8z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_otrtoeJnXhdY9sAS6CGtcV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kc9zLRPCjth6N6l8TS8_l2
          claim_id: c_zXPudQedlsgvP4ksCKmF3u
          source_id: s_tDbi49v5_ButEyRcQxrQfO
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 208063 王敞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_1_yMbQc04eldVxlTPi2dwO
        subject_person_id: p_e8Zr493vi2djpmCUjmBf8z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ryNwZtKtmdtBDcfWVDhtag
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eQ1BFB8oFqwCkYEynLMouW
          claim_id: c_1_yMbQc04eldVxlTPi2dwO
          source_id: s_sozvIU01ygvM43ZkrMz0Gi
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 208063 王敞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王敞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敞 | accepted |
| birth.date | 1411年 | accepted |
| bio.summary | 王敞（生于1411年），明人物。明清進士進士，籍贯永寧衛，入仕進士。（中国历代人物传记资料库 CBDB 208063） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_14ogWJ1NeYn1acYejdfnia | 王斌 | accepted |
| ancestors | p_BJgvXxRKD9rteYtVcW6w5x | 王興 | accepted |
| ancestors | p_tT3AHMVCDA6J2Jocyd9E1J | 王隆 | accepted |
| other | p_2r8Au5ZzVLePdKoJ3pQCdM | 王宣 | accepted |
| other | p_4tszZyq4YwSXc6oh2uxsMW | 王啟 | accepted |
| other | p_7Zjzt4Lr67WLdBigA3Pfnd | 王恕 | accepted |
| other | p_e58PAAbNT1rmaNc6DQb55X | 王敏 | accepted |
| other | p_fg5dttMaBqxJcJXQ2NTiGw | 王整 | accepted |
| other | p_otrtoeJnXhdY9sAS6CGtcV | 王謹 | accepted |
| other | p_ryNwZtKtmdtBDcfWVDhtag | 王政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斌（CBDB 239881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239881&o=json)
- [中国历代人物传记资料库：王敞（CBDB 208063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208063&o=json)
- [中国历代人物传记资料库：王謹（CBDB 239892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239892&o=json)
- [中国历代人物传记资料库：王隆（CBDB 239879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239879&o=json)
- [中国历代人物传记资料库：王敏（CBDB 239888）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239888&o=json)
- [中国历代人物传记资料库：王啟（CBDB 239889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239889&o=json)
- [中国历代人物传记资料库：王恕（CBDB 239891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239891&o=json)
- [中国历代人物传记资料库：王興（CBDB 239880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239880&o=json)
- [中国历代人物传记资料库：王宣（CBDB 239885）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239885&o=json)
- [中国历代人物传记资料库：王整（CBDB 239890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239890&o=json)
- [中国历代人物传记资料库：王政（CBDB 239887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239887&o=json)
