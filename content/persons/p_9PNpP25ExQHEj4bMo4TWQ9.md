---
schema: wang-person/v1
id: p_9PNpP25ExQHEj4bMo4TWQ9
status: active
merged_into: null
display_name: 王錫穀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2b3nhj3fSo1939dSY49Gq4
        subject_person_id: p_9PNpP25ExQHEj4bMo4TWQ9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫穀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T6hRjTn1gSNxmni58iYqKQ
          claim_id: c_2b3nhj3fSo1939dSY49Gq4
          source_id: s_dPiz2wU6MAFDe9NwQDF5Nv
          stance: supports
          locator: CBDB:640612
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640612）
          source: &a1
            id: s_dPiz2wU6MAFDe9NwQDF5Nv
            source_type: api_record
            title: 中国历代人物传记资料库：王錫穀（CBDB 640612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640612&o=json
            external_identifier: CBDB:640612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.154Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3HHGcJH2D3vz2RPmnP84qQ
        subject_person_id: p_9PNpP25ExQHEj4bMo4TWQ9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫穀，清人物。籍贯孟縣，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 640612）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LWuw149YKONYG6SN9LQSGG
          claim_id: c_3HHGcJH2D3vz2RPmnP84qQ
          source_id: s_dPiz2wU6MAFDe9NwQDF5Nv
          stance: supports
          locator: CBDB:640612
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

# 王錫穀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫穀 | accepted |
| bio.summary | 王錫穀，清人物。籍贯孟縣，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 640612） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫穀（CBDB 640612）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640612&o=json)
