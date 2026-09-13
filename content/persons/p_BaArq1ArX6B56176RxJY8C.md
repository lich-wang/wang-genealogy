---
schema: wang-person/v1
id: p_BaArq1ArX6B56176RxJY8C
status: active
merged_into: null
display_name: 王頌霖
cbdb_id: 71959
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GVreNUDWG8H35MptxSYYhS
        subject_person_id: p_BaArq1ArX6B56176RxJY8C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頌霖（卒于1913年），史料所见人物。本项目依据《中国历代人物传记资料库：王頌霖（CBDB 71959）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_3iiIigmIIHTxv1mb6Mi_7K
          claim_id: c_GVreNUDWG8H35MptxSYYhS
          source_id: s_nAFXy6NkQv1zhXzGBAzGRV
          stance: supports
          locator: CBDB:71959
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_nAFXy6NkQv1zhXzGBAzGRV
            source_type: api_record
            title: 中国历代人物传记资料库：王頌霖（CBDB 71959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71959&o=json
            external_identifier: CBDB:71959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:36.789Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_t2Hk5qW1bAKV58Mj8dPsqG
        subject_person_id: p_BaArq1ArX6B56176RxJY8C
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1913年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1913-01-01
            latest: 1913-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8b3F2bTpFPFmUAMg77Sxck
          claim_id: c_t2Hk5qW1bAKV58Mj8dPsqG
          source_id: s_nAFXy6NkQv1zhXzGBAzGRV
          stance: supports
          locator: CBDB:71959
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（201-300）｜历史性依据：CBDB 卒年 = 1913
          source:
            id: s_nAFXy6NkQv1zhXzGBAzGRV
            source_type: api_record
            title: 中国历代人物传记资料库：王頌霖（CBDB 71959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71959&o=json
            external_identifier: CBDB:71959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:36.789Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RQ1wX7vJzUQAE1gLZZWxLa
        subject_person_id: p_BaArq1ArX6B56176RxJY8C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頌霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8X9oU7GLRjo21SE82KQdas
          claim_id: c_RQ1wX7vJzUQAE1gLZZWxLa
          source_id: s_nAFXy6NkQv1zhXzGBAzGRV
          stance: supports
          locator: CBDB:71959
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（201-300）｜历史性依据：CBDB 卒年 = 1913
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

# 王頌霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王頌霖（卒于1913年），史料所见人物。本项目依据《中国历代人物传记资料库：王頌霖（CBDB 71959）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1913年 | accepted |
| name.primary | 王頌霖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王頌霖（CBDB 71959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71959&o=json)
