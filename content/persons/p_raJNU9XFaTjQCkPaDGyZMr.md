---
schema: wang-person/v1
id: p_raJNU9XFaTjQCkPaDGyZMr
status: active
merged_into: null
display_name: 王仁表
cbdb_id: 186697
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PaX8ENgdJQV9KUNdb1SyGX
        subject_person_id: p_raJNU9XFaTjQCkPaDGyZMr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁表
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RNwSPoom1fc8cuK1SrwWmZ
          claim_id: c_PaX8ENgdJQV9KUNdb1SyGX
          source_id: s_tgyG95rqwPvRUevbNmfHnA
          stance: supports
          locator: Q45685646
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_tgyG95rqwPvRUevbNmfHnA
            source_type: api_record
            title: 维基数据：王仁表（Q45685646）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45685646
            external_identifier: Q45685646
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_7BGqvncVi6AkBa3wGW88Gs
          claim_id: c_PaX8ENgdJQV9KUNdb1SyGX
          source_id: s_5EJ2HFLdeJfAQr523P7Kq3
          stance: supports
          locator: CBDB:186697
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_5EJ2HFLdeJfAQr523P7Kq3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仁表（186697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186697&o=json
            external_identifier: CBDB:186697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BHuV4Kwjif1imq95983TEE
        subject_person_id: p_raJNU9XFaTjQCkPaDGyZMr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Tang dynasty person CBDB = 186697
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YwzRhFGNmCB5euYUd232td
          claim_id: c_BHuV4Kwjif1imq95983TEE
          source_id: s_tgyG95rqwPvRUevbNmfHnA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_UWKAJE7gpgu3j6CTUei3wD
        subject_person_id: p_raJNU9XFaTjQCkPaDGyZMr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 699年
            calendar_note: 维基数据 P570 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vkDn6aqkZ7Q25NXzvvCke6
          claim_id: c_UWKAJE7gpgu3j6CTUei3wD
          source_id: s_tgyG95rqwPvRUevbNmfHnA
          stance: supports
          locator: P570（死亡日期）
          quotation: null
          interpretation_note: 维基数据 P570
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_z-MoRyUhGGSTmDnXV1Y8-x
        subject_person_id: p_tneJQvKK7NPkwfNwUhfwqV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_raJNU9XFaTjQCkPaDGyZMr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z80aFoBVR02KI2g24nlPmR
          claim_id: c_z-MoRyUhGGSTmDnXV1Y8-x
          source_id: s_P4PcPxcheiEx26Wv36v5Mk
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P4PcPxcheiEx26Wv36v5Mk
            source_type: api_record
            title: 中国历代人物传记资料库：王孝倫（CBDB 175773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175773&o=json
            external_identifier: CBDB:175773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.259Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tneJQvKK7NPkwfNwUhfwqV
        status: active
        display_name: 王孝倫
        merged_into_person_id: null
  children:
    - claim:
        id: c_HPkHefnoYQwULKSZdJpg5v
        subject_person_id: p_raJNU9XFaTjQCkPaDGyZMr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tbdF719iaM43dCPwE1ecxt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GYLmgKDxbHmSUUtqYRVViW
          claim_id: c_HPkHefnoYQwULKSZdJpg5v
          source_id: s_FgpvqCoh8L8fGQoXHABRtp
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_FgpvqCoh8L8fGQoXHABRtp
            source_type: api_record
            title: 维基数据：王敬同（Q45685614）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45685614
            external_identifier: Q45685614
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:04.029Z
            metadata_json: null
        - id: cs_NRj8AkQXMUcqQPDV9JdDdF
          claim_id: c_HPkHefnoYQwULKSZdJpg5v
          source_id: s_tgyG95rqwPvRUevbNmfHnA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_tbdF719iaM43dCPwE1ecxt
        status: active
        display_name: 王敬同
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仁表

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁表 | accepted |
| bio.summary | Tang dynasty person CBDB = 186697 | accepted |
| death.date | 699年 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tneJQvKK7NPkwfNwUhfwqV | 王孝倫 | accepted |
| children | p_tbdF719iaM43dCPwE1ecxt | 王敬同 | accepted |

## 外部来源

- [维基数据：王敬同（Q45685614）](https://www.wikidata.org/wiki/Q45685614)
- [维基数据：王仁表（Q45685646）](https://www.wikidata.org/wiki/Q45685646)
- [中国历代人物传记资料库：王孝倫（CBDB 175773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175773&o=json)
- [CBDB 中国历代人物传记资料库：王仁表（186697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186697&o=json)
