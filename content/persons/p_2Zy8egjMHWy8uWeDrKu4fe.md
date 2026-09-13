---
schema: wang-person/v1
id: p_2Zy8egjMHWy8uWeDrKu4fe
status: active
merged_into: null
display_name: 王銘詔
cbdb_id: 517408
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EThfeXYbXYZrow8QqtTYSa
        subject_person_id: p_2Zy8egjMHWy8uWeDrKu4fe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘詔，史料所见人物。本项目依据《中国历代人物传记资料库：王銘詔（CBDB 517408）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_l-IQy5SpHYtS3TZ0g5LWqe
          claim_id: c_EThfeXYbXYZrow8QqtTYSa
          source_id: s_TWBCGSaahkw9VskMVsHEo2
          stance: supports
          locator: CBDB:517408
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_TWBCGSaahkw9VskMVsHEo2
            source_type: api_record
            title: 中国历代人物传记资料库：王銘詔（CBDB 517408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517408&o=json
            external_identifier: CBDB:517408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZM8JMLRSxYbgrJUFf2nmms
        subject_person_id: p_2Zy8egjMHWy8uWeDrKu4fe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PXLcK54L6M4cg1MP3S81Ga
          claim_id: c_ZM8JMLRSxYbgrJUFf2nmms
          source_id: s_TWBCGSaahkw9VskMVsHEo2
          stance: supports
          locator: CBDB:517408
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ehYC88No5d5TntPryHFJPG
        subject_person_id: p_6yEQbCpPbZgLz7LGDngBr9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Zy8egjMHWy8uWeDrKu4fe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3AeGY7JUjAXeRhYJM2dn3S
          claim_id: c_ehYC88No5d5TntPryHFJPG
          source_id: s_FU1VmgaFchy2vPp6w3C66B
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1870：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FU1VmgaFchy2vPp6w3C66B
            source_type: api_record
            title: 中国历代人物传记资料库：王茂蔭（CBDB 58609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58609&o=json
            external_identifier: CBDB:58609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.824Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6yEQbCpPbZgLz7LGDngBr9
        status: active
        display_name: 王茂蔭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王銘詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王銘詔，史料所见人物。本项目依据《中国历代人物传记资料库：王銘詔（CBDB 517408）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王銘詔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6yEQbCpPbZgLz7LGDngBr9 | 王茂蔭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王茂蔭（CBDB 58609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58609&o=json)
- [中国历代人物传记资料库：王銘詔（CBDB 517408）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517408&o=json)
