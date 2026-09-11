---
schema: wang-person/v1
id: p_4TBj6Xc4yn96Lj8bj24DCh
status: active
merged_into: null
display_name: 王宗侃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T7pfYKhZoBCK1559P5Nbp2
        subject_person_id: p_4TBj6Xc4yn96Lj8bj24DCh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗侃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JXQeD6NNWACeL7TFKQ9N1e
          claim_id: c_T7pfYKhZoBCK1559P5Nbp2
          source_id: s_7LKC5S9up47sJahPsUv8rA
          stance: supports
          locator: CBDB:383462
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（383462）
          source: &a1
            id: s_7LKC5S9up47sJahPsUv8rA
            source_type: api_record
            title: 中国历代人物传记资料库：王宗侃（CBDB 383462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383462&o=json
            external_identifier: CBDB:383462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.837Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D41c6BAwpLQvFtUoQb9NZb
        subject_person_id: p_4TBj6Xc4yn96Lj8bj24DCh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗侃，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 383462）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qhXDcjhOpWj2FLRfUslsAJ
          claim_id: c_D41c6BAwpLQvFtUoQb9NZb
          source_id: s_7LKC5S9up47sJahPsUv8rA
          stance: supports
          locator: CBDB:383462
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

# 王宗侃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗侃 | accepted |
| bio.summary | 王宗侃，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 383462） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗侃（CBDB 383462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383462&o=json)
