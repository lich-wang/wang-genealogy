---
schema: wang-person/v1
id: p_Xb1MjFzZRDmdW9kg6zdPEu
status: active
merged_into: null
display_name: 王一桂
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vxd5tnRRpLeXjGbhB8mVB7
        subject_person_id: p_Xb1MjFzZRDmdW9kg6zdPEu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一桂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7Bn5VaXS7ykexmMhRQjED4
          claim_id: c_Vxd5tnRRpLeXjGbhB8mVB7
          source_id: s_yspfXSyTVZanNaRssr8VjM
          stance: supports
          locator: CBDB:235481
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（235481）
          source: &a1
            id: s_yspfXSyTVZanNaRssr8VjM
            source_type: api_record
            title: 中国历代人物传记资料库：王一桂（CBDB 235481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235481&o=json
            external_identifier: CBDB:235481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.761Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HADhrf9b2VbFCJi469Pvxy
        subject_person_id: p_Xb1MjFzZRDmdW9kg6zdPEu
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
        - id: cs_drGhnB9HF7BFT3KH1nF76j
          claim_id: c_HADhrf9b2VbFCJi469Pvxy
          source_id: s_yspfXSyTVZanNaRssr8VjM
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
        id: c_nTM38M9AALD1JZ0o7hOs3P
        subject_person_id: p_hpsegmCooo9gAZbLr3f93A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Xb1MjFzZRDmdW9kg6zdPEu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ij7oSv4t-fusj3drOOpncW
          claim_id: c_nTM38M9AALD1JZ0o7hOs3P
          source_id: s_yspfXSyTVZanNaRssr8VjM
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第二百二十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hpsegmCooo9gAZbLr3f93A
        status: active
        display_name: 王元爽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王一桂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一桂 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hpsegmCooo9gAZbLr3f93A | 王元爽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一桂（CBDB 235481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235481&o=json)
