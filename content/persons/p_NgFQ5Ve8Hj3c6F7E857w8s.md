---
schema: wang-person/v1
id: p_NgFQ5Ve8Hj3c6F7E857w8s
status: active
merged_into: null
display_name: 王文表
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9q46sAwQuGNLX2x1E5GdNq
        subject_person_id: p_NgFQ5Ve8Hj3c6F7E857w8s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文表
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rqyTrbw8fbS1sAHFRcy3G3
          claim_id: c_9q46sAwQuGNLX2x1E5GdNq
          source_id: s_KLT27W1WZ8dRqbTQmmg1kW
          stance: supports
          locator: CBDB:256272
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（256272）
          source: &a1
            id: s_KLT27W1WZ8dRqbTQmmg1kW
            source_type: api_record
            title: 中国历代人物传记资料库：王文表（CBDB 256272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256272&o=json
            external_identifier: CBDB:256272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.382Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WbjmZPH1q9HJiARYDnsi3W
        subject_person_id: p_NgFQ5Ve8Hj3c6F7E857w8s
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
        - id: cs_JK9xhKAww8BSEzsyCTDHsK
          claim_id: c_WbjmZPH1q9HJiARYDnsi3W
          source_id: s_KLT27W1WZ8dRqbTQmmg1kW
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
        id: c_ztoipjYwidjr8O1IB7LeqP
        subject_person_id: p_NgFQ5Ve8Hj3c6F7E857w8s
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_c3HeRQ2gB1HgRTMUsUmrLf
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4pU56TnCZ3cdEwh4SZ7xVc
          claim_id: c_ztoipjYwidjr8O1IB7LeqP
          source_id: s_WaYus5bsYAt5fbzyJEdfbZ
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第七十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WaYus5bsYAt5fbzyJEdfbZ
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 126647）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126647&o=json
            external_identifier: CBDB:126647
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.093Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_c3HeRQ2gB1HgRTMUsUmrLf
        status: active
        display_name: 王泰
        merged_into_person_id: null
  other: []
---

# 王文表

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文表 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_c3HeRQ2gB1HgRTMUsUmrLf | 王泰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王泰（CBDB 126647）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126647&o=json)
- [中国历代人物传记资料库：王文表（CBDB 256272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256272&o=json)
