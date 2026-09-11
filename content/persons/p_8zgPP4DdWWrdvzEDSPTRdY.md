---
schema: wang-person/v1
id: p_8zgPP4DdWWrdvzEDSPTRdY
status: active
merged_into: null
display_name: 王鳴夏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ARVWEU9QJzCvFRHoCGAfEE
        subject_person_id: p_8zgPP4DdWWrdvzEDSPTRdY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳴夏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XZWZGhTd1TZP3en5Ts8kho
          claim_id: c_ARVWEU9QJzCvFRHoCGAfEE
          source_id: s_uYtitZnpX9EqenW4yZD7oD
          stance: supports
          locator: CBDB:640968
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640968）
          source: &a1
            id: s_uYtitZnpX9EqenW4yZD7oD
            source_type: api_record
            title: 中国历代人物传记资料库：王鳴夏（CBDB 640968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640968&o=json
            external_identifier: CBDB:640968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.431Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c6MD8gJJTL4YKiDGGsL17H
        subject_person_id: p_8zgPP4DdWWrdvzEDSPTRdY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳴夏，清人物。籍贯衡州府，入仕廩貢生，曾任訓導。（中国历代人物传记资料库 CBDB 640968）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4aLyBox3MnCNo_mAbUnwWA
          claim_id: c_c6MD8gJJTL4YKiDGGsL17H
          source_id: s_uYtitZnpX9EqenW4yZD7oD
          stance: supports
          locator: CBDB:640968
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

# 王鳴夏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳴夏 | accepted |
| bio.summary | 王鳴夏，清人物。籍贯衡州府，入仕廩貢生，曾任訓導。（中国历代人物传记资料库 CBDB 640968） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳴夏（CBDB 640968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640968&o=json)
