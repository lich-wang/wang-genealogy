---
schema: wang-person/v1
id: p_EY1t753UvFa1UKsqe51oBy
status: active
merged_into: null
display_name: 王運午
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wMkgjtoXmysUeFMnpeFzvk
        subject_person_id: p_EY1t753UvFa1UKsqe51oBy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運午
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n1aTsDJERqX4nCTUPgMF1F
          claim_id: c_wMkgjtoXmysUeFMnpeFzvk
          source_id: s_wzd85BYzqSqyjFLdCE57x2
          stance: supports
          locator: CBDB:690934
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690934）
          source: &a1
            id: s_wzd85BYzqSqyjFLdCE57x2
            source_type: api_record
            title: 中国历代人物传记资料库：王運午（CBDB 690934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690934&o=json
            external_identifier: CBDB:690934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.486Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_65y45xnsr6hZ2oDhV6hQUA
        subject_person_id: p_EY1t753UvFa1UKsqe51oBy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運午，清人物。籍贯黟縣，身份为義軍首領，入仕邑庠生。（中国历代人物传记资料库 CBDB 690934）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yjxa_bSOKQAqkq9mDE9lVf
          claim_id: c_65y45xnsr6hZ2oDhV6hQUA
          source_id: s_wzd85BYzqSqyjFLdCE57x2
          stance: supports
          locator: CBDB:690934
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

# 王運午

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王運午 | accepted |
| bio.summary | 王運午，清人物。籍贯黟縣，身份为義軍首領，入仕邑庠生。（中国历代人物传记资料库 CBDB 690934） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王運午（CBDB 690934）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690934&o=json)
