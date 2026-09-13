---
schema: wang-person/v1
id: p_tx98ZJJ7cXHx67RAXvKkLb
status: active
merged_into: null
display_name: 王之栋
cbdb_id: 217740
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_btWuVD5QJPsWr4h6SAGatk
        subject_person_id: p_tx98ZJJ7cXHx67RAXvKkLb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之栋，明人物。萬曆五年進士，籍贯新城。（中国历代人物传记资料库 CBDB 217740）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_vFrECdFBtycNoe1gujYqrH
          claim_id: c_btWuVD5QJPsWr4h6SAGatk
          source_id: s_S179TrjZvtQ44oWkr8Pdgn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_S179TrjZvtQ44oWkr8Pdgn
            source_type: api_record
            title: 维基数据：王之栋（Q16075303）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075303
            external_identifier: Q16075303
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:56.367Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E6%A3%9F_(%E9%AB%98%E9%99%BD%E7%B8%A3%E7%9F%A5%E7%B8%A3)
        - id: cs_DmxqcKyGox9rxRJqWdyNpL
          claim_id: c_btWuVD5QJPsWr4h6SAGatk
          source_id: s_fT5FYEHVMwr7JV3Vvh1L2Q
          stance: supports
          locator: CBDB:217740
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fT5FYEHVMwr7JV3Vvh1L2Q
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王之棟（217740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217740&o=json
            external_identifier: CBDB:217740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:56.512Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_E2fVo1B6C3pYBF3hLrCMLX
        subject_person_id: p_tx98ZJJ7cXHx67RAXvKkLb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之栋
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_B7oWDRjebiE3rhhw3MuQWr
          claim_id: c_E2fVo1B6C3pYBF3hLrCMLX
          source_id: s_fT5FYEHVMwr7JV3Vvh1L2Q
          stance: supports
          locator: Q16075303
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_yawV1haDugKMomHCeSKfhA
          claim_id: c_E2fVo1B6C3pYBF3hLrCMLX
          source_id: s_S179TrjZvtQ44oWkr8Pdgn
          stance: supports
          locator: Q16075303
          quotation: null
          interpretation_note: null
          source:
            id: s_S179TrjZvtQ44oWkr8Pdgn
            source_type: api_record
            title: 维基数据：王之栋（Q16075303）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075303
            external_identifier: Q16075303
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:56.367Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E6%A3%9F_(%E9%AB%98%E9%99%BD%E7%B8%A3%E7%9F%A5%E7%B8%A3)
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ao8zSg3B4ucYBtu5W1muKP
        subject_person_id: p_2XaF6KrMwGSDeaU76DAGrz
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_tx98ZJJ7cXHx67RAXvKkLb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UuC8439in6qG5QYUQGgeGz
          claim_id: c_ao8zSg3B4ucYBtu5W1muKP
          source_id: s_8v97D6aRgy5zRhLaWeAPgN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_8v97D6aRgy5zRhLaWeAPgN
            source_type: api_record
            title: 维基数据：王重光（Q15935070）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15935070
            external_identifier: Q15935070
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:33.095Z
            metadata_json: null
        - id: cs_V7F27bVJDKWGAJghptxpRM
          claim_id: c_ao8zSg3B4ucYBtu5W1muKP
          source_id: s_S179TrjZvtQ44oWkr8Pdgn
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_S179TrjZvtQ44oWkr8Pdgn
            source_type: api_record
            title: 维基数据：王之栋（Q16075303）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075303
            external_identifier: Q16075303
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:56.367Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E6%A3%9F_(%E9%AB%98%E9%99%BD%E7%B8%A3%E7%9F%A5%E7%B8%A3)
      object_person:
        id: p_2XaF6KrMwGSDeaU76DAGrz
        status: active
        display_name: 王重光
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王之栋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王之栋，明人物。萬曆五年進士，籍贯新城。（中国历代人物传记资料库 CBDB 217740） | accepted |
| name.primary | 王之栋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2XaF6KrMwGSDeaU76DAGrz | 王重光 | accepted |

## 外部来源

- [维基数据：王之栋（Q16075303）](https://www.wikidata.org/wiki/Q16075303)
- [维基数据：王重光（Q15935070）](https://www.wikidata.org/wiki/Q15935070)
- [CBDB 中国历代人物传记资料库：王之棟（217740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217740&o=json)
