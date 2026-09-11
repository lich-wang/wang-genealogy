---
schema: wang-person/v1
id: p_M2Ya69H4TCVBvLuK9Mcbb5
status: active
merged_into: null
display_name: 王克恭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uM4Qqk2ELodMJ85CY6LAxt
        subject_person_id: p_M2Ya69H4TCVBvLuK9Mcbb5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zMHWpKLpqvfivfKfxu318f
          claim_id: c_uM4Qqk2ELodMJ85CY6LAxt
          source_id: s_6KXwmob1ky6DoJHFtCcK6g
          stance: supports
          locator: CBDB:696932
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696932）
          source: &a1
            id: s_6KXwmob1ky6DoJHFtCcK6g
            source_type: api_record
            title: 中国历代人物传记资料库：王克恭（CBDB 696932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696932&o=json
            external_identifier: CBDB:696932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.706Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3CvZYK7Zn2pr39BMWpJszc
        subject_person_id: p_M2Ya69H4TCVBvLuK9Mcbb5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克恭，明人物。籍贯婺源州，曾任駙馬都尉。（中国历代人物传记资料库 CBDB 696932）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_l_SWisKn2uY-SLfBBZnkaW
          claim_id: c_3CvZYK7Zn2pr39BMWpJszc
          source_id: s_6KXwmob1ky6DoJHFtCcK6g
          stance: supports
          locator: CBDB:696932
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

# 王克恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克恭 | accepted |
| bio.summary | 王克恭，明人物。籍贯婺源州，曾任駙馬都尉。（中国历代人物传记资料库 CBDB 696932） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克恭（CBDB 696932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696932&o=json)
