---
schema: wang-person/v1
id: p_MaarZ214ZBKrhG7uraC6BF
status: active
merged_into: null
display_name: 王政
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_72GjKAExtNunSbx1Vip1vT
        subject_person_id: p_MaarZ214ZBKrhG7uraC6BF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xsYTN8tRGX3ArWBNMMVUpJ
          claim_id: c_72GjKAExtNunSbx1Vip1vT
          source_id: s_PW9RXYGZT6YKW8q6zCEnjJ
          stance: supports
          locator: CBDB:699409
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699409）
          source: &a1
            id: s_PW9RXYGZT6YKW8q6zCEnjJ
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 699409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699409&o=json
            external_identifier: CBDB:699409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U8P3qC3iHsft4kwAzHFABi
        subject_person_id: p_MaarZ214ZBKrhG7uraC6BF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政，史料所见人物。本项目依据《中国历代人物传记资料库：王政（CBDB 699409）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EzKTm1AZFEeTRWKPisif3N
          claim_id: c_U8P3qC3iHsft4kwAzHFABi
          source_id: s_PW9RXYGZT6YKW8q6zCEnjJ
          stance: supports
          locator: CBDB:699409
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pH96ni7oP4976Fjz8vlKzK
        subject_person_id: p_6r5VwfkrP2qbqzP6hHoNQi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MaarZ214ZBKrhG7uraC6BF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vlV-p1vpI6lWY54OEdX2nP
          claim_id: c_pH96ni7oP4976Fjz8vlKzK
          source_id: s_PW9RXYGZT6YKW8q6zCEnjJ
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，80：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6r5VwfkrP2qbqzP6hHoNQi
        status: active
        display_name: 王弁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_vRoeyKoC6WmGdqox_GTIJE
        subject_person_id: p_MaarZ214ZBKrhG7uraC6BF
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_9AfCQTsT8Ziy98dKmiF8k3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OAEsd9t1Wdi6nDRKUl6lbt
          claim_id: c_vRoeyKoC6WmGdqox_GTIJE
          source_id: s_jpv11DGM8oJTBG8iNcKD-d
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，80：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jpv11DGM8oJTBG8iNcKD-d
            source_type: api_record
            title: 中国历代人物传记资料库：馮氏(王政妻)（CBDB 699410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699410&o=json
            external_identifier: CBDB:699410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9AfCQTsT8Ziy98dKmiF8k3
        status: active
        display_name: 馮氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| bio.summary | 王政，史料所见人物。本项目依据《中国历代人物传记资料库：王政（CBDB 699409）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6r5VwfkrP2qbqzP6hHoNQi | 王弁 | accepted |
| spouses | p_9AfCQTsT8Ziy98dKmiF8k3 | 馮氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：馮氏(王政妻)（CBDB 699410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699410&o=json)
- [中国历代人物传记资料库：王政（CBDB 699409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699409&o=json)
