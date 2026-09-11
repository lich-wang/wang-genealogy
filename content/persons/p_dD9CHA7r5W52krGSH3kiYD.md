---
schema: wang-person/v1
id: p_dD9CHA7r5W52krGSH3kiYD
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 157990
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kX8wqomPc2yjRXcVi5Oj7W
        subject_person_id: p_dD9CHA7r5W52krGSH3kiYD
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
        - id: cs_31aPH5qz6m5LyuBrKhXQof
          claim_id: c_kX8wqomPc2yjRXcVi5Oj7W
          source_id: s_f4nYB7roJ-4zRGp9-F9FG2
          stance: supports
          locator: CBDB:157990
          quotation: null
          interpretation_note: CBDB 明确记录的王振配偶
          source: &a1
            id: s_f4nYB7roJ-4zRGp9-F9FG2
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王振妻)（CBDB 157990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157990&o=json
            external_identifier: CBDB:157990
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
        id: c_kvEYwmGVY9gGPGz6Tb0E2E
        subject_person_id: p_3Q3HvcLsmxqfDq9R1nBQXi
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_dD9CHA7r5W52krGSH3kiYD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lRGACoecQqssBHLhOAi9R5
          claim_id: c_kvEYwmGVY9gGPGz6Tb0E2E
          source_id: s_f4nYB7roJ-4zRGp9-F9FG2
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dahe 75：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3Q3HvcLsmxqfDq9R1nBQXi
        status: active
        display_name: 王振
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
| spouses | p_3Q3HvcLsmxqfDq9R1nBQXi | 王振 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王振妻)（CBDB 157990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157990&o=json)
