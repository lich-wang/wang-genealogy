---
schema: wang-person/v1
id: p_nx3K8MGpCchpS7GimQPh4Z
status: active
merged_into: null
display_name: 王俣
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b0_fvzfgNK_9X88nU3iRDx
        subject_person_id: p_nx3K8MGpCchpS7GimQPh4Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俣（卒于1157年），史料所见人物。本项目依据《王俣》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E8sTsaEa97WUneGHvGBzDX
          claim_id: c_b0_fvzfgNK_9X88nU3iRDx
          source_id: s_1WA7rLnumfLcmg5i2dpiVY
          stance: supports
          locator: Q45359815
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_1WA7rLnumfLcmg5i2dpiVY
            source_type: api_record
            title: 维基数据：王俣（Q45359815）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359815
            external_identifier: Q45359815
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:57.276Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_nC5UhWyzvxGitAiMeCQa7D
        subject_person_id: p_nx3K8MGpCchpS7GimQPh4Z
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1157年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1157-01-01
            latest: 1157-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_q2nva2QRDoup9PVh2MPgaj
          claim_id: c_nC5UhWyzvxGitAiMeCQa7D
          source_id: s_1WA7rLnumfLcmg5i2dpiVY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hZHmPAd52TdGf33CoDawAG
        subject_person_id: p_nx3K8MGpCchpS7GimQPh4Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俣
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GEFu84dbxMJYQyBdeuAdSS
          claim_id: c_hZHmPAd52TdGf33CoDawAG
          source_id: s_1WA7rLnumfLcmg5i2dpiVY
          stance: supports
          locator: Q45359815
          quotation: null
          interpretation_note: null
          source:
            id: s_1WA7rLnumfLcmg5i2dpiVY
            source_type: api_record
            title: 维基数据：王俣（Q45359815）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359815
            external_identifier: Q45359815
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:57.276Z
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

# 王俣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王俣（卒于1157年），史料所见人物。本项目依据《王俣》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1157年 | accepted |
| name.primary | 王俣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王俣（Q45359815）](https://www.wikidata.org/wiki/Q45359815)
