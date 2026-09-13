---
schema: wang-person/v1
id: p_EC5fdNYXqQi6hVADLVKViv
status: active
merged_into: null
display_name: 王業隆
cbdb_id: 414884
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NMJcEQ7EL8JjjcJyh4AcTm
        subject_person_id: p_EC5fdNYXqQi6hVADLVKViv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業隆，清人物。曾任訓導。（中国历代人物传记资料库 CBDB 414884）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_xB6wtpaTQfOBjG6hpUtYPE
          claim_id: c_NMJcEQ7EL8JjjcJyh4AcTm
          source_id: s_MoEK3TSQRaXRQcV11o8V84
          stance: supports
          locator: CBDB:414884
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_MoEK3TSQRaXRQcV11o8V84
            source_type: api_record
            title: 中国历代人物传记资料库：王業隆（CBDB 414884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414884&o=json
            external_identifier: CBDB:414884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:40.762Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nZdUQfSybmhD3zzfQK67f4
        subject_person_id: p_EC5fdNYXqQi6hVADLVKViv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業隆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YGYY9oMozMC6dzf5Dy9TVc
          claim_id: c_nZdUQfSybmhD3zzfQK67f4
          source_id: s_MoEK3TSQRaXRQcV11o8V84
          stance: supports
          locator: CBDB:414884
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5801-5900）｜历史性依据：CBDB 朝代 = 清
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

# 王業隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王業隆，清人物。曾任訓導。（中国历代人物传记资料库 CBDB 414884） | accepted |
| name.primary | 王業隆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王業隆（CBDB 414884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414884&o=json)
