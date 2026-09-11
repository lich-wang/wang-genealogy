---
schema: wang-person/v1
id: p_4JGDXd2PVCbJXStDWXhdLE
status: active
merged_into: null
display_name: 王三錫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_57ygFC7u81cqRgwD4tqgks
        subject_person_id: p_4JGDXd2PVCbJXStDWXhdLE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DkF8yPzhEDBXfzusHe43iJ
          claim_id: c_57ygFC7u81cqRgwD4tqgks
          source_id: s_jYfXMyb77HqGo4eb96wLP7
          stance: supports
          locator: CBDB:235147
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（235147）
          source: &a1
            id: s_jYfXMyb77HqGo4eb96wLP7
            source_type: api_record
            title: 中国历代人物传记资料库：王三錫（CBDB 235147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235147&o=json
            external_identifier: CBDB:235147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.750Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6SYhDUSEUD7LQCvJTx65HC
        subject_person_id: p_4JGDXd2PVCbJXStDWXhdLE
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
        - id: cs_8ZgwqB5gjfZGoGc1SkkXG1
          claim_id: c_6SYhDUSEUD7LQCvJTx65HC
          source_id: s_jYfXMyb77HqGo4eb96wLP7
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
        id: c_lypfC9fsyDhbdOV1wAfvht
        subject_person_id: p_4JGDXd2PVCbJXStDWXhdLE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nqlz4RmN-88jMJD_wxY_q8
          claim_id: c_lypfC9fsyDhbdOV1wAfvht
          source_id: s_jYfXMyb77HqGo4eb96wLP7
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第五十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WP2TCGKdqkuWFjHVRTiLcW
        status: active
        display_name: 王志堅
        merged_into_person_id: null
  other: []
---

# 王三錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三錫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_WP2TCGKdqkuWFjHVRTiLcW | 王志堅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三錫（CBDB 235147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235147&o=json)
