---
schema: wang-person/v1
id: p_VqGkrP4BBnGATQGK49UJhp
status: active
merged_into: null
display_name: 王石經
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jDhDATNKbcsgFei66KxsF7
        subject_person_id: p_VqGkrP4BBnGATQGK49UJhp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王石經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QqVQRibVqXuLG9T7wJqQHr
          claim_id: c_jDhDATNKbcsgFei66KxsF7
          source_id: s_oppyGJLfxsXi5y7ZVD9Cyd
          stance: supports
          locator: CBDB:71481
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71481）
          source: &a1
            id: s_oppyGJLfxsXi5y7ZVD9Cyd
            source_type: api_record
            title: 中国历代人物传记资料库：王石經（CBDB 71481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71481&o=json
            external_identifier: CBDB:71481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.702Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ucvYg2jF6GG1haoWN5Ppcu
        subject_person_id: p_VqGkrP4BBnGATQGK49UJhp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1831年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fPawg4zcSNbvu3qhbBqFbC
          claim_id: c_ucvYg2jF6GG1haoWN5Ppcu
          source_id: s_oppyGJLfxsXi5y7ZVD9Cyd
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
        id: c_Rb2EqmGcqYok7b5X5oD7ye
        subject_person_id: p_VqGkrP4BBnGATQGK49UJhp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1918年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WiwnN7yTM2EDkcLaA9qENS
          claim_id: c_Rb2EqmGcqYok7b5X5oD7ye
          source_id: s_oppyGJLfxsXi5y7ZVD9Cyd
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
        id: c_1n7s142CN8QhwnfPFxdDNp
        subject_person_id: p_VqGkrP4BBnGATQGK49UJhp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王石經（1831年—1918年），中華民國人物。籍贯濰縣。（中国历代人物传记资料库 CBDB 71481）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AxZ8XQkoFNgF3iExmBA-JT
          claim_id: c_1n7s142CN8QhwnfPFxdDNp
          source_id: s_oppyGJLfxsXi5y7ZVD9Cyd
          stance: supports
          locator: CBDB:71481
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

# 王石經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王石經 | accepted |
| birth.date | 1831年 | accepted |
| death.date | 1918年 | accepted |
| bio.summary | 王石經（1831年—1918年），中華民國人物。籍贯濰縣。（中国历代人物传记资料库 CBDB 71481） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王石經（CBDB 71481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71481&o=json)
