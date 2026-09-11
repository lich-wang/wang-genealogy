---
schema: wang-person/v1
id: p_v92Lfnh6nmhnJTbDdio6r9
status: active
merged_into: null
display_name: 秦德澄
revision: 1
cbdb_id: 120464
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dnuUzY_furslEaLR-qkV2X
        subject_person_id: p_v92Lfnh6nmhnJTbDdio6r9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 秦德澄
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-uWgG46PURfCXkXtYLf27R
          claim_id: c_dnuUzY_furslEaLR-qkV2X
          source_id: s__sa0XOoyKIX1I0_rRzNIVh
          stance: supports
          locator: CBDB:120464
          quotation: null
          interpretation_note: CBDB 明确记录的王朗配偶
          source: &a1
            id: s__sa0XOoyKIX1I0_rRzNIVh
            source_type: api_record
            title: 中国历代人物传记资料库：秦德澄（CBDB 120464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120464&o=json
            external_identifier: CBDB:120464
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
        id: c_oyy6MOJ5mdsOs_-VKgnuPi
        subject_person_id: p_EYrfu6prdEPRvFMWEDEnKy
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_v92Lfnh6nmhnJTbDdio6r9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GjqPY3DbzmM3y8YciAytn0
          claim_id: c_oyy6MOJ5mdsOs_-VKgnuPi
          source_id: s__sa0XOoyKIX1I0_rRzNIVh
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3548, HuWenKai #86：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EYrfu6prdEPRvFMWEDEnKy
        status: active
        display_name: 王朗
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 秦德澄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 秦德澄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_EYrfu6prdEPRvFMWEDEnKy | 王朗 | accepted |

## 外部来源

- [中国历代人物传记资料库：秦德澄（CBDB 120464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120464&o=json)
