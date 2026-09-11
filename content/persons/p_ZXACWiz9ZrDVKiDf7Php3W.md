---
schema: wang-person/v1
id: p_ZXACWiz9ZrDVKiDf7Php3W
status: active
merged_into: null
display_name: 王強
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jKrNLCkxb7Ek1VxrP8iLvb
        subject_person_id: p_ZXACWiz9ZrDVKiDf7Php3W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王強
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xV2hoxQcK69XNn7FBrD4ZJ
          claim_id: c_jKrNLCkxb7Ek1VxrP8iLvb
          source_id: s_sdxVLXETn64MnvwTCgmbX8
          stance: supports
          locator: CBDB:341976
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341976）
          source: &a1
            id: s_sdxVLXETn64MnvwTCgmbX8
            source_type: api_record
            title: 中国历代人物传记资料库：王強（CBDB 341976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341976&o=json
            external_identifier: CBDB:341976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.794Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G1t2X1Mug1KEpcsYfJ9qM3
        subject_person_id: p_ZXACWiz9ZrDVKiDf7Php3W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王強，明人物。明清進士進士，籍贯束鹿，入仕進士。（中国历代人物传记资料库 CBDB 341976）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4Pp8K_tlefnQNC1C6kP8w7
          claim_id: c_G1t2X1Mug1KEpcsYfJ9qM3
          source_id: s_sdxVLXETn64MnvwTCgmbX8
          stance: supports
          locator: CBDB:341976
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

# 王強

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王強 | accepted |
| bio.summary | 王強，明人物。明清進士進士，籍贯束鹿，入仕進士。（中国历代人物传记资料库 CBDB 341976） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王強（CBDB 341976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341976&o=json)
