---
schema: wang-person/v1
id: p_UQymP1iwuUEC5vJ9H6kMND
status: active
merged_into: null
display_name: 王榮華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2JGH5Qjw1c4zMGGHotnAMe
        subject_person_id: p_UQymP1iwuUEC5vJ9H6kMND
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qnA5E6s2NyDfsucXzgCzvU
          claim_id: c_2JGH5Qjw1c4zMGGHotnAMe
          source_id: s_xz9VJhA5LDKWVhvGqCoNMh
          stance: supports
          locator: CBDB:69411
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69411）
          source: &a1
            id: s_xz9VJhA5LDKWVhvGqCoNMh
            source_type: api_record
            title: 中国历代人物传记资料库：王榮華（CBDB 69411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69411&o=json
            external_identifier: CBDB:69411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.119Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_oAePaLozfeqKStrzN8ke69
        subject_person_id: p_UQymP1iwuUEC5vJ9H6kMND
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1862年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mkcQ71xLe1XyVFTAEBjhq1
          claim_id: c_oAePaLozfeqKStrzN8ke69
          source_id: s_xz9VJhA5LDKWVhvGqCoNMh
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
        id: c_qooB9p29ddNNkDsTbKmfiA
        subject_person_id: p_UQymP1iwuUEC5vJ9H6kMND
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮華（卒于1862年），清人物。籍贯湘潭。（中国历代人物传记资料库 CBDB 69411）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LYhuh6pYU8POwfm82Dml_S
          claim_id: c_qooB9p29ddNNkDsTbKmfiA
          source_id: s_xz9VJhA5LDKWVhvGqCoNMh
          stance: supports
          locator: CBDB:69411
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

# 王榮華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮華 | accepted |
| death.date | 1862年 | accepted |
| bio.summary | 王榮華（卒于1862年），清人物。籍贯湘潭。（中国历代人物传记资料库 CBDB 69411） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王榮華（CBDB 69411）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69411&o=json)
