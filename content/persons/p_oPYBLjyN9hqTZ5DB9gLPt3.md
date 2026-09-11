---
schema: wang-person/v1
id: p_oPYBLjyN9hqTZ5DB9gLPt3
status: active
merged_into: null
display_name: 王晉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A96yQ2QsvGHiqR9gshGbSG
        subject_person_id: p_oPYBLjyN9hqTZ5DB9gLPt3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AWYtaEAQ8ityM1xGDkGfRJ
          claim_id: c_A96yQ2QsvGHiqR9gshGbSG
          source_id: s_LNtcupDah1wCrba6kVfXPS
          stance: supports
          locator: CBDB:471590
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（471590）
          source: &a1
            id: s_LNtcupDah1wCrba6kVfXPS
            source_type: api_record
            title: 中国历代人物传记资料库：王晉（CBDB 471590）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471590&o=json
            external_identifier: CBDB:471590
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.204Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aTM2sGeJZH7frDtPH2gt1o
        subject_person_id: p_oPYBLjyN9hqTZ5DB9gLPt3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王晉，清人物。入仕貢生: 歲貢、常貢、挨貢，曾任知縣。（中国历代人物传记资料库 CBDB 471590）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NB0-EG83OB2bTxVAXWQ6F1
          claim_id: c_aTM2sGeJZH7frDtPH2gt1o
          source_id: s_LNtcupDah1wCrba6kVfXPS
          stance: supports
          locator: CBDB:471590
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

# 王晉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晉 | accepted |
| bio.summary | 王晉，清人物。入仕貢生: 歲貢、常貢、挨貢，曾任知縣。（中国历代人物传记资料库 CBDB 471590） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晉（CBDB 471590）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471590&o=json)
