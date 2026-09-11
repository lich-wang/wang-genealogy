---
schema: wang-person/v1
id: p_1JWiBVqkLvsgipeiv7ZQ8q
status: active
merged_into: null
display_name: 王贊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jeBFnSVZ3pip4za9PpDLH9
        subject_person_id: p_1JWiBVqkLvsgipeiv7ZQ8q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ArPWND7hgSA4AgnGXPiSVx
          claim_id: c_jeBFnSVZ3pip4za9PpDLH9
          source_id: s_4twAFd5S8MG6gytw5dVCpE
          stance: supports
          locator: CBDB:501487
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（501487）
          source: &a1
            id: s_4twAFd5S8MG6gytw5dVCpE
            source_type: api_record
            title: 中国历代人物传记资料库：王贊（CBDB 501487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501487&o=json
            external_identifier: CBDB:501487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UEU8EDBdV4tY81abmrs6cV
        subject_person_id: p_1JWiBVqkLvsgipeiv7ZQ8q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王贊，清人物。入仕科舉制舉: 武舉科，曾任千總。（中国历代人物传记资料库 CBDB 501487）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qZTrwIhajrsmdqL2crxQ5z
          claim_id: c_UEU8EDBdV4tY81abmrs6cV
          source_id: s_4twAFd5S8MG6gytw5dVCpE
          stance: supports
          locator: CBDB:501487
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

# 王贊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王贊 | accepted |
| bio.summary | 王贊，清人物。入仕科舉制舉: 武舉科，曾任千總。（中国历代人物传记资料库 CBDB 501487） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王贊（CBDB 501487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501487&o=json)
