---
schema: wang-person/v1
id: p_PDwHZRQwXFsoxfot8vQ96T
status: active
merged_into: null
display_name: 王鑅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PuDJMJ9V14JfUQrttTy4uG
        subject_person_id: p_PDwHZRQwXFsoxfot8vQ96T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_48FTrwEtKj2ZbJGToFQNpH
          claim_id: c_PuDJMJ9V14JfUQrttTy4uG
          source_id: s_NpFCQ4xnYLgf2E1FHfkNqD
          stance: supports
          locator: CBDB:640716
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640716）
          source: &a1
            id: s_NpFCQ4xnYLgf2E1FHfkNqD
            source_type: api_record
            title: 中国历代人物传记资料库：王鑅（CBDB 640716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640716&o=json
            external_identifier: CBDB:640716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.182Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nAhDQ2L7SHtL7t1hoLKZ52
        subject_person_id: p_PDwHZRQwXFsoxfot8vQ96T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑅，清人物。籍贯太倉直隸州直轄地方，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640716）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tzgyIW5HWYway-7qPiB4S5
          claim_id: c_nAhDQ2L7SHtL7t1hoLKZ52
          source_id: s_NpFCQ4xnYLgf2E1FHfkNqD
          stance: supports
          locator: CBDB:640716
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

# 王鑅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑅 | accepted |
| bio.summary | 王鑅，清人物。籍贯太倉直隸州直轄地方，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640716） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑅（CBDB 640716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640716&o=json)
