---
schema: wang-person/v1
id: p_Q1q31zQjx8PWJYjP18sL3N
status: active
merged_into: null
display_name: 王度
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CNoH5dK5vK79q4iF1GWe45
        subject_person_id: p_Q1q31zQjx8PWJYjP18sL3N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王度
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uhWB5yvpcgxQH16TMTwNxo
          claim_id: c_CNoH5dK5vK79q4iF1GWe45
          source_id: s_FJmuCRBt2SNUnMAJQmE8AF
          stance: supports
          locator: CBDB:686034
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（686034）
          source: &a1
            id: s_FJmuCRBt2SNUnMAJQmE8AF
            source_type: api_record
            title: 中国历代人物传记资料库：王度（CBDB 686034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686034&o=json
            external_identifier: CBDB:686034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.363Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mN85T4Mk1MqCzjckG456Te
        subject_person_id: p_Q1q31zQjx8PWJYjP18sL3N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王度，宋人物。籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 686034）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zgI17myMZTK4GfR2bHXWvp
          claim_id: c_mN85T4Mk1MqCzjckG456Te
          source_id: s_FJmuCRBt2SNUnMAJQmE8AF
          stance: supports
          locator: CBDB:686034
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

# 王度

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王度 | accepted |
| bio.summary | 王度，宋人物。籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 686034） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王度（CBDB 686034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686034&o=json)
