---
schema: wang-person/v1
id: p_w41GC7aSQabnLka6UZ1VWz
status: active
merged_into: null
display_name: 趙氏
revision: 1
cbdb_id: 284298
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6xJr_iZoQHnZNhvWTF2oIw
        subject_person_id: p_w41GC7aSQabnLka6UZ1VWz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QCqWdh30dALDrMq_KEwmRB
          claim_id: c_6xJr_iZoQHnZNhvWTF2oIw
          source_id: s_uhWfe--aAJzZfnWureqceo
          stance: supports
          locator: CBDB:284298
          quotation: null
          interpretation_note: CBDB 明确记录的王密配偶
          source: &a1
            id: s_uhWfe--aAJzZfnWureqceo
            source_type: api_record
            title: 中国历代人物传记资料库：趙氏(王密妻)（CBDB 284298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284298&o=json
            external_identifier: CBDB:284298
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
        id: c_D4os8OEFs1MM4h-uCW2n1Q
        subject_person_id: p_3VWyJNWMm17kXtvGcMVL5b
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_w41GC7aSQabnLka6UZ1VWz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6wtqERMQOyNaMfZKSwDPTs
          claim_id: c_D4os8OEFs1MM4h-uCW2n1Q
          source_id: s_uhWfe--aAJzZfnWureqceo
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3VWyJNWMm17kXtvGcMVL5b
        status: active
        display_name: 王密
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 趙氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 趙氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_3VWyJNWMm17kXtvGcMVL5b | 王密 | accepted |

## 外部来源

- [中国历代人物传记资料库：趙氏(王密妻)（CBDB 284298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284298&o=json)
