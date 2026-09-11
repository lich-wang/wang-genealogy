---
schema: wang-person/v1
id: p_7cwEv5UQpGKTji25F45ZAq
status: active
merged_into: null
display_name: 王處默
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JDYk2aFZwrMbHQsyrjzhhg
        subject_person_id: p_7cwEv5UQpGKTji25F45ZAq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王處默
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TbQLaddcmgPooiwE9ii8xJ
          claim_id: c_JDYk2aFZwrMbHQsyrjzhhg
          source_id: s_1iJHfEr1WCuSKPgbY22mQE
          stance: supports
          locator: CBDB:382491
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（382491）
          source: &a1
            id: s_1iJHfEr1WCuSKPgbY22mQE
            source_type: api_record
            title: 中国历代人物传记资料库：王處默（CBDB 382491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382491&o=json
            external_identifier: CBDB:382491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.804Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yNGd5DS8pHKfwGC7To6HDP
        subject_person_id: p_7cwEv5UQpGKTji25F45ZAq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王處默，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 382491）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WkBNC5hGCV7VedePj65SX6
          claim_id: c_yNGd5DS8pHKfwGC7To6HDP
          source_id: s_1iJHfEr1WCuSKPgbY22mQE
          stance: supports
          locator: CBDB:382491
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

# 王處默

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王處默 | accepted |
| bio.summary | 王處默，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 382491） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王處默（CBDB 382491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382491&o=json)
