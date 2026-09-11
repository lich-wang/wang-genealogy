---
schema: wang-person/v1
id: p_UmWG5KwcyqBx47H2fQ3KZG
status: active
merged_into: null
display_name: 王漢雲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N93ebmBPqFc3JT2eQ9DtcB
        subject_person_id: p_UmWG5KwcyqBx47H2fQ3KZG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漢雲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h5PgJbX22D6VEFzyMrr5Dv
          claim_id: c_N93ebmBPqFc3JT2eQ9DtcB
          source_id: s_4ZRD85K9cowkjQx5H5jk8V
          stance: supports
          locator: CBDB:526980
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526980）
          source: &a1
            id: s_4ZRD85K9cowkjQx5H5jk8V
            source_type: api_record
            title: 中国历代人物传记资料库：王漢雲（CBDB 526980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526980&o=json
            external_identifier: CBDB:526980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.327Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8sRiKYWkdsWjD69cnEhUUq
        subject_person_id: p_UmWG5KwcyqBx47H2fQ3KZG
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
        - id: cs_VYRmM6TdhL45rZkTY7HMsQ
          claim_id: c_8sRiKYWkdsWjD69cnEhUUq
          source_id: s_4ZRD85K9cowkjQx5H5jk8V
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
        id: c_Ku3XnjcN5gkg6hopcGZ-Kp
        subject_person_id: p_RJHZpoUqqnfgB9kSGdY4H7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UmWG5KwcyqBx47H2fQ3KZG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7K0tmTx0EjGZ2B2ucS2pJG
          claim_id: c_Ku3XnjcN5gkg6hopcGZ-Kp
          source_id: s_qBqQM2e3EYkUFDzgSya5gc
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13157：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qBqQM2e3EYkUFDzgSya5gc
            source_type: api_record
            title: 中国历代人物传记资料库：王德榜（CBDB 69446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69446&o=json
            external_identifier: CBDB:69446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.277Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RJHZpoUqqnfgB9kSGdY4H7
        status: active
        display_name: 王德榜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王漢雲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漢雲 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RJHZpoUqqnfgB9kSGdY4H7 | 王德榜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德榜（CBDB 69446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69446&o=json)
- [中国历代人物传记资料库：王漢雲（CBDB 526980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526980&o=json)
