---
schema: wang-person/v1
id: p_979roDr7h4nN9KLQYUeHCq
status: active
merged_into: null
display_name: 王黃行
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_19kh64X3xkNJxnVGqB9mk9
        subject_person_id: p_979roDr7h4nN9KLQYUeHCq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王黃行
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fMuYVnuRKccmC6zirgHQKK
          claim_id: c_19kh64X3xkNJxnVGqB9mk9
          source_id: s_T48L5pGP9J6YvJREkXQCP1
          stance: supports
          locator: CBDB:641038
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（641038）
          source: &a1
            id: s_T48L5pGP9J6YvJREkXQCP1
            source_type: api_record
            title: 中国历代人物传记资料库：王黃行（CBDB 641038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641038&o=json
            external_identifier: CBDB:641038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.448Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Af1vdXv9SdS4tsc3HTtUVU
        subject_person_id: p_979roDr7h4nN9KLQYUeHCq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王黃行，清人物。籍贯濟南府，曾任復設訓導。（中国历代人物传记资料库 CBDB 641038）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hqBKOXAw0zMrhOKf4S_ptR
          claim_id: c_Af1vdXv9SdS4tsc3HTtUVU
          source_id: s_T48L5pGP9J6YvJREkXQCP1
          stance: supports
          locator: CBDB:641038
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

# 王黃行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王黃行 | accepted |
| bio.summary | 王黃行，清人物。籍贯濟南府，曾任復設訓導。（中国历代人物传记资料库 CBDB 641038） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王黃行（CBDB 641038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641038&o=json)
