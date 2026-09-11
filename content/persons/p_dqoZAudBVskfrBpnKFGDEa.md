---
schema: wang-person/v1
id: p_dqoZAudBVskfrBpnKFGDEa
status: active
merged_into: null
display_name: 王問
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F165EJV5ouwDbSyMHKqkKr
        subject_person_id: p_dqoZAudBVskfrBpnKFGDEa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F7RBBMmY5So4Q8VQD3fNMf
          claim_id: c_F165EJV5ouwDbSyMHKqkKr
          source_id: s_EB6wRBA1tq4c4t1q3QgMA8
          stance: supports
          locator: CBDB:97831
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97831）
          source: &a1
            id: s_EB6wRBA1tq4c4t1q3QgMA8
            source_type: api_record
            title: 中国历代人物传记资料库：王問（CBDB 97831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97831&o=json
            external_identifier: CBDB:97831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.188Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DUZEzogyZtcnMxHe6VCT3A
        subject_person_id: p_dqoZAudBVskfrBpnKFGDEa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問，宋人物。曾任朝請郎。（中国历代人物传记资料库 CBDB 97831）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pmbcrNJq66SytwrmkWEfIC
          claim_id: c_DUZEzogyZtcnMxHe6VCT3A
          source_id: s_EB6wRBA1tq4c4t1q3QgMA8
          stance: supports
          locator: CBDB:97831
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

# 王問

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王問 | accepted |
| bio.summary | 王問，宋人物。曾任朝請郎。（中国历代人物传记资料库 CBDB 97831） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王問（CBDB 97831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97831&o=json)
