---
schema: wang-person/v1
id: p_kiqfR3ebLRfZwsFStCJHnu
status: active
merged_into: null
display_name: 王奎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z9SP5epgyMyhVsaQrn1TGN
        subject_person_id: p_kiqfR3ebLRfZwsFStCJHnu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f11k2A9LLdYxusiD7sC3nt
          claim_id: c_z9SP5epgyMyhVsaQrn1TGN
          source_id: s_JNVEL29fpLdQjeQLsuLBte
          stance: supports
          locator: CBDB:22244
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22244）
          source: &a1
            id: s_JNVEL29fpLdQjeQLsuLBte
            source_type: api_record
            title: 中国历代人物传记资料库：王奎（CBDB 22244）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22244&o=json
            external_identifier: CBDB:22244
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.861Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YYuGiXNy6eY8U1eAU64piK
        subject_person_id: p_kiqfR3ebLRfZwsFStCJHnu
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
        - id: cs_aq6UazCyPmyk2ERu7BNbsE
          claim_id: c_YYuGiXNy6eY8U1eAU64piK
          source_id: s_JNVEL29fpLdQjeQLsuLBte
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
        id: c_s233mY_6issQVPxLra7Qo1
        subject_person_id: p_6SPn6thp9AmqGVJ3dXMfwA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kiqfR3ebLRfZwsFStCJHnu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HH0FqRYhE3QkndIZKWiBRA
          claim_id: c_s233mY_6issQVPxLra7Qo1
          source_id: s_JNVEL29fpLdQjeQLsuLBte
          stance: supports
          locator: CBDB 双向互证（父 王雋卿 ⇄ 子 王奎）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_6SPn6thp9AmqGVJ3dXMfwA
        status: active
        display_name: 王雋卿
        merged_into_person_id: null
  children:
    - claim:
        id: c_7thLgZtaQJlzx-jLYN2K02
        subject_person_id: p_kiqfR3ebLRfZwsFStCJHnu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bnA3961k3JoTm11z7TSTS5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EmKmglsHAWuhBrzfcyFfAe
          claim_id: c_7thLgZtaQJlzx-jLYN2K02
          source_id: s_VsD9ktYiW3BBpq7VUSucRs
          stance: supports
          locator: CBDB 双向互证（父 王奎 ⇄ 子 王泰來）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_VsD9ktYiW3BBpq7VUSucRs
            source_type: api_record
            title: 中国历代人物传记资料库：王泰來（CBDB 22241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22241&o=json
            external_identifier: CBDB:22241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.860Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bnA3961k3JoTm11z7TSTS5
        status: active
        display_name: 王泰來
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奎 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6SPn6thp9AmqGVJ3dXMfwA | 王雋卿 | accepted |
| children | p_bnA3961k3JoTm11z7TSTS5 | 王泰來 | accepted |

## 外部来源

- [中国历代人物传记资料库：王奎（CBDB 22244）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22244&o=json)
- [中国历代人物传记资料库：王泰來（CBDB 22241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22241&o=json)
