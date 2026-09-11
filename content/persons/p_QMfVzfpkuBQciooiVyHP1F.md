---
schema: wang-person/v1
id: p_QMfVzfpkuBQciooiVyHP1F
status: active
merged_into: null
display_name: 王兗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TePioxYTqWa4czH67oSEAa
        subject_person_id: p_QMfVzfpkuBQciooiVyHP1F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aNrmKHv2ai8qZJiCGaQc5a
          claim_id: c_TePioxYTqWa4czH67oSEAa
          source_id: s_KHWwoRGcKph21vbvE1E5WB
          stance: supports
          locator: CBDB:636311
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636311）
          source: &a1
            id: s_KHWwoRGcKph21vbvE1E5WB
            source_type: api_record
            title: 中国历代人物传记资料库：王兗（CBDB 636311）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636311&o=json
            external_identifier: CBDB:636311
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.948Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RF9DsyRnEZcEaSZCYCyo2N
        subject_person_id: p_QMfVzfpkuBQciooiVyHP1F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兗，清人物。籍贯高要，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 636311）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1F8HdQgbuf7zbGUustFshO
          claim_id: c_RF9DsyRnEZcEaSZCYCyo2N
          source_id: s_KHWwoRGcKph21vbvE1E5WB
          stance: supports
          locator: CBDB:636311
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

# 王兗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兗 | accepted |
| bio.summary | 王兗，清人物。籍贯高要，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 636311） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兗（CBDB 636311）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636311&o=json)
