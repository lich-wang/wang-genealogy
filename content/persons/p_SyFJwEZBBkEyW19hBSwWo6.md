---
schema: wang-person/v1
id: p_SyFJwEZBBkEyW19hBSwWo6
status: active
merged_into: null
display_name: 王道蕩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GVT71s5B5CGytL9aAM3ijS
        subject_person_id: p_SyFJwEZBBkEyW19hBSwWo6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道蕩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e5KTZmA95zHgRu7kSh9Fm8
          claim_id: c_GVT71s5B5CGytL9aAM3ijS
          source_id: s_P8PkhY9PCWzTT4JuaBjJdw
          stance: supports
          locator: CBDB:640463
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640463）
          source: &a1
            id: s_P8PkhY9PCWzTT4JuaBjJdw
            source_type: api_record
            title: 中国历代人物传记资料库：王道蕩（CBDB 640463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640463&o=json
            external_identifier: CBDB:640463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.104Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eL8MkRps4kzLK1tK7tEui5
        subject_person_id: p_SyFJwEZBBkEyW19hBSwWo6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道蕩，清人物。籍贯淄川，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 640463）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DgNf9O2xqR6d4wa3Dz_Zsf
          claim_id: c_eL8MkRps4kzLK1tK7tEui5
          source_id: s_P8PkhY9PCWzTT4JuaBjJdw
          stance: supports
          locator: CBDB:640463
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

# 王道蕩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道蕩 | accepted |
| bio.summary | 王道蕩，清人物。籍贯淄川，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 640463） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道蕩（CBDB 640463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640463&o=json)
