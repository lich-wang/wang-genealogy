---
schema: wang-person/v1
id: p_QQPxrWKLGryVXaU923M7Qf
status: active
merged_into: null
display_name: 王德琇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hzXUcbBd7iqtKu7uVg1tgo
        subject_person_id: p_QQPxrWKLGryVXaU923M7Qf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德琇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cqGN1AoFw8qtU9gMMUhFVJ
          claim_id: c_hzXUcbBd7iqtKu7uVg1tgo
          source_id: s_wML4nHzgz1cKSTLieXtLUL
          stance: supports
          locator: CBDB:637698
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637698）
          source: &a1
            id: s_wML4nHzgz1cKSTLieXtLUL
            source_type: api_record
            title: 中国历代人物传记资料库：王德琇（CBDB 637698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637698&o=json
            external_identifier: CBDB:637698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.396Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JyH2uyR8h1ASMG9KkgRo4y
        subject_person_id: p_QQPxrWKLGryVXaU923M7Qf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德琇，清人物。籍贯臨汾，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 637698）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2ibwkkruhxqLrb9p6pIYeO
          claim_id: c_JyH2uyR8h1ASMG9KkgRo4y
          source_id: s_wML4nHzgz1cKSTLieXtLUL
          stance: supports
          locator: CBDB:637698
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

# 王德琇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德琇 | accepted |
| bio.summary | 王德琇，清人物。籍贯臨汾，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 637698） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德琇（CBDB 637698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637698&o=json)
