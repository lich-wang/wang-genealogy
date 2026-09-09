---
schema: wang-person/v1
id: p_wSn96SqUU6oQ33LYPPXKcc
status: active
merged_into: null
display_name: 王承廣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F56xLB1UaJ99GaJ6sJJJsu
        subject_person_id: p_wSn96SqUU6oQ33LYPPXKcc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承廣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AeJHxyB7t6YYHK29DaGFfq
          claim_id: c_F56xLB1UaJ99GaJ6sJJJsu
          source_id: s_GN49GGuJbCC8PhEH6PHVfk
          stance: supports
          locator: CBDB:71824
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71824）
          source: &a1
            id: s_GN49GGuJbCC8PhEH6PHVfk
            source_type: api_record
            title: 中国历代人物传记资料库：王承廣（CBDB 71824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71824&o=json
            external_identifier: CBDB:71824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.888Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Cn3ZGBdKHoY6kDv64Nk2py
        subject_person_id: p_wSn96SqUU6oQ33LYPPXKcc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1729年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AE6e57RKPzZBHmNHoX4vNW
          claim_id: c_Cn3ZGBdKHoY6kDv64Nk2py
          source_id: s_GN49GGuJbCC8PhEH6PHVfk
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
        id: c_yewb4y29Mszy4TAqpatxmt
        subject_person_id: p_wSn96SqUU6oQ33LYPPXKcc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dywu5zqZBoaakUhE3kq7ZW
          claim_id: c_yewb4y29Mszy4TAqpatxmt
          source_id: s_GN49GGuJbCC8PhEH6PHVfk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王承廣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承廣 | accepted |
| birth.date | 1729年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承廣（CBDB 71824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71824&o=json)
