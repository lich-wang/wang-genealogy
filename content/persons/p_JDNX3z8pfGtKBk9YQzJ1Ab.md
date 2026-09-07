---
schema: wang-person/v1
id: p_JDNX3z8pfGtKBk9YQzJ1Ab
status: active
merged_into: null
display_name: 王淡
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wv9_jA3Dz2TEE9rnrAXhb4
        subject_person_id: p_JDNX3z8pfGtKBk9YQzJ1Ab
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淡，史料所见人物。本项目依据《琅邪王氏世系圖》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JnuyUBKCpF6oc1gbggtNLV
          claim_id: c_wv9_jA3Dz2TEE9rnrAXhb4
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mMGBRMVrGvNzrt4dnMFcZ5
        subject_person_id: p_JDNX3z8pfGtKBk9YQzJ1Ab
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淡
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eU4AnsZYFNrwFvw6KMe4c4
          claim_id: c_mMGBRMVrGvNzrt4dnMFcZ5
          source_id: s_MGBoig692jprej3f8uiDi2
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
        id: c_XLjCMDECs6noawyDBVManz
        subject_person_id: p_RhztFNKY4NjCU9wusho1it
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_JDNX3z8pfGtKBk9YQzJ1Ab
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ad1V5YgM6FQqZJgyQkXAAV
          claim_id: c_XLjCMDECs6noawyDBVManz
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王翊 → 王淡
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
        - id: cs_biSEfPti4bhsZmaoKcNQN7
          claim_id: c_XLjCMDECs6noawyDBVManz
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王翊 → 王淡
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
        id: p_RhztFNKY4NjCU9wusho1it
        status: active
        display_name: 王翊
        merged_into_person_id: null
  children:
    - claim:
        id: c_CVzUCPgwKFMxxEiRXkduji
        subject_person_id: p_JDNX3z8pfGtKBk9YQzJ1Ab
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_xV6VX1UNmEKJU1wtciwXAU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8TKkeReFR7dZCWdyA6QFK5
          claim_id: c_CVzUCPgwKFMxxEiRXkduji
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王淡 → 王宗
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
        id: p_xV6VX1UNmEKJU1wtciwXAU
        status: active
        display_name: 王宗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王淡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王淡，史料所见人物。本项目依据《琅邪王氏世系圖》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王淡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RhztFNKY4NjCU9wusho1it | 王翊 | accepted |
| children | p_xV6VX1UNmEKJU1wtciwXAU | 王宗 | accepted |

## 外部来源

- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
