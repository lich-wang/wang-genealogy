---
schema: wang-person/v1
id: p_1T2feE7ssRauVoYYqT4qoD
status: active
merged_into: null
display_name: 王國材
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8UiCFxifkiPGCJr4MYSYbA
        subject_person_id: p_1T2feE7ssRauVoYYqT4qoD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國材
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ki22rkYmiBuZ9KXq5xTGGS
          claim_id: c_8UiCFxifkiPGCJr4MYSYbA
          source_id: s_wvJvfGopZZf4UrTYRZ3dUL
          stance: supports
          locator: CBDB:343439
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343439）
          source: &a1
            id: s_wvJvfGopZZf4UrTYRZ3dUL
            source_type: api_record
            title: 中国历代人物传记资料库：王國材（CBDB 343439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343439&o=json
            external_identifier: CBDB:343439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xz6Qw14rG6K8eWCekjMDTt
        subject_person_id: p_1T2feE7ssRauVoYYqT4qoD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王國材，明人物。明清進士進士，籍贯遂安，入仕科舉學校: 恩賜出身、特賜出身等。（中国历代人物传记资料库 CBDB 343439）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-SoYcAFkwzWCn4saTvfPdd
          claim_id: c_xz6Qw14rG6K8eWCekjMDTt
          source_id: s_wvJvfGopZZf4UrTYRZ3dUL
          stance: supports
          locator: CBDB:343439
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

# 王國材

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國材 | accepted |
| bio.summary | 王國材，明人物。明清進士進士，籍贯遂安，入仕科舉學校: 恩賜出身、特賜出身等。（中国历代人物传记资料库 CBDB 343439） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國材（CBDB 343439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343439&o=json)
