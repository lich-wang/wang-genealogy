---
schema: wang-person/v1
id: p_MCUAF7MGeDKkdCSnqLi3qM
status: active
merged_into: null
display_name: 王紱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ewJWoV1edZ51xT7RRFE5Mn
        subject_person_id: p_MCUAF7MGeDKkdCSnqLi3qM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FSSgmaZ9UuPV7JYhDNgaQt
          claim_id: c_ewJWoV1edZ51xT7RRFE5Mn
          source_id: s_JnWAxZkV1dWrr3dzLJULfb
          stance: supports
          locator: CBDB:34474
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（34474）
          source: &a1
            id: s_JnWAxZkV1dWrr3dzLJULfb
            source_type: api_record
            title: 中国历代人物传记资料库：王紱（CBDB 34474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34474&o=json
            external_identifier: CBDB:34474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.083Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Sa7iBRp8oH2Bj1488Tdgbc
        subject_person_id: p_MCUAF7MGeDKkdCSnqLi3qM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1362年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6UCnwKHBs1E3qgbgoHHNBz
          claim_id: c_Sa7iBRp8oH2Bj1488Tdgbc
          source_id: s_JnWAxZkV1dWrr3dzLJULfb
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
        id: c_Gt9g31Mz3N6tFJ9e5uDy5R
        subject_person_id: p_MCUAF7MGeDKkdCSnqLi3qM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1416年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hup8yNpimbHPNW7TGsadeL
          claim_id: c_Gt9g31Mz3N6tFJ9e5uDy5R
          source_id: s_JnWAxZkV1dWrr3dzLJULfb
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
        id: c_vXkHmKXxEe4BmtMaUBaf14
        subject_person_id: p_MCUAF7MGeDKkdCSnqLi3qM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紱（1362年—1416年），明人物。籍贯無錫，身份为畫家、書法家，入仕薦舉 (保任,保舉)，曾任中書舍人。（中国历代人物传记资料库 CBDB 34474）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Te_oV1-Dt4fxCtDVd-tMtv
          claim_id: c_vXkHmKXxEe4BmtMaUBaf14
          source_id: s_JnWAxZkV1dWrr3dzLJULfb
          stance: supports
          locator: CBDB:34474
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

# 王紱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紱 | accepted |
| birth.date | 1362年 | accepted |
| death.date | 1416年 | accepted |
| bio.summary | 王紱（1362年—1416年），明人物。籍贯無錫，身份为畫家、書法家，入仕薦舉 (保任,保舉)，曾任中書舍人。（中国历代人物传记资料库 CBDB 34474） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紱（CBDB 34474）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34474&o=json)
