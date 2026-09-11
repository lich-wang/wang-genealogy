---
schema: wang-person/v1
id: p_neZGHyEuAgnr3hzP3cHchk
status: active
merged_into: null
display_name: 王舜漁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j6s1mCeWnFxC3VMwtzL2La
        subject_person_id: p_neZGHyEuAgnr3hzP3cHchk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜漁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8ijJdpPWLMfsTMLjZ2dHzv
          claim_id: c_j6s1mCeWnFxC3VMwtzL2La
          source_id: s_zRp8nuvnRWxk9K8zDEXmc4
          stance: supports
          locator: CBDB:126735
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126735）
          source: &a1
            id: s_zRp8nuvnRWxk9K8zDEXmc4
            source_type: api_record
            title: 中国历代人物传记资料库：王舜漁（CBDB 126735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126735&o=json
            external_identifier: CBDB:126735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.183Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QXv48kK7y8eRyyB9oG7Lx7
        subject_person_id: p_neZGHyEuAgnr3hzP3cHchk
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1489年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QEFwYpBAoENAU8ZcRJCh5B
          claim_id: c_QXv48kK7y8eRyyB9oG7Lx7
          source_id: s_zRp8nuvnRWxk9K8zDEXmc4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_rmrQuFbCCypMLwSnUH3NoG
        subject_person_id: p_neZGHyEuAgnr3hzP3cHchk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1535年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U5hfx9qHXrs4tnMHsry5LD
          claim_id: c_rmrQuFbCCypMLwSnUH3NoG
          source_id: s_zRp8nuvnRWxk9K8zDEXmc4
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
        id: c_Ga3VjK9wPmCV6WZBysGZeb
        subject_person_id: p_neZGHyEuAgnr3hzP3cHchk
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
        - id: cs_3dckW3eN1i4Zn87b12xDr4
          claim_id: c_Ga3VjK9wPmCV6WZBysGZeb
          source_id: s_zRp8nuvnRWxk9K8zDEXmc4
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
        id: c_DnpnUifP3kO4Plp7UHBD1x
        subject_person_id: p_2hjZsbenJ87Bo5wxCf861P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_neZGHyEuAgnr3hzP3cHchk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mqy1qB2fFzXIRdt19x0tBa
          claim_id: c_DnpnUifP3kO4Plp7UHBD1x
          source_id: s_oL5csJSw2bgBCPoxoaRmFd
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oL5csJSw2bgBCPoxoaRmFd
            source_type: api_record
            title: 中国历代人物传记资料库：王原吉（CBDB 279499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279499&o=json
            external_identifier: CBDB:279499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2hjZsbenJ87Bo5wxCf861P
        status: active
        display_name: 王原吉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王舜漁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舜漁 | accepted |
| birth.date | 1489年 | accepted |
| death.date | 1535年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2hjZsbenJ87Bo5wxCf861P | 王原吉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王舜漁（CBDB 126735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126735&o=json)
- [中国历代人物传记资料库：王原吉（CBDB 279499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279499&o=json)
