---
schema: wang-person/v1
id: p_ZRQGakw1b52uVgFa6TPuo2
status: active
merged_into: null
display_name: 王体仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DosH9GAsJmTn7Tzofx5HL3
        subject_person_id: p_ZRQGakw1b52uVgFa6TPuo2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王体仁
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_He328S3mmu9CEH3wVAAtJY
          claim_id: c_DosH9GAsJmTn7Tzofx5HL3
          source_id: s_WADNNq9aP2LVf5P8axrJUy
          stance: supports
          locator: Q45677609
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_WADNNq9aP2LVf5P8axrJUy
            source_type: api_record
            title: 维基数据：王体仁（Q45677609）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45677609
            external_identifier: Q45677609
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_LvoT883Bw6GqPjsNvFDEFU
          claim_id: c_DosH9GAsJmTn7Tzofx5HL3
          source_id: s_EU81XzzSRVgkEejznEAcvy
          stance: supports
          locator: CBDB:175853
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_EU81XzzSRVgkEejznEAcvy
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王體仁（175853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175853&o=json
            external_identifier: CBDB:175853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PUyCqczLsQ59sRZYuo79Yc
        subject_person_id: p_ZRQGakw1b52uVgFa6TPuo2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Tang dynasty person CBDB = 175853
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_to997Vq92ESqJKthsMGUZ8
          claim_id: c_PUyCqczLsQ59sRZYuo79Yc
          source_id: s_WADNNq9aP2LVf5P8axrJUy
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
        id: c_22BV6JBKqjra31spDmTnzq
        subject_person_id: p_ZRQGakw1b52uVgFa6TPuo2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 704年
            calendar_note: 维基数据 P570 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G9PKNhK9mcj2KewsdNG67J
          claim_id: c_22BV6JBKqjra31spDmTnzq
          source_id: s_WADNNq9aP2LVf5P8axrJUy
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
        id: c_Lb7x4dqhZRCZSUEaQtWDtH
        subject_person_id: p_JfWbDHNGFyJz6Cq8yoPLva
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZRQGakw1b52uVgFa6TPuo2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EaAFV2pSks9D6jSZDnQ93N
          claim_id: c_Lb7x4dqhZRCZSUEaQtWDtH
          source_id: s_e6LDhxKxZyo3PzSjXeRfWW
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_e6LDhxKxZyo3PzSjXeRfWW
            source_type: api_record
            title: 维基数据：王崇基（Q45422606）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45422606
            external_identifier: Q45422606
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:14.259Z
            metadata_json: null
        - id: cs_PaLqemkm9JyzD65xWwroNR
          claim_id: c_Lb7x4dqhZRCZSUEaQtWDtH
          source_id: s_WADNNq9aP2LVf5P8axrJUy
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_JfWbDHNGFyJz6Cq8yoPLva
        status: active
        display_name: 王崇基
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王体仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王体仁 | accepted |
| bio.summary | Tang dynasty person CBDB = 175853 | accepted |
| death.date | 704年 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JfWbDHNGFyJz6Cq8yoPLva | 王崇基 | accepted |

## 外部来源

- [维基数据：王崇基（Q45422606）](https://www.wikidata.org/wiki/Q45422606)
- [维基数据：王体仁（Q45677609）](https://www.wikidata.org/wiki/Q45677609)
- [CBDB 中国历代人物传记资料库：王體仁（175853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175853&o=json)
