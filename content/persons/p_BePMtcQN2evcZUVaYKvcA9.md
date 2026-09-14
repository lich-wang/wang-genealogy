---
schema: wang-person/v1
id: p_BePMtcQN2evcZUVaYKvcA9
status: active
merged_into: null
display_name: 王政
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2V2FPwSkha4MJDKLGchAYs
        subject_person_id: p_BePMtcQN2evcZUVaYKvcA9
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
        - id: cs_vc29ENJFG1KJnkWv8Hx6sn
          claim_id: c_2V2FPwSkha4MJDKLGchAYs
          source_id: s_FknDeKYb1yij164Dog9GSB
          stance: supports
          locator: CBDB:297731
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297731）
          source: &a1
            id: s_FknDeKYb1yij164Dog9GSB
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 297731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297731&o=json
            external_identifier: CBDB:297731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.575Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3Hms77ojUECjAJm3uPcFhW
        subject_person_id: p_BePMtcQN2evcZUVaYKvcA9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政，明人物。嘉靖十四年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 297731）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0DQJib6gt-LWH45bRnP30i
          claim_id: c_3Hms77ojUECjAJm3uPcFhW
          source_id: s_FknDeKYb1yij164Dog9GSB
          stance: supports
          locator: CBDB:297731
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_l2_myq40W23BDRbkSv3lLf
        subject_person_id: p_BePMtcQN2evcZUVaYKvcA9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7wzTGA3qgQYcchPFctGbYw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5NsQYKD7n_yVi_iZtntoyN
          claim_id: c_l2_myq40W23BDRbkSv3lLf
          source_id: s_4xxvavE1fm4FZqLMfztadX
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百五十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4xxvavE1fm4FZqLMfztadX
            source_type: api_record
            title: 中国历代人物传记资料库：王應期（CBDB 202976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202976&o=json
            external_identifier: CBDB:202976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.768Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7wzTGA3qgQYcchPFctGbYw
        status: active
        display_name: 王應期
        merged_into_person_id: null
    - claim:
        id: c_-3xUYwdsbAPL5Vbp63qhzt
        subject_person_id: p_BePMtcQN2evcZUVaYKvcA9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HB9WE5fDPZG8PptT6L6pNS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_INSR44wOxxtS6V-QZvk6nb
          claim_id: c_-3xUYwdsbAPL5Vbp63qhzt
          source_id: s_lHvG4EBZcGafxysVNd-wQi
          stance: supports
          locator: CBDB：兄弟 王應期（202976）之父／母 王政
          quotation: null
          interpretation_note: 由兄弟关系推断：王應先 与 王應期 为同胞（CBDB 记「弟」），王應期 之父／母即 王應先 之父／母。
          source:
            id: s_lHvG4EBZcGafxysVNd-wQi
            source_type: api_record
            title: 中国历代人物传记资料库：王應先（CBDB 297736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297736&o=json
            external_identifier: CBDB:297736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HB9WE5fDPZG8PptT6L6pNS
        status: active
        display_name: 王應先
        merged_into_person_id: null
    - claim:
        id: c_R7gJSig-rnlFGx9Rf7fVdZ
        subject_person_id: p_BePMtcQN2evcZUVaYKvcA9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Yekb3EkRDsZrFnJ2hcB6GQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7u1DQW1bhF0X5qvD3VKteD
          claim_id: c_R7gJSig-rnlFGx9Rf7fVdZ
          source_id: s_N035SFgXp86G4Y_XETzHtJ
          stance: supports
          locator: CBDB：兄弟 王應期（202976）之父／母 王政
          quotation: null
          interpretation_note: 由兄弟关系推断：王應聘 与 王應期 为同胞（CBDB 记「兄」），王應期 之父／母即 王應聘 之父／母。
          source:
            id: s_N035SFgXp86G4Y_XETzHtJ
            source_type: api_record
            title: 中国历代人物传记资料库：王應聘（CBDB 297738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297738&o=json
            external_identifier: CBDB:297738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Yekb3EkRDsZrFnJ2hcB6GQ
        status: active
        display_name: 王應聘
        merged_into_person_id: null
    - claim:
        id: c_NNXtIxgImUPPity1SUVHJx
        subject_person_id: p_BePMtcQN2evcZUVaYKvcA9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mXd698gZ6rP2YtZXHSdPjn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C4c7WcI7X0QmHIwuSy77dR
          claim_id: c_NNXtIxgImUPPity1SUVHJx
          source_id: s_3-wf0XcXedPrByssMjWQaP
          stance: supports
          locator: CBDB：兄弟 王應期（202976）之父／母 王政
          quotation: null
          interpretation_note: 由兄弟关系推断：王應試 与 王應期 为同胞（CBDB 记「兄」），王應期 之父／母即 王應試 之父／母。
          source:
            id: s_3-wf0XcXedPrByssMjWQaP
            source_type: api_record
            title: 中国历代人物传记资料库：王應試（CBDB 297739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297739&o=json
            external_identifier: CBDB:297739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mXd698gZ6rP2YtZXHSdPjn
        status: active
        display_name: 王應試
        merged_into_person_id: null
    - claim:
        id: c_WAp0S4r4iUqj-bNvqtog5-
        subject_person_id: p_BePMtcQN2evcZUVaYKvcA9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mvCVBxme2Gtfam9hCphnwy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lCiuTIS2g0b829lDD_xE9U
          claim_id: c_WAp0S4r4iUqj-bNvqtog5-
          source_id: s_QDNNzsY32xtqFEYISgJSQE
          stance: supports
          locator: CBDB：兄弟 王應期（202976）之父／母 王政
          quotation: null
          interpretation_note: 由兄弟关系推断：王應詔 与 王應期 为同胞（CBDB 记「兄」），王應期 之父／母即 王應詔 之父／母。
          source:
            id: s_QDNNzsY32xtqFEYISgJSQE
            source_type: api_record
            title: 中国历代人物传记资料库：王應詔（CBDB 297737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297737&o=json
            external_identifier: CBDB:297737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mvCVBxme2Gtfam9hCphnwy
        status: active
        display_name: 王應詔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
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
| bio.summary | 王政，明人物。嘉靖十四年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 297731） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7wzTGA3qgQYcchPFctGbYw | 王應期 | accepted |
| children | p_HB9WE5fDPZG8PptT6L6pNS | 王應先 | accepted |
| children | p_Yekb3EkRDsZrFnJ2hcB6GQ | 王應聘 | accepted |
| children | p_mXd698gZ6rP2YtZXHSdPjn | 王應試 | accepted |
| children | p_mvCVBxme2Gtfam9hCphnwy | 王應詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應聘（CBDB 297738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297738&o=json)
- [中国历代人物传记资料库：王應期（CBDB 202976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202976&o=json)
- [中国历代人物传记资料库：王應試（CBDB 297739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297739&o=json)
- [中国历代人物传记资料库：王應先（CBDB 297736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297736&o=json)
- [中国历代人物传记资料库：王應詔（CBDB 297737）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297737&o=json)
- [中国历代人物传记资料库：王政（CBDB 297731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297731&o=json)
