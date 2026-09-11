---
schema: wang-person/v1
id: p_i32fYjd1cAB9BnbvPB2uQw
status: active
merged_into: null
display_name: 王坤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j5WYL4JKKAF5xfAkgWGpnr
        subject_person_id: p_i32fYjd1cAB9BnbvPB2uQw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8hb3Svc5PgMDJNFmMZd7QV
          claim_id: c_j5WYL4JKKAF5xfAkgWGpnr
          source_id: s_5MgAAYf4KbR6VXSBtb23jD
          stance: supports
          locator: CBDB:506196
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（506196）
          source: &a1
            id: s_5MgAAYf4KbR6VXSBtb23jD
            source_type: api_record
            title: 中国历代人物传记资料库：王坤（CBDB 506196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506196&o=json
            external_identifier: CBDB:506196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.988Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yQUadFNu4H2CGne6UJSDgD
        subject_person_id: p_i32fYjd1cAB9BnbvPB2uQw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坤，明人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 506196）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vrmCmE3gguykNaxN5jhiyC
          claim_id: c_yQUadFNu4H2CGne6UJSDgD
          source_id: s_5MgAAYf4KbR6VXSBtb23jD
          stance: supports
          locator: CBDB:506196
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

# 王坤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王坤 | accepted |
| bio.summary | 王坤，明人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 506196） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王坤（CBDB 506196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506196&o=json)
