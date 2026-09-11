---
schema: wang-person/v1
id: p_ZJx55htsCzvqQx9NKbdtiR
status: active
merged_into: null
display_name: 郭氏
revision: 1
cbdb_id: 163700
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZIgtKzBKP1GQxGEyZ6OQcR
        subject_person_id: p_ZJx55htsCzvqQx9NKbdtiR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 郭氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o3xVOROLcE04jPVAIiW88V
          claim_id: c_ZIgtKzBKP1GQxGEyZ6OQcR
          source_id: s_GFw5cd_ATfUq0-2ddxyqns
          stance: supports
          locator: CBDB:163700
          quotation: null
          interpretation_note: CBDB 明确记录的王胡配偶
          source: &a1
            id: s_GFw5cd_ATfUq0-2ddxyqns
            source_type: api_record
            title: 中国历代人物传记资料库：郭氏(王胡妻)（CBDB 163700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163700&o=json
            external_identifier: CBDB:163700
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
        id: c_qbTqCWYQl4b4aaI4x_CZ3A
        subject_person_id: p_cb2pzan14ZR1ECvrVUNese
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ZJx55htsCzvqQx9NKbdtiR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lX1yaoMObM11tmqwrTjVgy
          claim_id: c_qbTqCWYQl4b4aaI4x_CZ3A
          source_id: s_GFw5cd_ATfUq0-2ddxyqns
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan6：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cb2pzan14ZR1ECvrVUNese
        status: active
        display_name: 王胡
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 郭氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 郭氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_cb2pzan14ZR1ECvrVUNese | 王胡 | accepted |

## 外部来源

- [中国历代人物传记资料库：郭氏(王胡妻)（CBDB 163700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163700&o=json)
