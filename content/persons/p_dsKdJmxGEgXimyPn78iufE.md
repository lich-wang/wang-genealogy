---
schema: wang-person/v1
id: p_dsKdJmxGEgXimyPn78iufE
status: active
merged_into: null
display_name: 王庆远
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dTYsMd7BtnPzboWaa5WR39
        subject_person_id: p_dsKdJmxGEgXimyPn78iufE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庆远（卒于590年），南北朝人物。CBDB 记录其籍贯记录为萬年，曾任將軍。中国历代人物传记资料库（CBDB）以人物编号 175928 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_V1nUGxVuU3XE1P2f5BfpzF
          claim_id: c_dTYsMd7BtnPzboWaa5WR39
          source_id: s_7Ss8KmuHxjBqnB2FcgQvrd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7Ss8KmuHxjBqnB2FcgQvrd
            source_type: api_record
            title: 维基数据：王庆远（Q45679705）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45679705
            external_identifier: Q45679705
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:17.691Z
            metadata_json: null
        - id: cs_gMGoAm6i4KF1jBT_BsbuA0
          claim_id: c_dTYsMd7BtnPzboWaa5WR39
          source_id: s_EFnaPZmkAqErF2dPH21ys7
          stance: supports
          locator: CBDB:175928
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EFnaPZmkAqErF2dPH21ys7
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王慶遠（175928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175928&o=json
            external_identifier: CBDB:175928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:17.858Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_vC9YnzENVF5CFBxXEmqyJR
        subject_person_id: p_dsKdJmxGEgXimyPn78iufE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 590年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0590-01-01
            latest: 0590-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4P2971VtPDuDBK94CFSpwe
          claim_id: c_vC9YnzENVF5CFBxXEmqyJR
          source_id: s_7Ss8KmuHxjBqnB2FcgQvrd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7Ss8KmuHxjBqnB2FcgQvrd
            source_type: api_record
            title: 维基数据：王庆远（Q45679705）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45679705
            external_identifier: Q45679705
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:17.691Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_H6vMAaMxEN9aLBkXDctnr7
        subject_person_id: p_dsKdJmxGEgXimyPn78iufE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庆远
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4FjKGeKaVgNyj8jZg9AKdz
          claim_id: c_H6vMAaMxEN9aLBkXDctnr7
          source_id: s_EFnaPZmkAqErF2dPH21ys7
          stance: supports
          locator: Q45679705
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_iefEFEJjjFp2HE4TcxSdFi
          claim_id: c_H6vMAaMxEN9aLBkXDctnr7
          source_id: s_7Ss8KmuHxjBqnB2FcgQvrd
          stance: supports
          locator: Q45679705
          quotation: null
          interpretation_note: null
          source:
            id: s_7Ss8KmuHxjBqnB2FcgQvrd
            source_type: api_record
            title: 维基数据：王庆远（Q45679705）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45679705
            external_identifier: Q45679705
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:17.691Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_dRbc2aZLaHSiD3ue5PXK62
        subject_person_id: p_dsKdJmxGEgXimyPn78iufE
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_BK7k2QcLRSfSmKmA6kf5hq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EFhLWsSFpGJ4vpzak8MSKv
          claim_id: c_dRbc2aZLaHSiD3ue5PXK62
          source_id: s_hzjzgaMSRzkZfwTpp2CZhB
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_hzjzgaMSRzkZfwTpp2CZhB
            source_type: api_record
            title: 维基数据：王长述（Q11573236）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573236
            external_identifier: Q11573236
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:58.606Z
            metadata_json: null
        - id: cs_reMnv4AtshSvA3kAywXVVL
          claim_id: c_dRbc2aZLaHSiD3ue5PXK62
          source_id: s_7Ss8KmuHxjBqnB2FcgQvrd
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7Ss8KmuHxjBqnB2FcgQvrd
            source_type: api_record
            title: 维基数据：王庆远（Q45679705）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45679705
            external_identifier: Q45679705
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:17.691Z
            metadata_json: null
      object_person:
        id: p_BK7k2QcLRSfSmKmA6kf5hq
        status: active
        display_name: 王长述
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王庆远

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王庆远（卒于590年），南北朝人物。CBDB 记录其籍贯记录为萬年，曾任將軍。中国历代人物传记资料库（CBDB）以人物编号 175928 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 590年 | accepted |
| name.primary | 王庆远 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BK7k2QcLRSfSmKmA6kf5hq | 王长述 | accepted |

## 外部来源

- [维基数据：王庆远（Q45679705）](https://www.wikidata.org/wiki/Q45679705)
- [维基数据：王长述（Q11573236）](https://www.wikidata.org/wiki/Q11573236)
- [CBDB 中国历代人物传记资料库：王慶遠（175928）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175928&o=json)
