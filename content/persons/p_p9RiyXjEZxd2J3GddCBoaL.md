---
schema: wang-person/v1
id: p_p9RiyXjEZxd2J3GddCBoaL
status: active
merged_into: null
display_name: 王世顯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sBRPTQj8fBoJ1ioS2Ur2BL
        subject_person_id: p_p9RiyXjEZxd2J3GddCBoaL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世顯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L9uwpkwEUy48xmaqUJEW1m
          claim_id: c_sBRPTQj8fBoJ1ioS2Ur2BL
          source_id: s_KHrrqpai6Xbb1DMRFND8Qg
          stance: supports
          locator: CBDB:71462
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71462）
          source: &a1
            id: s_KHrrqpai6Xbb1DMRFND8Qg
            source_type: api_record
            title: 中国历代人物传记资料库：王世顯（CBDB 71462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71462&o=json
            external_identifier: CBDB:71462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.692Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RootGP8VZCPbCFNqK2nuM9
        subject_person_id: p_p9RiyXjEZxd2J3GddCBoaL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1627年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mt7Wb7agVX5BuGXMh95g4Q
          claim_id: c_RootGP8VZCPbCFNqK2nuM9
          source_id: s_KHrrqpai6Xbb1DMRFND8Qg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q37u7weuSxqUi9YbcBbHEY
        subject_person_id: p_p9RiyXjEZxd2J3GddCBoaL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nwb8ZuhFcsdaZDwdcnGCk1
          claim_id: c_Q37u7weuSxqUi9YbcBbHEY
          source_id: s_KHrrqpai6Xbb1DMRFND8Qg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王世顯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世顯 | accepted |
| birth.date | 1627年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世顯（CBDB 71462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71462&o=json)
