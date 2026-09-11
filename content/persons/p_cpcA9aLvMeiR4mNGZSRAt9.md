---
schema: wang-person/v1
id: p_cpcA9aLvMeiR4mNGZSRAt9
status: active
merged_into: null
display_name: 王稻孫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qHhokiAYcLCvK59CuHFxuS
        subject_person_id: p_cpcA9aLvMeiR4mNGZSRAt9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稻孫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XqQt25ijMitqQ9wN6tdqh8
          claim_id: c_qHhokiAYcLCvK59CuHFxuS
          source_id: s_eQ4MMxL2xapPhR5fX5YPcG
          stance: supports
          locator: CBDB:526984
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526984）
          source: &a1
            id: s_eQ4MMxL2xapPhR5fX5YPcG
            source_type: api_record
            title: 中国历代人物传记资料库：王稻孫（CBDB 526984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526984&o=json
            external_identifier: CBDB:526984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.329Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GtFiWrwxsD92fhNK8ZXTM1
        subject_person_id: p_cpcA9aLvMeiR4mNGZSRAt9
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
        - id: cs_aBsgz2U4HoGSGKbyooK78J
          claim_id: c_GtFiWrwxsD92fhNK8ZXTM1
          source_id: s_eQ4MMxL2xapPhR5fX5YPcG
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
        id: c_87YKYtEnP-BB6uUAaHRP-v
        subject_person_id: p_nwCMi4iZGr3qyJpkQ9CEtf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cpcA9aLvMeiR4mNGZSRAt9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OZK2eAW4O2Fy1jeNOdzlNp
          claim_id: c_87YKYtEnP-BB6uUAaHRP-v
          source_id: s_eQ4MMxL2xapPhR5fX5YPcG
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13164：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nwCMi4iZGr3qyJpkQ9CEtf
        status: active
        display_name: 王澍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王稻孫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王稻孫 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nwCMi4iZGr3qyJpkQ9CEtf | 王澍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王稻孫（CBDB 526984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526984&o=json)
