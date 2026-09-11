---
schema: wang-person/v1
id: p_nMU57p3Jo1QVtMRCRDRmZe
status: active
merged_into: null
display_name: 王述祖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UgBi64jdFZN5EZ8FVnWTr9
        subject_person_id: p_nMU57p3Jo1QVtMRCRDRmZe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZZH3uFeH5U8hUMC1avtp29
          claim_id: c_UgBi64jdFZN5EZ8FVnWTr9
          source_id: s_7LNBccXWWiFo8LyE6wbXGb
          stance: supports
          locator: CBDB:640398
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640398）
          source: &a1
            id: s_7LNBccXWWiFo8LyE6wbXGb
            source_type: api_record
            title: 中国历代人物传记资料库：王述祖（CBDB 640398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640398&o=json
            external_identifier: CBDB:640398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.092Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s3ZeAeUTZzkKowwLgAneF5
        subject_person_id: p_nMU57p3Jo1QVtMRCRDRmZe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述祖，清人物。籍贯休寧，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 640398）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k_LOU4XtJNC5QWY7LYWKWW
          claim_id: c_s3ZeAeUTZzkKowwLgAneF5
          source_id: s_7LNBccXWWiFo8LyE6wbXGb
          stance: supports
          locator: CBDB:640398
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

# 王述祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王述祖 | accepted |
| bio.summary | 王述祖，清人物。籍贯休寧，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 640398） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王述祖（CBDB 640398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640398&o=json)
