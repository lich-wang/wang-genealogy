---
schema: wang-person/v1
id: p_6Wb9m8HN2pMSFqzaxKuxbF
status: active
merged_into: null
display_name: 王繼貞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_izj4n2V8nAwSb52QqUpyeF
        subject_person_id: p_6Wb9m8HN2pMSFqzaxKuxbF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NWtrQs5kH2CFi9DYHUQMkj
          claim_id: c_izj4n2V8nAwSb52QqUpyeF
          source_id: s_q8uyhTg8Z4v9Nk5mTpnnRB
          stance: supports
          locator: CBDB:520475
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（520475）
          source: &a1
            id: s_q8uyhTg8Z4v9Nk5mTpnnRB
            source_type: api_record
            title: 中国历代人物传记资料库：王繼貞（CBDB 520475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=520475&o=json
            external_identifier: CBDB:520475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.314Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X6MLtfQve8jjPid15YXpVX
        subject_person_id: p_6Wb9m8HN2pMSFqzaxKuxbF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kZj9FXezz3aRDJE68MyJjH
          claim_id: c_X6MLtfQve8jjPid15YXpVX
          source_id: s_q8uyhTg8Z4v9Nk5mTpnnRB
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
        id: c_8d6-fWzssad08FmMr-uwOy
        subject_person_id: p_7K8PDevVjMrMSJG9pemnzS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6Wb9m8HN2pMSFqzaxKuxbF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T2WhAFaYhu0C-1p6OiIPY5
          claim_id: c_8d6-fWzssad08FmMr-uwOy
          source_id: s_q8uyhTg8Z4v9Nk5mTpnnRB
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），5363：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7K8PDevVjMrMSJG9pemnzS
        status: active
        display_name: 王輔臣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王繼貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼貞 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7K8PDevVjMrMSJG9pemnzS | 王輔臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼貞（CBDB 520475）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=520475&o=json)
