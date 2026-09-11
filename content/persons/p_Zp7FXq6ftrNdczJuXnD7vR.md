---
schema: wang-person/v1
id: p_Zp7FXq6ftrNdczJuXnD7vR
status: active
merged_into: null
display_name: 王伯勝
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PMf9n1d2U1eB4m8AVnRn7d
        subject_person_id: p_Zp7FXq6ftrNdczJuXnD7vR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯勝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y4GKM42AATu42qWL9jRxZ4
          claim_id: c_PMf9n1d2U1eB4m8AVnRn7d
          source_id: s_LmAqg1SubZdRGwKCDBzK2u
          stance: supports
          locator: CBDB:231743
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231743）
          source: &a1
            id: s_LmAqg1SubZdRGwKCDBzK2u
            source_type: api_record
            title: 中国历代人物传记资料库：王伯勝（CBDB 231743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231743&o=json
            external_identifier: CBDB:231743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.652Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k7FedWDWZsQRE3ShFJrcDF
        subject_person_id: p_Zp7FXq6ftrNdczJuXnD7vR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯勝，明人物。宣德八年進士。（中国历代人物传记资料库 CBDB 231743）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Qia6hZVXlD9dhv71Vwvvpy
          claim_id: c_k7FedWDWZsQRE3ShFJrcDF
          source_id: s_LmAqg1SubZdRGwKCDBzK2u
          stance: supports
          locator: CBDB:231743
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
  descendants:
    - claim:
        id: c_mSEfC7v2tetyv1Onqaeems
        subject_person_id: p_Zp7FXq6ftrNdczJuXnD7vR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CABq3rPfMpkNs8qeT4KNGJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LDQy_fYfYUoIRxhRApYA5l
          claim_id: c_mSEfC7v2tetyv1Onqaeems
          source_id: s_LmAqg1SubZdRGwKCDBzK2u
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第三甲第六十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CABq3rPfMpkNs8qeT4KNGJ
        status: active
        display_name: 王頤
        merged_into_person_id: null
  other: []
---

# 王伯勝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯勝 | accepted |
| bio.summary | 王伯勝，明人物。宣德八年進士。（中国历代人物传记资料库 CBDB 231743） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_CABq3rPfMpkNs8qeT4KNGJ | 王頤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯勝（CBDB 231743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231743&o=json)
