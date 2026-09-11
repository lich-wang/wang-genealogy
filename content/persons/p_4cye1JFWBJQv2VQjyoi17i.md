---
schema: wang-person/v1
id: p_4cye1JFWBJQv2VQjyoi17i
status: active
merged_into: null
display_name: 王㬇
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nq9r7cdv6DSGES56MAALgE
        subject_person_id: p_4cye1JFWBJQv2VQjyoi17i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王㬇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jDR8ZrLiX69nLrwuDMFtk7
          claim_id: c_Nq9r7cdv6DSGES56MAALgE
          source_id: s_ZgyH83hJEC3GCk1HRZreAC
          stance: supports
          locator: CBDB:1820
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1820）
          source: &a1
            id: s_ZgyH83hJEC3GCk1HRZreAC
            source_type: api_record
            title: 中国历代人物传记资料库：王㬇（CBDB 1820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1820&o=json
            external_identifier: CBDB:1820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.285Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_mB1Ne7PbFYYQ63GE68axZf
        subject_person_id: p_4cye1JFWBJQv2VQjyoi17i
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1147年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7DaNK8JWU5g7E1tu6Xxuz7
          claim_id: c_mB1Ne7PbFYYQ63GE68axZf
          source_id: s_ZgyH83hJEC3GCk1HRZreAC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YibSJEPcdsoVN25nKYGsN8
        subject_person_id: p_4cye1JFWBJQv2VQjyoi17i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hRS3pS2Kh4BtLeaoeqZzB7
          claim_id: c_YibSJEPcdsoVN25nKYGsN8
          source_id: s_ZgyH83hJEC3GCk1HRZreAC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_H4rEIA1nC0gpwJgmkw5EEV
        subject_person_id: p_V7ycLeFaKcwDLu6Nqpp4GD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4cye1JFWBJQv2VQjyoi17i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-Ci6AwNfN2ZlBZXqapTOYf
          claim_id: c_H4rEIA1nC0gpwJgmkw5EEV
          source_id: s_ZgyH83hJEC3GCk1HRZreAC
          stance: supports
          locator: CBDB 双向互证（父 王仲山 ⇄ 子 王㬇）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_V7ycLeFaKcwDLu6Nqpp4GD
        status: active
        display_name: 王仲山
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_KCEXqq7Y5MDCcRTppapeYz
        subject_person_id: p_4cye1JFWBJQv2VQjyoi17i
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_NwyPZc4vfWTSFrubPAj3aq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rfy4WIjW1PzQlefNmtQIKP
          claim_id: c_KCEXqq7Y5MDCcRTppapeYz
          source_id: s_V0zDfM4KVI2ntBCaiZQnkh
          stance: supports
          locator: 建炎以來繫年要錄，830-831：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_V0zDfM4KVI2ntBCaiZQnkh
            source_type: api_record
            title: 中国历代人物传记资料库：鄭鄭氏(王?妻)（CBDB 385325）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385325&o=json
            external_identifier: CBDB:385325
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NwyPZc4vfWTSFrubPAj3aq
        status: active
        display_name: 鄭鄭氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_8kvzEjBOxVn4veEnieLoS0
        subject_person_id: p_KzB2C1aLBuDGmUVnrc9So3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4cye1JFWBJQv2VQjyoi17i
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3bvTGNDRUtinthcPVdMNc8
          claim_id: c_8kvzEjBOxVn4veEnieLoS0
          source_id: s_ZgyH83hJEC3GCk1HRZreAC
          stance: supports
          locator: 宋人傳記資料索引(電子版)：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KzB2C1aLBuDGmUVnrc9So3
        status: active
        display_name: 王珪
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王㬇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王㬇 | accepted |
| death.date | 1147年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_V7ycLeFaKcwDLu6Nqpp4GD | 王仲山 | accepted |
| spouses | p_NwyPZc4vfWTSFrubPAj3aq | 鄭鄭氏 | accepted |
| ancestors | p_KzB2C1aLBuDGmUVnrc9So3 | 王珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王㬇（CBDB 1820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1820&o=json)
- [中国历代人物传记资料库：鄭鄭氏(王?妻)（CBDB 385325）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385325&o=json)
