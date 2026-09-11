---
schema: wang-person/v1
id: p_92UMVHjdc5rAiDrM2C2KXN
status: active
merged_into: null
display_name: 王鼎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2PyotbPsTCCX3GDMnQmSQ2
        subject_person_id: p_92UMVHjdc5rAiDrM2C2KXN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3qZ9GehJXGC2fV7iKaKEKV
          claim_id: c_2PyotbPsTCCX3GDMnQmSQ2
          source_id: s_4gwP4GiZG2SQwxHXDASpUA
          stance: supports
          locator: CBDB:67761
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67761）
          source: &a1
            id: s_4gwP4GiZG2SQwxHXDASpUA
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 67761）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67761&o=json
            external_identifier: CBDB:67761
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.012Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SWc6YSFqqtLM9wPwcsJp2p
        subject_person_id: p_92UMVHjdc5rAiDrM2C2KXN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎，明人物。曾任光祿寺丞、知縣。（中国历代人物传记资料库 CBDB 67761）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KOilejnbM-o-gHsJz0K_IS
          claim_id: c_SWc6YSFqqtLM9wPwcsJp2p
          source_id: s_4gwP4GiZG2SQwxHXDASpUA
          stance: supports
          locator: CBDB:67761
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

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎 | accepted |
| bio.summary | 王鼎，明人物。曾任光祿寺丞、知縣。（中国历代人物传记资料库 CBDB 67761） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 67761）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67761&o=json)
