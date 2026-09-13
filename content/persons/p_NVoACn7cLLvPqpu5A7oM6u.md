---
schema: wang-person/v1
id: p_NVoACn7cLLvPqpu5A7oM6u
status: active
merged_into: null
display_name: 王延肃
cbdb_id: 175446
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ToXAjmUREpi2zscsw6pqi6
        subject_person_id: p_NVoACn7cLLvPqpu5A7oM6u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延肃（卒于746年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175446）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_RwdCps6NJDzeDRuViBKYZN
          claim_id: c_ToXAjmUREpi2zscsw6pqi6
          source_id: s_dupCYonYtf2UbE6zWA53ZX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_dupCYonYtf2UbE6zWA53ZX
            source_type: api_record
            title: 维基数据：王延肃（Q45660129）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660129
            external_identifier: Q45660129
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:28.974Z
            metadata_json: null
        - id: cs_Y2_qAIc9V25_wW1-uD3dwK
          claim_id: c_ToXAjmUREpi2zscsw6pqi6
          source_id: s_z8Kc4qtGrQWzm5GUjX2GgB
          stance: supports
          locator: CBDB:175446
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_z8Kc4qtGrQWzm5GUjX2GgB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王延肅（175446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175446&o=json
            external_identifier: CBDB:175446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:29.123Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9kECoawDXGjTRKmrr8B1yp
        subject_person_id: p_NVoACn7cLLvPqpu5A7oM6u
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 746年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0746-01-01
            latest: 0746-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_H69KgmBL4WcdzNA2DFX9Q7
          claim_id: c_9kECoawDXGjTRKmrr8B1yp
          source_id: s_dupCYonYtf2UbE6zWA53ZX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_dupCYonYtf2UbE6zWA53ZX
            source_type: api_record
            title: 维基数据：王延肃（Q45660129）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660129
            external_identifier: Q45660129
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:28.974Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Rh56x11kM51z8Nv8jJfFt9
        subject_person_id: p_NVoACn7cLLvPqpu5A7oM6u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延肃
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8FSryddcVThj8PFe5c7Gpo
          claim_id: c_Rh56x11kM51z8Nv8jJfFt9
          source_id: s_dupCYonYtf2UbE6zWA53ZX
          stance: supports
          locator: Q45660129
          quotation: null
          interpretation_note: null
          source:
            id: s_dupCYonYtf2UbE6zWA53ZX
            source_type: api_record
            title: 维基数据：王延肃（Q45660129）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660129
            external_identifier: Q45660129
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:28.974Z
            metadata_json: null
        - id: cs_j2TZmZMJKFspZYx2rDW7Cv
          claim_id: c_Rh56x11kM51z8Nv8jJfFt9
          source_id: s_z8Kc4qtGrQWzm5GUjX2GgB
          stance: supports
          locator: Q45660129
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ufENYgzctuPFDUzNuppjHA
        subject_person_id: p_S89vKPvai9yEMN4NRS1jZV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NVoACn7cLLvPqpu5A7oM6u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4fMcbrAYuZ7tE8wCN5eTdX
          claim_id: c_ufENYgzctuPFDUzNuppjHA
          source_id: s_bq2C6a9K2XNsgtNLhEKd2B
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_bq2C6a9K2XNsgtNLhEKd2B
            source_type: api_record
            title: 维基数据：王愔（Q45659952）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659952
            external_identifier: Q45659952
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_q8634oUn1vLd745toTxzwa
          claim_id: c_ufENYgzctuPFDUzNuppjHA
          source_id: s_7U3EttuGHHZxeZjRyAGw86
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7U3EttuGHHZxeZjRyAGw86
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王愔（175443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175443&o=json
            external_identifier: CBDB:175443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.514Z
            metadata_json: null
        - id: cs_5xRSAY8BfDRBZFFLJDReWp
          claim_id: c_ufENYgzctuPFDUzNuppjHA
          source_id: s_dupCYonYtf2UbE6zWA53ZX
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_dupCYonYtf2UbE6zWA53ZX
            source_type: api_record
            title: 维基数据：王延肃（Q45660129）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660129
            external_identifier: Q45660129
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:28.974Z
            metadata_json: null
        - id: cs_Qe3PfY7DbuW49Pii7e6xyU
          claim_id: c_ufENYgzctuPFDUzNuppjHA
          source_id: s_z8Kc4qtGrQWzm5GUjX2GgB
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_z8Kc4qtGrQWzm5GUjX2GgB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王延肅（175446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175446&o=json
            external_identifier: CBDB:175446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:29.123Z
            metadata_json: null
      object_person:
        id: p_S89vKPvai9yEMN4NRS1jZV
        status: active
        display_name: 王愔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王延肃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王延肃（卒于746年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175446） | accepted |
| death.date | 746年 | accepted |
| name.primary | 王延肃 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_S89vKPvai9yEMN4NRS1jZV | 王愔 | accepted |

## 外部来源

- [维基数据：王延肃（Q45660129）](https://www.wikidata.org/wiki/Q45660129)
- [维基数据：王愔（Q45659952）](https://www.wikidata.org/wiki/Q45659952)
- [CBDB 中国历代人物传记资料库：王延肅（175446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175446&o=json)
- [CBDB 中国历代人物传记资料库：王愔（175443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175443&o=json)
