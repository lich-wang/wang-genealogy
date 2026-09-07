---
schema: wang-person/v1
id: p_76gr6oGxYKhGFKezCL69QV
status: active
merged_into: null
display_name: 王武
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dBH29n2U0B-bEigdiXSko3
        subject_person_id: p_76gr6oGxYKhGFKezCL69QV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王武，史料所见人物。本项目依据《王武》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ZFCOTdP44Jf0c2R-SLCXGr
          claim_id: c_dBH29n2U0B-bEigdiXSko3
          source_id: s_5ZddXNAn3yHbjgovTKaiBc
          stance: supports
          locator: Q94998291
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_5ZddXNAn3yHbjgovTKaiBc
            source_type: api_record
            title: 维基数据：王武（Q94998291）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q94998291
            external_identifier: Q94998291
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:56.490Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9m5gpiMp8HV3qaBszvjsrY
        subject_person_id: p_76gr6oGxYKhGFKezCL69QV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王武
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rb6UdL7TdgXA4Y5BJ4JHYJ
          claim_id: c_9m5gpiMp8HV3qaBszvjsrY
          source_id: s_5ZddXNAn3yHbjgovTKaiBc
          stance: supports
          locator: Q94998291
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BJ4XVcAeKKp1eRVSn11YQf
        subject_person_id: p_cu518yUajb6WPKMAjP8xPC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_76gr6oGxYKhGFKezCL69QV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2P6Fe19o3EM1QPQDJWDFUh
          claim_id: c_BJ4XVcAeKKp1eRVSn11YQf
          source_id: s_3bkVPnoF9s87incRA2S8cb
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_3bkVPnoF9s87incRA2S8cb
            source_type: api_record
            title: 维基数据：王乃始（Q85882454）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q85882454
            external_identifier: Q85882454
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:52.789Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
        - id: cs_ZVfRCN9LxgKBH9aUumuwAA
          claim_id: c_BJ4XVcAeKKp1eRVSn11YQf
          source_id: s_5ZddXNAn3yHbjgovTKaiBc
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_5ZddXNAn3yHbjgovTKaiBc
            source_type: api_record
            title: 维基数据：王武（Q94998291）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q94998291
            external_identifier: Q94998291
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:56.490Z
            metadata_json: null
        - id: cs_eiBfCPNJMQ3pAh66ocXA5x
          claim_id: c_BJ4XVcAeKKp1eRVSn11YQf
          source_id: s_3V3n6FnS561BHF1iHszXCs
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 生下儿子王無故、王武，女儿王翁須
          interpretation_note: null
          source:
            id: s_3V3n6FnS561BHF1iHszXCs
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:08:17.848Z
            metadata_json: null
        - id: cs_j3sHt5LJNdUt2VkN7irfVT
          claim_id: c_BJ4XVcAeKKp1eRVSn11YQf
          source_id: s_xFEpxPkqbQhyUJoVMF2Wim
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 生下儿子王無故、王武，女儿王翁須
          interpretation_note: null
          source:
            id: s_xFEpxPkqbQhyUJoVMF2Wim
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:33.035Z
            metadata_json: null
        - id: cs_xy24b5RttB5dcCmfoHvdfC
          claim_id: c_BJ4XVcAeKKp1eRVSn11YQf
          source_id: s_GWo94xYmoW8KFnT6uJLFen
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 生下儿子王無故、王武，女儿王翁須
          interpretation_note: null
          source:
            id: s_GWo94xYmoW8KFnT6uJLFen
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:33.166Z
            metadata_json: null
        - id: cs_zSDtkHGoRqFfiBk5ZkC66e
          claim_id: c_BJ4XVcAeKKp1eRVSn11YQf
          source_id: s_rtKyLDJ9LCRdrz1SsxmZe1
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 生下儿子王無故、王武，女儿王翁須
          interpretation_note: null
          source:
            id: s_rtKyLDJ9LCRdrz1SsxmZe1
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:03.993Z
            metadata_json: null
        - id: cs_QF8SMaKMjt2eFQRkyj47BS
          claim_id: c_BJ4XVcAeKKp1eRVSn11YQf
          source_id: s_VBxZZVPo5SwVei1WsfZcSP
          stance: supports
          locator: 条文：条文识读（child）
          quotation: 生下儿子王無故、王武，女儿王翁須
          interpretation_note: null
          source:
            id: s_VBxZZVPo5SwVei1WsfZcSP
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:59.175Z
            metadata_json: null
      object_person:
        id: p_cu518yUajb6WPKMAjP8xPC
        status: active
        display_name: 王乃始
        merged_into_person_id: null
  children:
    - claim:
        id: c_bXkFeKoz1NKTKz61gNUNVF
        subject_person_id: p_76gr6oGxYKhGFKezCL69QV
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_H4dBVSCNVi3M7ea2M7Gpty
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eW9YTg4QXdJtTg9FaYS9CY
          claim_id: c_bXkFeKoz1NKTKz61gNUNVF
          source_id: s_VBxZZVPo5SwVei1WsfZcSP
          stance: supports
          locator: 条文：条文识读（child）
          quotation: 王武子王商官至丞相
          interpretation_note: null
          source:
            id: s_VBxZZVPo5SwVei1WsfZcSP
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:59.175Z
            metadata_json: null
      object_person:
        id: p_H4dBVSCNVi3M7ea2M7Gpty
        status: active
        display_name: 王商
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王武，史料所见人物。本项目依据《王武》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王武 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cu518yUajb6WPKMAjP8xPC | 王乃始 | accepted |
| children | p_H4dBVSCNVi3M7ea2M7Gpty | 王商 | accepted |

## 外部来源

- [维基数据：王乃始（Q85882454）](https://www.wikidata.org/wiki/Q85882454)
- [维基数据：王武（Q94998291）](https://www.wikidata.org/wiki/Q94998291)
- [中文维基百科：王迺始](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B)
