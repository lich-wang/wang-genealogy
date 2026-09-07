---
schema: wang-person/v1
id: p_yZzmiyWFSkPUeKd2ptBucj
status: active
merged_into: null
display_name: 王纾
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Tb2kMixUwZQkb1rfNY1kwQ
        subject_person_id: p_yZzmiyWFSkPUeKd2ptBucj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纾（卒于770年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任通事舍人。中国历代人物传记资料库（CBDB）以人物编号 175371 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_NQNVZ3Yxf5jBkp6FRz5Jka
          claim_id: c_Tb2kMixUwZQkb1rfNY1kwQ
          source_id: s_CQUsTAJ4bpmr1A7HPu1W2M
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_CQUsTAJ4bpmr1A7HPu1W2M
            source_type: api_record
            title: 维基数据：王纾（Q45655827）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655827
            external_identifier: Q45655827
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:48.584Z
            metadata_json: null
        - id: cs_cE_NhfXQTZjN-fLtiFnZg2
          claim_id: c_Tb2kMixUwZQkb1rfNY1kwQ
          source_id: s_JLX6SpaZGquoEit7yFjuVC
          stance: supports
          locator: CBDB:175371
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JLX6SpaZGquoEit7yFjuVC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王紓（175371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175371&o=json
            external_identifier: CBDB:175371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:48.740Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_75bLKW3a8oHPXMZfxmWj1e
        subject_person_id: p_yZzmiyWFSkPUeKd2ptBucj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 770年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0770-01-01
            latest: 0770-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o8szyFq4SYumTHCjQikQY9
          claim_id: c_75bLKW3a8oHPXMZfxmWj1e
          source_id: s_CQUsTAJ4bpmr1A7HPu1W2M
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_CQUsTAJ4bpmr1A7HPu1W2M
            source_type: api_record
            title: 维基数据：王纾（Q45655827）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655827
            external_identifier: Q45655827
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:48.584Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fwtqn7zaUTBtvBoGYc9fUC
        subject_person_id: p_yZzmiyWFSkPUeKd2ptBucj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纾
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XHehF6r51MnGDyK1Wprjqk
          claim_id: c_Fwtqn7zaUTBtvBoGYc9fUC
          source_id: s_CQUsTAJ4bpmr1A7HPu1W2M
          stance: supports
          locator: Q45655827
          quotation: null
          interpretation_note: null
          source:
            id: s_CQUsTAJ4bpmr1A7HPu1W2M
            source_type: api_record
            title: 维基数据：王纾（Q45655827）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655827
            external_identifier: Q45655827
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:48.584Z
            metadata_json: null
        - id: cs_ysSutmBuJELoNSNDb7dZvT
          claim_id: c_Fwtqn7zaUTBtvBoGYc9fUC
          source_id: s_JLX6SpaZGquoEit7yFjuVC
          stance: supports
          locator: Q45655827
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_K7zjUDqLx2guuqMi3nfwNC
        subject_person_id: p_x7oJfELhd7NSvt2eNbNHmH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yZzmiyWFSkPUeKd2ptBucj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3AxNZDfQF6Z3Ch36ZqwKk5
          claim_id: c_K7zjUDqLx2guuqMi3nfwNC
          source_id: s_7E1ug3Kpns8EmbLJFG6nt6
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7E1ug3Kpns8EmbLJFG6nt6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王景（175355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175355&o=json
            external_identifier: CBDB:175355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.816Z
            metadata_json: null
        - id: cs_DHyLXuVQxA2X8QgRFoBYoK
          claim_id: c_K7zjUDqLx2guuqMi3nfwNC
          source_id: s_qZACLc9edrwCBZHy8db65x
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_qZACLc9edrwCBZHy8db65x
            source_type: api_record
            title: 维基数据：王景（Q45654870）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654870
            external_identifier: Q45654870
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.651Z
            metadata_json: null
        - id: cs_CU7iKPuHCK181QHLFPCwHg
          claim_id: c_K7zjUDqLx2guuqMi3nfwNC
          source_id: s_CQUsTAJ4bpmr1A7HPu1W2M
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CQUsTAJ4bpmr1A7HPu1W2M
            source_type: api_record
            title: 维基数据：王纾（Q45655827）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655827
            external_identifier: Q45655827
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:48.584Z
            metadata_json: null
        - id: cs_KFKfDKnYo5zQ5BAUWFnges
          claim_id: c_K7zjUDqLx2guuqMi3nfwNC
          source_id: s_JLX6SpaZGquoEit7yFjuVC
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_JLX6SpaZGquoEit7yFjuVC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王紓（175371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175371&o=json
            external_identifier: CBDB:175371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:48.740Z
            metadata_json: null
      object_person:
        id: p_x7oJfELhd7NSvt2eNbNHmH
        status: active
        display_name: 王景
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王纾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王纾（卒于770年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任通事舍人。中国历代人物传记资料库（CBDB）以人物编号 175371 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 770年 | accepted |
| name.primary | 王纾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_x7oJfELhd7NSvt2eNbNHmH | 王景 | accepted |

## 外部来源

- [维基数据：王景（Q45654870）](https://www.wikidata.org/wiki/Q45654870)
- [维基数据：王纾（Q45655827）](https://www.wikidata.org/wiki/Q45655827)
- [CBDB 中国历代人物传记资料库：王景（175355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175355&o=json)
- [CBDB 中国历代人物传记资料库：王紓（175371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175371&o=json)
