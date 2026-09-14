---
schema: wang-person/v1
id: p_26qvS1eCyosKLR6T6UCexR
status: active
merged_into: null
display_name: 王時舉
cbdb_id: 68472
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j9iD3UT3S5AzTV5z5MxVUe
        subject_person_id: p_26qvS1eCyosKLR6T6UCexR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時舉，明人物。明清進士進士，籍贯通州，入仕進士，曾任大理寺右少卿、大理寺右寺丞、大理寺左少卿。（中国历代人物传记资料库 CBDB 68472）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_7Gb3VQr9eOIFAdUUR9b_gG
          claim_id: c_j9iD3UT3S5AzTV5z5MxVUe
          source_id: s_FZEsqRqa2vdzBW7aADU2g9
          stance: supports
          locator: CBDB:68472
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_FZEsqRqa2vdzBW7aADU2g9
            source_type: api_record
            title: 中国历代人物传记资料库：王時舉（CBDB 68472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68472&o=json
            external_identifier: CBDB:68472
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZA17P6pFBJpBXWiiaApYhp
        subject_person_id: p_26qvS1eCyosKLR6T6UCexR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DEvHXyEzMqpUw1SnZBu2nL
          claim_id: c_ZA17P6pFBJpBXWiiaApYhp
          source_id: s_FZEsqRqa2vdzBW7aADU2g9
          stance: supports
          locator: CBDB:68472
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1501-1600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-uLYaOj8QoLdk8pc5VBf5U
        subject_person_id: p_xJuShEWwU75pnqgfG1d4gu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_26qvS1eCyosKLR6T6UCexR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9o6gjR0jzHpfExOQ2av3tj
          claim_id: c_-uLYaOj8QoLdk8pc5VBf5U
          source_id: s_j4UDGkqUn53nECjFeNpFCw
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第七十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_j4UDGkqUn53nECjFeNpFCw
            source_type: api_record
            title: 中国历代人物传记资料库：王儀（CBDB 327981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327981&o=json
            external_identifier: CBDB:327981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.281Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xJuShEWwU75pnqgfG1d4gu
        status: active
        display_name: 王儀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_qkLAV-_OoraOyIEy6LUbpg
        subject_person_id: p_B8J4MJM8443j3KJ1vaz4JK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_26qvS1eCyosKLR6T6UCexR
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vkjqqbPm4LBX6EwJLLtLhw
          claim_id: c_qkLAV-_OoraOyIEy6LUbpg
          source_id: s_NnHXrMm5CZGGA2r3jQ3ujq
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第七十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NnHXrMm5CZGGA2r3jQ3ujq
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 327980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327980&o=json
            external_identifier: CBDB:327980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.280Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_B8J4MJM8443j3KJ1vaz4JK
        status: active
        display_name: 王紀
        merged_into_person_id: null
    - claim:
        id: c_wqcRBqDslSqWGt7kG9aHWz
        subject_person_id: p_qJsuzF3D2EFDgfPvMtrnkn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_26qvS1eCyosKLR6T6UCexR
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LdEL9XkYXJXjBRkDTm-T96
          claim_id: c_wqcRBqDslSqWGt7kG9aHWz
          source_id: s_Boz2JN3HkncAtwmCeE9sPr
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第七十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Boz2JN3HkncAtwmCeE9sPr
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 327979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327979&o=json
            external_identifier: CBDB:327979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.280Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qJsuzF3D2EFDgfPvMtrnkn
        status: active
        display_name: 王瓚
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_8drB83RbM8zUiLpTGRTb02
        subject_person_id: p_26qvS1eCyosKLR6T6UCexR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9x8dgS2DMpWT4wUMNBJfce
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fOf_CoH4EZHP8BAUauUIqr
          claim_id: c_8drB83RbM8zUiLpTGRTb02
          source_id: s_rCN0AnUerxKsu2f3eB05s-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68472 王時舉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rCN0AnUerxKsu2f3eB05s-
            source_type: api_record
            title: 中国历代人物传记资料库：王時用（CBDB 327989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327989&o=json
            external_identifier: CBDB:327989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9x8dgS2DMpWT4wUMNBJfce
        status: active
        display_name: 王時用
        merged_into_person_id: null
    - claim:
        id: c__vxNiYM4aYPoSZFmeSopNu
        subject_person_id: p_26qvS1eCyosKLR6T6UCexR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HcfsKA3FvSxgK9qhNB5oxH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9yl94T3D6dJPYJQY53idxh
          claim_id: c__vxNiYM4aYPoSZFmeSopNu
          source_id: s_9xGFEmrxAsakoN0v3l2evo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68472 王時舉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9xGFEmrxAsakoN0v3l2evo
            source_type: api_record
            title: 中国历代人物传记资料库：王時中（CBDB 327990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327990&o=json
            external_identifier: CBDB:327990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HcfsKA3FvSxgK9qhNB5oxH
        status: active
        display_name: 王時中
        merged_into_person_id: null
---

# 王時舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王時舉，明人物。明清進士進士，籍贯通州，入仕進士，曾任大理寺右少卿、大理寺右寺丞、大理寺左少卿。（中国历代人物传记资料库 CBDB 68472） | accepted |
| name.primary | 王時舉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xJuShEWwU75pnqgfG1d4gu | 王儀 | accepted |
| ancestors | p_B8J4MJM8443j3KJ1vaz4JK | 王紀 | accepted |
| ancestors | p_qJsuzF3D2EFDgfPvMtrnkn | 王瓚 | accepted |
| other | p_9x8dgS2DMpWT4wUMNBJfce | 王時用 | accepted |
| other | p_HcfsKA3FvSxgK9qhNB5oxH | 王時中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紀（CBDB 327980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327980&o=json)
- [中国历代人物传记资料库：王時舉（CBDB 68472）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68472&o=json)
- [中国历代人物传记资料库：王時用（CBDB 327989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327989&o=json)
- [中国历代人物传记资料库：王時中（CBDB 327990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327990&o=json)
- [中国历代人物传记资料库：王儀（CBDB 327981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327981&o=json)
- [中国历代人物传记资料库：王瓚（CBDB 327979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327979&o=json)
