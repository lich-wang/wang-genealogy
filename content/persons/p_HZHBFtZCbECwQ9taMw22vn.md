---
schema: wang-person/v1
id: p_HZHBFtZCbECwQ9taMw22vn
status: active
merged_into: null
display_name: 王克莊
cbdb_id: 69355
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d7kvgPEp4s6TYmvHGNEdte
        subject_person_id: p_HZHBFtZCbECwQ9taMw22vn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克莊（生于1668年），史料所见人物。本项目依据《中国历代人物传记资料库：王克莊（CBDB 69355）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_jd_t0ibee02gG75nB-7yLT
          claim_id: c_d7kvgPEp4s6TYmvHGNEdte
          source_id: s_QeP86cbvVpxszQMUrWGZFF
          stance: supports
          locator: CBDB:69355
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_QeP86cbvVpxszQMUrWGZFF
            source_type: api_record
            title: 中国历代人物传记资料库：王克莊（CBDB 69355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69355&o=json
            external_identifier: CBDB:69355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6hKnBj1Ro83doT98Z4BT4M
        subject_person_id: p_HZHBFtZCbECwQ9taMw22vn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1668年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1668-01-01
            latest: 1668-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i7bEP2QiswpJKa7cSjSK6b
          claim_id: c_6hKnBj1Ro83doT98Z4BT4M
          source_id: s_QeP86cbvVpxszQMUrWGZFF
          stance: supports
          locator: CBDB:69355
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1668
          source:
            id: s_QeP86cbvVpxszQMUrWGZFF
            source_type: api_record
            title: 中国历代人物传记资料库：王克莊（CBDB 69355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69355&o=json
            external_identifier: CBDB:69355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZgCCz9CdUVqra5bM9y5wFg
        subject_person_id: p_HZHBFtZCbECwQ9taMw22vn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克莊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SCirYpRtytvXD1Ydn9MhMG
          claim_id: c_ZgCCz9CdUVqra5bM9y5wFg
          source_id: s_QeP86cbvVpxszQMUrWGZFF
          stance: supports
          locator: CBDB:69355
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1668
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

# 王克莊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王克莊（生于1668年），史料所见人物。本项目依据《中国历代人物传记资料库：王克莊（CBDB 69355）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1668年 | accepted |
| name.primary | 王克莊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克莊（CBDB 69355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69355&o=json)
