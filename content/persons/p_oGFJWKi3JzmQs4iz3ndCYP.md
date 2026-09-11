---
schema: wang-person/v1
id: p_oGFJWKi3JzmQs4iz3ndCYP
status: active
merged_into: null
display_name: 王坦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y7tWca4DnaZZ4NqDqFPBUc
        subject_person_id: p_oGFJWKi3JzmQs4iz3ndCYP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mNDwrTXFBFHPk3LzXqfoB9
          claim_id: c_y7tWca4DnaZZ4NqDqFPBUc
          source_id: s_pYMt3C2KB4mLn2QTzFvqN1
          stance: supports
          locator: CBDB:154910
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（154910）
          source: &a1
            id: s_pYMt3C2KB4mLn2QTzFvqN1
            source_type: api_record
            title: 中国历代人物传记资料库：王坦（CBDB 154910）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154910&o=json
            external_identifier: CBDB:154910
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.872Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_US1kQJwRaq2FG12VtRsUJQ
        subject_person_id: p_oGFJWKi3JzmQs4iz3ndCYP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坦，唐人物。籍贯長安。（中国历代人物传记资料库 CBDB 154910）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vgfFEbSSJ3Z3KZkkMxvivK
          claim_id: c_US1kQJwRaq2FG12VtRsUJQ
          source_id: s_pYMt3C2KB4mLn2QTzFvqN1
          stance: supports
          locator: CBDB:154910
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kMvks5k75hg2zYYvfVcVxs
        subject_person_id: p_hBA95seF4jfn429UmR76Q6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oGFJWKi3JzmQs4iz3ndCYP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2o6kd7AvINAWT35YQ2nU7Z
          claim_id: c_kMvks5k75hg2zYYvfVcVxs
          source_id: s_pYMt3C2KB4mLn2QTzFvqN1
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 30：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hBA95seF4jfn429UmR76Q6
        status: active
        display_name: 王守質
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王坦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王坦 | accepted |
| bio.summary | 王坦，唐人物。籍贯長安。（中国历代人物传记资料库 CBDB 154910） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hBA95seF4jfn429UmR76Q6 | 王守質 | accepted |

## 外部来源

- [中国历代人物传记资料库：王坦（CBDB 154910）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154910&o=json)
