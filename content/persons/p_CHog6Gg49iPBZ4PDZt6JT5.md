---
schema: wang-person/v1
id: p_CHog6Gg49iPBZ4PDZt6JT5
status: active
merged_into: null
display_name: 王之龍
cbdb_id: 216060
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FQfaiSEo6m5CzYgZyfvC3h
        subject_person_id: p_CHog6Gg49iPBZ4PDZt6JT5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之龍，史料所见人物。本项目依据《中国历代人物传记资料库：王之龍（CBDB 216060）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_D3TfzlJkEKPaduVJjIH2la
          claim_id: c_FQfaiSEo6m5CzYgZyfvC3h
          source_id: s_qqs8GAMKyt6BQwPQxCnuSg
          stance: supports
          locator: CBDB:216060
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_qqs8GAMKyt6BQwPQxCnuSg
            source_type: api_record
            title: 中国历代人物传记资料库：王之龍（CBDB 216060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216060&o=json
            external_identifier: CBDB:216060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UZad292znK9bFDDDUMAiV9
        subject_person_id: p_CHog6Gg49iPBZ4PDZt6JT5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WAPxaVXmf8XvkzkcHFSRFo
          claim_id: c_UZad292znK9bFDDDUMAiV9
          source_id: s_qqs8GAMKyt6BQwPQxCnuSg
          stance: supports
          locator: CBDB:216060
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
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

# 王之龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王之龍，史料所见人物。本项目依据《中国历代人物传记资料库：王之龍（CBDB 216060）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王之龍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之龍（CBDB 216060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216060&o=json)
