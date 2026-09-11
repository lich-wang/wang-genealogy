---
schema: wang-person/v1
id: p_FGqHZ31NWg2R6Ke3yWJUS7
status: active
merged_into: null
display_name: 潘氏
revision: 1
cbdb_id: 221575
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9rsRtKUF7PrU3r5b49Gv1H
        subject_person_id: p_FGqHZ31NWg2R6Ke3yWJUS7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 潘氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vua4UT5fc-5IAHAOSl_gXQ
          claim_id: c_9rsRtKUF7PrU3r5b49Gv1H
          source_id: s_mj0NThQIF6g6PDsOkbQpIt
          stance: supports
          locator: CBDB:221575
          quotation: null
          interpretation_note: CBDB 明确记录的王應麟配偶
          source: &a1
            id: s_mj0NThQIF6g6PDsOkbQpIt
            source_type: api_record
            title: 中国历代人物传记资料库：潘氏(王應麟妻)（CBDB 221575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221575&o=json
            external_identifier: CBDB:221575
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
        id: c_avewCdSF2-lOHSfrvIVSGC
        subject_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_FGqHZ31NWg2R6Ke3yWJUS7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t-q-FVNjZUX_7Bd7iwtMEJ
          claim_id: c_avewCdSF2-lOHSfrvIVSGC
          source_id: s_mj0NThQIF6g6PDsOkbQpIt
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hnvFbFQMD3qoDJL59kCJv1
        status: active
        display_name: 王應麟
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 潘氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 潘氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_hnvFbFQMD3qoDJL59kCJv1 | 王應麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：潘氏(王應麟妻)（CBDB 221575）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221575&o=json)
