---
schema: wang-person/v1
id: p_W9dL6hkp1UfVPqVwNiAqey
status: active
merged_into: null
display_name: 王正棟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QXB2KNxftSbN3FS8g9bv7R
        subject_person_id: p_W9dL6hkp1UfVPqVwNiAqey
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jX661XVfZ67p4QjPyDH3xr
          claim_id: c_QXB2KNxftSbN3FS8g9bv7R
          source_id: s_2p9TqqZ1RR2t41GnTx5j2D
          stance: supports
          locator: CBDB:638897
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638897）
          source: &a1
            id: s_2p9TqqZ1RR2t41GnTx5j2D
            source_type: api_record
            title: 中国历代人物传记资料库：王正棟（CBDB 638897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638897&o=json
            external_identifier: CBDB:638897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.782Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e7PposzNfvFgygDr83RL6t
        subject_person_id: p_W9dL6hkp1UfVPqVwNiAqey
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正棟，清人物。籍贯寶慶府，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 638897）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-GPKwi7kR3qKLhhAd0c5-z
          claim_id: c_e7PposzNfvFgygDr83RL6t
          source_id: s_2p9TqqZ1RR2t41GnTx5j2D
          stance: supports
          locator: CBDB:638897
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

# 王正棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正棟 | accepted |
| bio.summary | 王正棟，清人物。籍贯寶慶府，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 638897） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正棟（CBDB 638897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638897&o=json)
