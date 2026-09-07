---
schema: wang-person/v1
id: p_z2z3AVY3343rFBrJqxmE23
status: active
merged_into: null
display_name: 王权
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PZU4tPRxLRSG7JEeimx5ih
        subject_person_id: p_z2z3AVY3343rFBrJqxmE23
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王权（卒于922年），唐人物。CBDB 记录其籍贯记录为太原，曾任兵部尚書。中国历代人物传记资料库（CBDB）以人物编号 175917 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_i4wUf4RKvf2NMxPgvUTv1v
          claim_id: c_PZU4tPRxLRSG7JEeimx5ih
          source_id: s_vY1rMX7iTRPHzvHJJvahYW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_vY1rMX7iTRPHzvHJJvahYW
            source_type: api_record
            title: 维基数据：王权（Q45679366）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45679366
            external_identifier: Q45679366
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:02.160Z
            metadata_json: null
        - id: cs_n37TIwdTIjhp-to8GHFqA4
          claim_id: c_PZU4tPRxLRSG7JEeimx5ih
          source_id: s_F79jjCyRHjem7pLhdBuwN4
          stance: supports
          locator: CBDB:175917
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_F79jjCyRHjem7pLhdBuwN4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王權（175917）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175917&o=json
            external_identifier: CBDB:175917
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:02.363Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5zJNh5CGjL1rE8DuacFNEZ
        subject_person_id: p_z2z3AVY3343rFBrJqxmE23
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 922年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0922-01-01
            latest: 0922-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bz4h7Lk3C5NHCZFdt5pp2W
          claim_id: c_5zJNh5CGjL1rE8DuacFNEZ
          source_id: s_vY1rMX7iTRPHzvHJJvahYW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_vY1rMX7iTRPHzvHJJvahYW
            source_type: api_record
            title: 维基数据：王权（Q45679366）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45679366
            external_identifier: Q45679366
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:02.160Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_E98kBgR4iTTKwjJUhYb2Sj
        subject_person_id: p_z2z3AVY3343rFBrJqxmE23
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王权
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WwRMhwgn7Zc3UKgMzFjW83
          claim_id: c_E98kBgR4iTTKwjJUhYb2Sj
          source_id: s_vY1rMX7iTRPHzvHJJvahYW
          stance: supports
          locator: Q45679366
          quotation: null
          interpretation_note: null
          source:
            id: s_vY1rMX7iTRPHzvHJJvahYW
            source_type: api_record
            title: 维基数据：王权（Q45679366）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45679366
            external_identifier: Q45679366
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:02.160Z
            metadata_json: null
        - id: cs_fg1YNPWYg3jiEN2CHGCwFK
          claim_id: c_E98kBgR4iTTKwjJUhYb2Sj
          source_id: s_F79jjCyRHjem7pLhdBuwN4
          stance: supports
          locator: Q45679366
          quotation: null
          interpretation_note: null
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

# 王权

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王权（卒于922年），唐人物。CBDB 记录其籍贯记录为太原，曾任兵部尚書。中国历代人物传记资料库（CBDB）以人物编号 175917 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 922年 | accepted |
| name.primary | 王权 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王权（Q45679366）](https://www.wikidata.org/wiki/Q45679366)
- [CBDB 中国历代人物传记资料库：王權（175917）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175917&o=json)
