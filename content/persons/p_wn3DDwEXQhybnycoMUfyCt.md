---
schema: wang-person/v1
id: p_wn3DDwEXQhybnycoMUfyCt
status: active
merged_into: null
display_name: 王炼
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R7CjFMoYRz4DqKUH4crvbT
        subject_person_id: p_wn3DDwEXQhybnycoMUfyCt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炼（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任秘書省正字。中国历代人物传记资料库（CBDB）以人物编号 175476 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_kaMMBGGUbpLh7KPz8ZjMKL
          claim_id: c_R7CjFMoYRz4DqKUH4crvbT
          source_id: s_D2qYYMEW7SGjDZP2NJFG8H
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_D2qYYMEW7SGjDZP2NJFG8H
            source_type: api_record
            title: 维基数据：王炼（Q45661924）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661924
            external_identifier: Q45661924
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:04.038Z
            metadata_json: null
        - id: cs_mzElyWD_fFF6XovppxFZ_a
          claim_id: c_R7CjFMoYRz4DqKUH4crvbT
          source_id: s_FP1g3bE7pB13sreLjsNnTE
          stance: supports
          locator: CBDB:175476
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_FP1g3bE7pB13sreLjsNnTE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鍊（175476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175476&o=json
            external_identifier: CBDB:175476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:04.265Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_BChhUW7HVh9NjD9xokrEUL
        subject_person_id: p_wn3DDwEXQhybnycoMUfyCt
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
        - id: cs_uyGhm3SmWRumHAp5wGU43D
          claim_id: c_BChhUW7HVh9NjD9xokrEUL
          source_id: s_D2qYYMEW7SGjDZP2NJFG8H
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_D2qYYMEW7SGjDZP2NJFG8H
            source_type: api_record
            title: 维基数据：王炼（Q45661924）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661924
            external_identifier: Q45661924
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:04.038Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qVjEnX5r362NxWognrdjwB
        subject_person_id: p_wn3DDwEXQhybnycoMUfyCt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炼
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8L3yyyXdtoYpQTj9GdDeRD
          claim_id: c_qVjEnX5r362NxWognrdjwB
          source_id: s_D2qYYMEW7SGjDZP2NJFG8H
          stance: supports
          locator: Q45661924
          quotation: null
          interpretation_note: null
          source:
            id: s_D2qYYMEW7SGjDZP2NJFG8H
            source_type: api_record
            title: 维基数据：王炼（Q45661924）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661924
            external_identifier: Q45661924
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:04.038Z
            metadata_json: null
        - id: cs_fTXkvKtTsa2gcZyC8KK3jn
          claim_id: c_qVjEnX5r362NxWognrdjwB
          source_id: s_FP1g3bE7pB13sreLjsNnTE
          stance: supports
          locator: Q45661924
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yyBj6Wrko7x52Hgeh5DuKa
        subject_person_id: p_dWczLwq2nt4NbhEboLi4hv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wn3DDwEXQhybnycoMUfyCt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_mKRk5AR4inn6oQKsjqFiL9
          claim_id: c_yyBj6Wrko7x52Hgeh5DuKa
          source_id: s_JQDw4kqPSC6ASxARvw3uXR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_JQDw4kqPSC6ASxARvw3uXR
            source_type: api_record
            title: 维基数据：王逵（Q45576024）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45576024
            external_identifier: Q45576024
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:22.595Z
            metadata_json: null
        - id: cs_nWvuauADNG8Q9xhTDhAWZy
          claim_id: c_yyBj6Wrko7x52Hgeh5DuKa
          source_id: s_BZNF1EvpB2BuXDND8wBw9s
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_BZNF1EvpB2BuXDND8wBw9s
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逵（158714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158714&o=json
            external_identifier: CBDB:158714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:22.737Z
            metadata_json: null
        - id: cs_ooNiVRVkM4jQuZBPLKT51S
          claim_id: c_yyBj6Wrko7x52Hgeh5DuKa
          source_id: s_D2qYYMEW7SGjDZP2NJFG8H
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_D2qYYMEW7SGjDZP2NJFG8H
            source_type: api_record
            title: 维基数据：王炼（Q45661924）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661924
            external_identifier: Q45661924
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:04.038Z
            metadata_json: null
        - id: cs_9PoWBvfb4LydGtZwWDueaq
          claim_id: c_yyBj6Wrko7x52Hgeh5DuKa
          source_id: s_FP1g3bE7pB13sreLjsNnTE
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_FP1g3bE7pB13sreLjsNnTE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鍊（175476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175476&o=json
            external_identifier: CBDB:175476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:04.265Z
            metadata_json: null
      object_person:
        id: p_dWczLwq2nt4NbhEboLi4hv
        status: active
        display_name: 王逵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王炼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王炼（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任秘書省正字。中国历代人物传记资料库（CBDB）以人物编号 175476 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 857年 | accepted |
| name.primary | 王炼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dWczLwq2nt4NbhEboLi4hv | 王逵 | accepted |

## 外部来源

- [维基数据：王逵（Q45576024）](https://www.wikidata.org/wiki/Q45576024)
- [维基数据：王炼（Q45661924）](https://www.wikidata.org/wiki/Q45661924)
- [CBDB 中国历代人物传记资料库：王逵（158714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158714&o=json)
- [CBDB 中国历代人物传记资料库：王鍊（175476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175476&o=json)
