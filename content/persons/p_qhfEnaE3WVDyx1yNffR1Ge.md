---
schema: wang-person/v1
id: p_qhfEnaE3WVDyx1yNffR1Ge
status: active
merged_into: null
display_name: 王佩葵
cbdb_id: 342387
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XhxUW7QiZ8hT6TicBEL2dC
        subject_person_id: p_qhfEnaE3WVDyx1yNffR1Ge
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩葵，史料所见人物。本项目依据《中国历代人物传记资料库：王佩葵（CBDB 342387）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_ubejzB-BmUwd1dOqHMtdOa
          claim_id: c_XhxUW7QiZ8hT6TicBEL2dC
          source_id: s_MnRQP4RDYLXpePMucveceM
          stance: supports
          locator: CBDB:342387
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_MnRQP4RDYLXpePMucveceM
            source_type: api_record
            title: 中国历代人物传记资料库：王佩葵（CBDB 342387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342387&o=json
            external_identifier: CBDB:342387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:10.160Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y9yBAtmdQLW9c2toujxafg
        subject_person_id: p_qhfEnaE3WVDyx1yNffR1Ge
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩葵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jTHvRphKT2CmyH4HAKzhEF
          claim_id: c_Y9yBAtmdQLW9c2toujxafg
          source_id: s_MnRQP4RDYLXpePMucveceM
          stance: supports
          locator: CBDB:342387
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4201-4300）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-eu5FO68nkjmAgOChsao9D
        subject_person_id: p_eab83fhKiYdmkqRbFKa9Kk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qhfEnaE3WVDyx1yNffR1Ge
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2S9H4Fs8oF7JFjm1TlpSwe
          claim_id: c_-eu5FO68nkjmAgOChsao9D
          source_id: s_VQuitjz7w9KkjRgmPHWUPa
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160562：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VQuitjz7w9KkjRgmPHWUPa
            source_type: api_record
            title: 中国历代人物传记资料库：王應科（CBDB 551388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551388&o=json
            external_identifier: CBDB:551388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eab83fhKiYdmkqRbFKa9Kk
        status: active
        display_name: 王應科
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佩葵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王佩葵，史料所见人物。本项目依据《中国历代人物传记资料库：王佩葵（CBDB 342387）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王佩葵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eab83fhKiYdmkqRbFKa9Kk | 王應科 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佩葵（CBDB 342387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342387&o=json)
- [中国历代人物传记资料库：王應科（CBDB 551388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551388&o=json)
