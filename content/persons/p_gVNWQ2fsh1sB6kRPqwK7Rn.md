---
schema: wang-person/v1
id: p_gVNWQ2fsh1sB6kRPqwK7Rn
status: active
merged_into: null
display_name: 王儉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QUZJHxYRxBkZsoz1UY4Sck
        subject_person_id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bdbFYda5LJXR2AAGLm5n4A
          claim_id: c_QUZJHxYRxBkZsoz1UY4Sck
          source_id: s_K4kByPRt3BdmribnvmzKo4
          stance: supports
          locator: CBDB:207835
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207835）
          source: &a1
            id: s_K4kByPRt3BdmribnvmzKo4
            source_type: api_record
            title: 中国历代人物传记资料库：王儉（CBDB 207835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207835&o=json
            external_identifier: CBDB:207835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.931Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4Bp3BQqA7YoBpFFyewV8v5
        subject_person_id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1411年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AHYFzdhBvkNpKUwNoYBPdU
          claim_id: c_4Bp3BQqA7YoBpFFyewV8v5
          source_id: s_K4kByPRt3BdmribnvmzKo4
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
        id: c_1b24v2yhvCtzhgnym4GMBs
        subject_person_id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6zrGq7sBqWBccoYtCt82Vd
          claim_id: c_1b24v2yhvCtzhgnym4GMBs
          source_id: s_K4kByPRt3BdmribnvmzKo4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zJPsioIIWHmSmanfz5X2qf
        subject_person_id: p_4C5VKRVzuAvr67X2BV8fCM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nK0ltOWpCX8GdGIEglacgT
          claim_id: c_zJPsioIIWHmSmanfz5X2qf
          source_id: s_uP29PrTEmYii49WH6cPBB1
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第二十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uP29PrTEmYii49WH6cPBB1
            source_type: api_record
            title: 中国历代人物传记资料库：王仲亨（CBDB 236828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236828&o=json
            external_identifier: CBDB:236828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.803Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4C5VKRVzuAvr67X2BV8fCM
        status: active
        display_name: 王仲亨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王儉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儉 | accepted |
| birth.date | 1411年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4C5VKRVzuAvr67X2BV8fCM | 王仲亨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儉（CBDB 207835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207835&o=json)
- [中国历代人物传记资料库：王仲亨（CBDB 236828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236828&o=json)
