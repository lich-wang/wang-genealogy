---
schema: wang-person/v1
id: p_3gBffuLRk3i9rwNKT4yAsx
status: active
merged_into: null
display_name: 王播
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BBycA4dYu4tqzGxe4WB7Rh
        subject_person_id: p_3gBffuLRk3i9rwNKT4yAsx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王播
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pKjQAL4JZzfEBDYD6RQ71o
          claim_id: c_BBycA4dYu4tqzGxe4WB7Rh
          source_id: s_N6bQ2KKFvMm4K5AsNUaeam
          stance: supports
          locator: CBDB:537448
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（537448）
          source: &a1
            id: s_N6bQ2KKFvMm4K5AsNUaeam
            source_type: api_record
            title: 中国历代人物传记资料库：王播（CBDB 537448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=537448&o=json
            external_identifier: CBDB:537448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.418Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gvwC3b13sGxFcT8gWwe1Au
        subject_person_id: p_3gBffuLRk3i9rwNKT4yAsx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王播，宋人物。入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 537448）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nsrgIupiOe5Ej5NLhrjg7U
          claim_id: c_gvwC3b13sGxFcT8gWwe1Au
          source_id: s_N6bQ2KKFvMm4K5AsNUaeam
          stance: supports
          locator: CBDB:537448
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

# 王播

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王播 | accepted |
| bio.summary | 王播，宋人物。入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 537448） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王播（CBDB 537448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=537448&o=json)
