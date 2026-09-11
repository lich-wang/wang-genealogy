---
schema: wang-person/v1
id: p_dushLD8QJLJynRyKBeici3
status: active
merged_into: null
display_name: 王冷然
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pu8KRNcGi29PAmHEXhi3QN
        subject_person_id: p_dushLD8QJLJynRyKBeici3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冷然
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8nvm9jGatpa2und2xhTRUK
          claim_id: c_Pu8KRNcGi29PAmHEXhi3QN
          source_id: s_m1aEb2D4xvYRS8Jbz4CGVd
          stance: supports
          locator: CBDB:140809
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140809）
          source: &a1
            id: s_m1aEb2D4xvYRS8Jbz4CGVd
            source_type: api_record
            title: 中国历代人物传记资料库：王冷然（CBDB 140809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140809&o=json
            external_identifier: CBDB:140809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.527Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nSnjsDBiBe4T5D3jMAEv2n
        subject_person_id: p_dushLD8QJLJynRyKBeici3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 692年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_96wUS6DGBgbRbmoZ4G1kFZ
          claim_id: c_nSnjsDBiBe4T5D3jMAEv2n
          source_id: s_m1aEb2D4xvYRS8Jbz4CGVd
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
        id: c_VT8kg98VGttzYeVnwc6Mpb
        subject_person_id: p_dushLD8QJLJynRyKBeici3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 724年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LtAWT5Ki2rc1YVTbQQfJPw
          claim_id: c_VT8kg98VGttzYeVnwc6Mpb
          source_id: s_m1aEb2D4xvYRS8Jbz4CGVd
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
        id: c_P2eqLEYtxFVoHQskQd5k1g
        subject_person_id: p_dushLD8QJLJynRyKBeici3
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
        - id: cs_7eiocNk7pu6j5X9FJnWuq9
          claim_id: c_P2eqLEYtxFVoHQskQd5k1g
          source_id: s_m1aEb2D4xvYRS8Jbz4CGVd
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
        id: c_ONNXLpDINBxJmQAvjLeVU0
        subject_person_id: p_Fg3vtbfub5wpwSDzMxnYPv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dushLD8QJLJynRyKBeici3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q-lgfvDoGsj8BOYtOyupyM
          claim_id: c_ONNXLpDINBxJmQAvjLeVU0
          source_id: s_m1aEb2D4xvYRS8Jbz4CGVd
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 2：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Fg3vtbfub5wpwSDzMxnYPv
        status: active
        display_name: 王義諶
        merged_into_person_id: null
  children:
    - claim:
        id: c_G7LaMKPfgBfE9ckJnj5mZB
        subject_person_id: p_dushLD8QJLJynRyKBeici3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MbXDhpLedM3vGmUtsNAeMN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_62T27kUKZdH3GcYoog02vj
          claim_id: c_G7LaMKPfgBfE9ckJnj5mZB
          source_id: s_m1aEb2D4xvYRS8Jbz4CGVd
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 2：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MbXDhpLedM3vGmUtsNAeMN
        status: active
        display_name: 王仙官
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王冷然

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冷然 | accepted |
| birth.date | 692年 | accepted |
| death.date | 724年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Fg3vtbfub5wpwSDzMxnYPv | 王義諶 | accepted |
| children | p_MbXDhpLedM3vGmUtsNAeMN | 王仙官 | accepted |

## 外部来源

- [中国历代人物传记资料库：王冷然（CBDB 140809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140809&o=json)
