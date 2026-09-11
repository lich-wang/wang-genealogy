---
schema: wang-person/v1
id: p_cjiK3o1TfNAoRsoVVh6KnK
status: active
merged_into: null
display_name: 滕氏
revision: 1
cbdb_id: 237898
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aTV2y4948_quqaeOVz69oe
        subject_person_id: p_cjiK3o1TfNAoRsoVVh6KnK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 滕氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yaxTII8NW95SCKmSUfGdot
          claim_id: c_aTV2y4948_quqaeOVz69oe
          source_id: s_E6-Ue4BT2vhRuOdBmgTNtr
          stance: supports
          locator: CBDB:237898
          quotation: null
          interpretation_note: CBDB 明确记录的王繼配偶
          source: &a1
            id: s_E6-Ue4BT2vhRuOdBmgTNtr
            source_type: api_record
            title: 中国历代人物传记资料库：滕氏(王繼妻)（CBDB 237898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237898&o=json
            external_identifier: CBDB:237898
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
        id: c_ND6rCZ98p-oN-Rj5Du03hw
        subject_person_id: p_ByxZLeQEM3c8TBLeF6KvJM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_cjiK3o1TfNAoRsoVVh6KnK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gMjUm6ROA3MEJu1jE7Oti3
          claim_id: c_ND6rCZ98p-oN-Rj5Du03hw
          source_id: s_E6-Ue4BT2vhRuOdBmgTNtr
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第九十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ByxZLeQEM3c8TBLeF6KvJM
        status: active
        display_name: 王繼
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 滕氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 滕氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ByxZLeQEM3c8TBLeF6KvJM | 王繼 | accepted |

## 外部来源

- [中国历代人物传记资料库：滕氏(王繼妻)（CBDB 237898）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237898&o=json)
