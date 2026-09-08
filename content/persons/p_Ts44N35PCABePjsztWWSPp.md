---
schema: wang-person/v1
id: p_Ts44N35PCABePjsztWWSPp
status: active
merged_into: null
display_name: 王氏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QXx3uPvtuNEGpCjybP5LNK
        subject_person_id: p_Ts44N35PCABePjsztWWSPp
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
        - id: cs_FTYATgupBJVgsoZ6Hga7g3
          claim_id: c_QXx3uPvtuNEGpCjybP5LNK
          source_id: s_U3WXgTHC7bwj1AAavjP1i3
          stance: supports
          locator: Q65803894
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_U3WXgTHC7bwj1AAavjP1i3
            source_type: api_record
            title: 维基数据：王氏（Q65803894）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65803894
            external_identifier: Q65803894
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a8BfysaJQYWS392ETZLodT
        subject_person_id: p_Ts44N35PCABePjsztWWSPp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承宗女
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BUFDCu5tAXQ5FX4K9ZP3mh
          claim_id: c_a8BfysaJQYWS392ETZLodT
          source_id: s_U3WXgTHC7bwj1AAavjP1i3
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
        id: c_fDnCe8WaXiCPDDwV8maaaB
        subject_person_id: p_eY8EfR1RNk6RwbouvBQCRd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ts44N35PCABePjsztWWSPp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hw5oZq5BJ9GUoCjv9HwNbs
          claim_id: c_fDnCe8WaXiCPDDwV8maaaB
          source_id: s_B3DgWR2fHr7eJGLbWkQ9BD
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_B3DgWR2fHr7eJGLbWkQ9BD
            source_type: api_record
            title: 维基数据：王承宗（Q7967386）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7967386
            external_identifier: Q7967386
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:22.442Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%89%BF%E5%AE%97
        - id: cs_chePAEKzkCzAKA1CkTU8NT
          claim_id: c_fDnCe8WaXiCPDDwV8maaaB
          source_id: s_U3WXgTHC7bwj1AAavjP1i3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_eY8EfR1RNk6RwbouvBQCRd
        status: active
        display_name: 王承宗
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
| bio.summary | 王承宗女 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eY8EfR1RNk6RwbouvBQCRd | 王承宗 | accepted |

## 外部来源

- [维基数据：王承宗（Q7967386）](https://www.wikidata.org/wiki/Q7967386)
- [维基数据：王氏（Q65803894）](https://www.wikidata.org/wiki/Q65803894)
