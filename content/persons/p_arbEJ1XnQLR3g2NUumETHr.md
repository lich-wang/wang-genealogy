---
schema: wang-person/v1
id: p_arbEJ1XnQLR3g2NUumETHr
status: active
merged_into: null
display_name: 王纓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ug2dQNrz6eR8bszfq9nZKp
        subject_person_id: p_arbEJ1XnQLR3g2NUumETHr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LWt8J6KLj11YMXKxbyb2mv
          claim_id: c_Ug2dQNrz6eR8bszfq9nZKp
          source_id: s_jkWUD1WYtyDmj2NkPW4Mc6
          stance: supports
          locator: CBDB:477006
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（477006）
          source: &a1
            id: s_jkWUD1WYtyDmj2NkPW4Mc6
            source_type: api_record
            title: 中国历代人物传记资料库：王纓（CBDB 477006）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=477006&o=json
            external_identifier: CBDB:477006
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.498Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GFNpJULvPJQGpH254nJd7Y
        subject_person_id: p_arbEJ1XnQLR3g2NUumETHr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纓，明人物。入仕監生，曾任吏目。（中国历代人物传记资料库 CBDB 477006）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JmzxWU6x6yNYhQbpl5hWV6
          claim_id: c_GFNpJULvPJQGpH254nJd7Y
          source_id: s_jkWUD1WYtyDmj2NkPW4Mc6
          stance: supports
          locator: CBDB:477006
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

# 王纓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王纓 | accepted |
| bio.summary | 王纓，明人物。入仕監生，曾任吏目。（中国历代人物传记资料库 CBDB 477006） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王纓（CBDB 477006）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=477006&o=json)
