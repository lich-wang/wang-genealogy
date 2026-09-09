---
schema: wang-person/v1
id: p_nb5hFft6gkeE8497vK13iH
status: active
merged_into: null
display_name: 王潤滋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kq5F2WNqeP7WH9eBs1qB4W
        subject_person_id: p_nb5hFft6gkeE8497vK13iH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潤滋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rFbWpSG8yf87pn6iYHeyrT
          claim_id: c_kq5F2WNqeP7WH9eBs1qB4W
          source_id: s_pZaN4AAskTfW6CpNAc2R4z
          stance: supports
          locator: CBDB:639212
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639212）
          source: &a1
            id: s_pZaN4AAskTfW6CpNAc2R4z
            source_type: api_record
            title: 中国历代人物传记资料库：王潤滋（CBDB 639212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639212&o=json
            external_identifier: CBDB:639212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.876Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BxKU3BGKDzJLnawx2TGAad
        subject_person_id: p_nb5hFft6gkeE8497vK13iH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aM1rMg9WaCVJnoWZ2ovcey
          claim_id: c_BxKU3BGKDzJLnawx2TGAad
          source_id: s_pZaN4AAskTfW6CpNAc2R4z
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
  descendants: []
  other: []
---

# 王潤滋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潤滋 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王潤滋（CBDB 639212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639212&o=json)
