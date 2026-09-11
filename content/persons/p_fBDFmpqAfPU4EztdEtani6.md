---
schema: wang-person/v1
id: p_fBDFmpqAfPU4EztdEtani6
status: active
merged_into: null
display_name: 王朝達
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XxD3t86wA64f9WDfcBFwt5
        subject_person_id: p_fBDFmpqAfPU4EztdEtani6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4HYcu7sfNZhCNoPABBGyb9
          claim_id: c_XxD3t86wA64f9WDfcBFwt5
          source_id: s_72EJznLo4C5LLDFqb9gr5c
          stance: supports
          locator: CBDB:563195
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（563195）
          source: &a1
            id: s_72EJznLo4C5LLDFqb9gr5c
            source_type: api_record
            title: 中国历代人物传记资料库：王朝達（CBDB 563195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563195&o=json
            external_identifier: CBDB:563195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7ECbRb5MYZusuE2eGmH2Bs
        subject_person_id: p_fBDFmpqAfPU4EztdEtani6
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
        - id: cs_4axQFVJak7eo92Upzfu3mT
          claim_id: c_7ECbRb5MYZusuE2eGmH2Bs
          source_id: s_72EJznLo4C5LLDFqb9gr5c
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
        id: c_rIjkh5XWrC_s9s3nU62yfl
        subject_person_id: p_9eCcDpeVkEgC9tqMMZEZWG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fBDFmpqAfPU4EztdEtani6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lft3h92wYRdeSkUnRwMtYB
          claim_id: c_rIjkh5XWrC_s9s3nU62yfl
          source_id: s_72EJznLo4C5LLDFqb9gr5c
          stance: supports
          locator: CBDB 双向互证（父 王忠政 ⇄ 子 王朝達）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_9eCcDpeVkEgC9tqMMZEZWG
        status: active
        display_name: 王忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王朝達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝達 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9eCcDpeVkEgC9tqMMZEZWG | 王忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝達（CBDB 563195）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563195&o=json)
