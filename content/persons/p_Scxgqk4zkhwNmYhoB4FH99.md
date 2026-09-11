---
schema: wang-person/v1
id: p_Scxgqk4zkhwNmYhoB4FH99
status: active
merged_into: null
display_name: 王度昭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c5JqoYP5MCZsSAa1MQwWR4
        subject_person_id: p_Scxgqk4zkhwNmYhoB4FH99
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王度昭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FYNT9RZZMgVNH519iu93G7
          claim_id: c_c5JqoYP5MCZsSAa1MQwWR4
          source_id: s_Zi1qjg6uJVevEwH7b4jjRD
          stance: supports
          locator: CBDB:67124
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67124）
          source: &a1
            id: s_Zi1qjg6uJVevEwH7b4jjRD
            source_type: api_record
            title: 中国历代人物传记资料库：王度昭（CBDB 67124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67124&o=json
            external_identifier: CBDB:67124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.974Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mP7CKjmiPf8kWgFMAgQiiT
        subject_person_id: p_Scxgqk4zkhwNmYhoB4FH99
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1658年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2QfxSpJ6WMwMzBvva2RGka
          claim_id: c_mP7CKjmiPf8kWgFMAgQiiT
          source_id: s_Zi1qjg6uJVevEwH7b4jjRD
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
        id: c_qG7ddbFe3amsG6ejS9AW9m
        subject_person_id: p_Scxgqk4zkhwNmYhoB4FH99
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1724年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JUUFEienKSfW4xU6753Ehi
          claim_id: c_qG7ddbFe3amsG6ejS9AW9m
          source_id: s_Zi1qjg6uJVevEwH7b4jjRD
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
        id: c_Ne1APbM4tckTeH13oL5weE
        subject_person_id: p_Scxgqk4zkhwNmYhoB4FH99
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王度昭（1658年—1724年），清人物。籍贯諸城，入仕進士，曾任通政使、縣知縣、鄉試正考官。（中国历代人物传记资料库 CBDB 67124）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yJ16n7RtJ_2rVvDuZxzW7k
          claim_id: c_Ne1APbM4tckTeH13oL5weE
          source_id: s_Zi1qjg6uJVevEwH7b4jjRD
          stance: supports
          locator: CBDB:67124
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

# 王度昭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王度昭 | accepted |
| birth.date | 1658年 | accepted |
| death.date | 1724年 | accepted |
| bio.summary | 王度昭（1658年—1724年），清人物。籍贯諸城，入仕進士，曾任通政使、縣知縣、鄉試正考官。（中国历代人物传记资料库 CBDB 67124） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王度昭（CBDB 67124）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67124&o=json)
