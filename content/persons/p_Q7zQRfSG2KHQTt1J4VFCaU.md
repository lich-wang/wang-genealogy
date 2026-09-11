---
schema: wang-person/v1
id: p_Q7zQRfSG2KHQTt1J4VFCaU
status: active
merged_into: null
display_name: 王用
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uauHMTX4DBSSZG67q1ubPm
        subject_person_id: p_Q7zQRfSG2KHQTt1J4VFCaU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8MvJc2iTfNyR8CPougrgMJ
          claim_id: c_uauHMTX4DBSSZG67q1ubPm
          source_id: s_NJERkSnAf2cm2Gpp9b39nx
          stance: supports
          locator: CBDB:38659
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38659）
          source: &a1
            id: s_NJERkSnAf2cm2Gpp9b39nx
            source_type: api_record
            title: 中国历代人物传记资料库：王用（CBDB 38659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38659&o=json
            external_identifier: CBDB:38659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.524Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R4g4DuQCSnZPKqwGHKMA3u
        subject_person_id: p_Q7zQRfSG2KHQTt1J4VFCaU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用，宋人物。曾任供備庫副使、尚書左僕射、文思副使。（中国历代人物传记资料库 CBDB 38659）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7X_PWbX7pc6M5996Vk1BHM
          claim_id: c_R4g4DuQCSnZPKqwGHKMA3u
          source_id: s_NJERkSnAf2cm2Gpp9b39nx
          stance: supports
          locator: CBDB:38659
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

# 王用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用 | accepted |
| bio.summary | 王用，宋人物。曾任供備庫副使、尚書左僕射、文思副使。（中国历代人物传记资料库 CBDB 38659） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用（CBDB 38659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38659&o=json)
