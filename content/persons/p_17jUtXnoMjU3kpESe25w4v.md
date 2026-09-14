---
schema: wang-person/v1
id: p_17jUtXnoMjU3kpESe25w4v
status: active
merged_into: null
display_name: 王道生
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KbmTm8qzuzALMmgKXxJKAu
        subject_person_id: p_17jUtXnoMjU3kpESe25w4v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b15efy1JvD6wc11VtvVaEZ
          claim_id: c_KbmTm8qzuzALMmgKXxJKAu
          source_id: s_PNfj7EidpSMPXtZjERrgYG
          stance: supports
          locator: CBDB:226710
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（226710）
          source: &a1
            id: s_PNfj7EidpSMPXtZjERrgYG
            source_type: api_record
            title: 中国历代人物传记资料库：王道生（CBDB 226710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226710&o=json
            external_identifier: CBDB:226710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.471Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V661WCfB1wo5cM9yHWy2P6
        subject_person_id: p_17jUtXnoMjU3kpESe25w4v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道生，明人物。萬曆丙戌科進士進士，籍贯武進，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 226710）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1K4ecEMtxnI7v3WzhkB-IO
          claim_id: c_V661WCfB1wo5cM9yHWy2P6
          source_id: s_PNfj7EidpSMPXtZjERrgYG
          stance: supports
          locator: CBDB:226710
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_uU0Xsu8owSR74HvFKvO9HX
        subject_person_id: p_17jUtXnoMjU3kpESe25w4v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Wgw4bGM6hG66ToMF6agV3N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-XGBSaybUs3YxwD8JT8bAZ
          claim_id: c_uU0Xsu8owSR74HvFKvO9HX
          source_id: s_2JJKkT51N9J7WXDNfuo8De
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第六十七名：父王道生
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2JJKkT51N9J7WXDNfuo8De
            source_type: api_record
            title: 中国历代人物传记资料库：王就學（CBDB 126705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126705&o=json
            external_identifier: CBDB:126705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Wgw4bGM6hG66ToMF6agV3N
        status: active
        display_name: 王就學
        merged_into_person_id: null
    - claim:
        id: c_OjidB2eVaKrJmqaufX6sAI
        subject_person_id: p_17jUtXnoMjU3kpESe25w4v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cNPQCRESnHPNJBxvhHBfT4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SNfdMlExoC8DqcR1L4uKTt
          claim_id: c_OjidB2eVaKrJmqaufX6sAI
          source_id: s_vdPChfbtmoNDWpsP7KYyJI
          stance: supports
          locator: CBDB：兄弟 王就學（126705）之父／母 王道生
          quotation: null
          interpretation_note: 由兄弟关系推断：王就聘 与 王就學 为同胞（CBDB 记「兄」），王就學 之父／母即 王就聘 之父／母。
          source:
            id: s_vdPChfbtmoNDWpsP7KYyJI
            source_type: api_record
            title: 中国历代人物传记资料库：王就聘（CBDB 226713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226713&o=json
            external_identifier: CBDB:226713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cNPQCRESnHPNJBxvhHBfT4
        status: active
        display_name: 王就聘
        merged_into_person_id: null
    - claim:
        id: c_BigaxgAuWUy8Zgy-XlCtEF
        subject_person_id: p_17jUtXnoMjU3kpESe25w4v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qx4GH8cZcsffEAKAWxt1PT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_spamNWuAeNlk1TkH7MTYY-
          claim_id: c_BigaxgAuWUy8Zgy-XlCtEF
          source_id: s_JSyWUKosI0exWhUrDnNAb_
          stance: supports
          locator: CBDB：兄弟 王就學（126705）之父／母 王道生
          quotation: null
          interpretation_note: 由兄弟关系推断：王就問 与 王就學 为同胞（CBDB 记「兄」），王就學 之父／母即 王就問 之父／母。
          source:
            id: s_JSyWUKosI0exWhUrDnNAb_
            source_type: api_record
            title: 中国历代人物传记资料库：王就問（CBDB 226714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226714&o=json
            external_identifier: CBDB:226714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qx4GH8cZcsffEAKAWxt1PT
        status: active
        display_name: 王就問
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王道生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道生 | accepted |
| bio.summary | 王道生，明人物。萬曆丙戌科進士進士，籍贯武進，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 226710） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Wgw4bGM6hG66ToMF6agV3N | 王就學 | accepted |
| children | p_cNPQCRESnHPNJBxvhHBfT4 | 王就聘 | accepted |
| children | p_qx4GH8cZcsffEAKAWxt1PT | 王就問 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道生（CBDB 226710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226710&o=json)
- [中国历代人物传记资料库：王就聘（CBDB 226713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226713&o=json)
- [中国历代人物传记资料库：王就問（CBDB 226714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226714&o=json)
- [中国历代人物传记资料库：王就學（CBDB 126705）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126705&o=json)
