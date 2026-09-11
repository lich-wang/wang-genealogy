---
schema: wang-person/v1
id: p_GPMeQNmeRjX6SVSEhQC6G4
status: active
merged_into: null
display_name: 王坦修
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ar8yaduczmyzfeLaWfdJkj
        subject_person_id: p_GPMeQNmeRjX6SVSEhQC6G4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坦修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4svkKDu4PbU69daK4zJu4b
          claim_id: c_Ar8yaduczmyzfeLaWfdJkj
          source_id: s_QqMJc1PNVPBfDeJogWwUMB
          stance: supports
          locator: CBDB:343237
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343237）
          source: &a1
            id: s_QqMJc1PNVPBfDeJogWwUMB
            source_type: api_record
            title: 中国历代人物传记资料库：王坦修（CBDB 343237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343237&o=json
            external_identifier: CBDB:343237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.250Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j1z5pPA6j1nb65YRWHAq71
        subject_person_id: p_GPMeQNmeRjX6SVSEhQC6G4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坦修，清人物。明清進士進士，籍贯寧鄉，入仕進士，曾任檢討、侍講學士、同考官。（中国历代人物传记资料库 CBDB 343237）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_heHQsMvKPZIQrQfBoAL0NU
          claim_id: c_j1z5pPA6j1nb65YRWHAq71
          source_id: s_QqMJc1PNVPBfDeJogWwUMB
          stance: supports
          locator: CBDB:343237
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

# 王坦修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王坦修 | accepted |
| bio.summary | 王坦修，清人物。明清進士進士，籍贯寧鄉，入仕進士，曾任檢討、侍講學士、同考官。（中国历代人物传记资料库 CBDB 343237） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王坦修（CBDB 343237）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343237&o=json)
