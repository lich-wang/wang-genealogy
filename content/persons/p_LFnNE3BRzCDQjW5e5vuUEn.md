---
schema: wang-person/v1
id: p_LFnNE3BRzCDQjW5e5vuUEn
status: active
merged_into: null
display_name: 王罴
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4BXygPG0b7UstrPmDPTOVv
        subject_person_id: p_LFnNE3BRzCDQjW5e5vuUEn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王罴，史料所见人物。本项目依据《王罴》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JEwodTOQXqA_1Q8yRggqeW
          claim_id: c_4BXygPG0b7UstrPmDPTOVv
          source_id: s_edBoCBLTqqky4H7JzAbgmD
          stance: supports
          locator: Q67389051
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_edBoCBLTqqky4H7JzAbgmD
            source_type: api_record
            title: 维基数据：王罴（Q67389051）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q67389051
            external_identifier: Q67389051
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:19.447Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_A8mFNPJ4fCqY1HMAmyZGPS
        subject_person_id: p_LFnNE3BRzCDQjW5e5vuUEn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王罴
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2v6tVRGvgYFmdp7asus4i9
          claim_id: c_A8mFNPJ4fCqY1HMAmyZGPS
          source_id: s_edBoCBLTqqky4H7JzAbgmD
          stance: supports
          locator: Q67389051
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_RgUGiCafgVLngqMuKyfW92
        subject_person_id: p_LFnNE3BRzCDQjW5e5vuUEn
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_n2jDzx5sS6j3vpbbSVhqB9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_894A67uX1H54Fx76enPGip
          claim_id: c_RgUGiCafgVLngqMuKyfW92
          source_id: s_8Vt11deCmUk8nxFgsES8ez
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8Vt11deCmUk8nxFgsES8ez
            source_type: api_record
            title: 维基数据：王盟（Q11573180）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573180
            external_identifier: Q11573180
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:54.945Z
            metadata_json: null
        - id: cs_ZV7HUBB5rb537PUcyhP5Ed
          claim_id: c_RgUGiCafgVLngqMuKyfW92
          source_id: s_edBoCBLTqqky4H7JzAbgmD
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_edBoCBLTqqky4H7JzAbgmD
            source_type: api_record
            title: 维基数据：王罴（Q67389051）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q67389051
            external_identifier: Q67389051
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:19.447Z
            metadata_json: null
      object_person:
        id: p_n2jDzx5sS6j3vpbbSVhqB9
        status: active
        display_name: 王盟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王罴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王罴，史料所见人物。本项目依据《王罴》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王罴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_n2jDzx5sS6j3vpbbSVhqB9 | 王盟 | accepted |

## 外部来源

- [维基数据：王盟（Q11573180）](https://www.wikidata.org/wiki/Q11573180)
- [维基数据：王罴（Q67389051）](https://www.wikidata.org/wiki/Q67389051)
