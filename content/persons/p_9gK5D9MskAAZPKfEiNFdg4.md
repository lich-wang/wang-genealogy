---
schema: wang-person/v1
id: p_9gK5D9MskAAZPKfEiNFdg4
status: active
merged_into: null
display_name: 王以潔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g2a34veVzEs7LJQ5AHzY16
        subject_person_id: p_9gK5D9MskAAZPKfEiNFdg4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以潔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HR5N5cpLWdznzSDcuS3K92
          claim_id: c_g2a34veVzEs7LJQ5AHzY16
          source_id: s_VbShuMCWBAh6EpyP4t57iN
          stance: supports
          locator: CBDB:71440
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71440）
          source: &a1
            id: s_VbShuMCWBAh6EpyP4t57iN
            source_type: api_record
            title: 中国历代人物传记资料库：王以潔（CBDB 71440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71440&o=json
            external_identifier: CBDB:71440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.673Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ajsqwJYS1ZAioZt83ag941
        subject_person_id: p_9gK5D9MskAAZPKfEiNFdg4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1793年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qQqPy4Cb2cG9GSiHAmJ6re
          claim_id: c_ajsqwJYS1ZAioZt83ag941
          source_id: s_VbShuMCWBAh6EpyP4t57iN
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
        id: c_1WaNjbMvy78YPksG7CfarR
        subject_person_id: p_9gK5D9MskAAZPKfEiNFdg4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以潔（生于1793年），清人物。籍贯衡水。（中国历代人物传记资料库 CBDB 71440）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4rgZmbHDs1YJ4vqWerwWSr
          claim_id: c_1WaNjbMvy78YPksG7CfarR
          source_id: s_VbShuMCWBAh6EpyP4t57iN
          stance: supports
          locator: CBDB:71440
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

# 王以潔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以潔 | accepted |
| birth.date | 1793年 | accepted |
| bio.summary | 王以潔（生于1793年），清人物。籍贯衡水。（中国历代人物传记资料库 CBDB 71440） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王以潔（CBDB 71440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71440&o=json)
