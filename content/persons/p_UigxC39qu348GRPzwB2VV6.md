---
schema: wang-person/v1
id: p_UigxC39qu348GRPzwB2VV6
status: active
merged_into: null
display_name: 王理
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o72wuHjDVT2YQ325D7xMQ2
        subject_person_id: p_UigxC39qu348GRPzwB2VV6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王理
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UJPaRe2grEFPrLEwHnp2tQ
          claim_id: c_o72wuHjDVT2YQ325D7xMQ2
          source_id: s_ePBk9yjtryp6Aok3sJ2P9k
          stance: supports
          locator: CBDB:126681
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126681）
          source: &a1
            id: s_ePBk9yjtryp6Aok3sJ2P9k
            source_type: api_record
            title: 中国历代人物传记资料库：王理（CBDB 126681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126681&o=json
            external_identifier: CBDB:126681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.118Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uRMiwqqXBSuV5BVj6ebb6M
        subject_person_id: p_UigxC39qu348GRPzwB2VV6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王理，明人物。明清進士進士，籍贯安福，入仕進士。（中国历代人物传记资料库 CBDB 126681）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PdvGkdOfMZM4M4DKzwVLkv
          claim_id: c_uRMiwqqXBSuV5BVj6ebb6M
          source_id: s_ePBk9yjtryp6Aok3sJ2P9k
          stance: supports
          locator: CBDB:126681
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uz8_RIU-zWviff7nQMIRCf
        subject_person_id: p_nZvn7tH7hwLzHZ4aSkjukU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UigxC39qu348GRPzwB2VV6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NESmuYePDZ-MeudOh5OwBV
          claim_id: c_uz8_RIU-zWviff7nQMIRCf
          source_id: s_ePBk9yjtryp6Aok3sJ2P9k
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第二十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nZvn7tH7hwLzHZ4aSkjukU
        status: active
        display_name: 王充榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_t8Y40_j9mRsLy2P3LOhrUD
        subject_person_id: p_UigxC39qu348GRPzwB2VV6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8J1kX9Aq2YxcruZovoQP7G
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sCLz0DLjE1jOgJyeKQ5N1U
          claim_id: c_t8Y40_j9mRsLy2P3LOhrUD
          source_id: s_JZR84oUvU8univAiB0NW5e
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第二十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JZR84oUvU8univAiB0NW5e
            source_type: api_record
            title: 中国历代人物传记资料库：尹氏(王理妻)（CBDB 238215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238215&o=json
            external_identifier: CBDB:238215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8J1kX9Aq2YxcruZovoQP7G
        status: active
        display_name: 尹氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_oLD9wyCqlHsRc8OTHodYJ8
        subject_person_id: p_kAqmJC9XxgqbW9D1EEHmok
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UigxC39qu348GRPzwB2VV6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Iw_exa0lga-Zc6H-v0JkjK
          claim_id: c_oLD9wyCqlHsRc8OTHodYJ8
          source_id: s_ePBk9yjtryp6Aok3sJ2P9k
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第二十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kAqmJC9XxgqbW9D1EEHmok
        status: active
        display_name: 王文江
        merged_into_person_id: null
    - claim:
        id: c_y4iLQTrXMubKAe4QboGi-Z
        subject_person_id: p_mk3dTkzG94aLkYaNf5KJ63
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UigxC39qu348GRPzwB2VV6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7S7RO7Z3UI_ez6LjwQpV1F
          claim_id: c_y4iLQTrXMubKAe4QboGi-Z
          source_id: s_ePBk9yjtryp6Aok3sJ2P9k
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第二十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mk3dTkzG94aLkYaNf5KJ63
        status: active
        display_name: 王希善
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_SsrienT1OyjV9iLJ928Qh4
        subject_person_id: p_1yQeJ51YMb653pHE2P62RS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UigxC39qu348GRPzwB2VV6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tRFMy9-QJabFDCLn-fgxft
          claim_id: c_SsrienT1OyjV9iLJ928Qh4
          source_id: s_j1V1m0XgunuMeWRLzQ_wYX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126681 王理）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_j1V1m0XgunuMeWRLzQ_wYX
            source_type: api_record
            title: 中国历代人物传记资料库：王承恂（CBDB 238216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238216&o=json
            external_identifier: CBDB:238216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1yQeJ51YMb653pHE2P62RS
        status: active
        display_name: 王承恂
        merged_into_person_id: null
    - claim:
        id: c_1ugCHSVlbHvagaTFTr5dH8
        subject_person_id: p_GBNC274nLTucSak992y3nz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UigxC39qu348GRPzwB2VV6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pNf0YTfoyYArRuB-O0JtgD
          claim_id: c_1ugCHSVlbHvagaTFTr5dH8
          source_id: s_FzqoKHAInMdLtTIzSK_49n
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126681 王理）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FzqoKHAInMdLtTIzSK_49n
            source_type: api_record
            title: 中国历代人物传记资料库：王承明（CBDB 238217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238217&o=json
            external_identifier: CBDB:238217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GBNC274nLTucSak992y3nz
        status: active
        display_name: 王承明
        merged_into_person_id: null
    - claim:
        id: c_Kckf3Y0GI-evRo2XdXzUSu
        subject_person_id: p_NVt1Adynn3GR5w6oRzS8xa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UigxC39qu348GRPzwB2VV6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MKjFxnljM-uweE81GirFVg
          claim_id: c_Kckf3Y0GI-evRo2XdXzUSu
          source_id: s_AdIknxZGNJOBCB-Gq59DyG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126681 王理）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AdIknxZGNJOBCB-Gq59DyG
            source_type: api_record
            title: 中国历代人物传记资料库：王淑同（CBDB 238220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238220&o=json
            external_identifier: CBDB:238220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NVt1Adynn3GR5w6oRzS8xa
        status: active
        display_name: 王淑同
        merged_into_person_id: null
    - claim:
        id: c_bk6d0-w17q8bWFuJKcJXUb
        subject_person_id: p_UigxC39qu348GRPzwB2VV6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oEGj7G7AYx8UHqY1XvXqYH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2zCnwy2EeQdkxt2VcOf2Oy
          claim_id: c_bk6d0-w17q8bWFuJKcJXUb
          source_id: s_YDYMvYoq6wWsNcRxEd7-Bl
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126681 王理）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YDYMvYoq6wWsNcRxEd7-Bl
            source_type: api_record
            title: 中国历代人物传记资料库：王承鑑（CBDB 238218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238218&o=json
            external_identifier: CBDB:238218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oEGj7G7AYx8UHqY1XvXqYH
        status: active
        display_name: 王承鑑
        merged_into_person_id: null
---

# 王理

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王理 | accepted |
| bio.summary | 王理，明人物。明清進士進士，籍贯安福，入仕進士。（中国历代人物传记资料库 CBDB 126681） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nZvn7tH7hwLzHZ4aSkjukU | 王充榮 | accepted |
| spouses | p_8J1kX9Aq2YxcruZovoQP7G | 尹氏 | accepted |
| ancestors | p_kAqmJC9XxgqbW9D1EEHmok | 王文江 | accepted |
| ancestors | p_mk3dTkzG94aLkYaNf5KJ63 | 王希善 | accepted |
| other | p_1yQeJ51YMb653pHE2P62RS | 王承恂 | accepted |
| other | p_GBNC274nLTucSak992y3nz | 王承明 | accepted |
| other | p_NVt1Adynn3GR5w6oRzS8xa | 王淑同 | accepted |
| other | p_oEGj7G7AYx8UHqY1XvXqYH | 王承鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承鑑（CBDB 238218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238218&o=json)
- [中国历代人物传记资料库：王承明（CBDB 238217）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238217&o=json)
- [中国历代人物传记资料库：王承恂（CBDB 238216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238216&o=json)
- [中国历代人物传记资料库：王理（CBDB 126681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126681&o=json)
- [中国历代人物传记资料库：王淑同（CBDB 238220）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238220&o=json)
- [中国历代人物传记资料库：尹氏(王理妻)（CBDB 238215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238215&o=json)
