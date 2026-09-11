---
schema: wang-person/v1
id: p_e8fyUGVWsewm8vpP5EJCF4
status: active
merged_into: null
display_name: 王民望
cbdb_id: 136440
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4e7ftcoC46oMSQMKNYcj7J
        subject_person_id: p_e8fyUGVWsewm8vpP5EJCF4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民望，宋人物。中国历代人物传记资料库（CBDB）以人物编号 136440 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_tuUwZOreI_XLogqGAqVofJ
          claim_id: c_4e7ftcoC46oMSQMKNYcj7J
          source_id: s_f98agFL2Vq81kH1ETJ7JdA
          stance: supports
          locator: CBDB:136440
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_f98agFL2Vq81kH1ETJ7JdA
            source_type: api_record
            title: 中国历代人物传记资料库：王民望（CBDB 136440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136440&o=json
            external_identifier: CBDB:136440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DVZNun76MKqk7GV12x52du
        subject_person_id: p_e8fyUGVWsewm8vpP5EJCF4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民望
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Pkwyh8XjJXXsj4DLbmXEcN
          claim_id: c_DVZNun76MKqk7GV12x52du
          source_id: s_f98agFL2Vq81kH1ETJ7JdA
          stance: supports
          locator: CBDB:136440
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_f98agFL2Vq81kH1ETJ7JdA
            source_type: api_record
            title: 中国历代人物传记资料库：王民望（CBDB 136440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136440&o=json
            external_identifier: CBDB:136440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9DW103s0In1X-dxb14dYOI
        subject_person_id: p_Fo5H89gRd1G7FrWqXFVXtt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e8fyUGVWsewm8vpP5EJCF4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k7_V6G7fLIrU2gUtRgunvH
          claim_id: c_9DW103s0In1X-dxb14dYOI
          source_id: s_ME4J2g2xqALo2PrEEMnvAH
          stance: supports
          locator: 寶祐登科錄：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ME4J2g2xqALo2PrEEMnvAH
            source_type: api_record
            title: 中国历代人物传记资料库：王節（CBDB 137375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137375&o=json
            external_identifier: CBDB:137375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.346Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Fo5H89gRd1G7FrWqXFVXtt
        status: active
        display_name: 王節
        merged_into_person_id: null
  children:
    - claim:
        id: c_R30nqXl1Khd5LlsoOCB389
        subject_person_id: p_e8fyUGVWsewm8vpP5EJCF4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6yFP175w8qJgJRVTRiUkab
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZocaPGW4hxoGCSOZRYaGUq
          claim_id: c_R30nqXl1Khd5LlsoOCB389
          source_id: s_efjbH4VURWrYSiJRiFkgFR
          stance: supports
          locator: 寶祐登科錄：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_efjbH4VURWrYSiJRiFkgFR
            source_type: api_record
            title: 中国历代人物传记资料库：王一奇（CBDB 12910）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12910&o=json
            external_identifier: CBDB:12910
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.613Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6yFP175w8qJgJRVTRiUkab
        status: active
        display_name: 王一奇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_VJ4vUUH0OWTC991l3PQUNs
        subject_person_id: p_S6ZZKMVMpbpMSQYqkUgMjL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_e8fyUGVWsewm8vpP5EJCF4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CYoah6yESkJfaTJgvWiwix
          claim_id: c_VJ4vUUH0OWTC991l3PQUNs
          source_id: s_x1FrR6DF9GxLpn7La1NHdM
          stance: supports
          locator: 寶祐登科錄：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_x1FrR6DF9GxLpn7La1NHdM
            source_type: api_record
            title: 中国历代人物传记资料库：王晞亮（CBDB 1813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1813&o=json
            external_identifier: CBDB:1813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.277Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_S6ZZKMVMpbpMSQYqkUgMjL
        status: active
        display_name: 王晞亮
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王民望

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王民望，宋人物。中国历代人物传记资料库（CBDB）以人物编号 136440 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王民望 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Fo5H89gRd1G7FrWqXFVXtt | 王節 | accepted |
| children | p_6yFP175w8qJgJRVTRiUkab | 王一奇 | accepted |
| ancestors | p_S6ZZKMVMpbpMSQYqkUgMjL | 王晞亮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王節（CBDB 137375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137375&o=json)
- [中国历代人物传记资料库：王民望（CBDB 136440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136440&o=json)
- [中国历代人物传记资料库：王晞亮（CBDB 1813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1813&o=json)
- [中国历代人物传记资料库：王一奇（CBDB 12910）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12910&o=json)
