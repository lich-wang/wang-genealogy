---
schema: wang-person/v1
id: p_BJ54cNtv52sB6ya7tYFxPH
status: active
merged_into: null
display_name: 王國銘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pd34ftt7bAeMGy2SGY2nwE
        subject_person_id: p_BJ54cNtv52sB6ya7tYFxPH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國銘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CdwU7VyQzfGRqRxeFQeiVt
          claim_id: c_pd34ftt7bAeMGy2SGY2nwE
          source_id: s_uj5nsPh7tXGRnwj1pM376J
          stance: supports
          locator: CBDB:636675
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636675）
          source: &a1
            id: s_uj5nsPh7tXGRnwj1pM376J
            source_type: api_record
            title: 中国历代人物传记资料库：王國銘（CBDB 636675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636675&o=json
            external_identifier: CBDB:636675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.065Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EBT9524qCpsiQ5Tjr3ZFKM
        subject_person_id: p_BJ54cNtv52sB6ya7tYFxPH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國銘，清人物。籍贯東鄉，入仕監生，曾任主事。（中国历代人物传记资料库 CBDB 636675）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aR1c_u-2XPVrC9IgQpILR8
          claim_id: c_EBT9524qCpsiQ5Tjr3ZFKM
          source_id: s_uj5nsPh7tXGRnwj1pM376J
          stance: supports
          locator: CBDB:636675
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

# 王國銘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國銘 | accepted |
| bio.summary | 王國銘，清人物。籍贯東鄉，入仕監生，曾任主事。（中国历代人物传记资料库 CBDB 636675） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國銘（CBDB 636675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636675&o=json)
