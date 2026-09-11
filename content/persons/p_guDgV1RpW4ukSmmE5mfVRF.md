---
schema: wang-person/v1
id: p_guDgV1RpW4ukSmmE5mfVRF
status: active
merged_into: null
display_name: 王應麟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Tq1hWEYKTKjrWRQ5S5Ukrc
        subject_person_id: p_guDgV1RpW4ukSmmE5mfVRF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NLHYpGNqBfeqfaHJfJ22Zx
          claim_id: c_Tq1hWEYKTKjrWRQ5S5Ukrc
          source_id: s_2wVuEsMwGGNf8kuMEFCFSH
          stance: supports
          locator: CBDB:460853
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（460853）
          source: &a1
            id: s_2wVuEsMwGGNf8kuMEFCFSH
            source_type: api_record
            title: 中国历代人物传记资料库：王應麟（CBDB 460853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460853&o=json
            external_identifier: CBDB:460853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gCq4MSA7TMHN8oKXHQ9796
        subject_person_id: p_guDgV1RpW4ukSmmE5mfVRF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應麟，清人物。曾任把總。（中国历代人物传记资料库 CBDB 460853）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RlKpHaIo9Gv1YIRmrIp_QB
          claim_id: c_gCq4MSA7TMHN8oKXHQ9796
          source_id: s_2wVuEsMwGGNf8kuMEFCFSH
          stance: supports
          locator: CBDB:460853
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

# 王應麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應麟 | accepted |
| bio.summary | 王應麟，清人物。曾任把總。（中国历代人物传记资料库 CBDB 460853） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應麟（CBDB 460853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460853&o=json)
