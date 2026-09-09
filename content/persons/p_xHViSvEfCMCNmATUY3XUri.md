---
schema: wang-person/v1
id: p_xHViSvEfCMCNmATUY3XUri
status: active
merged_into: null
display_name: 王穎蕙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DkMuPf44GWUAK9tkmLTGCD
        subject_person_id: p_xHViSvEfCMCNmATUY3XUri
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穎蕙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W5NiMu7qbD4kpHAVE499cr
          claim_id: c_DkMuPf44GWUAK9tkmLTGCD
          source_id: s_aJZKsFd4e8GLJNLzsCvLLS
          stance: supports
          locator: CBDB:639683
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639683）
          source: &a1
            id: s_aJZKsFd4e8GLJNLzsCvLLS
            source_type: api_record
            title: 中国历代人物传记资料库：王穎蕙（CBDB 639683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639683&o=json
            external_identifier: CBDB:639683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.015Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CBLESk2XHn6WNKef45RUfi
        subject_person_id: p_xHViSvEfCMCNmATUY3XUri
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
        - id: cs_thnRLr2awZCFdoAV4sypyr
          claim_id: c_CBLESk2XHn6WNKef45RUfi
          source_id: s_aJZKsFd4e8GLJNLzsCvLLS
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

# 王穎蕙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王穎蕙 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王穎蕙（CBDB 639683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639683&o=json)
