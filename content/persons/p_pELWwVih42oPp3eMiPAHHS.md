---
schema: wang-person/v1
id: p_pELWwVih42oPp3eMiPAHHS
status: active
merged_into: null
display_name: 王述
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WM9W7B6LQtB76rMTqre4CR
        subject_person_id: p_pELWwVih42oPp3eMiPAHHS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h4T9JSgQaWu1HXdPDFxgYK
          claim_id: c_WM9W7B6LQtB76rMTqre4CR
          source_id: s_y2W2jvLDMVuD8ntUQAMPw1
          stance: supports
          locator: CBDB:43810
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（43810）
          source: &a1
            id: s_y2W2jvLDMVuD8ntUQAMPw1
            source_type: api_record
            title: 中国历代人物传记资料库：王述（CBDB 43810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=43810&o=json
            external_identifier: CBDB:43810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.649Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mYTcF6AcVT7rxoMGzCyFvf
        subject_person_id: p_pELWwVih42oPp3eMiPAHHS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8YWfqumKXENKwS7KLTPq7T
          claim_id: c_mYTcF6AcVT7rxoMGzCyFvf
          source_id: s_y2W2jvLDMVuD8ntUQAMPw1
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
        id: c_LTpXtZR9fSmzR6a4LfkWyq
        subject_person_id: p_EjFzJHg5h221PpHAGHfPdr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pELWwVih42oPp3eMiPAHHS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KjdmVZq662ro8XOqMpO2lZ
          claim_id: c_LTpXtZR9fSmzR6a4LfkWyq
          source_id: s_y2W2jvLDMVuD8ntUQAMPw1
          stance: supports
          locator: 鶴山先生大全文集，84/墓誌銘：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EjFzJHg5h221PpHAGHfPdr
        status: active
        display_name: 王萬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王述

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王述 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EjFzJHg5h221PpHAGHfPdr | 王萬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王述（CBDB 43810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=43810&o=json)
