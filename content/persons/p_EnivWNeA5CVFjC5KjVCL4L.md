---
schema: wang-person/v1
id: p_EnivWNeA5CVFjC5KjVCL4L
status: active
merged_into: null
display_name: 王騰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ryLKM3GAcYuYiHBHMKcaNB
        subject_person_id: p_EnivWNeA5CVFjC5KjVCL4L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王騰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L2aRLX374Hba8o2RzLH2T2
          claim_id: c_ryLKM3GAcYuYiHBHMKcaNB
          source_id: s_3oYAgUCuoJNk6GvXWwGZWZ
          stance: supports
          locator: CBDB:319585
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（319585）
          source: &a1
            id: s_3oYAgUCuoJNk6GvXWwGZWZ
            source_type: api_record
            title: 中国历代人物传记资料库：王騰（CBDB 319585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319585&o=json
            external_identifier: CBDB:319585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.044Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ABVKjJ6Ld4n6Be5N461sME
        subject_person_id: p_EnivWNeA5CVFjC5KjVCL4L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王騰，明人物。天順四年進士，籍贯聞喜。（中国历代人物传记资料库 CBDB 319585）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cNdQkSdivTFnHzxbx5apT-
          claim_id: c_ABVKjJ6Ld4n6Be5N461sME
          source_id: s_3oYAgUCuoJNk6GvXWwGZWZ
          stance: supports
          locator: CBDB:319585
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

# 王騰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王騰 | accepted |
| bio.summary | 王騰，明人物。天順四年進士，籍贯聞喜。（中国历代人物传记资料库 CBDB 319585） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王騰（CBDB 319585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319585&o=json)
