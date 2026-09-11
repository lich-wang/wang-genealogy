---
schema: wang-person/v1
id: p_EQpp54boVB38kZ4rexAFZH
status: active
merged_into: null
display_name: 王升之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vGWXb4koD68C1uLPN3DgwR
        subject_person_id: p_EQpp54boVB38kZ4rexAFZH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王升之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TkDJ1WNqcNRFnkr1GcCy8A
          claim_id: c_vGWXb4koD68C1uLPN3DgwR
          source_id: s_jdfMEyvXLbMwdJdcY24wnz
          stance: supports
          locator: CBDB:38283
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38283）
          source: &a1
            id: s_jdfMEyvXLbMwdJdcY24wnz
            source_type: api_record
            title: 中国历代人物传记资料库：王升之（CBDB 38283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38283&o=json
            external_identifier: CBDB:38283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.414Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RkECC5wgDy43up8KJq4pV6
        subject_person_id: p_EQpp54boVB38kZ4rexAFZH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1072年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1eGqdC9HSJswchZb2qBTgo
          claim_id: c_RkECC5wgDy43up8KJq4pV6
          source_id: s_jdfMEyvXLbMwdJdcY24wnz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_3FHS34FvJ3CdCcGSzE1WP2
        subject_person_id: p_EQpp54boVB38kZ4rexAFZH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1112年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FEHVHdh3whhbBes84CNocS
          claim_id: c_3FHS34FvJ3CdCcGSzE1WP2
          source_id: s_jdfMEyvXLbMwdJdcY24wnz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uS7B1G8DDxC1P2ZjvDkvQL
        subject_person_id: p_EQpp54boVB38kZ4rexAFZH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王升之（1072年—1112年），宋人物。籍贯鉅野。（中国历代人物传记资料库 CBDB 38283）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P01NxTBe9kZMPIa6HRWA2V
          claim_id: c_uS7B1G8DDxC1P2ZjvDkvQL
          source_id: s_jdfMEyvXLbMwdJdcY24wnz
          stance: supports
          locator: CBDB:38283
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王升之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王升之 | accepted |
| birth.date | 1072年 | accepted |
| death.date | 1112年 | accepted |
| bio.summary | 王升之（1072年—1112年），宋人物。籍贯鉅野。（中国历代人物传记资料库 CBDB 38283） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王升之（CBDB 38283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38283&o=json)
