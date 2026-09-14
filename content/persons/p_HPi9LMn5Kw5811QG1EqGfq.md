---
schema: wang-person/v1
id: p_HPi9LMn5Kw5811QG1EqGfq
status: active
merged_into: null
display_name: 王世文
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C9ib1mcGZLdDYwDB22moBF
        subject_person_id: p_HPi9LMn5Kw5811QG1EqGfq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uzDBCBrFXzoaDkCo8rQk2S
          claim_id: c_C9ib1mcGZLdDYwDB22moBF
          source_id: s_2NhiFzNKZzDkonRb46SXx7
          stance: supports
          locator: CBDB:201664
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201664）
          source: &a1
            id: s_2NhiFzNKZzDkonRb46SXx7
            source_type: api_record
            title: 中国历代人物传记资料库：王世文（CBDB 201664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201664&o=json
            external_identifier: CBDB:201664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.689Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z5bthxNH93pYxwYBz1kByW
        subject_person_id: p_HPi9LMn5Kw5811QG1EqGfq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世文，明人物。明清進士進士，籍贯安福，入仕進士。（中国历代人物传记资料库 CBDB 201664）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q0HnWwxyMgBhgUhj0eqL5H
          claim_id: c_z5bthxNH93pYxwYBz1kByW
          source_id: s_2NhiFzNKZzDkonRb46SXx7
          stance: supports
          locator: CBDB:201664
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tLgThtz5aDq1oNka9DTJ0b
        subject_person_id: p_Jj8dkQubs7taj8bUq4RoTF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HPi9LMn5Kw5811QG1EqGfq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_woKz42i7TVMPh7Es11CIXr
          claim_id: c_tLgThtz5aDq1oNka9DTJ0b
          source_id: s_R4BD5uKkAPNYJBZ61cEuF7
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第二十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_R4BD5uKkAPNYJBZ61cEuF7
            source_type: api_record
            title: 中国历代人物传记资料库：王鯨（CBDB 276002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276002&o=json
            external_identifier: CBDB:276002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Jj8dkQubs7taj8bUq4RoTF
        status: active
        display_name: 王鯨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_7uET5UvCWDffI2oLyLZ8QP
        subject_person_id: p_B9CyVfjAfLv7AFjRE6GJKj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HPi9LMn5Kw5811QG1EqGfq
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XdNLcR2TFia2JEWcgAIlxa
          claim_id: c_7uET5UvCWDffI2oLyLZ8QP
          source_id: s_NJnPAx2aNgZfFLTydgEbRi
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第二十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NJnPAx2aNgZfFLTydgEbRi
            source_type: api_record
            title: 中国历代人物传记资料库：王莊（CBDB 276000）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276000&o=json
            external_identifier: CBDB:276000
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.934Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_B9CyVfjAfLv7AFjRE6GJKj
        status: active
        display_name: 王莊
        merged_into_person_id: null
    - claim:
        id: c_If2XTeEFYsPxeaoQKtMcWz
        subject_person_id: p_GpiK86NhbuejR7tRwDF4RJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HPi9LMn5Kw5811QG1EqGfq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gnhqriVS-cLKKUlzytIBvp
          claim_id: c_If2XTeEFYsPxeaoQKtMcWz
          source_id: s_7KH39tUhBpWUA34HNMrpTV
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第二十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7KH39tUhBpWUA34HNMrpTV
            source_type: api_record
            title: 中国历代人物传记资料库：王天麟（CBDB 276001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276001&o=json
            external_identifier: CBDB:276001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.934Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GpiK86NhbuejR7tRwDF4RJ
        status: active
        display_name: 王天麟
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_SE3zD_uQ4KkgM2tgDfdu1O
        subject_person_id: p_GDxszfNM53cdWbNNzPoaoH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HPi9LMn5Kw5811QG1EqGfq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MSNfYht3O5mH1EigqXyR7q
          claim_id: c_SE3zD_uQ4KkgM2tgDfdu1O
          source_id: s_KXksv0JM0JtI_DHM-JdDVL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201664 王世文）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KXksv0JM0JtI_DHM-JdDVL
            source_type: api_record
            title: 中国历代人物传记资料库：王世俊（CBDB 276008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276008&o=json
            external_identifier: CBDB:276008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GDxszfNM53cdWbNNzPoaoH
        status: active
        display_name: 王世俊
        merged_into_person_id: null
    - claim:
        id: c_v9cKtJ6ErMuITGOiZgM1MR
        subject_person_id: p_HPi9LMn5Kw5811QG1EqGfq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ds1EunL7j7phN36xPt2mhB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2H1a9r3Zo5Aijt7qSisFfP
          claim_id: c_v9cKtJ6ErMuITGOiZgM1MR
          source_id: s_DUIXMxFQXqIOGI4UY2ivGX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201664 王世文）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DUIXMxFQXqIOGI4UY2ivGX
            source_type: api_record
            title: 中国历代人物传记资料库：王世武（CBDB 276005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276005&o=json
            external_identifier: CBDB:276005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ds1EunL7j7phN36xPt2mhB
        status: active
        display_name: 王世武
        merged_into_person_id: null
    - claim:
        id: c_13EfGm_AH6SwsLym6HA-xW
        subject_person_id: p_HPi9LMn5Kw5811QG1EqGfq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fREPtX5CeBBVFRis4ui8Wa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BUIZ-bB8vAOi1jK2DEKl9E
          claim_id: c_13EfGm_AH6SwsLym6HA-xW
          source_id: s_Ff91I1RWygVfAVuA6f6ATr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201664 王世文）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ff91I1RWygVfAVuA6f6ATr
            source_type: api_record
            title: 中国历代人物传记资料库：王世用（CBDB 276006）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276006&o=json
            external_identifier: CBDB:276006
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fREPtX5CeBBVFRis4ui8Wa
        status: active
        display_name: 王世用
        merged_into_person_id: null
    - claim:
        id: c_A6uGRqDUHkw0pIISoe7SjV
        subject_person_id: p_HPi9LMn5Kw5811QG1EqGfq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v4RrPC9uPkhUh6Z6g5833f
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VnZnlesDFYazM5tk2kvQiO
          claim_id: c_A6uGRqDUHkw0pIISoe7SjV
          source_id: s_1Vfk9o1agldG7QF7cPMdSa
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201664 王世文）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1Vfk9o1agldG7QF7cPMdSa
            source_type: api_record
            title: 中国历代人物传记资料库：王世某（CBDB 276007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276007&o=json
            external_identifier: CBDB:276007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v4RrPC9uPkhUh6Z6g5833f
        status: active
        display_name: 王世某
        merged_into_person_id: null
---

# 王世文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世文 | accepted |
| bio.summary | 王世文，明人物。明清進士進士，籍贯安福，入仕進士。（中国历代人物传记资料库 CBDB 201664） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Jj8dkQubs7taj8bUq4RoTF | 王鯨 | accepted |
| ancestors | p_B9CyVfjAfLv7AFjRE6GJKj | 王莊 | accepted |
| ancestors | p_GpiK86NhbuejR7tRwDF4RJ | 王天麟 | accepted |
| other | p_GDxszfNM53cdWbNNzPoaoH | 王世俊 | accepted |
| other | p_ds1EunL7j7phN36xPt2mhB | 王世武 | accepted |
| other | p_fREPtX5CeBBVFRis4ui8Wa | 王世用 | accepted |
| other | p_v4RrPC9uPkhUh6Z6g5833f | 王世某 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鯨（CBDB 276002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276002&o=json)
- [中国历代人物传记资料库：王世俊（CBDB 276008）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276008&o=json)
- [中国历代人物传记资料库：王世某（CBDB 276007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276007&o=json)
- [中国历代人物传记资料库：王世文（CBDB 201664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201664&o=json)
- [中国历代人物传记资料库：王世武（CBDB 276005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276005&o=json)
- [中国历代人物传记资料库：王世用（CBDB 276006）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276006&o=json)
- [中国历代人物传记资料库：王天麟（CBDB 276001）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276001&o=json)
- [中国历代人物传记资料库：王莊（CBDB 276000）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276000&o=json)
