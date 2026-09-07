---
schema: wang-person/v1
id: p_HNmmC8cyV3HBbdZTGBS2SG
status: active
merged_into: null
display_name: 王铭
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BplZ7UWd3Z7TzLbSKSW7Io
        subject_person_id: p_HNmmC8cyV3HBbdZTGBS2SG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王铭（卒于1393年），史料所见人物。本项目依据《王铭》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_K22_c3Ltv24x15saxL96H8
          claim_id: c_BplZ7UWd3Z7TzLbSKSW7Io
          source_id: s_mMP6HP271pv5X311p2G3dy
          stance: supports
          locator: Q15924995
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_mMP6HP271pv5X311p2G3dy
            source_type: api_record
            title: 维基数据：王铭（Q15924995）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15924995
            external_identifier: Q15924995
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:28.997Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_y9fqwiJCXCfbF2dabjMoFa
        subject_person_id: p_HNmmC8cyV3HBbdZTGBS2SG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1393年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1393-01-01
            latest: 1393-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HtH2RWc6NG9Gcyg2cpWCrX
          claim_id: c_y9fqwiJCXCfbF2dabjMoFa
          source_id: s_mMP6HP271pv5X311p2G3dy
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_mMP6HP271pv5X311p2G3dy
            source_type: api_record
            title: 维基数据：王铭（Q15924995）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15924995
            external_identifier: Q15924995
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:28.997Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tFNKHvXD57NNMYf1ud52LJ
        subject_person_id: p_HNmmC8cyV3HBbdZTGBS2SG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王铭
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_79PkpnAoaY7heo9joXeNrn
          claim_id: c_tFNKHvXD57NNMYf1ud52LJ
          source_id: s_mMP6HP271pv5X311p2G3dy
          stance: supports
          locator: Q15924995
          quotation: null
          interpretation_note: null
          source: *a1
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

# 王铭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王铭（卒于1393年），史料所见人物。本项目依据《王铭》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1393年 | accepted |
| name.primary | 王铭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王铭（Q15924995）](https://www.wikidata.org/wiki/Q15924995)
