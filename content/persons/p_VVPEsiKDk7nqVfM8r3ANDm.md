---
schema: wang-person/v1
id: p_VVPEsiKDk7nqVfM8r3ANDm
status: active
merged_into: null
display_name: 王世魁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_noPD38HATxnsExDp5AX7G8
        subject_person_id: p_VVPEsiKDk7nqVfM8r3ANDm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世魁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4HZZEYWsL5xJxxcn7tJR7W
          claim_id: c_noPD38HATxnsExDp5AX7G8
          source_id: s_uXWLfi3eabA7g237XVN5rb
          stance: supports
          locator: CBDB:576132
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576132）
          source: &a1
            id: s_uXWLfi3eabA7g237XVN5rb
            source_type: api_record
            title: 中国历代人物传记资料库：王世魁（CBDB 576132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576132&o=json
            external_identifier: CBDB:576132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.944Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zihYVJoswpPv12AUmNUFeU
        subject_person_id: p_VVPEsiKDk7nqVfM8r3ANDm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世魁，清人物。籍贯濰縣，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576132）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5-3SUdik4yGtwxK5KZQSS9
          claim_id: c_zihYVJoswpPv12AUmNUFeU
          source_id: s_uXWLfi3eabA7g237XVN5rb
          stance: supports
          locator: CBDB:576132
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

# 王世魁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世魁 | accepted |
| bio.summary | 王世魁，清人物。籍贯濰縣，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576132） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世魁（CBDB 576132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576132&o=json)
