---
schema: wang-person/v1
id: p_efTyspVBuWnU6D3LVRN3aM
status: active
merged_into: null
display_name: 王憲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RCoNxJYhd5eFbSGEZGvE9E
        subject_person_id: p_efTyspVBuWnU6D3LVRN3aM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5E9NCJsyjsWHJBdomA3Tn1
          claim_id: c_RCoNxJYhd5eFbSGEZGvE9E
          source_id: s_k5uqKuA9pNZyhL66BDa72e
          stance: supports
          locator: CBDB:213514
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213514）
          source: &a1
            id: s_k5uqKuA9pNZyhL66BDa72e
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 213514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213514&o=json
            external_identifier: CBDB:213514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.117Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iEd8Z6fs5HXEFQvC13EUUS
        subject_person_id: p_efTyspVBuWnU6D3LVRN3aM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GEgQ5XZYA6KBL1DXCSm8kk
          claim_id: c_iEd8Z6fs5HXEFQvC13EUUS
          source_id: s_k5uqKuA9pNZyhL66BDa72e
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_8ZXBaSGMnOCxHoEKA6r8Ui
        subject_person_id: p_efTyspVBuWnU6D3LVRN3aM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sMjY6kwGmS2PR67RexN7yL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WDRjo47WNp13sub5p-vX6K
          claim_id: c_8ZXBaSGMnOCxHoEKA6r8Ui
          source_id: s_k5uqKuA9pNZyhL66BDa72e
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第一百一十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sMjY6kwGmS2PR67RexN7yL
        status: active
        display_name: 王崇之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王憲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王憲 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_sMjY6kwGmS2PR67RexN7yL | 王崇之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王憲（CBDB 213514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213514&o=json)
