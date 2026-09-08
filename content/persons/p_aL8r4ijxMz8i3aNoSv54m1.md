---
schema: wang-person/v1
id: p_aL8r4ijxMz8i3aNoSv54m1
status: active
merged_into: null
display_name: 王氏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_88UzwPwaZasdosC91bmQBZ
        subject_person_id: p_aL8r4ijxMz8i3aNoSv54m1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KCT2ieiDBp49PN5CBtCbVT
          claim_id: c_88UzwPwaZasdosC91bmQBZ
          source_id: s_Pk8UsTf1S7y3cmMbY6o2rt
          stance: supports
          locator: Q25918179
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_Pk8UsTf1S7y3cmMbY6o2rt
            source_type: api_record
            title: 维基数据：王氏（Q25918179）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q25918179
            external_identifier: Q25918179
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tVDqJZG4LCAbsZSBR1mnn6
        subject_person_id: p_aL8r4ijxMz8i3aNoSv54m1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: concubine of Emperor Yang of Sui
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gX5Qy6Vv3arf5GWVgtR3HE
          claim_id: c_tVDqJZG4LCAbsZSBR1mnn6
          source_id: s_Pk8UsTf1S7y3cmMbY6o2rt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BVf6KbuVbevPogTSLcrk5J
        subject_person_id: p_nT7k2pCzDkpksQ1s3p6rcV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aL8r4ijxMz8i3aNoSv54m1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Exb5ZJXkREJMcPdmgNam65
          claim_id: c_BVf6KbuVbevPogTSLcrk5J
          source_id: s_jP68TirswtwKcjvQJfKLb9
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_jP68TirswtwKcjvQJfKLb9
            source_type: api_record
            title: 维基数据：王裕（Q25918183）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q25918183
            external_identifier: Q25918183
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:27.414Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A3%95_(%E9%9A%8F%E5%B7%9E%E5%88%BA%E5%8F%B2)
        - id: cs_8V4YrXzgtq9JweNzjyqKDg
          claim_id: c_BVf6KbuVbevPogTSLcrk5J
          source_id: s_Pk8UsTf1S7y3cmMbY6o2rt
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_nT7k2pCzDkpksQ1s3p6rcV
        status: active
        display_name: 王裕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王氏 | accepted |
| bio.summary | concubine of Emperor Yang of Sui | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nT7k2pCzDkpksQ1s3p6rcV | 王裕 | accepted |

## 外部来源

- [维基数据：王氏（Q25918179）](https://www.wikidata.org/wiki/Q25918179)
- [维基数据：王裕（Q25918183）](https://www.wikidata.org/wiki/Q25918183)
