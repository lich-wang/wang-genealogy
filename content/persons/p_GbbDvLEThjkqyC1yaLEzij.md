---
schema: wang-person/v1
id: p_GbbDvLEThjkqyC1yaLEzij
status: active
merged_into: null
display_name: 王續宗
cbdb_id: 292174
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U4gmCAN8J3VsoLD9jtCvfG
        subject_person_id: p_GbbDvLEThjkqyC1yaLEzij
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王續宗，明人物。嘉靖十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 292174）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_m7IFHD1LFDXis4PNlUduAu
          claim_id: c_U4gmCAN8J3VsoLD9jtCvfG
          source_id: s_LLvjLYx96164hPJPpsKPrK
          stance: supports
          locator: CBDB:292174
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LLvjLYx96164hPJPpsKPrK
            source_type: api_record
            title: 中国历代人物传记资料库：王續宗（CBDB 292174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292174&o=json
            external_identifier: CBDB:292174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7bkBSF3DxcLjRMKJhhKGup
        subject_person_id: p_GbbDvLEThjkqyC1yaLEzij
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王續宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AEji4TaJiqQ92gwMaZE8qq
          claim_id: c_7bkBSF3DxcLjRMKJhhKGup
          source_id: s_LLvjLYx96164hPJPpsKPrK
          stance: supports
          locator: CBDB:292174
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_IjW1f0sZqLIv7Dptq_WNZy
        subject_person_id: p_AjJ9D9hYYBcRjzGCjrMcoe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GbbDvLEThjkqyC1yaLEzij
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cl25wFsMQKn1MnVFtXIjvZ
          claim_id: c_IjW1f0sZqLIv7Dptq_WNZy
          source_id: s_z6ujQBZJGA8ubhv7PUM5lf
          stance: supports
          locator: CBDB：兄弟 王繼宗（126879）之父／母 王汾
          quotation: null
          interpretation_note: 由兄弟关系推断：王續宗 与 王繼宗 为同胞（CBDB 记「兄」），王繼宗 之父／母即 王續宗 之父／母。
          source:
            id: s_z6ujQBZJGA8ubhv7PUM5lf
            source_type: api_record
            title: 中国历代人物传记资料库：王續宗（CBDB 292174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292174&o=json
            external_identifier: CBDB:292174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AjJ9D9hYYBcRjzGCjrMcoe
        status: active
        display_name: 王汾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_fTNOVQ7cuX8ClTVYSQSlqj
        subject_person_id: p_GbbDvLEThjkqyC1yaLEzij
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fFDS7BMlsfjgyH_ubZoF1c
          claim_id: c_fTNOVQ7cuX8ClTVYSQSlqj
          source_id: s_z6ujQBZJGA8ubhv7PUM5lf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126879 王繼宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_z6ujQBZJGA8ubhv7PUM5lf
            source_type: api_record
            title: 中国历代人物传记资料库：王續宗（CBDB 292174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292174&o=json
            external_identifier: CBDB:292174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        status: active
        display_name: 王繼宗
        merged_into_person_id: null
---

# 王續宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王續宗，明人物。嘉靖十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 292174） | accepted |
| name.primary | 王續宗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AjJ9D9hYYBcRjzGCjrMcoe | 王汾 | accepted |
| other | p_tJDfPMXaXoCJ7dnxXR4ZsL | 王繼宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王續宗（CBDB 292174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292174&o=json)
