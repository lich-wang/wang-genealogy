---
schema: wang-person/v1
id: p_dhFVx6GMqbAdJa25T7qrk6
status: active
merged_into: null
display_name: 齐氏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qESltLrX-Namt_gMzMtSag
        subject_person_id: p_dhFVx6GMqbAdJa25T7qrk6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 齐氏，宋人物。CBDB 记录其籍贯记录为蒲陰，入仕记录为封贈。中国历代人物传记资料库（CBDB）以人物编号 5399 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YzOpbh5srdH3QMaKsLutOH
          claim_id: c_qESltLrX-Namt_gMzMtSag
          source_id: s_hNWTMBC6q552FxcCtxB4Vw
          stance: supports
          locator: CBDB:5399
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_hNWTMBC6q552FxcCtxB4Vw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：齊氏（5399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5399&o=json
            external_identifier: CBDB:5399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:00.416Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HexwHQvjXKbm2M5JUu22vo
        subject_person_id: p_dhFVx6GMqbAdJa25T7qrk6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 齐氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9SV5vLZg1Jc6Ze2JLgEzTJ
          claim_id: c_HexwHQvjXKbm2M5JUu22vo
          source_id: s_qi2KL55n73x1HtDszVsZ6F
          stance: supports
          locator: Q45364929
          quotation: null
          interpretation_note: null
          source:
            id: s_qi2KL55n73x1HtDszVsZ6F
            source_type: api_record
            title: 维基数据：齐氏（Q45364929）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364929
            external_identifier: Q45364929
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:00.249Z
            metadata_json: null
        - id: cs_poed1XRYcLmNJLepF5x2uN
          claim_id: c_HexwHQvjXKbm2M5JUu22vo
          source_id: s_hNWTMBC6q552FxcCtxB4Vw
          stance: supports
          locator: Q45364929
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_7Qjg9tLFznUMnF7D4t4K7v
        subject_person_id: p_dhFVx6GMqbAdJa25T7qrk6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_eJ5xPSqX9C5GQJFJ6vhqFc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5jqVWrHsr8jBJXgBQkuuWH
          claim_id: c_7Qjg9tLFznUMnF7D4t4K7v
          source_id: s_ANfzGbinedKmVFoYy6S9xD
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_ANfzGbinedKmVFoYy6S9xD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王洙（3941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3941&o=json
            external_identifier: CBDB:3941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:44.711Z
            metadata_json: null
        - id: cs_TR5RPK3yUoCPVcPrKjeMgy
          claim_id: c_7Qjg9tLFznUMnF7D4t4K7v
          source_id: s_qi2KL55n73x1HtDszVsZ6F
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_qi2KL55n73x1HtDszVsZ6F
            source_type: api_record
            title: 维基数据：齐氏（Q45364929）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364929
            external_identifier: Q45364929
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:00.249Z
            metadata_json: null
        - id: cs_ZYXUcZHesLsH8u1NqmUyXk
          claim_id: c_7Qjg9tLFznUMnF7D4t4K7v
          source_id: s_bAVZu7wS9x2wcXBfq2WzC1
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_bAVZu7wS9x2wcXBfq2WzC1
            source_type: api_record
            title: 维基数据：王洙（Q15935485）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15935485
            external_identifier: Q15935485
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:33.095Z
            metadata_json: null
      object_person:
        id: p_eJ5xPSqX9C5GQJFJ6vhqFc
        status: active
        display_name: 王洙
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 齐氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 齐氏，宋人物。CBDB 记录其籍贯记录为蒲陰，入仕记录为封贈。中国历代人物传记资料库（CBDB）以人物编号 5399 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 齐氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_eJ5xPSqX9C5GQJFJ6vhqFc | 王洙 | accepted |

## 外部来源

- [维基数据：齐氏（Q45364929）](https://www.wikidata.org/wiki/Q45364929)
- [维基数据：王洙（Q15935485）](https://www.wikidata.org/wiki/Q15935485)
- [CBDB 中国历代人物传记资料库：齊氏（5399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5399&o=json)
- [CBDB 中国历代人物传记资料库：王洙（3941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3941&o=json)
