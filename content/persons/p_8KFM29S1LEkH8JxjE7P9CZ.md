---
schema: wang-person/v1
id: p_8KFM29S1LEkH8JxjE7P9CZ
status: active
merged_into: null
display_name: 王洵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pujYaG821WUKVH2tpUq1nk
        subject_person_id: p_8KFM29S1LEkH8JxjE7P9CZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VUiyjDexXv9zsSf7ced5uz
          claim_id: c_pujYaG821WUKVH2tpUq1nk
          source_id: s_bMi9fet1BVaEHr9bWmxDq3
          stance: supports
          locator: CBDB:71149
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71149）
          source: &a1
            id: s_bMi9fet1BVaEHr9bWmxDq3
            source_type: api_record
            title: 中国历代人物传记资料库：王洵（CBDB 71149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71149&o=json
            external_identifier: CBDB:71149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.431Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mvqgpzXJnTW6yvmQ7XBtTX
        subject_person_id: p_8KFM29S1LEkH8JxjE7P9CZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1624年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TaqqXnCVeatBeqxbP4hQXv
          claim_id: c_mvqgpzXJnTW6yvmQ7XBtTX
          source_id: s_bMi9fet1BVaEHr9bWmxDq3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Nj2yecXBfDbZ936FDDfqno
        subject_person_id: p_8KFM29S1LEkH8JxjE7P9CZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洵（生于1624年），清人物。籍贯濰縣。（中国历代人物传记资料库 CBDB 71149）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t4e88bOgLn6LoZXRAPM1d4
          claim_id: c_Nj2yecXBfDbZ936FDDfqno
          source_id: s_bMi9fet1BVaEHr9bWmxDq3
          stance: supports
          locator: CBDB:71149
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

# 王洵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洵 | accepted |
| birth.date | 1624年 | accepted |
| bio.summary | 王洵（生于1624年），清人物。籍贯濰縣。（中国历代人物传记资料库 CBDB 71149） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王洵（CBDB 71149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71149&o=json)
