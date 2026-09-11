---
schema: wang-person/v1
id: p_HCfJQhQpKVJDdVQPgv52nH
status: active
merged_into: null
display_name: 王珫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mNyNVMTHaDp1pXvrZ5NLS3
        subject_person_id: p_HCfJQhQpKVJDdVQPgv52nH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4QV7Qaf8twfVtVyPmMnJp8
          claim_id: c_mNyNVMTHaDp1pXvrZ5NLS3
          source_id: s_8KnTUdx6mPT16Ya96Ta9Vb
          stance: supports
          locator: CBDB:478416
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（478416）
          source: &a1
            id: s_8KnTUdx6mPT16Ya96Ta9Vb
            source_type: api_record
            title: 中国历代人物传记资料库：王珫（CBDB 478416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478416&o=json
            external_identifier: CBDB:478416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.569Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oFbgeE2Keo2dN4eVTzya2D
        subject_person_id: p_HCfJQhQpKVJDdVQPgv52nH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珫，明人物。曾任判官。（中国历代人物传记资料库 CBDB 478416）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ao6jIWi7RDUkrSwabVI_sB
          claim_id: c_oFbgeE2Keo2dN4eVTzya2D
          source_id: s_8KnTUdx6mPT16Ya96Ta9Vb
          stance: supports
          locator: CBDB:478416
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

# 王珫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珫 | accepted |
| bio.summary | 王珫，明人物。曾任判官。（中国历代人物传记资料库 CBDB 478416） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珫（CBDB 478416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478416&o=json)
