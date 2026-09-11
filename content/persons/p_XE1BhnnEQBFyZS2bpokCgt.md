---
schema: wang-person/v1
id: p_XE1BhnnEQBFyZS2bpokCgt
status: active
merged_into: null
display_name: 王子溫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sWhuJpRC6gYAvrMyNYp61C
        subject_person_id: p_XE1BhnnEQBFyZS2bpokCgt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子溫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bbaeFP7XLgCWRSJdkWjaLK
          claim_id: c_sWhuJpRC6gYAvrMyNYp61C
          source_id: s_M6DF2Lwx6E1r5sECP98MnH
          stance: supports
          locator: CBDB:636987
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636987）
          source: &a1
            id: s_M6DF2Lwx6E1r5sECP98MnH
            source_type: api_record
            title: 中国历代人物传记资料库：王子溫（CBDB 636987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636987&o=json
            external_identifier: CBDB:636987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.306Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TqpDFrCa4yiqikFQdPGGsK
        subject_person_id: p_XE1BhnnEQBFyZS2bpokCgt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子溫，清人物。籍贯海豐，入仕鄉貢舉人，曾任訓導、知縣。（中国历代人物传记资料库 CBDB 636987）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aw2Y1FH72z8c2JbZYhIRC4
          claim_id: c_TqpDFrCa4yiqikFQdPGGsK
          source_id: s_M6DF2Lwx6E1r5sECP98MnH
          stance: supports
          locator: CBDB:636987
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

# 王子溫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子溫 | accepted |
| bio.summary | 王子溫，清人物。籍贯海豐，入仕鄉貢舉人，曾任訓導、知縣。（中国历代人物传记资料库 CBDB 636987） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子溫（CBDB 636987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636987&o=json)
