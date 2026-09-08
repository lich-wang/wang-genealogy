---
schema: wang-person/v1
id: p_ptMfEt1rAT4WiPXRdKXa9c
status: active
merged_into: null
display_name: 王馨
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1NTZASHnnPVXJrgvGmzmki
        subject_person_id: p_ptMfEt1rAT4WiPXRdKXa9c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王馨，明人物。CBDB 记录其曾任教諭、中書舍人。中国历代人物传记资料库（CBDB）以人物编号 302967 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_MXEgZHsrvDifMYPDg1tBMk
          claim_id: c_1NTZASHnnPVXJrgvGmzmki
          source_id: s_NsaP8YXgvL5EfLzqYqofhp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_NsaP8YXgvL5EfLzqYqofhp
            source_type: api_record
            title: 维基数据：王馨（Q45626817）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45626817
            external_identifier: Q45626817
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:20.507Z
            metadata_json: null
        - id: cs_6QXGC1_7-Z2-KDU0144wF0
          claim_id: c_1NTZASHnnPVXJrgvGmzmki
          source_id: s_McGXGnhaqmXfDMKXXBUtoM
          stance: supports
          locator: CBDB:302967
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_McGXGnhaqmXfDMKXXBUtoM
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王馨（302967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302967&o=json
            external_identifier: CBDB:302967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:20.654Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1aBuLPP8kmwJtHGQnpv59q
        subject_person_id: p_ptMfEt1rAT4WiPXRdKXa9c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王馨
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JWbxNoS811ZSkb1hnSoJAg
          claim_id: c_1aBuLPP8kmwJtHGQnpv59q
          source_id: s_McGXGnhaqmXfDMKXXBUtoM
          stance: supports
          locator: Q45626817
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_psKk7fg8hiq25Lo2Rw2yA5
          claim_id: c_1aBuLPP8kmwJtHGQnpv59q
          source_id: s_NsaP8YXgvL5EfLzqYqofhp
          stance: supports
          locator: Q45626817
          quotation: null
          interpretation_note: null
          source:
            id: s_NsaP8YXgvL5EfLzqYqofhp
            source_type: api_record
            title: 维基数据：王馨（Q45626817）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45626817
            external_identifier: Q45626817
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:20.507Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bumnwNPAP8b4FUMmKycKgu
        subject_person_id: p_QF2bE4nFJ23UCeYuUNVU4y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ptMfEt1rAT4WiPXRdKXa9c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wAmyNjjcscKQFZAysjPnbq
          claim_id: c_bumnwNPAP8b4FUMmKycKgu
          source_id: s_JPS87FRrWQm4pjAuRjqBLG
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_JPS87FRrWQm4pjAuRjqBLG
            source_type: api_record
            title: 维基数据：王孟华（Q45626753）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45626753
            external_identifier: Q45626753
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_epRhHTnQKHQvkDqJP3W7ri
          claim_id: c_bumnwNPAP8b4FUMmKycKgu
          source_id: s_NsaP8YXgvL5EfLzqYqofhp
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_QF2bE4nFJ23UCeYuUNVU4y
        status: active
        display_name: 王孟华
        merged_into_person_id: null
  children:
    - claim:
        id: c_KWXdZhHobTTkLwe4r4HpD9
        subject_person_id: p_ptMfEt1rAT4WiPXRdKXa9c
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YCdG7XtqNcYaExuN76xqKv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AmbBcQSqzGATpbzN8BGMgx
          claim_id: c_KWXdZhHobTTkLwe4r4HpD9
          source_id: s_y5KoWVZ1HsF6z8upxwGLeU
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_y5KoWVZ1HsF6z8upxwGLeU
            source_type: api_record
            title: 维基数据：王瑶（Q45626878）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45626878
            external_identifier: Q45626878
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:12.194Z
            metadata_json: null
        - id: cs_tTR1tnVGbBjKWZgRKbkyxb
          claim_id: c_KWXdZhHobTTkLwe4r4HpD9
          source_id: s_NsaP8YXgvL5EfLzqYqofhp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_YCdG7XtqNcYaExuN76xqKv
        status: active
        display_name: 王瑶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王馨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王馨，明人物。CBDB 记录其曾任教諭、中書舍人。中国历代人物传记资料库（CBDB）以人物编号 302967 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王馨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QF2bE4nFJ23UCeYuUNVU4y | 王孟华 | accepted |
| children | p_YCdG7XtqNcYaExuN76xqKv | 王瑶 | accepted |

## 外部来源

- [维基数据：王孟华（Q45626753）](https://www.wikidata.org/wiki/Q45626753)
- [维基数据：王馨（Q45626817）](https://www.wikidata.org/wiki/Q45626817)
- [维基数据：王瑶（Q45626878）](https://www.wikidata.org/wiki/Q45626878)
- [CBDB 中国历代人物传记资料库：王馨（302967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302967&o=json)
