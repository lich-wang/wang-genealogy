---
schema: wang-person/v1
id: p_N58tnUGH3svBk3ktNBzjN8
status: active
merged_into: null
display_name: 王崧
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e4l6ec0XOAUGy1d5rIQFB0
        subject_person_id: p_N58tnUGH3svBk3ktNBzjN8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崧，史料所见人物。本项目依据《王吉 (西汉)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eOMIcD7UpsZ3kh55QGgix_
          claim_id: c_e4l6ec0XOAUGy1d5rIQFB0
          source_id: s_E9W2xid68aCm3Q4ytRjjSD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_E9W2xid68aCm3Q4ytRjjSD
            source_type: website
            title: 中文维基百科：王吉 (西汉)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%89_(%E8%A5%BF%E6%B1%89)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:22:12.340Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TBZF8aZvX71QxHFuMDSs8T
        subject_person_id: p_N58tnUGH3svBk3ktNBzjN8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崧
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F3Y7KkeuCSuy6XMGri64jr
          claim_id: c_TBZF8aZvX71QxHFuMDSs8T
          source_id: s_E9W2xid68aCm3Q4ytRjjSD
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gmCK6vLK22ULKMXJg3igPv
        subject_person_id: p_7BBNW636PfzcwJta8vrVg1
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_N58tnUGH3svBk3ktNBzjN8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vZYaa9AkSsX8RPBrQzvtSc
          claim_id: c_gmCK6vLK22ULKMXJg3igPv
          source_id: s_E9W2xid68aCm3Q4ytRjjSD
          stance: supports
          locator: 条文：条文识读（长子）
          quotation: 长子：王崧
          interpretation_note: null
          source:
            id: s_E9W2xid68aCm3Q4ytRjjSD
            source_type: website
            title: 中文维基百科：王吉 (西汉)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%89_(%E8%A5%BF%E6%B1%89)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:22:12.340Z
            metadata_json: null
      object_person:
        id: p_7BBNW636PfzcwJta8vrVg1
        status: active
        display_name: 王吉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王崧，史料所见人物。本项目依据《王吉 (西汉)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王崧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7BBNW636PfzcwJta8vrVg1 | 王吉 | accepted |

## 外部来源

- [中文维基百科：王吉 (西汉)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%89_(%E8%A5%BF%E6%B1%89))
