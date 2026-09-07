---
schema: wang-person/v1
id: p_vMYL28jBAvv77XxDPpHus5
status: active
merged_into: null
display_name: 王襄
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tyMeIpbCD3PhCTSx1ZRKmj
        subject_person_id: p_vMYL28jBAvv77XxDPpHus5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王襄，史料所见人物。本项目依据《王昭君》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_uKrzCOPDSgsladLxF7SDxf
          claim_id: c_tyMeIpbCD3PhCTSx1ZRKmj
          source_id: s_96Uo4yGU3W4N5poac7kmBL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_96Uo4yGU3W4N5poac7kmBL
            source_type: website
            title: 中文维基百科：王昭君
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%98%AD%E5%90%9B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:20.224Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ow9LXg6UD3mLLHTpLqByB7
        subject_person_id: p_vMYL28jBAvv77XxDPpHus5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王襄
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GhLQofqx4dNGnLBHLgDoS9
          claim_id: c_ow9LXg6UD3mLLHTpLqByB7
          source_id: s_96Uo4yGU3W4N5poac7kmBL
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_tsN8emgK1FU5PzQiATAdiC
        subject_person_id: p_vMYL28jBAvv77XxDPpHus5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BUaGJXVbdiGWZgD8yeJs5F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_r2EpQUWQd5LsMYw57dYKqF
          claim_id: c_tsN8emgK1FU5PzQiATAdiC
          source_id: s_Qo96T2Z7sjKEhUVBGR2Eur
          stance: supports
          locator: 条文：条文识读（父親）
          quotation: 出生於南郡秭歸縣的一個山村，父親名王襄。
          interpretation_note: null
          source:
            id: s_Qo96T2Z7sjKEhUVBGR2Eur
            source_type: website
            title: 中文维基百科：王昭君
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%98%AD%E5%90%9B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:21.157Z
            metadata_json: null
        - id: cs_6YDhDQS5TxDa2iwNWU8ANs
          claim_id: c_tsN8emgK1FU5PzQiATAdiC
          source_id: s_MdBqhu4dQHaQdpMqZvjyHu
          stance: supports
          locator: 条文：条文识读（父親）
          quotation: 出生於南郡秭歸縣的一個山村，父親名王襄。
          interpretation_note: null
          source:
            id: s_MdBqhu4dQHaQdpMqZvjyHu
            source_type: website
            title: 中文维基百科：王昭君
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%98%AD%E5%90%9B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:22.402Z
            metadata_json: null
        - id: cs_JWuni4gJPMvPGQrjyrrvSM
          claim_id: c_tsN8emgK1FU5PzQiATAdiC
          source_id: s_J6Ksc6wWN6z6vwAmqFqiq6
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 出生於南郡秭歸縣的一個山村，父親名王襄。
          interpretation_note: null
          source:
            id: s_J6Ksc6wWN6z6vwAmqFqiq6
            source_type: website
            title: 中文维基百科：王昭君
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%98%AD%E5%90%9B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:30.314Z
            metadata_json: null
      object_person:
        id: p_BUaGJXVbdiGWZgD8yeJs5F
        status: active
        display_name: 王昭君
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王襄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王襄，史料所见人物。本项目依据《王昭君》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王襄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BUaGJXVbdiGWZgD8yeJs5F | 王昭君 | accepted |

## 外部来源

- [中文维基百科：王昭君](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%98%AD%E5%90%9B)
