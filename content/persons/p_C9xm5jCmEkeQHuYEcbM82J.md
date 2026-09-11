---
schema: wang-person/v1
id: p_C9xm5jCmEkeQHuYEcbM82J
status: active
merged_into: null
display_name: 王景
cbdb_id: 236876
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9NaCM9Yb18Z2g94DQcFjZQ
        subject_person_id: p_C9xm5jCmEkeQHuYEcbM82J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UvVK7CNaRV4kdVdEbZVL6c
          claim_id: c_9NaCM9Yb18Z2g94DQcFjZQ
          source_id: s_EnUMzmsSH9GSBFWJjjs9zN
          stance: supports
          locator: Q45527504
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_EnUMzmsSH9GSBFWJjjs9zN
            source_type: api_record
            title: 维基数据：王景（Q45527504）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45527504
            external_identifier: Q45527504
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_3Nvk9FLQJ8QEuJLY6ZZ9Yw
          claim_id: c_9NaCM9Yb18Z2g94DQcFjZQ
          source_id: s_aUtqpncrA5mpaxDZBmduGw
          stance: supports
          locator: CBDB:236876
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_aUtqpncrA5mpaxDZBmduGw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王景（236876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236876&o=json
            external_identifier: CBDB:236876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_amQhUbHx9vHhvrDuE4eR4z
        subject_person_id: p_C9xm5jCmEkeQHuYEcbM82J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Ming dynasty person CBDB = 236876
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ppKvgf3i72ewWqKkqtG2LG
          claim_id: c_amQhUbHx9vHhvrDuE4eR4z
          source_id: s_EnUMzmsSH9GSBFWJjjs9zN
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
        id: c_JtYFDivwtfL6P8U2h6yemY
        subject_person_id: p_C9xm5jCmEkeQHuYEcbM82J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yaK3v157GQYGTQP5RhE7JJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rHBavXte3rinmWQvk5N8wP
          claim_id: c_JtYFDivwtfL6P8U2h6yemY
          source_id: s_KerkffX6Nege7oC5WwMN2q
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_KerkffX6Nege7oC5WwMN2q
            source_type: api_record
            title: 维基数据：王俊卿（Q45527566）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45527566
            external_identifier: Q45527566
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:38.809Z
            metadata_json: null
        - id: cs_tMARqizAwHdnM2X4mRZ7Nb
          claim_id: c_JtYFDivwtfL6P8U2h6yemY
          source_id: s_EnUMzmsSH9GSBFWJjjs9zN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_yaK3v157GQYGTQP5RhE7JJ
        status: active
        display_name: 王俊卿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_aveRf0RC1KtHuO53fyY0mI
        subject_person_id: p_C9xm5jCmEkeQHuYEcbM82J
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DNERe7qJNb3V7E5Uc4DPd7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yscaS50b--sE8ffGNFj3Yz
          claim_id: c_aveRf0RC1KtHuO53fyY0mI
          source_id: s_aUtqpncrA5mpaxDZBmduGw
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第三十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_DNERe7qJNb3V7E5Uc4DPd7
        status: active
        display_name: 王竑
        merged_into_person_id: null
  other: []
---

# 王景

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景 | accepted |
| bio.summary | Ming dynasty person CBDB = 236876 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_yaK3v157GQYGTQP5RhE7JJ | 王俊卿 | accepted |
| descendants | p_DNERe7qJNb3V7E5Uc4DPd7 | 王竑 | accepted |

## 外部来源

- [维基数据：王景（Q45527504）](https://www.wikidata.org/wiki/Q45527504)
- [维基数据：王俊卿（Q45527566）](https://www.wikidata.org/wiki/Q45527566)
- [CBDB 中国历代人物传记资料库：王景（236876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236876&o=json)
