---
schema: wang-person/v1
id: p_Ma8qyX6gDoTxW9uVDG1pHP
status: active
merged_into: null
display_name: 王茂甲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JU6sUjhd4ZnNe8HrSDyu8z
        subject_person_id: p_Ma8qyX6gDoTxW9uVDG1pHP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂甲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Rm99Ve6C1sHUDStdACKoro
          claim_id: c_JU6sUjhd4ZnNe8HrSDyu8z
          source_id: s_vxA8VHkk6Sn4VTc1QCaPUZ
          stance: supports
          locator: CBDB:640086
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640086）
          source: &a1
            id: s_vxA8VHkk6Sn4VTc1QCaPUZ
            source_type: api_record
            title: 中国历代人物传记资料库：王茂甲（CBDB 640086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640086&o=json
            external_identifier: CBDB:640086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.147Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yxBXq9mG92o6pRh71Losfy
        subject_person_id: p_Ma8qyX6gDoTxW9uVDG1pHP
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
        - id: cs_F73YwxdtWDkUsHQFGx5VMc
          claim_id: c_yxBXq9mG92o6pRh71Losfy
          source_id: s_vxA8VHkk6Sn4VTc1QCaPUZ
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

# 王茂甲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茂甲 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王茂甲（CBDB 640086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640086&o=json)
