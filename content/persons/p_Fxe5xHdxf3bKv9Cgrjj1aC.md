---
schema: wang-person/v1
id: p_Fxe5xHdxf3bKv9Cgrjj1aC
status: active
merged_into: null
display_name: 王榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T7NyBbtLznGdx7Ys7ACiB7
        subject_person_id: p_Fxe5xHdxf3bKv9Cgrjj1aC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u48JH4tKPQqn43bQu1pfLJ
          claim_id: c_T7NyBbtLznGdx7Ys7ACiB7
          source_id: s_UM1ukVpDkuGQMAD4sySHaG
          stance: supports
          locator: CBDB:145614
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145614）
          source: &a1
            id: s_UM1ukVpDkuGQMAD4sySHaG
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 145614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145614&o=json
            external_identifier: CBDB:145614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.686Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_B429it2crnjrjcE5HpUGVZ
        subject_person_id: p_Fxe5xHdxf3bKv9Cgrjj1aC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 752年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_64QcfzJy5qcBC7jakaLGjV
          claim_id: c_B429it2crnjrjcE5HpUGVZ
          source_id: s_UM1ukVpDkuGQMAD4sySHaG
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
        id: c_QuYg4n12xGQBy7H9eQBSsj
        subject_person_id: p_Fxe5xHdxf3bKv9Cgrjj1aC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 807年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zquabZiDNBTfHzD7FCMXiM
          claim_id: c_QuYg4n12xGQBy7H9eQBSsj
          source_id: s_UM1ukVpDkuGQMAD4sySHaG
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
        id: c_JLFNF2RMGxX9CF4LZPHw6x
        subject_person_id: p_Fxe5xHdxf3bKv9Cgrjj1aC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZbbDrknuyvyc3rWHcVL6wM
          claim_id: c_JLFNF2RMGxX9CF4LZPHw6x
          source_id: s_UM1ukVpDkuGQMAD4sySHaG
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

# 王榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮 | accepted |
| birth.date | 752年 | accepted |
| death.date | 807年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王榮（CBDB 145614）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145614&o=json)
