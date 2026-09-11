---
schema: wang-person/v1
id: p_NDtFeGyzfV1d88KPnApDT1
status: active
merged_into: null
display_name: 王淑増
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P1YDnMWsfr3SUcxR8QDqXe
        subject_person_id: p_NDtFeGyzfV1d88KPnApDT1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑増
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EofPdgAddhmLuH248UMC6E
          claim_id: c_P1YDnMWsfr3SUcxR8QDqXe
          source_id: s_ZgpdzbgL84Qtu869QTuWrX
          stance: supports
          locator: CBDB:568763
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568763）
          source: &a1
            id: s_ZgpdzbgL84Qtu869QTuWrX
            source_type: api_record
            title: 中国历代人物传记资料库：王淑増（CBDB 568763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568763&o=json
            external_identifier: CBDB:568763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.620Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YFBA1HTqNXeUK1BZwptUii
        subject_person_id: p_NDtFeGyzfV1d88KPnApDT1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑増，史料所见人物。本项目依据《中国历代人物传记资料库：王淑増（CBDB 568763）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Kzwr-k_hVVb2raSH_FexR6
          claim_id: c_YFBA1HTqNXeUK1BZwptUii
          source_id: s_ZgpdzbgL84Qtu869QTuWrX
          stance: supports
          locator: CBDB:568763
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

# 王淑増

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淑増 | accepted |
| bio.summary | 王淑増，史料所见人物。本项目依据《中国历代人物传记资料库：王淑増（CBDB 568763）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淑増（CBDB 568763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568763&o=json)
