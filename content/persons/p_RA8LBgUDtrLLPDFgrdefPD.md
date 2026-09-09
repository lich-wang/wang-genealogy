---
schema: wang-person/v1
id: p_RA8LBgUDtrLLPDFgrdefPD
status: active
merged_into: null
display_name: 王時敘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1czoVM8s3ep2LqN3cnMW2q
        subject_person_id: p_RA8LBgUDtrLLPDFgrdefPD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時敘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y6aZZK7CWPVZBNAVQ91GmN
          claim_id: c_1czoVM8s3ep2LqN3cnMW2q
          source_id: s_ZDm7j2szGiAv4Wx6S6C5W8
          stance: supports
          locator: CBDB:25588
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25588）
          source: &a1
            id: s_ZDm7j2szGiAv4Wx6S6C5W8
            source_type: api_record
            title: 中国历代人物传记资料库：王時敘（CBDB 25588）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25588&o=json
            external_identifier: CBDB:25588
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.913Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YWCxdnxDcG7MR2RBAvADv6
        subject_person_id: p_RA8LBgUDtrLLPDFgrdefPD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e5sPkhGD1LAXJkrLpj6Rzc
          claim_id: c_YWCxdnxDcG7MR2RBAvADv6
          source_id: s_ZDm7j2szGiAv4Wx6S6C5W8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王時敘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時敘 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王時敘（CBDB 25588）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25588&o=json)
