---
schema: wang-person/v1
id: p_NB3k3RM2oCbRQNMB5AZfBf
status: active
merged_into: null
display_name: 王埜
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oTgx4dyYQ7xxN9pL3EGzj1
        subject_person_id: p_NB3k3RM2oCbRQNMB5AZfBf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王埜（？—1260年），字子文，号潜斋。原籍吴县（今江苏省苏州市）。婺州金华县（今浙江省金华市）人，南宋大臣、诗人、词人、书法家，宝章阁待制介王介之子，真德秀门人。 王埜自幼好学，以父王介荫补官，嘉定十三年（1220年）进士，在潭州（治今湖南省长沙市）任职时，被湖南宣抚使真德秀看重，把他招到幕府。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_jFqqOjj80RRNyxa2ALaYEH
          claim_id: c_oTgx4dyYQ7xxN9pL3EGzj1
          source_id: s_AEcSBfYcP7zyQ6skSqJffS
          stance: supports
          locator: 导言
          quotation: 王埜（？—1260年），字子文，号潜斋。原籍吴县（今江苏省苏州市
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_AEcSBfYcP7zyQ6skSqJffS
            source_type: website
            title: 中文维基百科：王埜
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%9F%9C
            external_identifier: Q45367618
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Bsy5Knj2TwV8ZdLAL9Et3o
        subject_person_id: p_NB3k3RM2oCbRQNMB5AZfBf
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1260年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1260-01-01
            latest: 1260-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CFaTmSNXJLErA35YVeWjjE
          claim_id: c_Bsy5Knj2TwV8ZdLAL9Et3o
          source_id: s_bKUpYjTAJXaY1B7GkU82As
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_bKUpYjTAJXaY1B7GkU82As
            source_type: api_record
            title: 维基数据：王埜（Q45367618）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45367618
            external_identifier: Q45367618
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:09.552Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nTiVjWp7hi5tmivQC8oacc
        subject_person_id: p_NB3k3RM2oCbRQNMB5AZfBf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王埜
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_51zZbfJECQcLugEUh9k1ZV
          claim_id: c_nTiVjWp7hi5tmivQC8oacc
          source_id: s_bKUpYjTAJXaY1B7GkU82As
          stance: supports
          locator: Q45367618
          quotation: null
          interpretation_note: null
          source:
            id: s_bKUpYjTAJXaY1B7GkU82As
            source_type: api_record
            title: 维基数据：王埜（Q45367618）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45367618
            external_identifier: Q45367618
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:09.552Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hCdrUhvJKNjFyPLGJTUXi6
        subject_person_id: p_LCBtWCmv4CF5FFP9jJAR39
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_NB3k3RM2oCbRQNMB5AZfBf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1MZAw8AQrANqFJ8fc7KhKQ
          claim_id: c_hCdrUhvJKNjFyPLGJTUXi6
          source_id: s_eRnq3UjhdhP7bsDHzNdtPY
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_eRnq3UjhdhP7bsDHzNdtPY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王介（10241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10241&o=json
            external_identifier: CBDB:10241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:02:20.833Z
            metadata_json: null
        - id: cs_JwhS7hKrUvNZ7DF7MmQoTv
          claim_id: c_hCdrUhvJKNjFyPLGJTUXi6
          source_id: s_5RkC8g7e1MT4tfjwxDA2EK
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_5RkC8g7e1MT4tfjwxDA2EK
            source_type: api_record
            title: 维基数据：王介（Q45367613）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45367613
            external_identifier: Q45367613
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:09.552Z
            metadata_json: null
        - id: cs_eVp6YLZZutXXeC2sHC6MWA
          claim_id: c_hCdrUhvJKNjFyPLGJTUXi6
          source_id: s_bKUpYjTAJXaY1B7GkU82As
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_bKUpYjTAJXaY1B7GkU82As
            source_type: api_record
            title: 维基数据：王埜（Q45367618）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45367618
            external_identifier: Q45367618
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:09.552Z
            metadata_json: null
      object_person:
        id: p_LCBtWCmv4CF5FFP9jJAR39
        status: active
        display_name: 王介
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王埜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王埜（？—1260年），字子文，号潜斋。原籍吴县（今江苏省苏州市）。婺州金华县（今浙江省金华市）人，南宋大臣、诗人、词人、书法家，宝章阁待制介王介之子，真德秀门人。 王埜自幼好学，以父王介荫补官，嘉定十三年（1220年）进士，在潭州（治今湖南省长沙市）任职时，被湖南宣抚使真德秀看重，把他招到幕府。 | accepted |
| death.date | 1260年 | accepted |
| name.primary | 王埜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LCBtWCmv4CF5FFP9jJAR39 | 王介 | accepted |

## 外部来源

- [维基数据：王介（Q45367613）](https://www.wikidata.org/wiki/Q45367613)
- [维基数据：王埜（Q45367618）](https://www.wikidata.org/wiki/Q45367618)
- [中文维基百科：王埜](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%9F%9C)
- [CBDB 中国历代人物传记资料库：王介（10241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10241&o=json)
