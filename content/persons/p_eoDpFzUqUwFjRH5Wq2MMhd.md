---
schema: wang-person/v1
id: p_eoDpFzUqUwFjRH5Wq2MMhd
status: active
merged_into: null
display_name: 王石
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CMFnRWExvjvSDMzizZzSuL
        subject_person_id: p_eoDpFzUqUwFjRH5Wq2MMhd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王石
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DmKGxE8rEJCBGz21BGdFPd
          claim_id: c_CMFnRWExvjvSDMzizZzSuL
          source_id: s_sLNHijYoKVzxwG1Rd6gfuS
          stance: supports
          locator: CBDB:689790
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（689790）
          source: &a1
            id: s_sLNHijYoKVzxwG1Rd6gfuS
            source_type: api_record
            title: 中国历代人物传记资料库：王石（CBDB 689790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689790&o=json
            external_identifier: CBDB:689790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.564Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mQx6D1P4j1PyJkKB3y2GBb
        subject_person_id: p_eoDpFzUqUwFjRH5Wq2MMhd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王石，清人物。身份为畫家。（中国历代人物传记资料库 CBDB 689790）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GeosQzNq1AW8zuOQ3br69W
          claim_id: c_mQx6D1P4j1PyJkKB3y2GBb
          source_id: s_sLNHijYoKVzxwG1Rd6gfuS
          stance: supports
          locator: CBDB:689790
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

# 王石

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王石 | accepted |
| bio.summary | 王石，清人物。身份为畫家。（中国历代人物传记资料库 CBDB 689790） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王石（CBDB 689790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689790&o=json)
