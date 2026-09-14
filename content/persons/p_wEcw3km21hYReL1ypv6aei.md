---
schema: wang-person/v1
id: p_wEcw3km21hYReL1ypv6aei
status: active
merged_into: null
display_name: 王壽朋
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e9g1zQSxMzADU4eaWC1r7L
        subject_person_id: p_wEcw3km21hYReL1ypv6aei
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽朋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aRZxMPx6rujHqkFDAvHghk
          claim_id: c_e9g1zQSxMzADU4eaWC1r7L
          source_id: s_fRoquAwncwW3sLNDdP4hjc
          stance: supports
          locator: CBDB:18813
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（18813）
          source: &a1
            id: s_fRoquAwncwW3sLNDdP4hjc
            source_type: api_record
            title: 中国历代人物传记资料库：王壽朋（CBDB 18813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18813&o=json
            external_identifier: CBDB:18813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.715Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ANSYyiSQs52r6KmBE6TP6G
        subject_person_id: p_wEcw3km21hYReL1ypv6aei
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽朋，宋人物。籍贯樂清。（中国历代人物传记资料库 CBDB 18813）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-y68lAba-pN9YHm4QRcCAy
          claim_id: c_ANSYyiSQs52r6KmBE6TP6G
          source_id: s_fRoquAwncwW3sLNDdP4hjc
          stance: supports
          locator: CBDB:18813
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kdC9A0L7USb2ET2Bpx2hkC
        subject_person_id: p_k7FueQ7UqubgKGSwoNs5mw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wEcw3km21hYReL1ypv6aei
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F0N24POYinuzLkXTIrgEfq
          claim_id: c_kdC9A0L7USb2ET2Bpx2hkC
          source_id: s_oMGvstFSBv9bhSTHG5UlBB
          stance: supports
          locator: CBDB 亲属：父（KinPerson 10597）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_oMGvstFSBv9bhSTHG5UlBB
            source_type: api_record
            title: 中国历代人物传记资料库：王壽朋（CBDB 18813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18813&o=json
            external_identifier: CBDB:18813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_k7FueQ7UqubgKGSwoNs5mw
        status: active
        display_name: 王輔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_rQgwNbNlKpEdIyMMGrOn8r
        subject_person_id: p_tcnc9U56UzCEYQHcMawuE4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wEcw3km21hYReL1ypv6aei
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xtFl1RYYmuBvEc0vb6BYvj
          claim_id: c_rQgwNbNlKpEdIyMMGrOn8r
          source_id: s_oMGvstFSBv9bhSTHG5UlBB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 10598 王十朋）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oMGvstFSBv9bhSTHG5UlBB
            source_type: api_record
            title: 中国历代人物传记资料库：王壽朋（CBDB 18813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18813&o=json
            external_identifier: CBDB:18813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tcnc9U56UzCEYQHcMawuE4
        status: active
        display_name: 王十朋
        merged_into_person_id: null
---

# 王壽朋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壽朋 | accepted |
| bio.summary | 王壽朋，宋人物。籍贯樂清。（中国历代人物传记资料库 CBDB 18813） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_k7FueQ7UqubgKGSwoNs5mw | 王輔 | accepted |
| other | p_tcnc9U56UzCEYQHcMawuE4 | 王十朋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王壽朋（CBDB 18813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18813&o=json)
