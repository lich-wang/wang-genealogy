---
schema: wang-person/v1
id: p_U2ihFkTS2oHBxQi9y7idZL
status: active
merged_into: null
display_name: 王蕣华
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BYAhysFKpQB9UeTtcqyK4b
        subject_person_id: p_U2ihFkTS2oHBxQi9y7idZL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蕣华，史料所见人物。本项目依据《王蕣华》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BqxyoCfZ0bqS6heTu4kcqY
          claim_id: c_BYAhysFKpQB9UeTtcqyK4b
          source_id: s_YDoEas8ZVVYkYwGAPAgZ7q
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_YDoEas8ZVVYkYwGAPAgZ7q
            source_type: website
            title: 中文维基百科：王蕣华
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%95%A3%E5%8D%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:52.699Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zKQZ2GffRP5Ft8RXvXAUxo
        subject_person_id: p_U2ihFkTS2oHBxQi9y7idZL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蕣华
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xnnKG7nU69aecBVyGfT6F4
          claim_id: c_zKQZ2GffRP5Ft8RXvXAUxo
          source_id: s_YDoEas8ZVVYkYwGAPAgZ7q
          stance: supports
          locator: Q4392608
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
  ancestors:
    - claim:
        id: c_g2LQ77a5omVg2WuEyJ9gpK
        subject_person_id: p_ke9yjosuiX8LZiiCh781g5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_U2ihFkTS2oHBxQi9y7idZL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SERTaWJ28kHc758M74vgpE
          claim_id: c_g2LQ77a5omVg2WuEyJ9gpK
          source_id: s_YDoEas8ZVVYkYwGAPAgZ7q
          stance: supports
          locator: 条文：条文识读（孫女）（2世）
          quotation: 太尉王俭孙女，齐和帝萧宝融皇后
          interpretation_note: null
          source:
            id: s_YDoEas8ZVVYkYwGAPAgZ7q
            source_type: website
            title: 中文维基百科：王蕣华
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%95%A3%E5%8D%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:52.699Z
            metadata_json: null
      object_person:
        id: p_ke9yjosuiX8LZiiCh781g5
        status: active
        display_name: 王俭
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王蕣华

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王蕣华，史料所见人物。本项目依据《王蕣华》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王蕣华 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_ke9yjosuiX8LZiiCh781g5 | 王俭 | accepted |

## 外部来源

- [中文维基百科：王蕣华](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%95%A3%E5%8D%8E)
