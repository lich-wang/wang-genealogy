---
schema: wang-person/v1
id: p_Y3Y6HkmzixiBERDAuwhHZ6
status: active
merged_into: null
display_name: 王用汝
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_122DEdoL3F45xUXpiSi639
        subject_person_id: p_Y3Y6HkmzixiBERDAuwhHZ6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用汝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ubyiArHmCu9ifrFxikpeqv
          claim_id: c_122DEdoL3F45xUXpiSi639
          source_id: s_ozqQVWwuJxzAFq8sSYvE1j
          stance: supports
          locator: CBDB:69159
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69159）
          source: &a1
            id: s_ozqQVWwuJxzAFq8sSYvE1j
            source_type: api_record
            title: 中国历代人物传记资料库：王用汝（CBDB 69159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69159&o=json
            external_identifier: CBDB:69159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.132Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Ti2vimmNxUBB6N2ofLn4mU
        subject_person_id: p_Y3Y6HkmzixiBERDAuwhHZ6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1816年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M3YgtWPJ2XjDm4oic2AeiP
          claim_id: c_Ti2vimmNxUBB6N2ofLn4mU
          source_id: s_ozqQVWwuJxzAFq8sSYvE1j
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
        id: c_evyhgFTK64ECZaGt2fZ7T5
        subject_person_id: p_Y3Y6HkmzixiBERDAuwhHZ6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1857年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NytHT9PY9RMB4pzP7kTqWs
          claim_id: c_evyhgFTK64ECZaGt2fZ7T5
          source_id: s_ozqQVWwuJxzAFq8sSYvE1j
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
        id: c_4GMrLsnyGVurTCKGR23RfP
        subject_person_id: p_Y3Y6HkmzixiBERDAuwhHZ6
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
        - id: cs_5Sk74Hiob1HpkydkCgZGMz
          claim_id: c_4GMrLsnyGVurTCKGR23RfP
          source_id: s_ozqQVWwuJxzAFq8sSYvE1j
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_3RM-fZbjtXo5ByT4beSdSh
        subject_person_id: p_Y3Y6HkmzixiBERDAuwhHZ6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mWjSAt3VM5xUk3y6Uo4ELr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fo1emYOTAI6bnxq2cFs35P
          claim_id: c_3RM-fZbjtXo5ByT4beSdSh
          source_id: s_R2nMyzZQcscJceNsFBMBwb
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12857：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_R2nMyzZQcscJceNsFBMBwb
            source_type: api_record
            title: 中国历代人物传记资料库：王景純（CBDB 526735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526735&o=json
            external_identifier: CBDB:526735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.334Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mWjSAt3VM5xUk3y6Uo4ELr
        status: active
        display_name: 王景純
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王用汝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用汝 | accepted |
| birth.date | 1816年 | accepted |
| death.date | 1857年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_mWjSAt3VM5xUk3y6Uo4ELr | 王景純 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景純（CBDB 526735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526735&o=json)
- [中国历代人物传记资料库：王用汝（CBDB 69159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69159&o=json)
