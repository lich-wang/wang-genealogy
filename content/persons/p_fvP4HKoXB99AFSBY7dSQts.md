---
schema: wang-person/v1
id: p_fvP4HKoXB99AFSBY7dSQts
status: active
merged_into: null
display_name: 王太卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M54QUc89KYP56uas4qBLAA
        subject_person_id: p_fvP4HKoXB99AFSBY7dSQts
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王太卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NU5DrRYScMUtyL6CsMCMX5
          claim_id: c_M54QUc89KYP56uas4qBLAA
          source_id: s_3WRiLcNk5yr2eFyCH5EixY
          stance: supports
          locator: CBDB:636942
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636942）
          source: &a1
            id: s_3WRiLcNk5yr2eFyCH5EixY
            source_type: api_record
            title: 中国历代人物传记资料库：王太卿（CBDB 636942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636942&o=json
            external_identifier: CBDB:636942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.155Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cnWQoNrYqkawNGfieAUnax
        subject_person_id: p_fvP4HKoXB99AFSBY7dSQts
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王太卿，清人物。籍贯錦縣，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 636942）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Qw_NUD-CG88hi2rnOIgPmn
          claim_id: c_cnWQoNrYqkawNGfieAUnax
          source_id: s_3WRiLcNk5yr2eFyCH5EixY
          stance: supports
          locator: CBDB:636942
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

# 王太卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王太卿 | accepted |
| bio.summary | 王太卿，清人物。籍贯錦縣，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 636942） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王太卿（CBDB 636942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636942&o=json)
