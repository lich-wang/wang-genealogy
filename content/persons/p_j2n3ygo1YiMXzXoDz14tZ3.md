---
schema: wang-person/v1
id: p_j2n3ygo1YiMXzXoDz14tZ3
status: active
merged_into: null
display_name: 王代裕
cbdb_id: 526826
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jmwbM9pLppLfRqxqo3GQYX
        subject_person_id: p_j2n3ygo1YiMXzXoDz14tZ3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王代裕，清人物。中国历代人物传记资料库（CBDB）以人物编号 526826 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_SffIfDOIN7_Kq2SnvPSAqp
          claim_id: c_jmwbM9pLppLfRqxqo3GQYX
          source_id: s_b9kQk3rN4EGWMcpC4NdKsR
          stance: supports
          locator: CBDB:526826
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_b9kQk3rN4EGWMcpC4NdKsR
            source_type: api_record
            title: 中国历代人物传记资料库：王代裕（CBDB 526826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526826&o=json
            external_identifier: CBDB:526826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ondqwCNmmVq71Rto6QogGU
        subject_person_id: p_j2n3ygo1YiMXzXoDz14tZ3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王代裕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_o97GrH2yHVv3Bpi3EtjQ4W
          claim_id: c_ondqwCNmmVq71Rto6QogGU
          source_id: s_b9kQk3rN4EGWMcpC4NdKsR
          stance: supports
          locator: CBDB:526826
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_b9kQk3rN4EGWMcpC4NdKsR
            source_type: api_record
            title: 中国历代人物传记资料库：王代裕（CBDB 526826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526826&o=json
            external_identifier: CBDB:526826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_SGtXR4FIrXrTAD_qlIZCfM
        subject_person_id: p_pEdGRSnHAWXvL7ekoq9irm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_j2n3ygo1YiMXzXoDz14tZ3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G4TvBQA3y16gTDIAH3fIJA
          claim_id: c_SGtXR4FIrXrTAD_qlIZCfM
          source_id: s_n5SveC4vwRXeJFjECJn3hm
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12993：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n5SveC4vwRXeJFjECJn3hm
            source_type: api_record
            title: 中国历代人物传记资料库：王家賓（CBDB 69290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69290&o=json
            external_identifier: CBDB:69290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.198Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pEdGRSnHAWXvL7ekoq9irm
        status: active
        display_name: 王家賓
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王代裕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王代裕，清人物。中国历代人物传记资料库（CBDB）以人物编号 526826 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王代裕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_pEdGRSnHAWXvL7ekoq9irm | 王家賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王代裕（CBDB 526826）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526826&o=json)
- [中国历代人物传记资料库：王家賓（CBDB 69290）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69290&o=json)
