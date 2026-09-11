---
schema: wang-person/v1
id: p_ihVd3DFKV5nSykQvLr4972
status: active
merged_into: null
display_name: 王篆
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uC6FZEyDEtD4RcTa9BNbQF
        subject_person_id: p_ihVd3DFKV5nSykQvLr4972
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王篆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5N4yJBw7EAE8BdQDZJcUFk
          claim_id: c_uC6FZEyDEtD4RcTa9BNbQF
          source_id: s_Q8FE2vrPKFzsHFKuhZ2JDP
          stance: supports
          locator: CBDB:175742
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175742）
          source: &a1
            id: s_Q8FE2vrPKFzsHFKuhZ2JDP
            source_type: api_record
            title: 中国历代人物传记资料库：王篆（CBDB 175742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175742&o=json
            external_identifier: CBDB:175742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.091Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9QCUuWVwGb2vGKP2PaRE91
        subject_person_id: p_ihVd3DFKV5nSykQvLr4972
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 806年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CMACZfDXwNpJSW4pYbL5pM
          claim_id: c_9QCUuWVwGb2vGKP2PaRE91
          source_id: s_Q8FE2vrPKFzsHFKuhZ2JDP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MQzCkbfRZgPGjxo2unMLVu
        subject_person_id: p_ihVd3DFKV5nSykQvLr4972
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
        - id: cs_VcUNx68W4iRAqJBP3ynNz8
          claim_id: c_MQzCkbfRZgPGjxo2unMLVu
          source_id: s_Q8FE2vrPKFzsHFKuhZ2JDP
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
        id: c_NI-y9eA9J6NsaGOl9TweV5
        subject_person_id: p_FgNdna5jbkSjPaChaqn4uq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ihVd3DFKV5nSykQvLr4972
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1nYwdwuaBnuLslhaSHQD4E
          claim_id: c_NI-y9eA9J6NsaGOl9TweV5
          source_id: s_uPCPzGSjaQ1Jkg91ZKh1Y9
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uPCPzGSjaQ1Jkg91ZKh1Y9
            source_type: api_record
            title: 中国历代人物传记资料库：王邕（CBDB 175741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175741&o=json
            external_identifier: CBDB:175741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.090Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FgNdna5jbkSjPaChaqn4uq
        status: active
        display_name: 王邕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王篆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王篆 | accepted |
| death.date | 806年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FgNdna5jbkSjPaChaqn4uq | 王邕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邕（CBDB 175741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175741&o=json)
- [中国历代人物传记资料库：王篆（CBDB 175742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175742&o=json)
