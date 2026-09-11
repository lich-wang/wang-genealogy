---
schema: wang-person/v1
id: p_DLgwvbrpd2z3aWrsrW3ty3
status: active
merged_into: null
display_name: 王瑜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MANFJuNcVdnB8dJwhKEGFm
        subject_person_id: p_DLgwvbrpd2z3aWrsrW3ty3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_onkz68216RofPuo5KFs9Qc
          claim_id: c_MANFJuNcVdnB8dJwhKEGFm
          source_id: s_7c2ARgdPYh3MgTWn3MhfX5
          stance: supports
          locator: CBDB:255262
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255262）
          source: &a1
            id: s_7c2ARgdPYh3MgTWn3MhfX5
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 255262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255262&o=json
            external_identifier: CBDB:255262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.339Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HUMX2n6kidQtEZzkjGb8Ac
        subject_person_id: p_DLgwvbrpd2z3aWrsrW3ty3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑜，明人物。成化十七年進士，籍贯通渭，曾任訓科。（中国历代人物传记资料库 CBDB 255262）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4m_OcZuusB7zJP01S99YUS
          claim_id: c_HUMX2n6kidQtEZzkjGb8Ac
          source_id: s_7c2ARgdPYh3MgTWn3MhfX5
          stance: supports
          locator: CBDB:255262
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

# 王瑜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑜 | accepted |
| bio.summary | 王瑜，明人物。成化十七年進士，籍贯通渭，曾任訓科。（中国历代人物传记资料库 CBDB 255262） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑜（CBDB 255262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255262&o=json)
