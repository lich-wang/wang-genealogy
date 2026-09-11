---
schema: wang-person/v1
id: p_HJmgVg1a7La4sLfh4PqMCW
status: active
merged_into: null
display_name: 王九如
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NNaj3YAWXvLbGDJ66QHTqb
        subject_person_id: p_HJmgVg1a7La4sLfh4PqMCW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九如
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LTn4rkWfM3WXAEShWDY6q4
          claim_id: c_NNaj3YAWXvLbGDJ66QHTqb
          source_id: s_oKM6cLPvtGJ2Uy6aMX58Vu
          stance: supports
          locator: CBDB:342894
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342894）
          source: &a1
            id: s_oKM6cLPvtGJ2Uy6aMX58Vu
            source_type: api_record
            title: 中国历代人物传记资料库：王九如（CBDB 342894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342894&o=json
            external_identifier: CBDB:342894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.114Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xsq6yP7DkiuFGQEgmo48Q8
        subject_person_id: p_HJmgVg1a7La4sLfh4PqMCW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九如，清人物。明清進士進士，籍贯錦縣，入仕進士。（中国历代人物传记资料库 CBDB 342894）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GnC1ZzRSfL3PdsyzTMth27
          claim_id: c_xsq6yP7DkiuFGQEgmo48Q8
          source_id: s_oKM6cLPvtGJ2Uy6aMX58Vu
          stance: supports
          locator: CBDB:342894
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

# 王九如

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九如 | accepted |
| bio.summary | 王九如，清人物。明清進士進士，籍贯錦縣，入仕進士。（中国历代人物传记资料库 CBDB 342894） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王九如（CBDB 342894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342894&o=json)
