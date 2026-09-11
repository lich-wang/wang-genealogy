---
schema: wang-person/v1
id: p_JPpDP1bCMNthbvRocDHp12
status: active
merged_into: null
display_name: 曹氏
revision: 1
cbdb_id: 263785
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_lmSVz3-tOCiY7vw7KUFEem
        subject_person_id: p_JPpDP1bCMNthbvRocDHp12
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 曹氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r2vkYW4d86ANevq_LOwsS2
          claim_id: c_lmSVz3-tOCiY7vw7KUFEem
          source_id: s_CWujTfh6N9IMn7UfP5olj0
          stance: supports
          locator: CBDB:263785
          quotation: null
          interpretation_note: CBDB 明确记录的王序配偶
          source: &a1
            id: s_CWujTfh6N9IMn7UfP5olj0
            source_type: api_record
            title: 中国历代人物传记资料库：曹氏(王序妻)（CBDB 263785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263785&o=json
            external_identifier: CBDB:263785
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
        id: c_eLZGbSlAMAfmtIg_VRG7J6
        subject_person_id: p_5MQS7xTZ7xaRFjWYKoXEEG
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_JPpDP1bCMNthbvRocDHp12
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R_Q-etkPspb-0KqYr7WBdy
          claim_id: c_eLZGbSlAMAfmtIg_VRG7J6
          source_id: s_CWujTfh6N9IMn7UfP5olj0
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第二百零五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5MQS7xTZ7xaRFjWYKoXEEG
        status: active
        display_name: 王序
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 曹氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 曹氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5MQS7xTZ7xaRFjWYKoXEEG | 王序 | accepted |

## 外部来源

- [中国历代人物传记资料库：曹氏(王序妻)（CBDB 263785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263785&o=json)
