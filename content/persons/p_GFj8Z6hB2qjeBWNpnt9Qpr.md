---
schema: wang-person/v1
id: p_GFj8Z6hB2qjeBWNpnt9Qpr
status: active
merged_into: null
display_name: 王靈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x885iLqYmEiv3z95DG7Unc
        subject_person_id: p_GFj8Z6hB2qjeBWNpnt9Qpr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TYinCfuYrvbAoKHcsfh1Wu
          claim_id: c_x885iLqYmEiv3z95DG7Unc
          source_id: s_nLaPFdSxAgmzrjSEVyAXAL
          stance: supports
          locator: CBDB:640840
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640840）
          source: &a1
            id: s_nLaPFdSxAgmzrjSEVyAXAL
            source_type: api_record
            title: 中国历代人物传记资料库：王靈（CBDB 640840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640840&o=json
            external_identifier: CBDB:640840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.217Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wWsM4HCGHdEKfw5MinPPXZ
        subject_person_id: p_GFj8Z6hB2qjeBWNpnt9Qpr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靈，清人物。籍贯廣西直隸州，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 640840）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1_MRJqeKHcsQDT9-ueLOvM
          claim_id: c_wWsM4HCGHdEKfw5MinPPXZ
          source_id: s_nLaPFdSxAgmzrjSEVyAXAL
          stance: supports
          locator: CBDB:640840
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

# 王靈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王靈 | accepted |
| bio.summary | 王靈，清人物。籍贯廣西直隸州，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 640840） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王靈（CBDB 640840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640840&o=json)
