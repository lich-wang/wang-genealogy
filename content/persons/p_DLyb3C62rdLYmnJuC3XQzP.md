---
schema: wang-person/v1
id: p_DLyb3C62rdLYmnJuC3XQzP
status: active
merged_into: null
display_name: 王渭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YDvTgNFNBAKCut5PH6jC36
        subject_person_id: p_DLyb3C62rdLYmnJuC3XQzP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qGhnKXLaeA1vcJDwCxMF3x
          claim_id: c_YDvTgNFNBAKCut5PH6jC36
          source_id: s_XoJh6rBfvoTxS7GeYruFWu
          stance: supports
          locator: CBDB:237842
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237842）
          source: &a1
            id: s_XoJh6rBfvoTxS7GeYruFWu
            source_type: api_record
            title: 中国历代人物传记资料库：王渭（CBDB 237842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237842&o=json
            external_identifier: CBDB:237842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.856Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7vstDHCfGzNvT3ViabQbXz
        subject_person_id: p_DLyb3C62rdLYmnJuC3XQzP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渭，明人物。成化二年進士，籍贯上元。（中国历代人物传记资料库 CBDB 237842）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xEtEUiOKFdzrb87BtlqzYD
          claim_id: c_7vstDHCfGzNvT3ViabQbXz
          source_id: s_XoJh6rBfvoTxS7GeYruFWu
          stance: supports
          locator: CBDB:237842
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

# 王渭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王渭 | accepted |
| bio.summary | 王渭，明人物。成化二年進士，籍贯上元。（中国历代人物传记资料库 CBDB 237842） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王渭（CBDB 237842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237842&o=json)
