---
schema: wang-person/v1
id: p_wfydEy1KtXck8adDUtcT1u
status: active
merged_into: null
display_name: 王景三
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UioSE7TobboMoSdpY7qUiQ
        subject_person_id: p_wfydEy1KtXck8adDUtcT1u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景三
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZhrsSf6hySFzKaBwLQUxym
          claim_id: c_UioSE7TobboMoSdpY7qUiQ
          source_id: s_QLP2KQpDoZQmk5kPvBEvJh
          stance: supports
          locator: CBDB:638468
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638468）
          source: &a1
            id: s_QLP2KQpDoZQmk5kPvBEvJh
            source_type: api_record
            title: 中国历代人物传记资料库：王景三（CBDB 638468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638468&o=json
            external_identifier: CBDB:638468
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.644Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bxTYhGSBvkBpWsj413Nb3y
        subject_person_id: p_wfydEy1KtXck8adDUtcT1u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景三，清人物。籍贯順天府，入仕鄉貢舉人，曾任學正、復設訓導。（中国历代人物传记资料库 CBDB 638468）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TemmHpIY-T6zNsrwvmNLru
          claim_id: c_bxTYhGSBvkBpWsj413Nb3y
          source_id: s_QLP2KQpDoZQmk5kPvBEvJh
          stance: supports
          locator: CBDB:638468
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

# 王景三

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景三 | accepted |
| bio.summary | 王景三，清人物。籍贯順天府，入仕鄉貢舉人，曾任學正、復設訓導。（中国历代人物传记资料库 CBDB 638468） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景三（CBDB 638468）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638468&o=json)
