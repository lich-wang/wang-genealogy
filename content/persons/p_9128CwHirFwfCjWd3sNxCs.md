---
schema: wang-person/v1
id: p_9128CwHirFwfCjWd3sNxCs
status: active
merged_into: null
display_name: 王學乾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZUKUBRWqDKUhVMsAD9JTqP
        subject_person_id: p_9128CwHirFwfCjWd3sNxCs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學乾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MznhmfTt1LgvLDL8sUK9Wa
          claim_id: c_ZUKUBRWqDKUhVMsAD9JTqP
          source_id: s_mGZBivyx4G3gCVBmGV8nph
          stance: supports
          locator: CBDB:637024
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637024）
          source: &a1
            id: s_mGZBivyx4G3gCVBmGV8nph
            source_type: api_record
            title: 中国历代人物传记资料库：王學乾（CBDB 637024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637024&o=json
            external_identifier: CBDB:637024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.186Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_deBKbyNjdxfFG3v89XmnW9
        subject_person_id: p_9128CwHirFwfCjWd3sNxCs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學乾，清人物。籍贯歷城，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 637024）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4rW2ZdDOJ6z1TJndq-rvMF
          claim_id: c_deBKbyNjdxfFG3v89XmnW9
          source_id: s_mGZBivyx4G3gCVBmGV8nph
          stance: supports
          locator: CBDB:637024
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

# 王學乾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學乾 | accepted |
| bio.summary | 王學乾，清人物。籍贯歷城，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 637024） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學乾（CBDB 637024）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637024&o=json)
