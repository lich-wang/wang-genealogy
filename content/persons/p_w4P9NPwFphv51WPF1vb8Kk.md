---
schema: wang-person/v1
id: p_w4P9NPwFphv51WPF1vb8Kk
status: active
merged_into: null
display_name: 王恕
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ivPsy92ViAZno1YmLHGmBS
        subject_person_id: p_w4P9NPwFphv51WPF1vb8Kk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C2Z2rjbS35FVir4rDv21xU
          claim_id: c_ivPsy92ViAZno1YmLHGmBS
          source_id: s_19RtiX3ZbFZPrsvW98BAdM
          stance: supports
          locator: CBDB:288559
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288559）
          source: &a1
            id: s_19RtiX3ZbFZPrsvW98BAdM
            source_type: api_record
            title: 中国历代人物传记资料库：王恕（CBDB 288559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288559&o=json
            external_identifier: CBDB:288559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.293Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kHa7gU6iVHy2M5QY6H3D1u
        subject_person_id: p_w4P9NPwFphv51WPF1vb8Kk
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
        - id: cs_Cyqnmn5uS2K2AV6QGZfXT3
          claim_id: c_kHa7gU6iVHy2M5QY6H3D1u
          source_id: s_19RtiX3ZbFZPrsvW98BAdM
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
  descendants:
    - claim:
        id: c_EKUbzsgbEriFij5c6bUp2g
        subject_person_id: p_w4P9NPwFphv51WPF1vb8Kk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JirTxmVijtiT96YhPfvEVf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s2LRC7mGw7EIlHV8814BCb
          claim_id: c_EKUbzsgbEriFij5c6bUp2g
          source_id: s_19RtiX3ZbFZPrsvW98BAdM
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JirTxmVijtiT96YhPfvEVf
        status: active
        display_name: 王宗恆
        merged_into_person_id: null
  other: []
---

# 王恕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恕 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_JirTxmVijtiT96YhPfvEVf | 王宗恆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恕（CBDB 288559）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288559&o=json)
