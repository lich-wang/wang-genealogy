---
schema: wang-person/v1
id: p_EtqfqDDuQtb8WTLKx29oE8
status: active
merged_into: null
display_name: 王惟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7SUyjsbbsMuEn6B7JnmEfQ
        subject_person_id: p_EtqfqDDuQtb8WTLKx29oE8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kpsAyeCQ4QyDQcDRXMAk3p
          claim_id: c_7SUyjsbbsMuEn6B7JnmEfQ
          source_id: s_X6Vej1jufKMo3we1MZzwzd
          stance: supports
          locator: CBDB:154883
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（154883）
          source: &a1
            id: s_X6Vej1jufKMo3we1MZzwzd
            source_type: api_record
            title: 中国历代人物传记资料库：王惟（CBDB 154883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154883&o=json
            external_identifier: CBDB:154883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.871Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gheKjC7t3ARmsWPaq4eKSD
        subject_person_id: p_EtqfqDDuQtb8WTLKx29oE8
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
        - id: cs_uDmJ1F3kyXMEqDc61pbSD5
          claim_id: c_gheKjC7t3ARmsWPaq4eKSD
          source_id: s_X6Vej1jufKMo3we1MZzwzd
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
        id: c_5SEYL_QjmJHPYuM4tAIl9U
        subject_person_id: p_hKFRGLXq8WXe249MjHQ238
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EtqfqDDuQtb8WTLKx29oE8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tVkelUrqcndes3lTHUV3mQ
          claim_id: c_5SEYL_QjmJHPYuM4tAIl9U
          source_id: s_X6Vej1jufKMo3we1MZzwzd
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 24：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hKFRGLXq8WXe249MjHQ238
        status: active
        display_name: 王晉俗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hKFRGLXq8WXe249MjHQ238 | 王晉俗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惟（CBDB 154883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154883&o=json)
