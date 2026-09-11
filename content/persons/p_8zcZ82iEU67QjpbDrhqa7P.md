---
schema: wang-person/v1
id: p_8zcZ82iEU67QjpbDrhqa7P
status: active
merged_into: null
display_name: 王鎭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T9b2aDnQ9JxG1Hwttep5pU
        subject_person_id: p_8zcZ82iEU67QjpbDrhqa7P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cGHYFfZ7kqK2n8zaXtkqof
          claim_id: c_T9b2aDnQ9JxG1Hwttep5pU
          source_id: s_3WDGzECE9n2ioe8dywX32v
          stance: supports
          locator: CBDB:492351
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（492351）
          source: &a1
            id: s_3WDGzECE9n2ioe8dywX32v
            source_type: api_record
            title: 中国历代人物传记资料库：王鎭（CBDB 492351）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492351&o=json
            external_identifier: CBDB:492351
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.291Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y1XnZJw6B8u6A1CedkivGc
        subject_person_id: p_8zcZ82iEU67QjpbDrhqa7P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎭，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 492351）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xjJLG6LEiWLe1QCqvVfQRi
          claim_id: c_Y1XnZJw6B8u6A1CedkivGc
          source_id: s_3WDGzECE9n2ioe8dywX32v
          stance: supports
          locator: CBDB:492351
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

# 王鎭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎭 | accepted |
| bio.summary | 王鎭，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 492351） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎭（CBDB 492351）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492351&o=json)
