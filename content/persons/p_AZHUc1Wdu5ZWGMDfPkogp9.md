---
schema: wang-person/v1
id: p_AZHUc1Wdu5ZWGMDfPkogp9
status: active
merged_into: null
display_name: 余氏
revision: 1
cbdb_id: 290014
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_O2Txh1PsfZmB9jn4LsOi7h
        subject_person_id: p_AZHUc1Wdu5ZWGMDfPkogp9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 余氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6F3_uV5_-ruIyRoHxTHJAW
          claim_id: c_O2Txh1PsfZmB9jn4LsOi7h
          source_id: s_dV3D5Uy9ijzxJ8aJdEyMYx
          stance: supports
          locator: CBDB:290014
          quotation: null
          interpretation_note: CBDB 明确记录的王璣配偶
          source: &a1
            id: s_dV3D5Uy9ijzxJ8aJdEyMYx
            source_type: api_record
            title: 中国历代人物传记资料库：余氏(王璣妻)（CBDB 290014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290014&o=json
            external_identifier: CBDB:290014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_NJR1k5oNH8a8d6CI-Lvdjc
        subject_person_id: p_EsRDyFvEK3YaUwwwR2A4xp
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_AZHUc1Wdu5ZWGMDfPkogp9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bRc2TLbhWKWhgesU6iZ6wf
          claim_id: c_NJR1k5oNH8a8d6CI-Lvdjc
          source_id: s_dV3D5Uy9ijzxJ8aJdEyMYx
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百五十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EsRDyFvEK3YaUwwwR2A4xp
        status: active
        display_name: 王璣
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 余氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 余氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_EsRDyFvEK3YaUwwwR2A4xp | 王璣 | accepted |

## 外部来源

- [中国历代人物传记资料库：余氏(王璣妻)（CBDB 290014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290014&o=json)
