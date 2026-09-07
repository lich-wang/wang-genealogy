---
schema: wang-person/v1
id: p_oKrvzQwh2gWNbGZ6CCDMdj
status: active
merged_into: null
display_name: 王紘
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AJqPWE5pCBBSXoWDXZkW90
        subject_person_id: p_oKrvzQwh2gWNbGZ6CCDMdj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紘，史料所见人物。本项目依据《王紘》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_63XxcQAtW8qgp-NaryVGLX
          claim_id: c_AJqPWE5pCBBSXoWDXZkW90
          source_id: s_bouGsXS4iCCqWir3ZaSdrt
          stance: supports
          locator: Q11573194
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_bouGsXS4iCCqWir3ZaSdrt
            source_type: api_record
            title: 维基数据：王紘（Q11573194）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573194
            external_identifier: Q11573194
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:06.300Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B4%98_(%E5%8C%97%E6%9C%9D)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DnGH2y3EFsBt9KmBcy51f1
        subject_person_id: p_oKrvzQwh2gWNbGZ6CCDMdj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pNdjtDK4FDEnPuzqNfZw5b
          claim_id: c_DnGH2y3EFsBt9KmBcy51f1
          source_id: s_bouGsXS4iCCqWir3ZaSdrt
          stance: supports
          locator: Q11573194
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cjj6F4gdx4HpZsDqV7csB1
        subject_person_id: p_CMhD9V5vvt6ncFZG6HLa6K
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_oKrvzQwh2gWNbGZ6CCDMdj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4kMG8VTACo76D38Cbe22ck
          claim_id: c_cjj6F4gdx4HpZsDqV7csB1
          source_id: s_MLPu9Bs6qqNvxWi2B9Xdha
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_MLPu9Bs6qqNvxWi2B9Xdha
            source_type: api_record
            title: 维基数据：王基 (北朝)（Q11572951）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572951
            external_identifier: Q11572951
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:08.907Z
            metadata_json: null
        - id: cs_oWdhz5fz1vh4t9VcivP6PW
          claim_id: c_cjj6F4gdx4HpZsDqV7csB1
          source_id: s_bouGsXS4iCCqWir3ZaSdrt
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_bouGsXS4iCCqWir3ZaSdrt
            source_type: api_record
            title: 维基数据：王紘（Q11573194）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573194
            external_identifier: Q11573194
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:06.300Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B4%98_(%E5%8C%97%E6%9C%9D)
      object_person:
        id: p_CMhD9V5vvt6ncFZG6HLa6K
        status: active
        display_name: 王基 (北朝)
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王紘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王紘，史料所见人物。本项目依据《王紘》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王紘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CMhD9V5vvt6ncFZG6HLa6K | 王基 (北朝) | accepted |

## 外部来源

- [维基数据：王紘（Q11573194）](https://www.wikidata.org/wiki/Q11573194)
- [维基数据：王基 (北朝)（Q11572951）](https://www.wikidata.org/wiki/Q11572951)
