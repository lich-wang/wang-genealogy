---
schema: wang-person/v1
id: p_9WbB1oDNCB33LmV29HdrQ6
status: active
merged_into: null
display_name: 王賡書
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fopvVKwEKdL8Bge6bysJWF
        subject_person_id: p_9WbB1oDNCB33LmV29HdrQ6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賡書
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r9vC2kK3jAQ9SkXuQrGzNX
          claim_id: c_fopvVKwEKdL8Bge6bysJWF
          source_id: s_LQAC25sHGxPiXD7gjEVZGy
          stance: supports
          locator: CBDB:640336
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640336）
          source: &a1
            id: s_LQAC25sHGxPiXD7gjEVZGy
            source_type: api_record
            title: 中国历代人物传记资料库：王賡書（CBDB 640336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640336&o=json
            external_identifier: CBDB:640336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.225Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ri9WP1bfdqTpvZUS4GfCzc
        subject_person_id: p_9WbB1oDNCB33LmV29HdrQ6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賡書，清人物。籍贯諸城，曾任主事。（中国历代人物传记资料库 CBDB 640336）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8MT8BWIo1IKGkmNugSeAp1
          claim_id: c_Ri9WP1bfdqTpvZUS4GfCzc
          source_id: s_LQAC25sHGxPiXD7gjEVZGy
          stance: supports
          locator: CBDB:640336
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

# 王賡書

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賡書 | accepted |
| bio.summary | 王賡書，清人物。籍贯諸城，曾任主事。（中国历代人物传记资料库 CBDB 640336） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賡書（CBDB 640336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640336&o=json)
