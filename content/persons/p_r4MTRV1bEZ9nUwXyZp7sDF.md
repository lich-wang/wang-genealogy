---
schema: wang-person/v1
id: p_r4MTRV1bEZ9nUwXyZp7sDF
status: active
merged_into: null
display_name: 王溫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BDPR12FFvYEFgN67qHrtWv
        subject_person_id: p_r4MTRV1bEZ9nUwXyZp7sDF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TsEheXyHBhjs6MCFemwNW4
          claim_id: c_BDPR12FFvYEFgN67qHrtWv
          source_id: s_F5QbPhJG95FadJJ3nxN7Mp
          stance: supports
          locator: CBDB:284295
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284295）
          source: &a1
            id: s_F5QbPhJG95FadJJ3nxN7Mp
            source_type: api_record
            title: 中国历代人物传记资料库：王溫（CBDB 284295）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284295&o=json
            external_identifier: CBDB:284295
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.196Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7T5vkRTimMrZfFBsr7i8Fr
        subject_person_id: p_r4MTRV1bEZ9nUwXyZp7sDF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溫，明人物。正德十六年進士。（中国历代人物传记资料库 CBDB 284295）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HqHqgiO2JfyDcTMrgIAtwG
          claim_id: c_7T5vkRTimMrZfFBsr7i8Fr
          source_id: s_F5QbPhJG95FadJJ3nxN7Mp
          stance: supports
          locator: CBDB:284295
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
  descendants:
    - claim:
        id: c_tPXt64fdfbh0v-tmeostct
        subject_person_id: p_r4MTRV1bEZ9nUwXyZp7sDF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3VWyJNWMm17kXtvGcMVL5b
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KJYPaB-aHM_S3ycnz2CZXm
          claim_id: c_tPXt64fdfbh0v-tmeostct
          source_id: s_LMA8xHJ4EXr524gv8VeY3b
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LMA8xHJ4EXr524gv8VeY3b
            source_type: api_record
            title: 中国历代人物传记资料库：王密（CBDB 202150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202150&o=json
            external_identifier: CBDB:202150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3VWyJNWMm17kXtvGcMVL5b
        status: active
        display_name: 王密
        merged_into_person_id: null
  other: []
---

# 王溫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溫 | accepted |
| bio.summary | 王溫，明人物。正德十六年進士。（中国历代人物传记资料库 CBDB 284295） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_3VWyJNWMm17kXtvGcMVL5b | 王密 | accepted |

## 外部来源

- [中国历代人物传记资料库：王密（CBDB 202150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202150&o=json)
- [中国历代人物传记资料库：王溫（CBDB 284295）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284295&o=json)
