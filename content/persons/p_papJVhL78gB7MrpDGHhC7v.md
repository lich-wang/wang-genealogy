---
schema: wang-person/v1
id: p_papJVhL78gB7MrpDGHhC7v
status: active
merged_into: null
display_name: 王儒行
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hHiK4anFHsV4fzNfhxB6UR
        subject_person_id: p_papJVhL78gB7MrpDGHhC7v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒行
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hBSHjaN3JGhcs2yHL1Ex66
          claim_id: c_hHiK4anFHsV4fzNfhxB6UR
          source_id: s_aTPBHAYhj2oMWtHnqHQgda
          stance: supports
          locator: CBDB:636112
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636112）
          source: &a1
            id: s_aTPBHAYhj2oMWtHnqHQgda
            source_type: api_record
            title: 中国历代人物传记资料库：王儒行（CBDB 636112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636112&o=json
            external_identifier: CBDB:636112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.891Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tj9SQiPoJy3eWmoCPWxK7v
        subject_person_id: p_papJVhL78gB7MrpDGHhC7v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王儒行，清人物。籍贯開封府，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 636112）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q0AOgFe5ERExi1hh2qB_0w
          claim_id: c_tj9SQiPoJy3eWmoCPWxK7v
          source_id: s_aTPBHAYhj2oMWtHnqHQgda
          stance: supports
          locator: CBDB:636112
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

# 王儒行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儒行 | accepted |
| bio.summary | 王儒行，清人物。籍贯開封府，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 636112） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儒行（CBDB 636112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636112&o=json)
