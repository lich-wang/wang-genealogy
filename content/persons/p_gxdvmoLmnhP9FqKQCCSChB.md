---
schema: wang-person/v1
id: p_gxdvmoLmnhP9FqKQCCSChB
status: active
merged_into: null
display_name: 王時用
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QFftByPSV8riMMPQqKWcCi
        subject_person_id: p_gxdvmoLmnhP9FqKQCCSChB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Cx9Ujm23BrP87PtAoXg8mp
          claim_id: c_QFftByPSV8riMMPQqKWcCi
          source_id: s_9t3bGfZU4N9mBjSDCXEAB5
          stance: supports
          locator: CBDB:287088
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287088）
          source: &a1
            id: s_9t3bGfZU4N9mBjSDCXEAB5
            source_type: api_record
            title: 中国历代人物传记资料库：王時用（CBDB 287088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287088&o=json
            external_identifier: CBDB:287088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.251Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3T9qvymiL2zAd9WjqhLnUP
        subject_person_id: p_gxdvmoLmnhP9FqKQCCSChB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時用，明人物。永樂十年進士，籍贯南康。（中国历代人物传记资料库 CBDB 287088）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R6OOA_rEgMJPoJ07QMcREQ
          claim_id: c_3T9qvymiL2zAd9WjqhLnUP
          source_id: s_9t3bGfZU4N9mBjSDCXEAB5
          stance: supports
          locator: CBDB:287088
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

# 王時用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時用 | accepted |
| bio.summary | 王時用，明人物。永樂十年進士，籍贯南康。（中国历代人物传记资料库 CBDB 287088） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王時用（CBDB 287088）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287088&o=json)
