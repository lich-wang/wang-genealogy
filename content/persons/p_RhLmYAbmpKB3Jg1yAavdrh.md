---
schema: wang-person/v1
id: p_RhLmYAbmpKB3Jg1yAavdrh
status: active
merged_into: null
display_name: 王兆林
cbdb_id: 69167
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_23aEwDaaFdpwHaci1WGFfQ
        subject_person_id: p_RhLmYAbmpKB3Jg1yAavdrh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆林（卒于1863年），史料所见人物。本项目依据《中国历代人物传记资料库：王兆林（CBDB 69167）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_4q_RBHKPFkmTsoT5rx0_Qt
          claim_id: c_23aEwDaaFdpwHaci1WGFfQ
          source_id: s_gHHHttnvEnMUTAvk2ZoQKB
          stance: supports
          locator: CBDB:69167
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_gHHHttnvEnMUTAvk2ZoQKB
            source_type: api_record
            title: 中国历代人物传记资料库：王兆林（CBDB 69167）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69167&o=json
            external_identifier: CBDB:69167
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9ee2f4Xg9Cv9JfYJymUM7M
        subject_person_id: p_RhLmYAbmpKB3Jg1yAavdrh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1863年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1863-01-01
            latest: 1863-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J4PJC7VMuGHhwZVBkokNXH
          claim_id: c_9ee2f4Xg9Cv9JfYJymUM7M
          source_id: s_gHHHttnvEnMUTAvk2ZoQKB
          stance: supports
          locator: CBDB:69167
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1863
          source:
            id: s_gHHHttnvEnMUTAvk2ZoQKB
            source_type: api_record
            title: 中国历代人物传记资料库：王兆林（CBDB 69167）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69167&o=json
            external_identifier: CBDB:69167
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tCqrEDaV12eT42BtuHKzjJ
        subject_person_id: p_RhLmYAbmpKB3Jg1yAavdrh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Twf5JqzagZ9hV7JK99LV86
          claim_id: c_tCqrEDaV12eT42BtuHKzjJ
          source_id: s_gHHHttnvEnMUTAvk2ZoQKB
          stance: supports
          locator: CBDB:69167
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1863
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

# 王兆林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王兆林（卒于1863年），史料所见人物。本项目依据《中国历代人物传记资料库：王兆林（CBDB 69167）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1863年 | accepted |
| name.primary | 王兆林 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兆林（CBDB 69167）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69167&o=json)
