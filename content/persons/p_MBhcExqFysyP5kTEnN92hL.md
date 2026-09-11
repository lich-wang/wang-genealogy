---
schema: wang-person/v1
id: p_MBhcExqFysyP5kTEnN92hL
status: active
merged_into: null
display_name: 王頥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qXkF3S5zKxkCMAJwTHgZMK
        subject_person_id: p_MBhcExqFysyP5kTEnN92hL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DsoPEe7py7W1gML7NNWY3Z
          claim_id: c_qXkF3S5zKxkCMAJwTHgZMK
          source_id: s_3yUvLRpfBpFEzXWSNkf6MU
          stance: supports
          locator: CBDB:483570
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（483570）
          source: &a1
            id: s_3yUvLRpfBpFEzXWSNkf6MU
            source_type: api_record
            title: 中国历代人物传记资料库：王頥（CBDB 483570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483570&o=json
            external_identifier: CBDB:483570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.803Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EuGVQwQwZPwBaQxKNmYEJE
        subject_person_id: p_MBhcExqFysyP5kTEnN92hL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頥，宋人物。曾任參軍。（中国历代人物传记资料库 CBDB 483570）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kzctEizG9WX1r6P6yXvTRv
          claim_id: c_EuGVQwQwZPwBaQxKNmYEJE
          source_id: s_3yUvLRpfBpFEzXWSNkf6MU
          stance: supports
          locator: CBDB:483570
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

# 王頥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王頥 | accepted |
| bio.summary | 王頥，宋人物。曾任參軍。（中国历代人物传记资料库 CBDB 483570） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王頥（CBDB 483570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483570&o=json)
