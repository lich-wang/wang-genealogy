---
schema: wang-person/v1
id: p_mW1NVSgRdkVtMz14818ByV
status: active
merged_into: null
display_name: 王泰
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3xpzg9df-9btzKL8HdaY_B
        subject_person_id: p_mW1NVSgRdkVtMz14818ByV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰（卒于397年），史料所见人物。本项目依据《王泰》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_OedPE39tX6HPtBtGO6YSp5
          claim_id: c_3xpzg9df-9btzKL8HdaY_B
          source_id: s_2QEpWtfE43t58QM4ve4Ntu
          stance: supports
          locator: Q16906110
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_2QEpWtfE43t58QM4ve4Ntu
            source_type: api_record
            title: 维基数据：王泰（Q16906110）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906110
            external_identifier: Q16906110
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:52.143Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B3%B0_(%E4%B8%9C%E6%99%8B)
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_xvhPicoyLd9zzUTaSzgkeE
        subject_person_id: p_mW1NVSgRdkVtMz14818ByV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 397年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0397-01-01
            latest: 0397-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zQ5uQq3NH9jYrwgJT1UJpV
          claim_id: c_xvhPicoyLd9zzUTaSzgkeE
          source_id: s_2QEpWtfE43t58QM4ve4Ntu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_2QEpWtfE43t58QM4ve4Ntu
            source_type: api_record
            title: 维基数据：王泰（Q16906110）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906110
            external_identifier: Q16906110
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:52.143Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B3%B0_(%E4%B8%9C%E6%99%8B)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QARdNxYbknw1nzHkyaFJ91
        subject_person_id: p_mW1NVSgRdkVtMz14818ByV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TfCFPXgCMd6g7VYDN8EMv8
          claim_id: c_QARdNxYbknw1nzHkyaFJ91
          source_id: s_2QEpWtfE43t58QM4ve4Ntu
          stance: supports
          locator: Q16906110
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_icX8KDjFQFLVL8P4XhGYb1
        subject_person_id: p_UW4xRPK7vkbB2saX4K7G3Q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mW1NVSgRdkVtMz14818ByV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ttuXQNKkEREd88X1Jxifvv
          claim_id: c_icX8KDjFQFLVL8P4XhGYb1
          source_id: s_1NXXuebmmX2qGQYbP9ULDx
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_1NXXuebmmX2qGQYbP9ULDx
            source_type: api_record
            title: 维基数据：王廞（Q22814780）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814780
            external_identifier: Q22814780
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:12.228Z
            metadata_json: null
        - id: cs_SGafS5qmHoYLN5PhD6sHkg
          claim_id: c_icX8KDjFQFLVL8P4XhGYb1
          source_id: s_2QEpWtfE43t58QM4ve4Ntu
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_2QEpWtfE43t58QM4ve4Ntu
            source_type: api_record
            title: 维基数据：王泰（Q16906110）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906110
            external_identifier: Q16906110
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:52.143Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B3%B0_(%E4%B8%9C%E6%99%8B)
        - id: cs_4iMGQCN6JToEHigZKD2AEQ
          claim_id: c_icX8KDjFQFLVL8P4XhGYb1
          source_id: s_znDb1W6CuFcqXPGEjFWYro
          stance: supports
          locator: 条文：之子/之女
          quotation: 王泰（{{bd|？||397年||}}），琅邪临沂人，王导的曾孙，王廞的长子，王华的哥哥
          interpretation_note: null
          source:
            id: s_znDb1W6CuFcqXPGEjFWYro
            source_type: website
            title: 中文维基百科：王泰 (东晋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B3%B0_(%E4%B8%9C%E6%99%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:44.641Z
            metadata_json: null
        - id: cs_LNf46EEX4zxCyXLpYwMjSV
          claim_id: c_icX8KDjFQFLVL8P4XhGYb1
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王廞 → 王泰
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
        - id: cs_HxkprhTmzfu9K54RzXTogG
          claim_id: c_icX8KDjFQFLVL8P4XhGYb1
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王廞 → 王泰
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
        - id: cs_p4vQ6SMWNqoseEdzdgB3ud
          claim_id: c_icX8KDjFQFLVL8P4XhGYb1
          source_id: s_a9dzrCdvBUL4FHxtH1HxnJ
          stance: supports
          locator: 条文：之子/之女
          quotation: 王泰，琅邪临沂人，王导的曾孙，王廞的长子，王华的哥哥
          interpretation_note: null
          source:
            id: s_a9dzrCdvBUL4FHxtH1HxnJ
            source_type: website
            title: 中文维基百科：王泰 (东晋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B3%B0_(%E4%B8%9C%E6%99%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:36.158Z
            metadata_json: null
      object_person:
        id: p_UW4xRPK7vkbB2saX4K7G3Q
        status: active
        display_name: 王廞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王泰（卒于397年），史料所见人物。本项目依据《王泰》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 397年 | accepted |
| name.primary | 王泰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UW4xRPK7vkbB2saX4K7G3Q | 王廞 | accepted |

## 外部来源

- [维基数据：王泰（Q16906110）](https://www.wikidata.org/wiki/Q16906110)
- [维基数据：王廞（Q22814780）](https://www.wikidata.org/wiki/Q22814780)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王泰 (东晋)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B3%B0_(%E4%B8%9C%E6%99%8B))
