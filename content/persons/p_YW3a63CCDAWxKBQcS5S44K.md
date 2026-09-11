---
schema: wang-person/v1
id: p_YW3a63CCDAWxKBQcS5S44K
status: active
merged_into: null
display_name: 王學曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gEQ3AH43z9AMKwyebJoQwx
        subject_person_id: p_YW3a63CCDAWxKBQcS5S44K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UxrE2f94b8ZWUJSk3vsDN8
          claim_id: c_gEQ3AH43z9AMKwyebJoQwx
          source_id: s_5UP7DNA9Qg8mM8B9ETnkn2
          stance: supports
          locator: CBDB:315447
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（315447）
          source: &a1
            id: s_5UP7DNA9Qg8mM8B9ETnkn2
            source_type: api_record
            title: 中国历代人物传记资料库：王學曾（CBDB 315447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315447&o=json
            external_identifier: CBDB:315447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.947Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZHM4wPodnFMyDiV7RGU8T1
        subject_person_id: p_YW3a63CCDAWxKBQcS5S44K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學曾，明人物。嘉靖三十二年進士，籍贯湘潭。（中国历代人物传记资料库 CBDB 315447）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V3RBV40S3ZZD0pGJ8lDyj6
          claim_id: c_ZHM4wPodnFMyDiV7RGU8T1
          source_id: s_5UP7DNA9Qg8mM8B9ETnkn2
          stance: supports
          locator: CBDB:315447
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

# 王學曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學曾 | accepted |
| bio.summary | 王學曾，明人物。嘉靖三十二年進士，籍贯湘潭。（中国历代人物传记资料库 CBDB 315447） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學曾（CBDB 315447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315447&o=json)
