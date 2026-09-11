---
schema: wang-person/v1
id: p_PrYAb7ppqSgK6yZuXY6brg
status: active
merged_into: null
display_name: 王撫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ebpbw4GCdoivdnzY6AoL84
        subject_person_id: p_PrYAb7ppqSgK6yZuXY6brg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BL38FKhBZ3QzqpbAF7s5H2
          claim_id: c_ebpbw4GCdoivdnzY6AoL84
          source_id: s_d78DMzxRnD4iwyQ532yucZ
          stance: supports
          locator: CBDB:545382
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（545382）
          source: &a1
            id: s_d78DMzxRnD4iwyQ532yucZ
            source_type: api_record
            title: 中国历代人物传记资料库：王撫（CBDB 545382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545382&o=json
            external_identifier: CBDB:545382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.520Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QhTrYsPFdziuS7cqMDGE8X
        subject_person_id: p_PrYAb7ppqSgK6yZuXY6brg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撫，宋人物。籍贯達州，入仕進士。（中国历代人物传记资料库 CBDB 545382）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gXetv86MBU3o-AGtb4lBHr
          claim_id: c_QhTrYsPFdziuS7cqMDGE8X
          source_id: s_d78DMzxRnD4iwyQ532yucZ
          stance: supports
          locator: CBDB:545382
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

# 王撫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王撫 | accepted |
| bio.summary | 王撫，宋人物。籍贯達州，入仕進士。（中国历代人物传记资料库 CBDB 545382） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王撫（CBDB 545382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545382&o=json)
