---
schema: wang-person/v1
id: p_DWcGr2FTaQbdTY1MJ5Dk7e
status: active
merged_into: null
display_name: 王迺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n8izCsnp11XVwRsB9av2nj
        subject_person_id: p_DWcGr2FTaQbdTY1MJ5Dk7e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_toCFvfci5jCwwfi6c3SWhE
          claim_id: c_n8izCsnp11XVwRsB9av2nj
          source_id: s_FdZB3wA5hEnb6xv4PFcrZZ
          stance: supports
          locator: CBDB:186870
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186870）
          source: &a1
            id: s_FdZB3wA5hEnb6xv4PFcrZZ
            source_type: api_record
            title: 中国历代人物传记资料库：王迺（CBDB 186870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186870&o=json
            external_identifier: CBDB:186870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.291Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_TNbyKpHQzQXqp1gfgzTdQB
        subject_person_id: p_DWcGr2FTaQbdTY1MJ5Dk7e
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 859年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UkaogN9iohHdAxCo28kNRR
          claim_id: c_TNbyKpHQzQXqp1gfgzTdQB
          source_id: s_FdZB3wA5hEnb6xv4PFcrZZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qwJh4PcohpcXrT99D5tj8w
        subject_person_id: p_DWcGr2FTaQbdTY1MJ5Dk7e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迺（卒于859年），史料所见人物。本项目依据《中国历代人物传记资料库：王迺（CBDB 186870）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KHb7qUiaT9IJR_z4eSHsyM
          claim_id: c_qwJh4PcohpcXrT99D5tj8w
          source_id: s_FdZB3wA5hEnb6xv4PFcrZZ
          stance: supports
          locator: CBDB:186870
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

# 王迺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王迺 | accepted |
| death.date | 859年 | accepted |
| bio.summary | 王迺（卒于859年），史料所见人物。本项目依据《中国历代人物传记资料库：王迺（CBDB 186870）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王迺（CBDB 186870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186870&o=json)
