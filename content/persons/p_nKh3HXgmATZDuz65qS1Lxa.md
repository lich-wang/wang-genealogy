---
schema: wang-person/v1
id: p_nKh3HXgmATZDuz65qS1Lxa
status: active
merged_into: null
display_name: 王玉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yYJ9EbUfrK8ebnoZdNu1jF
        subject_person_id: p_nKh3HXgmATZDuz65qS1Lxa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n24R6j51BmQwpkjDm2tAH8
          claim_id: c_yYJ9EbUfrK8ebnoZdNu1jF
          source_id: s_pPCP5BjhrH1CPeRjEDtyjL
          stance: supports
          locator: CBDB:500770
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（500770）
          source: &a1
            id: s_pPCP5BjhrH1CPeRjEDtyjL
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 500770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500770&o=json
            external_identifier: CBDB:500770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.808Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cwCXsoEXJUNip4YYyqnwEJ
        subject_person_id: p_nKh3HXgmATZDuz65qS1Lxa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R1TE2Ep4dyZHECjHr8NLkG
          claim_id: c_cwCXsoEXJUNip4YYyqnwEJ
          source_id: s_pPCP5BjhrH1CPeRjEDtyjL
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

# 王玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玉（CBDB 500770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500770&o=json)
