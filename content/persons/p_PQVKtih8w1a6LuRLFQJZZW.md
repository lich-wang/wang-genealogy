---
schema: wang-person/v1
id: p_PQVKtih8w1a6LuRLFQJZZW
status: active
merged_into: null
display_name: 王德新
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fcWV8GekC4Kv423Ly39bPa
        subject_person_id: p_PQVKtih8w1a6LuRLFQJZZW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D77NgNuFBJbmjbaCzhFFQu
          claim_id: c_fcWV8GekC4Kv423Ly39bPa
          source_id: s_pL1zJymdmJUxkfrtTmMWAc
          stance: supports
          locator: CBDB:573592
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573592）
          source: &a1
            id: s_pL1zJymdmJUxkfrtTmMWAc
            source_type: api_record
            title: 中国历代人物传记资料库：王德新（CBDB 573592）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573592&o=json
            external_identifier: CBDB:573592
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.904Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MZ2VGjpBp52hQCuDwAcBMx
        subject_person_id: p_PQVKtih8w1a6LuRLFQJZZW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德新，清人物。籍贯江夏，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 573592）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NfTkfSVI_Ov4isB93URHh9
          claim_id: c_MZ2VGjpBp52hQCuDwAcBMx
          source_id: s_pL1zJymdmJUxkfrtTmMWAc
          stance: supports
          locator: CBDB:573592
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

# 王德新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德新 | accepted |
| bio.summary | 王德新，清人物。籍贯江夏，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 573592） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德新（CBDB 573592）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573592&o=json)
