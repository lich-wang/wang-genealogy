---
schema: wang-person/v1
id: p_oruQD3pLHzNQ8AvU3GVazK
status: active
merged_into: null
display_name: 王維熊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gLw47DwJiYMKjhEbbBF364
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維熊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wbD2EcfB3HrsGd5WBAFKgQ
          claim_id: c_gLw47DwJiYMKjhEbbBF364
          source_id: s_dip9sog27EWtnAMgMLoxRS
          stance: supports
          locator: CBDB:222809
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222809）
          source: &a1
            id: s_dip9sog27EWtnAMgMLoxRS
            source_type: api_record
            title: 中国历代人物传记资料库：王維熊（CBDB 222809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222809&o=json
            external_identifier: CBDB:222809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.392Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7F8hGVGPF2d743wpCThyY6
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
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
        - id: cs_CNiGu4WRho4JBGDptN557w
          claim_id: c_7F8hGVGPF2d743wpCThyY6
          source_id: s_dip9sog27EWtnAMgMLoxRS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_yMq7gU5uT_OzSZoheAJkUP
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DpuSp4mmLYMfmUMioXctjR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MCWDkn1BAdGQXi7v0JU_27
          claim_id: c_yMq7gU5uT_OzSZoheAJkUP
          source_id: s_dip9sog27EWtnAMgMLoxRS
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第六十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DpuSp4mmLYMfmUMioXctjR
        status: active
        display_name: 王堯封
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王維熊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維熊 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DpuSp4mmLYMfmUMioXctjR | 王堯封 | accepted |

## 外部来源

- [中国历代人物传记资料库：王維熊（CBDB 222809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222809&o=json)
