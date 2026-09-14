---
schema: wang-person/v1
id: p_FbJWivDTmB4C48oVuqnyWX
status: active
merged_into: null
display_name: 王堦
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b4UKZHQtegxnqKWVvKMsqo
        subject_person_id: p_FbJWivDTmB4C48oVuqnyWX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vB63Xn37akRUKey8MZhFRU
          claim_id: c_b4UKZHQtegxnqKWVvKMsqo
          source_id: s_GCLQHCBX98MHgbHt8GMNaD
          stance: supports
          locator: CBDB:236480
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236480）
          source: &a1
            id: s_GCLQHCBX98MHgbHt8GMNaD
            source_type: api_record
            title: 中国历代人物传记资料库：王堦（CBDB 236480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236480&o=json
            external_identifier: CBDB:236480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.785Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p8S593rFNT8yftB9EMLJqU
        subject_person_id: p_FbJWivDTmB4C48oVuqnyWX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堦，明人物。籍贯武進，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 236480）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OraCzutWw0_Ei2vLwSzGPp
          claim_id: c_p8S593rFNT8yftB9EMLJqU
          source_id: s_GCLQHCBX98MHgbHt8GMNaD
          stance: supports
          locator: CBDB:236480
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yGtEAfDqLmkb-tpuH6D_zY
        subject_person_id: p_qoAdHHLt7NBY3aQndi4h7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FbJWivDTmB4C48oVuqnyWX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p5D3Ceot25RlL_OUaVudq3
          claim_id: c_yGtEAfDqLmkb-tpuH6D_zY
          source_id: s_WuEgb8OA2UiEEBOslJQ9y4
          stance: supports
          locator: CBDB：兄弟 王念祖（207816）之父／母 王舜卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王堦 与 王念祖 为同胞（CBDB 记「弟」），王念祖 之父／母即 王堦 之父／母。
          source:
            id: s_WuEgb8OA2UiEEBOslJQ9y4
            source_type: api_record
            title: 中国历代人物传记资料库：王堦（CBDB 236480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236480&o=json
            external_identifier: CBDB:236480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qoAdHHLt7NBY3aQndi4h7A
        status: active
        display_name: 王舜卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_fZU1C2SHuLG4qVN346sViJ
        subject_person_id: p_FbJWivDTmB4C48oVuqnyWX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nwL2xVd75q361KsBtDP6KW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qml8sLDFeEsP0O35H86Til
          claim_id: c_fZU1C2SHuLG4qVN346sViJ
          source_id: s_WuEgb8OA2UiEEBOslJQ9y4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207816 王念祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WuEgb8OA2UiEEBOslJQ9y4
            source_type: api_record
            title: 中国历代人物传记资料库：王堦（CBDB 236480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236480&o=json
            external_identifier: CBDB:236480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nwL2xVd75q361KsBtDP6KW
        status: active
        display_name: 王念祖
        merged_into_person_id: null
---

# 王堦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堦 | accepted |
| bio.summary | 王堦，明人物。籍贯武進，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 236480） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qoAdHHLt7NBY3aQndi4h7A | 王舜卿 | accepted |
| other | p_nwL2xVd75q361KsBtDP6KW | 王念祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王堦（CBDB 236480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236480&o=json)
