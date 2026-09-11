---
schema: wang-person/v1
id: p_KmmbNhPz3CsYzjdAmqRWLF
status: active
merged_into: null
display_name: 王丙發
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UYqZRYTMNFQEpBiLsNemGE
        subject_person_id: p_KmmbNhPz3CsYzjdAmqRWLF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丙發
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_942414iDrQx1t1UpdNGHCD
          claim_id: c_UYqZRYTMNFQEpBiLsNemGE
          source_id: s_AWsn85H6tDxFw8NS5HKTSE
          stance: supports
          locator: CBDB:539606
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（539606）
          source: &a1
            id: s_AWsn85H6tDxFw8NS5HKTSE
            source_type: api_record
            title: 中国历代人物传记资料库：王丙發（CBDB 539606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=539606&o=json
            external_identifier: CBDB:539606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.436Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RWk48v8f1ZjmrJs7pWNMbA
        subject_person_id: p_KmmbNhPz3CsYzjdAmqRWLF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丙發，宋人物。入仕進士。（中国历代人物传记资料库 CBDB 539606）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6tT_8rNr-VRPmllJSFazkY
          claim_id: c_RWk48v8f1ZjmrJs7pWNMbA
          source_id: s_AWsn85H6tDxFw8NS5HKTSE
          stance: supports
          locator: CBDB:539606
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

# 王丙發

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王丙發 | accepted |
| bio.summary | 王丙發，宋人物。入仕進士。（中国历代人物传记资料库 CBDB 539606） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王丙發（CBDB 539606）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=539606&o=json)
