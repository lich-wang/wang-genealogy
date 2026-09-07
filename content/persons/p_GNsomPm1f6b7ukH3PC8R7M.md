---
schema: wang-person/v1
id: p_GNsomPm1f6b7ukH3PC8R7M
status: active
merged_into: null
display_name: 王贞
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Fm3ovpLk1Keas6Nw4PHQEe
        subject_person_id: p_GNsomPm1f6b7ukH3PC8R7M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贞（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175613 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_NAaGd6E6QJhLbSeD8E72fJ
          claim_id: c_Fm3ovpLk1Keas6Nw4PHQEe
          source_id: s_8JN3n7LTLnGG7skcRgkdC6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_8JN3n7LTLnGG7skcRgkdC6
            source_type: api_record
            title: 维基数据：王贞（Q45669216）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669216
            external_identifier: Q45669216
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:52.356Z
            metadata_json: null
        - id: cs_GExtkHqoLz3wXwtJuUeSUY
          claim_id: c_Fm3ovpLk1Keas6Nw4PHQEe
          source_id: s_b6FTWvmXfTMCX3cMncf9KV
          stance: supports
          locator: CBDB:175613
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_b6FTWvmXfTMCX3cMncf9KV
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王貞（175613）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175613&o=json
            external_identifier: CBDB:175613
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:52.527Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_S2Wm7uSP8HTbHSuA3x3qr9
        subject_person_id: p_GNsomPm1f6b7ukH3PC8R7M
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
        - id: cs_R7snXst8ApsSYCAgeqJDnH
          claim_id: c_S2Wm7uSP8HTbHSuA3x3qr9
          source_id: s_8JN3n7LTLnGG7skcRgkdC6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_8JN3n7LTLnGG7skcRgkdC6
            source_type: api_record
            title: 维基数据：王贞（Q45669216）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669216
            external_identifier: Q45669216
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:52.356Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_N2GboCbeJqYeWp5JnTXnGf
        subject_person_id: p_GNsomPm1f6b7ukH3PC8R7M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贞
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kKQ3rUdDJhj5N87d6puoE5
          claim_id: c_N2GboCbeJqYeWp5JnTXnGf
          source_id: s_b6FTWvmXfTMCX3cMncf9KV
          stance: supports
          locator: Q45669216
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_qFFYdhnB72Z52fMp6WetRt
          claim_id: c_N2GboCbeJqYeWp5JnTXnGf
          source_id: s_8JN3n7LTLnGG7skcRgkdC6
          stance: supports
          locator: Q45669216
          quotation: null
          interpretation_note: null
          source:
            id: s_8JN3n7LTLnGG7skcRgkdC6
            source_type: api_record
            title: 维基数据：王贞（Q45669216）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669216
            external_identifier: Q45669216
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:52.356Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_J5VE7boY4iDRtaRskGiKpz
        subject_person_id: p_pSBMj38n59vtLbkzXg38QC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GNsomPm1f6b7ukH3PC8R7M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5mhLtdNSy2FL8Qnp4FVsDK
          claim_id: c_J5VE7boY4iDRtaRskGiKpz
          source_id: s_pbGMgAhEoF3Uqim1SYxEHr
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_pbGMgAhEoF3Uqim1SYxEHr
            source_type: api_record
            title: 维基数据：王仪（Q45669071）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669071
            external_identifier: Q45669071
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:40.184Z
            metadata_json: null
        - id: cs_75MT96awbFcq5FPeQgzzze
          claim_id: c_J5VE7boY4iDRtaRskGiKpz
          source_id: s_HUS35mPqiHq1CT8qL5BQDW
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HUS35mPqiHq1CT8qL5BQDW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王儀（175610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175610&o=json
            external_identifier: CBDB:175610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:40.333Z
            metadata_json: null
        - id: cs_Gc8NQ2JyevuHMaKj7cqHpn
          claim_id: c_J5VE7boY4iDRtaRskGiKpz
          source_id: s_8JN3n7LTLnGG7skcRgkdC6
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8JN3n7LTLnGG7skcRgkdC6
            source_type: api_record
            title: 维基数据：王贞（Q45669216）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669216
            external_identifier: Q45669216
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:52.356Z
            metadata_json: null
        - id: cs_QRBBu2ZiYbEComoFwxRWoX
          claim_id: c_J5VE7boY4iDRtaRskGiKpz
          source_id: s_b6FTWvmXfTMCX3cMncf9KV
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_b6FTWvmXfTMCX3cMncf9KV
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王貞（175613）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175613&o=json
            external_identifier: CBDB:175613
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:52.527Z
            metadata_json: null
      object_person:
        id: p_pSBMj38n59vtLbkzXg38QC
        status: active
        display_name: 王仪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王贞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王贞（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175613 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 783年 | accepted |
| name.primary | 王贞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pSBMj38n59vtLbkzXg38QC | 王仪 | accepted |

## 外部来源

- [维基数据：王仪（Q45669071）](https://www.wikidata.org/wiki/Q45669071)
- [维基数据：王贞（Q45669216）](https://www.wikidata.org/wiki/Q45669216)
- [CBDB 中国历代人物传记资料库：王儀（175610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175610&o=json)
- [CBDB 中国历代人物传记资料库：王貞（175613）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175613&o=json)
