---
schema: wang-person/v1
id: p_sFYaWW2pKUEY2LYXd8Em1S
status: active
merged_into: null
display_name: 王誥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jy9Lw5h9oDBzqCgYSZXr4q
        subject_person_id: p_sFYaWW2pKUEY2LYXd8Em1S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3XKZ8wtZ7PQSj69SbnqQG4
          claim_id: c_jy9Lw5h9oDBzqCgYSZXr4q
          source_id: s_9X7PB2DT5h5nznrvFbzJNX
          stance: supports
          locator: CBDB:489692
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（489692）
          source: &a1
            id: s_9X7PB2DT5h5nznrvFbzJNX
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 489692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489692&o=json
            external_identifier: CBDB:489692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.071Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JifsfpbmKHP1iFJWYhcJuj
        subject_person_id: p_sFYaWW2pKUEY2LYXd8Em1S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王誥，明人物。入仕貢生: 選貢(優貢 after 1628)，曾任縣丞。（中国历代人物传记资料库 CBDB 489692）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FwW2V5CIGkxy-qOKLOmMLF
          claim_id: c_JifsfpbmKHP1iFJWYhcJuj
          source_id: s_9X7PB2DT5h5nznrvFbzJNX
          stance: supports
          locator: CBDB:489692
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

# 王誥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誥 | accepted |
| bio.summary | 王誥，明人物。入仕貢生: 選貢(優貢 after 1628)，曾任縣丞。（中国历代人物传记资料库 CBDB 489692） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王誥（CBDB 489692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489692&o=json)
