---
schema: wang-person/v1
id: p_cPByiJ9wXckn8oTbxdb6fC
status: active
merged_into: null
display_name: 王世仁
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jZSCr1wHeSJzMNCpugeech
        subject_person_id: p_cPByiJ9wXckn8oTbxdb6fC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hBLemvn8uwrPMbCzqh3AB6
          claim_id: c_jZSCr1wHeSJzMNCpugeech
          source_id: s_sX7rJgCBwXW9Nqr7dh3G1R
          stance: supports
          locator: CBDB:123385
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（123385）
          source: &a1
            id: s_sX7rJgCBwXW9Nqr7dh3G1R
            source_type: api_record
            title: 中国历代人物传记资料库：王世仁（CBDB 123385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123385&o=json
            external_identifier: CBDB:123385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.932Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hXQHyYg2E9m1WxTe7SNxJ5
        subject_person_id: p_cPByiJ9wXckn8oTbxdb6fC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1556年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T2FLNHwqe5Y6j9L1HVUsA8
          claim_id: c_hXQHyYg2E9m1WxTe7SNxJ5
          source_id: s_sX7rJgCBwXW9Nqr7dh3G1R
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
        id: c_HUyEY1z3UjLyX5CvvGFhyM
        subject_person_id: p_cPByiJ9wXckn8oTbxdb6fC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1637年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5ZQoiEdi91Ab41o73YFGSS
          claim_id: c_HUyEY1z3UjLyX5CvvGFhyM
          source_id: s_sX7rJgCBwXW9Nqr7dh3G1R
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
        id: c_V7bEZ4JVmSWD36QpK9TTv1
        subject_person_id: p_cPByiJ9wXckn8oTbxdb6fC
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
        - id: cs_dXzjYQpRFtSBdJWtAjQn33
          claim_id: c_V7bEZ4JVmSWD36QpK9TTv1
          source_id: s_sX7rJgCBwXW9Nqr7dh3G1R
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
        id: c_SHTqrfKZkDaPmoWMEEBs_R
        subject_person_id: p_cPByiJ9wXckn8oTbxdb6fC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1p4v7xXard7D3C1bYnL9Cj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mp2aNVuqkg3UjJJXsDihJE
          claim_id: c_SHTqrfKZkDaPmoWMEEBs_R
          source_id: s_AVZMZdTFx3hfJDs1ou81fK
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #5176：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AVZMZdTFx3hfJDs1ou81fK
            source_type: api_record
            title: 中国历代人物传记资料库：王徽（CBDB 123386）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123386&o=json
            external_identifier: CBDB:123386
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.933Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1p4v7xXard7D3C1bYnL9Cj
        status: active
        display_name: 王徽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_qkkswUQJHkXOd4X7L09r-T
        subject_person_id: p_2StFDBuSe9949aH2UpEtKJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cPByiJ9wXckn8oTbxdb6fC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qsioddvqY6lHqSEDSMUXkW
          claim_id: c_qkkswUQJHkXOd4X7L09r-T
          source_id: s_rjHF3cFuoMPWdTQFjVk9Nq
          stance: supports
          locator: 牧齋有學集：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rjHF3cFuoMPWdTQFjVk9Nq
            source_type: api_record
            title: 中国历代人物传记资料库：王燾（CBDB 338252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338252&o=json
            external_identifier: CBDB:338252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.538Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2StFDBuSe9949aH2UpEtKJ
        status: active
        display_name: 王燾
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王世仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世仁 | accepted |
| birth.date | 1556年 | accepted |
| death.date | 1637年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1p4v7xXard7D3C1bYnL9Cj | 王徽 | accepted |
| ancestors | p_2StFDBuSe9949aH2UpEtKJ | 王燾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王燾（CBDB 338252）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338252&o=json)
- [中国历代人物传记资料库：王徽（CBDB 123386）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123386&o=json)
- [中国历代人物传记资料库：王世仁（CBDB 123385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123385&o=json)
