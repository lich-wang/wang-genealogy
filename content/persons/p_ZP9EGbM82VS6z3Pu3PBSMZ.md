---
schema: wang-person/v1
id: p_ZP9EGbM82VS6z3Pu3PBSMZ
status: active
merged_into: null
display_name: 孔氏
revision: 1
cbdb_id: 217286
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h5BtqcnJ9DQRiQgFfK0-Cq
        subject_person_id: p_ZP9EGbM82VS6z3Pu3PBSMZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孔氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qeCyrWkAWlRg1GbmwPOMYj
          claim_id: c_h5BtqcnJ9DQRiQgFfK0-Cq
          source_id: s_LY_B-x1-cxy6yy_tEf5IH4
          stance: supports
          locator: CBDB:217286
          quotation: null
          interpretation_note: CBDB 明确记录的王學曾配偶
          source: &a1
            id: s_LY_B-x1-cxy6yy_tEf5IH4
            source_type: api_record
            title: 中国历代人物传记资料库：孔氏(黃學曾妻)（CBDB 217286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217286&o=json
            external_identifier: CBDB:217286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_-bORzLj_CQTGuZYs054ZEZ
        subject_person_id: p_RtS92sLBEo6gR6XJY1MDoi
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ZP9EGbM82VS6z3Pu3PBSMZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z6jNMMWNw3-k0_BSk0-7R2
          claim_id: c_-bORzLj_CQTGuZYs054ZEZ
          source_id: s_LY_B-x1-cxy6yy_tEf5IH4
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百一十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RtS92sLBEo6gR6XJY1MDoi
        status: active
        display_name: 王學曾
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 孔氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 孔氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_RtS92sLBEo6gR6XJY1MDoi | 王學曾 | accepted |

## 外部来源

- [中国历代人物传记资料库：孔氏(黃學曾妻)（CBDB 217286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217286&o=json)
