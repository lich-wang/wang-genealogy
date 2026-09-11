---
schema: wang-person/v1
id: p_tYGSc7PhdNkME2Q5N9z7WX
status: active
merged_into: null
display_name: 王場
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WErXhoRckbZmfqFnMY7pVZ
        subject_person_id: p_tYGSc7PhdNkME2Q5N9z7WX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王場
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KkLF7FHtGJ2XuGpkWmRZaM
          claim_id: c_WErXhoRckbZmfqFnMY7pVZ
          source_id: s_8F2cTyYXfWeTr7Cw9tSks2
          stance: supports
          locator: CBDB:636757
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636757）
          source: &a1
            id: s_8F2cTyYXfWeTr7Cw9tSks2
            source_type: api_record
            title: 中国历代人物传记资料库：王場（CBDB 636757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636757&o=json
            external_identifier: CBDB:636757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.097Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x8crojWm2Ze9gvEFqPQUU7
        subject_person_id: p_tYGSc7PhdNkME2Q5N9z7WX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王場，清人物。籍贯交城，曾任訓導。（中国历代人物传记资料库 CBDB 636757）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yp0vJ7ai3_GhkmVeQ5Gnbh
          claim_id: c_x8crojWm2Ze9gvEFqPQUU7
          source_id: s_8F2cTyYXfWeTr7Cw9tSks2
          stance: supports
          locator: CBDB:636757
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

# 王場

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王場 | accepted |
| bio.summary | 王場，清人物。籍贯交城，曾任訓導。（中国历代人物传记资料库 CBDB 636757） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王場（CBDB 636757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636757&o=json)
