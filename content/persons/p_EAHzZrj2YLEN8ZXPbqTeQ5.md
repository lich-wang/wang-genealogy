---
schema: wang-person/v1
id: p_EAHzZrj2YLEN8ZXPbqTeQ5
status: active
merged_into: null
display_name: 王萃元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WHdJvKA2Urc9AnWXH42HjU
        subject_person_id: p_EAHzZrj2YLEN8ZXPbqTeQ5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萃元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G4nGdYuf4k134XNCUC3STd
          claim_id: c_WHdJvKA2Urc9AnWXH42HjU
          source_id: s_ewM1gQao4xfkM3szPw24EN
          stance: supports
          locator: CBDB:640110
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640110）
          source: &a1
            id: s_ewM1gQao4xfkM3szPw24EN
            source_type: api_record
            title: 中国历代人物传记资料库：王萃元（CBDB 640110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640110&o=json
            external_identifier: CBDB:640110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.153Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CNn9T2sMK4uy2GCE2DntRV
        subject_person_id: p_EAHzZrj2YLEN8ZXPbqTeQ5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萃元，清人物。籍贯松江府，曾任復設訓導。（中国历代人物传记资料库 CBDB 640110）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_y6ZM3KnJ7lc5VIZXcvz_rb
          claim_id: c_CNn9T2sMK4uy2GCE2DntRV
          source_id: s_ewM1gQao4xfkM3szPw24EN
          stance: supports
          locator: CBDB:640110
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

# 王萃元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萃元 | accepted |
| bio.summary | 王萃元，清人物。籍贯松江府，曾任復設訓導。（中国历代人物传记资料库 CBDB 640110） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萃元（CBDB 640110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640110&o=json)
