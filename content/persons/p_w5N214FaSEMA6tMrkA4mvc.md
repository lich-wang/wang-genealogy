---
schema: wang-person/v1
id: p_w5N214FaSEMA6tMrkA4mvc
status: active
merged_into: null
display_name: 王廷議
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PKg9wtz1d9RLNAhL6rTuBn
        subject_person_id: p_w5N214FaSEMA6tMrkA4mvc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷議
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rFMPrJVaLPG1joSmnUvWEE
          claim_id: c_PKg9wtz1d9RLNAhL6rTuBn
          source_id: s_TQqXJN5PhjFhC4bG4EVKMF
          stance: supports
          locator: CBDB:341905
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341905）
          source: &a1
            id: s_TQqXJN5PhjFhC4bG4EVKMF
            source_type: api_record
            title: 中国历代人物传记资料库：王廷議（CBDB 341905）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341905&o=json
            external_identifier: CBDB:341905
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.764Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Kx2Pd3vf7S6LJvT1iBuaU6
        subject_person_id: p_w5N214FaSEMA6tMrkA4mvc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷議，清人物。明清進士進士，籍贯翼城，入仕進士。（中国历代人物传记资料库 CBDB 341905）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3Qh1Gvex5N3T1c5yThv7u9
          claim_id: c_Kx2Pd3vf7S6LJvT1iBuaU6
          source_id: s_TQqXJN5PhjFhC4bG4EVKMF
          stance: supports
          locator: CBDB:341905
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

# 王廷議

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷議 | accepted |
| bio.summary | 王廷議，清人物。明清進士進士，籍贯翼城，入仕進士。（中国历代人物传记资料库 CBDB 341905） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷議（CBDB 341905）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341905&o=json)
