---
schema: wang-person/v1
id: p_1PzGCSKFWy76kL4zqp5YDE
status: active
merged_into: null
display_name: 王綏極
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fs5BHw5Ry5vmZ1429wyogb
        subject_person_id: p_1PzGCSKFWy76kL4zqp5YDE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綏極
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j6nQGn1P9GnUqgix2JRgeF
          claim_id: c_Fs5BHw5Ry5vmZ1429wyogb
          source_id: s_nbREg6WUDrBWHy46fDmbfh
          stance: supports
          locator: CBDB:639886
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639886）
          source: &a1
            id: s_nbREg6WUDrBWHy46fDmbfh
            source_type: api_record
            title: 中国历代人物传记资料库：王綏極（CBDB 639886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639886&o=json
            external_identifier: CBDB:639886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.073Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KPiKNaFXD8mhS3aBUL5tXL
        subject_person_id: p_1PzGCSKFWy76kL4zqp5YDE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綏極，清人物。籍贯隴西，曾任訓導。（中国历代人物传记资料库 CBDB 639886）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3Ju7lLAwBk0HPm2i1QVult
          claim_id: c_KPiKNaFXD8mhS3aBUL5tXL
          source_id: s_nbREg6WUDrBWHy46fDmbfh
          stance: supports
          locator: CBDB:639886
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

# 王綏極

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綏極 | accepted |
| bio.summary | 王綏極，清人物。籍贯隴西，曾任訓導。（中国历代人物传记资料库 CBDB 639886） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綏極（CBDB 639886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639886&o=json)
