---
schema: wang-person/v1
id: p_3bTrjcbZxW3xkStN2NvSEg
status: active
merged_into: null
display_name: 王傑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z7vW2hsEHs8XrcHD36yfzz
        subject_person_id: p_3bTrjcbZxW3xkStN2NvSEg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RCE4jiU8p2KyJLHeN8q2GU
          claim_id: c_z7vW2hsEHs8XrcHD36yfzz
          source_id: s_JvfZy6tk9P89qHNDgEX4FW
          stance: supports
          locator: CBDB:510097
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（510097）
          source: &a1
            id: s_JvfZy6tk9P89qHNDgEX4FW
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 510097）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510097&o=json
            external_identifier: CBDB:510097
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.205Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vWbAmBqY7VSuN1ssYj7iLe
        subject_person_id: p_3bTrjcbZxW3xkStN2NvSEg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王傑，清人物。入仕科舉制舉: 武舉科，曾任千總。（中国历代人物传记资料库 CBDB 510097）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iDe8F_D-Mk_rj3UWln3oA5
          claim_id: c_vWbAmBqY7VSuN1ssYj7iLe
          source_id: s_JvfZy6tk9P89qHNDgEX4FW
          stance: supports
          locator: CBDB:510097
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

# 王傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傑 | accepted |
| bio.summary | 王傑，清人物。入仕科舉制舉: 武舉科，曾任千總。（中国历代人物传记资料库 CBDB 510097） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 510097）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510097&o=json)
