---
schema: wang-person/v1
id: p_2vi1q8E4jEEwVAywWLGQyH
status: active
merged_into: null
display_name: 王孟澍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SnFf9w3KmY2THGcy7KzrYd
        subject_person_id: p_2vi1q8E4jEEwVAywWLGQyH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟澍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_snmFkcRAnSfqmU3Q7189BY
          claim_id: c_SnFf9w3KmY2THGcy7KzrYd
          source_id: s_4QR7aAp3FDYL3LyTnVMxBZ
          stance: supports
          locator: CBDB:637013
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637013）
          source: &a1
            id: s_4QR7aAp3FDYL3LyTnVMxBZ
            source_type: api_record
            title: 中国历代人物传记资料库：王孟澍（CBDB 637013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637013&o=json
            external_identifier: CBDB:637013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.182Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b5aNknDAJ52doD8F5fAw3E
        subject_person_id: p_2vi1q8E4jEEwVAywWLGQyH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟澍，清人物。籍贯山陰，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637013）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TlPmrAWP4zblzbdbCPvY4e
          claim_id: c_b5aNknDAJ52doD8F5fAw3E
          source_id: s_4QR7aAp3FDYL3LyTnVMxBZ
          stance: supports
          locator: CBDB:637013
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

# 王孟澍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孟澍 | accepted |
| bio.summary | 王孟澍，清人物。籍贯山陰，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637013） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孟澍（CBDB 637013）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637013&o=json)
