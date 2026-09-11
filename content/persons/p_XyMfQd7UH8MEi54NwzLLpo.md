---
schema: wang-person/v1
id: p_XyMfQd7UH8MEi54NwzLLpo
status: active
merged_into: null
display_name: 王煚成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qne55cgLeoB7Nw5rePYJXF
        subject_person_id: p_XyMfQd7UH8MEi54NwzLLpo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煚成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5Rbf8Nrc9cuFuXncVHK2Nx
          claim_id: c_qne55cgLeoB7Nw5rePYJXF
          source_id: s_8D9zqGfKwFyiFLHxpKVi9r
          stance: supports
          locator: CBDB:639317
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639317）
          source: &a1
            id: s_8D9zqGfKwFyiFLHxpKVi9r
            source_type: api_record
            title: 中国历代人物传记资料库：王煚成（CBDB 639317）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639317&o=json
            external_identifier: CBDB:639317
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PanvV54CQ762qbqCH8y3Cp
        subject_person_id: p_XyMfQd7UH8MEi54NwzLLpo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煚成，清人物。籍贯開州，入仕廩貢生，曾任教諭、復設訓導。（中国历代人物传记资料库 CBDB 639317）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I-aRJpLUfy-9AezC6Elk_Z
          claim_id: c_PanvV54CQ762qbqCH8y3Cp
          source_id: s_8D9zqGfKwFyiFLHxpKVi9r
          stance: supports
          locator: CBDB:639317
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

# 王煚成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煚成 | accepted |
| bio.summary | 王煚成，清人物。籍贯開州，入仕廩貢生，曾任教諭、復設訓導。（中国历代人物传记资料库 CBDB 639317） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王煚成（CBDB 639317）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639317&o=json)
