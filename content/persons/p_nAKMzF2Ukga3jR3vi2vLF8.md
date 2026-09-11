---
schema: wang-person/v1
id: p_nAKMzF2Ukga3jR3vi2vLF8
status: active
merged_into: null
display_name: 王哲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RYAZy6MeqeSym3Brbauz8v
        subject_person_id: p_nAKMzF2Ukga3jR3vi2vLF8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王哲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gnSZmAVQgsAYczbmPPNEs2
          claim_id: c_RYAZy6MeqeSym3Brbauz8v
          source_id: s_h2fwkLZFScFGG5g1D71fV4
          stance: supports
          locator: CBDB:190799
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190799）
          source: &a1
            id: s_h2fwkLZFScFGG5g1D71fV4
            source_type: api_record
            title: 中国历代人物传记资料库：王哲（CBDB 190799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190799&o=json
            external_identifier: CBDB:190799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.337Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_67gHxfgz18spdgF61h62JJ
        subject_person_id: p_nAKMzF2Ukga3jR3vi2vLF8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 858年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2u9GqASqDQJYQj35NT5gjE
          claim_id: c_67gHxfgz18spdgF61h62JJ
          source_id: s_h2fwkLZFScFGG5g1D71fV4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5GXm1FCNYDEQvgZ8edTM2V
        subject_person_id: p_nAKMzF2Ukga3jR3vi2vLF8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王哲（卒于858年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 190799）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UssWbCYTPD0Fo9Ca7-x45U
          claim_id: c_5GXm1FCNYDEQvgZ8edTM2V
          source_id: s_h2fwkLZFScFGG5g1D71fV4
          stance: supports
          locator: CBDB:190799
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EjxPX51rc4p4t1nC2lsVGe
        subject_person_id: p_HeGfMzKQ5r77Gp7MCsAkL6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nAKMzF2Ukga3jR3vi2vLF8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XY_C8k4U0p_TKlO5pLKWbO
          claim_id: c_EjxPX51rc4p4t1nC2lsVGe
          source_id: s_h2fwkLZFScFGG5g1D71fV4
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HeGfMzKQ5r77Gp7MCsAkL6
        status: active
        display_name: 王仲舒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王哲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王哲 | accepted |
| death.date | 858年 | accepted |
| bio.summary | 王哲（卒于858年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 190799） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HeGfMzKQ5r77Gp7MCsAkL6 | 王仲舒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王哲（CBDB 190799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190799&o=json)
