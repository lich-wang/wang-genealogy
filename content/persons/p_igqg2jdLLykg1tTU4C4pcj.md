---
schema: wang-person/v1
id: p_igqg2jdLLykg1tTU4C4pcj
status: active
merged_into: null
display_name: 王繼嚴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ETYNMY1BRWPQPNgrm74Dg5
        subject_person_id: p_igqg2jdLLykg1tTU4C4pcj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼嚴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C9ba264GY2P2uxzR6LScG6
          claim_id: c_ETYNMY1BRWPQPNgrm74Dg5
          source_id: s_kRX787vN7nYev1TeqfikcN
          stance: supports
          locator: CBDB:481097
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（481097）
          source: &a1
            id: s_kRX787vN7nYev1TeqfikcN
            source_type: api_record
            title: 中国历代人物传记资料库：王繼嚴（CBDB 481097）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=481097&o=json
            external_identifier: CBDB:481097
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.675Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jrmuioKbX1AvRavzgKRzTb
        subject_person_id: p_igqg2jdLLykg1tTU4C4pcj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼嚴，史料所见人物。本项目依据《中国历代人物传记资料库：王繼嚴（CBDB 481097）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NXbRZAoDrdHXBnAh7UktsT
          claim_id: c_jrmuioKbX1AvRavzgKRzTb
          source_id: s_kRX787vN7nYev1TeqfikcN
          stance: supports
          locator: CBDB:481097
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

# 王繼嚴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼嚴 | accepted |
| bio.summary | 王繼嚴，史料所见人物。本项目依据《中国历代人物传记资料库：王繼嚴（CBDB 481097）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼嚴（CBDB 481097）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=481097&o=json)
