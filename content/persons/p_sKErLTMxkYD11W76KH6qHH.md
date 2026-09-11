---
schema: wang-person/v1
id: p_sKErLTMxkYD11W76KH6qHH
status: active
merged_into: null
display_name: 王霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ik7o3weRqPGfz7Hct5z19H
        subject_person_id: p_sKErLTMxkYD11W76KH6qHH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1KxCta6Pp5ncX6aBePLSaF
          claim_id: c_ik7o3weRqPGfz7Hct5z19H
          source_id: s_9kT5RtyhUC6xCbcXw4qFBN
          stance: supports
          locator: CBDB:71277
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71277）
          source: &a1
            id: s_9kT5RtyhUC6xCbcXw4qFBN
            source_type: api_record
            title: 中国历代人物传记资料库：王霖（CBDB 71277）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71277&o=json
            external_identifier: CBDB:71277
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.555Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JVqrn4sWv8HHPNcFM8HSxq
        subject_person_id: p_sKErLTMxkYD11W76KH6qHH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1679年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E2KFrhWBnHT9eXBAAFdNBg
          claim_id: c_JVqrn4sWv8HHPNcFM8HSxq
          source_id: s_9kT5RtyhUC6xCbcXw4qFBN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MaXUemYGeDx6A8GDy73RdA
        subject_person_id: p_sKErLTMxkYD11W76KH6qHH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1754年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FCDG5sYSrqLL4bGUmkvAfv
          claim_id: c_MaXUemYGeDx6A8GDy73RdA
          source_id: s_9kT5RtyhUC6xCbcXw4qFBN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gAwnbSmhGt6fajiXEWMvQm
        subject_person_id: p_sKErLTMxkYD11W76KH6qHH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霖（1679年—1754年），清人物。籍贯處州路，身份为收徒講學，入仕鄉貢舉人，曾任樞密院都事、內閣中書、同考官。（中国历代人物传记资料库 CBDB 71277）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PQA7JsnSLpmf2R9Z5jti_7
          claim_id: c_gAwnbSmhGt6fajiXEWMvQm
          source_id: s_9kT5RtyhUC6xCbcXw4qFBN
          stance: supports
          locator: CBDB:71277
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

# 王霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霖 | accepted |
| birth.date | 1679年 | accepted |
| death.date | 1754年 | accepted |
| bio.summary | 王霖（1679年—1754年），清人物。籍贯處州路，身份为收徒講學，入仕鄉貢舉人，曾任樞密院都事、內閣中書、同考官。（中国历代人物传记资料库 CBDB 71277） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王霖（CBDB 71277）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71277&o=json)
