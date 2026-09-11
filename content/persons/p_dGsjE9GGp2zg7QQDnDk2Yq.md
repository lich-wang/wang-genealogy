---
schema: wang-person/v1
id: p_dGsjE9GGp2zg7QQDnDk2Yq
status: active
merged_into: null
display_name: 王主敬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5Ja2BbX3AE4E2QE6tzMx15
        subject_person_id: p_dGsjE9GGp2zg7QQDnDk2Yq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王主敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M34vavJnJ9jwE3WsV7jSaJ
          claim_id: c_5Ja2BbX3AE4E2QE6tzMx15
          source_id: s_haatGwput6ReNTcVWgmLJ1
          stance: supports
          locator: CBDB:101119
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101119）
          source: &a1
            id: s_haatGwput6ReNTcVWgmLJ1
            source_type: api_record
            title: 中国历代人物传记资料库：王主敬（CBDB 101119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101119&o=json
            external_identifier: CBDB:101119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.693Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eUV13tj2pQYB2z76AfK7LL
        subject_person_id: p_dGsjE9GGp2zg7QQDnDk2Yq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王主敬，元人物。曾任南臺察院監察御史。（中国历代人物传记资料库 CBDB 101119）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2Xgb7mI4QnAfZL1o-eS_FV
          claim_id: c_eUV13tj2pQYB2z76AfK7LL
          source_id: s_haatGwput6ReNTcVWgmLJ1
          stance: supports
          locator: CBDB:101119
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

# 王主敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王主敬 | accepted |
| bio.summary | 王主敬，元人物。曾任南臺察院監察御史。（中国历代人物传记资料库 CBDB 101119） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王主敬（CBDB 101119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101119&o=json)
