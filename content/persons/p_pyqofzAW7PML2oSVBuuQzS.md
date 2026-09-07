---
schema: wang-person/v1
id: p_pyqofzAW7PML2oSVBuuQzS
status: active
merged_into: null
display_name: 王衣
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s-AtSKi2rQS200uLhTlava
        subject_person_id: p_pyqofzAW7PML2oSVBuuQzS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衣（1074年—1135年），史料所见人物。本项目依据《王衣》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sEd995Vj93f0x_6iG9kyeT
          claim_id: c_s-AtSKi2rQS200uLhTlava
          source_id: s_8C6zZTRB54AYoQz6i5MjdX
          stance: supports
          locator: Q45362970
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_8C6zZTRB54AYoQz6i5MjdX
            source_type: api_record
            title: 维基数据：王衣（Q45362970）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45362970
            external_identifier: Q45362970
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:00.551Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7NeHqdXJoZqonkiLg4DRrZ
        subject_person_id: p_pyqofzAW7PML2oSVBuuQzS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1074年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1074-01-01
            latest: 1074-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VXFH7NHRie8UGMgMgNWyBN
          claim_id: c_7NeHqdXJoZqonkiLg4DRrZ
          source_id: s_8C6zZTRB54AYoQz6i5MjdX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_8C6zZTRB54AYoQz6i5MjdX
            source_type: api_record
            title: 维基数据：王衣（Q45362970）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45362970
            external_identifier: Q45362970
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:00.551Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4SixDFz7qjdZhmFePFDt9y
        subject_person_id: p_pyqofzAW7PML2oSVBuuQzS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1135年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1135-01-01
            latest: 1135-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9zh7k3FrHvrMz4YPpj8gCH
          claim_id: c_4SixDFz7qjdZhmFePFDt9y
          source_id: s_8C6zZTRB54AYoQz6i5MjdX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_8C6zZTRB54AYoQz6i5MjdX
            source_type: api_record
            title: 维基数据：王衣（Q45362970）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45362970
            external_identifier: Q45362970
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:00.551Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nJx6hyvMr6b2cQVMhRetvE
        subject_person_id: p_pyqofzAW7PML2oSVBuuQzS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衣
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5zJBttXZLGG3gtYkz3Mef5
          claim_id: c_nJx6hyvMr6b2cQVMhRetvE
          source_id: s_8C6zZTRB54AYoQz6i5MjdX
          stance: supports
          locator: Q45362970
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_sDwqDZKexvDhhsjn7Ho3Jt
        subject_person_id: p_pyqofzAW7PML2oSVBuuQzS
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_HLGNe5Lb8quevKiBjXq4Qa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MQqfTWQN75Utv2KF4JCYp3
          claim_id: c_sDwqDZKexvDhhsjn7Ho3Jt
          source_id: s_qmgonxorQn7o85KrAUSMi5
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_qmgonxorQn7o85KrAUSMi5
            source_type: api_record
            title: 维基数据：王次张（Q45359746）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359746
            external_identifier: Q45359746
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:55.710Z
            metadata_json: null
        - id: cs_RNguHAEtP3uJEx3itE4oLi
          claim_id: c_sDwqDZKexvDhhsjn7Ho3Jt
          source_id: s_8C6zZTRB54AYoQz6i5MjdX
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_8C6zZTRB54AYoQz6i5MjdX
            source_type: api_record
            title: 维基数据：王衣（Q45362970）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45362970
            external_identifier: Q45362970
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:00.551Z
            metadata_json: null
        - id: cs_wEQz1Nz9LxBfb2447ouDXv
          claim_id: c_sDwqDZKexvDhhsjn7Ho3Jt
          source_id: s_gRkDdVxMwQfcndsEGsxn8z
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_gRkDdVxMwQfcndsEGsxn8z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王衣（3959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3959&o=json
            external_identifier: CBDB:3959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:02:17.160Z
            metadata_json: null
      object_person:
        id: p_HLGNe5Lb8quevKiBjXq4Qa
        status: active
        display_name: 王次张
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王衣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王衣（1074年—1135年），史料所见人物。本项目依据《王衣》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1074年 | accepted |
| death.date | 1135年 | accepted |
| name.primary | 王衣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_HLGNe5Lb8quevKiBjXq4Qa | 王次张 | accepted |

## 外部来源

- [维基数据：王次张（Q45359746）](https://www.wikidata.org/wiki/Q45359746)
- [维基数据：王衣（Q45362970）](https://www.wikidata.org/wiki/Q45362970)
- [CBDB 中国历代人物传记资料库：王衣（3959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3959&o=json)
