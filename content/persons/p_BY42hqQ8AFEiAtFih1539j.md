---
schema: wang-person/v1
id: p_BY42hqQ8AFEiAtFih1539j
status: active
merged_into: null
display_name: 侯氏
revision: 1
cbdb_id: 147706
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1rTvx-RkwsWYGw7A6NSq8h
        subject_person_id: p_BY42hqQ8AFEiAtFih1539j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 侯氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_veQ3x94AKNg3VsumkSxUY4
          claim_id: c_1rTvx-RkwsWYGw7A6NSq8h
          source_id: s_zY7lOtnmtvE7Dz25jv4ugp
          stance: supports
          locator: CBDB:147706
          quotation: null
          interpretation_note: CBDB 明确记录的王孫配偶
          source: &a1
            id: s_zY7lOtnmtvE7Dz25jv4ugp
            source_type: api_record
            title: 中国历代人物传记资料库：侯氏(王孫妻)（CBDB 147706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147706&o=json
            external_identifier: CBDB:147706
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
        id: c_5BxoXk5zG6zJVlflxJWtOV
        subject_person_id: p_tKaEVSh18AzjkSjVNVjE4q
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_BY42hqQ8AFEiAtFih1539j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PYk5hIYx4daXBDX5AiZwON
          claim_id: c_5BxoXk5zG6zJVlflxJWtOV
          source_id: s_zY7lOtnmtvE7Dz25jv4ugp
          stance: supports
          locator: 唐代墓誌匯編:二卷，Longshuo 8：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tKaEVSh18AzjkSjVNVjE4q
        status: active
        display_name: 王孫
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 侯氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 侯氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_tKaEVSh18AzjkSjVNVjE4q | 王孫 | accepted |

## 外部来源

- [中国历代人物传记资料库：侯氏(王孫妻)（CBDB 147706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147706&o=json)
