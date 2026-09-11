---
schema: wang-person/v1
id: p_hPAxmkHCQdtVPXyRt4UxC6
status: active
merged_into: null
display_name: 王慶麟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ShAxMtBDzAucfNT5AWgmnq
        subject_person_id: p_hPAxmkHCQdtVPXyRt4UxC6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qecwQGZ6mCXbdssBAfapod
          claim_id: c_ShAxMtBDzAucfNT5AWgmnq
          source_id: s_uvLZKN8wdAj12dU3NMgupS
          stance: supports
          locator: CBDB:338296
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（338296）
          source: &a1
            id: s_uvLZKN8wdAj12dU3NMgupS
            source_type: api_record
            title: 中国历代人物传记资料库：王慶麟（CBDB 338296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338296&o=json
            external_identifier: CBDB:338296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.553Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RaaAQD23MuqM5W9LEFdvGX
        subject_person_id: p_hPAxmkHCQdtVPXyRt4UxC6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1787年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k7KPuaPYKvGXyHqhF9VZa6
          claim_id: c_RaaAQD23MuqM5W9LEFdvGX
          source_id: s_uvLZKN8wdAj12dU3NMgupS
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
        id: c_D2AcK3rvvpvCwJBazen6sh
        subject_person_id: p_hPAxmkHCQdtVPXyRt4UxC6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶麟（生于1787年），史料所见人物。本项目依据《中国历代人物传记资料库：王慶麟（CBDB 338296）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_urustCR9XjZbakAzR47L1p
          claim_id: c_D2AcK3rvvpvCwJBazen6sh
          source_id: s_uvLZKN8wdAj12dU3NMgupS
          stance: supports
          locator: CBDB:338296
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

# 王慶麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶麟 | accepted |
| birth.date | 1787年 | accepted |
| bio.summary | 王慶麟（生于1787年），史料所见人物。本项目依据《中国历代人物传记资料库：王慶麟（CBDB 338296）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶麟（CBDB 338296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338296&o=json)
