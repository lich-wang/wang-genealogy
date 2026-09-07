---
schema: wang-person/v1
id: p_K9rDPN1vgHMAL8qUA57FNm
status: active
merged_into: null
display_name: 王衍
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cUlKZ42n5dt39FkkWeyr0c
        subject_person_id: p_K9rDPN1vgHMAL8qUA57FNm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衍（485年—536年），字文舒，琅邪郡临沂县人（今山东省临沂市）人，南齐给事黄门侍郎、东宫中庶子王融之子，北魏官员。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Zy4fIWFkCY6AtF5uYN6XoA
          claim_id: c_cUlKZ42n5dt39FkkWeyr0c
          source_id: s_uQNbqG2Tds_Eq0Ny67UA7t
          stance: supports
          locator: 导言
          quotation: 王衍（485年—536年），字文舒，琅邪郡临沂县人（今山东省临沂
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_uQNbqG2Tds_Eq0Ny67UA7t
            source_type: website
            title: 中文维基百科：王衍 (南北朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%8D_(%E5%8D%97%E5%8C%97%E6%9C%9D)
            external_identifier: Q48934479
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:31:32.727Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7UmrTeBpzGoL1E34NztC6e
        subject_person_id: p_K9rDPN1vgHMAL8qUA57FNm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 485年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0485-01-01
            latest: 0485-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sczwELVcywE36n9BmrGFUu
          claim_id: c_7UmrTeBpzGoL1E34NztC6e
          source_id: s_nL4sKqwrhybGDLMiW8NKZy
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_nL4sKqwrhybGDLMiW8NKZy
            source_type: api_record
            title: 维基数据：王衍（Q48934479）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q48934479
            external_identifier: Q48934479
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:07.113Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%8D_(%E5%8D%97%E5%8C%97%E6%9C%9D)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sHdxh77ywBoPsEUvrYnTyA
        subject_person_id: p_K9rDPN1vgHMAL8qUA57FNm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衍
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_M8NnsmRgwFSDUkJvrwV8W3
          claim_id: c_sHdxh77ywBoPsEUvrYnTyA
          source_id: s_nL4sKqwrhybGDLMiW8NKZy
          stance: supports
          locator: Q48934479
          quotation: null
          interpretation_note: null
          source:
            id: s_nL4sKqwrhybGDLMiW8NKZy
            source_type: api_record
            title: 维基数据：王衍（Q48934479）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q48934479
            external_identifier: Q48934479
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:07.113Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%8D_(%E5%8D%97%E5%8C%97%E6%9C%9D)
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MGXNBD3N2FvZpwKQixGtXi
        subject_person_id: p_mxbESjeJMqx1uiQKJg1sN2
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_K9rDPN1vgHMAL8qUA57FNm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_euW67ZUBJkF6A4942zLEjh
          claim_id: c_MGXNBD3N2FvZpwKQixGtXi
          source_id: s_vqNFCqY4uz7aao5dyhS51x
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_vqNFCqY4uz7aao5dyhS51x
            source_type: api_record
            title: 维基数据：王融（Q16906208）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906208
            external_identifier: Q16906208
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:03.927Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%9E%8D_(%E5%A4%AA%E5%AD%90%E4%B8%AD%E5%BA%B6%E5%AD%90)
        - id: cs_iq9VezHGFn3HB8Yn6NDbsP
          claim_id: c_MGXNBD3N2FvZpwKQixGtXi
          source_id: s_nL4sKqwrhybGDLMiW8NKZy
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_nL4sKqwrhybGDLMiW8NKZy
            source_type: api_record
            title: 维基数据：王衍（Q48934479）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q48934479
            external_identifier: Q48934479
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:07.113Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%8D_(%E5%8D%97%E5%8C%97%E6%9C%9D)
      object_person:
        id: p_mxbESjeJMqx1uiQKJg1sN2
        status: active
        display_name: 王融
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_87ryUZmCF9Vn41sws38rGZ
        subject_person_id: p_DHbqGXMHDUDbi5qvE74UDS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_K9rDPN1vgHMAL8qUA57FNm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jkvvFxXy3QG1rLifJ9Br2v
          claim_id: c_87ryUZmCF9Vn41sws38rGZ
          source_id: s_9RMest3FRa7aL19ghMxtq8
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 王衍的祖父王奂，王奂被斩杀
          interpretation_note: null
          source:
            id: s_9RMest3FRa7aL19ghMxtq8
            source_type: website
            title: 中文维基百科：王衍 (南北朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%8D_(%E5%8D%97%E5%8C%97%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:54.705Z
            metadata_json: null
      object_person:
        id: p_DHbqGXMHDUDbi5qvE74UDS
        status: active
        display_name: 王奂
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王衍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王衍（485年—536年），字文舒，琅邪郡临沂县人（今山东省临沂市）人，南齐给事黄门侍郎、东宫中庶子王融之子，北魏官员。 | accepted |
| birth.date | 485年 | accepted |
| name.primary | 王衍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mxbESjeJMqx1uiQKJg1sN2 | 王融 | accepted |
| ancestors | p_DHbqGXMHDUDbi5qvE74UDS | 王奂 | accepted |

## 外部来源

- [维基数据：王融（Q16906208）](https://www.wikidata.org/wiki/Q16906208)
- [维基数据：王衍（Q48934479）](https://www.wikidata.org/wiki/Q48934479)
- [中文维基百科：王衍 (南北朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%8D_(%E5%8D%97%E5%8C%97%E6%9C%9D))
