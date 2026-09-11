---
schema: wang-person/v1
id: p_wYatJZEPhxC13F1U63sYX7
status: active
merged_into: null
display_name: 王中和
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_efAc7nAS4G2wCtN3DFnU5g
        subject_person_id: p_wYatJZEPhxC13F1U63sYX7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iARVedhNe58oma1GTkkKvm
          claim_id: c_efAc7nAS4G2wCtN3DFnU5g
          source_id: s_v16pidP29KRspuAfHA9EJx
          stance: supports
          locator: CBDB:157225
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157225）
          source: &a1
            id: s_v16pidP29KRspuAfHA9EJx
            source_type: api_record
            title: 中国历代人物传记资料库：王中和（CBDB 157225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157225&o=json
            external_identifier: CBDB:157225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.903Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WTXEYNJ92VL2DhJ9mi7e2o
        subject_person_id: p_wYatJZEPhxC13F1U63sYX7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gt3Dp5faEZEt27JfqufqJ8
          claim_id: c_WTXEYNJ92VL2DhJ9mi7e2o
          source_id: s_v16pidP29KRspuAfHA9EJx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9q6raju8qnBPbnoNrJT-el
        subject_person_id: p_z5fd9doZBpHnhM7XG6sUvg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wYatJZEPhxC13F1U63sYX7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UlOvHACFGlP0rjUYVx0hsv
          claim_id: c_9q6raju8qnBPbnoNrJT-el
          source_id: s_v16pidP29KRspuAfHA9EJx
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yuanhe 148：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_z5fd9doZBpHnhM7XG6sUvg
        status: active
        display_name: 王佺
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王中和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王中和 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_z5fd9doZBpHnhM7XG6sUvg | 王佺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王中和（CBDB 157225）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157225&o=json)
