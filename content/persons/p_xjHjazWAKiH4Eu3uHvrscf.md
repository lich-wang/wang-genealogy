---
schema: wang-person/v1
id: p_xjHjazWAKiH4Eu3uHvrscf
status: active
merged_into: null
display_name: 王莊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p3nT3XJdNXduTMScjGowM4
        subject_person_id: p_xjHjazWAKiH4Eu3uHvrscf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LE9pGxUd68VZG7Tx16Yvm5
          claim_id: c_p3nT3XJdNXduTMScjGowM4
          source_id: s_FpcaVtWgQFScTDh6fveLzX
          stance: supports
          locator: CBDB:318411
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318411）
          source: &a1
            id: s_FpcaVtWgQFScTDh6fveLzX
            source_type: api_record
            title: 中国历代人物传记资料库：王莊（CBDB 318411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318411&o=json
            external_identifier: CBDB:318411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.996Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Gx4UMjH3LVbLWxB4Rm67NR
        subject_person_id: p_xjHjazWAKiH4Eu3uHvrscf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莊，明人物。嘉靖三十二年進士，籍贯高陵。（中国历代人物传记资料库 CBDB 318411）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SYShs7Bn8HhrM1dizMF9te
          claim_id: c_Gx4UMjH3LVbLWxB4Rm67NR
          source_id: s_FpcaVtWgQFScTDh6fveLzX
          stance: supports
          locator: CBDB:318411
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

# 王莊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王莊 | accepted |
| bio.summary | 王莊，明人物。嘉靖三十二年進士，籍贯高陵。（中国历代人物传记资料库 CBDB 318411） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王莊（CBDB 318411）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318411&o=json)
