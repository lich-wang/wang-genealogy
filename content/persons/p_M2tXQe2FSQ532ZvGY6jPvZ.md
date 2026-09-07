---
schema: wang-person/v1
id: p_M2tXQe2FSQ532ZvGY6jPvZ
status: active
merged_into: null
display_name: 王穉
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YM4Sa9SrVGQr4y620XqjTS
        subject_person_id: p_M2tXQe2FSQ532ZvGY6jPvZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穉，史料所见人物。本项目依据《王穉》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_SO8GxtLnanUhYgbOn6Qx6r
          claim_id: c_YM4Sa9SrVGQr4y620XqjTS
          source_id: s_ff1ysNrkADvCttYkh3AoQA
          stance: supports
          locator: Q56600341
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_ff1ysNrkADvCttYkh3AoQA
            source_type: api_record
            title: 维基数据：王穉（Q56600341）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q56600341
            external_identifier: Q56600341
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:09.907Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pJ6cR4LwvaGb6NKdH3sxjK
        subject_person_id: p_M2tXQe2FSQ532ZvGY6jPvZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穉
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NZw3CrmJ83ESJzJQkxdnaQ
          claim_id: c_pJ6cR4LwvaGb6NKdH3sxjK
          source_id: s_ff1ysNrkADvCttYkh3AoQA
          stance: supports
          locator: Q56600341
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HfKPbtsHVcJRxVZGsLv2t2
        subject_person_id: p_1PVoebznd6BJv1usnGBu3r
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M2tXQe2FSQ532ZvGY6jPvZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_QakRP6mCYgcKKP5uSDk5JV
          claim_id: c_HfKPbtsHVcJRxVZGsLv2t2
          source_id: s_KsjikQPijPc5BkNwV19tro
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_KsjikQPijPc5BkNwV19tro
            source_type: api_record
            title: 维基数据：王暕（Q11572875）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572875
            external_identifier: Q11572875
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:58.732Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9A%95
        - id: cs_7WE1Fgygrvk42ai3iHGM8e
          claim_id: c_HfKPbtsHVcJRxVZGsLv2t2
          source_id: s_ff1ysNrkADvCttYkh3AoQA
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ff1ysNrkADvCttYkh3AoQA
            source_type: api_record
            title: 维基数据：王穉（Q56600341）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q56600341
            external_identifier: Q56600341
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:09.907Z
            metadata_json: null
        - id: cs_gLuDu2QkAtaJqYCwGc1Ctv
          claim_id: c_HfKPbtsHVcJRxVZGsLv2t2
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王暕 → 王穉
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
        - id: cs_4nWcFfh3AQiTqMgK8y5EdL
          claim_id: c_HfKPbtsHVcJRxVZGsLv2t2
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王暕 → 王穉
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
        id: p_1PVoebznd6BJv1usnGBu3r
        status: active
        display_name: 王暕
        merged_into_person_id: null
  children:
    - claim:
        id: c_qefCwcFWnUbj6SfYXk7Fwm
        subject_person_id: p_M2tXQe2FSQ532ZvGY6jPvZ
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_jnXatZdH5LDv2DNn2PU5Tw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d6KPTXtrPsNw7Q2eBd29LR
          claim_id: c_qefCwcFWnUbj6SfYXk7Fwm
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 王穉 → 王诵
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
      object_person:
        id: p_jnXatZdH5LDv2DNn2PU5Tw
        status: active
        display_name: 王诵
        merged_into_person_id: null
    - claim:
        id: c_QNJ1KcPwaZkwEey4Fz8FuF
        subject_person_id: p_M2tXQe2FSQ532ZvGY6jPvZ
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_PGJAWHxYxJtx3aVz4EvhUR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XJ7SWE474H9aQJJLkeezBy
          claim_id: c_QNJ1KcPwaZkwEey4Fz8FuF
          source_id: s_4YiYqGAZYxnkGyrNE6Vdx8
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_4YiYqGAZYxnkGyrNE6Vdx8
            source_type: api_record
            title: 维基数据：王衮（Q47182743）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q47182743
            external_identifier: Q47182743
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:37.088Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE
        - id: cs_u1y6E9dWkyv7z9jL9q8Tby
          claim_id: c_QNJ1KcPwaZkwEey4Fz8FuF
          source_id: s_ff1ysNrkADvCttYkh3AoQA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_ff1ysNrkADvCttYkh3AoQA
            source_type: api_record
            title: 维基数据：王穉（Q56600341）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q56600341
            external_identifier: Q56600341
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:09.907Z
            metadata_json: null
      object_person:
        id: p_PGJAWHxYxJtx3aVz4EvhUR
        status: active
        display_name: 王衮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王穉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王穉，史料所见人物。本项目依据《王穉》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王穉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1PVoebznd6BJv1usnGBu3r | 王暕 | accepted |
| children | p_jnXatZdH5LDv2DNn2PU5Tw | 王诵 | accepted |
| children | p_PGJAWHxYxJtx3aVz4EvhUR | 王衮 | accepted |

## 外部来源

- [维基数据：王衮（Q47182743）](https://www.wikidata.org/wiki/Q47182743)
- [维基数据：王暕（Q11572875）](https://www.wikidata.org/wiki/Q11572875)
- [维基数据：王穉（Q56600341）](https://www.wikidata.org/wiki/Q56600341)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
