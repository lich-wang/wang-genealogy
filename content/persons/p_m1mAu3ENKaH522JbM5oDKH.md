---
schema: wang-person/v1
id: p_m1mAu3ENKaH522JbM5oDKH
status: active
merged_into: null
display_name: 王堯輔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hgDa2dKJsvnky1AsNEcAK6
        subject_person_id: p_m1mAu3ENKaH522JbM5oDKH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LeSC7wncE1u7nUfKk9AKKe
          claim_id: c_hgDa2dKJsvnky1AsNEcAK6
          source_id: s_E5EFAH71VwVKQh6DiLVxNR
          stance: supports
          locator: CBDB:414153
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414153）
          source: &a1
            id: s_E5EFAH71VwVKQh6DiLVxNR
            source_type: api_record
            title: 中国历代人物传记资料库：王堯輔（CBDB 414153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414153&o=json
            external_identifier: CBDB:414153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bqhvY9FxHfruwHg77LRfq4
        subject_person_id: p_m1mAu3ENKaH522JbM5oDKH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯輔，史料所见人物。本项目依据《中国历代人物传记资料库：王堯輔（CBDB 414153）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FxGOY95TwMRQHGv178CDvs
          claim_id: c_bqhvY9FxHfruwHg77LRfq4
          source_id: s_E5EFAH71VwVKQh6DiLVxNR
          stance: supports
          locator: CBDB:414153
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王堯輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堯輔 | accepted |
| bio.summary | 王堯輔，史料所见人物。本项目依据《中国历代人物传记资料库：王堯輔（CBDB 414153）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王堯輔（CBDB 414153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414153&o=json)
