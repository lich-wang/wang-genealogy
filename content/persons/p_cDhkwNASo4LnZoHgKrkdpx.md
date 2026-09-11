---
schema: wang-person/v1
id: p_cDhkwNASo4LnZoHgKrkdpx
status: active
merged_into: null
display_name: 王吉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WQFMYYGz3b5JL1anTG7c61
        subject_person_id: p_cDhkwNASo4LnZoHgKrkdpx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1iPwR6oMTawFPgZADQeBkP
          claim_id: c_WQFMYYGz3b5JL1anTG7c61
          source_id: s_H4Py2z2rrgUhZURFJfcReg
          stance: supports
          locator: CBDB:288734
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288734）
          source: &a1
            id: s_H4Py2z2rrgUhZURFJfcReg
            source_type: api_record
            title: 中国历代人物传记资料库：王吉（CBDB 288734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288734&o=json
            external_identifier: CBDB:288734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.301Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qfrE7rKNu8HA6n19BN3Aff
        subject_person_id: p_cDhkwNASo4LnZoHgKrkdpx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉，明人物。嘉靖八年進士。（中国历代人物传记资料库 CBDB 288734）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-DkyhxJQid9ZToa9hjahre
          claim_id: c_qfrE7rKNu8HA6n19BN3Aff
          source_id: s_H4Py2z2rrgUhZURFJfcReg
          stance: supports
          locator: CBDB:288734
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_Nm07r9Qq-0Sar8y_Hj5nna
        subject_person_id: p_cDhkwNASo4LnZoHgKrkdpx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Hs5dTewocAZFYmsQxmyBFY
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nlkoJSa04pr_ILJPB744kZ
          claim_id: c_Nm07r9Qq-0Sar8y_Hj5nna
          source_id: s_H4Py2z2rrgUhZURFJfcReg
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第三十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Hs5dTewocAZFYmsQxmyBFY
        status: active
        display_name: 王紳
        merged_into_person_id: null
  other: []
---

# 王吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王吉 | accepted |
| bio.summary | 王吉，明人物。嘉靖八年進士。（中国历代人物传记资料库 CBDB 288734） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Hs5dTewocAZFYmsQxmyBFY | 王紳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王吉（CBDB 288734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288734&o=json)
