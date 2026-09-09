---
schema: wang-person/v1
id: p_2XXtug6va2WPMFCPxWdQfj
status: active
merged_into: null
display_name: 王諫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AaGQPhQ3qRnmJXGhuFEAgA
        subject_person_id: p_2XXtug6va2WPMFCPxWdQfj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9ASq3ZQC3vrQ2iis2vNm8t
          claim_id: c_AaGQPhQ3qRnmJXGhuFEAgA
          source_id: s_ZGMjdhEFuor9Lp4qyu4jbv
          stance: supports
          locator: CBDB:573996
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573996）
          source: &a1
            id: s_ZGMjdhEFuor9Lp4qyu4jbv
            source_type: api_record
            title: 中国历代人物传记资料库：王諫（CBDB 573996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573996&o=json
            external_identifier: CBDB:573996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.910Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vv77PpSPAzWGEyg5wYc87m
        subject_person_id: p_2XXtug6va2WPMFCPxWdQfj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6ouUvUx93zXWamsW8cyz8r
          claim_id: c_vv77PpSPAzWGEyg5wYc87m
          source_id: s_ZGMjdhEFuor9Lp4qyu4jbv
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

# 王諫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王諫（CBDB 573996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573996&o=json)
