---
schema: wang-person/v1
id: p_uZZQA3KPQEMobk8z73n8Nv
status: active
merged_into: null
display_name: 王公墀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6CfyrmvLz9DG2jsxUjAmbo
        subject_person_id: p_uZZQA3KPQEMobk8z73n8Nv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公墀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ytPT8ciz1DM942TvdVGwDW
          claim_id: c_6CfyrmvLz9DG2jsxUjAmbo
          source_id: s_8Bqj5Xsz52eeAdeiJaeZNw
          stance: supports
          locator: CBDB:636321
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636321）
          source: &a1
            id: s_8Bqj5Xsz52eeAdeiJaeZNw
            source_type: api_record
            title: 中国历代人物传记资料库：王公墀（CBDB 636321）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636321&o=json
            external_identifier: CBDB:636321
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.954Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kmA2t32VpfdY4qr2qf9xFh
        subject_person_id: p_uZZQA3KPQEMobk8z73n8Nv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王公墀，清人物。籍贯瓊州府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 636321）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__tXAqzeIan5wpuOWsW_PRI
          claim_id: c_kmA2t32VpfdY4qr2qf9xFh
          source_id: s_8Bqj5Xsz52eeAdeiJaeZNw
          stance: supports
          locator: CBDB:636321
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

# 王公墀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公墀 | accepted |
| bio.summary | 王公墀，清人物。籍贯瓊州府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 636321） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王公墀（CBDB 636321）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636321&o=json)
