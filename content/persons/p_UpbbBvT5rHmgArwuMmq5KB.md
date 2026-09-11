---
schema: wang-person/v1
id: p_UpbbBvT5rHmgArwuMmq5KB
status: active
merged_into: null
display_name: 王慧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SrRBjAPCcB9hSnAwJUbx8s
        subject_person_id: p_UpbbBvT5rHmgArwuMmq5KB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QuAxhE8zg1tP4A6tSHMPTm
          claim_id: c_SrRBjAPCcB9hSnAwJUbx8s
          source_id: s_nMuYmSjk9ZmvmvRfEiQ39v
          stance: supports
          locator: CBDB:318774
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318774）
          source: &a1
            id: s_nMuYmSjk9ZmvmvRfEiQ39v
            source_type: api_record
            title: 中国历代人物传记资料库：王慧（CBDB 318774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318774&o=json
            external_identifier: CBDB:318774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.023Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wnf9sVWNbz9fFr8xZgKmvN
        subject_person_id: p_UpbbBvT5rHmgArwuMmq5KB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慧，明人物。天順四年進士，籍贯開州。（中国历代人物传记资料库 CBDB 318774）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t7TcfswTl77-UfDegS3vAI
          claim_id: c_wnf9sVWNbz9fFr8xZgKmvN
          source_id: s_nMuYmSjk9ZmvmvRfEiQ39v
          stance: supports
          locator: CBDB:318774
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王慧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慧 | accepted |
| bio.summary | 王慧，明人物。天順四年進士，籍贯開州。（中国历代人物传记资料库 CBDB 318774） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慧（CBDB 318774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318774&o=json)
