---
schema: wang-person/v1
id: p_SzZzqtcWVHRpdQpET7gHaa
status: active
merged_into: null
display_name: 王會
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yTQe3U562ZETHC2nzcvHkx
        subject_person_id: p_SzZzqtcWVHRpdQpET7gHaa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5LEamJuwF3bszioguznN28
          claim_id: c_yTQe3U562ZETHC2nzcvHkx
          source_id: s_Y8TJFe4gJyK2cThGYTgE2Y
          stance: supports
          locator: CBDB:694314
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694314）
          source: &a1
            id: s_Y8TJFe4gJyK2cThGYTgE2Y
            source_type: api_record
            title: 中国历代人物传记资料库：王會（CBDB 694314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694314&o=json
            external_identifier: CBDB:694314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.670Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4ySq92i4XqnMb6Fd14WAvX
        subject_person_id: p_SzZzqtcWVHRpdQpET7gHaa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會，清人物。籍贯海鹽。（中国历代人物传记资料库 CBDB 694314）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Sg_dBmBvAiR3P9YIFehnoC
          claim_id: c_4ySq92i4XqnMb6Fd14WAvX
          source_id: s_Y8TJFe4gJyK2cThGYTgE2Y
          stance: supports
          locator: CBDB:694314
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_qpyR9Kxzu2QTuXU9N8O5Ys
        subject_person_id: p_SzZzqtcWVHRpdQpET7gHaa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vJEZ9Szh9s5FpFkeZXoWPH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hSckyZGBWOxm9O_IG4fFah
          claim_id: c_qpyR9Kxzu2QTuXU9N8O5Ys
          source_id: s_Y8TJFe4gJyK2cThGYTgE2Y
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=294040：子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vJEZ9Szh9s5FpFkeZXoWPH
        status: active
        display_name: 王維綱
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王會

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王會 | accepted |
| bio.summary | 王會，清人物。籍贯海鹽。（中国历代人物传记资料库 CBDB 694314） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_vJEZ9Szh9s5FpFkeZXoWPH | 王維綱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王會（CBDB 694314）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694314&o=json)
