---
schema: wang-person/v1
id: p_6xwdxaqiP534LCSKXpCDgi
status: active
merged_into: null
display_name: 王之屏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zFkKSpu5izno9PBaDtMRvQ
        subject_person_id: p_6xwdxaqiP534LCSKXpCDgi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之屏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_omVpacgDG3fxDQhZQdZoEw
          claim_id: c_zFkKSpu5izno9PBaDtMRvQ
          source_id: s_Syxx1DBkQEtvNnVpXpB3xE
          stance: supports
          locator: CBDB:496344
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（496344）
          source: &a1
            id: s_Syxx1DBkQEtvNnVpXpB3xE
            source_type: api_record
            title: 中国历代人物传记资料库：王之屏（CBDB 496344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=496344&o=json
            external_identifier: CBDB:496344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.559Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7C18AWH8FQF3aMgC58Z5Qw
        subject_person_id: p_6xwdxaqiP534LCSKXpCDgi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王之屏，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任州判官。（中国历代人物传记资料库 CBDB 496344）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HQt4vza_QL_13eeoeqUVHC
          claim_id: c_7C18AWH8FQF3aMgC58Z5Qw
          source_id: s_Syxx1DBkQEtvNnVpXpB3xE
          stance: supports
          locator: CBDB:496344
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

# 王之屏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之屏 | accepted |
| bio.summary | 王之屏，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任州判官。（中国历代人物传记资料库 CBDB 496344） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之屏（CBDB 496344）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=496344&o=json)
