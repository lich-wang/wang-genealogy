---
schema: wang-person/v1
id: p_SfQvHGD4zm5D992GiDb4q2
status: active
merged_into: null
display_name: 王棨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X82WGGzvETNh2WMpwwAaJF
        subject_person_id: p_SfQvHGD4zm5D992GiDb4q2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gPFbKB45Nr9FhMLhXRXzcU
          claim_id: c_X82WGGzvETNh2WMpwwAaJF
          source_id: s_Hs1F1UB9sLrLd9typjD5zq
          stance: supports
          locator: CBDB:638728
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638728）
          source: &a1
            id: s_Hs1F1UB9sLrLd9typjD5zq
            source_type: api_record
            title: 中国历代人物传记资料库：王棨（CBDB 638728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638728&o=json
            external_identifier: CBDB:638728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.748Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7c9zcBCeQcQ5J7aA1qq1jf
        subject_person_id: p_SfQvHGD4zm5D992GiDb4q2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棨，清人物。籍贯懷慶府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 638728）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nBEQlVzyAevzycfsLx1F8c
          claim_id: c_7c9zcBCeQcQ5J7aA1qq1jf
          source_id: s_Hs1F1UB9sLrLd9typjD5zq
          stance: supports
          locator: CBDB:638728
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

# 王棨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棨 | accepted |
| bio.summary | 王棨，清人物。籍贯懷慶府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 638728） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王棨（CBDB 638728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638728&o=json)
