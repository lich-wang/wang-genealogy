---
schema: wang-person/v1
id: p_SrQ4q1BgrQiRVKwrVN4Lqb
status: active
merged_into: null
display_name: 王應
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sFkLmqfMKhQpCCbkU2Qd6E
        subject_person_id: p_SrQ4q1BgrQiRVKwrVN4Lqb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z4SShw7YHzZUwrty42W4aJ
          claim_id: c_sFkLmqfMKhQpCCbkU2Qd6E
          source_id: s_rKDMsmGUZB2e469FKUQKc2
          stance: supports
          locator: CBDB:317016
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317016）
          source: &a1
            id: s_rKDMsmGUZB2e469FKUQKc2
            source_type: api_record
            title: 中国历代人物传记资料库：王應（CBDB 317016）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317016&o=json
            external_identifier: CBDB:317016
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.966Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qsi2vnktpohLnPQZz1wYwk
        subject_person_id: p_SrQ4q1BgrQiRVKwrVN4Lqb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應，明人物。嘉靖三十二年進士，籍贯馬邑，曾任監察御史。（中国历代人物传记资料库 CBDB 317016）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xldPDpVCOxqcR4an-x0XWf
          claim_id: c_qsi2vnktpohLnPQZz1wYwk
          source_id: s_rKDMsmGUZB2e469FKUQKc2
          stance: supports
          locator: CBDB:317016
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_D6D2had3IprxZAGTC8fXpx
        subject_person_id: p_SrQ4q1BgrQiRVKwrVN4Lqb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_waicV9Fo2q7nkgGJNdNMWK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6rYbabZ0dQDMoTC7WDINt-
          claim_id: c_D6D2had3IprxZAGTC8fXpx
          source_id: s_rKDMsmGUZB2e469FKUQKc2
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第九十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_waicV9Fo2q7nkgGJNdNMWK
        status: active
        display_name: 王察言
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王應

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應 | accepted |
| bio.summary | 王應，明人物。嘉靖三十二年進士，籍贯馬邑，曾任監察御史。（中国历代人物传记资料库 CBDB 317016） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_waicV9Fo2q7nkgGJNdNMWK | 王察言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應（CBDB 317016）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317016&o=json)
