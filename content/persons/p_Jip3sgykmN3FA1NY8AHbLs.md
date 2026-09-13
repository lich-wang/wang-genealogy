---
schema: wang-person/v1
id: p_Jip3sgykmN3FA1NY8AHbLs
status: active
merged_into: null
display_name: 王桂林
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vYdpFk717kiekGuTu-gxKM
        subject_person_id: p_Jip3sgykmN3FA1NY8AHbLs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂林（1877年—1949年），字悦山，浙江东阳人，中华民国政治人物。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_vRJpXf5NyxOeRVnGJmSRSb
          claim_id: c_vYdpFk717kiekGuTu-gxKM
          source_id: s_x3sWwRFjiS_Dy9P2qVq2QJ
          stance: supports
          locator: 导言
          quotation: 王桂林（1877年—1949年），字悦山，浙江东阳人，中华民国政
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_x3sWwRFjiS_Dy9P2qVq2QJ
            source_type: website
            title: 中文维基百科：王桂林 (浙江)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A1%82%E6%9E%97_(%E6%B5%99%E6%B1%9F)
            external_identifier: Q110407902
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-11T10:29:31.867Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wN4fiixWuPmwmTA6hDKCR4
        subject_person_id: p_Jip3sgykmN3FA1NY8AHbLs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1877年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1877-01-01
            latest: 1877-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rUXB2sHuaHY3xbiJ6cWDUb
          claim_id: c_wN4fiixWuPmwmTA6hDKCR4
          source_id: s_f7AMfTXE264MQwd6JcE6uQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_f7AMfTXE264MQwd6JcE6uQ
            source_type: api_record
            title: 维基数据：王桂林（Q110407902）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q110407902
            external_identifier: Q110407902
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:57.104Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_cZUgUQdt1ZbaRWbC14ckW7
        subject_person_id: p_Jip3sgykmN3FA1NY8AHbLs
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1949年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1949-01-01
            latest: 1949-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_91bB2EgASsQd7o4Q4g5xDK
          claim_id: c_cZUgUQdt1ZbaRWbC14ckW7
          source_id: s_f7AMfTXE264MQwd6JcE6uQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_f7AMfTXE264MQwd6JcE6uQ
            source_type: api_record
            title: 维基数据：王桂林（Q110407902）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q110407902
            external_identifier: Q110407902
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:57.104Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aVgT1WA3x3qkRGjatigf9s
        subject_person_id: p_Jip3sgykmN3FA1NY8AHbLs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂林
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FtS94qUsTk9hibjxsiHceD
          claim_id: c_aVgT1WA3x3qkRGjatigf9s
          source_id: s_f7AMfTXE264MQwd6JcE6uQ
          stance: supports
          locator: Q110407902
          quotation: null
          interpretation_note: null
          source:
            id: s_f7AMfTXE264MQwd6JcE6uQ
            source_type: api_record
            title: 维基数据：王桂林（Q110407902）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q110407902
            external_identifier: Q110407902
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:57.104Z
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

# 王桂林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王桂林（1877年—1949年），字悦山，浙江东阳人，中华民国政治人物。 | accepted |
| birth.date | 1877年 | accepted |
| death.date | 1949年 | accepted |
| name.primary | 王桂林 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王桂林（Q110407902）](https://www.wikidata.org/wiki/Q110407902)
- [中文维基百科：王桂林 (浙江)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A1%82%E6%9E%97_(%E6%B5%99%E6%B1%9F))
