---
schema: wang-person/v1
id: p_P1fFZH2EWbTNnttAV5XWfV
status: active
merged_into: null
display_name: 吉氏
revision: 1
cbdb_id: 148226
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cScXPGa_rwfHx14lleekmD
        subject_person_id: p_P1fFZH2EWbTNnttAV5XWfV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ueTw05w6MkyvbuOVuRt7-z
          claim_id: c_cScXPGa_rwfHx14lleekmD
          source_id: s_6MpLD8KAUKuT3P8EYb9teZ
          stance: supports
          locator: CBDB:148226
          quotation: null
          interpretation_note: CBDB 明确记录的王纂配偶
          source: &a1
            id: s_6MpLD8KAUKuT3P8EYb9teZ
            source_type: api_record
            title: 中国历代人物传记资料库：吉氏(王纂妻)（CBDB 148226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148226&o=json
            external_identifier: CBDB:148226
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
        id: c_fp2yoztCA3wjzGUqoFWYOW
        subject_person_id: p_jajPuq8xqfFEmv2zKdfZYU
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_P1fFZH2EWbTNnttAV5XWfV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t-FQgw97_5norjLLosDsye
          claim_id: c_fp2yoztCA3wjzGUqoFWYOW
          source_id: s_6MpLD8KAUKuT3P8EYb9teZ
          stance: supports
          locator: 唐代墓誌匯編:二卷，Qianfeng 39：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jajPuq8xqfFEmv2zKdfZYU
        status: active
        display_name: 王纂
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 吉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 吉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_jajPuq8xqfFEmv2zKdfZYU | 王纂 | accepted |

## 外部来源

- [中国历代人物传记资料库：吉氏(王纂妻)（CBDB 148226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148226&o=json)
