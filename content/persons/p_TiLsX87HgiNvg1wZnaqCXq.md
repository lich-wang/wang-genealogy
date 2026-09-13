---
schema: wang-person/v1
id: p_TiLsX87HgiNvg1wZnaqCXq
status: active
merged_into: null
display_name: 王龜鼎
cbdb_id: 384927
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fm9eJ1qxoQuoGZkem56P1W
        subject_person_id: p_TiLsX87HgiNvg1wZnaqCXq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龜鼎，宋人物。籍贯金華，入仕進士。（中国历代人物传记资料库 CBDB 384927）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_dNSN888NONxpKSDa9dYH3L
          claim_id: c_fm9eJ1qxoQuoGZkem56P1W
          source_id: s_49Lwt1Smw7EtR6t2VjNw79
          stance: supports
          locator: CBDB:384927
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_49Lwt1Smw7EtR6t2VjNw79
            source_type: api_record
            title: 中国历代人物传记资料库：王龜鼎（CBDB 384927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384927&o=json
            external_identifier: CBDB:384927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:21.809Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wmML6eYTtuBpKnondCr9GG
        subject_person_id: p_TiLsX87HgiNvg1wZnaqCXq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龜鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DsEZ6zzQfmSXJNnJ4A3wSm
          claim_id: c_wmML6eYTtuBpKnondCr9GG
          source_id: s_49Lwt1Smw7EtR6t2VjNw79
          stance: supports
          locator: CBDB:384927
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4801-4900）｜历史性依据：CBDB 朝代 = 宋
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

# 王龜鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王龜鼎，宋人物。籍贯金華，入仕進士。（中国历代人物传记资料库 CBDB 384927） | accepted |
| name.primary | 王龜鼎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王龜鼎（CBDB 384927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384927&o=json)
