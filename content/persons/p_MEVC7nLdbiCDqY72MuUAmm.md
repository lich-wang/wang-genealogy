---
schema: wang-person/v1
id: p_MEVC7nLdbiCDqY72MuUAmm
status: active
merged_into: null
display_name: 王宗湯
cbdb_id: 317698
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MSXhkgUEAU1qcBExzPWv7p
        subject_person_id: p_MEVC7nLdbiCDqY72MuUAmm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗湯，明人物。嘉靖三十二年進士，籍贯聞喜。（中国历代人物传记资料库 CBDB 317698）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Tjrg1wOfslxqdflGrfOKFH
          claim_id: c_MSXhkgUEAU1qcBExzPWv7p
          source_id: s_7FvBiuVGMJStjRkBKN5emv
          stance: supports
          locator: CBDB:317698
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7FvBiuVGMJStjRkBKN5emv
            source_type: api_record
            title: 中国历代人物传记资料库：王宗湯（CBDB 317698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317698&o=json
            external_identifier: CBDB:317698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_a8qNo2j4PZhPWZcFJb3hKB
        subject_person_id: p_MEVC7nLdbiCDqY72MuUAmm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗湯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NsWQfK5LwKaqJ4T7Kh4nDf
          claim_id: c_a8qNo2j4PZhPWZcFJb3hKB
          source_id: s_7FvBiuVGMJStjRkBKN5emv
          stance: supports
          locator: CBDB:317698
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
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

# 王宗湯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗湯，明人物。嘉靖三十二年進士，籍贯聞喜。（中国历代人物传记资料库 CBDB 317698） | accepted |
| name.primary | 王宗湯 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗湯（CBDB 317698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317698&o=json)
