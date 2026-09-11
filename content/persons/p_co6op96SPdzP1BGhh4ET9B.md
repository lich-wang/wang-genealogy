---
schema: wang-person/v1
id: p_co6op96SPdzP1BGhh4ET9B
status: active
merged_into: null
display_name: 王宏柯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_byh1ynviKTWRrVc9vZLFYg
        subject_person_id: p_co6op96SPdzP1BGhh4ET9B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏柯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5REMDBQjG8K8iQgWMt9JuD
          claim_id: c_byh1ynviKTWRrVc9vZLFYg
          source_id: s_NtmJt19moHyqPd772TGfKm
          stance: supports
          locator: CBDB:577755
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（577755）
          source: &a1
            id: s_NtmJt19moHyqPd772TGfKm
            source_type: api_record
            title: 中国历代人物传记资料库：王宏柯（CBDB 577755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577755&o=json
            external_identifier: CBDB:577755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dyqzTxpfmBBrDYfbnFkMMf
        subject_person_id: p_co6op96SPdzP1BGhh4ET9B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏柯，清人物。籍贯歙縣，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 577755）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vnXP3hLK8JtdY7THBFaEpa
          claim_id: c_dyqzTxpfmBBrDYfbnFkMMf
          source_id: s_NtmJt19moHyqPd772TGfKm
          stance: supports
          locator: CBDB:577755
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

# 王宏柯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宏柯 | accepted |
| bio.summary | 王宏柯，清人物。籍贯歙縣，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 577755） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宏柯（CBDB 577755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577755&o=json)
