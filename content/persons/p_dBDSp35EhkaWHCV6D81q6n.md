---
schema: wang-person/v1
id: p_dBDSp35EhkaWHCV6D81q6n
status: active
merged_into: null
display_name: 王大猷
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g111zEj62q5eWaB4XVTWrY
        subject_person_id: p_dBDSp35EhkaWHCV6D81q6n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大猷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tEbpfm15vUPRBysLSiHaG8
          claim_id: c_g111zEj62q5eWaB4XVTWrY
          source_id: s_4dbBS64CNd2A5BdZ15SRoK
          stance: supports
          locator: CBDB:203868
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203868）
          source: &a1
            id: s_4dbBS64CNd2A5BdZ15SRoK
            source_type: api_record
            title: 中国历代人物传记资料库：王大猷（CBDB 203868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203868&o=json
            external_identifier: CBDB:203868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.805Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sk8K9Q1BA5RNLJmHwgTBZH
        subject_person_id: p_dBDSp35EhkaWHCV6D81q6n
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1515年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nb9f8TNaKL6E9xWv3Hqda9
          claim_id: c_sk8K9Q1BA5RNLJmHwgTBZH
          source_id: s_4dbBS64CNd2A5BdZ15SRoK
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
        id: c_PrCeKUHKo3vQYV8idWoztA
        subject_person_id: p_dBDSp35EhkaWHCV6D81q6n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大猷（生于1515年），明人物。明清進士進士，籍贯海鹽，入仕進士，曾任工部員外郎、僉都御史、中書舍人。（中国历代人物传记资料库 CBDB 203868）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5wBPPSSKan1g3uz5ruzbdn
          claim_id: c_PrCeKUHKo3vQYV8idWoztA
          source_id: s_4dbBS64CNd2A5BdZ15SRoK
          stance: supports
          locator: CBDB:203868
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7tQr2LsNTWUWbcfP2N4Vw0
        subject_person_id: p_ddWY4cKu36BYCB9sUmQGQH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dBDSp35EhkaWHCV6D81q6n
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JJclJh0vQuGx5vNB6HsIBt
          claim_id: c_7tQr2LsNTWUWbcfP2N4Vw0
          source_id: s_6YBdzMUoq63hH1eUGM1PhC
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百六十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6YBdzMUoq63hH1eUGM1PhC
            source_type: api_record
            title: 中国历代人物传记资料库：王勇（CBDB 311219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311219&o=json
            external_identifier: CBDB:311219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.851Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ddWY4cKu36BYCB9sUmQGQH
        status: active
        display_name: 王勇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_bKP4w9qG48IfZbgmv5iBwr
        subject_person_id: p_aXwn3ofSFoyA77A2xhNKnJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dBDSp35EhkaWHCV6D81q6n
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ey0hXjqmQxIPwldMrIBU-S
          claim_id: c_bKP4w9qG48IfZbgmv5iBwr
          source_id: s_kXtNpXn21YgLK6yGJQWr14
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百六十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kXtNpXn21YgLK6yGJQWr14
            source_type: api_record
            title: 中国历代人物传记资料库：王珙（CBDB 311215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311215&o=json
            external_identifier: CBDB:311215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.850Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aXwn3ofSFoyA77A2xhNKnJ
        status: active
        display_name: 王珙
        merged_into_person_id: null
    - claim:
        id: c_0kPbvuLxsMAAR_GCIxTWSJ
        subject_person_id: p_BWeHFR9Sd9PLzw8oT2wSp5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dBDSp35EhkaWHCV6D81q6n
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZoEp3I3WgykK9ng2auRhy7
          claim_id: c_0kPbvuLxsMAAR_GCIxTWSJ
          source_id: s_btifFD7s3brSCtBXScW1vR
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百六十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_btifFD7s3brSCtBXScW1vR
            source_type: api_record
            title: 中国历代人物传记资料库：王鑒（CBDB 311216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311216&o=json
            external_identifier: CBDB:311216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.851Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BWeHFR9Sd9PLzw8oT2wSp5
        status: active
        display_name: 王鑒
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_a4corgUX_lCQ0e9kS4u-Y5
        subject_person_id: p_3ycLLkQiq1sG8LFTHzLFzK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dBDSp35EhkaWHCV6D81q6n
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h0op9VNgmIxftU1YoFOfyt
          claim_id: c_a4corgUX_lCQ0e9kS4u-Y5
          source_id: s_kN_ZcUrYk0g8kRtMvnvb3E
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203868 王大猷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kN_ZcUrYk0g8kRtMvnvb3E
            source_type: api_record
            title: 中国历代人物传记资料库：王大邦（CBDB 311223）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311223&o=json
            external_identifier: CBDB:311223
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3ycLLkQiq1sG8LFTHzLFzK
        status: active
        display_name: 王大邦
        merged_into_person_id: null
    - claim:
        id: c_8N-0JwefLymYZcMrjyq6Ft
        subject_person_id: p_6uLL9tX2S4GHFSeMBfu12M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dBDSp35EhkaWHCV6D81q6n
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ie9fck0BnV7ACKrIV4ZCCZ
          claim_id: c_8N-0JwefLymYZcMrjyq6Ft
          source_id: s_ENPQcaFOAX5GpHE4yegLat
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203868 王大猷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ENPQcaFOAX5GpHE4yegLat
            source_type: api_record
            title: 中国历代人物传记资料库：王大化（CBDB 311225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311225&o=json
            external_identifier: CBDB:311225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6uLL9tX2S4GHFSeMBfu12M
        status: active
        display_name: 王大化
        merged_into_person_id: null
    - claim:
        id: c_yAtLJmiX3cfgntvuDaHL32
        subject_person_id: p_dBDSp35EhkaWHCV6D81q6n
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y7eWQwh7UFq3mJX911UE5D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s5njI9wDksMlQP5Qf1IGq3
          claim_id: c_yAtLJmiX3cfgntvuDaHL32
          source_id: s_7k2SBg2diI1WINV_gDugGH
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203868 王大猷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7k2SBg2diI1WINV_gDugGH
            source_type: api_record
            title: 中国历代人物传记资料库：王大政（CBDB 311224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311224&o=json
            external_identifier: CBDB:311224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y7eWQwh7UFq3mJX911UE5D
        status: active
        display_name: 王大政
        merged_into_person_id: null
---

# 王大猷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大猷 | accepted |
| birth.date | 1515年 | accepted |
| bio.summary | 王大猷（生于1515年），明人物。明清進士進士，籍贯海鹽，入仕進士，曾任工部員外郎、僉都御史、中書舍人。（中国历代人物传记资料库 CBDB 203868） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ddWY4cKu36BYCB9sUmQGQH | 王勇 | accepted |
| ancestors | p_aXwn3ofSFoyA77A2xhNKnJ | 王珙 | accepted |
| ancestors | p_BWeHFR9Sd9PLzw8oT2wSp5 | 王鑒 | accepted |
| other | p_3ycLLkQiq1sG8LFTHzLFzK | 王大邦 | accepted |
| other | p_6uLL9tX2S4GHFSeMBfu12M | 王大化 | accepted |
| other | p_y7eWQwh7UFq3mJX911UE5D | 王大政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大邦（CBDB 311223）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311223&o=json)
- [中国历代人物传记资料库：王大化（CBDB 311225）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311225&o=json)
- [中国历代人物传记资料库：王大猷（CBDB 203868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203868&o=json)
- [中国历代人物传记资料库：王大政（CBDB 311224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311224&o=json)
- [中国历代人物传记资料库：王珙（CBDB 311215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311215&o=json)
- [中国历代人物传记资料库：王鑒（CBDB 311216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311216&o=json)
- [中国历代人物传记资料库：王勇（CBDB 311219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311219&o=json)
