---
schema: wang-person/v1
id: p_c8C8PQBtyD8TinfV8tVU4U
status: active
merged_into: null
display_name: 王澄
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n49WMgn13NAp6A5USJPL1D
        subject_person_id: p_c8C8PQBtyD8TinfV8tVU4U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄（卒于773年），唐人物。CBDB 记录其籍贯记录为河南府，曾任州司馬。中国历代人物传记资料库（CBDB）以人物编号 186695 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_jbemo1Gxo3QgmaJ9rquZnT
          claim_id: c_n49WMgn13NAp6A5USJPL1D
          source_id: s_wjVLxMLRqXwKjCian14tbq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_wjVLxMLRqXwKjCian14tbq
            source_type: api_record
            title: 维基数据：王澄（Q45685584）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45685584
            external_identifier: Q45685584
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:53.553Z
            metadata_json: null
        - id: cs_S9bkF95OBk4spn0nXdUOFf
          claim_id: c_n49WMgn13NAp6A5USJPL1D
          source_id: s_HmJsV2rPiCVdpEMRJrZ3CS
          stance: supports
          locator: CBDB:186695
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HmJsV2rPiCVdpEMRJrZ3CS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澄（186695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186695&o=json
            external_identifier: CBDB:186695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:53.735Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2RQhJrFhZfvm1C6YX8iq3V
        subject_person_id: p_c8C8PQBtyD8TinfV8tVU4U
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 773年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0773-01-01
            latest: 0773-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Kysnrcs4L5MydgH8HTwGA2
          claim_id: c_2RQhJrFhZfvm1C6YX8iq3V
          source_id: s_wjVLxMLRqXwKjCian14tbq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_wjVLxMLRqXwKjCian14tbq
            source_type: api_record
            title: 维基数据：王澄（Q45685584）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45685584
            external_identifier: Q45685584
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:53.553Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oQGqj5ap6dXupEYJ3N7CxJ
        subject_person_id: p_c8C8PQBtyD8TinfV8tVU4U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8xuitByL8ytX7CKJw5a29S
          claim_id: c_oQGqj5ap6dXupEYJ3N7CxJ
          source_id: s_wjVLxMLRqXwKjCian14tbq
          stance: supports
          locator: Q45685584
          quotation: null
          interpretation_note: null
          source:
            id: s_wjVLxMLRqXwKjCian14tbq
            source_type: api_record
            title: 维基数据：王澄（Q45685584）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45685584
            external_identifier: Q45685584
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:53.553Z
            metadata_json: null
        - id: cs_TDs1uLVM2aJsA5yEMWbbD9
          claim_id: c_oQGqj5ap6dXupEYJ3N7CxJ
          source_id: s_HmJsV2rPiCVdpEMRJrZ3CS
          stance: supports
          locator: Q45685584
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Wf8xLWgFANB7PCWuCHnwmf
        subject_person_id: p_c8C8PQBtyD8TinfV8tVU4U
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_ThZ1fLjfnyC98szbw3tnMJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7nrZiUmTqwwnsrs7dbK7GB
          claim_id: c_Wf8xLWgFANB7PCWuCHnwmf
          source_id: s_wjVLxMLRqXwKjCian14tbq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_wjVLxMLRqXwKjCian14tbq
            source_type: api_record
            title: 维基数据：王澄（Q45685584）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45685584
            external_identifier: Q45685584
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:53.553Z
            metadata_json: null
        - id: cs_mBKVm2gQP9YH97mK36jZsM
          claim_id: c_Wf8xLWgFANB7PCWuCHnwmf
          source_id: s_HyZfx6k7iCsH8eAv7nQ9vx
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_HyZfx6k7iCsH8eAv7nQ9vx
            source_type: api_record
            title: 维基数据：王锷（Q15930590）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15930590
            external_identifier: Q15930590
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:39.483Z
            metadata_json: null
      object_person:
        id: p_ThZ1fLjfnyC98szbw3tnMJ
        status: active
        display_name: 王锷
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王澄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王澄（卒于773年），唐人物。CBDB 记录其籍贯记录为河南府，曾任州司馬。中国历代人物传记资料库（CBDB）以人物编号 186695 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 773年 | accepted |
| name.primary | 王澄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ThZ1fLjfnyC98szbw3tnMJ | 王锷 | accepted |

## 外部来源

- [维基数据：王澄（Q45685584）](https://www.wikidata.org/wiki/Q45685584)
- [维基数据：王锷（Q15930590）](https://www.wikidata.org/wiki/Q15930590)
- [CBDB 中国历代人物传记资料库：王澄（186695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186695&o=json)
