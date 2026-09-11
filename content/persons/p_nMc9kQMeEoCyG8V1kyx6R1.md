---
schema: wang-person/v1
id: p_nMc9kQMeEoCyG8V1kyx6R1
status: active
merged_into: null
display_name: 王履豫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9pLKyXkRhUxMK3yk8xL4qy
        subject_person_id: p_nMc9kQMeEoCyG8V1kyx6R1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履豫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t9KTJbdnuty97Kfo9dMCXU
          claim_id: c_9pLKyXkRhUxMK3yk8xL4qy
          source_id: s_pKGFtbriy1iJY5XJKUJAGa
          stance: supports
          locator: CBDB:637330
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637330）
          source: &a1
            id: s_pKGFtbriy1iJY5XJKUJAGa
            source_type: api_record
            title: 中国历代人物传记资料库：王履豫（CBDB 637330）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637330&o=json
            external_identifier: CBDB:637330
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.386Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Df8qBaJhgRE7EVC6azD96c
        subject_person_id: p_nMc9kQMeEoCyG8V1kyx6R1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履豫，清人物。籍贯西安，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 637330）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R2ifB_pqu2AIVg7HAuIuqf
          claim_id: c_Df8qBaJhgRE7EVC6azD96c
          source_id: s_pKGFtbriy1iJY5XJKUJAGa
          stance: supports
          locator: CBDB:637330
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

# 王履豫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王履豫 | accepted |
| bio.summary | 王履豫，清人物。籍贯西安，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 637330） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王履豫（CBDB 637330）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637330&o=json)
