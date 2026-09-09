---
schema: wang-person/v1
id: p_M9sDetT5acG1nDTAxFe7as
status: active
merged_into: null
display_name: 王之望
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CG1GRCB7zmxnJ7doE4nBRd
        subject_person_id: p_M9sDetT5acG1nDTAxFe7as
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之望
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m5BSyqsBEEJE6p9igKAcJ4
          claim_id: c_CG1GRCB7zmxnJ7doE4nBRd
          source_id: s_e5DyWRHhCLMf3Rcv5swhW7
          stance: supports
          locator: CBDB:1787
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1787）
          source: &a1
            id: s_e5DyWRHhCLMf3Rcv5swhW7
            source_type: api_record
            title: 中国历代人物传记资料库：王之望（CBDB 1787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1787&o=json
            external_identifier: CBDB:1787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.253Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QmjSAgSJBeLVfd2FpUiUMD
        subject_person_id: p_M9sDetT5acG1nDTAxFe7as
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1103年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6qQe9EJUqFJuX8gw7nPdCN
          claim_id: c_QmjSAgSJBeLVfd2FpUiUMD
          source_id: s_e5DyWRHhCLMf3Rcv5swhW7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_sL7CQPxmqCMDMYLJeVNbKe
        subject_person_id: p_M9sDetT5acG1nDTAxFe7as
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1170年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yFP9P8JR5Y3M9NNAE89SkA
          claim_id: c_sL7CQPxmqCMDMYLJeVNbKe
          source_id: s_e5DyWRHhCLMf3Rcv5swhW7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JnfMbggZLYmKxV5umA9FBo
        subject_person_id: p_M9sDetT5acG1nDTAxFe7as
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
        - id: cs_J79ntpyu5kKeNgJ6PYUD4h
          claim_id: c_JnfMbggZLYmKxV5umA9FBo
          source_id: s_e5DyWRHhCLMf3Rcv5swhW7
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

# 王之望

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之望 | accepted |
| birth.date | 1103年 | accepted |
| death.date | 1170年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之望（CBDB 1787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1787&o=json)
