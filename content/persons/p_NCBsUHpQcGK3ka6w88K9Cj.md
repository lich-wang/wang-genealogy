---
schema: wang-person/v1
id: p_NCBsUHpQcGK3ka6w88K9Cj
status: active
merged_into: null
display_name: 王靚
cbdb_id: 12121
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UFfpgAeRa5NQCA2K5gSppx
        subject_person_id: p_NCBsUHpQcGK3ka6w88K9Cj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靚，史料所见人物。本项目依据《中国历代人物传记资料库：王靚（CBDB 12121）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_rQk_Spk-L7VWaj--ajLw-V
          claim_id: c_UFfpgAeRa5NQCA2K5gSppx
          source_id: s_inCVxwAaJzRv8H8huWGdXA
          stance: supports
          locator: CBDB:12121
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_inCVxwAaJzRv8H8huWGdXA
            source_type: api_record
            title: 中国历代人物传记资料库：王靚（CBDB 12121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12121&o=json
            external_identifier: CBDB:12121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PPJeYRGGY67MhTm5J7E9hW
        subject_person_id: p_NCBsUHpQcGK3ka6w88K9Cj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ugg3sjFN8LegzamgTUXHRW
          claim_id: c_PPJeYRGGY67MhTm5J7E9hW
          source_id: s_inCVxwAaJzRv8H8huWGdXA
          stance: supports
          locator: CBDB:12121
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FO-Jl9yPkutuNR8AcvwM9x
        subject_person_id: p_hxF78b2rz2LFiMtmEUFnCz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NCBsUHpQcGK3ka6w88K9Cj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_spHq6BHuvTtD4lWMJ1NqMS
          claim_id: c_FO-Jl9yPkutuNR8AcvwM9x
          source_id: s_ab18HZ55XwEC5ZjZaiKZ3U
          stance: supports
          locator: CBDB 双向互证（子 王靚 ⇄ 父 王復）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_ab18HZ55XwEC5ZjZaiKZ3U
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 1806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1806&o=json
            external_identifier: CBDB:1806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.266Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hxF78b2rz2LFiMtmEUFnCz
        status: active
        display_name: 王復
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王靚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王靚，史料所见人物。本项目依据《中国历代人物传记资料库：王靚（CBDB 12121）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王靚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hxF78b2rz2LFiMtmEUFnCz | 王復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王復（CBDB 1806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1806&o=json)
- [中国历代人物传记资料库：王靚（CBDB 12121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12121&o=json)
