---
schema: wang-person/v1
id: p_99Hkm9ELDXXQemujiK4KXn
status: active
merged_into: null
display_name: 王莓
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HQDdKPWe536566MdZN54Tt
        subject_person_id: p_99Hkm9ELDXXQemujiK4KXn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莓（卒于879年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175550 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_FxWe1BZKEdSScLQowxo47T
          claim_id: c_HQDdKPWe536566MdZN54Tt
          source_id: s_RzpXCQEuEaM28xpPjkF5iA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_RzpXCQEuEaM28xpPjkF5iA
            source_type: api_record
            title: 维基数据：王莓（Q45666023）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666023
            external_identifier: Q45666023
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:02.530Z
            metadata_json: null
        - id: cs_GuMtKs0cAlp2qD499vOkma
          claim_id: c_HQDdKPWe536566MdZN54Tt
          source_id: s_QPy4RhEkk6rC686d7jbY6e
          stance: supports
          locator: CBDB:175550
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QPy4RhEkk6rC686d7jbY6e
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王莓（175550）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175550&o=json
            external_identifier: CBDB:175550
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:02.682Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2FMzxxe6d8cQS1LBg2CgQa
        subject_person_id: p_99Hkm9ELDXXQemujiK4KXn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 879年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0879-01-01
            latest: 0879-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kdyWxA1NNsKYhnEcHx7bwv
          claim_id: c_2FMzxxe6d8cQS1LBg2CgQa
          source_id: s_RzpXCQEuEaM28xpPjkF5iA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_RzpXCQEuEaM28xpPjkF5iA
            source_type: api_record
            title: 维基数据：王莓（Q45666023）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666023
            external_identifier: Q45666023
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:02.530Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xQM9VTEEm6AWFMMjR8eacG
        subject_person_id: p_99Hkm9ELDXXQemujiK4KXn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莓
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PdRPp2goSYhaF3aqdaTFM3
          claim_id: c_xQM9VTEEm6AWFMMjR8eacG
          source_id: s_QPy4RhEkk6rC686d7jbY6e
          stance: supports
          locator: Q45666023
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_rbG5KrxconXG5voXemd6pB
          claim_id: c_xQM9VTEEm6AWFMMjR8eacG
          source_id: s_RzpXCQEuEaM28xpPjkF5iA
          stance: supports
          locator: Q45666023
          quotation: null
          interpretation_note: null
          source:
            id: s_RzpXCQEuEaM28xpPjkF5iA
            source_type: api_record
            title: 维基数据：王莓（Q45666023）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666023
            external_identifier: Q45666023
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:02.530Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_b9GrWpDKz8adkcKvNvJa69
        subject_person_id: p_weTgXctV7Eb1o4FyPStPTQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_99Hkm9ELDXXQemujiK4KXn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_gcZ1hE9a62CBG2h9SbRpZv
          claim_id: c_b9GrWpDKz8adkcKvNvJa69
          source_id: s_HbLe6EeoH27EFvnm5jM81C
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HbLe6EeoH27EFvnm5jM81C
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鍼（175549）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175549&o=json
            external_identifier: CBDB:175549
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:43.474Z
            metadata_json: null
        - id: cs_gqcLC5PtuiJdDGrdiU4CFZ
          claim_id: c_b9GrWpDKz8adkcKvNvJa69
          source_id: s_3x7zux3E69S3EtGyk4m9r7
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_3x7zux3E69S3EtGyk4m9r7
            source_type: api_record
            title: 维基数据：王针（Q45665970）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665970
            external_identifier: Q45665970
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:43.327Z
            metadata_json: null
        - id: cs_ocmNG14tYE58m1BMBii4mH
          claim_id: c_b9GrWpDKz8adkcKvNvJa69
          source_id: s_RzpXCQEuEaM28xpPjkF5iA
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_RzpXCQEuEaM28xpPjkF5iA
            source_type: api_record
            title: 维基数据：王莓（Q45666023）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666023
            external_identifier: Q45666023
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:02.530Z
            metadata_json: null
        - id: cs_eB36WuWFfogZXFyTuVB39d
          claim_id: c_b9GrWpDKz8adkcKvNvJa69
          source_id: s_QPy4RhEkk6rC686d7jbY6e
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_QPy4RhEkk6rC686d7jbY6e
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王莓（175550）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175550&o=json
            external_identifier: CBDB:175550
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:02.682Z
            metadata_json: null
      object_person:
        id: p_weTgXctV7Eb1o4FyPStPTQ
        status: active
        display_name: 王针
        merged_into_person_id: null
  children:
    - claim:
        id: c_3uYjfWX6GXa47UFF3uFnfs
        subject_person_id: p_99Hkm9ELDXXQemujiK4KXn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CF8MpVyD1GW83ysE4TpJEy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_DEgNBxPVSPVXTqSwznzE7U
          claim_id: c_3uYjfWX6GXa47UFF3uFnfs
          source_id: s_QPy4RhEkk6rC686d7jbY6e
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_QPy4RhEkk6rC686d7jbY6e
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王莓（175550）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175550&o=json
            external_identifier: CBDB:175550
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:02.682Z
            metadata_json: null
        - id: cs_FZf2AxtUGdBYfMxnt8oCn5
          claim_id: c_3uYjfWX6GXa47UFF3uFnfs
          source_id: s_RzpXCQEuEaM28xpPjkF5iA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RzpXCQEuEaM28xpPjkF5iA
            source_type: api_record
            title: 维基数据：王莓（Q45666023）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666023
            external_identifier: Q45666023
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:02.530Z
            metadata_json: null
        - id: cs_yQuG1kCUJE3a1fTy7bVMuE
          claim_id: c_3uYjfWX6GXa47UFF3uFnfs
          source_id: s_jyDFJJNcM98SohmJuPFAQb
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_jyDFJJNcM98SohmJuPFAQb
            source_type: api_record
            title: 维基数据：王参（Q45666077）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666077
            external_identifier: Q45666077
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:46:15.307Z
            metadata_json: null
        - id: cs_Sisomoiik9fjjzWiv1BgFC
          claim_id: c_3uYjfWX6GXa47UFF3uFnfs
          source_id: s_wyohY2TMzULzFMTcCY7Lp1
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_wyohY2TMzULzFMTcCY7Lp1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王參（175551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175551&o=json
            external_identifier: CBDB:175551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:46:15.610Z
            metadata_json: null
      object_person:
        id: p_CF8MpVyD1GW83ysE4TpJEy
        status: active
        display_name: 王参
        merged_into_person_id: null
    - claim:
        id: c_bZMEQQvgU6SqJkJRGjLZhT
        subject_person_id: p_99Hkm9ELDXXQemujiK4KXn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jHkSQh9iXjtoxDPUczWRbn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_43LqDABEKJ9zc2sRorRjEK
          claim_id: c_bZMEQQvgU6SqJkJRGjLZhT
          source_id: s_RzpXCQEuEaM28xpPjkF5iA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RzpXCQEuEaM28xpPjkF5iA
            source_type: api_record
            title: 维基数据：王莓（Q45666023）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666023
            external_identifier: Q45666023
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:02.530Z
            metadata_json: null
        - id: cs_CLjzqYLQ1WV5qq7jc55RPN
          claim_id: c_bZMEQQvgU6SqJkJRGjLZhT
          source_id: s_QPy4RhEkk6rC686d7jbY6e
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_QPy4RhEkk6rC686d7jbY6e
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王莓（175550）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175550&o=json
            external_identifier: CBDB:175550
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:02.682Z
            metadata_json: null
        - id: cs_dHGUdwjh35fqBi29cNrJUB
          claim_id: c_bZMEQQvgU6SqJkJRGjLZhT
          source_id: s_BrM3ADtYTrX5NQp9X83fLD
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_BrM3ADtYTrX5NQp9X83fLD
            source_type: api_record
            title: 维基数据：王损（Q45666130）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666130
            external_identifier: Q45666130
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:46:17.202Z
            metadata_json: null
        - id: cs_BGWnfVYrf5KXYHXt3wi4PE
          claim_id: c_bZMEQQvgU6SqJkJRGjLZhT
          source_id: s_7xv3SWptPnep1Lz3B7tkat
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7xv3SWptPnep1Lz3B7tkat
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王損（175552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175552&o=json
            external_identifier: CBDB:175552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:46:17.353Z
            metadata_json: null
      object_person:
        id: p_jHkSQh9iXjtoxDPUczWRbn
        status: active
        display_name: 王损
        merged_into_person_id: null
    - claim:
        id: c_Ak4asMBkQsmHsLCZ3u8fhq
        subject_person_id: p_99Hkm9ELDXXQemujiK4KXn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_afg5ksRLJy7ahpLLF4cV1J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2QkjQuJ4SChAEtcWp1Xz1J
          claim_id: c_Ak4asMBkQsmHsLCZ3u8fhq
          source_id: s_RzpXCQEuEaM28xpPjkF5iA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RzpXCQEuEaM28xpPjkF5iA
            source_type: api_record
            title: 维基数据：王莓（Q45666023）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666023
            external_identifier: Q45666023
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:02.530Z
            metadata_json: null
        - id: cs_hvzbi92CX64BE6298rmqLQ
          claim_id: c_Ak4asMBkQsmHsLCZ3u8fhq
          source_id: s_QPy4RhEkk6rC686d7jbY6e
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_QPy4RhEkk6rC686d7jbY6e
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王莓（175550）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175550&o=json
            external_identifier: CBDB:175550
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:02.682Z
            metadata_json: null
        - id: cs_vWMTGt1MuMCTs2j1GxhCZX
          claim_id: c_Ak4asMBkQsmHsLCZ3u8fhq
          source_id: s_hfTDLhryCRA4znEqJo8pJ7
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_hfTDLhryCRA4znEqJo8pJ7
            source_type: api_record
            title: 维基数据：王拯（Q45666182）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666182
            external_identifier: Q45666182
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:46:17.203Z
            metadata_json: null
        - id: cs_AXvgecwQ85MfZt1TMQYA2b
          claim_id: c_Ak4asMBkQsmHsLCZ3u8fhq
          source_id: s_5bQz6y1fwpTFPiLexAh7LD
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_5bQz6y1fwpTFPiLexAh7LD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王拯（175553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175553&o=json
            external_identifier: CBDB:175553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:46:17.369Z
            metadata_json: null
      object_person:
        id: p_afg5ksRLJy7ahpLLF4cV1J
        status: active
        display_name: 王拯
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王莓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王莓（卒于879年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175550 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 879年 | accepted |
| name.primary | 王莓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_weTgXctV7Eb1o4FyPStPTQ | 王针 | accepted |
| children | p_CF8MpVyD1GW83ysE4TpJEy | 王参 | accepted |
| children | p_jHkSQh9iXjtoxDPUczWRbn | 王损 | accepted |
| children | p_afg5ksRLJy7ahpLLF4cV1J | 王拯 | accepted |

## 外部来源

- [维基数据：王参（Q45666077）](https://www.wikidata.org/wiki/Q45666077)
- [维基数据：王莓（Q45666023）](https://www.wikidata.org/wiki/Q45666023)
- [维基数据：王损（Q45666130）](https://www.wikidata.org/wiki/Q45666130)
- [维基数据：王针（Q45665970）](https://www.wikidata.org/wiki/Q45665970)
- [维基数据：王拯（Q45666182）](https://www.wikidata.org/wiki/Q45666182)
- [CBDB 中国历代人物传记资料库：王參（175551）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175551&o=json)
- [CBDB 中国历代人物传记资料库：王莓（175550）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175550&o=json)
- [CBDB 中国历代人物传记资料库：王損（175552）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175552&o=json)
- [CBDB 中国历代人物传记资料库：王鍼（175549）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175549&o=json)
- [CBDB 中国历代人物传记资料库：王拯（175553）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175553&o=json)
