---
schema: wang-person/v1
id: p_QZLmSYXLBR1wbbF4B1gNW2
status: active
merged_into: null
display_name: 王普曜
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hETe34jvUe9wkKd3mWHwMV
        subject_person_id: p_QZLmSYXLBR1wbbF4B1gNW2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王普曜，南朝宋齊琅邪臨沂人，南齊尚書令王晏之父，官至祕書監（《南齊書·卷四十二·王晏傳》：父普曜，祕書監）。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_kTKeQNcBakpcqFEF0tLCO4
          claim_id: c_hETe34jvUe9wkKd3mWHwMV
          source_id: s_QXBmPi_zDNPRyTSD8UYBte
          stance: supports
          locator: 南齊書/卷42·王普曜
          quotation: null
          interpretation_note: 依正史传主列传中点名的亲属记载补写简介。
          source:
            id: s_QXBmPi_zDNPRyTSD8UYBte
            source_type: website
            title: 维基文库：南齊書/卷42·王普曜
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/南齊書/卷42
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T02:14:35.000Z
            metadata_json: null
        - id: cs_MnDtM2v7NTD4hGSoHo5dpn
          claim_id: c_hETe34jvUe9wkKd3mWHwMV
          source_id: s_hUNsCkQ1oziNReRQfjbfTi
          stance: supports
          locator: Q22814798
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_hUNsCkQ1oziNReRQfjbfTi
            source_type: api_record
            title: 维基数据：王普曜（Q22814798）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814798
            external_identifier: Q22814798
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:24.493Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_H79utD14RdHq3HFyeEqiw9
        subject_person_id: p_QZLmSYXLBR1wbbF4B1gNW2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王普曜
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WvNGtEQVmucs53GMEDSLNN
          claim_id: c_H79utD14RdHq3HFyeEqiw9
          source_id: s_hUNsCkQ1oziNReRQfjbfTi
          stance: supports
          locator: Q22814798
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_L5FmoQEoVSRCRBCsD2DySs
        subject_person_id: p_DqZgLkLxDg6fw1Jmrcs9bW
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_QZLmSYXLBR1wbbF4B1gNW2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JjmWbLFaE9b6dtwB6aPKzS
          claim_id: c_L5FmoQEoVSRCRBCsD2DySs
          source_id: s_hUNsCkQ1oziNReRQfjbfTi
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_hUNsCkQ1oziNReRQfjbfTi
            source_type: api_record
            title: 维基数据：王普曜（Q22814798）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814798
            external_identifier: Q22814798
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:24.493Z
            metadata_json: null
        - id: cs_RnhdCxTMMvfVegEF6DdiLr
          claim_id: c_L5FmoQEoVSRCRBCsD2DySs
          source_id: s_eDNMwzgGggzMZ5ckjXDbpj
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_eDNMwzgGggzMZ5ckjXDbpj
            source_type: api_record
            title: 维基数据：王弘之（Q13618784）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13618784
            external_identifier: Q13618784
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:11.806Z
            metadata_json: null
      object_person:
        id: p_DqZgLkLxDg6fw1Jmrcs9bW
        status: active
        display_name: 王弘之
        merged_into_person_id: null
  children:
    - claim:
        id: c_FbR2kHrcXPiiFpLoEfVHQp
        subject_person_id: p_QZLmSYXLBR1wbbF4B1gNW2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_h9YaQ72N9yujtwjvvMC9QL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M1Z1zh2GP3mktnMaMM8nYD
          claim_id: c_FbR2kHrcXPiiFpLoEfVHQp
          source_id: s_hUNsCkQ1oziNReRQfjbfTi
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_hUNsCkQ1oziNReRQfjbfTi
            source_type: api_record
            title: 维基数据：王普曜（Q22814798）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814798
            external_identifier: Q22814798
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:24.493Z
            metadata_json: null
        - id: cs_HmXZam6b87DDw43Ek1EwpD
          claim_id: c_FbR2kHrcXPiiFpLoEfVHQp
          source_id: s_z0L9OCfAiMqfMPgGi_CVrX
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_z0L9OCfAiMqfMPgGi_CVrX
            source_type: website
            title: 中文维基百科：王晏 (南朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%8F_(%E5%8D%97%E6%9C%9D)
            external_identifier: Q22814799
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person:
        id: p_h9YaQ72N9yujtwjvvMC9QL
        status: active
        display_name: 王晏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王普曜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王普曜，南朝宋齊琅邪臨沂人，南齊尚書令王晏之父，官至祕書監（《南齊書·卷四十二·王晏傳》：父普曜，祕書監）。 | accepted |
| name.primary | 王普曜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DqZgLkLxDg6fw1Jmrcs9bW | 王弘之 | accepted |
| children | p_h9YaQ72N9yujtwjvvMC9QL | 王晏 | accepted |

## 外部来源

- [维基数据：王弘之（Q13618784）](https://www.wikidata.org/wiki/Q13618784)
- [维基数据：王普曜（Q22814798）](https://www.wikidata.org/wiki/Q22814798)
- [维基文库：南齊書/卷42·王普曜](https://zh.wikisource.org/wiki/南齊書/卷42)
- [中文维基百科：王晏 (南朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%8F_(%E5%8D%97%E6%9C%9D))
