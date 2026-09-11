---
schema: wang-person/v1
id: p_aSdPG8ycM3vnoeBgDgVbHK
status: active
merged_into: null
display_name: 許氏
revision: 1
cbdb_id: 265671
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tvHbqsnYVwSwdicHMHLegu
        subject_person_id: p_aSdPG8ycM3vnoeBgDgVbHK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 許氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gpqL7Tqb9OP7WMsePB0NYX
          claim_id: c_tvHbqsnYVwSwdicHMHLegu
          source_id: s_Sm6Sbv_V3Zn8I8rtkOfPjV
          stance: supports
          locator: CBDB:265671
          quotation: null
          interpretation_note: CBDB 明确记录的王昊配偶
          source: &a1
            id: s_Sm6Sbv_V3Zn8I8rtkOfPjV
            source_type: api_record
            title: 中国历代人物传记资料库：許氏(王昊妻)（CBDB 265671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265671&o=json
            external_identifier: CBDB:265671
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
        id: c_pIHC5k19JOzov2trBE7u3g
        subject_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_aSdPG8ycM3vnoeBgDgVbHK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LuehjmmVOdrM8oqItOUxZv
          claim_id: c_pIHC5k19JOzov2trBE7u3g
          source_id: s_Sm6Sbv_V3Zn8I8rtkOfPjV
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第九十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EoJk1Y5s39yxBJTaiKbEQe
        status: active
        display_name: 王昊
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 許氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 許氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_EoJk1Y5s39yxBJTaiKbEQe | 王昊 | accepted |

## 外部来源

- [中国历代人物传记资料库：許氏(王昊妻)（CBDB 265671）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265671&o=json)
