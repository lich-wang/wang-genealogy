---
schema: wang-person/v1
id: p_uvC2UTFHn7qq3s4HmhkHi2
status: active
merged_into: null
display_name: 王勋
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ECKgP_-DYzKd4jEa5FX0tu
        subject_person_id: p_uvC2UTFHn7qq3s4HmhkHi2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勋（卒于1138年），史料所见人物。本项目依据《王勋》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FDtlF9rwmwQjoCqIg8ofJ2
          claim_id: c_ECKgP_-DYzKd4jEa5FX0tu
          source_id: s_Waes1iN3Z5AR1SBu7Rtfjy
          stance: supports
          locator: Q45359505
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Waes1iN3Z5AR1SBu7Rtfjy
            source_type: api_record
            title: 维基数据：王勋（Q45359505）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359505
            external_identifier: Q45359505
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:49.422Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_u3p1ovfg8nC6oNym38zGhB
        subject_person_id: p_uvC2UTFHn7qq3s4HmhkHi2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1138年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1138-01-01
            latest: 1138-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FjZEEZApFQzeFM5MRUPQVq
          claim_id: c_u3p1ovfg8nC6oNym38zGhB
          source_id: s_Waes1iN3Z5AR1SBu7Rtfjy
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Waes1iN3Z5AR1SBu7Rtfjy
            source_type: api_record
            title: 维基数据：王勋（Q45359505）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359505
            external_identifier: Q45359505
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:49.422Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KZ1kLLoEEBuC221PSWDmTR
        subject_person_id: p_uvC2UTFHn7qq3s4HmhkHi2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勋
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_H8Vgk6s6bUSnr92CG2Wor1
          claim_id: c_KZ1kLLoEEBuC221PSWDmTR
          source_id: s_Waes1iN3Z5AR1SBu7Rtfjy
          stance: supports
          locator: Q45359505
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gJcJbcLCZKTtrnQ9QckPGY
        subject_person_id: p_42szA6CsjsGEHtctBDvhPe
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_uvC2UTFHn7qq3s4HmhkHi2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8PGJ8HvsnagMFoGPmCpfso
          claim_id: c_gJcJbcLCZKTtrnQ9QckPGY
          source_id: s_Waes1iN3Z5AR1SBu7Rtfjy
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Waes1iN3Z5AR1SBu7Rtfjy
            source_type: api_record
            title: 维基数据：王勋（Q45359505）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359505
            external_identifier: Q45359505
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:49.422Z
            metadata_json: null
        - id: cs_8PHpJmj6XMi2zKxaGdjK95
          claim_id: c_gJcJbcLCZKTtrnQ9QckPGY
          source_id: s_TDiSeBpHPozrTk3mUeU3Ac
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_TDiSeBpHPozrTk3mUeU3Ac
            source_type: api_record
            title: 维基数据：王玩（Q45393590）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45393590
            external_identifier: Q45393590
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:29.926Z
            metadata_json: null
      object_person:
        id: p_42szA6CsjsGEHtctBDvhPe
        status: active
        display_name: 王玩
        merged_into_person_id: null
  children:
    - claim:
        id: c_qKhQsPfLjSC7b6Hi45s3Hg
        subject_person_id: p_uvC2UTFHn7qq3s4HmhkHi2
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_tPx1ir7KRNm8CfciDjxhXM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9wNQ7JBbmuLwMamdGVXatU
          claim_id: c_qKhQsPfLjSC7b6Hi45s3Hg
          source_id: s_FkKGz9aQCiE9f83P6Tj93K
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_FkKGz9aQCiE9f83P6Tj93K
            source_type: api_record
            title: 维基数据：王正己（Q45362940）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45362940
            external_identifier: Q45362940
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:58.859Z
            metadata_json: null
        - id: cs_NczYLL4wcYzMHhFv5xHtEK
          claim_id: c_qKhQsPfLjSC7b6Hi45s3Hg
          source_id: s_Waes1iN3Z5AR1SBu7Rtfjy
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Waes1iN3Z5AR1SBu7Rtfjy
            source_type: api_record
            title: 维基数据：王勋（Q45359505）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359505
            external_identifier: Q45359505
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:49.422Z
            metadata_json: null
        - id: cs_sEBWrcNEcUMit7cSZstucP
          claim_id: c_qKhQsPfLjSC7b6Hi45s3Hg
          source_id: s_QkFGKNsFDypwd6JYHVoC3o
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_QkFGKNsFDypwd6JYHVoC3o
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王勳（1818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1818&o=json
            external_identifier: CBDB:1818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:02:14.747Z
            metadata_json: null
      object_person:
        id: p_tPx1ir7KRNm8CfciDjxhXM
        status: active
        display_name: 王正己
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王勋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王勋（卒于1138年），史料所见人物。本项目依据《王勋》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1138年 | accepted |
| name.primary | 王勋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_42szA6CsjsGEHtctBDvhPe | 王玩 | accepted |
| children | p_tPx1ir7KRNm8CfciDjxhXM | 王正己 | accepted |

## 外部来源

- [维基数据：王玩（Q45393590）](https://www.wikidata.org/wiki/Q45393590)
- [维基数据：王勋（Q45359505）](https://www.wikidata.org/wiki/Q45359505)
- [维基数据：王正己（Q45362940）](https://www.wikidata.org/wiki/Q45362940)
- [CBDB 中国历代人物传记资料库：王勳（1818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1818&o=json)
