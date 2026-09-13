---
schema: wang-person/v1
id: p_FGUECt8UEJVxrFA7xCMHw4
status: active
merged_into: null
display_name: 蒋季锡
cbdb_id: 55820
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4dq7v1vomGdlkF9TwmyJ6l
        subject_person_id: p_FGUECt8UEJVxrFA7xCMHw4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蒋季锡，清人物。籍贯常熟，身份为畫家。（中国历代人物传记资料库 CBDB 55820）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_aJw-OjYlqOsUAXkuUbasYB
          claim_id: c_4dq7v1vomGdlkF9TwmyJ6l
          source_id: s_s1eKiLfrzS45phbjJMsD7Z
          stance: supports
          locator: CBDB:55820
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_s1eKiLfrzS45phbjJMsD7Z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：蔣季錫（55820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55820&o=json
            external_identifier: CBDB:55820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:52.217Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_n6YqosR1iTuxHMZrHbNNEG
        subject_person_id: p_FGUECt8UEJVxrFA7xCMHw4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蒋季锡
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Exc89Nxo1g6hhYb6Tj3mCE
          claim_id: c_n6YqosR1iTuxHMZrHbNNEG
          source_id: s_s1eKiLfrzS45phbjJMsD7Z
          stance: supports
          locator: Q16076435
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_rfe3PjS2kmfKWVQWDnWPLt
          claim_id: c_n6YqosR1iTuxHMZrHbNNEG
          source_id: s_MojCG7X1RTSvLZ34KBKmbp
          stance: supports
          locator: Q16076435
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_MojCG7X1RTSvLZ34KBKmbp
            source_type: api_record
            title: 维基数据：蒋季锡（Q16076435）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16076435
            external_identifier: Q16076435
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:52.050Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E8%94%A3%E5%AD%A3%E9%8C%AB
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_NtKXP-SbycDfX1y7Qy0jmY
        subject_person_id: p_FGUECt8UEJVxrFA7xCMHw4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zh22hgc9HcdTB4iT3BjRYN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ChbuHlHFbek3aT-T2J_uWG
          claim_id: c_NtKXP-SbycDfX1y7Qy0jmY
          source_id: s_s1eKiLfrzS45phbjJMsD7Z
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #687, HuWenKai #734：子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zh22hgc9HcdTB4iT3BjRYN
        status: active
        display_name: 王興吾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_m3V8N7e3zfPHPhsLT676rE
        subject_person_id: p_EP4PqN7524Z7izDZZrdxRb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_FGUECt8UEJVxrFA7xCMHw4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b3jZnA3EKw3B5reMZTHo6P
          claim_id: c_m3V8N7e3zfPHPhsLT676rE
          source_id: s_Y4nNKnvPxM2f8ATUiGJ3W8
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_Y4nNKnvPxM2f8ATUiGJ3W8
            source_type: api_record
            title: 维基数据：王图炜（Q45676566）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45676566
            external_identifier: Q45676566
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:40.609Z
            metadata_json: null
        - id: cs_ndZjCN6vqyQ84681LYkk4E
          claim_id: c_m3V8N7e3zfPHPhsLT676rE
          source_id: s_MojCG7X1RTSvLZ34KBKmbp
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_s7c6RCUMsF4DTBgvLDrpQD
          claim_id: c_m3V8N7e3zfPHPhsLT676rE
          source_id: s_QnxKVSMA7aD6BcY9DgUy7u
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source:
            id: s_QnxKVSMA7aD6BcY9DgUy7u
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王圖煒（69624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69624&o=json
            external_identifier: CBDB:69624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:40.771Z
            metadata_json: null
      object_person:
        id: p_EP4PqN7524Z7izDZZrdxRb
        status: active
        display_name: 王图炜
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 蒋季锡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 蒋季锡，清人物。籍贯常熟，身份为畫家。（中国历代人物传记资料库 CBDB 55820） | accepted |
| name.primary | 蒋季锡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_zh22hgc9HcdTB4iT3BjRYN | 王興吾 | accepted |
| spouses | p_EP4PqN7524Z7izDZZrdxRb | 王图炜 | accepted |

## 外部来源

- [维基数据：蒋季锡（Q16076435）](https://www.wikidata.org/wiki/Q16076435)
- [维基数据：王图炜（Q45676566）](https://www.wikidata.org/wiki/Q45676566)
- [CBDB 中国历代人物传记资料库：蔣季錫（55820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55820&o=json)
- [CBDB 中国历代人物传记资料库：王圖煒（69624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69624&o=json)
