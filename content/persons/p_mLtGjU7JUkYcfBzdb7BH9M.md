---
schema: wang-person/v1
id: p_mLtGjU7JUkYcfBzdb7BH9M
status: active
merged_into: null
display_name: 王登
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SwC8lpPeL4LIydWg-3IWCW
        subject_person_id: p_mLtGjU7JUkYcfBzdb7BH9M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登（1066年—1126年），史料所见人物。本项目依据《王登》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iFM9sMJ1L13r_Lcv0jrmNm
          claim_id: c_SwC8lpPeL4LIydWg-3IWCW
          source_id: s_rUvLhH5bEHHz1S1yAbATCK
          stance: supports
          locator: Q45369083
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_rUvLhH5bEHHz1S1yAbATCK
            source_type: api_record
            title: 维基数据：王登（Q45369083）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45369083
            external_identifier: Q45369083
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:09.552Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mmVMVWLT5HRMm3S3TVd3cn
        subject_person_id: p_mLtGjU7JUkYcfBzdb7BH9M
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1066年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1066-01-01
            latest: 1066-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DhbSB6ZYA34B8U22fWGo2R
          claim_id: c_mmVMVWLT5HRMm3S3TVd3cn
          source_id: s_rUvLhH5bEHHz1S1yAbATCK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_rUvLhH5bEHHz1S1yAbATCK
            source_type: api_record
            title: 维基数据：王登（Q45369083）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45369083
            external_identifier: Q45369083
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:09.552Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Jo27BDC3BR9u1KzkdmFxpy
        subject_person_id: p_mLtGjU7JUkYcfBzdb7BH9M
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1126年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1126-01-01
            latest: 1126-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xa3t3kGkzmVmRb9caB3fZz
          claim_id: c_Jo27BDC3BR9u1KzkdmFxpy
          source_id: s_rUvLhH5bEHHz1S1yAbATCK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_rUvLhH5bEHHz1S1yAbATCK
            source_type: api_record
            title: 维基数据：王登（Q45369083）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45369083
            external_identifier: Q45369083
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:09.552Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vLPE6JBX5zy7L6jY9xBBaa
        subject_person_id: p_mLtGjU7JUkYcfBzdb7BH9M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_utUmRUxLY1S3T2CLMjBXZ3
          claim_id: c_vLPE6JBX5zy7L6jY9xBBaa
          source_id: s_rUvLhH5bEHHz1S1yAbATCK
          stance: supports
          locator: Q45369083
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_BC8JbqaoABV5sYbUGVLC5H
        subject_person_id: p_mLtGjU7JUkYcfBzdb7BH9M
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_CvkqbHiKU1yv5J5yN1sDim
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B9cDiU4DsdwgqetbGc78Uu
          claim_id: c_BC8JbqaoABV5sYbUGVLC5H
          source_id: s_u5XDNLvUkkSgZpXLohmAbF
          stance: supports
          locator: 亲属关系：三子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_u5XDNLvUkkSgZpXLohmAbF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王登（10686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10686&o=json
            external_identifier: CBDB:10686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:02:19.443Z
            metadata_json: null
        - id: cs_VxFZvAGetEKM3wiUcatRSP
          claim_id: c_BC8JbqaoABV5sYbUGVLC5H
          source_id: s_rUvLhH5bEHHz1S1yAbATCK
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_rUvLhH5bEHHz1S1yAbATCK
            source_type: api_record
            title: 维基数据：王登（Q45369083）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45369083
            external_identifier: Q45369083
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:09.552Z
            metadata_json: null
        - id: cs_eaqqUFFMayPF4BkQd3bB15
          claim_id: c_BC8JbqaoABV5sYbUGVLC5H
          source_id: s_D7NNZLUFKQfdTjRPpLvri2
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_D7NNZLUFKQfdTjRPpLvri2
            source_type: api_record
            title: 维基数据：王师古（Q45369091）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45369091
            external_identifier: Q45369091
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:57.822Z
            metadata_json: null
      object_person:
        id: p_CvkqbHiKU1yv5J5yN1sDim
        status: active
        display_name: 王师古
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王登

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王登（1066年—1126年），史料所见人物。本项目依据《王登》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1066年 | accepted |
| death.date | 1126年 | accepted |
| name.primary | 王登 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_CvkqbHiKU1yv5J5yN1sDim | 王师古 | accepted |

## 外部来源

- [维基数据：王登（Q45369083）](https://www.wikidata.org/wiki/Q45369083)
- [维基数据：王师古（Q45369091）](https://www.wikidata.org/wiki/Q45369091)
- [CBDB 中国历代人物传记资料库：王登（10686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10686&o=json)
