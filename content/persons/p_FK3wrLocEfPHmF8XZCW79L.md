---
schema: wang-person/v1
id: p_FK3wrLocEfPHmF8XZCW79L
status: active
merged_into: null
display_name: 王㳘
cbdb_id: 10692
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RLYL5WCBE1imeH9QzRttLB
        subject_person_id: p_FK3wrLocEfPHmF8XZCW79L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王㳘，宋人物。籍贯金華，曾任右宣教郎、提舉市舶司幹辦公事。（中国历代人物传记资料库 CBDB 10692）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_fet-4R2j9ce9xnPpU1e7Oz
          claim_id: c_RLYL5WCBE1imeH9QzRttLB
          source_id: s_fjssaGJpDfhxCsRxjGC6Ui
          stance: supports
          locator: CBDB:10692
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fjssaGJpDfhxCsRxjGC6Ui
            source_type: api_record
            title: 中国历代人物传记资料库：王㳘（CBDB 10692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10692&o=json
            external_identifier: CBDB:10692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bfDmCtWr1rQtURCoa134Lz
        subject_person_id: p_FK3wrLocEfPHmF8XZCW79L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王㳘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6aQanHdtUqQYtC7JXpzaiy
          claim_id: c_bfDmCtWr1rQtURCoa134Lz
          source_id: s_fjssaGJpDfhxCsRxjGC6Ui
          stance: supports
          locator: CBDB:10692
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Szs3QEA-4nT49Ime534FK5
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FK3wrLocEfPHmF8XZCW79L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1EFWbqo3nCaTGTqcw9a-XX
          claim_id: c_Szs3QEA-4nT49Ime534FK5
          source_id: s_TDQU47y8wNfV6q7DcXXGf8
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1872）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_TDQU47y8wNfV6q7DcXXGf8
            source_type: api_record
            title: 中国历代人物传记资料库：王㳘（CBDB 10692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10692&o=json
            external_identifier: CBDB:10692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bkMbqmq6U23rFXaG17Pxzk
        status: active
        display_name: 王師心
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王㳘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王㳘，宋人物。籍贯金華，曾任右宣教郎、提舉市舶司幹辦公事。（中国历代人物传记资料库 CBDB 10692） | accepted |
| name.primary | 王㳘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bkMbqmq6U23rFXaG17Pxzk | 王師心 | accepted |

## 外部来源

- [中国历代人物传记资料库：王㳘（CBDB 10692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10692&o=json)
