---
schema: wang-person/v1
id: p_9vPNkYXgE5ypKRpd8uYFJG
status: merged
merged_into: p_cstL9BTvsD4SQ3GTDYx54b
display_name: 王睦
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M1fYdcgsU8SruEsDgcua7v
        subject_person_id: p_9vPNkYXgE5ypKRpd8uYFJG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睦（？—23年），新朝宗室，王莽五叔成都景成侯王商之孙，父亲隆信公王邑。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_onJn-5Nvht7w_GrJ2Sjs0N
          claim_id: c_M1fYdcgsU8SruEsDgcua7v
          source_id: s_T1WcWHYLt2JlqHjFfCS7FM
          stance: supports
          locator: 导言
          quotation: 王睦（？—23年），新朝宗室，王莽五叔成都景成侯王商之孙，父亲隆
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_T1WcWHYLt2JlqHjFfCS7FM
            source_type: website
            title: 中文维基百科：王睦
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9D%A6
            external_identifier: Q100292568
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-11T10:29:31.867Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_YaM6RkcRCwpXm7z19CzdMC
        subject_person_id: p_9vPNkYXgE5ypKRpd8uYFJG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 23年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0023-01-01
            latest: 0023-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fS79n4LcPUA9NKuoBwJYnt
          claim_id: c_YaM6RkcRCwpXm7z19CzdMC
          source_id: s_p6T7LvPabQDRJgqL2oYwEH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_p6T7LvPabQDRJgqL2oYwEH
            source_type: api_record
            title: 维基数据：王睦（Q100292568）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q100292568
            external_identifier: Q100292568
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:03.927Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9D%A6
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tJH4g5MSXwCG4pdPYeFXQQ
        subject_person_id: p_9vPNkYXgE5ypKRpd8uYFJG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睦
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TRX6afmyE9m36HtXuVUphE
          claim_id: c_tJH4g5MSXwCG4pdPYeFXQQ
          source_id: s_p6T7LvPabQDRJgqL2oYwEH
          stance: supports
          locator: Q100292568
          quotation: null
          interpretation_note: null
          source:
            id: s_p6T7LvPabQDRJgqL2oYwEH
            source_type: api_record
            title: 维基数据：王睦（Q100292568）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q100292568
            external_identifier: Q100292568
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:03.927Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9D%A6
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

# 王睦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王睦（？—23年），新朝宗室，王莽五叔成都景成侯王商之孙，父亲隆信公王邑。 | accepted |
| death.date | 23年 | accepted |
| name.primary | 王睦 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王睦（Q100292568）](https://www.wikidata.org/wiki/Q100292568)
- [中文维基百科：王睦](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9D%A6)
