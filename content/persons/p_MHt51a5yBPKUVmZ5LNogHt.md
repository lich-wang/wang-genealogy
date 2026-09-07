---
schema: wang-person/v1
id: p_MHt51a5yBPKUVmZ5LNogHt
status: active
merged_into: null
display_name: 王長玄
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_07__PEP9EqgIdRkz2KBtLz
        subject_person_id: p_MHt51a5yBPKUVmZ5LNogHt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長玄，史料所见人物。本项目依据《王瞻》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ffp_njQxWewcWgEFPunwpG
          claim_id: c_07__PEP9EqgIdRkz2KBtLz
          source_id: s_N6pCeEd3CvKnXMwyJREMNJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_N6pCeEd3CvKnXMwyJREMNJ
            source_type: website
            title: 中文维基百科：王瞻
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9E%BB
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:52.699Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cP54xn65ucGYmZABQBK5Hu
        subject_person_id: p_MHt51a5yBPKUVmZ5LNogHt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長玄
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a1zMpVyR5YwmH3jF64vugB
          claim_id: c_cP54xn65ucGYmZABQBK5Hu
          source_id: s_N6pCeEd3CvKnXMwyJREMNJ
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
        id: c_5rHMPtffVbtuRMNuu4drvo
        subject_person_id: p_rvrPx4SBmB7G663buP8VfK
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_MHt51a5yBPKUVmZ5LNogHt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nPL4oGxk1jRvYPaerA9e1P
          claim_id: c_5rHMPtffVbtuRMNuu4drvo
          source_id: s_N6pCeEd3CvKnXMwyJREMNJ
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 兒子王長玄，任著作佐郎
          interpretation_note: null
          source:
            id: s_N6pCeEd3CvKnXMwyJREMNJ
            source_type: website
            title: 中文维基百科：王瞻
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9E%BB
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:52.699Z
            metadata_json: null
        - id: cs_FZJrUo7N3nRHJM99ZaorG6
          claim_id: c_5rHMPtffVbtuRMNuu4drvo
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王瞻 → 王长玄
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
        - id: cs_iVQEvzDXD8qEwwwU7MEu9j
          claim_id: c_5rHMPtffVbtuRMNuu4drvo
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王瞻 → 王长玄
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
      object_person:
        id: p_rvrPx4SBmB7G663buP8VfK
        status: active
        display_name: 王瞻
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王長玄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王長玄，史料所见人物。本项目依据《王瞻》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王長玄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rvrPx4SBmB7G663buP8VfK | 王瞻 | accepted |

## 外部来源

- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王瞻](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9E%BB)
