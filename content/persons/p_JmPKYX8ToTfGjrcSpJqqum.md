---
schema: wang-person/v1
id: p_JmPKYX8ToTfGjrcSpJqqum
status: active
merged_into: null
display_name: 王抑
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wOUfm4o4DzSg-c1BPFE1xG
        subject_person_id: p_JmPKYX8ToTfGjrcSpJqqum
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王抑，史料所见人物。本项目依据《王抑》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_T1gTr0xr79MfXt0NHylv5g
          claim_id: c_wOUfm4o4DzSg-c1BPFE1xG
          source_id: s_KJVqqBnCKBaFk1v6yBbPU4
          stance: supports
          locator: Q22814904
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_KJVqqBnCKBaFk1v6yBbPU4
            source_type: api_record
            title: 维基数据：王抑（Q22814904）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814904
            external_identifier: Q22814904
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:02.686Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dJYow9Zjv8hVv95CuHBKC6
        subject_person_id: p_JmPKYX8ToTfGjrcSpJqqum
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王抑
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gkNbvyPJ9vMYW4JTGLt23j
          claim_id: c_dJYow9Zjv8hVv95CuHBKC6
          source_id: s_KJVqqBnCKBaFk1v6yBbPU4
          stance: supports
          locator: Q22814904
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_L9KSJcGMSbhv1mrV3HJdfZ
        subject_person_id: p_ojGchAZHmRHY7mAfMcQCu4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JmPKYX8ToTfGjrcSpJqqum
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_RxvRHk5Qj8pX2EcLX9CXZQ
          claim_id: c_L9KSJcGMSbhv1mrV3HJdfZ
          source_id: s_F2EKb33rEMMM2gS8nVwxMC
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_F2EKb33rEMMM2gS8nVwxMC
            source_type: api_record
            title: 维基数据：王珣（Q15902305）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15902305
            external_identifier: Q15902305
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:46.289Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8F%A3
        - id: cs_z1ZZXMSizmRceHQ8TB9NnZ
          claim_id: c_L9KSJcGMSbhv1mrV3HJdfZ
          source_id: s_KJVqqBnCKBaFk1v6yBbPU4
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_KJVqqBnCKBaFk1v6yBbPU4
            source_type: api_record
            title: 维基数据：王抑（Q22814904）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814904
            external_identifier: Q22814904
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:02.686Z
            metadata_json: null
        - id: cs_YbgP3G7oHkfpM1qDfPbnUx
          claim_id: c_L9KSJcGMSbhv1mrV3HJdfZ
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王珣 → 王抑
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
        - id: cs_uWBbNvcg7sPQzjfCXyjQ8q
          claim_id: c_L9KSJcGMSbhv1mrV3HJdfZ
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王珣 → 王抑
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
        id: p_ojGchAZHmRHY7mAfMcQCu4
        status: active
        display_name: 王珣
        merged_into_person_id: null
  children:
    - claim:
        id: c_UAWG5nFc22fWx3RBt6c4bZ
        subject_person_id: p_JmPKYX8ToTfGjrcSpJqqum
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_UKCPmXtCJMiV3Cvg9Yu32M
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K8Ex7H9s81NoeA8fo81KqF
          claim_id: c_UAWG5nFc22fWx3RBt6c4bZ
          source_id: s_JKND23tJiCYDsGZvSfPm88
          stance: supports
          locator: 条文：之子/之女
          quotation: 王猷，字世伦，琅邪郡临沂县（今山东省临沂市）人，东晋卫将军、都督琅邪水陆军事、散骑常侍、东亭献穆侯王珣的孙子，刘宋光禄大夫、东亭侯王抑的儿子
          interpretation_note: null
          source:
            id: s_JKND23tJiCYDsGZvSfPm88
            source_type: website
            title: 中文维基百科：王猷 (刘宋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8C%B7_(%E5%88%98%E5%AE%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:47.310Z
            metadata_json: null
      object_person:
        id: p_UKCPmXtCJMiV3Cvg9Yu32M
        status: active
        display_name: 王猷
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王抑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王抑，史料所见人物。本项目依据《王抑》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王抑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ojGchAZHmRHY7mAfMcQCu4 | 王珣 | accepted |
| children | p_UKCPmXtCJMiV3Cvg9Yu32M | 王猷 | accepted |

## 外部来源

- [维基数据：王珣（Q15902305）](https://www.wikidata.org/wiki/Q15902305)
- [维基数据：王抑（Q22814904）](https://www.wikidata.org/wiki/Q22814904)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王猷 (刘宋)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8C%B7_(%E5%88%98%E5%AE%8B))
