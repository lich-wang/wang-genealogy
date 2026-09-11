---
schema: wang-person/v1
id: p_BQEJK1326DGixsGe6mMt1K
status: active
merged_into: null
display_name: 王國泰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QHUzFYV6ruDytU2tWkJa6q
        subject_person_id: p_BQEJK1326DGixsGe6mMt1K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ibfqemY6uR8sPG48VG2ML5
          claim_id: c_QHUzFYV6ruDytU2tWkJa6q
          source_id: s_Zh7ZV5s5fu8DNcyegnR5Jy
          stance: supports
          locator: CBDB:692584
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（692584）
          source: &a1
            id: s_Zh7ZV5s5fu8DNcyegnR5Jy
            source_type: api_record
            title: 中国历代人物传记资料库：王國泰（CBDB 692584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692584&o=json
            external_identifier: CBDB:692584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.634Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mcDXMG84AV83LDr2bkaQP4
        subject_person_id: p_BQEJK1326DGixsGe6mMt1K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國泰，清人物。籍贯黟縣，身份为為善鄉里、不求仕。（中国历代人物传记资料库 CBDB 692584）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TozP_RyZ2gLNt783CFvxZB
          claim_id: c_mcDXMG84AV83LDr2bkaQP4
          source_id: s_Zh7ZV5s5fu8DNcyegnR5Jy
          stance: supports
          locator: CBDB:692584
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

# 王國泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國泰 | accepted |
| bio.summary | 王國泰，清人物。籍贯黟縣，身份为為善鄉里、不求仕。（中国历代人物传记资料库 CBDB 692584） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國泰（CBDB 692584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692584&o=json)
