---
schema: wang-person/v1
id: p_FnjmHtAg4FqEpuWGoMtAR4
status: active
merged_into: null
display_name: 王之俊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8zAzZtHuRRC1ft5grA5Ljn
        subject_person_id: p_FnjmHtAg4FqEpuWGoMtAR4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S4NPQDXVhG39CJ4dtQBRUP
          claim_id: c_8zAzZtHuRRC1ft5grA5Ljn
          source_id: s_3b7L9AgscTv5gzLkD1eqGY
          stance: supports
          locator: CBDB:59907
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（59907）
          source: &a1
            id: s_3b7L9AgscTv5gzLkD1eqGY
            source_type: api_record
            title: 中国历代人物传记资料库：王之俊（CBDB 59907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59907&o=json
            external_identifier: CBDB:59907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.837Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mVr1hvThezTVJxY74ri4mg
        subject_person_id: p_FnjmHtAg4FqEpuWGoMtAR4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之俊，清人物。入仕鄉貢舉人，曾任監督、内官監太監、乾清宮管事。（中国历代人物传记资料库 CBDB 59907）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5c_RzkauKv6_aXh3Fwqbfw
          claim_id: c_mVr1hvThezTVJxY74ri4mg
          source_id: s_3b7L9AgscTv5gzLkD1eqGY
          stance: supports
          locator: CBDB:59907
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

# 王之俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之俊 | accepted |
| bio.summary | 王之俊，清人物。入仕鄉貢舉人，曾任監督、内官監太監、乾清宮管事。（中国历代人物传记资料库 CBDB 59907） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之俊（CBDB 59907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59907&o=json)
