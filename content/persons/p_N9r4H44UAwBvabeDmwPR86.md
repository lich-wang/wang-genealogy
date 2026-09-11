---
schema: wang-person/v1
id: p_N9r4H44UAwBvabeDmwPR86
status: active
merged_into: null
display_name: 王卓如
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1iH7S41sWYQqYGHxburXuv
        subject_person_id: p_N9r4H44UAwBvabeDmwPR86
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卓如
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kJvRNBjWm3WtXQwJwR2nbq
          claim_id: c_1iH7S41sWYQqYGHxburXuv
          source_id: s_yWscfD5TogD31ju5gj6Ece
          stance: supports
          locator: CBDB:636425
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636425）
          source: &a1
            id: s_yWscfD5TogD31ju5gj6Ece
            source_type: api_record
            title: 中国历代人物传记资料库：王卓如（CBDB 636425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636425&o=json
            external_identifier: CBDB:636425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fBBdpBh2gibnjKSbj1zFLs
        subject_person_id: p_N9r4H44UAwBvabeDmwPR86
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卓如，清人物。籍贯淮安府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 636425）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w5rxsXh-ETIr4cGS9Wa6lW
          claim_id: c_fBBdpBh2gibnjKSbj1zFLs
          source_id: s_yWscfD5TogD31ju5gj6Ece
          stance: supports
          locator: CBDB:636425
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

# 王卓如

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王卓如 | accepted |
| bio.summary | 王卓如，清人物。籍贯淮安府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 636425） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王卓如（CBDB 636425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636425&o=json)
