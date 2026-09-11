---
schema: wang-person/v1
id: p_WpmK1LLF92wQ4nu3TJsJw7
status: active
merged_into: null
display_name: 王庭
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MiUEf42fjVLr5KQPnPpAmP
        subject_person_id: p_WpmK1LLF92wQ4nu3TJsJw7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GGk1d5Vs7xMzhnycCM3aug
          claim_id: c_MiUEf42fjVLr5KQPnPpAmP
          source_id: s_G867cVo5YkCLsF1p6jdJFx
          stance: supports
          locator: CBDB:205813
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205813）
          source: &a1
            id: s_G867cVo5YkCLsF1p6jdJFx
            source_type: api_record
            title: 中国历代人物传记资料库：王庭（CBDB 205813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205813&o=json
            external_identifier: CBDB:205813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.873Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oAhK8z6L9H26Xie9NPwPTP
        subject_person_id: p_WpmK1LLF92wQ4nu3TJsJw7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1537年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aEzhka5fHdwcfTLxqHuFC2
          claim_id: c_oAhK8z6L9H26Xie9NPwPTP
          source_id: s_G867cVo5YkCLsF1p6jdJFx
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
        id: c_ig5vef3tFHooTGUvynWBpG
        subject_person_id: p_WpmK1LLF92wQ4nu3TJsJw7
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
        - id: cs_PvTALj11joF36vNQpL65zK
          claim_id: c_ig5vef3tFHooTGUvynWBpG
          source_id: s_G867cVo5YkCLsF1p6jdJFx
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
        id: c_xdKAyJh5q05vtsF8tWwgAV
        subject_person_id: p_8px7JbTSWpr92GDPRnZyK3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WpmK1LLF92wQ4nu3TJsJw7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nyNAc7dKf-MgqdGoMMdTpo
          claim_id: c_xdKAyJh5q05vtsF8tWwgAV
          source_id: s_8d9Di6P2QAq2N3USyHwDD7
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8d9Di6P2QAq2N3USyHwDD7
            source_type: api_record
            title: 中国历代人物传记资料库：王峩（CBDB 209009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209009&o=json
            external_identifier: CBDB:209009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_8px7JbTSWpr92GDPRnZyK3
        status: active
        display_name: 王峩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_0-gHK5Oo6UfXURvKwxT8uO
        subject_person_id: p_12ENn8i513xnkn8JBTb6gA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WpmK1LLF92wQ4nu3TJsJw7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ygh185pQ7kO2FiufdgFdc3
          claim_id: c_0-gHK5Oo6UfXURvKwxT8uO
          source_id: s_F3UPSz5VW8gNYjakcLBu2F
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_F3UPSz5VW8gNYjakcLBu2F
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 209008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209008&o=json
            external_identifier: CBDB:209008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.972Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_12ENn8i513xnkn8JBTb6gA
        status: active
        display_name: 王溥
        merged_into_person_id: null
    - claim:
        id: c_g2DXdOG_XcWZVzfS7OTcEg
        subject_person_id: p_qcvM9WGwjsbwdxCR7Bmu5m
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WpmK1LLF92wQ4nu3TJsJw7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rPRqupFK3CtpYt_7SgK_M0
          claim_id: c_g2DXdOG_XcWZVzfS7OTcEg
          source_id: s_z7GXVWywKHUh4hWASfXiEa
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_z7GXVWywKHUh4hWASfXiEa
            source_type: api_record
            title: 中国历代人物传记资料库：王志廣（CBDB 209007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209007&o=json
            external_identifier: CBDB:209007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qcvM9WGwjsbwdxCR7Bmu5m
        status: active
        display_name: 王志廣
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王庭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭 | accepted |
| birth.date | 1537年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8px7JbTSWpr92GDPRnZyK3 | 王峩 | accepted |
| ancestors | p_12ENn8i513xnkn8JBTb6gA | 王溥 | accepted |
| ancestors | p_qcvM9WGwjsbwdxCR7Bmu5m | 王志廣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王峩（CBDB 209009）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209009&o=json)
- [中国历代人物传记资料库：王溥（CBDB 209008）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209008&o=json)
- [中国历代人物传记资料库：王庭（CBDB 205813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205813&o=json)
- [中国历代人物传记资料库：王志廣（CBDB 209007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209007&o=json)
