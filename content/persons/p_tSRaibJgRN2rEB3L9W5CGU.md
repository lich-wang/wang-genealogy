---
schema: wang-person/v1
id: p_tSRaibJgRN2rEB3L9W5CGU
status: active
merged_into: null
display_name: 王侃
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NFsNtGWFFQfSDcGbfDoALJ
        subject_person_id: p_tSRaibJgRN2rEB3L9W5CGU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tzT1eJBjtmW1VKxTeRm9jb
          claim_id: c_NFsNtGWFFQfSDcGbfDoALJ
          source_id: s_MCGC9er5PLXUmWa6RcLVPf
          stance: supports
          locator: CBDB:333656
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（333656）
          source: &a1
            id: s_MCGC9er5PLXUmWa6RcLVPf
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 333656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333656&o=json
            external_identifier: CBDB:333656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XpDBWX1B7wEqzP82J8wM9r
        subject_person_id: p_tSRaibJgRN2rEB3L9W5CGU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MQur8syXsPApAF2y78GPA7
          claim_id: c_XpDBWX1B7wEqzP82J8wM9r
          source_id: s_MCGC9er5PLXUmWa6RcLVPf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_mAL4QhHGWWw4OUTDgVoNsb
        subject_person_id: p_tSRaibJgRN2rEB3L9W5CGU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BnqT97Hd2v2PTKqLmsYzS9
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z-2Dg9X1BPR1rRBubru7E6
          claim_id: c_mAL4QhHGWWw4OUTDgVoNsb
          source_id: s_MCGC9er5PLXUmWa6RcLVPf
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BnqT97Hd2v2PTKqLmsYzS9
        status: active
        display_name: 王鼎爵
        merged_into_person_id: null
  other: []
---

# 王侃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王侃 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_BnqT97Hd2v2PTKqLmsYzS9 | 王鼎爵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王侃（CBDB 333656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333656&o=json)
