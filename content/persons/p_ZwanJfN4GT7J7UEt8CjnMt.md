---
schema: wang-person/v1
id: p_ZwanJfN4GT7J7UEt8CjnMt
status: active
merged_into: null
display_name: 王國卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w8QJ8wCyLqXfsYx6FjaTxy
        subject_person_id: p_ZwanJfN4GT7J7UEt8CjnMt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RyCKFxW5fbi5gwPiZ1axE7
          claim_id: c_w8QJ8wCyLqXfsYx6FjaTxy
          source_id: s_Ziwv9xMAzx92A8cbKXXnfE
          stance: supports
          locator: CBDB:636642
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636642）
          source: &a1
            id: s_Ziwv9xMAzx92A8cbKXXnfE
            source_type: api_record
            title: 中国历代人物传记资料库：王國卿（CBDB 636642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636642&o=json
            external_identifier: CBDB:636642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.057Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6nzjoSxJBBrCbUCnyLduEF
        subject_person_id: p_ZwanJfN4GT7J7UEt8CjnMt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國卿，清人物。籍贯瀘州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 636642）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B0bjzI2pTeX83KEQ7-Az5c
          claim_id: c_6nzjoSxJBBrCbUCnyLduEF
          source_id: s_Ziwv9xMAzx92A8cbKXXnfE
          stance: supports
          locator: CBDB:636642
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

# 王國卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國卿 | accepted |
| bio.summary | 王國卿，清人物。籍贯瀘州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 636642） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國卿（CBDB 636642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636642&o=json)
