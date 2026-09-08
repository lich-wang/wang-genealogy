---
schema: wang-person/v1
id: p_xsZccYFbwo9A3bucCejqjr
status: active
merged_into: null
display_name: 王穆
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KfN7pLajJ4MDRHSm8HLQsG
        subject_person_id: p_xsZccYFbwo9A3bucCejqjr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穆，明人物。CBDB 记录其籍贯记录为義烏。中国历代人物传记资料库（CBDB）以人物编号 437660 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_cCBkNDU2NDvuo1MQzEZ9Xo
          claim_id: c_KfN7pLajJ4MDRHSm8HLQsG
          source_id: s_VWbNPN944MjA4zAjMyxLAu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_VWbNPN944MjA4zAjMyxLAu
            source_type: api_record
            title: 维基数据：王穆（Q65903504）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65903504
            external_identifier: Q65903504
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:21.813Z
            metadata_json: null
        - id: cs_RJbgF34phLGRbTwcPy1B7l
          claim_id: c_KfN7pLajJ4MDRHSm8HLQsG
          source_id: s_q34Eb5wdDHBjpbUFbgvKxF
          stance: supports
          locator: CBDB:437660
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_q34Eb5wdDHBjpbUFbgvKxF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王穆（437660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437660&o=json
            external_identifier: CBDB:437660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:21.984Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8Qfmd6nG64oVJahxWchPQQ
        subject_person_id: p_xsZccYFbwo9A3bucCejqjr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穆
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_di7GCBugRkL5oBZ1U3E6tF
          claim_id: c_8Qfmd6nG64oVJahxWchPQQ
          source_id: s_VWbNPN944MjA4zAjMyxLAu
          stance: supports
          locator: Q65903504
          quotation: null
          interpretation_note: null
          source:
            id: s_VWbNPN944MjA4zAjMyxLAu
            source_type: api_record
            title: 维基数据：王穆（Q65903504）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65903504
            external_identifier: Q65903504
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:21.813Z
            metadata_json: null
        - id: cs_tShFUCncF56j75T7fQaLm3
          claim_id: c_8Qfmd6nG64oVJahxWchPQQ
          source_id: s_q34Eb5wdDHBjpbUFbgvKxF
          stance: supports
          locator: Q65903504
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VQgLJ1gEkoVNSjM953v2PA
        subject_person_id: p_ujxGmCBGatyUsmPNvx1eeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xsZccYFbwo9A3bucCejqjr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E3FNRcGg9GU6BqV2eCSr4S
          claim_id: c_VQgLJ1gEkoVNSjM953v2PA
          source_id: s_vS2t2ntyv7LmatgEDDuYin
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_vS2t2ntyv7LmatgEDDuYin
            source_type: api_record
            title: 维基数据：王绅（Q45413317）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45413317
            external_identifier: Q45413317
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:07.031Z
            metadata_json: null
        - id: cs_Ds7BDYcNFrbZH3Dvf7U6Xb
          claim_id: c_VQgLJ1gEkoVNSjM953v2PA
          source_id: s_VWbNPN944MjA4zAjMyxLAu
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_nQa7WNUG51CKA4n9wwhA63
          claim_id: c_VQgLJ1gEkoVNSjM953v2PA
          source_id: s_TRViFeuhUj6uqvpFPe1kuG
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_TRViFeuhUj6uqvpFPe1kuG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王紳（28112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28112&o=json
            external_identifier: CBDB:28112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:07.216Z
            metadata_json: null
      object_person:
        id: p_ujxGmCBGatyUsmPNvx1eeB
        status: active
        display_name: 王绅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王穆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王穆，明人物。CBDB 记录其籍贯记录为義烏。中国历代人物传记资料库（CBDB）以人物编号 437660 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王穆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ujxGmCBGatyUsmPNvx1eeB | 王绅 | accepted |

## 外部来源

- [维基数据：王穆（Q65903504）](https://www.wikidata.org/wiki/Q65903504)
- [维基数据：王绅（Q45413317）](https://www.wikidata.org/wiki/Q45413317)
- [CBDB 中国历代人物传记资料库：王穆（437660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437660&o=json)
- [CBDB 中国历代人物传记资料库：王紳（28112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28112&o=json)
