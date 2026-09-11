---
schema: wang-person/v1
id: p_E1MN8v4fUcaVhsZPNKyJbM
status: active
merged_into: null
display_name: 王崇義
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pcmkT51r7esXE7hHWTHFnz
        subject_person_id: p_E1MN8v4fUcaVhsZPNKyJbM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i3u8mtNKjBTiiw9yuT5M4j
          claim_id: c_pcmkT51r7esXE7hHWTHFnz
          source_id: s_F6y4SeFWHuzCVYWWJoZFtG
          stance: supports
          locator: CBDB:152083
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（152083）
          source: &a1
            id: s_F6y4SeFWHuzCVYWWJoZFtG
            source_type: api_record
            title: 中国历代人物传记资料库：王崇義（CBDB 152083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152083&o=json
            external_identifier: CBDB:152083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.843Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Dh97sXyH9FMQDg8Jp9oaZN
        subject_person_id: p_E1MN8v4fUcaVhsZPNKyJbM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XF4NgbM4JGW1fk5FdsemwA
          claim_id: c_Dh97sXyH9FMQDg8Jp9oaZN
          source_id: s_F6y4SeFWHuzCVYWWJoZFtG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UxL3ZsvygAiYyX8lJHoX5Z
        subject_person_id: p_xfuuciWrW1oRJMYJWgyk2k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E1MN8v4fUcaVhsZPNKyJbM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aaQzY4Yf9GWfBpbHQtNgCu
          claim_id: c_UxL3ZsvygAiYyX8lJHoX5Z
          source_id: s_F6y4SeFWHuzCVYWWJoZFtG
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 268：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xfuuciWrW1oRJMYJWgyk2k
        status: active
        display_name: 王晉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇義 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xfuuciWrW1oRJMYJWgyk2k | 王晉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇義（CBDB 152083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152083&o=json)
