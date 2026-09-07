---
schema: wang-person/v1
id: p_jtzKe2BRFDYJ2SvMs8vsgr
status: active
merged_into: null
display_name: 王霁
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_emDJqF9KGotCuW6apBB8g8
        subject_person_id: p_jtzKe2BRFDYJ2SvMs8vsgr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霁（卒于1126年），史料所见人物。本项目依据《王霁》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yRRtkzT0UlRDJ-FFb7Qusw
          claim_id: c_emDJqF9KGotCuW6apBB8g8
          source_id: s_mMHLnnvHrL8h7Gy6op89Ya
          stance: supports
          locator: Q45379468
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_mMHLnnvHrL8h7Gy6op89Ya
            source_type: api_record
            title: 维基数据：王霁（Q45379468）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45379468
            external_identifier: Q45379468
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:17.656Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8eAEx731zmpuBQ7mEZ7btQ
        subject_person_id: p_jtzKe2BRFDYJ2SvMs8vsgr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1126年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1126-01-01
            latest: 1126-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JEM1jdqtcGaquwarVMdPA1
          claim_id: c_8eAEx731zmpuBQ7mEZ7btQ
          source_id: s_mMHLnnvHrL8h7Gy6op89Ya
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
        id: c_hYc4vc8A53RU4R44VGC8K5
        subject_person_id: p_jtzKe2BRFDYJ2SvMs8vsgr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霁
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_k28KFPJCghN98RKvmixcAH
          claim_id: c_hYc4vc8A53RU4R44VGC8K5
          source_id: s_mMHLnnvHrL8h7Gy6op89Ya
          stance: supports
          locator: Q45379468
          quotation: null
          interpretation_note: null
          source:
            id: s_mMHLnnvHrL8h7Gy6op89Ya
            source_type: api_record
            title: 维基数据：王霁（Q45379468）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45379468
            external_identifier: Q45379468
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:17.656Z
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

# 王霁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王霁（卒于1126年），史料所见人物。本项目依据《王霁》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1126年 | accepted |
| name.primary | 王霁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王霁（Q45379468）](https://www.wikidata.org/wiki/Q45379468)
