---
schema: wang-person/v1
id: p_G4gDorhk4ihLSDdnH3nQn5
status: active
merged_into: null
display_name: 宋氏
revision: 1
cbdb_id: 573441
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EQEdFRTj3wih4TOYiDVIHh
        subject_person_id: p_G4gDorhk4ihLSDdnH3nQn5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 宋氏，史料所见人物。本项目依据《中国历代人物传记资料库：宋氏(釋守諲嫂)（CBDB 573441）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KiB33Yay-5I33vUVPrXY7-
          claim_id: c_EQEdFRTj3wih4TOYiDVIHh
          source_id: s_RUQuhjpnqG68XqUkpCda7j
          stance: supports
          locator: CBDB:573441
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_RUQuhjpnqG68XqUkpCda7j
            source_type: api_record
            title: 中国历代人物传记资料库：宋氏(釋守諲嫂)（CBDB 573441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573441&o=json
            external_identifier: CBDB:573441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RATvCJVSfJX1nR4CERhWHK
        subject_person_id: p_G4gDorhk4ihLSDdnH3nQn5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 宋氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lKOl_A9umZ2vel2FCihmkb
          claim_id: c_RATvCJVSfJX1nR4CERhWHK
          source_id: s_RUQuhjpnqG68XqUkpCda7j
          stance: supports
          locator: CBDB:573441
          quotation: null
          interpretation_note: CBDB 明确记录的王元友配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_FJnMXjsYeGKz6jqmGHugTU
        subject_person_id: p_53w7c8BQ41ZCGFDn4rGBMJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_G4gDorhk4ihLSDdnH3nQn5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KOy7P2j45yZrLZFz7dwnO0
          claim_id: c_FJnMXjsYeGKz6jqmGHugTU
          source_id: s_RUQuhjpnqG68XqUkpCda7j
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，10：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_53w7c8BQ41ZCGFDn4rGBMJ
        status: active
        display_name: 王元友
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 宋氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 宋氏，史料所见人物。本项目依据《中国历代人物传记资料库：宋氏(釋守諲嫂)（CBDB 573441）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 宋氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_53w7c8BQ41ZCGFDn4rGBMJ | 王元友 | accepted |

## 外部来源

- [中国历代人物传记资料库：宋氏(釋守諲嫂)（CBDB 573441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573441&o=json)
