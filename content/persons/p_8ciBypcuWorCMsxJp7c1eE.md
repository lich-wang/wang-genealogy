---
schema: wang-person/v1
id: p_8ciBypcuWorCMsxJp7c1eE
status: active
merged_into: null
display_name: 王汝源
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7VMBGHDNoXniQk1FLsT4Ze
        subject_person_id: p_8ciBypcuWorCMsxJp7c1eE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mjyqzrRq8Umsa6t91nEpzH
          claim_id: c_7VMBGHDNoXniQk1FLsT4Ze
          source_id: s_PVnhsrZgbMgk6DoE6imGB4
          stance: supports
          locator: CBDB:473242
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（473242）
          source: &a1
            id: s_PVnhsrZgbMgk6DoE6imGB4
            source_type: api_record
            title: 中国历代人物传记资料库：王汝源（CBDB 473242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473242&o=json
            external_identifier: CBDB:473242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.296Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BtKvC5FvFC9Ng1p4nBQ6TD
        subject_person_id: p_8ciBypcuWorCMsxJp7c1eE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝源，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 473242）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M6H3yBpFKJpZOgCu7pV70E
          claim_id: c_BtKvC5FvFC9Ng1p4nBQ6TD
          source_id: s_PVnhsrZgbMgk6DoE6imGB4
          stance: supports
          locator: CBDB:473242
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

# 王汝源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝源 | accepted |
| bio.summary | 王汝源，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 473242） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝源（CBDB 473242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473242&o=json)
