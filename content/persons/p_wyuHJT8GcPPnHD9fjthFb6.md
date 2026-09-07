---
schema: wang-person/v1
id: p_wyuHJT8GcPPnHD9fjthFb6
status: active
merged_into: null
display_name: 王仲举
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_IZp407menKTbVNRrXLfr-M
        subject_person_id: p_wyuHJT8GcPPnHD9fjthFb6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲举（1044年—1111年），史料所见人物。本项目依据《王仲举》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GvLFokckIZkxD3fkWCmOPO
          claim_id: c_IZp407menKTbVNRrXLfr-M
          source_id: s_7LADAohCSJ6iWBMELh2JLi
          stance: supports
          locator: Q45367934
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_7LADAohCSJ6iWBMELh2JLi
            source_type: api_record
            title: 维基数据：王仲举（Q45367934）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45367934
            external_identifier: Q45367934
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:09.552Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MMvxnAmFwy27GQzz4dGnna
        subject_person_id: p_wyuHJT8GcPPnHD9fjthFb6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1044年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1044-01-01
            latest: 1044-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9LEnSghAN3CnksDiM8UU82
          claim_id: c_MMvxnAmFwy27GQzz4dGnna
          source_id: s_7LADAohCSJ6iWBMELh2JLi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7LADAohCSJ6iWBMELh2JLi
            source_type: api_record
            title: 维基数据：王仲举（Q45367934）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45367934
            external_identifier: Q45367934
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:09.552Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_hJtvP5ZGTNMMGoX9KEqLWT
        subject_person_id: p_wyuHJT8GcPPnHD9fjthFb6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1111年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1111-01-01
            latest: 1111-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AG8pv5UN7sDNX5624Gyx6v
          claim_id: c_hJtvP5ZGTNMMGoX9KEqLWT
          source_id: s_7LADAohCSJ6iWBMELh2JLi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7LADAohCSJ6iWBMELh2JLi
            source_type: api_record
            title: 维基数据：王仲举（Q45367934）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45367934
            external_identifier: Q45367934
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:09.552Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Sr1Bo7YSoy5ycTmKUGcMDY
        subject_person_id: p_wyuHJT8GcPPnHD9fjthFb6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲举
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_L7eU4oBpBYvzpwFXS9n5ag
          claim_id: c_Sr1Bo7YSoy5ycTmKUGcMDY
          source_id: s_7LADAohCSJ6iWBMELh2JLi
          stance: supports
          locator: Q45367934
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_NnUBSkabSAWxFjT96sFCLh
        subject_person_id: p_wyuHJT8GcPPnHD9fjthFb6
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_XR3Jq9YWyzjN5X9R25eJNz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BESMJ9y43hsxFV5o75QLx6
          claim_id: c_NnUBSkabSAWxFjT96sFCLh
          source_id: s_7LADAohCSJ6iWBMELh2JLi
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7LADAohCSJ6iWBMELh2JLi
            source_type: api_record
            title: 维基数据：王仲举（Q45367934）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45367934
            external_identifier: Q45367934
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:09.552Z
            metadata_json: null
        - id: cs_DKZLZrN2NCHKQRrv7WsysC
          claim_id: c_NnUBSkabSAWxFjT96sFCLh
          source_id: s_1hB1BFNJKj3BY7yMwhZeSZ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_1hB1BFNJKj3BY7yMwhZeSZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仲舉（10337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10337&o=json
            external_identifier: CBDB:10337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:02:18.342Z
            metadata_json: null
        - id: cs_ydwyRHUjBXGDTn5W8LjNKU
          claim_id: c_NnUBSkabSAWxFjT96sFCLh
          source_id: s_XVkUuCX2789JVqw7ELeKUT
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_XVkUuCX2789JVqw7ELeKUT
            source_type: api_record
            title: 维基数据：王苹（Q45366084）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45366084
            external_identifier: Q45366084
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:06.207Z
            metadata_json: null
      object_person:
        id: p_XR3Jq9YWyzjN5X9R25eJNz
        status: active
        display_name: 王苹
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲举

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仲举（1044年—1111年），史料所见人物。本项目依据《王仲举》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1044年 | accepted |
| death.date | 1111年 | accepted |
| name.primary | 王仲举 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_XR3Jq9YWyzjN5X9R25eJNz | 王苹 | accepted |

## 外部来源

- [维基数据：王苹（Q45366084）](https://www.wikidata.org/wiki/Q45366084)
- [维基数据：王仲举（Q45367934）](https://www.wikidata.org/wiki/Q45367934)
- [CBDB 中国历代人物传记资料库：王仲舉（10337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10337&o=json)
