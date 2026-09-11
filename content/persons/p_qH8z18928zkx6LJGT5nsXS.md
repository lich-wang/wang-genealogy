---
schema: wang-person/v1
id: p_qH8z18928zkx6LJGT5nsXS
status: active
merged_into: null
display_name: 王拱樞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HH6upcvroMqetNQBnEaLmK
        subject_person_id: p_qH8z18928zkx6LJGT5nsXS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱樞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PyBDM4PFj9WK4x5xitKCBT
          claim_id: c_HH6upcvroMqetNQBnEaLmK
          source_id: s_cmaCztjV66J1kycLVtnq4L
          stance: supports
          locator: CBDB:638116
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638116）
          source: &a1
            id: s_cmaCztjV66J1kycLVtnq4L
            source_type: api_record
            title: 中国历代人物传记资料库：王拱樞（CBDB 638116）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638116&o=json
            external_identifier: CBDB:638116
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.530Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Vwsx497CfGWUAfXobxkozY
        subject_person_id: p_qH8z18928zkx6LJGT5nsXS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱樞，清人物。籍贯太原，曾任訓導。（中国历代人物传记资料库 CBDB 638116）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pCi1A7QujAc_hONmBao_W_
          claim_id: c_Vwsx497CfGWUAfXobxkozY
          source_id: s_cmaCztjV66J1kycLVtnq4L
          stance: supports
          locator: CBDB:638116
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

# 王拱樞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王拱樞 | accepted |
| bio.summary | 王拱樞，清人物。籍贯太原，曾任訓導。（中国历代人物传记资料库 CBDB 638116） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王拱樞（CBDB 638116）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638116&o=json)
