---
schema: wang-person/v1
id: p_hLAoWf1AQWo4vLnGd7tDaY
status: active
merged_into: null
display_name: 王榜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GFpCmSQQ9w3SrowzfzWLpX
        subject_person_id: p_hLAoWf1AQWo4vLnGd7tDaY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ia5RuMUTVbjoDkDUgJBLKe
          claim_id: c_GFpCmSQQ9w3SrowzfzWLpX
          source_id: s_DAGSZ1Dd6yxHqTFVPLf3Bo
          stance: supports
          locator: CBDB:693637
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（693637）
          source: &a1
            id: s_DAGSZ1Dd6yxHqTFVPLf3Bo
            source_type: api_record
            title: 中国历代人物传记资料库：王榜（CBDB 693637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693637&o=json
            external_identifier: CBDB:693637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.660Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hm5oSgfrysnZkehgfFdaxC
        subject_person_id: p_hLAoWf1AQWo4vLnGd7tDaY
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
        - id: cs_uHKHLwKPkZu85aFQBPEPgU
          claim_id: c_hm5oSgfrysnZkehgfFdaxC
          source_id: s_DAGSZ1Dd6yxHqTFVPLf3Bo
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
  ancestors:
    - claim:
        id: c_ejAJ-QvkIW6BDx-i0XvpVs
        subject_person_id: p_QucF3zRRQb6dEF4N9WhxLs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hLAoWf1AQWo4vLnGd7tDaY
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X3F6vcDGnyysOrzPWLKRKk
          claim_id: c_ejAJ-QvkIW6BDx-i0XvpVs
          source_id: s_DAGSZ1Dd6yxHqTFVPLf3Bo
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=294008：曾祖"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QucF3zRRQb6dEF4N9WhxLs
        status: active
        display_name: 王端
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王榜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榜 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_QucF3zRRQb6dEF4N9WhxLs | 王端 | accepted |

## 外部来源

- [中国历代人物传记资料库：王榜（CBDB 693637）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693637&o=json)
