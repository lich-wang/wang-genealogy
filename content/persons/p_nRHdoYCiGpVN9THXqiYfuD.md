---
schema: wang-person/v1
id: p_nRHdoYCiGpVN9THXqiYfuD
status: active
merged_into: null
display_name: 王翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TbB2vfAsrtYoSAHgopi7KR
        subject_person_id: p_nRHdoYCiGpVN9THXqiYfuD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1PgzJgrg5hj9xPV53Hug72
          claim_id: c_TbB2vfAsrtYoSAHgopi7KR
          source_id: s_jwDWex7L7NiSCbLUcNUkNN
          stance: supports
          locator: CBDB:558265
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（558265）
          source: &a1
            id: s_jwDWex7L7NiSCbLUcNUkNN
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 558265）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558265&o=json
            external_identifier: CBDB:558265
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.697Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zx4uWEWNB7bnykkn5FdFj7
        subject_person_id: p_nRHdoYCiGpVN9THXqiYfuD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰，清人物。籍贯新野。（中国历代人物传记资料库 CBDB 558265）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A8ghID_GqsD7wSjBh0qiOw
          claim_id: c_zx4uWEWNB7bnykkn5FdFj7
          source_id: s_jwDWex7L7NiSCbLUcNUkNN
          stance: supports
          locator: CBDB:558265
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

# 王翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翰 | accepted |
| bio.summary | 王翰，清人物。籍贯新野。（中国历代人物传记资料库 CBDB 558265） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翰（CBDB 558265）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558265&o=json)
