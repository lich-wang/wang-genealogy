---
schema: wang-person/v1
id: p_fNqUCAWhrMdJ5BW4ELe5dZ
status: active
merged_into: null
display_name: 王又京
cbdb_id: 414016
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LcvyfmUJ1yLHUbueRaj8x2
        subject_person_id: p_fNqUCAWhrMdJ5BW4ELe5dZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王又京，清人物。曾任訓導。（中国历代人物传记资料库 CBDB 414016）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ngp1q8BZoes3QH1OUVZM7l
          claim_id: c_LcvyfmUJ1yLHUbueRaj8x2
          source_id: s_66VpCkRLkHzuhgtis3FgpU
          stance: supports
          locator: CBDB:414016
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_66VpCkRLkHzuhgtis3FgpU
            source_type: api_record
            title: 中国历代人物传记资料库：王又京（CBDB 414016）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414016&o=json
            external_identifier: CBDB:414016
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:26.305Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_czTNDNorv3mLA4kMcrwcG6
        subject_person_id: p_fNqUCAWhrMdJ5BW4ELe5dZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王又京
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3S643WTQeDZCMC5CfoGtW3
          claim_id: c_czTNDNorv3mLA4kMcrwcG6
          source_id: s_66VpCkRLkHzuhgtis3FgpU
          stance: supports
          locator: CBDB:414016
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5101-5200）｜历史性依据：CBDB 朝代 = 清
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

# 王又京

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王又京，清人物。曾任訓導。（中国历代人物传记资料库 CBDB 414016） | accepted |
| name.primary | 王又京 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王又京（CBDB 414016）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414016&o=json)
