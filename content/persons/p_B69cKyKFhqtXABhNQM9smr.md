---
schema: wang-person/v1
id: p_B69cKyKFhqtXABhNQM9smr
status: active
merged_into: null
display_name: 王孫章
cbdb_id: 60769
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FvxXvboeHWiDYTDwBouF6x
        subject_person_id: p_B69cKyKFhqtXABhNQM9smr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孫章，清人物。曾任知府。（中国历代人物传记资料库 CBDB 60769）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_dfGUO7AZfOfmN6FisbRy86
          claim_id: c_FvxXvboeHWiDYTDwBouF6x
          source_id: s_W1UXyzbwd2Bu47J9C4hNxN
          stance: supports
          locator: CBDB:60769
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_W1UXyzbwd2Bu47J9C4hNxN
            source_type: api_record
            title: 中国历代人物传记资料库：王孫章（CBDB 60769）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60769&o=json
            external_identifier: CBDB:60769
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_41AjV96vQRUdSpndM5pDtV
        subject_person_id: p_B69cKyKFhqtXABhNQM9smr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孫章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AYAt6TB98orGLe28tnyjyk
          claim_id: c_41AjV96vQRUdSpndM5pDtV
          source_id: s_W1UXyzbwd2Bu47J9C4hNxN
          stance: supports
          locator: CBDB:60769
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1401-1500）｜历史性依据：CBDB 朝代 = 清
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

# 王孫章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孫章，清人物。曾任知府。（中国历代人物传记资料库 CBDB 60769） | accepted |
| name.primary | 王孫章 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孫章（CBDB 60769）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60769&o=json)
