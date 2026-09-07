---
schema: wang-person/v1
id: p_LQXu6gmucEcttUNU5Msr1j
status: active
merged_into: null
display_name: 王信
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4sknScZne0wDHIFUE_xE1W
        subject_person_id: p_LQXu6gmucEcttUNU5Msr1j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信，史料所见人物。本项目依据《王仲》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z6VQifHPbUS0TuuANBjAK0
          claim_id: c_4sknScZne0wDHIFUE_xE1W
          source_id: s_JrMiEcKGPZDXpHdravKH5D
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_JrMiEcKGPZDXpHdravKH5D
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:28.347Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tkViiWHRCKtK9DwHSGRy4d
        subject_person_id: p_LQXu6gmucEcttUNU5Msr1j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7HJjLqP7TRBFaxcLZaQFLD
          claim_id: c_tkViiWHRCKtK9DwHSGRy4d
          source_id: s_JrMiEcKGPZDXpHdravKH5D
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 生有一子两女，子名王信
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_c4s7LZzhY7SaTqsH7tEaFt
        subject_person_id: p_PrxK1oesAe8vKYM7JnTjFg
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_LQXu6gmucEcttUNU5Msr1j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WKvAz3u61WAQ1dn2a1367d
          claim_id: c_c4s7LZzhY7SaTqsH7tEaFt
          source_id: s_JrMiEcKGPZDXpHdravKH5D
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 生有一子两女，子名王信
          interpretation_note: null
          source:
            id: s_JrMiEcKGPZDXpHdravKH5D
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:28.347Z
            metadata_json: null
        - id: cs_ahRmEMp9A35feKm7U8k8ce
          claim_id: c_c4s7LZzhY7SaTqsH7tEaFt
          source_id: s_5Nb12UyFLJZEFZyDiLHHsJ
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 与妻子臧儿，生有一子两女，子名王信，长女王氏，次女王儿姁。
          interpretation_note: null
          source:
            id: s_5Nb12UyFLJZEFZyDiLHHsJ
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:53.093Z
            metadata_json: null
        - id: cs_cqFbfmZkJaJsd6dEK7FZCW
          claim_id: c_c4s7LZzhY7SaTqsH7tEaFt
          source_id: s_jg7eNHWtUMnC6YCLabB4vL
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 子名王信
          interpretation_note: null
          source:
            id: s_jg7eNHWtUMnC6YCLabB4vL
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:40.436Z
            metadata_json: null
        - id: cs_gRfnQhyhhPDXD8fhcwTLo6
          claim_id: c_c4s7LZzhY7SaTqsH7tEaFt
          source_id: s_aN7f8BPXM6LzT6583HPiHt
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 子名王信
          interpretation_note: null
          source:
            id: s_aN7f8BPXM6LzT6583HPiHt
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:11.631Z
            metadata_json: null
        - id: cs_ioDQZvZrVsKys16NChgknk
          claim_id: c_c4s7LZzhY7SaTqsH7tEaFt
          source_id: s_mezkgFipw9NECGSAHVDcpe
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 子名王信
          interpretation_note: null
          source:
            id: s_mezkgFipw9NECGSAHVDcpe
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:40.749Z
            metadata_json: null
      object_person:
        id: p_PrxK1oesAe8vKYM7JnTjFg
        status: active
        display_name: 王仲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王信，史料所见人物。本项目依据《王仲》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王信 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PrxK1oesAe8vKYM7JnTjFg | 王仲 | accepted |

## 外部来源

- [中文维基百科：王仲](https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2)
