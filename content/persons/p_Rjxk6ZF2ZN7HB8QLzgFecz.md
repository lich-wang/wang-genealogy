---
schema: wang-person/v1
id: p_Rjxk6ZF2ZN7HB8QLzgFecz
status: active
merged_into: null
display_name: 王廷瑄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YqWNF1Ey66ny8c61nDQVQ5
        subject_person_id: p_Rjxk6ZF2ZN7HB8QLzgFecz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷瑄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GVTqsm749B36chdotbky6Q
          claim_id: c_YqWNF1Ey66ny8c61nDQVQ5
          source_id: s_wVGHy34aFFKgVsMmB5GX8z
          stance: supports
          locator: CBDB:547201
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（547201）
          source: &a1
            id: s_wVGHy34aFFKgVsMmB5GX8z
            source_type: api_record
            title: 中国历代人物传记资料库：王廷瑄（CBDB 547201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=547201&o=json
            external_identifier: CBDB:547201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.531Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UkgLXE1V8MDs1t3JrXvKVs
        subject_person_id: p_Rjxk6ZF2ZN7HB8QLzgFecz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷瑄，宋人物。籍贯蓬州，入仕進士。（中国历代人物传记资料库 CBDB 547201）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tkHLidr7_ygXOH-fB8lo94
          claim_id: c_UkgLXE1V8MDs1t3JrXvKVs
          source_id: s_wVGHy34aFFKgVsMmB5GX8z
          stance: supports
          locator: CBDB:547201
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

# 王廷瑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷瑄 | accepted |
| bio.summary | 王廷瑄，宋人物。籍贯蓬州，入仕進士。（中国历代人物传记资料库 CBDB 547201） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷瑄（CBDB 547201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=547201&o=json)
