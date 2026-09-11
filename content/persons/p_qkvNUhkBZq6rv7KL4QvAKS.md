---
schema: wang-person/v1
id: p_qkvNUhkBZq6rv7KL4QvAKS
status: active
merged_into: null
display_name: 王國治
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mstKhy1FFWV52CThBe2cAc
        subject_person_id: p_qkvNUhkBZq6rv7KL4QvAKS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_frJCZgxj9nt2DsPLQCtLwW
          claim_id: c_mstKhy1FFWV52CThBe2cAc
          source_id: s_452N8yEoeu3GfQqw4xQ5AH
          stance: supports
          locator: CBDB:513973
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（513973）
          source: &a1
            id: s_452N8yEoeu3GfQqw4xQ5AH
            source_type: api_record
            title: 中国历代人物传记资料库：王國治（CBDB 513973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513973&o=json
            external_identifier: CBDB:513973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.301Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H4QoGkNTyLx9kwQr3G9HHz
        subject_person_id: p_qkvNUhkBZq6rv7KL4QvAKS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國治，史料所见人物。本项目依据《中国历代人物传记资料库：王國治（CBDB 513973）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_56MOI7AgffG5u8--SYD6mP
          claim_id: c_H4QoGkNTyLx9kwQr3G9HHz
          source_id: s_452N8yEoeu3GfQqw4xQ5AH
          stance: supports
          locator: CBDB:513973
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_QxMU-gGk9O3slSu3_pnV2S
        subject_person_id: p_qkvNUhkBZq6rv7KL4QvAKS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iQWkGr6G5QfVe1PjtaoR19
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FTuQKRyX0mtSITdOnMLqSP
          claim_id: c_QxMU-gGk9O3slSu3_pnV2S
          source_id: s_nc1yYpYHGX2hSnL9Q71xtL
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），186：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nc1yYpYHGX2hSnL9Q71xtL
            source_type: api_record
            title: 中国历代人物传记资料库：王弘祚（CBDB 56970）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56970&o=json
            external_identifier: CBDB:56970
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.774Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iQWkGr6G5QfVe1PjtaoR19
        status: active
        display_name: 王弘祚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王國治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國治 | accepted |
| bio.summary | 王國治，史料所见人物。本项目依据《中国历代人物传记资料库：王國治（CBDB 513973）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_iQWkGr6G5QfVe1PjtaoR19 | 王弘祚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國治（CBDB 513973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513973&o=json)
- [中国历代人物传记资料库：王弘祚（CBDB 56970）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56970&o=json)
