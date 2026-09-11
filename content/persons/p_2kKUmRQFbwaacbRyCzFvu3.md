---
schema: wang-person/v1
id: p_2kKUmRQFbwaacbRyCzFvu3
status: active
merged_into: null
display_name: 王元熙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z1R7TPSeesWtDLqinbRWPX
        subject_person_id: p_2kKUmRQFbwaacbRyCzFvu3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wr3mFBFh7q3gqwF5FZ1ZWi
          claim_id: c_z1R7TPSeesWtDLqinbRWPX
          source_id: s_Npf3Gk4GLsKN2dqbLxL81q
          stance: supports
          locator: CBDB:636165
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636165）
          source: &a1
            id: s_Npf3Gk4GLsKN2dqbLxL81q
            source_type: api_record
            title: 中国历代人物传记资料库：王元熙（CBDB 636165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636165&o=json
            external_identifier: CBDB:636165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.114Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kKGwQXm2nsLSdbwenLLyDw
        subject_person_id: p_2kKUmRQFbwaacbRyCzFvu3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元熙，清人物。籍贯聊城，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636165）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_p4-LnGSQpERRtQlGv0ByM7
          claim_id: c_kKGwQXm2nsLSdbwenLLyDw
          source_id: s_Npf3Gk4GLsKN2dqbLxL81q
          stance: supports
          locator: CBDB:636165
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

# 王元熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元熙 | accepted |
| bio.summary | 王元熙，清人物。籍贯聊城，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636165） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元熙（CBDB 636165）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636165&o=json)
