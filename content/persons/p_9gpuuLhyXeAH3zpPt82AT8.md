---
schema: wang-person/v1
id: p_9gpuuLhyXeAH3zpPt82AT8
status: active
merged_into: null
display_name: 王巨仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9MDugaJekR8hf8QJfAL4h9
        subject_person_id: p_9gpuuLhyXeAH3zpPt82AT8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巨仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h8i4QmzwFQERDNu25xhBTX
          claim_id: c_9MDugaJekR8hf8QJfAL4h9
          source_id: s_whHaQLqVNUB55qDEfqyNCV
          stance: supports
          locator: CBDB:91977
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（91977）
          source: &a1
            id: s_whHaQLqVNUB55qDEfqyNCV
            source_type: api_record
            title: 中国历代人物传记资料库：王巨仁（CBDB 91977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91977&o=json
            external_identifier: CBDB:91977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.062Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZBU6e6LLCr5icCNWDrgH3k
        subject_person_id: p_9gpuuLhyXeAH3zpPt82AT8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巨仁，唐人物。籍贯新羅，身份为詩人。（中国历代人物传记资料库 CBDB 91977）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lIOH0Qs4_PUNbSLgUErbV-
          claim_id: c_ZBU6e6LLCr5icCNWDrgH3k
          source_id: s_whHaQLqVNUB55qDEfqyNCV
          stance: supports
          locator: CBDB:91977
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

# 王巨仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王巨仁 | accepted |
| bio.summary | 王巨仁，唐人物。籍贯新羅，身份为詩人。（中国历代人物传记资料库 CBDB 91977） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王巨仁（CBDB 91977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91977&o=json)
