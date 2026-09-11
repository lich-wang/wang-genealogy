---
schema: wang-person/v1
id: p_sG5GCBpDp6jYtuFHdYq2Mr
status: active
merged_into: null
display_name: 王琚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gEHnZxgd31WGCsy958BuYB
        subject_person_id: p_sG5GCBpDp6jYtuFHdYq2Mr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3fBH9JwoihTaHepFvnYge1
          claim_id: c_gEHnZxgd31WGCsy958BuYB
          source_id: s_rgP8Qz1X4NFAQUTeKiEtSq
          stance: supports
          locator: CBDB:92084
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92084）
          source: &a1
            id: s_rgP8Qz1X4NFAQUTeKiEtSq
            source_type: api_record
            title: 中国历代人物传记资料库：王琚（CBDB 92084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92084&o=json
            external_identifier: CBDB:92084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.123Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_bNnJ3Xcfi87d4EKatYi8fp
        subject_person_id: p_sG5GCBpDp6jYtuFHdYq2Mr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 685年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5wJHmW82uCD8oGPSrzbA5G
          claim_id: c_bNnJ3Xcfi87d4EKatYi8fp
          source_id: s_rgP8Qz1X4NFAQUTeKiEtSq
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
        id: c_t5reDZLW7T8aJ4eFaVHoBQ
        subject_person_id: p_sG5GCBpDp6jYtuFHdYq2Mr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 746年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N5LqFF26oAtDTMp7JXNUrH
          claim_id: c_t5reDZLW7T8aJ4eFaVHoBQ
          source_id: s_rgP8Qz1X4NFAQUTeKiEtSq
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
        id: c_zsH6me6RBw26gGV9zLe2kS
        subject_person_id: p_sG5GCBpDp6jYtuFHdYq2Mr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琚（685年—746年），唐人物。籍贯河內，身份为詩人、工於文，曾任崇文學士、戶部尚書、諫議大夫。（中国历代人物传记资料库 CBDB 92084）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J_UBXTFlj0XB8G5VThvNmu
          claim_id: c_zsH6me6RBw26gGV9zLe2kS
          source_id: s_rgP8Qz1X4NFAQUTeKiEtSq
          stance: supports
          locator: CBDB:92084
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
  descendants: []
  other: []
---

# 王琚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琚 | accepted |
| birth.date | 685年 | accepted |
| death.date | 746年 | accepted |
| bio.summary | 王琚（685年—746年），唐人物。籍贯河內，身份为詩人、工於文，曾任崇文學士、戶部尚書、諫議大夫。（中国历代人物传记资料库 CBDB 92084） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琚（CBDB 92084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92084&o=json)
