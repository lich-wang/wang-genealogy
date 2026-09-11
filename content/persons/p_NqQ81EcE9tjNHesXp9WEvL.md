---
schema: wang-person/v1
id: p_NqQ81EcE9tjNHesXp9WEvL
status: active
merged_into: null
display_name: 王卓午
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8FQjpb8EJk46rFjCvGb9RZ
        subject_person_id: p_NqQ81EcE9tjNHesXp9WEvL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卓午
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SyNLiZDsiGo2EekNBRpXyc
          claim_id: c_8FQjpb8EJk46rFjCvGb9RZ
          source_id: s_9E57VsiRxXj23dg5E4BHGN
          stance: supports
          locator: CBDB:636424
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636424）
          source: &a1
            id: s_9E57VsiRxXj23dg5E4BHGN
            source_type: api_record
            title: 中国历代人物传记资料库：王卓午（CBDB 636424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636424&o=json
            external_identifier: CBDB:636424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZwMEqDfgtt8P4oJvppqSo2
        subject_person_id: p_NqQ81EcE9tjNHesXp9WEvL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王卓午，清人物。籍贯河南省，入仕貢生: 副貢，曾任教諭。（中国历代人物传记资料库 CBDB 636424）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_W84fI2ga14s55rgNX3z_-h
          claim_id: c_ZwMEqDfgtt8P4oJvppqSo2
          source_id: s_9E57VsiRxXj23dg5E4BHGN
          stance: supports
          locator: CBDB:636424
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

# 王卓午

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王卓午 | accepted |
| bio.summary | 王卓午，清人物。籍贯河南省，入仕貢生: 副貢，曾任教諭。（中国历代人物传记资料库 CBDB 636424） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王卓午（CBDB 636424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636424&o=json)
