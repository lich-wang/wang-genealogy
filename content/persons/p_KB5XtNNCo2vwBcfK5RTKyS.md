---
schema: wang-person/v1
id: p_KB5XtNNCo2vwBcfK5RTKyS
status: active
merged_into: null
display_name: 王玉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oRuFrkJXjs9zgQY4h3rJLi
        subject_person_id: p_KB5XtNNCo2vwBcfK5RTKyS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wbkvkcNstfMg3MnPRgioJD
          claim_id: c_oRuFrkJXjs9zgQY4h3rJLi
          source_id: s_fRVUFZAqQnFJ8aPyN2V4K8
          stance: supports
          locator: CBDB:483869
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（483869）
          source: &a1
            id: s_fRVUFZAqQnFJ8aPyN2V4K8
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 483869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483869&o=json
            external_identifier: CBDB:483869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.818Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2TcjWNLPwt9Ejg1bMCB68d
        subject_person_id: p_KB5XtNNCo2vwBcfK5RTKyS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉，明人物。曾任僉事。（中国历代人物传记资料库 CBDB 483869）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_N0gFNrb-CMrb0y_aGS73U_
          claim_id: c_2TcjWNLPwt9Ejg1bMCB68d
          source_id: s_fRVUFZAqQnFJ8aPyN2V4K8
          stance: supports
          locator: CBDB:483869
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

# 王玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉 | accepted |
| bio.summary | 王玉，明人物。曾任僉事。（中国历代人物传记资料库 CBDB 483869） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玉（CBDB 483869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483869&o=json)
