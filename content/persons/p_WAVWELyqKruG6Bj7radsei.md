---
schema: wang-person/v1
id: p_WAVWELyqKruG6Bj7radsei
status: active
merged_into: null
display_name: 王晉賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kEGNqJu58hmuZtqstHWCaV
        subject_person_id: p_WAVWELyqKruG6Bj7radsei
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gYMLnfxDFYtsi8dg9kyuQE
          claim_id: c_kEGNqJu58hmuZtqstHWCaV
          source_id: s_nZJsTrvCMEQwekWeJsNMFs
          stance: supports
          locator: CBDB:638461
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638461）
          source: &a1
            id: s_nZJsTrvCMEQwekWeJsNMFs
            source_type: api_record
            title: 中国历代人物传记资料库：王晉賢（CBDB 638461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638461&o=json
            external_identifier: CBDB:638461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.641Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_79oFDKV3r4b1XkeAM8DQ5q
        subject_person_id: p_WAVWELyqKruG6Bj7radsei
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉賢，清人物。籍贯衛輝府，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 638461）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C0zPa4BN2LlkMcHefMq5QO
          claim_id: c_79oFDKV3r4b1XkeAM8DQ5q
          source_id: s_nZJsTrvCMEQwekWeJsNMFs
          stance: supports
          locator: CBDB:638461
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

# 王晉賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晉賢 | accepted |
| bio.summary | 王晉賢，清人物。籍贯衛輝府，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 638461） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晉賢（CBDB 638461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638461&o=json)
