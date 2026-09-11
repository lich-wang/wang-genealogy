---
schema: wang-person/v1
id: p_JmHEnwrMzQTkh6A3x313wi
status: active
merged_into: null
display_name: 王永貴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UU6nnZNX5fcB8TPi5AF3Ar
        subject_person_id: p_JmHEnwrMzQTkh6A3x313wi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ktpixALKvaievFCjB3AtWL
          claim_id: c_UU6nnZNX5fcB8TPi5AF3Ar
          source_id: s_PdcJEKpHgXFYPxJkgn7spU
          stance: supports
          locator: CBDB:638998
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638998）
          source: &a1
            id: s_PdcJEKpHgXFYPxJkgn7spU
            source_type: api_record
            title: 中国历代人物传记资料库：王永貴（CBDB 638998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638998&o=json
            external_identifier: CBDB:638998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.809Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BzvAZV44L1y7vbSq6HkBCK
        subject_person_id: p_JmHEnwrMzQTkh6A3x313wi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永貴，清人物。籍贯安徽省，入仕行伍，曾任中軍守備。（中国历代人物传记资料库 CBDB 638998）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1vEzupiVH5fIZMMym2W7rG
          claim_id: c_BzvAZV44L1y7vbSq6HkBCK
          source_id: s_PdcJEKpHgXFYPxJkgn7spU
          stance: supports
          locator: CBDB:638998
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

# 王永貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永貴 | accepted |
| bio.summary | 王永貴，清人物。籍贯安徽省，入仕行伍，曾任中軍守備。（中国历代人物传记资料库 CBDB 638998） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永貴（CBDB 638998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638998&o=json)
