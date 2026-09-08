---
schema: wang-person/v1
id: p_4T4YhsidVU2NFfdAtSPY8Z
status: active
merged_into: null
display_name: 王立隆
cbdb_id: 229794
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Tw42S2KvVNoyr5CJyc7VFD
        subject_person_id: p_4T4YhsidVU2NFfdAtSPY8Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立隆，明人物。CBDB 记录其籍贯记录为臨海。中国历代人物传记资料库（CBDB）以人物编号 229794 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Uwdm9ZM1D7xiPWR7fA4Fen
          claim_id: c_Tw42S2KvVNoyr5CJyc7VFD
          source_id: s_7NUq9HMPHL3E7cS6qFWbuY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_7NUq9HMPHL3E7cS6qFWbuY
            source_type: api_record
            title: 维基数据：王立隆（Q45438687）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45438687
            external_identifier: Q45438687
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:56.022Z
            metadata_json: null
        - id: cs_SpLSgePgrxDwKqfFTea3x6
          claim_id: c_Tw42S2KvVNoyr5CJyc7VFD
          source_id: s_5xVSNhY2K6eMyJrmZa6DL1
          stance: supports
          locator: CBDB:229794
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5xVSNhY2K6eMyJrmZa6DL1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王立隆（229794）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229794&o=json
            external_identifier: CBDB:229794
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:56.182Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sZ4tgMCJ2bafYSmpSHxti3
        subject_person_id: p_4T4YhsidVU2NFfdAtSPY8Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立隆
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QyFUvh3y22EqUhRDYLdXkb
          claim_id: c_sZ4tgMCJ2bafYSmpSHxti3
          source_id: s_5xVSNhY2K6eMyJrmZa6DL1
          stance: supports
          locator: Q45438687
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_vj1tnmj26Et7LK4Ne4cLXB
          claim_id: c_sZ4tgMCJ2bafYSmpSHxti3
          source_id: s_7NUq9HMPHL3E7cS6qFWbuY
          stance: supports
          locator: Q45438687
          quotation: null
          interpretation_note: null
          source:
            id: s_7NUq9HMPHL3E7cS6qFWbuY
            source_type: api_record
            title: 维基数据：王立隆（Q45438687）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45438687
            external_identifier: Q45438687
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:56.022Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qtoT81DB3HQNoNWyAWKo5f
        subject_person_id: p_2upGeiN52eY6RGi8eXqg1R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4T4YhsidVU2NFfdAtSPY8Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SHXiFKLNCGTyv1GkAkKcaR
          claim_id: c_qtoT81DB3HQNoNWyAWKo5f
          source_id: s_hv33tRvBGoTiGFKYSfqn28
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_hv33tRvBGoTiGFKYSfqn28
            source_type: api_record
            title: 维基数据：王士昌（Q15950979）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15950979
            external_identifier: Q15950979
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:44.084Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A3%AB%E6%98%8C
        - id: cs_4nmpjTJyywK1tXuZbUkzT3
          claim_id: c_qtoT81DB3HQNoNWyAWKo5f
          source_id: s_7NUq9HMPHL3E7cS6qFWbuY
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_AfrnaGgwC8w9s8AjYGsSAo
          claim_id: c_qtoT81DB3HQNoNWyAWKo5f
          source_id: s_QDf5bGrRNUHiV2PX3ECFrx
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：萬曆丙戌科進士同年總錄
          source:
            id: s_QDf5bGrRNUHiV2PX3ECFrx
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王士昌（35069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35069&o=json
            external_identifier: CBDB:35069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:44.229Z
            metadata_json: null
      object_person:
        id: p_2upGeiN52eY6RGi8eXqg1R
        status: active
        display_name: 王士昌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王立隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王立隆，明人物。CBDB 记录其籍贯记录为臨海。中国历代人物传记资料库（CBDB）以人物编号 229794 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王立隆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2upGeiN52eY6RGi8eXqg1R | 王士昌 | accepted |

## 外部来源

- [维基数据：王立隆（Q45438687）](https://www.wikidata.org/wiki/Q45438687)
- [维基数据：王士昌（Q15950979）](https://www.wikidata.org/wiki/Q15950979)
- [CBDB 中国历代人物传记资料库：王立隆（229794）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229794&o=json)
- [CBDB 中国历代人物传记资料库：王士昌（35069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35069&o=json)
