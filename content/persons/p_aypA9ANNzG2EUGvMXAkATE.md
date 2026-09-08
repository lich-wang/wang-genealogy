---
schema: wang-person/v1
id: p_aypA9ANNzG2EUGvMXAkATE
status: active
merged_into: null
display_name: 王安
cbdb_id: 22196
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZgoJSJj73Zu42AnakjCQ3x
        subject_person_id: p_aypA9ANNzG2EUGvMXAkATE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安，五代人物。CBDB 记录其籍贯记录为元城。中国历代人物传记资料库（CBDB）以人物编号 22196 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5UqiRbdoEN8tjPFDnGk96u
          claim_id: c_ZgoJSJj73Zu42AnakjCQ3x
          source_id: s_rbQTJtcoJuNBL3T9CGgKfP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_rbQTJtcoJuNBL3T9CGgKfP
            source_type: api_record
            title: 维基数据：王安（Q45402021）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402021
            external_identifier: Q45402021
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:31.026Z
            metadata_json: null
        - id: cs_eZuIQiGkaAjPWdOeBkdC11
          claim_id: c_ZgoJSJj73Zu42AnakjCQ3x
          source_id: s_LRJogeY9vMQNApCysUoV44
          stance: supports
          locator: CBDB:22196
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LRJogeY9vMQNApCysUoV44
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王安（22196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22196&o=json
            external_identifier: CBDB:22196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:31.173Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JDeMn6iGtcgukE5PvKdJ5f
        subject_person_id: p_aypA9ANNzG2EUGvMXAkATE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ep6b1NmYUrJw6Tk6tUkvGY
          claim_id: c_JDeMn6iGtcgukE5PvKdJ5f
          source_id: s_rbQTJtcoJuNBL3T9CGgKfP
          stance: supports
          locator: Q45402021
          quotation: null
          interpretation_note: null
          source:
            id: s_rbQTJtcoJuNBL3T9CGgKfP
            source_type: api_record
            title: 维基数据：王安（Q45402021）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402021
            external_identifier: Q45402021
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:31.026Z
            metadata_json: null
        - id: cs_bt6C7yjP68hKCEH7pEngWj
          claim_id: c_JDeMn6iGtcgukE5PvKdJ5f
          source_id: s_LRJogeY9vMQNApCysUoV44
          stance: supports
          locator: Q45402021
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_izsjGBpv4Ue674Y6YgS9ki
        subject_person_id: p_aypA9ANNzG2EUGvMXAkATE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BTTT39zJRrthz8CvFztroS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6a8DebjXtqg6gVDMVzmJbB
          claim_id: c_izsjGBpv4Ue674Y6YgS9ki
          source_id: s_KKQ5dqvsG41hp486vQJadZ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_KKQ5dqvsG41hp486vQJadZ
            source_type: api_record
            title: 维基数据：王廷温（Q45402023）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402023
            external_identifier: Q45402023
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:19.422Z
            metadata_json: null
        - id: cs_yqcrugNzCNEPS4J2LJdABL
          claim_id: c_izsjGBpv4Ue674Y6YgS9ki
          source_id: s_QCKEtd5U5mCKxmV7UzgwQm
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_QCKEtd5U5mCKxmV7UzgwQm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王廷溫（22197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22197&o=json
            external_identifier: CBDB:22197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:19.719Z
            metadata_json: null
        - id: cs_smNSBUhBwDUBK8h4VEJWGw
          claim_id: c_izsjGBpv4Ue674Y6YgS9ki
          source_id: s_rbQTJtcoJuNBL3T9CGgKfP
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_rbQTJtcoJuNBL3T9CGgKfP
            source_type: api_record
            title: 维基数据：王安（Q45402021）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402021
            external_identifier: Q45402021
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:31.026Z
            metadata_json: null
        - id: cs_pcqJKgo5Vf1B7dYygrKJmB
          claim_id: c_izsjGBpv4Ue674Y6YgS9ki
          source_id: s_LRJogeY9vMQNApCysUoV44
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_LRJogeY9vMQNApCysUoV44
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王安（22196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22196&o=json
            external_identifier: CBDB:22196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:31.173Z
            metadata_json: null
      object_person:
        id: p_BTTT39zJRrthz8CvFztroS
        status: active
        display_name: 王廷温
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王安，五代人物。CBDB 记录其籍贯记录为元城。中国历代人物传记资料库（CBDB）以人物编号 22196 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王安 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BTTT39zJRrthz8CvFztroS | 王廷温 | accepted |

## 外部来源

- [维基数据：王安（Q45402021）](https://www.wikidata.org/wiki/Q45402021)
- [维基数据：王廷温（Q45402023）](https://www.wikidata.org/wiki/Q45402023)
- [CBDB 中国历代人物传记资料库：王安（22196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22196&o=json)
- [CBDB 中国历代人物传记资料库：王廷溫（22197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22197&o=json)
