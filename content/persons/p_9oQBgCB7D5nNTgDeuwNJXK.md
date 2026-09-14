---
schema: wang-person/v1
id: p_9oQBgCB7D5nNTgDeuwNJXK
status: active
merged_into: null
display_name: 王純
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1b1J4yG5DQczHukNQbLPpJ
        subject_person_id: p_9oQBgCB7D5nNTgDeuwNJXK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8xphVm6dW1g954EVXcsn39
          claim_id: c_1b1J4yG5DQczHukNQbLPpJ
          source_id: s_ZwH1w1AGk6v9BWag6LRHnX
          stance: supports
          locator: CBDB:26517
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26517）
          source: &a1
            id: s_ZwH1w1AGk6v9BWag6LRHnX
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 26517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26517&o=json
            external_identifier: CBDB:26517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.939Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jH5iDhEG5GE5JBFUZmB847
        subject_person_id: p_9oQBgCB7D5nNTgDeuwNJXK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純，宋人物。籍贯洛陽，曾任通判。（中国历代人物传记资料库 CBDB 26517）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zMbjiU61-MwJO2zNKDw6g2
          claim_id: c_jH5iDhEG5GE5JBFUZmB847
          source_id: s_ZwH1w1AGk6v9BWag6LRHnX
          stance: supports
          locator: CBDB:26517
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MIK6qD-d0t3QATlm-71gr8
        subject_person_id: p_3JKfW8zU9aAN6L1FmP3X5i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9oQBgCB7D5nNTgDeuwNJXK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_73SK-PbeKQuuubXYicXj64
          claim_id: c_MIK6qD-d0t3QATlm-71gr8
          source_id: s_3PkZe4FG3y09fS8ZURJQTo
          stance: supports
          locator: CBDB 亲属：父（KinPerson 26511）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_3PkZe4FG3y09fS8ZURJQTo
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 26517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26517&o=json
            external_identifier: CBDB:26517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3JKfW8zU9aAN6L1FmP3X5i
        status: active
        display_name: 王尚恭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王純 | accepted |
| bio.summary | 王純，宋人物。籍贯洛陽，曾任通判。（中国历代人物传记资料库 CBDB 26517） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3JKfW8zU9aAN6L1FmP3X5i | 王尚恭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王純（CBDB 26517）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26517&o=json)
