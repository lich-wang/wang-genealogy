---
schema: wang-person/v1
id: p_CW4yrDyvEh47cJBQ1as6X2
status: active
merged_into: null
display_name: 王應和
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HrYgvRigzkYGqzf2Jwqv1a
        subject_person_id: p_CW4yrDyvEh47cJBQ1as6X2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aBQq4PmnAU1oJG1xev4NXF
          claim_id: c_HrYgvRigzkYGqzf2Jwqv1a
          source_id: s_MWfLgS3dLWXi3Pn5u5isr9
          stance: supports
          locator: CBDB:637977
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637977）
          source: &a1
            id: s_MWfLgS3dLWXi3Pn5u5isr9
            source_type: api_record
            title: 中国历代人物传记资料库：王應和（CBDB 637977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637977&o=json
            external_identifier: CBDB:637977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5eth1k3S7AoPk5d5v7Z1oH
        subject_person_id: p_CW4yrDyvEh47cJBQ1as6X2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應和，清人物。籍贯西華，入仕監生，曾任知州。（中国历代人物传记资料库 CBDB 637977）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vYc-znqitAsq51-bKVf7rx
          claim_id: c_5eth1k3S7AoPk5d5v7Z1oH
          source_id: s_MWfLgS3dLWXi3Pn5u5isr9
          stance: supports
          locator: CBDB:637977
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

# 王應和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應和 | accepted |
| bio.summary | 王應和，清人物。籍贯西華，入仕監生，曾任知州。（中国历代人物传记资料库 CBDB 637977） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應和（CBDB 637977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637977&o=json)
