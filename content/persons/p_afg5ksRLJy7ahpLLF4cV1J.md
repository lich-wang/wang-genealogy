---
schema: wang-person/v1
id: p_afg5ksRLJy7ahpLLF4cV1J
status: active
merged_into: null
display_name: 王拯
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H95KNiYoP6YzycBoF54fTv
        subject_person_id: p_afg5ksRLJy7ahpLLF4cV1J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拯（卒于916年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175553 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_s3ZH2g2WuNbAFNZh2FFviY
          claim_id: c_H95KNiYoP6YzycBoF54fTv
          source_id: s_hfTDLhryCRA4znEqJo8pJ7
          stance: supports
          locator: null
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
        - id: cs_-_3xsOgcNn68flCQBQ1Uwe
          claim_id: c_H95KNiYoP6YzycBoF54fTv
          source_id: s_5bQz6y1fwpTFPiLexAh7LD
          stance: supports
          locator: CBDB:175553
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5e8JJqB7hqfuaWJfoaigQA
        subject_person_id: p_afg5ksRLJy7ahpLLF4cV1J
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 916年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0916-01-01
            latest: 0916-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fRpLRKLP6XwehfznK8TXCd
          claim_id: c_5e8JJqB7hqfuaWJfoaigQA
          source_id: s_hfTDLhryCRA4znEqJo8pJ7
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Et2mDYPrde1X64sWrKwHrP
        subject_person_id: p_afg5ksRLJy7ahpLLF4cV1J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拯
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gDrAwyqvMLn2rbpLCqYhQ6
          claim_id: c_Et2mDYPrde1X64sWrKwHrP
          source_id: s_hfTDLhryCRA4znEqJo8pJ7
          stance: supports
          locator: Q45666182
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
        - id: cs_xxJX4SpHA9sLEeLCsyPGDG
          claim_id: c_Et2mDYPrde1X64sWrKwHrP
          source_id: s_5bQz6y1fwpTFPiLexAh7LD
          stance: supports
          locator: Q45666182
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_99Hkm9ELDXXQemujiK4KXn
        status: active
        display_name: 王莓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王拯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王拯（卒于916年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175553 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 916年 | accepted |
| name.primary | 王拯 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_99Hkm9ELDXXQemujiK4KXn | 王莓 | accepted |

## 外部来源

- [维基数据：王莓（Q45666023）](https://www.wikidata.org/wiki/Q45666023)
- [维基数据：王拯（Q45666182）](https://www.wikidata.org/wiki/Q45666182)
- [CBDB 中国历代人物传记资料库：王莓（175550）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175550&o=json)
- [CBDB 中国历代人物传记资料库：王拯（175553）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175553&o=json)
