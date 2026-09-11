---
schema: wang-person/v1
id: p_dt99CHtLQV9MQYtFwsXeCG
status: active
merged_into: null
display_name: 王威
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yLbxgxKCGPrKC8F9Tqda8J
        subject_person_id: p_dt99CHtLQV9MQYtFwsXeCG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王威
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m6zKMZuP63VAwUeq4KPtHL
          claim_id: c_yLbxgxKCGPrKC8F9Tqda8J
          source_id: s_5T6u3sJF18S8kdNwfNC56C
          stance: supports
          locator: CBDB:148623
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（148623）
          source: &a1
            id: s_5T6u3sJF18S8kdNwfNC56C
            source_type: api_record
            title: 中国历代人物传记资料库：王威（CBDB 148623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148623&o=json
            external_identifier: CBDB:148623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.764Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hwcAGyQ8bcqcSTwtz8oxPw
        subject_person_id: p_dt99CHtLQV9MQYtFwsXeCG
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
        - id: cs_kmrtJZka83uociJrd1RoVe
          claim_id: c_hwcAGyQ8bcqcSTwtz8oxPw
          source_id: s_5T6u3sJF18S8kdNwfNC56C
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
        id: c_vMt1IWdWw0VvXKyBSvbWsH
        subject_person_id: p_dt99CHtLQV9MQYtFwsXeCG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MsBA8Ftmoz1fdfwfvZzMEV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e0ENK6Ur3z9OD1vYJG93Ug
          claim_id: c_vMt1IWdWw0VvXKyBSvbWsH
          source_id: s_5T6u3sJF18S8kdNwfNC56C
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianheng 66：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MsBA8Ftmoz1fdfwfvZzMEV
        status: active
        display_name: 王甑生
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王威

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王威 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_MsBA8Ftmoz1fdfwfvZzMEV | 王甑生 | accepted |

## 外部来源

- [中国历代人物传记资料库：王威（CBDB 148623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148623&o=json)
