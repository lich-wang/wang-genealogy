---
schema: wang-person/v1
id: p_7HgXC5tAmeo88n9QgZGgkC
status: active
merged_into: null
display_name: 王師感
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A18JwRygBKJMbazj8vKszJ
        subject_person_id: p_7HgXC5tAmeo88n9QgZGgkC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師感
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xBTxHoLp2Jong2X5RJ687h
          claim_id: c_A18JwRygBKJMbazj8vKszJ
          source_id: s_Fjx5VaP1SMhLnmauvgKod5
          stance: supports
          locator: CBDB:383605
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（383605）
          source: &a1
            id: s_Fjx5VaP1SMhLnmauvgKod5
            source_type: api_record
            title: 中国历代人物传记资料库：王師感（CBDB 383605）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383605&o=json
            external_identifier: CBDB:383605
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.849Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A9gpLcb7i2L8qG7KvJTgdG
        subject_person_id: p_7HgXC5tAmeo88n9QgZGgkC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師感，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 383605）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FV95QIVQIfLWVAqKFO0HG8
          claim_id: c_A9gpLcb7i2L8qG7KvJTgdG
          source_id: s_Fjx5VaP1SMhLnmauvgKod5
          stance: supports
          locator: CBDB:383605
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

# 王師感

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師感 | accepted |
| bio.summary | 王師感，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 383605） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師感（CBDB 383605）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383605&o=json)
