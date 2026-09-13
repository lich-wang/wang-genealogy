---
schema: wang-person/v1
id: p_tmM1HNh8e8uEL3ukuTMuLK
status: active
merged_into: null
display_name: 王追麒
cbdb_id: 71896
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JZV4bCmjH2ZTjkUYFTQufP
        subject_person_id: p_tmM1HNh8e8uEL3ukuTMuLK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王追麒（生于1638年），史料所见人物。本项目依据《中国历代人物传记资料库：王追麒（CBDB 71896）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_Z6kbQeTHtUH83G3J0caF-1
          claim_id: c_JZV4bCmjH2ZTjkUYFTQufP
          source_id: s_MBAzDPPmS4mhMm9n66obQj
          stance: supports
          locator: CBDB:71896
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_MBAzDPPmS4mhMm9n66obQj
            source_type: api_record
            title: 中国历代人物传记资料库：王追麒（CBDB 71896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71896&o=json
            external_identifier: CBDB:71896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TTSHQu86CDS7UFrEABJaLx
        subject_person_id: p_tmM1HNh8e8uEL3ukuTMuLK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1638年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1638-01-01
            latest: 1638-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NTbj7eTwS9hEKc4hCaAKXB
          claim_id: c_TTSHQu86CDS7UFrEABJaLx
          source_id: s_MBAzDPPmS4mhMm9n66obQj
          stance: supports
          locator: CBDB:71896
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1638
          source:
            id: s_MBAzDPPmS4mhMm9n66obQj
            source_type: api_record
            title: 中国历代人物传记资料库：王追麒（CBDB 71896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71896&o=json
            external_identifier: CBDB:71896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_R9iA5A1CrESeZyec1t2Ne1
        subject_person_id: p_tmM1HNh8e8uEL3ukuTMuLK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王追麒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ub4pyFxi3DLLjx5iM3ptgv
          claim_id: c_R9iA5A1CrESeZyec1t2Ne1
          source_id: s_MBAzDPPmS4mhMm9n66obQj
          stance: supports
          locator: CBDB:71896
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1638
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

# 王追麒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王追麒（生于1638年），史料所见人物。本项目依据《中国历代人物传记资料库：王追麒（CBDB 71896）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1638年 | accepted |
| name.primary | 王追麒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王追麒（CBDB 71896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71896&o=json)
