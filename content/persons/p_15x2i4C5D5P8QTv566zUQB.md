---
schema: wang-person/v1
id: p_15x2i4C5D5P8QTv566zUQB
status: active
merged_into: null
display_name: 王造
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eds7NJVknZVN9gBGKVPYrd
        subject_person_id: p_15x2i4C5D5P8QTv566zUQB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王造（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175471 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Gysu8Lz4K46Gw2kzfKE4dm
          claim_id: c_eds7NJVknZVN9gBGKVPYrd
          source_id: s_vYFAo2AcDdnkdHXwUonBx5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_vYFAo2AcDdnkdHXwUonBx5
            source_type: api_record
            title: 维基数据：王造（Q45661626）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661626
            external_identifier: Q45661626
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
        - id: cs_Db6Ojp26Bc4CH41XP5eu7J
          claim_id: c_eds7NJVknZVN9gBGKVPYrd
          source_id: s_9EvPHGrkgCmeWVjEDm4Lw2
          stance: supports
          locator: CBDB:175471
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_9EvPHGrkgCmeWVjEDm4Lw2
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王造（175471）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175471&o=json
            external_identifier: CBDB:175471
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:26.388Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_i6f8gxcoj6C6XUTKy9tFf6
        subject_person_id: p_15x2i4C5D5P8QTv566zUQB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 820年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0820-01-01
            latest: 0820-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wT4BFPq2cytZ5JCPw4y7AG
          claim_id: c_i6f8gxcoj6C6XUTKy9tFf6
          source_id: s_vYFAo2AcDdnkdHXwUonBx5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_vYFAo2AcDdnkdHXwUonBx5
            source_type: api_record
            title: 维基数据：王造（Q45661626）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661626
            external_identifier: Q45661626
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rvWsr5GeH9bD4UydWdCrdY
        subject_person_id: p_15x2i4C5D5P8QTv566zUQB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王造
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Qqh4UAwEfByP6w9mGiBxGq
          claim_id: c_rvWsr5GeH9bD4UydWdCrdY
          source_id: s_9EvPHGrkgCmeWVjEDm4Lw2
          stance: supports
          locator: Q45661626
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_f1FKCnsd78V799rWV2khZ4
          claim_id: c_rvWsr5GeH9bD4UydWdCrdY
          source_id: s_vYFAo2AcDdnkdHXwUonBx5
          stance: supports
          locator: Q45661626
          quotation: null
          interpretation_note: null
          source:
            id: s_vYFAo2AcDdnkdHXwUonBx5
            source_type: api_record
            title: 维基数据：王造（Q45661626）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661626
            external_identifier: Q45661626
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_neE6E4k9Puhby8gWBmbySH
        subject_person_id: p_MSdU233nM5wdxC7iCwusHu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_15x2i4C5D5P8QTv566zUQB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_hKAtaTtDCf4qNdVLLggQEA
          claim_id: c_neE6E4k9Puhby8gWBmbySH
          source_id: s_HhevPEBLU4JGud3etd1upo
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HhevPEBLU4JGud3etd1upo
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澄（175470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175470&o=json
            external_identifier: CBDB:175470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:56.082Z
            metadata_json: null
        - id: cs_iynUDD4pF2RZJqVUARNXuV
          claim_id: c_neE6E4k9Puhby8gWBmbySH
          source_id: s_4fQBPy6QqzcQHB5fC9SqkK
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_4fQBPy6QqzcQHB5fC9SqkK
            source_type: api_record
            title: 维基数据：王澄（Q45661568）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661568
            external_identifier: Q45661568
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.918Z
            metadata_json: null
        - id: cs_yNt2ELLcLcRh5gdfbf7r6j
          claim_id: c_neE6E4k9Puhby8gWBmbySH
          source_id: s_vYFAo2AcDdnkdHXwUonBx5
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vYFAo2AcDdnkdHXwUonBx5
            source_type: api_record
            title: 维基数据：王造（Q45661626）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661626
            external_identifier: Q45661626
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
        - id: cs_J5NgYHZMwbB3gtecwtNCwK
          claim_id: c_neE6E4k9Puhby8gWBmbySH
          source_id: s_9EvPHGrkgCmeWVjEDm4Lw2
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_9EvPHGrkgCmeWVjEDm4Lw2
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王造（175471）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175471&o=json
            external_identifier: CBDB:175471
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:26.388Z
            metadata_json: null
      object_person:
        id: p_MSdU233nM5wdxC7iCwusHu
        status: active
        display_name: 王澄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王造

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王造（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175471 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 820年 | accepted |
| name.primary | 王造 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MSdU233nM5wdxC7iCwusHu | 王澄 | accepted |

## 外部来源

- [维基数据：王澄（Q45661568）](https://www.wikidata.org/wiki/Q45661568)
- [维基数据：王造（Q45661626）](https://www.wikidata.org/wiki/Q45661626)
- [CBDB 中国历代人物传记资料库：王澄（175470）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175470&o=json)
- [CBDB 中国历代人物传记资料库：王造（175471）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175471&o=json)
