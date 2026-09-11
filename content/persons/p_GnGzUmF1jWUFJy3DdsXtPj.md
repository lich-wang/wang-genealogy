---
schema: wang-person/v1
id: p_GnGzUmF1jWUFJy3DdsXtPj
status: active
merged_into: null
display_name: 高氏
revision: 1
cbdb_id: 163048
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gOqNz9iDonbQCxaYskolZX
        subject_person_id: p_GnGzUmF1jWUFJy3DdsXtPj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 高氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iWZPABgtvOXl51BTeWoUIu
          claim_id: c_gOqNz9iDonbQCxaYskolZX
          source_id: s_wkjc0X2tJP9RMpZyeAq7sU
          stance: supports
          locator: CBDB:163048
          quotation: null
          interpretation_note: CBDB 明确记录的王挺配偶
          source: &a1
            id: s_wkjc0X2tJP9RMpZyeAq7sU
            source_type: api_record
            title: 中国历代人物传记资料库：高氏(王挺妻)（CBDB 163048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163048&o=json
            external_identifier: CBDB:163048
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
        id: c_KN0WVNPe8NKXWP4oQx96I_
        subject_person_id: p_hH347VTdzpHFec1Sm33N8h
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GnGzUmF1jWUFJy3DdsXtPj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xKkftbu7D61JBD4BOKjNJh
          claim_id: c_KN0WVNPe8NKXWP4oQx96I_
          source_id: s_wkjc0X2tJP9RMpZyeAq7sU
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Changshou2：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hH347VTdzpHFec1Sm33N8h
        status: active
        display_name: 王挺
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 高氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 高氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_hH347VTdzpHFec1Sm33N8h | 王挺 | accepted |

## 外部来源

- [中国历代人物传记资料库：高氏(王挺妻)（CBDB 163048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163048&o=json)
