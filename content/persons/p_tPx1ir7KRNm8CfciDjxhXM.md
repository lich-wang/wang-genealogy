---
schema: wang-person/v1
id: p_tPx1ir7KRNm8CfciDjxhXM
status: active
merged_into: null
display_name: 王正己
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hQP4ppsjmQO7Alo0FEb7Ww
        subject_person_id: p_tPx1ir7KRNm8CfciDjxhXM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正己（1119年—1196年），史料所见人物。本项目依据《王正己》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qkfQWW2SOwbNy2oIeQ9nWr
          claim_id: c_hQP4ppsjmQO7Alo0FEb7Ww
          source_id: s_FkKGz9aQCiE9f83P6Tj93K
          stance: supports
          locator: Q45362940
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Hp9gFGxG5X5gti7Qw8R5mi
        subject_person_id: p_tPx1ir7KRNm8CfciDjxhXM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1119年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1119-01-01
            latest: 1119-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ngu6KEbFCkxPasB29FWfro
          claim_id: c_Hp9gFGxG5X5gti7Qw8R5mi
          source_id: s_FkKGz9aQCiE9f83P6Tj93K
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_g7NBiFpgHJ6TE9MEsLNiB7
        subject_person_id: p_tPx1ir7KRNm8CfciDjxhXM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1196年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1196-01-01
            latest: 1196-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EQRrjjY2As1TYZXcwLP94d
          claim_id: c_g7NBiFpgHJ6TE9MEsLNiB7
          source_id: s_FkKGz9aQCiE9f83P6Tj93K
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_155timvDvUCcG2ceZSDC5i
        subject_person_id: p_tPx1ir7KRNm8CfciDjxhXM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正己
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Z52RyiH65V8k5ECE67K3P8
          claim_id: c_155timvDvUCcG2ceZSDC5i
          source_id: s_FkKGz9aQCiE9f83P6Tj93K
          stance: supports
          locator: Q45362940
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_uvC2UTFHn7qq3s4HmhkHi2
        status: active
        display_name: 王勋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王正己

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王正己（1119年—1196年），史料所见人物。本项目依据《王正己》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1119年 | accepted |
| death.date | 1196年 | accepted |
| name.primary | 王正己 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uvC2UTFHn7qq3s4HmhkHi2 | 王勋 | accepted |

## 外部来源

- [维基数据：王勋（Q45359505）](https://www.wikidata.org/wiki/Q45359505)
- [维基数据：王正己（Q45362940）](https://www.wikidata.org/wiki/Q45362940)
- [CBDB 中国历代人物传记资料库：王勳（1818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1818&o=json)
