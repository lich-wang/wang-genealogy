---
schema: wang-person/v1
id: p_QjasEDi9wDntJbhQ9Bbkdz
status: active
merged_into: null
display_name: 丘氏
revision: 1
cbdb_id: 37979
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eyzaMUtxn0aeyxh6o-xhao
        subject_person_id: p_QjasEDi9wDntJbhQ9Bbkdz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 丘氏，宋人物。曾任國太夫人。（中国历代人物传记资料库 CBDB 37979）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B89N_YLBDBj7CLOj4saV1u
          claim_id: c_eyzaMUtxn0aeyxh6o-xhao
          source_id: s_BodoIWfUDr61om4Hax06WL
          stance: supports
          locator: CBDB:37979
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BodoIWfUDr61om4Hax06WL
            source_type: api_record
            title: 中国历代人物传记资料库：丘氏(王贄妻)（CBDB 37979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37979&o=json
            external_identifier: CBDB:37979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_S3_hVQTesOOq7DWS-qJH3l
        subject_person_id: p_QjasEDi9wDntJbhQ9Bbkdz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 丘氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V0L3XQmLouCfVB2xyw7iVa
          claim_id: c_S3_hVQTesOOq7DWS-qJH3l
          source_id: s_BodoIWfUDr61om4Hax06WL
          stance: supports
          locator: CBDB:37979
          quotation: null
          interpretation_note: CBDB 明确记录的王贄配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_9SwXgtenu6Mvap8NOsJfd_
        subject_person_id: p_QZHN7XBFLhdEfKGuEPQEhp
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_QjasEDi9wDntJbhQ9Bbkdz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZtAhTNoSm7hY-9UWW3BTdV
          claim_id: c_9SwXgtenu6Mvap8NOsJfd_
          source_id: s_BodoIWfUDr61om4Hax06WL
          stance: supports
          locator: 宋人傳記資料索引(電子版)，835：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QZHN7XBFLhdEfKGuEPQEhp
        status: active
        display_name: 王贄
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 丘氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 丘氏，宋人物。曾任國太夫人。（中国历代人物传记资料库 CBDB 37979） | accepted |
| name.primary | 丘氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_QZHN7XBFLhdEfKGuEPQEhp | 王贄 | accepted |

## 外部来源

- [中国历代人物传记资料库：丘氏(王贄妻)（CBDB 37979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37979&o=json)
