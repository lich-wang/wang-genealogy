---
schema: wang-person/v1
id: p_JX4wDZH7pMF8Nb6HNMpXbw
status: active
merged_into: null
display_name: 王守約
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V7bUCeqFdGuhWrQzGy6pxc
        subject_person_id: p_JX4wDZH7pMF8Nb6HNMpXbw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守約
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tWDkdGA9K8qufJrXEzktGP
          claim_id: c_V7bUCeqFdGuhWrQzGy6pxc
          source_id: s_d4ERUPvC55B7WDWpYjQSiT
          stance: supports
          locator: CBDB:256433
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（256433）
          source: &a1
            id: s_d4ERUPvC55B7WDWpYjQSiT
            source_type: api_record
            title: 中国历代人物传记资料库：王守約（CBDB 256433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256433&o=json
            external_identifier: CBDB:256433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.391Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EDokMHRsxBG4KYEtMEPawJ
        subject_person_id: p_JX4wDZH7pMF8Nb6HNMpXbw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守約，明人物。成化十七年進士，籍贯內江，曾任教諭。（中国历代人物传记资料库 CBDB 256433）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nhmfJT0kbErI3WiWmIWh62
          claim_id: c_EDokMHRsxBG4KYEtMEPawJ
          source_id: s_d4ERUPvC55B7WDWpYjQSiT
          stance: supports
          locator: CBDB:256433
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_y4Ax6RXRcwBQzX2sb8z8EH
        subject_person_id: p_JX4wDZH7pMF8Nb6HNMpXbw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZjPesmadeqK3r3wUy19KCm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZjOL3Evnn0g5189Gt1AtBf
          claim_id: c_y4Ax6RXRcwBQzX2sb8z8EH
          source_id: s_d4ERUPvC55B7WDWpYjQSiT
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第九十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZjPesmadeqK3r3wUy19KCm
        status: active
        display_name: 王一言
        merged_into_person_id: null
    - claim:
        id: c_g_oi2pZpV7VH7W4nokDI50
        subject_person_id: p_JX4wDZH7pMF8Nb6HNMpXbw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1sqCGJv2Ezy4fCzaCriRLC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5oGmb5ZuISYXDJlWrmVzRU
          claim_id: c_g_oi2pZpV7VH7W4nokDI50
          source_id: s_68OosY9GGcoC19Jkdf3d_W
          stance: supports
          locator: CBDB：兄弟 王一言（200332）之父／母 王守約
          quotation: null
          interpretation_note: 由兄弟关系推断：王一唯 与 王一言 为同胞（CBDB 记「弟」），王一言 之父／母即 王一唯 之父／母。
          source:
            id: s_68OosY9GGcoC19Jkdf3d_W
            source_type: api_record
            title: 中国历代人物传记资料库：王一唯（CBDB 256440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256440&o=json
            external_identifier: CBDB:256440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1sqCGJv2Ezy4fCzaCriRLC
        status: active
        display_name: 王一唯
        merged_into_person_id: null
    - claim:
        id: c_7JnwBt2pgn8ZOYJoJ5KUub
        subject_person_id: p_JX4wDZH7pMF8Nb6HNMpXbw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2nQUQ4e9TgWC1xbwoC6Xh2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AtqJzxLHqjPhwAemOiit4g
          claim_id: c_7JnwBt2pgn8ZOYJoJ5KUub
          source_id: s_kX9QyIxRFwuoD_otAJn0Uo
          stance: supports
          locator: CBDB：兄弟 王一言（200332）之父／母 王守約
          quotation: null
          interpretation_note: 由兄弟关系推断：王一鶚 与 王一言 为同胞（CBDB 记「弟」），王一言 之父／母即 王一鶚 之父／母。
          source:
            id: s_kX9QyIxRFwuoD_otAJn0Uo
            source_type: api_record
            title: 中国历代人物传记资料库：王一鶚（CBDB 256438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256438&o=json
            external_identifier: CBDB:256438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2nQUQ4e9TgWC1xbwoC6Xh2
        status: active
        display_name: 王一鶚
        merged_into_person_id: null
    - claim:
        id: c_L04u2-bkpZjAlx7YfUp-no
        subject_person_id: p_JX4wDZH7pMF8Nb6HNMpXbw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_51xAMNHvn2P77VPa5zzeJS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xLjq9rkshTMBYSzqjAcpOx
          claim_id: c_L04u2-bkpZjAlx7YfUp-no
          source_id: s_cKYgA527AfHCj2NvVC_gu6
          stance: supports
          locator: CBDB：兄弟 王一言（200332）之父／母 王守約
          quotation: null
          interpretation_note: 由兄弟关系推断：王一見 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一見 之父／母。
          source:
            id: s_cKYgA527AfHCj2NvVC_gu6
            source_type: api_record
            title: 中国历代人物传记资料库：王一見（CBDB 256441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256441&o=json
            external_identifier: CBDB:256441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_51xAMNHvn2P77VPa5zzeJS
        status: active
        display_name: 王一見
        merged_into_person_id: null
    - claim:
        id: c_6zUe8m6JA41cTfgZ52K7eL
        subject_person_id: p_JX4wDZH7pMF8Nb6HNMpXbw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K4EXtLbiRN1uwQwGco7JrU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PlxVSQrlTqMvFpPrQut6hE
          claim_id: c_6zUe8m6JA41cTfgZ52K7eL
          source_id: s_cvLbnzSfpHo3Iyufzzh0Kl
          stance: supports
          locator: CBDB：兄弟 王一言（200332）之父／母 王守約
          quotation: null
          interpretation_note: 由兄弟关系推断：王一新 与 王一言 为同胞（CBDB 记「弟」），王一言 之父／母即 王一新 之父／母。
          source:
            id: s_cvLbnzSfpHo3Iyufzzh0Kl
            source_type: api_record
            title: 中国历代人物传记资料库：王一新（CBDB 256437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256437&o=json
            external_identifier: CBDB:256437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_K4EXtLbiRN1uwQwGco7JrU
        status: active
        display_name: 王一新
        merged_into_person_id: null
    - claim:
        id: c_077pAon7tvqZHlvpM4Welz
        subject_person_id: p_JX4wDZH7pMF8Nb6HNMpXbw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZrRpoLMWaES7A4fnwPJPQ7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f3tMLoa5Wp70iykyQN4Boh
          claim_id: c_077pAon7tvqZHlvpM4Welz
          source_id: s_1H4truy43OKAcAG3HmWKg7
          stance: supports
          locator: CBDB：兄弟 王一言（200332）之父／母 王守約
          quotation: null
          interpretation_note: 由兄弟关系推断：王一孜 与 王一言 为同胞（CBDB 记「弟」），王一言 之父／母即 王一孜 之父／母。
          source:
            id: s_1H4truy43OKAcAG3HmWKg7
            source_type: api_record
            title: 中国历代人物传记资料库：王一孜（CBDB 256439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256439&o=json
            external_identifier: CBDB:256439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZrRpoLMWaES7A4fnwPJPQ7
        status: active
        display_name: 王一孜
        merged_into_person_id: null
    - claim:
        id: c_vqinniY_yI5hDcag2BWBLd
        subject_person_id: p_JX4wDZH7pMF8Nb6HNMpXbw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gQG919uLWdpSd2gDgDViJM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_McYDUqCCvgOd2WEc6ew-5R
          claim_id: c_vqinniY_yI5hDcag2BWBLd
          source_id: s_TTNY8YQSzGtzTvvDpEhtRn
          stance: supports
          locator: CBDB：兄弟 王一言（200332）之父／母 王守約
          quotation: null
          interpretation_note: 由兄弟关系推断：王一和 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一和 之父／母。
          source:
            id: s_TTNY8YQSzGtzTvvDpEhtRn
            source_type: api_record
            title: 中国历代人物传记资料库：王一和（CBDB 256442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256442&o=json
            external_identifier: CBDB:256442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gQG919uLWdpSd2gDgDViJM
        status: active
        display_name: 王一和
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王守約

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守約 | accepted |
| bio.summary | 王守約，明人物。成化十七年進士，籍贯內江，曾任教諭。（中国历代人物传记资料库 CBDB 256433） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ZjPesmadeqK3r3wUy19KCm | 王一言 | accepted |
| children | p_1sqCGJv2Ezy4fCzaCriRLC | 王一唯 | accepted |
| children | p_2nQUQ4e9TgWC1xbwoC6Xh2 | 王一鶚 | accepted |
| children | p_51xAMNHvn2P77VPa5zzeJS | 王一見 | accepted |
| children | p_K4EXtLbiRN1uwQwGco7JrU | 王一新 | accepted |
| children | p_ZrRpoLMWaES7A4fnwPJPQ7 | 王一孜 | accepted |
| children | p_gQG919uLWdpSd2gDgDViJM | 王一和 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守約（CBDB 256433）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256433&o=json)
- [中国历代人物传记资料库：王一鶚（CBDB 256438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256438&o=json)
- [中国历代人物传记资料库：王一和（CBDB 256442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256442&o=json)
- [中国历代人物传记资料库：王一見（CBDB 256441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256441&o=json)
- [中国历代人物传记资料库：王一唯（CBDB 256440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256440&o=json)
- [中国历代人物传记资料库：王一新（CBDB 256437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256437&o=json)
- [中国历代人物传记资料库：王一孜（CBDB 256439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256439&o=json)
