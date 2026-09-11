---
schema: wang-person/v1
id: p_FxDnZ7tzsLrvZRviCHaK5y
status: active
merged_into: null
display_name: 王睿
cbdb_id: 288332
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yFsp4N9CPrP8rHawwrF3kH
        subject_person_id: p_FxDnZ7tzsLrvZRviCHaK5y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睿
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AgkaAqgYFXFzyjEnRMsQho
          claim_id: c_yFsp4N9CPrP8rHawwrF3kH
          source_id: s_CzK2yqN8DLsEC3RpxtfMj4
          stance: supports
          locator: Q45449642
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_CzK2yqN8DLsEC3RpxtfMj4
            source_type: api_record
            title: 维基数据：王睿（Q45449642）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45449642
            external_identifier: Q45449642
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_wBtsNDzFWJeL84PKd5eUCU
          claim_id: c_yFsp4N9CPrP8rHawwrF3kH
          source_id: s_W4ZvUQHNuHnWpDzbwAvVrQ
          stance: supports
          locator: CBDB:288332
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_W4ZvUQHNuHnWpDzbwAvVrQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王睿（288332）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288332&o=json
            external_identifier: CBDB:288332
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TUSQiY9StPD82Aw9Enf735
        subject_person_id: p_FxDnZ7tzsLrvZRviCHaK5y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Ming dynasty person CBDB = 288332
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SxAZtG6XVsuo1JVve5VfU7
          claim_id: c_TUSQiY9StPD82Aw9Enf735
          source_id: s_CzK2yqN8DLsEC3RpxtfMj4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_4CBJHyfmjjqLXBC7uZhbzP
        subject_person_id: p_FxDnZ7tzsLrvZRviCHaK5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qa4sYo9q4waHmECZyCZ8M3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qXH7VGTJTDekUigPsdHZdd
          claim_id: c_4CBJHyfmjjqLXBC7uZhbzP
          source_id: s_KYCJ7T8t7oGBe9X6NxJ2Mi
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_KYCJ7T8t7oGBe9X6NxJ2Mi
            source_type: api_record
            title: 维基数据：王文（Q45449706）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45449706
            external_identifier: Q45449706
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:57.484Z
            metadata_json: null
        - id: cs_igK4wfV2Wj99JECd16QUYq
          claim_id: c_4CBJHyfmjjqLXBC7uZhbzP
          source_id: s_CzK2yqN8DLsEC3RpxtfMj4
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_qa4sYo9q4waHmECZyCZ8M3
        status: active
        display_name: 王文
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_Iz3YiirdX4EPqZsHBstDgE
        subject_person_id: p_FxDnZ7tzsLrvZRviCHaK5y
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nTV1T9RX74vHEA3tyMaebm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mhcUwAOM6bZr0ar7TznN0g
          claim_id: c_Iz3YiirdX4EPqZsHBstDgE
          source_id: s_VNsrGWznq4wS5HwLa4u6ov
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百七十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VNsrGWznq4wS5HwLa4u6ov
            source_type: api_record
            title: 中国历代人物传记资料库：王與齡（CBDB 68464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68464&o=json
            external_identifier: CBDB:68464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.073Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nTV1T9RX74vHEA3tyMaebm
        status: active
        display_name: 王與齡
        merged_into_person_id: null
  other: []
---

# 王睿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王睿 | accepted |
| bio.summary | Ming dynasty person CBDB = 288332 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_qa4sYo9q4waHmECZyCZ8M3 | 王文 | accepted |
| descendants | p_nTV1T9RX74vHEA3tyMaebm | 王與齡 | accepted |

## 外部来源

- [维基数据：王睿（Q45449642）](https://www.wikidata.org/wiki/Q45449642)
- [维基数据：王文（Q45449706）](https://www.wikidata.org/wiki/Q45449706)
- [中国历代人物传记资料库：王與齡（CBDB 68464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68464&o=json)
- [CBDB 中国历代人物传记资料库：王睿（288332）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288332&o=json)
