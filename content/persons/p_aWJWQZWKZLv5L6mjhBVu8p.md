---
schema: wang-person/v1
id: p_aWJWQZWKZLv5L6mjhBVu8p
status: active
merged_into: null
display_name: 王篤烈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ki9T5CFjxRJF3j5cBp5bc9
        subject_person_id: p_aWJWQZWKZLv5L6mjhBVu8p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王篤烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jf31E9NZ2JwityKpLhR6wb
          claim_id: c_Ki9T5CFjxRJF3j5cBp5bc9
          source_id: s_eZVsixemsKGUEbJQCJDNMq
          stance: supports
          locator: CBDB:639724
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639724）
          source: &a1
            id: s_eZVsixemsKGUEbJQCJDNMq
            source_type: api_record
            title: 中国历代人物传记资料库：王篤烈（CBDB 639724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639724&o=json
            external_identifier: CBDB:639724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.025Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wNA4sh8GRFFWjJYEL5Rfkd
        subject_person_id: p_aWJWQZWKZLv5L6mjhBVu8p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王篤烈，清人物。籍贯長沙，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 639724）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mmpkNP_2DehbBk1Jxgf9b0
          claim_id: c_wNA4sh8GRFFWjJYEL5Rfkd
          source_id: s_eZVsixemsKGUEbJQCJDNMq
          stance: supports
          locator: CBDB:639724
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

# 王篤烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王篤烈 | accepted |
| bio.summary | 王篤烈，清人物。籍贯長沙，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 639724） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王篤烈（CBDB 639724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639724&o=json)
