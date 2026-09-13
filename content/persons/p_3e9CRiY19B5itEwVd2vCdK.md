---
schema: wang-person/v1
id: p_3e9CRiY19B5itEwVd2vCdK
status: active
merged_into: null
display_name: 王玉麟
cbdb_id: 61474
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TivmbJJ9J1nu4RC2YtAryG
        subject_person_id: p_3e9CRiY19B5itEwVd2vCdK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉麟（生于1856年），史料所见人物。本项目依据《中国历代人物传记资料库：王玉麟（CBDB 61474）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_oOn4N5oa49X2IvyOZ6Te0W
          claim_id: c_TivmbJJ9J1nu4RC2YtAryG
          source_id: s_p9thNTPNwA7KLeud3zcnJX
          stance: supports
          locator: CBDB:61474
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_p9thNTPNwA7KLeud3zcnJX
            source_type: api_record
            title: 中国历代人物传记资料库：王玉麟（CBDB 61474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61474&o=json
            external_identifier: CBDB:61474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6MS5LEkJcuW8MQ8Eg9dxBd
        subject_person_id: p_3e9CRiY19B5itEwVd2vCdK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1856年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1856-01-01
            latest: 1856-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j2nfpbMyVVEYNgTsarmQgr
          claim_id: c_6MS5LEkJcuW8MQ8Eg9dxBd
          source_id: s_p9thNTPNwA7KLeud3zcnJX
          stance: supports
          locator: CBDB:61474
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1401-1500）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_p9thNTPNwA7KLeud3zcnJX
            source_type: api_record
            title: 中国历代人物传记资料库：王玉麟（CBDB 61474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61474&o=json
            external_identifier: CBDB:61474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FbnUZjPvsx2oeQnm88D8Dp
        subject_person_id: p_3e9CRiY19B5itEwVd2vCdK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3xGTdkrQszaFLXdKuHWrKL
          claim_id: c_FbnUZjPvsx2oeQnm88D8Dp
          source_id: s_p9thNTPNwA7KLeud3zcnJX
          stance: supports
          locator: CBDB:61474
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1401-1500）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玉麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王玉麟（生于1856年），史料所见人物。本项目依据《中国历代人物传记资料库：王玉麟（CBDB 61474）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1856年 | accepted |
| name.primary | 王玉麟 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玉麟（CBDB 61474）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61474&o=json)
