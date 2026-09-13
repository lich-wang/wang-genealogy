---
schema: wang-person/v1
id: p_6YXXSJdAPJLEUzeSSmAThW
status: active
merged_into: null
display_name: 盖氏
cbdb_id: 240861
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AXgdmthU35F_AZYzo-5TaB
        subject_person_id: p_6YXXSJdAPJLEUzeSSmAThW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 盖氏，明人物。正統十三年進士。（中国历代人物传记资料库 CBDB 240861）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_V-6F1fFIos9LdWSlAVqMjj
          claim_id: c_AXgdmthU35F_AZYzo-5TaB
          source_id: s_3h3nFT4G4FpBiqDaquKS13
          stance: supports
          locator: CBDB:240861
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3h3nFT4G4FpBiqDaquKS13
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：蓋氏（240861）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240861&o=json
            external_identifier: CBDB:240861
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:37.604Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rsQ6Czce6kLypXSuNf39pF
        subject_person_id: p_6YXXSJdAPJLEUzeSSmAThW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 盖氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_99YXvkz21XGVQz5NbG4ToL
          claim_id: c_rsQ6Czce6kLypXSuNf39pF
          source_id: s_k7SorsMfMYAC4VuGiSYZNF
          stance: supports
          locator: Q65843577
          quotation: null
          interpretation_note: null
          source:
            id: s_k7SorsMfMYAC4VuGiSYZNF
            source_type: api_record
            title: 维基数据：盖氏（Q65843577）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65843577
            external_identifier: Q65843577
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:37.417Z
            metadata_json: null
        - id: cs_NTuXJ2Yz6nh6Q5rQrwLpCH
          claim_id: c_rsQ6Czce6kLypXSuNf39pF
          source_id: s_3h3nFT4G4FpBiqDaquKS13
          stance: supports
          locator: Q65843577
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_d6EEpKY5r9vdQNoVdEytt5
        subject_person_id: p_6YXXSJdAPJLEUzeSSmAThW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_e622FY31yMzCRE9JqUsUSG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BAGN2fGRJb2LBafHsfJXjP
          claim_id: c_d6EEpKY5r9vdQNoVdEytt5
          source_id: s_v4Fj3fqcKevK4gkXTvKE2U
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：正統十三年進士登科錄:一卷
          source:
            id: s_v4Fj3fqcKevK4gkXTvKE2U
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王恕（62505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=62505&o=json
            external_identifier: CBDB:62505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:16.484Z
            metadata_json: null
        - id: cs_UMwLwiv5MMsb1JFjrGmK6J
          claim_id: c_d6EEpKY5r9vdQNoVdEytt5
          source_id: s_k7SorsMfMYAC4VuGiSYZNF
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_k7SorsMfMYAC4VuGiSYZNF
            source_type: api_record
            title: 维基数据：盖氏（Q65843577）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65843577
            external_identifier: Q65843577
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:37.417Z
            metadata_json: null
        - id: cs_unFgsmx4TRLo6GBPu8iobN
          claim_id: c_d6EEpKY5r9vdQNoVdEytt5
          source_id: s_y8cQS6Bt2mgqcJ8DjKNQ1m
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_y8cQS6Bt2mgqcJ8DjKNQ1m
            source_type: api_record
            title: 维基数据：王恕（Q15904547）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15904547
            external_identifier: Q15904547
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:34.053Z
            metadata_json: null
      object_person:
        id: p_e622FY31yMzCRE9JqUsUSG
        status: active
        display_name: 王恕
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 盖氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 盖氏，明人物。正統十三年進士。（中国历代人物传记资料库 CBDB 240861） | accepted |
| name.primary | 盖氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_e622FY31yMzCRE9JqUsUSG | 王恕 | accepted |

## 外部来源

- [维基数据：盖氏（Q65843577）](https://www.wikidata.org/wiki/Q65843577)
- [维基数据：王恕（Q15904547）](https://www.wikidata.org/wiki/Q15904547)
- [CBDB 中国历代人物传记资料库：蓋氏（240861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240861&o=json)
- [CBDB 中国历代人物传记资料库：王恕（62505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=62505&o=json)
