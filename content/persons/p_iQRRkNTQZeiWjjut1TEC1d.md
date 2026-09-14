---
schema: wang-person/v1
id: p_iQRRkNTQZeiWjjut1TEC1d
status: active
merged_into: null
display_name: 王泰
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tav3CDzjMzW3Ls4GHwMvd5
        subject_person_id: p_iQRRkNTQZeiWjjut1TEC1d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kKy9jnZZVUYELYw9WdXMJe
          claim_id: c_tav3CDzjMzW3Ls4GHwMvd5
          source_id: s_kJjvSg8DuexevShKS64xJL
          stance: supports
          locator: CBDB:268120
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（268120）
          source: &a1
            id: s_kJjvSg8DuexevShKS64xJL
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 268120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268120&o=json
            external_identifier: CBDB:268120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.795Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bw9YYerJE985K55S9EMjcJ
        subject_person_id: p_iQRRkNTQZeiWjjut1TEC1d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰，明人物。弘治九年進士，曾任指揮同知。（中国历代人物传记资料库 CBDB 268120）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FMMvAR_5FilDojA-BmEUeu
          claim_id: c_Bw9YYerJE985K55S9EMjcJ
          source_id: s_kJjvSg8DuexevShKS64xJL
          stance: supports
          locator: CBDB:268120
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3I7siLshbkyF7m0NrFRZcp
        subject_person_id: p_Hyw8SQGaRE528RGN3TPgxc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iQRRkNTQZeiWjjut1TEC1d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-wj1UF3ZmNOSwAc-xXCuWt
          claim_id: c_3I7siLshbkyF7m0NrFRZcp
          source_id: s_5h_GU_EPESG8MoBNiCAobg
          stance: supports
          locator: CBDB：兄弟 王春（201159）之父／母 王榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王泰 与 王春 为同胞（CBDB 记「弟」），王春 之父／母即 王泰 之父／母。
          source:
            id: s_5h_GU_EPESG8MoBNiCAobg
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 268120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268120&o=json
            external_identifier: CBDB:268120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Hyw8SQGaRE528RGN3TPgxc
        status: active
        display_name: 王榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_nDho9bpQWtUdhvPSnNKYtt
        subject_person_id: p_Cuoocx9FVbq3j8KTAiGKVC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iQRRkNTQZeiWjjut1TEC1d
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GAT8njn1GV3ifuF-ugMa4v
          claim_id: c_nDho9bpQWtUdhvPSnNKYtt
          source_id: s_5h_GU_EPESG8MoBNiCAobg
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201159 王春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5h_GU_EPESG8MoBNiCAobg
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 268120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268120&o=json
            external_identifier: CBDB:268120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Cuoocx9FVbq3j8KTAiGKVC
        status: active
        display_name: 王春
        merged_into_person_id: null
---

# 王泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泰 | accepted |
| bio.summary | 王泰，明人物。弘治九年進士，曾任指揮同知。（中国历代人物传记资料库 CBDB 268120） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Hyw8SQGaRE528RGN3TPgxc | 王榮 | accepted |
| other | p_Cuoocx9FVbq3j8KTAiGKVC | 王春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王泰（CBDB 268120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268120&o=json)
