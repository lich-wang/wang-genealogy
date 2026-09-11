---
schema: wang-person/v1
id: p_jxjmVZWB7LhBSteooLeSqv
status: active
merged_into: null
display_name: 王扆
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8WQ9AEV3UTghLKtFGri9J3
        subject_person_id: p_jxjmVZWB7LhBSteooLeSqv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王扆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kUB83KJgvnN4eYSnCUigak
          claim_id: c_8WQ9AEV3UTghLKtFGri9J3
          source_id: s_Fr5PGSEvSp8jjg7n3C9CpT
          stance: supports
          locator: CBDB:21943
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（21943）
          source: &a1
            id: s_Fr5PGSEvSp8jjg7n3C9CpT
            source_type: api_record
            title: 中国历代人物传记资料库：王扆（CBDB 21943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21943&o=json
            external_identifier: CBDB:21943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.772Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CzSQ27cj5bZNX5a63covAR
        subject_person_id: p_jxjmVZWB7LhBSteooLeSqv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王扆，宋人物。籍贯蕭山，身份为鄉里長者。（中国历代人物传记资料库 CBDB 21943）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FjxzuOBwWmiu12etCL2U9T
          claim_id: c_CzSQ27cj5bZNX5a63covAR
          source_id: s_Fr5PGSEvSp8jjg7n3C9CpT
          stance: supports
          locator: CBDB:21943
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BshHK-omSJKn4fYFpWtEhu
        subject_person_id: p_VKXQSeMipFooFNMW87DRch
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jxjmVZWB7LhBSteooLeSqv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lte7KIfm5k77BBQdzKWVaU
          claim_id: c_BshHK-omSJKn4fYFpWtEhu
          source_id: s_Fr5PGSEvSp8jjg7n3C9CpT
          stance: supports
          locator: CBDB 双向互证（父 王安 ⇄ 子 王扆）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_VKXQSeMipFooFNMW87DRch
        status: active
        display_name: 王安
        merged_into_person_id: null
  children:
    - claim:
        id: c_MYChcdPr9ESuvKMhq8QblZ
        subject_person_id: p_jxjmVZWB7LhBSteooLeSqv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AMbaQM9EK5BK8yLoMBSNbp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pA-Cy5dcT2uTBi_XJe7GRI
          claim_id: c_MYChcdPr9ESuvKMhq8QblZ
          source_id: s_mmvgM4Bmzg1ukVoVqoA8s7
          stance: supports
          locator: CBDB 双向互证（父 王扆 ⇄ 子 王絲）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_mmvgM4Bmzg1ukVoVqoA8s7
            source_type: api_record
            title: 中国历代人物传记资料库：王絲（CBDB 1879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1879&o=json
            external_identifier: CBDB:1879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.369Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AMbaQM9EK5BK8yLoMBSNbp
        status: active
        display_name: 王絲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王扆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王扆 | accepted |
| bio.summary | 王扆，宋人物。籍贯蕭山，身份为鄉里長者。（中国历代人物传记资料库 CBDB 21943） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VKXQSeMipFooFNMW87DRch | 王安 | accepted |
| children | p_AMbaQM9EK5BK8yLoMBSNbp | 王絲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王絲（CBDB 1879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1879&o=json)
- [中国历代人物传记资料库：王扆（CBDB 21943）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21943&o=json)
