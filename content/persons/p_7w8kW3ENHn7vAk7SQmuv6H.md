---
schema: wang-person/v1
id: p_7w8kW3ENHn7vAk7SQmuv6H
status: active
merged_into: null
display_name: 應氏
revision: 1
cbdb_id: 317074
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SwEmKQqga5kujVRxPamZDU
        subject_person_id: p_7w8kW3ENHn7vAk7SQmuv6H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 應氏，明人物。天順四年進士。（中国历代人物传记资料库 CBDB 317074）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xCwuwNAdK9sXr4mCmYAIm1
          claim_id: c_SwEmKQqga5kujVRxPamZDU
          source_id: s_aJRxrfkelIlvrvNr8f2KCt
          stance: supports
          locator: CBDB:317074
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_aJRxrfkelIlvrvNr8f2KCt
            source_type: api_record
            title: 中国历代人物传记资料库：應氏(王應奎妻)（CBDB 317074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317074&o=json
            external_identifier: CBDB:317074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JTKE6dYYWoZXg2fH-S-l_S
        subject_person_id: p_7w8kW3ENHn7vAk7SQmuv6H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 應氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GrFDY69Ptgfv3-0KtrBT81
          claim_id: c_JTKE6dYYWoZXg2fH-S-l_S
          source_id: s_aJRxrfkelIlvrvNr8f2KCt
          stance: supports
          locator: CBDB:317074
          quotation: null
          interpretation_note: CBDB 明确记录的王應奎配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Lw-ieJ5wQ2FJiwtO7Stgyk
        subject_person_id: p_F4TvNBX2MG96q5zMnLQmVQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_7w8kW3ENHn7vAk7SQmuv6H
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4FjffQ5jzGSi5CojjzzsMj
          claim_id: c_Lw-ieJ5wQ2FJiwtO7Stgyk
          source_id: s_aJRxrfkelIlvrvNr8f2KCt
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第二十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_F4TvNBX2MG96q5zMnLQmVQ
        status: active
        display_name: 王應奎
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 應氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 應氏，明人物。天順四年進士。（中国历代人物传记资料库 CBDB 317074） | accepted |
| name.primary | 應氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_F4TvNBX2MG96q5zMnLQmVQ | 王應奎 | accepted |

## 外部来源

- [中国历代人物传记资料库：應氏(王應奎妻)（CBDB 317074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317074&o=json)
