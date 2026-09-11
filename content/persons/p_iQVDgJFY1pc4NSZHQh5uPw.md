---
schema: wang-person/v1
id: p_iQVDgJFY1pc4NSZHQh5uPw
status: active
merged_into: null
display_name: 王諝
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6zE6vR7E6qVj3AvtZRaFdT
        subject_person_id: p_iQVDgJFY1pc4NSZHQh5uPw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uD3hZYsoT3CUZVp2Yr6iD2
          claim_id: c_6zE6vR7E6qVj3AvtZRaFdT
          source_id: s_pMu5HQC8Raw4a4QiYpDJgQ
          stance: supports
          locator: CBDB:157523
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157523）
          source: &a1
            id: s_pMu5HQC8Raw4a4QiYpDJgQ
            source_type: api_record
            title: 中国历代人物传记资料库：王諝（CBDB 157523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157523&o=json
            external_identifier: CBDB:157523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QKNEg7QqcPA8rjPh3dziQS
        subject_person_id: p_iQVDgJFY1pc4NSZHQh5uPw
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
        - id: cs_xNEU5uuhpwMFrqJN9wAE4Y
          claim_id: c_QKNEg7QqcPA8rjPh3dziQS
          source_id: s_pMu5HQC8Raw4a4QiYpDJgQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_zPUAsouu1VbK0dDTFCP5EQ
        subject_person_id: p_iQVDgJFY1pc4NSZHQh5uPw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_45sVsGucdcRmogpRJoCZis
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YH5d8oM_vcarhuRc8sjvGy
          claim_id: c_zPUAsouu1VbK0dDTFCP5EQ
          source_id: s_ejeYaJmbMLDqJz5NGmDtQp
          stance: supports
          locator: 唐代墓誌匯編:二卷，Baoli 18：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ejeYaJmbMLDqJz5NGmDtQp
            source_type: api_record
            title: 中国历代人物传记资料库：王敬仲（CBDB 141578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141578&o=json
            external_identifier: CBDB:141578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_45sVsGucdcRmogpRJoCZis
        status: active
        display_name: 王敬仲
        merged_into_person_id: null
  other: []
---

# 王諝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諝 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_45sVsGucdcRmogpRJoCZis | 王敬仲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬仲（CBDB 141578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141578&o=json)
- [中国历代人物传记资料库：王諝（CBDB 157523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157523&o=json)
