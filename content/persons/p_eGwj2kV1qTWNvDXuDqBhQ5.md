---
schema: wang-person/v1
id: p_eGwj2kV1qTWNvDXuDqBhQ5
status: active
merged_into: null
display_name: 王希逸
cbdb_id: 13794
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bMbJMLYudVZuu25Rq8ZgK6
        subject_person_id: p_eGwj2kV1qTWNvDXuDqBhQ5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希逸
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jxsThKgYVefXDsEbNRBEsa
          claim_id: c_bMbJMLYudVZuu25Rq8ZgK6
          source_id: s_2j4BogSGxZFwE5R5xB27EN
          stance: supports
          locator: Q45378723
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_2j4BogSGxZFwE5R5xB27EN
            source_type: api_record
            title: 维基数据：王希逸（Q45378723）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45378723
            external_identifier: Q45378723
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_L7MKRjHH6PXLE9qveDnpLU
          claim_id: c_bMbJMLYudVZuu25Rq8ZgK6
          source_id: s_jxpJBLi36Q4xQhDKSJ5WoL
          stance: supports
          locator: CBDB:13794
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_jxpJBLi36Q4xQhDKSJ5WoL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王希逸（13794）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13794&o=json
            external_identifier: CBDB:13794
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d6a62jUwnPBDUA18Zm5h8E
        subject_person_id: p_eGwj2kV1qTWNvDXuDqBhQ5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Song dynasty person CBDB = 13794
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bo6UhtNK6yNB4pvocZqxBu
          claim_id: c_d6a62jUwnPBDUA18Zm5h8E
          source_id: s_2j4BogSGxZFwE5R5xB27EN
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
        id: c_TFQ3F43J5UPfXBicuWsnVj
        subject_person_id: p_eGwj2kV1qTWNvDXuDqBhQ5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4JXdLGzMSVWRt7DgGNQQq2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w3tE2FJFoDJqiJhj3AhYFz
          claim_id: c_TFQ3F43J5UPfXBicuWsnVj
          source_id: s_MHUANk8LX5MLkNEYCEfoM2
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_MHUANk8LX5MLkNEYCEfoM2
            source_type: api_record
            title: 维基数据：王仁（Q45378726）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45378726
            external_identifier: Q45378726
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:10.721Z
            metadata_json: null
        - id: cs_7DJ714AUH1mEzST46mY29f
          claim_id: c_TFQ3F43J5UPfXBicuWsnVj
          source_id: s_2j4BogSGxZFwE5R5xB27EN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_4JXdLGzMSVWRt7DgGNQQq2
        status: active
        display_name: 王仁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王希逸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希逸 | accepted |
| bio.summary | Song dynasty person CBDB = 13794 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4JXdLGzMSVWRt7DgGNQQq2 | 王仁 | accepted |

## 外部来源

- [维基数据：王仁（Q45378726）](https://www.wikidata.org/wiki/Q45378726)
- [维基数据：王希逸（Q45378723）](https://www.wikidata.org/wiki/Q45378723)
- [CBDB 中国历代人物传记资料库：王希逸（13794）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13794&o=json)
