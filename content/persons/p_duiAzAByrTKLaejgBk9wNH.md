---
schema: wang-person/v1
id: p_duiAzAByrTKLaejgBk9wNH
status: active
merged_into: null
display_name: 王再立
cbdb_id: 192504
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uHZ5FZBoyt1ePgzGRt5GzW
        subject_person_id: p_duiAzAByrTKLaejgBk9wNH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王再立（卒于857年），史料所见人物。本项目依据《中国历代人物传记资料库：王再立（CBDB 192504）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_wyURskznZ2Q9L7TMn19NI0
          claim_id: c_uHZ5FZBoyt1ePgzGRt5GzW
          source_id: s_4PQzYZs2SaN5wQPFGdU5o4
          stance: supports
          locator: CBDB:192504
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_4PQzYZs2SaN5wQPFGdU5o4
            source_type: api_record
            title: 中国历代人物传记资料库：王再立（CBDB 192504）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192504&o=json
            external_identifier: CBDB:192504
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PHq8nrUpKwECZCDhhAa1op
        subject_person_id: p_duiAzAByrTKLaejgBk9wNH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 857年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0857-01-01
            latest: 0857-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_id1zG5LdtSKJUrF3dPmZNk
          claim_id: c_PHq8nrUpKwECZCDhhAa1op
          source_id: s_4PQzYZs2SaN5wQPFGdU5o4
          stance: supports
          locator: CBDB:192504
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 857
          source:
            id: s_4PQzYZs2SaN5wQPFGdU5o4
            source_type: api_record
            title: 中国历代人物传记资料库：王再立（CBDB 192504）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192504&o=json
            external_identifier: CBDB:192504
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nfCxYsLXJ9GgcX3kHczGPC
        subject_person_id: p_duiAzAByrTKLaejgBk9wNH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王再立
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ebXDH4iuk3pXws66JWJ6XE
          claim_id: c_nfCxYsLXJ9GgcX3kHczGPC
          source_id: s_4PQzYZs2SaN5wQPFGdU5o4
          stance: supports
          locator: CBDB:192504
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 857
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

# 王再立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王再立（卒于857年），史料所见人物。本项目依据《中国历代人物传记资料库：王再立（CBDB 192504）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 857年 | accepted |
| name.primary | 王再立 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王再立（CBDB 192504）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192504&o=json)
