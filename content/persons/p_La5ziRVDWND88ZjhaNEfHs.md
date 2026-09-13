---
schema: wang-person/v1
id: p_La5ziRVDWND88ZjhaNEfHs
status: active
merged_into: null
display_name: 王進誠
cbdb_id: 384209
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5PtRo57h9SzEPuhPCggCnb
        subject_person_id: p_La5ziRVDWND88ZjhaNEfHs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進誠，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 384209）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ABq4VU88KfPxKKmGc6xmpV
          claim_id: c_5PtRo57h9SzEPuhPCggCnb
          source_id: s_VoyKinKzqjmd1fCRgbbd3Q
          stance: supports
          locator: CBDB:384209
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_VoyKinKzqjmd1fCRgbbd3Q
            source_type: api_record
            title: 中国历代人物传记资料库：王進誠（CBDB 384209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384209&o=json
            external_identifier: CBDB:384209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:21.809Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GjE82HWy8HyWLtC3Raf7zH
        subject_person_id: p_La5ziRVDWND88ZjhaNEfHs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oa9gWQpMsvLeBMW4C9Ny6e
          claim_id: c_GjE82HWy8HyWLtC3Raf7zH
          source_id: s_VoyKinKzqjmd1fCRgbbd3Q
          stance: supports
          locator: CBDB:384209
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4801-4900）｜历史性依据：CBDB 朝代 = 唐
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

# 王進誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王進誠，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 384209） | accepted |
| name.primary | 王進誠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王進誠（CBDB 384209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384209&o=json)
