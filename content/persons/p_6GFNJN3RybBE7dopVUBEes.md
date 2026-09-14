---
schema: wang-person/v1
id: p_6GFNJN3RybBE7dopVUBEes
status: active
merged_into: null
display_name: 王嘉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fewH5dV2CSqjsYBnxjquJG
        subject_person_id: p_6GFNJN3RybBE7dopVUBEes
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M8C8pUBpnVyDkDSPrCmQsv
          claim_id: c_fewH5dV2CSqjsYBnxjquJG
          source_id: s_hFjoXob2TkFoVK2G51FAjj
          stance: supports
          locator: CBDB:324571
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（324571）
          source: &a1
            id: s_hFjoXob2TkFoVK2G51FAjj
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉（CBDB 324571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324571&o=json
            external_identifier: CBDB:324571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.190Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3YC539w2dCrF45vmbMiX5y
        subject_person_id: p_6GFNJN3RybBE7dopVUBEes
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉，明人物。嘉靖三十八年進士，籍贯南充。（中国历代人物传记资料库 CBDB 324571）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YRA3sk6Hdi0t0SExLhlDqT
          claim_id: c_3YC539w2dCrF45vmbMiX5y
          source_id: s_hFjoXob2TkFoVK2G51FAjj
          stance: supports
          locator: CBDB:324571
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_laZzZok2MMngvo-BTP5h_Y
        subject_person_id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6GFNJN3RybBE7dopVUBEes
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u7sfR5BuxPxLbbep_xm1Si
          claim_id: c_laZzZok2MMngvo-BTP5h_Y
          source_id: s_GBUWLbP0m8k1Ai7ScKTe2J
          stance: supports
          locator: CBDB：兄弟 王用楨（204826）之父／母 王纘宗
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉 与 王用楨 为同胞（CBDB 记「弟」），王用楨 之父／母即 王嘉 之父／母。
          source:
            id: s_GBUWLbP0m8k1Ai7ScKTe2J
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉（CBDB 324571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324571&o=json
            external_identifier: CBDB:324571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        status: active
        display_name: 王纘宗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_KQVqrBL0LI6Yhq7UlxtmjU
        subject_person_id: p_6GFNJN3RybBE7dopVUBEes
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_evK8mGlli5SxlzRkSwvJKX
          claim_id: c_KQVqrBL0LI6Yhq7UlxtmjU
          source_id: s_GBUWLbP0m8k1Ai7ScKTe2J
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204826 王用楨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GBUWLbP0m8k1Ai7ScKTe2J
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉（CBDB 324571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324571&o=json
            external_identifier: CBDB:324571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hpB2Y5ktFHzZw4LUr2KGvj
        status: active
        display_name: 王用楨
        merged_into_person_id: null
---

# 王嘉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉 | accepted |
| bio.summary | 王嘉，明人物。嘉靖三十八年進士，籍贯南充。（中国历代人物传记资料库 CBDB 324571） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oZ4kQSFi4x4MxZ3DEL5Xbj | 王纘宗 | accepted |
| other | p_hpB2Y5ktFHzZw4LUr2KGvj | 王用楨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉（CBDB 324571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324571&o=json)
