---
schema: wang-person/v1
id: p_DBYMcu7Cw4PWAgqUTbhPkq
status: active
merged_into: null
display_name: 王𡏼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ajCWQKQS9seu5bHYUno5Gh
        subject_person_id: p_DBYMcu7Cw4PWAgqUTbhPkq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王𡏼
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8e5kZV73D4sBv5EE2YQitQ
          claim_id: c_ajCWQKQS9seu5bHYUno5Gh
          source_id: s_AMAkvVSkG6qqXMJpth8T2A
          stance: supports
          locator: Q45534744
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_AMAkvVSkG6qqXMJpth8T2A
            source_type: api_record
            title: 维基数据：王𡏼（Q45534744）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45534744
            external_identifier: Q45534744
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_S4qQdz5SWMSbTUNL4Fgaub
          claim_id: c_ajCWQKQS9seu5bHYUno5Gh
          source_id: s_euPgwJh6VJZ179UbE9haPa
          stance: supports
          locator: CBDB:226580
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_euPgwJh6VJZ179UbE9haPa
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王?（226580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226580&o=json
            external_identifier: CBDB:226580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LuVFiz2qFx3LaftvEDwDJJ
        subject_person_id: p_DBYMcu7Cw4PWAgqUTbhPkq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Ming dynasty person CBDB = 226580
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mMBPurKQNhR5sYYpyZYw1A
          claim_id: c_LuVFiz2qFx3LaftvEDwDJJ
          source_id: s_AMAkvVSkG6qqXMJpth8T2A
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6AAAVYxVnMyEaZW39MrDHa
        subject_person_id: p_YcgZGHB8b41JUksSD6hCbG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DBYMcu7Cw4PWAgqUTbhPkq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F9w6G8zZyaQXVU8KmnQoC8
          claim_id: c_6AAAVYxVnMyEaZW39MrDHa
          source_id: s_UEJCm4BifC222RfsPoT6b7
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_UEJCm4BifC222RfsPoT6b7
            source_type: api_record
            title: 维基数据：王宗蓁（Q45528855）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45528855
            external_identifier: Q45528855
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:48.391Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%97%E8%93%81
        - id: cs_hbohNd8453hjFTdAVznKpC
          claim_id: c_6AAAVYxVnMyEaZW39MrDHa
          source_id: s_AMAkvVSkG6qqXMJpth8T2A
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_E8iRDLvJzHXeix4bXLz5vt
          claim_id: c_6AAAVYxVnMyEaZW39MrDHa
          source_id: s_csiJ837yS4LpHosWR4nuoi
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：萬曆丙戌科進士同年總錄
          source:
            id: s_csiJ837yS4LpHosWR4nuoi
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宗蓁（207031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207031&o=json
            external_identifier: CBDB:207031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:48.563Z
            metadata_json: null
      object_person:
        id: p_YcgZGHB8b41JUksSD6hCbG
        status: active
        display_name: 王宗蓁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王𡏼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王𡏼 | accepted |
| bio.summary | Ming dynasty person CBDB = 226580 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YcgZGHB8b41JUksSD6hCbG | 王宗蓁 | accepted |

## 外部来源

- [维基数据：王宗蓁（Q45528855）](https://www.wikidata.org/wiki/Q45528855)
- [维基数据：王𡏼（Q45534744）](https://www.wikidata.org/wiki/Q45534744)
- [CBDB 中国历代人物传记资料库：王?（226580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226580&o=json)
- [CBDB 中国历代人物传记资料库：王宗蓁（207031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207031&o=json)
