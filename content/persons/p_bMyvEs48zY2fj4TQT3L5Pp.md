---
schema: wang-person/v1
id: p_bMyvEs48zY2fj4TQT3L5Pp
status: active
merged_into: null
display_name: 王鴻賓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mgoHpZVPPzp7wacD7yDpv5
        subject_person_id: p_bMyvEs48zY2fj4TQT3L5Pp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WqrP7FdQvLnvAC94c2wSY8
          claim_id: c_mgoHpZVPPzp7wacD7yDpv5
          source_id: s_eGPPVNASWR2uDbdaJdBYaT
          stance: supports
          locator: CBDB:640997
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640997）
          source: &a1
            id: s_eGPPVNASWR2uDbdaJdBYaT
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻賓（CBDB 640997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640997&o=json
            external_identifier: CBDB:640997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.270Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PPvd1a6oex2NxLbB8HgA5u
        subject_person_id: p_bMyvEs48zY2fj4TQT3L5Pp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王鴻賓，清人物。籍贯閿鄉，入仕貢生: 拔貢，曾任知縣。（中国历代人物传记资料库 CBDB 640997）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Npp9wAff3hOBaMbeVSa8w-
          claim_id: c_PPvd1a6oex2NxLbB8HgA5u
          source_id: s_eGPPVNASWR2uDbdaJdBYaT
          stance: supports
          locator: CBDB:640997
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

# 王鴻賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鴻賓 | accepted |
| bio.summary | 王鴻賓，清人物。籍贯閿鄉，入仕貢生: 拔貢，曾任知縣。（中国历代人物传记资料库 CBDB 640997） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鴻賓（CBDB 640997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640997&o=json)
