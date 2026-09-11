---
schema: wang-person/v1
id: p_KVC93L1K4HTAadJHXfYQci
status: active
merged_into: null
display_name: 王起宗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ze4suyDtbPm9ftnPLrATpu
        subject_person_id: p_KVC93L1K4HTAadJHXfYQci
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K4ovq46cRWeTLQCSAd4KLq
          claim_id: c_ze4suyDtbPm9ftnPLrATpu
          source_id: s_xLQTPArH7WNgmSCxT9g2qy
          stance: supports
          locator: CBDB:469862
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（469862）
          source: &a1
            id: s_xLQTPArH7WNgmSCxT9g2qy
            source_type: api_record
            title: 中国历代人物传记资料库：王起宗（CBDB 469862）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=469862&o=json
            external_identifier: CBDB:469862
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.131Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S5sLGPQnpND65CH8Ej2MD4
        subject_person_id: p_KVC93L1K4HTAadJHXfYQci
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起宗，史料所见人物。本项目依据《中国历代人物传记资料库：王起宗（CBDB 469862）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LqgWtgRSoUg0nHkeLGM3Hp
          claim_id: c_S5sLGPQnpND65CH8Ej2MD4
          source_id: s_xLQTPArH7WNgmSCxT9g2qy
          stance: supports
          locator: CBDB:469862
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

# 王起宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王起宗 | accepted |
| bio.summary | 王起宗，史料所见人物。本项目依据《中国历代人物传记资料库：王起宗（CBDB 469862）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王起宗（CBDB 469862）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=469862&o=json)
