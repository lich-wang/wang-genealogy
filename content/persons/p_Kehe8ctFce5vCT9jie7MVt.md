---
schema: wang-person/v1
id: p_Kehe8ctFce5vCT9jie7MVt
status: active
merged_into: null
display_name: 王伏興
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rWS1r7Mp4U7JfKCjy1Bd6Z
        subject_person_id: p_Kehe8ctFce5vCT9jie7MVt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伏興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tBG6QW4185XqcQixvuTPtH
          claim_id: c_rWS1r7Mp4U7JfKCjy1Bd6Z
          source_id: s_KUhxSvQQPMs5KwMLdskQL5
          stance: supports
          locator: CBDB:138814
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（138814）
          source: &a1
            id: s_KUhxSvQQPMs5KwMLdskQL5
            source_type: api_record
            title: 中国历代人物传记资料库：王伏興（CBDB 138814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138814&o=json
            external_identifier: CBDB:138814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.186Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yRFtGzd1Z917EBjBwAvK2i
        subject_person_id: p_Kehe8ctFce5vCT9jie7MVt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 585年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N8YPNRVVKAgjLqw93k65M7
          claim_id: c_yRFtGzd1Z917EBjBwAvK2i
          source_id: s_KUhxSvQQPMs5KwMLdskQL5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Mw6WoBvVRqtSzmFFDE7dzi
        subject_person_id: p_Kehe8ctFce5vCT9jie7MVt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 644年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_koaVfHX6ieMPUyEPypQxag
          claim_id: c_Mw6WoBvVRqtSzmFFDE7dzi
          source_id: s_KUhxSvQQPMs5KwMLdskQL5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sE5Jv65w88T2WJ8zBUAdcR
        subject_person_id: p_Kehe8ctFce5vCT9jie7MVt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伏興（585年—644年），唐人物。曾任朝散大夫。（中国历代人物传记资料库 CBDB 138814）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aSRzYXOGwX0pESXiREQ24m
          claim_id: c_sE5Jv65w88T2WJ8zBUAdcR
          source_id: s_KUhxSvQQPMs5KwMLdskQL5
          stance: supports
          locator: CBDB:138814
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
  spouses:
    - claim:
        id: c_elLeXkOvRgTjR4sR0snI2i
        subject_person_id: p_Kehe8ctFce5vCT9jie7MVt
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_tR4Gvb9MoXHimxNE5aXHQ4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_95VRGymo3z5w1OK_Tb7Lna
          claim_id: c_elLeXkOvRgTjR4sR0snI2i
          source_id: s_Z_dcmB6TLKG1TBJFg05E_J
          stance: supports
          locator: CBDB 双向互证（妻子 呂氏(王伏興之妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Z_dcmB6TLKG1TBJFg05E_J
            source_type: api_record
            title: 中国历代人物传记资料库：呂氏(王伏興之妻)（CBDB 512474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512474&o=json
            external_identifier: CBDB:512474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tR4Gvb9MoXHimxNE5aXHQ4
        status: active
        display_name: 呂氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王伏興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伏興 | accepted |
| birth.date | 585年 | accepted |
| death.date | 644年 | accepted |
| bio.summary | 王伏興（585年—644年），唐人物。曾任朝散大夫。（中国历代人物传记资料库 CBDB 138814） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_tR4Gvb9MoXHimxNE5aXHQ4 | 呂氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：呂氏(王伏興之妻)（CBDB 512474）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512474&o=json)
- [中国历代人物传记资料库：王伏興（CBDB 138814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138814&o=json)
