---
schema: wang-person/v1
id: p_knUNNqCwQm1MnsmGYDeA7f
status: active
merged_into: null
display_name: 王璔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ozzmdX4sLQ6ix7w2b9wiRi
        subject_person_id: p_knUNNqCwQm1MnsmGYDeA7f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NM2iFgJ6GFfRHZwZvxCpLQ
          claim_id: c_ozzmdX4sLQ6ix7w2b9wiRi
          source_id: s_L7i7sMgPqCm7kBVnkUPbbg
          stance: supports
          locator: CBDB:221927
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221927）
          source: &a1
            id: s_L7i7sMgPqCm7kBVnkUPbbg
            source_type: api_record
            title: 中国历代人物传记资料库：王璔（CBDB 221927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221927&o=json
            external_identifier: CBDB:221927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.353Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3MbdJ2jxpbTbqHiwWCorbt
        subject_person_id: p_knUNNqCwQm1MnsmGYDeA7f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璔，明人物。成化二年進士，籍贯大興。（中国历代人物传记资料库 CBDB 221927）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XE8nWTjCXe6A6j48KMeaNw
          claim_id: c_3MbdJ2jxpbTbqHiwWCorbt
          source_id: s_L7i7sMgPqCm7kBVnkUPbbg
          stance: supports
          locator: CBDB:221927
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

# 王璔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璔 | accepted |
| bio.summary | 王璔，明人物。成化二年進士，籍贯大興。（中国历代人物传记资料库 CBDB 221927） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璔（CBDB 221927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221927&o=json)
