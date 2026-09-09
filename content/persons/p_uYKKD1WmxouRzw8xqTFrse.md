---
schema: wang-person/v1
id: p_uYKKD1WmxouRzw8xqTFrse
status: active
merged_into: null
display_name: 王振國
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qNaN68rdnt57fsWTm3akW4
        subject_person_id: p_uYKKD1WmxouRzw8xqTFrse
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振國
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mPRr5W4ahUXAYQyMd5oCEE
          claim_id: c_qNaN68rdnt57fsWTm3akW4
          source_id: s_arhdH1ngFu318p5fFN4YJ4
          stance: supports
          locator: CBDB:69345
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69345）
          source: &a1
            id: s_arhdH1ngFu318p5fFN4YJ4
            source_type: api_record
            title: 中国历代人物传记资料库：王振國（CBDB 69345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69345&o=json
            external_identifier: CBDB:69345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.102Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NHJ3ypJQ8XLbXet8UrMAjC
        subject_person_id: p_uYKKD1WmxouRzw8xqTFrse
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1775年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C557qUCXeymfPZ6KFhMqNx
          claim_id: c_NHJ3ypJQ8XLbXet8UrMAjC
          source_id: s_arhdH1ngFu318p5fFN4YJ4
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
        id: c_Qp6kMKPEXt7EmycUr5Kiar
        subject_person_id: p_uYKKD1WmxouRzw8xqTFrse
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
        - id: cs_4pWTgPsYaHQhyAGiSx4uhm
          claim_id: c_Qp6kMKPEXt7EmycUr5Kiar
          source_id: s_arhdH1ngFu318p5fFN4YJ4
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

# 王振國

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振國 | accepted |
| death.date | 1775年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王振國（CBDB 69345）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69345&o=json)
