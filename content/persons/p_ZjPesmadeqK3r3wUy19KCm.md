---
schema: wang-person/v1
id: p_ZjPesmadeqK3r3wUy19KCm
status: active
merged_into: null
display_name: 王一言
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pGkMHdeJM1PdjGA8uS9JCc
        subject_person_id: p_ZjPesmadeqK3r3wUy19KCm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PJX86nwMQK4o7Lv9Ux92e4
          claim_id: c_pGkMHdeJM1PdjGA8uS9JCc
          source_id: s_1xkHV2Sz75Jw9Yw4X4DzT9
          stance: supports
          locator: CBDB:200332
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200332）
          source: &a1
            id: s_1xkHV2Sz75Jw9Yw4X4DzT9
            source_type: api_record
            title: 中国历代人物传记资料库：王一言（CBDB 200332）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200332&o=json
            external_identifier: CBDB:200332
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.605Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DGbrgGZQVbb18f8VbH3ijM
        subject_person_id: p_ZjPesmadeqK3r3wUy19KCm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1449年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wc1u7L1dTHCo46qQLpZSF3
          claim_id: c_DGbrgGZQVbb18f8VbH3ijM
          source_id: s_1xkHV2Sz75Jw9Yw4X4DzT9
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
        id: c_123GHLtJ5GeCoJC5V6aJz6
        subject_person_id: p_ZjPesmadeqK3r3wUy19KCm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一言（生于1449年），明人物。明清進士進士，籍贯內江，入仕進士。（中国历代人物传记资料库 CBDB 200332）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_35sCHcWDxHJfTT4jOZEgjg
          claim_id: c_123GHLtJ5GeCoJC5V6aJz6
          source_id: s_1xkHV2Sz75Jw9Yw4X4DzT9
          stance: supports
          locator: CBDB:200332
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_JX4wDZH7pMF8Nb6HNMpXbw
        status: active
        display_name: 王守約
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_cTSMBz8uktRk4ynSRrCy7n
        subject_person_id: p_EVmREHj92hVv2edZtJJz4T
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZjPesmadeqK3r3wUy19KCm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1KZAXhcn3kd5zuVRNk-dpT
          claim_id: c_cTSMBz8uktRk4ynSRrCy7n
          source_id: s_FC5tAkQ265VDr6v9rJvyHP
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第九十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FC5tAkQ265VDr6v9rJvyHP
            source_type: api_record
            title: 中国历代人物传记资料库：王紹宗（CBDB 256431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256431&o=json
            external_identifier: CBDB:256431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.389Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EVmREHj92hVv2edZtJJz4T
        status: active
        display_name: 王紹宗
        merged_into_person_id: null
    - claim:
        id: c_u9VoRiOcbAP6xnHZzgB2_7
        subject_person_id: p_Mw944B1LyCYvo7wGS3gH8L
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZjPesmadeqK3r3wUy19KCm
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oKdTO_8L_OwfBRftL82RwU
          claim_id: c_u9VoRiOcbAP6xnHZzgB2_7
          source_id: s_gBLwLdYNHk32eqcWhBZCx9
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第九十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gBLwLdYNHk32eqcWhBZCx9
            source_type: api_record
            title: 中国历代人物传记资料库：王祚（CBDB 256432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256432&o=json
            external_identifier: CBDB:256432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.390Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Mw944B1LyCYvo7wGS3gH8L
        status: active
        display_name: 王祚
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_AVAUc7LHBV5YSjfw1F0zwc
        subject_person_id: p_1sqCGJv2Ezy4fCzaCriRLC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZjPesmadeqK3r3wUy19KCm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NVXiEK1MFOvEa9HgOk0a2l
          claim_id: c_AVAUc7LHBV5YSjfw1F0zwc
          source_id: s_68OosY9GGcoC19Jkdf3d_W
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200332 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_SxgY9nOLNsaBy3hKNmHWoW
        subject_person_id: p_2nQUQ4e9TgWC1xbwoC6Xh2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZjPesmadeqK3r3wUy19KCm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H_jtOsksDTQQ6jYkUXfj80
          claim_id: c_SxgY9nOLNsaBy3hKNmHWoW
          source_id: s_kX9QyIxRFwuoD_otAJn0Uo
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200332 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_u99sMj7-DncfJMaOfXyEwi
        subject_person_id: p_51xAMNHvn2P77VPa5zzeJS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZjPesmadeqK3r3wUy19KCm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HW53tOcMw1gLqntmIYKEXQ
          claim_id: c_u99sMj7-DncfJMaOfXyEwi
          source_id: s_cKYgA527AfHCj2NvVC_gu6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200332 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_vZvpBRUD2xMZqs8hqfmzSq
        subject_person_id: p_K4EXtLbiRN1uwQwGco7JrU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZjPesmadeqK3r3wUy19KCm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xPkpajF89DDZQv6kdDePPJ
          claim_id: c_vZvpBRUD2xMZqs8hqfmzSq
          source_id: s_cvLbnzSfpHo3Iyufzzh0Kl
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200332 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_0GTmEkQSLRp8qCyMKg_MRB
        subject_person_id: p_ZjPesmadeqK3r3wUy19KCm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZrRpoLMWaES7A4fnwPJPQ7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ufsDA2HXUWrumQQJUS7Jlx
          claim_id: c_0GTmEkQSLRp8qCyMKg_MRB
          source_id: s_1H4truy43OKAcAG3HmWKg7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200332 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_HqUWqL0aDM-XSo6rqin-ee
        subject_person_id: p_ZjPesmadeqK3r3wUy19KCm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gQG919uLWdpSd2gDgDViJM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kLKwUYu0t4F5XTI0-UTnzP
          claim_id: c_HqUWqL0aDM-XSo6rqin-ee
          source_id: s_TTNY8YQSzGtzTvvDpEhtRn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200332 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王一言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一言 | accepted |
| birth.date | 1449年 | accepted |
| bio.summary | 王一言（生于1449年），明人物。明清進士進士，籍贯內江，入仕進士。（中国历代人物传记资料库 CBDB 200332） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JX4wDZH7pMF8Nb6HNMpXbw | 王守約 | accepted |
| ancestors | p_EVmREHj92hVv2edZtJJz4T | 王紹宗 | accepted |
| ancestors | p_Mw944B1LyCYvo7wGS3gH8L | 王祚 | accepted |
| other | p_1sqCGJv2Ezy4fCzaCriRLC | 王一唯 | accepted |
| other | p_2nQUQ4e9TgWC1xbwoC6Xh2 | 王一鶚 | accepted |
| other | p_51xAMNHvn2P77VPa5zzeJS | 王一見 | accepted |
| other | p_K4EXtLbiRN1uwQwGco7JrU | 王一新 | accepted |
| other | p_ZrRpoLMWaES7A4fnwPJPQ7 | 王一孜 | accepted |
| other | p_gQG919uLWdpSd2gDgDViJM | 王一和 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紹宗（CBDB 256431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256431&o=json)
- [中国历代人物传记资料库：王守約（CBDB 256433）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256433&o=json)
- [中国历代人物传记资料库：王一鶚（CBDB 256438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256438&o=json)
- [中国历代人物传记资料库：王一和（CBDB 256442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256442&o=json)
- [中国历代人物传记资料库：王一見（CBDB 256441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256441&o=json)
- [中国历代人物传记资料库：王一唯（CBDB 256440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256440&o=json)
- [中国历代人物传记资料库：王一新（CBDB 256437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256437&o=json)
- [中国历代人物传记资料库：王一言（CBDB 200332）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200332&o=json)
- [中国历代人物传记资料库：王一孜（CBDB 256439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256439&o=json)
- [中国历代人物传记资料库：王祚（CBDB 256432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256432&o=json)
