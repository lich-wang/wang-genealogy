---
schema: wang-person/v1
id: p_RAwakqdbrfFGyaEmwXHcj3
status: active
merged_into: null
display_name: 王鈞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o4UP25KMidcd6v7pkMhZar
        subject_person_id: p_RAwakqdbrfFGyaEmwXHcj3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gK15X1mNuYNbE3EDPxsP6y
          claim_id: c_o4UP25KMidcd6v7pkMhZar
          source_id: s_1rr653d3TbYWu9cDGLr7cZ
          stance: supports
          locator: CBDB:508890
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（508890）
          source: &a1
            id: s_1rr653d3TbYWu9cDGLr7cZ
            source_type: api_record
            title: 中国历代人物传记资料库：王鈞（CBDB 508890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508890&o=json
            external_identifier: CBDB:508890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.128Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sMYNLLJhB6V57XHGj8zVww
        subject_person_id: p_RAwakqdbrfFGyaEmwXHcj3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈞，明人物。入仕監生，曾任教諭。（中国历代人物传记资料库 CBDB 508890）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-1Doaj27F3LQbNTXoAzf_T
          claim_id: c_sMYNLLJhB6V57XHGj8zVww
          source_id: s_1rr653d3TbYWu9cDGLr7cZ
          stance: supports
          locator: CBDB:508890
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

# 王鈞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鈞 | accepted |
| bio.summary | 王鈞，明人物。入仕監生，曾任教諭。（中国历代人物传记资料库 CBDB 508890） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鈞（CBDB 508890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508890&o=json)
