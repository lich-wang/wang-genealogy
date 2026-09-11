---
schema: wang-person/v1
id: p_P2gp16ay69H9Tzv49bKans
status: active
merged_into: null
display_name: 王龍賁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wmwdowrNfvLN35HvL9c1se
        subject_person_id: p_P2gp16ay69H9Tzv49bKans
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龍賁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ckfr5EY4xDgeaNjoJJp45u
          claim_id: c_wmwdowrNfvLN35HvL9c1se
          source_id: s_9qhPURdU7kHMfRv57urY7v
          stance: supports
          locator: CBDB:71483
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71483）
          source: &a1
            id: s_9qhPURdU7kHMfRv57urY7v
            source_type: api_record
            title: 中国历代人物传记资料库：王龍賁（CBDB 71483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71483&o=json
            external_identifier: CBDB:71483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.704Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uLrBQTiKAAZYS2UvonL6J3
        subject_person_id: p_P2gp16ay69H9Tzv49bKans
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1618年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zMw32TXTpTcuUxU4z7L7AV
          claim_id: c_uLrBQTiKAAZYS2UvonL6J3
          source_id: s_9qhPURdU7kHMfRv57urY7v
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZxfdHhbxBsqFVxB2R2EPAD
        subject_person_id: p_P2gp16ay69H9Tzv49bKans
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龍賁（生于1618年），清人物。籍贯晉江。（中国历代人物传记资料库 CBDB 71483）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A4Atagx40yt30VUV1v7hoW
          claim_id: c_ZxfdHhbxBsqFVxB2R2EPAD
          source_id: s_9qhPURdU7kHMfRv57urY7v
          stance: supports
          locator: CBDB:71483
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

# 王龍賁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王龍賁 | accepted |
| birth.date | 1618年 | accepted |
| bio.summary | 王龍賁（生于1618年），清人物。籍贯晉江。（中国历代人物传记资料库 CBDB 71483） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王龍賁（CBDB 71483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71483&o=json)
