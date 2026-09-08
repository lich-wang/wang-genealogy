---
schema: wang-person/v1
id: p_f4HMpBBbSKyMnBCWcM6B3J
status: active
merged_into: null
display_name: 王昕
cbdb_id: 175614
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9b7YL5pkcQvD95F9RNJCe9
        subject_person_id: p_f4HMpBBbSKyMnBCWcM6B3J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昕（卒于709年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任州刺史、司馬。中国历代人物传记资料库（CBDB）以人物编号 175614 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_58Hj9FfHGJB6kno3aeGdks
          claim_id: c_9b7YL5pkcQvD95F9RNJCe9
          source_id: s_qAFDo45a3TD4yEFPzUmDes
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_qAFDo45a3TD4yEFPzUmDes
            source_type: api_record
            title: 维基数据：王昕（Q45669261）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669261
            external_identifier: Q45669261
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:37.840Z
            metadata_json: null
        - id: cs_XP70BHH4P9nd-bofIyuGwq
          claim_id: c_9b7YL5pkcQvD95F9RNJCe9
          source_id: s_2Qfr8BbfANB5NVqym7jbwM
          stance: supports
          locator: CBDB:175614
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2Qfr8BbfANB5NVqym7jbwM
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昕（175614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175614&o=json
            external_identifier: CBDB:175614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:38.007Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_XAMgMFp198sp2QW71BrvaJ
        subject_person_id: p_f4HMpBBbSKyMnBCWcM6B3J
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 709年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0709-01-01
            latest: 0709-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uFKzTXMcRVA1FV31WKU11W
          claim_id: c_XAMgMFp198sp2QW71BrvaJ
          source_id: s_qAFDo45a3TD4yEFPzUmDes
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_qAFDo45a3TD4yEFPzUmDes
            source_type: api_record
            title: 维基数据：王昕（Q45669261）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669261
            external_identifier: Q45669261
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:37.840Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kUKDTFCApqTHwYG4JoMEZX
        subject_person_id: p_f4HMpBBbSKyMnBCWcM6B3J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昕
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MjQx77gwLd5hepMwWsAU3y
          claim_id: c_kUKDTFCApqTHwYG4JoMEZX
          source_id: s_2Qfr8BbfANB5NVqym7jbwM
          stance: supports
          locator: Q45669261
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_q63oz1o2RDFxRFvCAdAL9c
          claim_id: c_kUKDTFCApqTHwYG4JoMEZX
          source_id: s_qAFDo45a3TD4yEFPzUmDes
          stance: supports
          locator: Q45669261
          quotation: null
          interpretation_note: null
          source:
            id: s_qAFDo45a3TD4yEFPzUmDes
            source_type: api_record
            title: 维基数据：王昕（Q45669261）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669261
            external_identifier: Q45669261
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:37.840Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5oBTjAvDHKQbnWATXWZisR
        subject_person_id: p_ZSBMnefxQNX4zwGDPTrYX5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f4HMpBBbSKyMnBCWcM6B3J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ai7sBrf5PiSVPFndXNMsep
          claim_id: c_5oBTjAvDHKQbnWATXWZisR
          source_id: s_7Npqc2V4HZVXpCQ8BDZJQV
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7Npqc2V4HZVXpCQ8BDZJQV
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綝（175451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175451&o=json
            external_identifier: CBDB:175451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:19.563Z
            metadata_json: null
        - id: cs_d7UU9L7CX8q8xBah7TYhXQ
          claim_id: c_5oBTjAvDHKQbnWATXWZisR
          source_id: s_CTC777F2HSKbjF4ZdjzJur
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_CTC777F2HSKbjF4ZdjzJur
            source_type: api_record
            title: 维基数据：王方庆（Q7478164）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7478164
            external_identifier: Q7478164
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:19.421Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%96%B9%E5%BA%86
        - id: cs_LPsAT5nHcpDLMXBTHp6sJM
          claim_id: c_5oBTjAvDHKQbnWATXWZisR
          source_id: s_qAFDo45a3TD4yEFPzUmDes
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_qAFDo45a3TD4yEFPzUmDes
            source_type: api_record
            title: 维基数据：王昕（Q45669261）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669261
            external_identifier: Q45669261
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:37.840Z
            metadata_json: null
        - id: cs_eTubh4UBEmBT7D3YACLkwc
          claim_id: c_5oBTjAvDHKQbnWATXWZisR
          source_id: s_2Qfr8BbfANB5NVqym7jbwM
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_2Qfr8BbfANB5NVqym7jbwM
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昕（175614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175614&o=json
            external_identifier: CBDB:175614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:38.007Z
            metadata_json: null
      object_person:
        id: p_ZSBMnefxQNX4zwGDPTrYX5
        status: active
        display_name: 王方庆
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昕（卒于709年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任州刺史、司馬。中国历代人物传记资料库（CBDB）以人物编号 175614 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 709年 | accepted |
| name.primary | 王昕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZSBMnefxQNX4zwGDPTrYX5 | 王方庆 | accepted |

## 外部来源

- [维基数据：王方庆（Q7478164）](https://www.wikidata.org/wiki/Q7478164)
- [维基数据：王昕（Q45669261）](https://www.wikidata.org/wiki/Q45669261)
- [CBDB 中国历代人物传记资料库：王綝（175451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175451&o=json)
- [CBDB 中国历代人物传记资料库：王昕（175614）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175614&o=json)
