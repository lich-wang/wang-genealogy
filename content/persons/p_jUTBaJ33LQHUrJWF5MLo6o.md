---
schema: wang-person/v1
id: p_jUTBaJ33LQHUrJWF5MLo6o
status: active
merged_into: null
display_name: 王萃春
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QPSk3WRbgDvyBWPgNSWU3E
        subject_person_id: p_jUTBaJ33LQHUrJWF5MLo6o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萃春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9jPcHXRyML7f2eHojBFC5f
          claim_id: c_QPSk3WRbgDvyBWPgNSWU3E
          source_id: s_j3917QrLJjrWP46PwLqoNd
          stance: supports
          locator: CBDB:640111
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640111）
          source: &a1
            id: s_j3917QrLJjrWP46PwLqoNd
            source_type: api_record
            title: 中国历代人物传记资料库：王萃春（CBDB 640111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640111&o=json
            external_identifier: CBDB:640111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.153Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zLk92vQjahoHabhv2Heu14
        subject_person_id: p_jUTBaJ33LQHUrJWF5MLo6o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王萃春，清人物。籍贯豐城，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任復設訓導。（中国历代人物传记资料库 CBDB 640111）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O8zgAzep-Ifp6FKNCknY7Y
          claim_id: c_zLk92vQjahoHabhv2Heu14
          source_id: s_j3917QrLJjrWP46PwLqoNd
          stance: supports
          locator: CBDB:640111
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

# 王萃春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萃春 | accepted |
| bio.summary | 王萃春，清人物。籍贯豐城，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任復設訓導。（中国历代人物传记资料库 CBDB 640111） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萃春（CBDB 640111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640111&o=json)
