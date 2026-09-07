---
schema: wang-person/v1
id: p_Ba2ZKNQXWMkpg3MtejaL9E
status: active
merged_into: null
display_name: 王昙
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L4jCdnfmDdtm4qzLY-HsBN
        subject_person_id: p_Ba2ZKNQXWMkpg3MtejaL9E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昙（1760年—1817年），又名良士，字仲瞿，号瓶山，浙江秀水（今嘉興市）人。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_jacVNIfbdhjStfNbQUPiQI
          claim_id: c_L4jCdnfmDdtm4qzLY-HsBN
          source_id: s_ytE2fEukMTRNkdpicm8lBU
          stance: supports
          locator: 导言
          quotation: 王昙（1760年—1817年），又名良士，字仲瞿，号瓶山，浙江秀
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_ytE2fEukMTRNkdpicm8lBU
            source_type: website
            title: 中文维基百科：王昙
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%98%99
            external_identifier: Q15912186
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zujWiYVGsfS5WVbXKKYUkt
        subject_person_id: p_Ba2ZKNQXWMkpg3MtejaL9E
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1760年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1760-01-01
            latest: 1760-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cKpPZNXBMUTJDBUKUGYvhi
          claim_id: c_zujWiYVGsfS5WVbXKKYUkt
          source_id: s_wUxeMTCMRHDvPFiS1v7chn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_wUxeMTCMRHDvPFiS1v7chn
            source_type: api_record
            title: 维基数据：王昙（Q15912186）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15912186
            external_identifier: Q15912186
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:06.644Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_j9CM5iqJH1VQk6YFvS7y1K
        subject_person_id: p_Ba2ZKNQXWMkpg3MtejaL9E
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1817年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1817-01-01
            latest: 1817-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jS9S8prEQUkHAjwY2XGHZF
          claim_id: c_j9CM5iqJH1VQk6YFvS7y1K
          source_id: s_wUxeMTCMRHDvPFiS1v7chn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_wUxeMTCMRHDvPFiS1v7chn
            source_type: api_record
            title: 维基数据：王昙（Q15912186）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15912186
            external_identifier: Q15912186
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:06.644Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_a5q2NrhDPkg8TffwmGg6qK
        subject_person_id: p_Ba2ZKNQXWMkpg3MtejaL9E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昙
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8tRFMZpJ8XYQsTdNAEJozx
          claim_id: c_a5q2NrhDPkg8TffwmGg6qK
          source_id: s_wUxeMTCMRHDvPFiS1v7chn
          stance: supports
          locator: Q15912186
          quotation: null
          interpretation_note: null
          source:
            id: s_wUxeMTCMRHDvPFiS1v7chn
            source_type: api_record
            title: 维基数据：王昙（Q15912186）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15912186
            external_identifier: Q15912186
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:06.644Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昙（1760年—1817年），又名良士，字仲瞿，号瓶山，浙江秀水（今嘉興市）人。 | accepted |
| birth.date | 1760年 | accepted |
| death.date | 1817年 | accepted |
| name.primary | 王昙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王昙（Q15912186）](https://www.wikidata.org/wiki/Q15912186)
- [中文维基百科：王昙](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%98%99)
