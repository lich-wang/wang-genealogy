---
schema: wang-person/v1
id: p_275vi8UU2NrwrnRkZzLYPQ
status: active
merged_into: null
display_name: 王從政
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fAiwGEkJe1tQQgvmBWuxg5
        subject_person_id: p_275vi8UU2NrwrnRkZzLYPQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CeN5hrRANYP8zECs6U8KPN
          claim_id: c_fAiwGEkJe1tQQgvmBWuxg5
          source_id: s_d89gjmw8i6mSUtCmkfdjfF
          stance: supports
          locator: CBDB:231571
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231571）
          source: &a1
            id: s_d89gjmw8i6mSUtCmkfdjfF
            source_type: api_record
            title: 中国历代人物传记资料库：王從政（CBDB 231571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231571&o=json
            external_identifier: CBDB:231571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.648Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LADtCNeCR9Hh86CvmuPhRX
        subject_person_id: p_275vi8UU2NrwrnRkZzLYPQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從政，明人物。宣德八年進士，籍贯大城，入仕考上會試/貢士，曾任知縣、知州。（中国历代人物传记资料库 CBDB 231571）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Es6aAIFzhhzo_D8B2lG5u2
          claim_id: c_LADtCNeCR9Hh86CvmuPhRX
          source_id: s_d89gjmw8i6mSUtCmkfdjfF
          stance: supports
          locator: CBDB:231571
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

# 王從政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王從政 | accepted |
| bio.summary | 王從政，明人物。宣德八年進士，籍贯大城，入仕考上會試/貢士，曾任知縣、知州。（中国历代人物传记资料库 CBDB 231571） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王從政（CBDB 231571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231571&o=json)
