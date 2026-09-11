---
schema: wang-person/v1
id: p_7QH7D77Z7fF2CVLTPWTrSn
status: active
merged_into: null
display_name: 王葵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JeG1sBs8S97DvjaQR7PEFS
        subject_person_id: p_7QH7D77Z7fF2CVLTPWTrSn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VjWeYoQrFwpzGMkPPRNqZ1
          claim_id: c_JeG1sBs8S97DvjaQR7PEFS
          source_id: s_M9MJ3bnJvpXd6f3TDAQgZ7
          stance: supports
          locator: CBDB:480404
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（480404）
          source: &a1
            id: s_M9MJ3bnJvpXd6f3TDAQgZ7
            source_type: api_record
            title: 中国历代人物传记资料库：王葵（CBDB 480404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480404&o=json
            external_identifier: CBDB:480404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.641Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X7gqE7dfoeu8QC8F65gs85
        subject_person_id: p_7QH7D77Z7fF2CVLTPWTrSn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葵，宋人物。曾任縣主簿。（中国历代人物传记资料库 CBDB 480404）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qf6c_RDqn2oU3hS-D6txS4
          claim_id: c_X7gqE7dfoeu8QC8F65gs85
          source_id: s_M9MJ3bnJvpXd6f3TDAQgZ7
          stance: supports
          locator: CBDB:480404
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

# 王葵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王葵 | accepted |
| bio.summary | 王葵，宋人物。曾任縣主簿。（中国历代人物传记资料库 CBDB 480404） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王葵（CBDB 480404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480404&o=json)
