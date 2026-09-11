---
schema: wang-person/v1
id: p_KuY4sRqZJPnwEeJd2Psi4A
status: active
merged_into: null
display_name: 王升
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RqpCopmJwAssyXz2979F95
        subject_person_id: p_KuY4sRqZJPnwEeJd2Psi4A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王升
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wA1Jwt51GhioYNM41fAAn3
          claim_id: c_RqpCopmJwAssyXz2979F95
          source_id: s_CF6UGH55qRC9Dua77wM8GL
          stance: supports
          locator: CBDB:215871
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215871）
          source: &a1
            id: s_CF6UGH55qRC9Dua77wM8GL
            source_type: api_record
            title: 中国历代人物传记资料库：王升（CBDB 215871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215871&o=json
            external_identifier: CBDB:215871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.203Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6e4M69gMp6aS4n7QsiNLsB
        subject_person_id: p_KuY4sRqZJPnwEeJd2Psi4A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王升，明人物。萬曆五年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 215871）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kUxoRwg_CjGjiwtVYlCpu5
          claim_id: c_6e4M69gMp6aS4n7QsiNLsB
          source_id: s_CF6UGH55qRC9Dua77wM8GL
          stance: supports
          locator: CBDB:215871
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

# 王升

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王升 | accepted |
| bio.summary | 王升，明人物。萬曆五年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 215871） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王升（CBDB 215871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215871&o=json)
