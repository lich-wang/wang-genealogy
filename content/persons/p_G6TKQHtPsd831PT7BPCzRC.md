---
schema: wang-person/v1
id: p_G6TKQHtPsd831PT7BPCzRC
status: active
merged_into: null
display_name: 王祖綱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VQbc1i4ecmnVwmPU84MXoK
        subject_person_id: p_G6TKQHtPsd831PT7BPCzRC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_izLJa56peMSi3aCuLLDeep
          claim_id: c_VQbc1i4ecmnVwmPU84MXoK
          source_id: s_YoNNk2TGFVYvPFdcwkDnCc
          stance: supports
          locator: CBDB:639581
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639581）
          source: &a1
            id: s_YoNNk2TGFVYvPFdcwkDnCc
            source_type: api_record
            title: 中国历代人物传记资料库：王祖綱（CBDB 639581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639581&o=json
            external_identifier: CBDB:639581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.980Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uuhLtFWkbyqDxD1ycYKDeN
        subject_person_id: p_G6TKQHtPsd831PT7BPCzRC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖綱，清人物。籍贯文安，入仕附貢生，曾任知縣。（中国历代人物传记资料库 CBDB 639581）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U0cK35H7yE53AW7WQZinOx
          claim_id: c_uuhLtFWkbyqDxD1ycYKDeN
          source_id: s_YoNNk2TGFVYvPFdcwkDnCc
          stance: supports
          locator: CBDB:639581
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

# 王祖綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祖綱 | accepted |
| bio.summary | 王祖綱，清人物。籍贯文安，入仕附貢生，曾任知縣。（中国历代人物传记资料库 CBDB 639581） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祖綱（CBDB 639581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639581&o=json)
