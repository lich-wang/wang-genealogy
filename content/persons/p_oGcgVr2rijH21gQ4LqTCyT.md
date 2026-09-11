---
schema: wang-person/v1
id: p_oGcgVr2rijH21gQ4LqTCyT
status: active
merged_into: null
display_name: 王爵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6QJKpkYxpN7jnPgeML6bRK
        subject_person_id: p_oGcgVr2rijH21gQ4LqTCyT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_61gqe4vd2gKkLobGfgCtLy
          claim_id: c_6QJKpkYxpN7jnPgeML6bRK
          source_id: s_JTMnpRn2rv2MwCqPod3ADc
          stance: supports
          locator: CBDB:342118
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342118）
          source: &a1
            id: s_JTMnpRn2rv2MwCqPod3ADc
            source_type: api_record
            title: 中国历代人物传记资料库：王爵（CBDB 342118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342118&o=json
            external_identifier: CBDB:342118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.845Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_burJQsydCRbgcR8VYUzoMT
        subject_person_id: p_oGcgVr2rijH21gQ4LqTCyT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爵，明人物。明清進士進士，籍贯安福，入仕進士。（中国历代人物传记资料库 CBDB 342118）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GnecxR4lZd3ER-R7HQtMp5
          claim_id: c_burJQsydCRbgcR8VYUzoMT
          source_id: s_JTMnpRn2rv2MwCqPod3ADc
          stance: supports
          locator: CBDB:342118
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

# 王爵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爵 | accepted |
| bio.summary | 王爵，明人物。明清進士進士，籍贯安福，入仕進士。（中国历代人物传记资料库 CBDB 342118） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王爵（CBDB 342118）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342118&o=json)
