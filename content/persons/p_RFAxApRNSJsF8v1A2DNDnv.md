---
schema: wang-person/v1
id: p_RFAxApRNSJsF8v1A2DNDnv
status: active
merged_into: null
display_name: 王升之
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Prtj9PAUYaJnvjSAouu6tO
        subject_person_id: p_RFAxApRNSJsF8v1A2DNDnv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇之，南朝宋齊琅邪臨沂人，南齊侍中王延之之父，官至都官尚書（《南齊書·卷三十二·王延之傳》：父昇之，都官尚書）。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_FwVUYuA-ZNhNw_fH4ZsahT
          claim_id: c_Prtj9PAUYaJnvjSAouu6tO
          source_id: s_XbWUevDSIhmQuZ1zZr_Ved
          stance: supports
          locator: 南齊書/卷32·王升之
          quotation: null
          interpretation_note: 依正史传主列传中点名的亲属记载补写简介。
          source:
            id: s_XbWUevDSIhmQuZ1zZr_Ved
            source_type: website
            title: 维基文库：南齊書/卷32·王升之
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/南齊書/卷32
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T02:14:35.000Z
            metadata_json: null
        - id: cs_db5KNUtmBYCCAiRqngxN-q
          claim_id: c_Prtj9PAUYaJnvjSAouu6tO
          source_id: s_54TckusWZsSoGRhAq3CDxS
          stance: supports
          locator: Q22815001
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_54TckusWZsSoGRhAq3CDxS
            source_type: api_record
            title: 维基数据：王升之（Q22815001）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22815001
            external_identifier: Q22815001
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:49.354Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mUSb8928yjsJkByK125tvd
        subject_person_id: p_RFAxApRNSJsF8v1A2DNDnv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王升之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_RJYBAm2owWw4Cv7fz21qaR
          claim_id: c_mUSb8928yjsJkByK125tvd
          source_id: s_54TckusWZsSoGRhAq3CDxS
          stance: supports
          locator: Q22815001
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gms29s93EZj7z2pcJgP74o
        subject_person_id: p_PfgXZYxCc5dBQbZvBHkDAc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RFAxApRNSJsF8v1A2DNDnv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_25ZmdyrYabMTEDp5YXR9qQ
          claim_id: c_gms29s93EZj7z2pcJgP74o
          source_id: s_msG3gE3n1DSE5q3deppwMN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_msG3gE3n1DSE5q3deppwMN
            source_type: api_record
            title: 维基数据：王敬弘（Q13560629）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13560629
            external_identifier: Q13560629
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:46.209Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%95%AC%E5%BC%98
        - id: cs_9BTDqTT38iDtbKQ47Jjo8u
          claim_id: c_gms29s93EZj7z2pcJgP74o
          source_id: s_54TckusWZsSoGRhAq3CDxS
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_54TckusWZsSoGRhAq3CDxS
            source_type: api_record
            title: 维基数据：王升之（Q22815001）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22815001
            external_identifier: Q22815001
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:49.354Z
            metadata_json: null
      object_person:
        id: p_PfgXZYxCc5dBQbZvBHkDAc
        status: active
        display_name: 王敬弘
        merged_into_person_id: null
  children:
    - claim:
        id: c_BsT8EL62mKwSNZmf7fqg7q
        subject_person_id: p_RFAxApRNSJsF8v1A2DNDnv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6o39vhzwrUBUBBJTneU17s
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_J73wBfdsT3Q321HPzSDJrz
          claim_id: c_BsT8EL62mKwSNZmf7fqg7q
          source_id: s_54TckusWZsSoGRhAq3CDxS
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_54TckusWZsSoGRhAq3CDxS
            source_type: api_record
            title: 维基数据：王升之（Q22815001）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22815001
            external_identifier: Q22815001
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:49.354Z
            metadata_json: null
        - id: cs_2Smf7PJADSxVJ9tBCr2w6N
          claim_id: c_BsT8EL62mKwSNZmf7fqg7q
          source_id: s_SeRBREhkJBhdYzLDceat33
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_SeRBREhkJBhdYzLDceat33
            source_type: api_record
            title: 维基数据：王延之（Q11573058）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573058
            external_identifier: Q11573058
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:30:51.108Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6%E4%B9%8B
      object_person:
        id: p_6o39vhzwrUBUBBJTneU17s
        status: active
        display_name: 王延之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_fnegg8g16AiDQzHZTF1cKS
        subject_person_id: p_RFAxApRNSJsF8v1A2DNDnv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ECnFVPUvYxpzMpJfxqvQHK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xwzmPZQTQ92a7KnyuM1GGE
          claim_id: c_fnegg8g16AiDQzHZTF1cKS
          source_id: s_zPzun7i3uM4DfNQRFYdPkp
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 王昇之的孙子
          interpretation_note: null
          source:
            id: s_zPzun7i3uM4DfNQRFYdPkp
            source_type: website
            title: 中文维基百科：王伦之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BC%A6%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:47.591Z
            metadata_json: null
      object_person:
        id: p_ECnFVPUvYxpzMpJfxqvQHK
        status: active
        display_name: 王伦之
        merged_into_person_id: null
  other: []
---

# 王升之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昇之，南朝宋齊琅邪臨沂人，南齊侍中王延之之父，官至都官尚書（《南齊書·卷三十二·王延之傳》：父昇之，都官尚書）。 | accepted |
| name.primary | 王升之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PfgXZYxCc5dBQbZvBHkDAc | 王敬弘 | accepted |
| children | p_6o39vhzwrUBUBBJTneU17s | 王延之 | accepted |
| descendants | p_ECnFVPUvYxpzMpJfxqvQHK | 王伦之 | accepted |

## 外部来源

- [维基数据：王敬弘（Q13560629）](https://www.wikidata.org/wiki/Q13560629)
- [维基数据：王升之（Q22815001）](https://www.wikidata.org/wiki/Q22815001)
- [维基数据：王延之（Q11573058）](https://www.wikidata.org/wiki/Q11573058)
- [维基文库：南齊書/卷32·王升之](https://zh.wikisource.org/wiki/南齊書/卷32)
- [中文维基百科：王伦之](https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BC%A6%E4%B9%8B)
