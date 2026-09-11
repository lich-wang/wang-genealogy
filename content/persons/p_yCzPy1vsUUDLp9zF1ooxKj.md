---
schema: wang-person/v1
id: p_yCzPy1vsUUDLp9zF1ooxKj
status: active
merged_into: null
display_name: 王震生
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KgvUAg35YzUayM1tzsGP8W
        subject_person_id: p_yCzPy1vsUUDLp9zF1ooxKj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_X4yopzPkcwzHyAoyBCF9z6
          claim_id: c_KgvUAg35YzUayM1tzsGP8W
          source_id: s_pBgXpE6MGScLVRH7RUk8YB
          stance: supports
          locator: CBDB:72183
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72183）
          source: &a1
            id: s_pBgXpE6MGScLVRH7RUk8YB
            source_type: api_record
            title: 中国历代人物传记资料库：王震生（CBDB 72183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72183&o=json
            external_identifier: CBDB:72183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.040Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yNrYZpM1pKGcGa3ryHwutW
        subject_person_id: p_yCzPy1vsUUDLp9zF1ooxKj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1626年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uzozsJqTSznGfkjaJvzktP
          claim_id: c_yNrYZpM1pKGcGa3ryHwutW
          source_id: s_pBgXpE6MGScLVRH7RUk8YB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vPV1MNm5FFJoFNDeFeCtJk
        subject_person_id: p_yCzPy1vsUUDLp9zF1ooxKj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震生（生于1626年），清人物。籍贯杞縣。（中国历代人物传记资料库 CBDB 72183）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uSizGgg-F41i2McGQOi0xV
          claim_id: c_vPV1MNm5FFJoFNDeFeCtJk
          source_id: s_pBgXpE6MGScLVRH7RUk8YB
          stance: supports
          locator: CBDB:72183
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

# 王震生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王震生 | accepted |
| birth.date | 1626年 | accepted |
| bio.summary | 王震生（生于1626年），清人物。籍贯杞縣。（中国历代人物传记资料库 CBDB 72183） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王震生（CBDB 72183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72183&o=json)
