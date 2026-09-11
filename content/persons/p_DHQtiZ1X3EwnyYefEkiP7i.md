---
schema: wang-person/v1
id: p_DHQtiZ1X3EwnyYefEkiP7i
status: active
merged_into: null
display_name: 王應斗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4QwNAeZXNSkyAMfzd8VVF5
        subject_person_id: p_DHQtiZ1X3EwnyYefEkiP7i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應斗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rdKNdDmTsRHDx3UGni3weN
          claim_id: c_4QwNAeZXNSkyAMfzd8VVF5
          source_id: s_msqXaZ4nJXEWoWxxffxJvQ
          stance: supports
          locator: CBDB:562418
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（562418）
          source: &a1
            id: s_msqXaZ4nJXEWoWxxffxJvQ
            source_type: api_record
            title: 中国历代人物传记资料库：王應斗（CBDB 562418）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562418&o=json
            external_identifier: CBDB:562418
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.782Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UpmWC8D7vt4zu8PkgLNGDF
        subject_person_id: p_DHQtiZ1X3EwnyYefEkiP7i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應斗，清人物。籍贯山陰。（中国历代人物传记资料库 CBDB 562418）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HbnteI2psLXohxUg5sc9FV
          claim_id: c_UpmWC8D7vt4zu8PkgLNGDF
          source_id: s_msqXaZ4nJXEWoWxxffxJvQ
          stance: supports
          locator: CBDB:562418
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

# 王應斗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應斗 | accepted |
| bio.summary | 王應斗，清人物。籍贯山陰。（中国历代人物传记资料库 CBDB 562418） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應斗（CBDB 562418）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562418&o=json)
