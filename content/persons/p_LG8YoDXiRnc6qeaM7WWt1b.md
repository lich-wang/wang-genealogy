---
schema: wang-person/v1
id: p_LG8YoDXiRnc6qeaM7WWt1b
status: active
merged_into: null
display_name: 王雄
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XEx6MiI8kMVpNO197kphzN
        subject_person_id: p_LG8YoDXiRnc6qeaM7WWt1b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雄，史料所见人物。本项目依据《王雄》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_IWUoMkf-M-VXYDUV8-dXIv
          claim_id: c_XEx6MiI8kMVpNO197kphzN
          source_id: s_7e9JNdDEAeud4LTuyM2xyw
          stance: supports
          locator: Q5364171
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_7e9JNdDEAeud4LTuyM2xyw
            source_type: api_record
            title: 维基数据：王雄（Q5364171）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q5364171
            external_identifier: Q5364171
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:08.333Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9B%84_(%E4%B8%89%E5%9B%BD)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UQNDvcKmyheWXALrr75GP8
        subject_person_id: p_LG8YoDXiRnc6qeaM7WWt1b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雄
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_upokHtc3z7YLCNapLrKbuy
          claim_id: c_UQNDvcKmyheWXALrr75GP8
          source_id: s_7e9JNdDEAeud4LTuyM2xyw
          stance: supports
          locator: Q5364171
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_BQP8Q6fDa3FXSmTM1wz7b5
        subject_person_id: p_LG8YoDXiRnc6qeaM7WWt1b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F2YtkguWYzwWiDeuf3FweW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5CXFjxQWVXHbDA1qZTmLVf
          claim_id: c_BQP8Q6fDa3FXSmTM1wz7b5
          source_id: s_G4cP9j9Npyjz3dB7Zo3SwF
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_G4cP9j9Npyjz3dB7Zo3SwF
            source_type: api_record
            title: 維基數據：王乂（Q22814893）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814893
            external_identifier: Q22814893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:50.172Z
            metadata_json: null
        - id: cs_4A6AZcCwQqHBCBQZXiNBv9
          claim_id: c_BQP8Q6fDa3FXSmTM1wz7b5
          source_id: s_7e9JNdDEAeud4LTuyM2xyw
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7e9JNdDEAeud4LTuyM2xyw
            source_type: api_record
            title: 维基数据：王雄（Q5364171）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q5364171
            external_identifier: Q5364171
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:08.333Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9B%84_(%E4%B8%89%E5%9B%BD)
      object_person:
        id: p_F2YtkguWYzwWiDeuf3FweW
        status: active
        display_name: 王乂
        merged_into_person_id: null
    - claim:
        id: c_ZEGbajtFFfCEGL9fGWFgZi
        subject_person_id: p_LG8YoDXiRnc6qeaM7WWt1b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yBeG9nsoxKrQMEsuV6rHRj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Xm7m7JPEVCAFYBfC1VAJJg
          claim_id: c_ZEGbajtFFfCEGL9fGWFgZi
          source_id: s_7e9JNdDEAeud4LTuyM2xyw
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7e9JNdDEAeud4LTuyM2xyw
            source_type: api_record
            title: 维基数据：王雄（Q5364171）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q5364171
            external_identifier: Q5364171
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:08.333Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9B%84_(%E4%B8%89%E5%9B%BD)
        - id: cs_8s8ogaLFM3wtscrboMqten
          claim_id: c_ZEGbajtFFfCEGL9fGWFgZi
          source_id: s_N5L7uU1FpU8s8LjWSjgh8R
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_N5L7uU1FpU8s8LjWSjgh8R
            source_type: api_record
            title: 维基数据：王浑（Q22814894）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814894
            external_identifier: Q22814894
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:54.551Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B5%91_(%E8%B4%9E%E9%99%B5%E4%BA%AD%E4%BE%AF)
      object_person:
        id: p_yBeG9nsoxKrQMEsuV6rHRj
        status: active
        display_name: 王浑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_c89caC2swA7kaRdcKG93PN
        subject_person_id: p_LG8YoDXiRnc6qeaM7WWt1b
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_y8DBtZG7ASfGegNGeXNqD4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XEyW2BYnXQhSWqDQ4Skshs
          claim_id: c_c89caC2swA7kaRdcKG93PN
          source_id: s_aVfP77Ejt5xUCmZ7ddwDSH
          stance: supports
          locator: 条文：条文识读（祖父）（2世）
          quotation: 王雄的孙子
          interpretation_note: null
          source:
            id: s_aVfP77Ejt5xUCmZ7ddwDSH
            source_type: website
            title: 中文维基百科：王诩 (脩武县县令)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%AF%A9_(%E8%84%A9%E6%AD%A6%E5%8E%BF%E5%8E%BF%E4%BB%A4)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:56.955Z
            metadata_json: null
      object_person:
        id: p_y8DBtZG7ASfGegNGeXNqD4
        status: active
        display_name: 王诩
        merged_into_person_id: null
  other: []
---

# 王雄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王雄，史料所见人物。本项目依据《王雄》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王雄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_F2YtkguWYzwWiDeuf3FweW | 王乂 | accepted |
| children | p_yBeG9nsoxKrQMEsuV6rHRj | 王浑 | accepted |
| descendants | p_y8DBtZG7ASfGegNGeXNqD4 | 王诩 | accepted |

## 外部来源

- [维基数据：王浑（Q22814894）](https://www.wikidata.org/wiki/Q22814894)
- [维基数据：王雄（Q5364171）](https://www.wikidata.org/wiki/Q5364171)
- [維基數據：王乂（Q22814893）](https://www.wikidata.org/wiki/Q22814893)
- [中文维基百科：王诩 (脩武县县令)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%AF%A9_(%E8%84%A9%E6%AD%A6%E5%8E%BF%E5%8E%BF%E4%BB%A4))
