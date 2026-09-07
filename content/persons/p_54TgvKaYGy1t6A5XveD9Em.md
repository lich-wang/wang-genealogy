---
schema: wang-person/v1
id: p_54TgvKaYGy1t6A5XveD9Em
status: active
merged_into: null
display_name: 王松明
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yMeg9iwvc0tdJWS3AmvwGd
        subject_person_id: p_54TgvKaYGy1t6A5XveD9Em
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松明（1917年—1979年），史料所见人物。本项目依据《中国作家网：国学大师王国维的悲情家族》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I-6jL2OiXEQCbOHYp6Qxix
          claim_id: c_yMeg9iwvc0tdJWS3AmvwGd
          source_id: s_Cnnrjz2Tj7Fm8vbeTxuviJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Cnnrjz2Tj7Fm8vbeTxuviJ
            source_type: website
            title: 中国作家网：国学大师王国维的悲情家族
            creator: null
            publisher: 中国作家网
            published_at_text: null
            canonical_url: https://www.chinawriter.com.cn/2013/2013-12-31/186877.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:06:00.018Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_U8HzWDWL2Cc9QJn35M75ga
        subject_person_id: p_54TgvKaYGy1t6A5XveD9Em
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1917年
            calendar_note: null
            earliest: 1917-01-01
            latest: 1917-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MEKG83Jq8HZebUDrL19qYp
          claim_id: c_U8HzWDWL2Cc9QJn35M75ga
          source_id: s_Cnnrjz2Tj7Fm8vbeTxuviJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_xDatRwSxqWdin7F7Hkg3dY
        subject_person_id: p_54TgvKaYGy1t6A5XveD9Em
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1979年
            calendar_note: null
            earliest: 1979-01-01
            latest: 1979-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CbY2CrRAjAhMSFyzP2Wr69
          claim_id: c_xDatRwSxqWdin7F7Hkg3dY
          source_id: s_Cnnrjz2Tj7Fm8vbeTxuviJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Cnnrjz2Tj7Fm8vbeTxuviJ
            source_type: website
            title: 中国作家网：国学大师王国维的悲情家族
            creator: null
            publisher: 中国作家网
            published_at_text: null
            canonical_url: https://www.chinawriter.com.cn/2013/2013-12-31/186877.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:06:00.018Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NMDi1ZPJGyD3yCMpzYqz9f
        subject_person_id: p_54TgvKaYGy1t6A5XveD9Em
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松明
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MCuRFVuKcSTDxChL1CEbpm
          claim_id: c_NMDi1ZPJGyD3yCMpzYqz9f
          source_id: s_Cnnrjz2Tj7Fm8vbeTxuviJ
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source:
            id: s_Cnnrjz2Tj7Fm8vbeTxuviJ
            source_type: website
            title: 中国作家网：国学大师王国维的悲情家族
            creator: null
            publisher: 中国作家网
            published_at_text: null
            canonical_url: https://www.chinawriter.com.cn/2013/2013-12-31/186877.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:06:00.018Z
            metadata_json: null
        - id: cs_jDPdwdH7EMCMRNwfGC4YA3
          claim_id: c_NMDi1ZPJGyD3yCMpzYqz9f
          source_id: s_APBwcjwov853xnCXkGKzhJ
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source:
            id: s_APBwcjwov853xnCXkGKzhJ
            source_type: website
            title: 清华大学校史馆：王国维——清华国学院第一位导师
            creator: 钱丹红
            publisher: 清华大学校史馆
            published_at_text: null
            canonical_url: https://xsg.tsinghua.edu.cn/info/1004/2264.htm
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:59.843Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nNhFnKLK3vJ3XX9fZayCG7
        subject_person_id: p_CRTiUFbJJTt5FqJL9A5xNr
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_54TgvKaYGy1t6A5XveD9Em
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NbNJP5U7Gc7qkzsMG4EVdk
          claim_id: c_nNhFnKLK3vJ3XX9fZayCG7
          source_id: s_Cnnrjz2Tj7Fm8vbeTxuviJ
          stance: supports
          locator: 家族成员
          quotation: 次女王松明（1917—1979）。
          interpretation_note: null
          source:
            id: s_Cnnrjz2Tj7Fm8vbeTxuviJ
            source_type: website
            title: 中国作家网：国学大师王国维的悲情家族
            creator: null
            publisher: 中国作家网
            published_at_text: null
            canonical_url: https://www.chinawriter.com.cn/2013/2013-12-31/186877.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:06:00.018Z
            metadata_json: null
      object_person:
        id: p_CRTiUFbJJTt5FqJL9A5xNr
        status: active
        display_name: 王國維
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王松明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王松明（1917年—1979年），史料所见人物。本项目依据《中国作家网：国学大师王国维的悲情家族》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1917年 | accepted |
| death.date | 1979年 | accepted |
| name.primary | 王松明 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CRTiUFbJJTt5FqJL9A5xNr | 王國維 | accepted |

## 外部来源

- [清华大学校史馆：王国维——清华国学院第一位导师](https://xsg.tsinghua.edu.cn/info/1004/2264.htm)
- [中国作家网：国学大师王国维的悲情家族](https://www.chinawriter.com.cn/2013/2013-12-31/186877.html)
