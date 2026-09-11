---
schema: wang-person/v1
id: p_JnRM8aS3kQm7FAPV9J5ejd
status: active
merged_into: null
display_name: 王慕羲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8cNP7yHF87FBEER5i7F9gq
        subject_person_id: p_JnRM8aS3kQm7FAPV9J5ejd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慕羲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vGrjvV5AqC3wp5qndVGk5d
          claim_id: c_8cNP7yHF87FBEER5i7F9gq
          source_id: s_NseXs4BU5W76xq8hWoHGug
          stance: supports
          locator: CBDB:637916
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637916）
          source: &a1
            id: s_NseXs4BU5W76xq8hWoHGug
            source_type: api_record
            title: 中国历代人物传记资料库：王慕羲（CBDB 637916）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637916&o=json
            external_identifier: CBDB:637916
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.458Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KYw6HTJXVnzS3MoFzuenxn
        subject_person_id: p_JnRM8aS3kQm7FAPV9J5ejd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慕羲，清人物。籍贯長汀，入仕縣學附生，曾任典史。（中国历代人物传记资料库 CBDB 637916）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jxoEtydtsHpA7WhYPoS_RM
          claim_id: c_KYw6HTJXVnzS3MoFzuenxn
          source_id: s_NseXs4BU5W76xq8hWoHGug
          stance: supports
          locator: CBDB:637916
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

# 王慕羲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慕羲 | accepted |
| bio.summary | 王慕羲，清人物。籍贯長汀，入仕縣學附生，曾任典史。（中国历代人物传记资料库 CBDB 637916） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慕羲（CBDB 637916）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637916&o=json)
