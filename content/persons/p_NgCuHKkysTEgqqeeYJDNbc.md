---
schema: wang-person/v1
id: p_NgCuHKkysTEgqqeeYJDNbc
status: active
merged_into: null
display_name: 王淑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bDXMWiTSwHhU9XpBYicsA6
        subject_person_id: p_NgCuHKkysTEgqqeeYJDNbc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SJGrwg4uKnbAx9eu9wFjes
          claim_id: c_bDXMWiTSwHhU9XpBYicsA6
          source_id: s_KoJEQz4mu2rvQmBiDH12Uy
          stance: supports
          locator: CBDB:297077
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297077）
          source: &a1
            id: s_KoJEQz4mu2rvQmBiDH12Uy
            source_type: api_record
            title: 中国历代人物传记资料库：王淑（CBDB 297077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297077&o=json
            external_identifier: CBDB:297077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.544Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ePtY5Aby2xTQ9U27WEQPqJ
        subject_person_id: p_NgCuHKkysTEgqqeeYJDNbc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑，明人物。嘉靖十四年進士。（中国历代人物传记资料库 CBDB 297077）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WDlDlNfR56a1PShH5FCyfl
          claim_id: c_ePtY5Aby2xTQ9U27WEQPqJ
          source_id: s_KoJEQz4mu2rvQmBiDH12Uy
          stance: supports
          locator: CBDB:297077
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_vBqgagC7kGq41Xml31k9d6
        subject_person_id: p_NgCuHKkysTEgqqeeYJDNbc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DPKdYaX4f6yTudovTApGHk
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sAN4WuuMIgY41XjRMUaDMO
          claim_id: c_vBqgagC7kGq41Xml31k9d6
          source_id: s_KoJEQz4mu2rvQmBiDH12Uy
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第九十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DPKdYaX4f6yTudovTApGHk
        status: active
        display_name: 王喬齡
        merged_into_person_id: null
    - claim:
        id: c_ABeOM57hK9snCcJReE1CBb
        subject_person_id: p_NgCuHKkysTEgqqeeYJDNbc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JE4JHCNRPza84DMSHaNQDc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WDqf5zW78QXrIoYagWXQMg
          claim_id: c_ABeOM57hK9snCcJReE1CBb
          source_id: s_KoJEQz4mu2rvQmBiDH12Uy
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百二十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JE4JHCNRPza84DMSHaNQDc
        status: active
        display_name: 王嵩
        merged_into_person_id: null
  other: []
---

# 王淑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淑 | accepted |
| bio.summary | 王淑，明人物。嘉靖十四年進士。（中国历代人物传记资料库 CBDB 297077） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DPKdYaX4f6yTudovTApGHk | 王喬齡 | accepted |
| descendants | p_JE4JHCNRPza84DMSHaNQDc | 王嵩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淑（CBDB 297077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297077&o=json)
