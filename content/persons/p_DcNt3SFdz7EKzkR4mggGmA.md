---
schema: wang-person/v1
id: p_DcNt3SFdz7EKzkR4mggGmA
status: active
merged_into: null
display_name: 王懋學
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tX8CEK8u9btkcotzZR2fo2
        subject_person_id: p_DcNt3SFdz7EKzkR4mggGmA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LGaeBHVHfN5XxZYb1N37Ta
          claim_id: c_tX8CEK8u9btkcotzZR2fo2
          source_id: s_yAHaRYWZAZ7B93eN2f1vbH
          stance: supports
          locator: CBDB:337974
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（337974）
          source: &a1
            id: s_yAHaRYWZAZ7B93eN2f1vbH
            source_type: api_record
            title: 中国历代人物传记资料库：王懋學（CBDB 337974）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337974&o=json
            external_identifier: CBDB:337974
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.523Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KySatycJsNhtcHFet327QG
        subject_person_id: p_DcNt3SFdz7EKzkR4mggGmA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋學，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 337974）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aIVSRH4YLiHsO3vKbP3xmw
          claim_id: c_KySatycJsNhtcHFet327QG
          source_id: s_yAHaRYWZAZ7B93eN2f1vbH
          stance: supports
          locator: CBDB:337974
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

# 王懋學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋學 | accepted |
| bio.summary | 王懋學，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 337974） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懋學（CBDB 337974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337974&o=json)
