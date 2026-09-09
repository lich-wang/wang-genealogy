---
schema: wang-person/v1
id: p_V5Z6bC9P1YiqepVeP78NQA
status: active
merged_into: null
display_name: 王惟中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KpULz4gaLcgxwBobfADSec
        subject_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PdRM4FZnf6eHBMaAKp51na
          claim_id: c_KpULz4gaLcgxwBobfADSec
          source_id: s_CSGknEjdBsBVTNawoU8C1V
          stance: supports
          locator: CBDB:203400
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203400）
          source: &a1
            id: s_CSGknEjdBsBVTNawoU8C1V
            source_type: api_record
            title: 中国历代人物传记资料库：王惟中（CBDB 203400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203400&o=json
            external_identifier: CBDB:203400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.784Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GbB21KdXtVSNauoTT9a9gr
        subject_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1511年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4oipRHyq3TGFH2BNNupZKh
          claim_id: c_GbB21KdXtVSNauoTT9a9gr
          source_id: s_CSGknEjdBsBVTNawoU8C1V
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_54BwuK8ToLjyHe6SXa9CFP
        subject_person_id: p_V5Z6bC9P1YiqepVeP78NQA
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
        - id: cs_hNT4e2jCENQa9QrcMSSCp5
          claim_id: c_54BwuK8ToLjyHe6SXa9CFP
          source_id: s_CSGknEjdBsBVTNawoU8C1V
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

# 王惟中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟中 | accepted |
| birth.date | 1511年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惟中（CBDB 203400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203400&o=json)
