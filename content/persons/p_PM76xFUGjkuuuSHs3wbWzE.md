---
schema: wang-person/v1
id: p_PM76xFUGjkuuuSHs3wbWzE
status: active
merged_into: null
display_name: 王兢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V6E5998G892m75D1H7piuF
        subject_person_id: p_PM76xFUGjkuuuSHs3wbWzE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kvfs3wYzaNpKX1QJMqAf4a
          claim_id: c_V6E5998G892m75D1H7piuF
          source_id: s_Pff5MaDgdWZrWFoGAdq1oj
          stance: supports
          locator: CBDB:1789
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1789）
          source: &a1
            id: s_Pff5MaDgdWZrWFoGAdq1oj
            source_type: api_record
            title: 中国历代人物传记资料库：王兢（CBDB 1789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1789&o=json
            external_identifier: CBDB:1789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kKdurXU6ZXiWRG2GbqqXNN
        subject_person_id: p_PM76xFUGjkuuuSHs3wbWzE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1032年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DDBEBTvCWG8AMB8DUMsnuo
          claim_id: c_kKdurXU6ZXiWRG2GbqqXNN
          source_id: s_Pff5MaDgdWZrWFoGAdq1oj
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
        id: c_XWqHJJAfK2aTUBrzXv2SUY
        subject_person_id: p_PM76xFUGjkuuuSHs3wbWzE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1095年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UMaN2wP6fwuJpg82EA9oFA
          claim_id: c_XWqHJJAfK2aTUBrzXv2SUY
          source_id: s_Pff5MaDgdWZrWFoGAdq1oj
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
        id: c_qbZaG79G7eCfpTb9BygG9v
        subject_person_id: p_PM76xFUGjkuuuSHs3wbWzE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YfiC2CcHe1JB7VMrNHEobz
          claim_id: c_qbZaG79G7eCfpTb9BygG9v
          source_id: s_Pff5MaDgdWZrWFoGAdq1oj
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

# 王兢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兢 | accepted |
| birth.date | 1032年 | accepted |
| death.date | 1095年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兢（CBDB 1789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1789&o=json)
