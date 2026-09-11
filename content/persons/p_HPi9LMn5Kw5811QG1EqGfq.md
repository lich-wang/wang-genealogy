---
schema: wang-person/v1
id: p_HPi9LMn5Kw5811QG1EqGfq
status: active
merged_into: null
display_name: 王世文
revision: 4
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
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2VbKr9wyhH56uQW5Hxhp92
          claim_id: c_z5bthxNH93pYxwYBz1kByW
          source_id: s_2NhiFzNKZzDkonRb46SXx7
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
  other: []
---

# 王世文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世文 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Jj8dkQubs7taj8bUq4RoTF | 王鯨 | accepted |
| ancestors | p_B9CyVfjAfLv7AFjRE6GJKj | 王莊 | accepted |
| ancestors | p_GpiK86NhbuejR7tRwDF4RJ | 王天麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鯨（CBDB 276002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276002&o=json)
- [中国历代人物传记资料库：王世文（CBDB 201664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201664&o=json)
- [中国历代人物传记资料库：王天麟（CBDB 276001）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276001&o=json)
- [中国历代人物传记资料库：王莊（CBDB 276000）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276000&o=json)
