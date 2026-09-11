---
schema: wang-person/v1
id: p_EP4PqN7524Z7izDZZrdxRb
status: active
merged_into: null
display_name: 王图炜
cbdb_id: 69624
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HiGK683dyHpqDwMZ84pkPp
        subject_person_id: p_EP4PqN7524Z7izDZZrdxRb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王图炜，清人物。中国历代人物传记资料库（CBDB）以人物编号 69624 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_G2TJKG8aZDb9DVUp2Eew4e
          claim_id: c_HiGK683dyHpqDwMZ84pkPp
          source_id: s_Y4nNKnvPxM2f8ATUiGJ3W8
          stance: supports
          locator: null
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
        - id: cs_iv5-TboYKdwcYb8SRmgLDX
          claim_id: c_HiGK683dyHpqDwMZ84pkPp
          source_id: s_QnxKVSMA7aD6BcY9DgUy7u
          stance: supports
          locator: CBDB:69624
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JxkHk9dmHMNM3C33AQdZSC
        subject_person_id: p_EP4PqN7524Z7izDZZrdxRb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王图炜
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_61xxW2KFV3f5UebYsGqCM1
          claim_id: c_JxkHk9dmHMNM3C33AQdZSC
          source_id: s_QnxKVSMA7aD6BcY9DgUy7u
          stance: supports
          locator: Q45676566
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_U8pXZAq7EVYx3grwRCK3dC
          claim_id: c_JxkHk9dmHMNM3C33AQdZSC
          source_id: s_Y4nNKnvPxM2f8ATUiGJ3W8
          stance: supports
          locator: Q45676566
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
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nHg49b58T1jfBjEzb8w3PB
        subject_person_id: p_CzTWpHL7Ygd6jZ5FnFr3gg
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_EP4PqN7524Z7izDZZrdxRb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1ugqeFzz5hdN38hPFPmnTC
          claim_id: c_nHg49b58T1jfBjEzb8w3PB
          source_id: s_Y4nNKnvPxM2f8ATUiGJ3W8
          stance: supports
          locator: P22（父）
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
        - id: cs_3b4bQhuJePBp9XNFvCDx4T
          claim_id: c_nHg49b58T1jfBjEzb8w3PB
          source_id: s_3274JnsuaAfJg8rZ4kF3gw
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_3274JnsuaAfJg8rZ4kF3gw
            source_type: api_record
            title: 维基数据：王鸿绪（Q15913275）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15913275
            external_identifier: Q15913275
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:12.577Z
            metadata_json: null
      object_person:
        id: p_CzTWpHL7Ygd6jZ5FnFr3gg
        status: active
        display_name: 王鸿绪
        merged_into_person_id: null
  children:
    - claim:
        id: c_sx6bpPJjb8Pknu9YvnQ1rv
        subject_person_id: p_EP4PqN7524Z7izDZZrdxRb
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Up9d2jsG7MN3j1HmuzDtHo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XpPVzk2MqUPGbR98GKymdA
          claim_id: c_sx6bpPJjb8Pknu9YvnQ1rv
          source_id: s_QNyGpZPZ1tN6AxK1vHiApq
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_QNyGpZPZ1tN6AxK1vHiApq
            source_type: api_record
            title: 维基数据：王兴吾（Q15931809）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15931809
            external_identifier: Q15931809
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:24.979Z
            metadata_json: null
        - id: cs_qHJhJuakVEWQHfLyPSji6k
          claim_id: c_sx6bpPJjb8Pknu9YvnQ1rv
          source_id: s_Y4nNKnvPxM2f8ATUiGJ3W8
          stance: supports
          locator: P40（子女）
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
      object_person:
        id: p_Up9d2jsG7MN3j1HmuzDtHo
        status: active
        display_name: 王兴吾
        merged_into_person_id: null
    - claim:
        id: c_EXlbToWooyOvEZcmFJ-3qI
        subject_person_id: p_EP4PqN7524Z7izDZZrdxRb
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
        - id: cs_gysQL5HDE4E6sCEX2Gxmgz
          claim_id: c_EXlbToWooyOvEZcmFJ-3qI
          source_id: s_MMQL1L7LkzNPv3C8NoVJX6
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #687, HuWenKai #734：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MMQL1L7LkzNPv3C8NoVJX6
            source_type: api_record
            title: 中国历代人物传记资料库：王興吾（CBDB 69625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69625&o=json
            external_identifier: CBDB:69625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.299Z
            metadata_json:
              source_release: CBDB 2026-09-05
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
          source:
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
        - id: cs_s7c6RCUMsF4DTBgvLDrpQD
          claim_id: c_m3V8N7e3zfPHPhsLT676rE
          source_id: s_QnxKVSMA7aD6BcY9DgUy7u
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source: *a1
      object_person:
        id: p_FGUECt8UEJVxrFA7xCMHw4
        status: active
        display_name: 蒋季锡
        merged_into_person_id: null
    - claim:
        id: c_XNcYh3kTB8pppdr3fCnVSo
        subject_person_id: p_FGUECt8UEJVxrFA7xCMHw4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_EP4PqN7524Z7izDZZrdxRb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P2V6idFI5Bbx03b3L_h4oP
          claim_id: c_XNcYh3kTB8pppdr3fCnVSo
          source_id: s_s1eKiLfrzS45phbjJMsD7Z
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #687, HuWenKai #734：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
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
      object_person:
        id: p_FGUECt8UEJVxrFA7xCMHw4
        status: active
        display_name: 蒋季锡
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王图炜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王图炜，清人物。中国历代人物传记资料库（CBDB）以人物编号 69624 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王图炜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CzTWpHL7Ygd6jZ5FnFr3gg | 王鸿绪 | accepted |
| children | p_Up9d2jsG7MN3j1HmuzDtHo | 王兴吾 | accepted |
| children | p_zh22hgc9HcdTB4iT3BjRYN | 王興吾 | accepted |
| spouses | p_FGUECt8UEJVxrFA7xCMHw4 | 蒋季锡 | accepted |
| spouses | p_FGUECt8UEJVxrFA7xCMHw4 | 蒋季锡 | accepted |

## 外部来源

- [维基数据：蒋季锡（Q16076435）](https://www.wikidata.org/wiki/Q16076435)
- [维基数据：王鸿绪（Q15913275）](https://www.wikidata.org/wiki/Q15913275)
- [维基数据：王图炜（Q45676566）](https://www.wikidata.org/wiki/Q45676566)
- [维基数据：王兴吾（Q15931809）](https://www.wikidata.org/wiki/Q15931809)
- [中国历代人物传记资料库：王興吾（CBDB 69625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69625&o=json)
- [CBDB 中国历代人物传记资料库：蔣季錫（55820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55820&o=json)
- [CBDB 中国历代人物传记资料库：王圖煒（69624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69624&o=json)
