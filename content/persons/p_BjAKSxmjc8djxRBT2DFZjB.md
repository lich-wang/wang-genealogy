---
schema: wang-person/v1
id: p_BjAKSxmjc8djxRBT2DFZjB
status: active
merged_into: null
display_name: 王萬裕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ekT9J5xJAp9NDNjvQ1ro4d
        subject_person_id: p_BjAKSxmjc8djxRBT2DFZjB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬裕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TU8zSPG514poAV2G8LCD3g
          claim_id: c_ekT9J5xJAp9NDNjvQ1ro4d
          source_id: s_NR7ipkWwDRD9CkSCSNbUZq
          stance: supports
          locator: CBDB:36117
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（36117）
          source: &a1
            id: s_NR7ipkWwDRD9CkSCSNbUZq
            source_type: api_record
            title: 中国历代人物传记资料库：王萬裕（CBDB 36117）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36117&o=json
            external_identifier: CBDB:36117
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.165Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4Yf3ux9AjHGQf8XyV1WBM9
        subject_person_id: p_BjAKSxmjc8djxRBT2DFZjB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬裕，宋人物。籍贯德安。（中国历代人物传记资料库 CBDB 36117）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t7NtfGjyTZBubwSS9t1fMz
          claim_id: c_4Yf3ux9AjHGQf8XyV1WBM9
          source_id: s_NR7ipkWwDRD9CkSCSNbUZq
          stance: supports
          locator: CBDB:36117
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

# 王萬裕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬裕 | accepted |
| bio.summary | 王萬裕，宋人物。籍贯德安。（中国历代人物传记资料库 CBDB 36117） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬裕（CBDB 36117）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36117&o=json)
