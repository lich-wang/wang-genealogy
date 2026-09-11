---
schema: wang-person/v1
id: p_WLVDS3r97Msn7aJgvAwHBM
status: active
merged_into: null
display_name: 王史
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g6FcqPNxmhQnnX5M9TQTWX
        subject_person_id: p_WLVDS3r97Msn7aJgvAwHBM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王史
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pqvo8LCZV2RgLJxeqEdEC1
          claim_id: c_g6FcqPNxmhQnnX5M9TQTWX
          source_id: s_yJyfegm4Dko77cc2W5oWNx
          stance: supports
          locator: CBDB:343336
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343336）
          source: &a1
            id: s_yJyfegm4Dko77cc2W5oWNx
            source_type: api_record
            title: 中国历代人物传记资料库：王史（CBDB 343336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343336&o=json
            external_identifier: CBDB:343336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.306Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9GBH5GSF8tHNKv4QvbxWrW
        subject_person_id: p_WLVDS3r97Msn7aJgvAwHBM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王史，清人物。明清進士進士，籍贯青浦，入仕進士。（中国历代人物传记资料库 CBDB 343336）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ui-PKc1nTDjX55c_PdlYE_
          claim_id: c_9GBH5GSF8tHNKv4QvbxWrW
          source_id: s_yJyfegm4Dko77cc2W5oWNx
          stance: supports
          locator: CBDB:343336
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

# 王史

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王史 | accepted |
| bio.summary | 王史，清人物。明清進士進士，籍贯青浦，入仕進士。（中国历代人物传记资料库 CBDB 343336） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王史（CBDB 343336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343336&o=json)
