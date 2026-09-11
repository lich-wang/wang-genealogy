---
schema: wang-person/v1
id: p_9H7kPjxiNZTEeDpND49DkT
status: active
merged_into: null
display_name: 王英
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DFQzf5uGAaALqMvTSYM7Uv
        subject_person_id: p_9H7kPjxiNZTEeDpND49DkT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ygPyQ2tUPG1rZjMdix4jCc
          claim_id: c_DFQzf5uGAaALqMvTSYM7Uv
          source_id: s_tcnA6pUNyj9aPht8rBMY5Q
          stance: supports
          locator: CBDB:482556
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（482556）
          source: &a1
            id: s_tcnA6pUNyj9aPht8rBMY5Q
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 482556）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=482556&o=json
            external_identifier: CBDB:482556
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jaMaVsfDgZKRd5D8u21fk6
        subject_person_id: p_9H7kPjxiNZTEeDpND49DkT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英，元人物。曾任經歷。（中国历代人物传记资料库 CBDB 482556）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hOF336P3VmS1i4XB8-mTlD
          claim_id: c_jaMaVsfDgZKRd5D8u21fk6
          source_id: s_tcnA6pUNyj9aPht8rBMY5Q
          stance: supports
          locator: CBDB:482556
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

# 王英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王英 | accepted |
| bio.summary | 王英，元人物。曾任經歷。（中国历代人物传记资料库 CBDB 482556） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王英（CBDB 482556）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=482556&o=json)
