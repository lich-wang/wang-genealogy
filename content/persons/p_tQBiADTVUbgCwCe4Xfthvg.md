---
schema: wang-person/v1
id: p_tQBiADTVUbgCwCe4Xfthvg
status: active
merged_into: null
display_name: 王錀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_127uLSnwC2pU59r5bACfBs
        subject_person_id: p_tQBiADTVUbgCwCe4Xfthvg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fsxnHT9ZgKrsRj3hFRAyDW
          claim_id: c_127uLSnwC2pU59r5bACfBs
          source_id: s_ymx9oGy1YkFFt279XVv9dc
          stance: supports
          locator: CBDB:336578
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336578）
          source: &a1
            id: s_ymx9oGy1YkFFt279XVv9dc
            source_type: api_record
            title: 中国历代人物传记资料库：王錀（CBDB 336578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336578&o=json
            external_identifier: CBDB:336578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.484Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5YXJuEK1bKUjYMVrMffPvB
        subject_person_id: p_tQBiADTVUbgCwCe4Xfthvg
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
        - id: cs_1TcZXEdkNtjREnURitQLpj
          claim_id: c_5YXJuEK1bKUjYMVrMffPvB
          source_id: s_ymx9oGy1YkFFt279XVv9dc
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
        id: c_YjFmlcnxQFl8_yiDRqrAHG
        subject_person_id: p_tQBiADTVUbgCwCe4Xfthvg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3iyxEBFwgRpJCsXBwB3FWC
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uudrAgrE8WNgVP0Wv6nB65
          claim_id: c_YjFmlcnxQFl8_yiDRqrAHG
          source_id: s_ymx9oGy1YkFFt279XVv9dc
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百零六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3iyxEBFwgRpJCsXBwB3FWC
        status: active
        display_name: 王恩民
        merged_into_person_id: null
  other: []
---

# 王錀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錀 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_3iyxEBFwgRpJCsXBwB3FWC | 王恩民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王錀（CBDB 336578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336578&o=json)
