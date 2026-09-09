---
schema: wang-person/v1
id: p_fVWCspCFwJnj5sBz8z7Ce4
status: active
merged_into: null
display_name: 王文美
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rU1LQ3mwrMaYY3L7UdDjyb
        subject_person_id: p_fVWCspCFwJnj5sBz8z7Ce4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文美
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TVyWn8gq1eRTkuLsmcaFYH
          claim_id: c_rU1LQ3mwrMaYY3L7UdDjyb
          source_id: s_bdDMZnsa3QCFaPp5z4CC18
          stance: supports
          locator: CBDB:316254
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（316254）
          source: &a1
            id: s_bdDMZnsa3QCFaPp5z4CC18
            source_type: api_record
            title: 中国历代人物传记资料库：王文美（CBDB 316254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316254&o=json
            external_identifier: CBDB:316254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pj64j1sQiAdqC2K9cRhnao
        subject_person_id: p_fVWCspCFwJnj5sBz8z7Ce4
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
        - id: cs_86qS3vuYD1A9YEXDnQPf7g
          claim_id: c_Pj64j1sQiAdqC2K9cRhnao
          source_id: s_bdDMZnsa3QCFaPp5z4CC18
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

# 王文美

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文美 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文美（CBDB 316254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316254&o=json)
