---
schema: wang-person/v1
id: p_9n32TMSKZKXd8WzKUCmVpE
status: active
merged_into: null
display_name: 王起
cbdb_id: 175480
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6AXgGBQBYWgJQrs7LQjz1d
        subject_person_id: p_9n32TMSKZKXd8WzKUCmVpE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽，身份包括詩人。中国历代人物传记资料库（CBDB）以人物编号 175480 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6EkvQrYCG535J6e9AZBy3r
          claim_id: c_6AXgGBQBYWgJQrs7LQjz1d
          source_id: s_BAYeDpmfGxWKgcQEQabCfq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_BAYeDpmfGxWKgcQEQabCfq
            source_type: api_record
            title: 维基数据：王起（Q45662162）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662162
            external_identifier: Q45662162
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:27.941Z
            metadata_json: null
        - id: cs_TGqI8cCY-vjTMNBIdv8Q7i
          claim_id: c_6AXgGBQBYWgJQrs7LQjz1d
          source_id: s_CmAa597A7JHvoqEvt6HSS6
          stance: supports
          locator: CBDB:175480
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_CmAa597A7JHvoqEvt6HSS6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王起（175480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175480&o=json
            external_identifier: CBDB:175480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:28.098Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4S9qZTSAd29i9zNgg6Ciej
        subject_person_id: p_9n32TMSKZKXd8WzKUCmVpE
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
        - id: cs_HSj3oHG97q25rTv5XDPEjg
          claim_id: c_4S9qZTSAd29i9zNgg6Ciej
          source_id: s_BAYeDpmfGxWKgcQEQabCfq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_BAYeDpmfGxWKgcQEQabCfq
            source_type: api_record
            title: 维基数据：王起（Q45662162）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662162
            external_identifier: Q45662162
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:27.941Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZACLnvZXSBGMdrNhunwZQF
        subject_person_id: p_9n32TMSKZKXd8WzKUCmVpE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2vnNAN5MBUefkSfs14Lvve
          claim_id: c_ZACLnvZXSBGMdrNhunwZQF
          source_id: s_BAYeDpmfGxWKgcQEQabCfq
          stance: supports
          locator: Q45662162
          quotation: null
          interpretation_note: null
          source:
            id: s_BAYeDpmfGxWKgcQEQabCfq
            source_type: api_record
            title: 维基数据：王起（Q45662162）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662162
            external_identifier: Q45662162
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:27.941Z
            metadata_json: null
        - id: cs_QZBw96EENLDc1b2Mm3KFHJ
          claim_id: c_ZACLnvZXSBGMdrNhunwZQF
          source_id: s_CmAa597A7JHvoqEvt6HSS6
          stance: supports
          locator: Q45662162
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ihwgfrQhG2CLJJHYb4cRSD
        subject_person_id: p_MSdU233nM5wdxC7iCwusHu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9n32TMSKZKXd8WzKUCmVpE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3gSZLoQw5BKqaK1HPK8uu6
          claim_id: c_ihwgfrQhG2CLJJHYb4cRSD
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
        - id: cs_PRqtc9U5fhDHeVXYqPu6US
          claim_id: c_ihwgfrQhG2CLJJHYb4cRSD
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
        - id: cs_2nG1b8Gpqqct3rEhEFS8d1
          claim_id: c_ihwgfrQhG2CLJJHYb4cRSD
          source_id: s_BAYeDpmfGxWKgcQEQabCfq
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_BAYeDpmfGxWKgcQEQabCfq
            source_type: api_record
            title: 维基数据：王起（Q45662162）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662162
            external_identifier: Q45662162
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:27.941Z
            metadata_json: null
        - id: cs_ThkE8JM9ZJW5h8WrehoAXx
          claim_id: c_ihwgfrQhG2CLJJHYb4cRSD
          source_id: s_CmAa597A7JHvoqEvt6HSS6
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_CmAa597A7JHvoqEvt6HSS6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王起（175480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175480&o=json
            external_identifier: CBDB:175480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:28.098Z
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

# 王起

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王起（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽，身份包括詩人。中国历代人物传记资料库（CBDB）以人物编号 175480 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 820年 | accepted |
| name.primary | 王起 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MSdU233nM5wdxC7iCwusHu | 王澄 | accepted |

## 外部来源

- [维基数据：王澄（Q45661568）](https://www.wikidata.org/wiki/Q45661568)
- [维基数据：王起（Q45662162）](https://www.wikidata.org/wiki/Q45662162)
- [CBDB 中国历代人物传记资料库：王澄（175470）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175470&o=json)
- [CBDB 中国历代人物传记资料库：王起（175480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175480&o=json)
