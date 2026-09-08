---
schema: wang-person/v1
id: p_62HhnvGzNnUM79dMvqEziP
status: active
merged_into: null
display_name: 王河
cbdb_id: 175583
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_792K8mQVdqpD65CbKMvtXg
        subject_person_id: p_62HhnvGzNnUM79dMvqEziP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王河（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175583 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1gPm5XvNHrKEEkwMAmsY6J
          claim_id: c_792K8mQVdqpD65CbKMvtXg
          source_id: s_BSHLD1t4y3vmUNRYEqEcyJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_BSHLD1t4y3vmUNRYEqEcyJ
            source_type: api_record
            title: 维基数据：王河（Q45667711）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667711
            external_identifier: Q45667711
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:46.267Z
            metadata_json: null
        - id: cs_8KYsJVIlHnx-EMN-FqMb7k
          claim_id: c_792K8mQVdqpD65CbKMvtXg
          source_id: s_3gFECzasRqw7aLYy2FRmua
          stance: supports
          locator: CBDB:175583
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3gFECzasRqw7aLYy2FRmua
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王河（175583）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175583&o=json
            external_identifier: CBDB:175583
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:46.436Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_xNyq9ZhQ88v7RQZor5MECt
        subject_person_id: p_62HhnvGzNnUM79dMvqEziP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 783年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0783-01-01
            latest: 0783-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dBcK42PeGJQTBwc6vE2Mog
          claim_id: c_xNyq9ZhQ88v7RQZor5MECt
          source_id: s_BSHLD1t4y3vmUNRYEqEcyJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_BSHLD1t4y3vmUNRYEqEcyJ
            source_type: api_record
            title: 维基数据：王河（Q45667711）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667711
            external_identifier: Q45667711
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:46.267Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4MJ9aML62gLDm8XpCUqVqA
        subject_person_id: p_62HhnvGzNnUM79dMvqEziP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王河
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ENaJTHqxiKNM8h81G97rKj
          claim_id: c_4MJ9aML62gLDm8XpCUqVqA
          source_id: s_BSHLD1t4y3vmUNRYEqEcyJ
          stance: supports
          locator: Q45667711
          quotation: null
          interpretation_note: null
          source:
            id: s_BSHLD1t4y3vmUNRYEqEcyJ
            source_type: api_record
            title: 维基数据：王河（Q45667711）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667711
            external_identifier: Q45667711
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:46.267Z
            metadata_json: null
        - id: cs_NEUsL3VjZMfnVhd4vqN6xZ
          claim_id: c_4MJ9aML62gLDm8XpCUqVqA
          source_id: s_3gFECzasRqw7aLYy2FRmua
          stance: supports
          locator: Q45667711
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NtjWFV3Me9ryM1PTTQ9vMr
        subject_person_id: p_NEX3V7ji6CnpRpuLcDnCPx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_62HhnvGzNnUM79dMvqEziP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_HeFtT6VfF5TYTN9KWHFFtZ
          claim_id: c_NtjWFV3Me9ryM1PTTQ9vMr
          source_id: s_8vFzQGwKDDpx148f99y6kS
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_8vFzQGwKDDpx148f99y6kS
            source_type: api_record
            title: 维基数据：王份（Q45667510）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667510
            external_identifier: Q45667510
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.290Z
            metadata_json: null
        - id: cs_Ww1g3e1NRqbwwRsVEuXYpQ
          claim_id: c_NtjWFV3Me9ryM1PTTQ9vMr
          source_id: s_hT1ik3fzWZsGvMMc989rK3
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_hT1ik3fzWZsGvMMc989rK3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王份（175579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175579&o=json
            external_identifier: CBDB:175579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:38.466Z
            metadata_json: null
        - id: cs_1tub7gt9JeFsUi8fQ8RDMu
          claim_id: c_NtjWFV3Me9ryM1PTTQ9vMr
          source_id: s_BSHLD1t4y3vmUNRYEqEcyJ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_BSHLD1t4y3vmUNRYEqEcyJ
            source_type: api_record
            title: 维基数据：王河（Q45667711）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667711
            external_identifier: Q45667711
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:46.267Z
            metadata_json: null
        - id: cs_9kqA7ZPwQeA8YuXE9Gtv2H
          claim_id: c_NtjWFV3Me9ryM1PTTQ9vMr
          source_id: s_3gFECzasRqw7aLYy2FRmua
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3gFECzasRqw7aLYy2FRmua
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王河（175583）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175583&o=json
            external_identifier: CBDB:175583
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:46.436Z
            metadata_json: null
      object_person:
        id: p_NEX3V7ji6CnpRpuLcDnCPx
        status: active
        display_name: 王份
        merged_into_person_id: null
  children:
    - claim:
        id: c_sTjiLkQ8rRGdxFKNHs3BV9
        subject_person_id: p_62HhnvGzNnUM79dMvqEziP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MAHPg2bdGPctkAH23VCyCj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_tByVnhRmWhjeii9mdF9NBd
          claim_id: c_sTjiLkQ8rRGdxFKNHs3BV9
          source_id: s_BSHLD1t4y3vmUNRYEqEcyJ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_BSHLD1t4y3vmUNRYEqEcyJ
            source_type: api_record
            title: 维基数据：王河（Q45667711）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667711
            external_identifier: Q45667711
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:46.267Z
            metadata_json: null
        - id: cs_vNAGxyeMgKH7B24FYFehvw
          claim_id: c_sTjiLkQ8rRGdxFKNHs3BV9
          source_id: s_3gFECzasRqw7aLYy2FRmua
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3gFECzasRqw7aLYy2FRmua
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王河（175583）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175583&o=json
            external_identifier: CBDB:175583
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:46.436Z
            metadata_json: null
        - id: cs_vZFtwvECeaPMPaAZ5Ngrsg
          claim_id: c_sTjiLkQ8rRGdxFKNHs3BV9
          source_id: s_yu51q3rJeqczisvXBFtx5a
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_yu51q3rJeqczisvXBFtx5a
            source_type: api_record
            title: 维基数据：王孺卿（Q45667762）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667762
            external_identifier: Q45667762
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:38.179Z
            metadata_json: null
        - id: cs_rQQYViu7GTnVneGtXDJLYm
          claim_id: c_sTjiLkQ8rRGdxFKNHs3BV9
          source_id: s_ULqkWDUyK6TeFUSgUQjZQv
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ULqkWDUyK6TeFUSgUQjZQv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王孺卿（175584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175584&o=json
            external_identifier: CBDB:175584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:38.334Z
            metadata_json: null
      object_person:
        id: p_MAHPg2bdGPctkAH23VCyCj
        status: active
        display_name: 王孺卿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王河

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王河（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175583 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 783年 | accepted |
| name.primary | 王河 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NEX3V7ji6CnpRpuLcDnCPx | 王份 | accepted |
| children | p_MAHPg2bdGPctkAH23VCyCj | 王孺卿 | accepted |

## 外部来源

- [维基数据：王份（Q45667510）](https://www.wikidata.org/wiki/Q45667510)
- [维基数据：王河（Q45667711）](https://www.wikidata.org/wiki/Q45667711)
- [维基数据：王孺卿（Q45667762）](https://www.wikidata.org/wiki/Q45667762)
- [CBDB 中国历代人物传记资料库：王份（175579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175579&o=json)
- [CBDB 中国历代人物传记资料库：王河（175583）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175583&o=json)
- [CBDB 中国历代人物传记资料库：王孺卿（175584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175584&o=json)
