---
schema: wang-person/v1
id: p_t8DbpTmQ1NHsu235PcNFgb
status: active
merged_into: null
display_name: 王之臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zxyYiiwPrGScxho99neYDz
        subject_person_id: p_t8DbpTmQ1NHsu235PcNFgb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3x9L7XZL23SbdzPqMrn4kR
          claim_id: c_zxyYiiwPrGScxho99neYDz
          source_id: s_TVjTrPjdarqjE2EzYfV3vQ
          stance: supports
          locator: CBDB:68806
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68806）
          source: &a1
            id: s_TVjTrPjdarqjE2EzYfV3vQ
            source_type: api_record
            title: 中国历代人物传记资料库：王之臣（CBDB 68806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68806&o=json
            external_identifier: CBDB:68806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.097Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5Y6hZZiEZaeK6KV6htLD8q
        subject_person_id: p_t8DbpTmQ1NHsu235PcNFgb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之臣，明人物。明清進士進士，籍贯潼關衛，入仕進士，曾任兵部尚書、兵部右侍郎、參知政事。（中国历代人物传记资料库 CBDB 68806）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TLXou8CQoZ50XVOkOBx2i4
          claim_id: c_5Y6hZZiEZaeK6KV6htLD8q
          source_id: s_TVjTrPjdarqjE2EzYfV3vQ
          stance: supports
          locator: CBDB:68806
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

# 王之臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之臣 | accepted |
| bio.summary | 王之臣，明人物。明清進士進士，籍贯潼關衛，入仕進士，曾任兵部尚書、兵部右侍郎、參知政事。（中国历代人物传记资料库 CBDB 68806） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之臣（CBDB 68806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68806&o=json)
