---
schema: wang-person/v1
id: p_AKXCGeZ2Jrwz8tGFASD6hd
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 703705
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_asSkCwHlYsoRg9xKkiw-qQ
        subject_person_id: p_AKXCGeZ2Jrwz8tGFASD6hd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l608aPlQv0yD4xsCxuoFuW
          claim_id: c_asSkCwHlYsoRg9xKkiw-qQ
          source_id: s_F-sg2uDYbwmhO_uYvv0Ze4
          stance: supports
          locator: CBDB:703705
          quotation: null
          interpretation_note: CBDB 明确记录的王臨吉配偶
          source: &a1
            id: s_F-sg2uDYbwmhO_uYvv0Ze4
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王臨吉妻)（CBDB 703705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703705&o=json
            external_identifier: CBDB:703705
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
        id: c_XWFDUJAC6Kv5pp-DjTWy_3
        subject_person_id: p_7raFc89NNfxHdMDVAgGa2j
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_AKXCGeZ2Jrwz8tGFASD6hd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jGEQNehejlnflPQllQYA-I
          claim_id: c_XWFDUJAC6Kv5pp-DjTWy_3
          source_id: s_F-sg2uDYbwmhO_uYvv0Ze4
          stance: supports
          locator: 平陰縣志，lgid=630888：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7raFc89NNfxHdMDVAgGa2j
        status: active
        display_name: 王臨吉
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_7raFc89NNfxHdMDVAgGa2j | 王臨吉 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王臨吉妻)（CBDB 703705）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703705&o=json)
