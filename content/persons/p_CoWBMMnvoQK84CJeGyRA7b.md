---
schema: wang-person/v1
id: p_CoWBMMnvoQK84CJeGyRA7b
status: active
merged_into: null
display_name: 王说
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rhahU-37uqiLzi1GDJA8eO
        subject_person_id: p_CoWBMMnvoQK84CJeGyRA7b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王说（1010年—1085年），史料所见人物。本项目依据《王说》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_xSnqu7kOpBNl7iVFDdld5G
          claim_id: c_rhahU-37uqiLzi1GDJA8eO
          source_id: s_MnWbvo26kGRe47FErk4cfJ
          stance: supports
          locator: Q15897779
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_MnWbvo26kGRe47FErk4cfJ
            source_type: api_record
            title: 维基数据：王说（Q15897779）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15897779
            external_identifier: Q15897779
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:28.300Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_SrsEQmrhUcUFPxVe2X7N93
        subject_person_id: p_CoWBMMnvoQK84CJeGyRA7b
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1010年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1010-01-01
            latest: 1010-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JBmpFC84q4hMn3LiA33zDu
          claim_id: c_SrsEQmrhUcUFPxVe2X7N93
          source_id: s_MnWbvo26kGRe47FErk4cfJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_MnWbvo26kGRe47FErk4cfJ
            source_type: api_record
            title: 维基数据：王说（Q15897779）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15897779
            external_identifier: Q15897779
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:28.300Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_m454wAfkbWuYKSfVh2hQXb
        subject_person_id: p_CoWBMMnvoQK84CJeGyRA7b
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1085年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1085-01-01
            latest: 1085-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LXG4VvWPFiMEpb1nR3a5RF
          claim_id: c_m454wAfkbWuYKSfVh2hQXb
          source_id: s_MnWbvo26kGRe47FErk4cfJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_MnWbvo26kGRe47FErk4cfJ
            source_type: api_record
            title: 维基数据：王说（Q15897779）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15897779
            external_identifier: Q15897779
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:28.300Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hYx1ZZfn2drcoqW3cbP9FZ
        subject_person_id: p_CoWBMMnvoQK84CJeGyRA7b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王说
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_RWSiaHFP6rioFMPFEXoDx5
          claim_id: c_hYx1ZZfn2drcoqW3cbP9FZ
          source_id: s_MnWbvo26kGRe47FErk4cfJ
          stance: supports
          locator: Q15897779
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_9a52CJFCRjQSfQhPoBAJmD
        subject_person_id: p_CoWBMMnvoQK84CJeGyRA7b
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_2Ge6JQzDf7ZE1r4PiPMp7d
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3u7jRMYL6DshEAnzEqUqwF
          claim_id: c_9a52CJFCRjQSfQhPoBAJmD
          source_id: s_MnWbvo26kGRe47FErk4cfJ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_MnWbvo26kGRe47FErk4cfJ
            source_type: api_record
            title: 维基数据：王说（Q15897779）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15897779
            external_identifier: Q15897779
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:28.300Z
            metadata_json: null
        - id: cs_A6RtD6pPgsfUk8obxN1ERs
          claim_id: c_9a52CJFCRjQSfQhPoBAJmD
          source_id: s_5AGupU3YAmi5iCTee26MvV
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_5AGupU3YAmi5iCTee26MvV
            source_type: api_record
            title: 维基数据：王珩（Q24837437）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q24837437
            external_identifier: Q24837437
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:26.496Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8F%A9_(%E5%A4%A7%E8%A7%82%E8%BF%9B%E5%A3%AB)
        - id: cs_ng3qn4A3tARHXWY4ScByQT
          claim_id: c_9a52CJFCRjQSfQhPoBAJmD
          source_id: s_NLSMrajxZbZtS5LgXhdj4W
          stance: supports
          locator: 亲属关系：季子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_NLSMrajxZbZtS5LgXhdj4W
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王說（19870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19870&o=json
            external_identifier: CBDB:19870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:03.782Z
            metadata_json: null
      object_person:
        id: p_2Ge6JQzDf7ZE1r4PiPMp7d
        status: active
        display_name: 王珩
        merged_into_person_id: null
    - claim:
        id: c_uL471D3drrqd9BotmgBg4d
        subject_person_id: p_CoWBMMnvoQK84CJeGyRA7b
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_XDSQYuPv8QJVvKbUCy1xuR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2rmjPBTWeVpUYN7QL3NmCV
          claim_id: c_uL471D3drrqd9BotmgBg4d
          source_id: s_MnWbvo26kGRe47FErk4cfJ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_MnWbvo26kGRe47FErk4cfJ
            source_type: api_record
            title: 维基数据：王说（Q15897779）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15897779
            external_identifier: Q15897779
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:28.300Z
            metadata_json: null
        - id: cs_DeQxj9YT8Ya1BLEGLBE2kX
          claim_id: c_uL471D3drrqd9BotmgBg4d
          source_id: s_1JgbxsWktA72cHhVP6jUv2
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_1JgbxsWktA72cHhVP6jUv2
            source_type: api_record
            title: 维基数据：王瓘（Q18118838）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18118838
            external_identifier: Q18118838
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:28.634Z
            metadata_json: null
        - id: cs_sz88B3FkNVAF4gfUK2bDrN
          claim_id: c_uL471D3drrqd9BotmgBg4d
          source_id: s_NLSMrajxZbZtS5LgXhdj4W
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_NLSMrajxZbZtS5LgXhdj4W
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王說（19870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19870&o=json
            external_identifier: CBDB:19870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:03.782Z
            metadata_json: null
      object_person:
        id: p_XDSQYuPv8QJVvKbUCy1xuR
        status: active
        display_name: 王瓘
        merged_into_person_id: null
    - claim:
        id: c_hbhbqpayMA8cMj1wJJ5iDS
        subject_person_id: p_CoWBMMnvoQK84CJeGyRA7b
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_42szA6CsjsGEHtctBDvhPe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SgbD3UkuvCabJxgQPKLy4y
          claim_id: c_hbhbqpayMA8cMj1wJJ5iDS
          source_id: s_MnWbvo26kGRe47FErk4cfJ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_MnWbvo26kGRe47FErk4cfJ
            source_type: api_record
            title: 维基数据：王说（Q15897779）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15897779
            external_identifier: Q15897779
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:28.300Z
            metadata_json: null
        - id: cs_abAAChWVQSkg99aNzs1Dhy
          claim_id: c_hbhbqpayMA8cMj1wJJ5iDS
          source_id: s_TDiSeBpHPozrTk3mUeU3Ac
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_TDiSeBpHPozrTk3mUeU3Ac
            source_type: api_record
            title: 维基数据：王玩（Q45393590）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45393590
            external_identifier: Q45393590
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:29.926Z
            metadata_json: null
        - id: cs_unxg14QdGhKJMB9i2Gyixh
          claim_id: c_hbhbqpayMA8cMj1wJJ5iDS
          source_id: s_NLSMrajxZbZtS5LgXhdj4W
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_NLSMrajxZbZtS5LgXhdj4W
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王說（19870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19870&o=json
            external_identifier: CBDB:19870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:03.782Z
            metadata_json: null
      object_person:
        id: p_42szA6CsjsGEHtctBDvhPe
        status: active
        display_name: 王玩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王说

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王说（1010年—1085年），史料所见人物。本项目依据《王说》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1010年 | accepted |
| death.date | 1085年 | accepted |
| name.primary | 王说 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2Ge6JQzDf7ZE1r4PiPMp7d | 王珩 | accepted |
| children | p_XDSQYuPv8QJVvKbUCy1xuR | 王瓘 | accepted |
| children | p_42szA6CsjsGEHtctBDvhPe | 王玩 | accepted |

## 外部来源

- [维基数据：王瓘（Q18118838）](https://www.wikidata.org/wiki/Q18118838)
- [维基数据：王珩（Q24837437）](https://www.wikidata.org/wiki/Q24837437)
- [维基数据：王说（Q15897779）](https://www.wikidata.org/wiki/Q15897779)
- [维基数据：王玩（Q45393590）](https://www.wikidata.org/wiki/Q45393590)
- [CBDB 中国历代人物传记资料库：王說（19870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19870&o=json)
