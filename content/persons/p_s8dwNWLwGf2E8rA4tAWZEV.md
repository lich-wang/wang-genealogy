---
schema: wang-person/v1
id: p_s8dwNWLwGf2E8rA4tAWZEV
status: active
merged_into: null
display_name: 王澐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VdEFReQjp1EAC2tMEKYaaa
        subject_person_id: p_s8dwNWLwGf2E8rA4tAWZEV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n5ZTyd1AvoeA6SwyNVkac7
          claim_id: c_VdEFReQjp1EAC2tMEKYaaa
          source_id: s_Bne9BcAJfjGiHFnUQfUmHi
          stance: supports
          locator: CBDB:487772
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（487772）
          source: &a1
            id: s_Bne9BcAJfjGiHFnUQfUmHi
            source_type: api_record
            title: 中国历代人物传记资料库：王澐（CBDB 487772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487772&o=json
            external_identifier: CBDB:487772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.956Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6nYSuscgnKDYQsr36C3NQD
        subject_person_id: p_s8dwNWLwGf2E8rA4tAWZEV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澐，清人物。入仕鄉貢舉人，曾任知州。（中国历代人物传记资料库 CBDB 487772）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_H9ahC5lFNAo4RdCPh4bPQc
          claim_id: c_6nYSuscgnKDYQsr36C3NQD
          source_id: s_Bne9BcAJfjGiHFnUQfUmHi
          stance: supports
          locator: CBDB:487772
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

# 王澐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澐 | accepted |
| bio.summary | 王澐，清人物。入仕鄉貢舉人，曾任知州。（中国历代人物传记资料库 CBDB 487772） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澐（CBDB 487772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487772&o=json)
