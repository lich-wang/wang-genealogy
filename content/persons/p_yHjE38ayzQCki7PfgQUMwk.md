---
schema: wang-person/v1
id: p_yHjE38ayzQCki7PfgQUMwk
status: active
merged_into: null
display_name: 王景熙
cbdb_id: 526736
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P2XaDAZoxCjFX6MA5s48Y9
        subject_person_id: p_yHjE38ayzQCki7PfgQUMwk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景熙，史料所见人物。本项目依据《中国历代人物传记资料库：王景熙（CBDB 526736）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_UXngEG0lN_EWll3aur76kH
          claim_id: c_P2XaDAZoxCjFX6MA5s48Y9
          source_id: s_wcgeDRnNgTGYjixvLQUxjd
          stance: supports
          locator: CBDB:526736
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_wcgeDRnNgTGYjixvLQUxjd
            source_type: api_record
            title: 中国历代人物传记资料库：王景熙（CBDB 526736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526736&o=json
            external_identifier: CBDB:526736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oTUWDY19xZbibGCk1nEomL
        subject_person_id: p_yHjE38ayzQCki7PfgQUMwk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_C5rJN8Kua1z141h7ejz1bK
          claim_id: c_oTUWDY19xZbibGCk1nEomL
          source_id: s_wcgeDRnNgTGYjixvLQUxjd
          stance: supports
          locator: CBDB:526736
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gEpXfMM0-NHaZX4z-CTCBo
        subject_person_id: p_Y3Y6HkmzixiBERDAuwhHZ6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yHjE38ayzQCki7PfgQUMwk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mkt2oNFq4xFhcxkFBvF7V1
          claim_id: c_gEpXfMM0-NHaZX4z-CTCBo
          source_id: s_ozqQVWwuJxzAFq8sSYvE1j
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12857：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ozqQVWwuJxzAFq8sSYvE1j
            source_type: api_record
            title: 中国历代人物传记资料库：王用汝（CBDB 69159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69159&o=json
            external_identifier: CBDB:69159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.132Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Y3Y6HkmzixiBERDAuwhHZ6
        status: active
        display_name: 王用汝
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王景熙，史料所见人物。本项目依据《中国历代人物传记资料库：王景熙（CBDB 526736）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王景熙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Y3Y6HkmzixiBERDAuwhHZ6 | 王用汝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景熙（CBDB 526736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526736&o=json)
- [中国历代人物传记资料库：王用汝（CBDB 69159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69159&o=json)
