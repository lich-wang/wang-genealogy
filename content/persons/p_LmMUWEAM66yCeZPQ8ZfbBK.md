---
schema: wang-person/v1
id: p_LmMUWEAM66yCeZPQ8ZfbBK
status: active
merged_into: null
display_name: 王杲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GXrDyrhDwFfFpb81RgmGBG
        subject_person_id: p_LmMUWEAM66yCeZPQ8ZfbBK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dtRMvgjH1ZsXCk2F7DeJjt
          claim_id: c_GXrDyrhDwFfFpb81RgmGBG
          source_id: s_Cr8t89VKqxpWJ6H8dyJPdL
          stance: supports
          locator: CBDB:279551
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279551）
          source: &a1
            id: s_Cr8t89VKqxpWJ6H8dyJPdL
            source_type: api_record
            title: 中国历代人物传记资料库：王杲（CBDB 279551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279551&o=json
            external_identifier: CBDB:279551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uHNhK81AJ8hTmoNEze6r4m
        subject_person_id: p_LmMUWEAM66yCeZPQ8ZfbBK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杲，明人物。正德十二年進士，籍贯金壇，入仕監生。（中国历代人物传记资料库 CBDB 279551）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Lp977rfKrHl7K8lN2Znzzk
          claim_id: c_uHNhK81AJ8hTmoNEze6r4m
          source_id: s_Cr8t89VKqxpWJ6H8dyJPdL
          stance: supports
          locator: CBDB:279551
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

# 王杲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王杲 | accepted |
| bio.summary | 王杲，明人物。正德十二年進士，籍贯金壇，入仕監生。（中国历代人物传记资料库 CBDB 279551） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王杲（CBDB 279551）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279551&o=json)
