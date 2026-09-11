---
schema: wang-person/v1
id: p_J9bc7BsCWz4VJALm7TdBki
status: active
merged_into: null
display_name: 王弼藩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XzeB9ct5x6YPAK4iGzqbs5
        subject_person_id: p_J9bc7BsCWz4VJALm7TdBki
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼藩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NMwNz1bLJSGuwEY7CcB5C2
          claim_id: c_XzeB9ct5x6YPAK4iGzqbs5
          source_id: s_hDedpf31gU5bjneokhxFVx
          stance: supports
          locator: CBDB:72097
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72097）
          source: &a1
            id: s_hDedpf31gU5bjneokhxFVx
            source_type: api_record
            title: 中国历代人物传记资料库：王弼藩（CBDB 72097）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72097&o=json
            external_identifier: CBDB:72097
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.991Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wHyBvuJPs6fymD5M1Adtdm
        subject_person_id: p_J9bc7BsCWz4VJALm7TdBki
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1841年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GjqSG1Jj1bzFRNMJ6y6n9A
          claim_id: c_wHyBvuJPs6fymD5M1Adtdm
          source_id: s_hDedpf31gU5bjneokhxFVx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GXaSNy73injhHVUjDKPeD1
        subject_person_id: p_J9bc7BsCWz4VJALm7TdBki
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼藩（生于1841年），清人物。籍贯盧龍。（中国历代人物传记资料库 CBDB 72097）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_adeydXWKej09QAnL_7PYO1
          claim_id: c_GXaSNy73injhHVUjDKPeD1
          source_id: s_hDedpf31gU5bjneokhxFVx
          stance: supports
          locator: CBDB:72097
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

# 王弼藩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弼藩 | accepted |
| birth.date | 1841年 | accepted |
| bio.summary | 王弼藩（生于1841年），清人物。籍贯盧龍。（中国历代人物传记资料库 CBDB 72097） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弼藩（CBDB 72097）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72097&o=json)
