---
schema: wang-person/v1
id: p_9wru7EffC7hqqCEUrcBMcL
status: active
merged_into: null
display_name: 王碧
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gQ0oZNK1zrBquVWIIaFi74
        subject_person_id: p_9wru7EffC7hqqCEUrcBMcL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王碧，史料所见人物。本项目依据《王籍》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_LkiBELN4xVuLml4UAQEKCX
          claim_id: c_gQ0oZNK1zrBquVWIIaFi74
          source_id: s_MKHRdxNT97hJ8FvWYK3UUW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_MKHRdxNT97hJ8FvWYK3UUW
            source_type: website
            title: 中文维基百科：王籍
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B1%8D
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:48.356Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fnA1MVKZNMz51btHQGtrUR
        subject_person_id: p_9wru7EffC7hqqCEUrcBMcL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王碧
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UnGC9NKKM34UQVC9esiriL
          claim_id: c_fnA1MVKZNMz51btHQGtrUR
          source_id: s_MKHRdxNT97hJ8FvWYK3UUW
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
        id: c_2LUXLo2RbcJHFV27N1f23e
        subject_person_id: p_zazHetBZQu9iqwwE8w5eKq
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_9wru7EffC7hqqCEUrcBMcL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XHXqX7mZck36L8ihtpX2vn
          claim_id: c_2LUXLo2RbcJHFV27N1f23e
          source_id: s_MKHRdxNT97hJ8FvWYK3UUW
          stance: supports
          locator: 条文：条文识读（兒子）
          quotation: 他的兒子王碧也有文才
          interpretation_note: null
          source:
            id: s_MKHRdxNT97hJ8FvWYK3UUW
            source_type: website
            title: 中文维基百科：王籍
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B1%8D
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:48.356Z
            metadata_json: null
        - id: cs_QPHFkn174pMJawqEHiJdAZ
          claim_id: c_2LUXLo2RbcJHFV27N1f23e
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王籍 → 王碧
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
        - id: cs_JWy2ZFRRPF4yRtzAL4gtdY
          claim_id: c_2LUXLo2RbcJHFV27N1f23e
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王籍 → 王碧
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
        id: p_zazHetBZQu9iqwwE8w5eKq
        status: active
        display_name: 王籍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王碧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王碧，史料所见人物。本项目依据《王籍》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王碧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zazHetBZQu9iqwwE8w5eKq | 王籍 | accepted |

## 外部来源

- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王籍](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B1%8D)
