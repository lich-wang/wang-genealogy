---
schema: wang-person/v1
id: p_zZKVcF87pDBen7HbsJPftV
status: active
merged_into: null
display_name: 王浚
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A73-vnH_LcnHbCdiEGddYP
        subject_person_id: p_zZKVcF87pDBen7HbsJPftV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浚，史料所见人物。本项目依据《太原王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_A8u0aFwnfZR5qVzWQfS2e3
          claim_id: c_A73-vnH_LcnHbCdiEGddYP
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_8v3HEWJMg8p43rd4zxNR9r
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:15.556Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UhvZQvHEDSo45XPVcMiJCt
        subject_person_id: p_zZKVcF87pDBen7HbsJPftV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浚
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d7MJPTdF2N7cA3TzQhH3HP
          claim_id: c_UhvZQvHEDSo45XPVcMiJCt
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
          stance: supports
          locator: Q11573159
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WnTU7ksFryWHHVPSJJtSjK
        subject_person_id: p_37UsZUR2e25vv1gQTCqpjG
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_zZKVcF87pDBen7HbsJPftV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dSxSixWEvUFnDLqkdDEHWM
          claim_id: c_WnTU7ksFryWHHVPSJJtSjK
          source_id: s_reaTfWx18D3nBWzMLvY2eV
          stance: supports
          locator: 《晋书》王沈传
          quotation: 子浚嗣。浚字彭祖……遂生浚。
          interpretation_note: null
          source:
            id: s_reaTfWx18D3nBWzMLvY2eV
            source_type: book
            title: 识典古籍：《晋书》王沈传
            creator: null
            publisher: 识典古籍
            published_at_text: null
            canonical_url: https://www.shidianguji.com/book/LS0005/chapter/LS0005_667
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:15:01.384Z
            metadata_json: null
      object_person:
        id: p_37UsZUR2e25vv1gQTCqpjG
        status: active
        display_name: 王沈
        merged_into_person_id: null
  children:
    - claim:
        id: c_w39858yTGEEhKiA8eqJU7G
        subject_person_id: p_zZKVcF87pDBen7HbsJPftV
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_1bJJQwWt5uPKdWWPKLx28Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KvN3Z95Z4SqoMM6uSu2KC6
          claim_id: c_w39858yTGEEhKiA8eqJU7G
          source_id: s_ia7UywJVEB9bkmTJ93pz7K
          stance: supports
          locator: 条文：王浚子
          quotation: 王裔，王浚子。
          interpretation_note: null
          source:
            id: s_ia7UywJVEB9bkmTJ93pz7K
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:31.288Z
            metadata_json: null
      object_person:
        id: p_1bJJQwWt5uPKdWWPKLx28Z
        status: active
        display_name: 王裔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王浚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王浚，史料所见人物。本项目依据《太原王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王浚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_37UsZUR2e25vv1gQTCqpjG | 王沈 | accepted |
| children | p_1bJJQwWt5uPKdWWPKLx28Z | 王裔 | accepted |

## 外部来源

- [识典古籍：《晋书》王沈传](https://www.shidianguji.com/book/LS0005/chapter/LS0005_667)
- [中文维基百科：太原王氏](https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F)
