---
schema: wang-person/v1
id: p_8FA8zcXJnzjSjXxh6hwsCf
status: active
merged_into: null
display_name: 沈國相
revision: 1
cbdb_id: 691795
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rH6S1yhrNBSTjcZhCBkYyD
        subject_person_id: p_8FA8zcXJnzjSjXxh6hwsCf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 沈國相
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Z9LyQY3pQ0iEqBj6Q4XeN
          claim_id: c_rH6S1yhrNBSTjcZhCBkYyD
          source_id: s_e7WvRYXZ0tcvXpWeXZS-tK
          stance: supports
          locator: CBDB:691795
          quotation: null
          interpretation_note: CBDB 明确记录的王玉貞配偶
          source: &a1
            id: s_e7WvRYXZ0tcvXpWeXZS-tK
            source_type: api_record
            title: 中国历代人物传记资料库：沈國相（CBDB 691795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691795&o=json
            external_identifier: CBDB:691795
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
        id: c_RX0VZhz5DUTbMKdhUWK2Y6
        subject_person_id: p_5UK4yum3qfMC7B8J5R5943
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8FA8zcXJnzjSjXxh6hwsCf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1H36OP9aEXyvK-_aiKIxrO
          claim_id: c_RX0VZhz5DUTbMKdhUWK2Y6
          source_id: s_e7WvRYXZ0tcvXpWeXZS-tK
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=294151：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5UK4yum3qfMC7B8J5R5943
        status: active
        display_name: 王玉貞
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 沈國相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 沈國相 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5UK4yum3qfMC7B8J5R5943 | 王玉貞 | accepted |

## 外部来源

- [中国历代人物传记资料库：沈國相（CBDB 691795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691795&o=json)
