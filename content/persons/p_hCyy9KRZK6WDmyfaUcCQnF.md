---
schema: wang-person/v1
id: p_hCyy9KRZK6WDmyfaUcCQnF
status: active
merged_into: null
display_name: 王鄂芳
cbdb_id: 517026
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T9Yr4pH2R9PAZYFPi24XrK
        subject_person_id: p_hCyy9KRZK6WDmyfaUcCQnF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鄂芳，史料所见人物。本项目依据《中国历代人物传记资料库：王鄂芳（CBDB 517026）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_LILlIZO6JBrBH1NqlyQrfp
          claim_id: c_T9Yr4pH2R9PAZYFPi24XrK
          source_id: s_379KAnVBAk8bMbK85TkbFz
          stance: supports
          locator: CBDB:517026
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_379KAnVBAk8bMbK85TkbFz
            source_type: api_record
            title: 中国历代人物传记资料库：王鄂芳（CBDB 517026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517026&o=json
            external_identifier: CBDB:517026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vySkwKwan47hf6TcNE7JLU
        subject_person_id: p_hCyy9KRZK6WDmyfaUcCQnF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鄂芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_S2PdXjE9GxtG2g44JBghrK
          claim_id: c_vySkwKwan47hf6TcNE7JLU
          source_id: s_379KAnVBAk8bMbK85TkbFz
          stance: supports
          locator: CBDB:517026
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Bj6E_ha1FRU2oISCxvRmg_
        subject_person_id: p_KnCP9KH6TPFyDP6s1V9fGB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hCyy9KRZK6WDmyfaUcCQnF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xzoKFnnviSmnsFkvscmJeT
          claim_id: c_Bj6E_ha1FRU2oISCxvRmg_
          source_id: s_379KAnVBAk8bMbK85TkbFz
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1683：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_379KAnVBAk8bMbK85TkbFz
            source_type: api_record
            title: 中国历代人物传记资料库：王鄂芳（CBDB 517026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517026&o=json
            external_identifier: CBDB:517026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_KnCP9KH6TPFyDP6s1V9fGB
        status: active
        display_name: 王舒綸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鄂芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鄂芳，史料所见人物。本项目依据《中国历代人物传记资料库：王鄂芳（CBDB 517026）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王鄂芳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KnCP9KH6TPFyDP6s1V9fGB | 王舒綸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鄂芳（CBDB 517026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517026&o=json)
