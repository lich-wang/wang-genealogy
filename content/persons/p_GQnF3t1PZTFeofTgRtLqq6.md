---
schema: wang-person/v1
id: p_GQnF3t1PZTFeofTgRtLqq6
status: active
merged_into: null
display_name: 王錦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AA9aqMpJF4syX6nNjQmLXA
        subject_person_id: p_GQnF3t1PZTFeofTgRtLqq6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7KuUSLq3S6NdfJtSGkHZMd
          claim_id: c_AA9aqMpJF4syX6nNjQmLXA
          source_id: s_KgYi5HynfTB6wY92LuzPc3
          stance: supports
          locator: CBDB:309421
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309421）
          source: &a1
            id: s_KgYi5HynfTB6wY92LuzPc3
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 309421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309421&o=json
            external_identifier: CBDB:309421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.816Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jk7o89PEXZ1gT3kTrx93g2
        subject_person_id: p_GQnF3t1PZTFeofTgRtLqq6
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
        - id: cs_NcXyMkqhG917BZyAwWK67r
          claim_id: c_Jk7o89PEXZ1gT3kTrx93g2
          source_id: s_KgYi5HynfTB6wY92LuzPc3
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
        id: c_DAZFi0BJuFIlK7cfuhabax
        subject_person_id: p_GQnF3t1PZTFeofTgRtLqq6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2i8i45vd3ioWAFSmwmfK42
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s99orYb84HCjvAJtHPM07m
          claim_id: c_DAZFi0BJuFIlK7cfuhabax
          source_id: s_b4gLzeKTw3AayU519ocN97
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第八十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_b4gLzeKTw3AayU519ocN97
            source_type: api_record
            title: 中国历代人物传记资料库：王良貴（CBDB 126530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126530&o=json
            external_identifier: CBDB:126530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2i8i45vd3ioWAFSmwmfK42
        status: active
        display_name: 王良貴
        merged_into_person_id: null
  other: []
---

# 王錦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錦 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2i8i45vd3ioWAFSmwmfK42 | 王良貴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王錦（CBDB 309421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309421&o=json)
- [中国历代人物传记资料库：王良貴（CBDB 126530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126530&o=json)
