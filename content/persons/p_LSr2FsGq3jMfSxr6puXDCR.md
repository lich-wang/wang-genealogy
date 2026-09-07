---
schema: wang-person/v1
id: p_LSr2FsGq3jMfSxr6puXDCR
status: active
merged_into: null
display_name: 王琛
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JaTXgvNzLZDbmdgmp1EzZY
        subject_person_id: p_LSr2FsGq3jMfSxr6puXDCR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琛，史料所见人物。本项目依据《王琛》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BfqFmVG43iE5MMkSE77sTc
          claim_id: c_JaTXgvNzLZDbmdgmp1EzZY
          source_id: s_wxS2wnZsRoxd2eKTrDMVs9
          stance: supports
          locator: Q22814923
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_wxS2wnZsRoxd2eKTrDMVs9
            source_type: api_record
            title: 维基数据：王琛（Q22814923）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814923
            external_identifier: Q22814923
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:48.145Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SDakGZLg5doFbJhfVVWNiH
        subject_person_id: p_LSr2FsGq3jMfSxr6puXDCR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琛
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ho8863zQopCUu34xk6t7um
          claim_id: c_SDakGZLg5doFbJhfVVWNiH
          source_id: s_wxS2wnZsRoxd2eKTrDMVs9
          stance: supports
          locator: Q22814923
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_x4a5FZKZg5h98vp1G6cjYu
        subject_person_id: p_DHbqGXMHDUDbi5qvE74UDS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LSr2FsGq3jMfSxr6puXDCR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_V3xcCXLndtpYpDXTxhGpb5
          claim_id: c_x4a5FZKZg5h98vp1G6cjYu
          source_id: s_3zRe6TULU1Be3ts4o7dG7u
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_3zRe6TULU1Be3ts4o7dG7u
            source_type: api_record
            title: 维基数据：王奂（Q22814768）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814768
            external_identifier: Q22814768
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:48.465Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%82
        - id: cs_FgVdYrjgSYXDoA84nJkuph
          claim_id: c_x4a5FZKZg5h98vp1G6cjYu
          source_id: s_wxS2wnZsRoxd2eKTrDMVs9
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_wxS2wnZsRoxd2eKTrDMVs9
            source_type: api_record
            title: 维基数据：王琛（Q22814923）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814923
            external_identifier: Q22814923
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:48.145Z
            metadata_json: null
      object_person:
        id: p_DHbqGXMHDUDbi5qvE74UDS
        status: active
        display_name: 王奂
        merged_into_person_id: null
  children:
    - claim:
        id: c_xj9biwghTANR5M45yNEWBt
        subject_person_id: p_LSr2FsGq3jMfSxr6puXDCR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RhztFNKY4NjCU9wusho1it
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_tCsr44sRYCfAjXGM4k7qsE
          claim_id: c_xj9biwghTANR5M45yNEWBt
          source_id: s_wxS2wnZsRoxd2eKTrDMVs9
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_wxS2wnZsRoxd2eKTrDMVs9
            source_type: api_record
            title: 维基数据：王琛（Q22814923）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814923
            external_identifier: Q22814923
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:48.145Z
            metadata_json: null
        - id: cs_e9oeQoGU5MbTwEYsjsyVmB
          claim_id: c_xj9biwghTANR5M45yNEWBt
          source_id: s_sEwGyjct8Du6MKHAr73uNu
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_sEwGyjct8Du6MKHAr73uNu
            source_type: api_record
            title: 维基数据：王翊（Q22079108）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22079108
            external_identifier: Q22079108
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:30:58.603Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BF%8A_(%E5%8D%97%E5%8C%97%E6%9C%9D)
      object_person:
        id: p_RhztFNKY4NjCU9wusho1it
        status: active
        display_name: 王翊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王琛，史料所见人物。本项目依据《王琛》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王琛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DHbqGXMHDUDbi5qvE74UDS | 王奂 | accepted |
| children | p_RhztFNKY4NjCU9wusho1it | 王翊 | accepted |

## 外部来源

- [维基数据：王琛（Q22814923）](https://www.wikidata.org/wiki/Q22814923)
- [维基数据：王奂（Q22814768）](https://www.wikidata.org/wiki/Q22814768)
- [维基数据：王翊（Q22079108）](https://www.wikidata.org/wiki/Q22079108)
