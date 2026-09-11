---
schema: wang-person/v1
id: p_hPDgE82WiuZqRbH7NGsbnF
status: active
merged_into: null
display_name: 王舜臣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4wJmEfwkcAwCw6eKdVd65j
        subject_person_id: p_hPDgE82WiuZqRbH7NGsbnF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xQu8fXQntBYXhueH29fsE1
          claim_id: c_4wJmEfwkcAwCw6eKdVd65j
          source_id: s_76mVDbVxxaoGfdHq6Frwjt
          stance: supports
          locator: CBDB:570867
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（570867）
          source: &a1
            id: s_76mVDbVxxaoGfdHq6Frwjt
            source_type: api_record
            title: 中国历代人物传记资料库：王舜臣（CBDB 570867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570867&o=json
            external_identifier: CBDB:570867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.876Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WvQCF7tAhBxSDWwq2naKEr
        subject_person_id: p_hPDgE82WiuZqRbH7NGsbnF
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
        - id: cs_SNNBjLoUkhL2w4agEGX69e
          claim_id: c_WvQCF7tAhBxSDWwq2naKEr
          source_id: s_76mVDbVxxaoGfdHq6Frwjt
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
        id: c_OGOyC8PsyFlYTncy7BCK3a
        subject_person_id: p_dbtAFAp1qDcATkc5iZ9Z5E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hPDgE82WiuZqRbH7NGsbnF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__RIbtpGKHLMVmtG79JJf6i
          claim_id: c_OGOyC8PsyFlYTncy7BCK3a
          source_id: s_F5RzLY1QCVEa9dNVQK4y3X
          stance: supports
          locator: 紹興府志:八十卷，lgid=316861：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_F5RzLY1QCVEa9dNVQK4y3X
            source_type: api_record
            title: 中国历代人物传记资料库：王師課（CBDB 570832）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570832&o=json
            external_identifier: CBDB:570832
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.645Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dbtAFAp1qDcATkc5iZ9Z5E
        status: active
        display_name: 王師課
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王舜臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舜臣 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dbtAFAp1qDcATkc5iZ9Z5E | 王師課 | accepted |

## 外部来源

- [中国历代人物传记资料库：王師課（CBDB 570832）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570832&o=json)
- [中国历代人物传记资料库：王舜臣（CBDB 570867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570867&o=json)
