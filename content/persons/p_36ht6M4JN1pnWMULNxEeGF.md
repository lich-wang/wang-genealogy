---
schema: wang-person/v1
id: p_36ht6M4JN1pnWMULNxEeGF
status: active
merged_into: null
display_name: 王敬書
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZkF8Ys4zRog4A6XzndJsQN
        subject_person_id: p_36ht6M4JN1pnWMULNxEeGF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬書
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yAL5RcAYHCgqa2bcEThNaz
          claim_id: c_ZkF8Ys4zRog4A6XzndJsQN
          source_id: s_8fLYbBE3i4EAfzqBysJyS9
          stance: supports
          locator: CBDB:638196
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638196）
          source: &a1
            id: s_8fLYbBE3i4EAfzqBysJyS9
            source_type: api_record
            title: 中国历代人物传记资料库：王敬書（CBDB 638196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638196&o=json
            external_identifier: CBDB:638196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HpVAP9w4ZKtAsNMjxixgJ5
        subject_person_id: p_36ht6M4JN1pnWMULNxEeGF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬書，清人物。籍贯長興，曾任知縣。（中国历代人物传记资料库 CBDB 638196）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qON4reIYigIsY1KpQY1_4q
          claim_id: c_HpVAP9w4ZKtAsNMjxixgJ5
          source_id: s_8fLYbBE3i4EAfzqBysJyS9
          stance: supports
          locator: CBDB:638196
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

# 王敬書

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬書 | accepted |
| bio.summary | 王敬書，清人物。籍贯長興，曾任知縣。（中国历代人物传记资料库 CBDB 638196） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬書（CBDB 638196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638196&o=json)
