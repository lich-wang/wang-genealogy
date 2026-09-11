---
schema: wang-person/v1
id: p_1k8zqgiyHj8o91hKekFu7d
status: active
merged_into: null
display_name: 周氏
revision: 1
cbdb_id: 122616
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p1Xj--nkvotwMpBG5YvibM
        subject_person_id: p_1k8zqgiyHj8o91hKekFu7d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SXXNJJhcWVA8_n5VHWP9y7
          claim_id: c_p1Xj--nkvotwMpBG5YvibM
          source_id: s_Cg6s14dcCqyYuO2Z-lQyx-
          stance: supports
          locator: CBDB:122616
          quotation: null
          interpretation_note: CBDB 明确记录的王裕配偶
          source: &a1
            id: s_Cg6s14dcCqyYuO2Z-lQyx-
            source_type: api_record
            title: 中国历代人物传记资料库：周氏(王裕妻)（CBDB 122616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122616&o=json
            external_identifier: CBDB:122616
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
        id: c_w5r8VH1RST2A6I8kAfcMi1
        subject_person_id: p_pqrU2cbxBLUF945XYJByoU
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_1k8zqgiyHj8o91hKekFu7d
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VrECfDKxqhz5smBWNGHb_b
          claim_id: c_w5r8VH1RST2A6I8kAfcMi1
          source_id: s_Cg6s14dcCqyYuO2Z-lQyx-
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3409：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pqrU2cbxBLUF945XYJByoU
        status: active
        display_name: 王裕
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 周氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 周氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_pqrU2cbxBLUF945XYJByoU | 王裕 | accepted |

## 外部来源

- [中国历代人物传记资料库：周氏(王裕妻)（CBDB 122616）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122616&o=json)
