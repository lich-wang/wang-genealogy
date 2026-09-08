---
schema: wang-person/v1
id: p_pzCtqFfz6eNVPNeTPL4MqR
status: active
merged_into: null
display_name: 王俨
cbdb_id: 175932
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3USbJrFKzB4zEWGPeyMZTK
        subject_person_id: p_pzCtqFfz6eNVPNeTPL4MqR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俨（卒于701年），唐人物。CBDB 记录其籍贯记录为萬年，曾任工部侍郎。中国历代人物传记资料库（CBDB）以人物编号 175932 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_q3mGp56YmkrpgKQnDK6t9N
          claim_id: c_3USbJrFKzB4zEWGPeyMZTK
          source_id: s_ME3cxFtdrC5oy5SnU42G7B
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_ME3cxFtdrC5oy5SnU42G7B
            source_type: api_record
            title: 维基数据：王俨（Q45679837）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45679837
            external_identifier: Q45679837
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:35.373Z
            metadata_json: null
        - id: cs_spltoe4yRvDj3lC-JXeBy5
          claim_id: c_3USbJrFKzB4zEWGPeyMZTK
          source_id: s_EEcPdBgLVGiiKXsWAU7Bkx
          stance: supports
          locator: CBDB:175932
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EEcPdBgLVGiiKXsWAU7Bkx
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王儼（175932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175932&o=json
            external_identifier: CBDB:175932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:35.545Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_br5ndYy2gjHAErKmgN5Qro
        subject_person_id: p_pzCtqFfz6eNVPNeTPL4MqR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 701年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0701-01-01
            latest: 0701-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w1EEVXvaD6NBinoEnSs3vt
          claim_id: c_br5ndYy2gjHAErKmgN5Qro
          source_id: s_ME3cxFtdrC5oy5SnU42G7B
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ME3cxFtdrC5oy5SnU42G7B
            source_type: api_record
            title: 维基数据：王俨（Q45679837）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45679837
            external_identifier: Q45679837
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:35.373Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wKC3nvqhjM85qQtGdr1WPZ
        subject_person_id: p_pzCtqFfz6eNVPNeTPL4MqR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俨
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HahhRHjhVH1nCKPq3p8PvZ
          claim_id: c_wKC3nvqhjM85qQtGdr1WPZ
          source_id: s_ME3cxFtdrC5oy5SnU42G7B
          stance: supports
          locator: Q45679837
          quotation: null
          interpretation_note: null
          source:
            id: s_ME3cxFtdrC5oy5SnU42G7B
            source_type: api_record
            title: 维基数据：王俨（Q45679837）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45679837
            external_identifier: Q45679837
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:35.373Z
            metadata_json: null
        - id: cs_nyFYs4Dfv4sozySJuFe4un
          claim_id: c_wKC3nvqhjM85qQtGdr1WPZ
          source_id: s_EEcPdBgLVGiiKXsWAU7Bkx
          stance: supports
          locator: Q45679837
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sHNqoosRwFVjzQ1SXux1DL
        subject_person_id: p_9De1waQrNPPNQ2rPBDtZB4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pzCtqFfz6eNVPNeTPL4MqR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PujSCCraZM53EnUQXtJ4qE
          claim_id: c_sHNqoosRwFVjzQ1SXux1DL
          source_id: s_iBsZCuymcCHq9LAP1EAxCz
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_iBsZCuymcCHq9LAP1EAxCz
            source_type: api_record
            title: 维基数据：王某（Q45679773）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45679773
            external_identifier: Q45679773
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:17.691Z
            metadata_json: null
        - id: cs_8J8ZHyYAn7GWKFQFnnscNq
          claim_id: c_sHNqoosRwFVjzQ1SXux1DL
          source_id: s_ME3cxFtdrC5oy5SnU42G7B
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_9De1waQrNPPNQ2rPBDtZB4
        status: active
        display_name: 王某
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王俨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王俨（卒于701年），唐人物。CBDB 记录其籍贯记录为萬年，曾任工部侍郎。中国历代人物传记资料库（CBDB）以人物编号 175932 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 701年 | accepted |
| name.primary | 王俨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9De1waQrNPPNQ2rPBDtZB4 | 王某 | accepted |

## 外部来源

- [维基数据：王某（Q45679773）](https://www.wikidata.org/wiki/Q45679773)
- [维基数据：王俨（Q45679837）](https://www.wikidata.org/wiki/Q45679837)
- [CBDB 中国历代人物传记资料库：王儼（175932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175932&o=json)
