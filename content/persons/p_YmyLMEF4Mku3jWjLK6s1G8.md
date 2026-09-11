---
schema: wang-person/v1
id: p_YmyLMEF4Mku3jWjLK6s1G8
status: active
merged_into: null
display_name: 王美暢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QmqQaDXQ9WfZ4LUQw3VZhq
        subject_person_id: p_YmyLMEF4Mku3jWjLK6s1G8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王美暢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5N1H6qgMmd2cCi3MMjsvgW
          claim_id: c_QmqQaDXQ9WfZ4LUQw3VZhq
          source_id: s_tPac5hy88j5X6hfEw82vFq
          stance: supports
          locator: CBDB:468452
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（468452）
          source: &a1
            id: s_tPac5hy88j5X6hfEw82vFq
            source_type: api_record
            title: 中国历代人物传记资料库：王美暢（CBDB 468452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=468452&o=json
            external_identifier: CBDB:468452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.096Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LT4ohs23Sn9jSWdmM31AmP
        subject_person_id: p_YmyLMEF4Mku3jWjLK6s1G8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王美暢，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 468452）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LsRJXOuR40pFpxalFU0vEp
          claim_id: c_LT4ohs23Sn9jSWdmM31AmP
          source_id: s_tPac5hy88j5X6hfEw82vFq
          stance: supports
          locator: CBDB:468452
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

# 王美暢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王美暢 | accepted |
| bio.summary | 王美暢，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 468452） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王美暢（CBDB 468452）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=468452&o=json)
