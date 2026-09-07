---
schema: wang-person/v1
id: p_137XffjHafbGG6h3WRHoS3
status: active
merged_into: null
display_name: 王宽 (南朝)
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mcb-Z85TXfaGJOUaz8tYrq
        subject_person_id: p_137XffjHafbGG6h3WRHoS3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宽 (南朝)：王宽（？—？），琅邪郡临沂县（今山东省临沂市）人，王琳之孙，王固之子，陈废帝皇后王少姬的兄弟。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_fyaHiDUvYx3WXh90gSrLJx
          claim_id: c_mcb-Z85TXfaGJOUaz8tYrq
          source_id: s_MkiP3x5XjdW9f04ZWsBMcP
          stance: supports
          locator: 导言
          quotation: 王宽 (南朝)：王宽（？—？），琅邪郡临沂县（今山东省临沂市）人
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_MkiP3x5XjdW9f04ZWsBMcP
            source_type: website
            title: 中文维基百科：王宽 (南陈)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%BD_(%E5%8D%97%E9%99%88)
            external_identifier: Q15893164
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:31:32.727Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AcXtsR6E3kVV7NWdkcxC2E
        subject_person_id: p_137XffjHafbGG6h3WRHoS3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宽 (南朝)
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_89AbXFU9AFXej4JURXvXb8
          claim_id: c_AcXtsR6E3kVV7NWdkcxC2E
          source_id: s_zHVhrd1oSn9YHMX39iyPPd
          stance: supports
          locator: Q15893164
          quotation: null
          interpretation_note: null
          source:
            id: s_zHVhrd1oSn9YHMX39iyPPd
            source_type: api_record
            title: 维基数据：王宽 (南朝)（Q15893164）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15893164
            external_identifier: Q15893164
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:42.563Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%BD_(%E5%8D%97%E9%99%88)
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kEaEecxob6d6kLXtJa9TEQ
        subject_person_id: p_CFmP6Nj2APS6Ad8HEo5V8y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_137XffjHafbGG6h3WRHoS3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_yHfeH3VF6v6KMNKNuZmDhe
          claim_id: c_kEaEecxob6d6kLXtJa9TEQ
          source_id: s_coXXrAVhZbDB1WjuJJi7bH
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_coXXrAVhZbDB1WjuJJi7bH
            source_type: api_record
            title: 维基数据：王固（Q11572944）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572944
            external_identifier: Q11572944
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:16.881Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%9B%BA
        - id: cs_cFKjgy1DvqCJQgFFdXonPc
          claim_id: c_kEaEecxob6d6kLXtJa9TEQ
          source_id: s_zHVhrd1oSn9YHMX39iyPPd
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_zHVhrd1oSn9YHMX39iyPPd
            source_type: api_record
            title: 维基数据：王宽 (南朝)（Q15893164）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15893164
            external_identifier: Q15893164
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:42.563Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%BD_(%E5%8D%97%E9%99%88)
        - id: cs_FhXZ3oE2NS6F8nxZQ2sQiY
          claim_id: c_kEaEecxob6d6kLXtJa9TEQ
          source_id: s_8cnzZQpDTvMNQh2RMD1bfr
          stance: supports
          locator: 条文：之子/之女
          quotation: 王宽（{{bd|？||？||}}），琅邪郡临沂县（今山东省临沂市）人，王琳之孙，王固之子，陈废帝皇后王少姬的兄弟
          interpretation_note: null
          source:
            id: s_8cnzZQpDTvMNQh2RMD1bfr
            source_type: website
            title: 中文维基百科：王宽 (南陈)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%BD_(%E5%8D%97%E9%99%88)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:27.576Z
            metadata_json: null
        - id: cs_dtmVAboKfYP5EFnfXS6MRr
          claim_id: c_kEaEecxob6d6kLXtJa9TEQ
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王固 → 王宽
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
        id: p_CFmP6Nj2APS6Ad8HEo5V8y
        status: active
        display_name: 王固
        merged_into_person_id: null
  children:
    - claim:
        id: c_RH873cFecPiCneA8JfwgGM
        subject_person_id: p_137XffjHafbGG6h3WRHoS3
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_F9NsMNZTBV4XXnKf66PC8n
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yEzBEBj3VPJQwC7rJ4wZZb
          claim_id: c_RH873cFecPiCneA8JfwgGM
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王宽 → 王诲之
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
        id: p_F9NsMNZTBV4XXnKf66PC8n
        status: active
        display_name: 王诲之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_HSAaQRz2HHnihtit7Z9ktT
        subject_person_id: p_137XffjHafbGG6h3WRHoS3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dwq9QFUznBqpuUBRDrnuss
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w5cq6fWCHoPfLxsN4aWjQj
          claim_id: c_HSAaQRz2HHnihtit7Z9ktT
          source_id: s_DMNAAKjp9e4Wa5XuwGoHb7
          stance: supports
          locator: 条文：条文识读（曾孙）（3世）
          quotation: 先祖官仕江左，南陈驸马都尉王宽曾孙。
          interpretation_note: null
          source:
            id: s_DMNAAKjp9e4Wa5XuwGoHb7
            source_type: website
            title: 中文维基百科：王同皎
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%8C%E7%9A%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:53.440Z
            metadata_json: null
      object_person:
        id: p_dwq9QFUznBqpuUBRDrnuss
        status: active
        display_name: 王同皎
        merged_into_person_id: null
  other: []
---

# 王宽 (南朝)

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宽 (南朝)：王宽（？—？），琅邪郡临沂县（今山东省临沂市）人，王琳之孙，王固之子，陈废帝皇后王少姬的兄弟。 | accepted |
| name.primary | 王宽 (南朝) | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CFmP6Nj2APS6Ad8HEo5V8y | 王固 | accepted |
| children | p_F9NsMNZTBV4XXnKf66PC8n | 王诲之 | accepted |
| descendants | p_dwq9QFUznBqpuUBRDrnuss | 王同皎 | accepted |

## 外部来源

- [维基数据：王固（Q11572944）](https://www.wikidata.org/wiki/Q11572944)
- [维基数据：王宽 (南朝)（Q15893164）](https://www.wikidata.org/wiki/Q15893164)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王宽 (南陈)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%BD_(%E5%8D%97%E9%99%88))
- [中文维基百科：王同皎](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%8C%E7%9A%8E)
