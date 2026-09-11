---
schema: wang-person/v1
id: p_4WJALMeWFHaPvrNHD1eLGP
status: active
merged_into: null
display_name: 王莘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FEr6HTsNbKFoGnN34EUNQz
        subject_person_id: p_4WJALMeWFHaPvrNHD1eLGP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_37qdgBLRCYvXQWQt1QBQR6
          claim_id: c_FEr6HTsNbKFoGnN34EUNQz
          source_id: s_GGNt832hGKQMNiNi3Jswk8
          stance: supports
          locator: CBDB:1899
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1899）
          source: &a1
            id: s_GGNt832hGKQMNiNi3Jswk8
            source_type: api_record
            title: 中国历代人物传记资料库：王莘（CBDB 1899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1899&o=json
            external_identifier: CBDB:1899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.381Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ccy73QzrmsxLSBEEEguU9b
        subject_person_id: p_4WJALMeWFHaPvrNHD1eLGP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莘，宋人物。籍贯汝陰，曾任轉運司判官、承信郎。（中国历代人物传记资料库 CBDB 1899）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I0W0wMfmEIrDqUl-YkzUPe
          claim_id: c_ccy73QzrmsxLSBEEEguU9b
          source_id: s_GGNt832hGKQMNiNi3Jswk8
          stance: supports
          locator: CBDB:1899
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_BgtZ3AFesgVFFC5wD1yTfA
        subject_person_id: p_4WJALMeWFHaPvrNHD1eLGP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j8wPuwgWUGTVgAZXhVEGRs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GNGB3NXyIOZ53yFyriHc1c
          claim_id: c_BgtZ3AFesgVFFC5wD1yTfA
          source_id: s_GGNt832hGKQMNiNi3Jswk8
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1132：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_j8wPuwgWUGTVgAZXhVEGRs
        status: active
        display_name: 王銍
        merged_into_person_id: null
    - claim:
        id: c_5-Soi6vS5A6dDJ0hEkDXai
        subject_person_id: p_4WJALMeWFHaPvrNHD1eLGP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qkFD4oMYG6qDuASHfx34xa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J-gybauD7BzH8x_y_GKWEZ
          claim_id: c_5-Soi6vS5A6dDJ0hEkDXai
          source_id: s_GGNt832hGKQMNiNi3Jswk8
          stance: supports
          locator: 宋人傳記資料索引(電子版)，925：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qkFD4oMYG6qDuASHfx34xa
        status: active
        display_name: 王鉒
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王莘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王莘 | accepted |
| bio.summary | 王莘，宋人物。籍贯汝陰，曾任轉運司判官、承信郎。（中国历代人物传记资料库 CBDB 1899） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_j8wPuwgWUGTVgAZXhVEGRs | 王銍 | accepted |
| children | p_qkFD4oMYG6qDuASHfx34xa | 王鉒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王莘（CBDB 1899）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1899&o=json)
