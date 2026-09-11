---
schema: wang-person/v1
id: p_Bc7KqdaoZCpMqQF52hDPYJ
status: active
merged_into: null
display_name: 王默
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YcyvEJ35CHg7Dk27cZ6wGK
        subject_person_id: p_Bc7KqdaoZCpMqQF52hDPYJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王默
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WQkYKM97GtjbTfjrYEFng3
          claim_id: c_YcyvEJ35CHg7Dk27cZ6wGK
          source_id: s_2KkGF8qCQco72azicXiJ58
          stance: supports
          locator: CBDB:37793
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37793）
          source: &a1
            id: s_2KkGF8qCQco72azicXiJ58
            source_type: api_record
            title: 中国历代人物传记资料库：王默（CBDB 37793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37793&o=json
            external_identifier: CBDB:37793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.255Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fb33aZT827j4GohpgSsEbX
        subject_person_id: p_Bc7KqdaoZCpMqQF52hDPYJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王默，宋人物。籍贯棘道，入仕進士，曾任朝奉郎、縣主簿、著作佐郎。（中国历代人物传记资料库 CBDB 37793）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6gHI0wbGigGYFlTvJTXBge
          claim_id: c_fb33aZT827j4GohpgSsEbX
          source_id: s_2KkGF8qCQco72azicXiJ58
          stance: supports
          locator: CBDB:37793
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

# 王默

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王默 | accepted |
| bio.summary | 王默，宋人物。籍贯棘道，入仕進士，曾任朝奉郎、縣主簿、著作佐郎。（中国历代人物传记资料库 CBDB 37793） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王默（CBDB 37793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37793&o=json)
