---
schema: wang-person/v1
id: p_2iVh2dnQYp8qHcVzsHx44b
status: active
merged_into: null
display_name: 王安仁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_12KnLWDtV5P2rsbNFvgJce
        subject_person_id: p_2iVh2dnQYp8qHcVzsHx44b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k52sJE2UXowHEoiXHQcKyr
          claim_id: c_12KnLWDtV5P2rsbNFvgJce
          source_id: s_tgPMxFjgwwfqdHmDpnjkqj
          stance: supports
          locator: CBDB:22136
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22136）
          source: &a1
            id: s_tgPMxFjgwwfqdHmDpnjkqj
            source_type: api_record
            title: 中国历代人物传记资料库：王安仁（CBDB 22136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22136&o=json
            external_identifier: CBDB:22136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D6SadJc19WH6tS1RqGx3Cf
        subject_person_id: p_2iVh2dnQYp8qHcVzsHx44b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r4N4vpC1tXEoxTGnSEYq3i
          claim_id: c_D6SadJc19WH6tS1RqGx3Cf
          source_id: s_tgPMxFjgwwfqdHmDpnjkqj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nqtVMp3Zpcszs72GcA3paO
        subject_person_id: p_4mzs9UPxrzKfaGnSzQz2UL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2iVh2dnQYp8qHcVzsHx44b
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hoplhCUwr6nNE0MtYJytyt
          claim_id: c_nqtVMp3Zpcszs72GcA3paO
          source_id: s_tgPMxFjgwwfqdHmDpnjkqj
          stance: supports
          locator: CBDB 双向互证（父 王琚 ⇄ 子 王安仁）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_4mzs9UPxrzKfaGnSzQz2UL
        status: active
        display_name: 王琚
        merged_into_person_id: null
  children:
    - claim:
        id: c_DXMY2dZzq0onYHE5P97MnU
        subject_person_id: p_2iVh2dnQYp8qHcVzsHx44b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R8GNfiAEFUGPFE7VBAqAUP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2-wS5RLyCeBVU1j91yep77
          claim_id: c_DXMY2dZzq0onYHE5P97MnU
          source_id: s_tgPMxFjgwwfqdHmDpnjkqj
          stance: supports
          locator: CBDB 双向互证（子 王繹 ⇄ 父 王安仁）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_R8GNfiAEFUGPFE7VBAqAUP
        status: active
        display_name: 王繹
        merged_into_person_id: null
    - claim:
        id: c_YG_HBE6Hqhvjc_qc9iI0_y
        subject_person_id: p_2iVh2dnQYp8qHcVzsHx44b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6cU9fnGBqi4srFwLZdWmQC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_flOSmb6y4AaZQ3wIDe1iMx
          claim_id: c_YG_HBE6Hqhvjc_qc9iI0_y
          source_id: s_tgPMxFjgwwfqdHmDpnjkqj
          stance: supports
          locator: CBDB 双向互证（子 王居中 ⇄ 父 王安仁）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_6cU9fnGBqi4srFwLZdWmQC
        status: active
        display_name: 王居中
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王安仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安仁 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4mzs9UPxrzKfaGnSzQz2UL | 王琚 | accepted |
| children | p_R8GNfiAEFUGPFE7VBAqAUP | 王繹 | accepted |
| children | p_6cU9fnGBqi4srFwLZdWmQC | 王居中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安仁（CBDB 22136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22136&o=json)
