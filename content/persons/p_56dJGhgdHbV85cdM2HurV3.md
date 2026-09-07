---
schema: wang-person/v1
id: p_56dJGhgdHbV85cdM2HurV3
status: active
merged_into: null
display_name: 王师贞
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9jZRmkrKvHZUqsV3bLGKT3
        subject_person_id: p_56dJGhgdHbV85cdM2HurV3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王师贞（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175530 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_gMCpKxXU7JWLU8bh8F3JRK
          claim_id: c_9jZRmkrKvHZUqsV3bLGKT3
          source_id: s_6i6oShFVQCYGJoMkAqHRJx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_6i6oShFVQCYGJoMkAqHRJx
            source_type: api_record
            title: 维基数据：王师贞（Q45664978）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664978
            external_identifier: Q45664978
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:55.369Z
            metadata_json: null
        - id: cs_k1RJYzR29CdZeW3Xz5unXL
          claim_id: c_9jZRmkrKvHZUqsV3bLGKT3
          source_id: s_PRc8SoqqN2Bx7U65q7v6gr
          stance: supports
          locator: CBDB:175530
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_PRc8SoqqN2Bx7U65q7v6gr
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師貞（175530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175530&o=json
            external_identifier: CBDB:175530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:55.536Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_AoVCrxPV28xR47wcgGreod
        subject_person_id: p_56dJGhgdHbV85cdM2HurV3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 857年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0857-01-01
            latest: 0857-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yWoYJrP99E3c6uzoVjoLYs
          claim_id: c_AoVCrxPV28xR47wcgGreod
          source_id: s_6i6oShFVQCYGJoMkAqHRJx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_6i6oShFVQCYGJoMkAqHRJx
            source_type: api_record
            title: 维基数据：王师贞（Q45664978）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664978
            external_identifier: Q45664978
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:55.369Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_d1hybBU3J8kqa5LyFU9P63
        subject_person_id: p_56dJGhgdHbV85cdM2HurV3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王师贞
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_H7T4NLvNjd56o8EkUpakDU
          claim_id: c_d1hybBU3J8kqa5LyFU9P63
          source_id: s_PRc8SoqqN2Bx7U65q7v6gr
          stance: supports
          locator: Q45664978
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_PM3FzqaPRqTJS8TX6KVrXX
          claim_id: c_d1hybBU3J8kqa5LyFU9P63
          source_id: s_6i6oShFVQCYGJoMkAqHRJx
          stance: supports
          locator: Q45664978
          quotation: null
          interpretation_note: null
          source:
            id: s_6i6oShFVQCYGJoMkAqHRJx
            source_type: api_record
            title: 维基数据：王师贞（Q45664978）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664978
            external_identifier: Q45664978
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:55.369Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1jULC8DZDod7F3YqydfKUA
        subject_person_id: p_1gticUWCJ47bH6TQyidvLU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_56dJGhgdHbV85cdM2HurV3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_iVfpfB5jKRaMeSpqhABEDA
          claim_id: c_1jULC8DZDod7F3YqydfKUA
          source_id: s_PBkUSJBNY3ZiStgYhgZGC4
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_PBkUSJBNY3ZiStgYhgZGC4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王邈（175529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175529&o=json
            external_identifier: CBDB:175529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:36.685Z
            metadata_json: null
        - id: cs_txuFZXWDCGPTL3ZrQ1Z9RF
          claim_id: c_1jULC8DZDod7F3YqydfKUA
          source_id: s_sF9qAkJmzvpFTC3S5HfPz6
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_sF9qAkJmzvpFTC3S5HfPz6
            source_type: api_record
            title: 维基数据：王邈（Q45664923）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664923
            external_identifier: Q45664923
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:36.527Z
            metadata_json: null
        - id: cs_KZBPivs965yPaCcQQqKXur
          claim_id: c_1jULC8DZDod7F3YqydfKUA
          source_id: s_6i6oShFVQCYGJoMkAqHRJx
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_6i6oShFVQCYGJoMkAqHRJx
            source_type: api_record
            title: 维基数据：王师贞（Q45664978）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664978
            external_identifier: Q45664978
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:55.369Z
            metadata_json: null
        - id: cs_YBsfRQYdtQAaG5HBaXW7Bv
          claim_id: c_1jULC8DZDod7F3YqydfKUA
          source_id: s_PRc8SoqqN2Bx7U65q7v6gr
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_PRc8SoqqN2Bx7U65q7v6gr
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師貞（175530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175530&o=json
            external_identifier: CBDB:175530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:55.536Z
            metadata_json: null
      object_person:
        id: p_1gticUWCJ47bH6TQyidvLU
        status: active
        display_name: 王邈
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王师贞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王师贞（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175530 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 857年 | accepted |
| name.primary | 王师贞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1gticUWCJ47bH6TQyidvLU | 王邈 | accepted |

## 外部来源

- [维基数据：王邈（Q45664923）](https://www.wikidata.org/wiki/Q45664923)
- [维基数据：王师贞（Q45664978）](https://www.wikidata.org/wiki/Q45664978)
- [CBDB 中国历代人物传记资料库：王邈（175529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175529&o=json)
- [CBDB 中国历代人物传记资料库：王師貞（175530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175530&o=json)
