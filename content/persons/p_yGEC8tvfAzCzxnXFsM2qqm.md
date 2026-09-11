---
schema: wang-person/v1
id: p_yGEC8tvfAzCzxnXFsM2qqm
status: active
merged_into: null
display_name: 王瑜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CAXwRtBwgKeLLNCfJ3mJNY
        subject_person_id: p_yGEC8tvfAzCzxnXFsM2qqm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pH6gt5uevmz8WC131xNQL9
          claim_id: c_CAXwRtBwgKeLLNCfJ3mJNY
          source_id: s_r2Xzn19yvN33iYm76UBKA1
          stance: supports
          locator: CBDB:639426
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639426）
          source: &a1
            id: s_r2Xzn19yvN33iYm76UBKA1
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 639426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639426&o=json
            external_identifier: CBDB:639426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ve6pfq2zBEbJTFsgh7MgMB
        subject_person_id: p_yGEC8tvfAzCzxnXFsM2qqm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑜，清人物。籍贯海康，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639426）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bLnp6hzox1zIHdoCd24HaI
          claim_id: c_Ve6pfq2zBEbJTFsgh7MgMB
          source_id: s_r2Xzn19yvN33iYm76UBKA1
          stance: supports
          locator: CBDB:639426
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

# 王瑜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑜 | accepted |
| bio.summary | 王瑜，清人物。籍贯海康，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639426） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑜（CBDB 639426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639426&o=json)
