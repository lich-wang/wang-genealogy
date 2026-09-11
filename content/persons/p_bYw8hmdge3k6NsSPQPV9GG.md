---
schema: wang-person/v1
id: p_bYw8hmdge3k6NsSPQPV9GG
status: active
merged_into: null
display_name: 王勤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HjBr5gXiEmBL3nm4pdqmkV
        subject_person_id: p_bYw8hmdge3k6NsSPQPV9GG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yLT7bdSkRxWUPRgmei3kgH
          claim_id: c_HjBr5gXiEmBL3nm4pdqmkV
          source_id: s_Qenp7KKiEshqqjh18NfjUZ
          stance: supports
          locator: CBDB:45798
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45798）
          source: &a1
            id: s_Qenp7KKiEshqqjh18NfjUZ
            source_type: api_record
            title: 中国历代人物传记资料库：王勤（CBDB 45798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45798&o=json
            external_identifier: CBDB:45798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.660Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Mp5oPe9DombKxbxjQu28LC
        subject_person_id: p_bYw8hmdge3k6NsSPQPV9GG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勤，宋人物。曾任轉運司判官。（中国历代人物传记资料库 CBDB 45798）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GkfMhQGu30cNKL_AicKeOl
          claim_id: c_Mp5oPe9DombKxbxjQu28LC
          source_id: s_Qenp7KKiEshqqjh18NfjUZ
          stance: supports
          locator: CBDB:45798
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

# 王勤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勤 | accepted |
| bio.summary | 王勤，宋人物。曾任轉運司判官。（中国历代人物传记资料库 CBDB 45798） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勤（CBDB 45798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45798&o=json)
