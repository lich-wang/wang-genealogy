---
schema: wang-person/v1
id: p_ZHvact2S2FmWXkCK8RBPKV
status: active
merged_into: null
display_name: 王經邦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xNFK4QMUtrEXBr9dN5bkAk
        subject_person_id: p_ZHvact2S2FmWXkCK8RBPKV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經邦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4XzLsEJgHqphPyTMbzTcGs
          claim_id: c_xNFK4QMUtrEXBr9dN5bkAk
          source_id: s_FLuWAc4iA7NRJBwJAxtCBC
          stance: supports
          locator: CBDB:342185
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342185）
          source: &a1
            id: s_FLuWAc4iA7NRJBwJAxtCBC
            source_type: api_record
            title: 中国历代人物传记资料库：王經邦（CBDB 342185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342185&o=json
            external_identifier: CBDB:342185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.861Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F63oWHfpFJanvDbpbRb9kp
        subject_person_id: p_ZHvact2S2FmWXkCK8RBPKV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經邦，明人物。明清進士進士，籍贯寧晉，入仕進士。（中国历代人物传记资料库 CBDB 342185）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3l8I2Cg1iinQn8KZtSu5w3
          claim_id: c_F63oWHfpFJanvDbpbRb9kp
          source_id: s_FLuWAc4iA7NRJBwJAxtCBC
          stance: supports
          locator: CBDB:342185
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

# 王經邦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王經邦 | accepted |
| bio.summary | 王經邦，明人物。明清進士進士，籍贯寧晉，入仕進士。（中国历代人物传记资料库 CBDB 342185） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王經邦（CBDB 342185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342185&o=json)
