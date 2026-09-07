---
schema: wang-person/v1
id: p_FqRJZ4FbxNLE8WDCkdUSH2
status: active
merged_into: null
display_name: 王商
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SjKuzMPeFg3Kw5WmAfdkzJ
        subject_person_id: p_FqRJZ4FbxNLE8WDCkdUSH2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王商（？—前12年），字子夏，魏郡元城人，是西漢外戚、大臣，與兄弟王譚、王立、王根、王逢時並稱五侯。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zovZjvuqtfbtMPSbNL1Hyx
          claim_id: c_SjKuzMPeFg3Kw5WmAfdkzJ
          source_id: s_ApqA989VRm2S3sbBDZEvi3
          stance: supports
          locator: 导言
          quotation: 西汉外戚、大臣
          interpretation_note: 据人物条目导言概括生卒、籍贯与身份。
          source:
            id: s_ApqA989VRm2S3sbBDZEvi3
            source_type: website
            title: 中文维基百科：王商（成都侯）
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%95%86_(%E6%88%90%E9%83%BD%E4%BE%AF)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T13:35:26.936Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q3pCVebs8MPPiKFYBk6FtX
        subject_person_id: p_FqRJZ4FbxNLE8WDCkdUSH2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王商
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vCFtJNBDnsyVvH59ZKQMwW
          claim_id: c_Q3pCVebs8MPPiKFYBk6FtX
          source_id: s_uRpXdSenKULArGYDHEPuKM
          stance: supports
          locator: Q2656722
          quotation: null
          interpretation_note: null
          source:
            id: s_uRpXdSenKULArGYDHEPuKM
            source_type: api_record
            title: 维基数据：王商（Q2656722）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2656722
            external_identifier: Q2656722
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:44.220Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%95%86_(%E6%88%90%E9%83%BD%E4%BE%AF)
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qfb9Wu2P89dLUiSuhvUohj
        subject_person_id: p_xN7tAHKk6W68mdWgNxHCZz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FqRJZ4FbxNLE8WDCkdUSH2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_RYv3NmuDpsx6TLQEPMMTu4
          claim_id: c_qfb9Wu2P89dLUiSuhvUohj
          source_id: s_6FVNxhGNZGZenpLdtfzxFq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_6FVNxhGNZGZenpLdtfzxFq
            source_type: api_record
            title: 維基數據：王禁（Q2979420）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2979420
            external_identifier: Q2979420
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:27.787Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A6%81
        - id: cs_6bksEyLRCa55MjxPsobYhJ
          claim_id: c_qfb9Wu2P89dLUiSuhvUohj
          source_id: s_uRpXdSenKULArGYDHEPuKM
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_uRpXdSenKULArGYDHEPuKM
            source_type: api_record
            title: 维基数据：王商（Q2656722）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2656722
            external_identifier: Q2656722
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:44.220Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%95%86_(%E6%88%90%E9%83%BD%E4%BE%AF)
      object_person:
        id: p_xN7tAHKk6W68mdWgNxHCZz
        status: active
        display_name: 王禁
        merged_into_person_id: null
  children:
    - claim:
        id: c_2xczfMP8gfMBY1wjsP5F39
        subject_person_id: p_FqRJZ4FbxNLE8WDCkdUSH2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L84jn2bobEqW6DPu32c5vg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_DLtEPniTdKU8dpNgDxKjo1
          claim_id: c_2xczfMP8gfMBY1wjsP5F39
          source_id: s_uRpXdSenKULArGYDHEPuKM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_uRpXdSenKULArGYDHEPuKM
            source_type: api_record
            title: 维基数据：王商（Q2656722）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2656722
            external_identifier: Q2656722
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:44.220Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%95%86_(%E6%88%90%E9%83%BD%E4%BE%AF)
        - id: cs_YhCqp4AeURdFwe4EfYxy9U
          claim_id: c_2xczfMP8gfMBY1wjsP5F39
          source_id: s_e3TcvhZK4GEeRDZ93ML51A
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_e3TcvhZK4GEeRDZ93ML51A
            source_type: api_record
            title: 维基数据：王邑（Q11573232）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573232
            external_identifier: Q11573232
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:19.655Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%82%91_(%E6%96%B0%E6%9C%9D)
      object_person:
        id: p_L84jn2bobEqW6DPu32c5vg
        status: active
        display_name: 王邑
        merged_into_person_id: null
    - claim:
        id: c_G63EKCfUfL4EBYpR9Avfqg
        subject_person_id: p_FqRJZ4FbxNLE8WDCkdUSH2
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_g2sQw7oP694pyJYYDNMCo3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_833c3HEeP3Ay9xCrJn43Za
          claim_id: c_G63EKCfUfL4EBYpR9Avfqg
          source_id: s_668NHgQQtC1Eo5Picquk9u
          stance: supports
          locator: 条文：之子/之女
          quotation: 王奇{{BD|？||10年|}}，新朝宗室，王莽五叔成都景成侯王商之子，成都侯王况、隆信公王邑的弟弟
          interpretation_note: null
          source:
            id: s_668NHgQQtC1Eo5Picquk9u
            source_type: website
            title: 中文维基百科：王奇 (新朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%87_(%E6%96%B0%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:56.902Z
            metadata_json: null
        - id: cs_2JajeRpF8ajKt7XBPKsnkN
          claim_id: c_G63EKCfUfL4EBYpR9Avfqg
          source_id: s_T4KwGm2pGnGDYEC4M7BafK
          stance: supports
          locator: 条文：之子/之女
          quotation: 王奇，新朝宗室，王莽五叔成都景成侯王商之子，成都侯王况、隆信公王邑的弟弟
          interpretation_note: null
          source:
            id: s_T4KwGm2pGnGDYEC4M7BafK
            source_type: website
            title: 中文维基百科：王奇 (新朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%87_(%E6%96%B0%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:09.161Z
            metadata_json: null
      object_person:
        id: p_g2sQw7oP694pyJYYDNMCo3
        status: active
        display_name: 王奇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王商

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王商（？—前12年），字子夏，魏郡元城人，是西漢外戚、大臣，與兄弟王譚、王立、王根、王逢時並稱五侯。 | accepted |
| name.primary | 王商 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xN7tAHKk6W68mdWgNxHCZz | 王禁 | accepted |
| children | p_L84jn2bobEqW6DPu32c5vg | 王邑 | accepted |
| children | p_g2sQw7oP694pyJYYDNMCo3 | 王奇 | accepted |

## 外部来源

- [维基数据：王商（Q2656722）](https://www.wikidata.org/wiki/Q2656722)
- [维基数据：王邑（Q11573232）](https://www.wikidata.org/wiki/Q11573232)
- [維基數據：王禁（Q2979420）](https://www.wikidata.org/wiki/Q2979420)
- [中文维基百科：王奇 (新朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%87_(%E6%96%B0%E6%9C%9D))
- [中文维基百科：王商（成都侯）](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%95%86_(%E6%88%90%E9%83%BD%E4%BE%AF))
