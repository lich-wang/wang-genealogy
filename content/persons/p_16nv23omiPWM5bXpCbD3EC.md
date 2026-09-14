---
schema: wang-person/v1
id: p_16nv23omiPWM5bXpCbD3EC
status: active
merged_into: null
display_name: 王儒
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vMRu8BF21V7mZH74okf5MX
        subject_person_id: p_16nv23omiPWM5bXpCbD3EC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UeANeQNMJsoUDssAMSf3FQ
          claim_id: c_vMRu8BF21V7mZH74okf5MX
          source_id: s_aqLBfQMHvnd42UxRDzycyR
          stance: supports
          locator: CBDB:204801
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204801）
          source: &a1
            id: s_aqLBfQMHvnd42UxRDzycyR
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 204801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204801&o=json
            external_identifier: CBDB:204801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.839Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8XQwhWTxG4yG3H4FVjgMUk
        subject_person_id: p_16nv23omiPWM5bXpCbD3EC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1532年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qGYQvdHeBMe9aSWk4DVDTw
          claim_id: c_8XQwhWTxG4yG3H4FVjgMUk
          source_id: s_aqLBfQMHvnd42UxRDzycyR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eo4rf6rbEqrCedaWL7WKzo
        subject_person_id: p_16nv23omiPWM5bXpCbD3EC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒（生于1532年），明人物。明清進士進士，籍贯嘉興，入仕進士。（中国历代人物传记资料库 CBDB 204801）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XhsBftYEeIpoOF8fF76qCa
          claim_id: c_eo4rf6rbEqrCedaWL7WKzo
          source_id: s_aqLBfQMHvnd42UxRDzycyR
          stance: supports
          locator: CBDB:204801
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QnTtQavYrcaTDiEisXOO_8
        subject_person_id: p_m9QLtFof8trVhJCPC8QcyA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_16nv23omiPWM5bXpCbD3EC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__o0t5XjDIJkbG1YYJcn02H
          claim_id: c_QnTtQavYrcaTDiEisXOO_8
          source_id: s_aqLBfQMHvnd42UxRDzycyR
          stance: supports
          locator: 嘉靖三十八年進士登科錄，第三甲第三十三名：父王憲
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_m9QLtFof8trVhJCPC8QcyA
        status: active
        display_name: 王憲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_5mWMsWCamQ-pTnTb2_upnn
        subject_person_id: p_KwijCE3WHKKrFHTR2UVJLz
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_16nv23omiPWM5bXpCbD3EC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fQ18s3LEuL7ArS30GhhtKe
          claim_id: c_5mWMsWCamQ-pTnTb2_upnn
          source_id: s_yAEFC7L730ZMzN66KOyFTo
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第三十三名：丈夫
          quotation: null
          interpretation_note: null
          source:
            id: s_yAEFC7L730ZMzN66KOyFTo
            source_type: api_record
            title: 中国历代人物传记资料库：徐氏(王儒妻)（CBDB 324277）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324277&o=json
            external_identifier: CBDB:324277
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-10T13:33:56.265Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KwijCE3WHKKrFHTR2UVJLz
        status: active
        display_name: 徐氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_ua589TRIMBqriWjLTqDeiS
        subject_person_id: p_RpANZtrRwU83qAy8Q8XYEf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_16nv23omiPWM5bXpCbD3EC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ORaGxLyOai0sBNX648l-eU
          claim_id: c_ua589TRIMBqriWjLTqDeiS
          source_id: s_EF1LSqMcSN4392RkJCM1S1
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第三十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EF1LSqMcSN4392RkJCM1S1
            source_type: api_record
            title: 中国历代人物传记资料库：王實（CBDB 324273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324273&o=json
            external_identifier: CBDB:324273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.169Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RpANZtrRwU83qAy8Q8XYEf
        status: active
        display_name: 王實
        merged_into_person_id: null
    - claim:
        id: c_ljWwrRkpr23PD_JXWpVMwy
        subject_person_id: p_WvSGc6pWDJNiRH33Kr62rr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_16nv23omiPWM5bXpCbD3EC
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vT1hKVPxXs-mFm4IG9CbQz
          claim_id: c_ljWwrRkpr23PD_JXWpVMwy
          source_id: s_iuCiM8dEjNCtLQczF8yqyZ
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第三十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iuCiM8dEjNCtLQczF8yqyZ
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 324272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324272&o=json
            external_identifier: CBDB:324272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.169Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WvSGc6pWDJNiRH33Kr62rr
        status: active
        display_name: 王言
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_-wHhLGb4JZss0qgmNa1Fz9
        subject_person_id: p_16nv23omiPWM5bXpCbD3EC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PcpdJeWVzUZZ2sJe87m174
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eSvCHIbJONwBcH77jAo4UL
          claim_id: c_-wHhLGb4JZss0qgmNa1Fz9
          source_id: s_OP9pmu4rWtYIDHkQlGFxnI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204801 王儒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OP9pmu4rWtYIDHkQlGFxnI
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 324278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324278&o=json
            external_identifier: CBDB:324278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PcpdJeWVzUZZ2sJe87m174
        status: active
        display_name: 王仁
        merged_into_person_id: null
---

# 王儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儒 | accepted |
| birth.date | 1532年 | accepted |
| bio.summary | 王儒（生于1532年），明人物。明清進士進士，籍贯嘉興，入仕進士。（中国历代人物传记资料库 CBDB 204801） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_m9QLtFof8trVhJCPC8QcyA | 王憲 | accepted |
| spouses | p_KwijCE3WHKKrFHTR2UVJLz | 徐氏 | accepted |
| ancestors | p_RpANZtrRwU83qAy8Q8XYEf | 王實 | accepted |
| ancestors | p_WvSGc6pWDJNiRH33Kr62rr | 王言 | accepted |
| other | p_PcpdJeWVzUZZ2sJe87m174 | 王仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仁（CBDB 324278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324278&o=json)
- [中国历代人物传记资料库：王儒（CBDB 204801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204801&o=json)
- [中国历代人物传记资料库：王實（CBDB 324273）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324273&o=json)
- [中国历代人物传记资料库：王言（CBDB 324272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324272&o=json)
- [中国历代人物传记资料库：徐氏(王儒妻)（CBDB 324277）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324277&o=json)
