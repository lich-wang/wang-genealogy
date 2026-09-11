---
schema: wang-person/v1
id: p_qJNLQcarJnewc4Hd2y9HAz
status: active
merged_into: null
display_name: 王衍
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vqoYdKNZH35KxSP848X8tB
        subject_person_id: p_qJNLQcarJnewc4Hd2y9HAz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x1aDsCbE8aZgN5kdCqkQQA
          claim_id: c_vqoYdKNZH35KxSP848X8tB
          source_id: s_zYhfRk7DbfsxzZRa1KRQ7e
          stance: supports
          locator: CBDB:135461
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（135461）
          source: &a1
            id: s_zYhfRk7DbfsxzZRa1KRQ7e
            source_type: api_record
            title: 中国历代人物传记资料库：王衍（CBDB 135461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135461&o=json
            external_identifier: CBDB:135461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.340Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HAGzKNbH4stJDVmNB99uim
        subject_person_id: p_qJNLQcarJnewc4Hd2y9HAz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衍，史料所见人物。本项目依据《中国历代人物传记资料库：王衍（CBDB 135461）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RUSvWPagDJPh2LCDH9qy3n
          claim_id: c_HAGzKNbH4stJDVmNB99uim
          source_id: s_zYhfRk7DbfsxzZRa1KRQ7e
          stance: supports
          locator: CBDB:135461
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_8l37YgaSFUTbAwKI70BVq5
        subject_person_id: p_qJNLQcarJnewc4Hd2y9HAz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QvmpGGKpmPejSG2VgwKUAo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_svPEfwm1wFlDS2j-ho8HVv
          claim_id: c_8l37YgaSFUTbAwKI70BVq5
          source_id: s_22sDkGjqcPctnCzQ7R64Af
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3052：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_22sDkGjqcPctnCzQ7R64Af
            source_type: api_record
            title: 中国历代人物传记资料库：王惠風（CBDB 135460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135460&o=json
            external_identifier: CBDB:135460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.339Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QvmpGGKpmPejSG2VgwKUAo
        status: active
        display_name: 王惠風
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王衍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衍 | accepted |
| bio.summary | 王衍，史料所见人物。本项目依据《中国历代人物传记资料库：王衍（CBDB 135461）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_QvmpGGKpmPejSG2VgwKUAo | 王惠風 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惠風（CBDB 135460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135460&o=json)
- [中国历代人物传记资料库：王衍（CBDB 135461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135461&o=json)
