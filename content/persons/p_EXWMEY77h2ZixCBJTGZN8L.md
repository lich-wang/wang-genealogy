---
schema: wang-person/v1
id: p_EXWMEY77h2ZixCBJTGZN8L
status: active
merged_into: null
display_name: 王朝遠
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_51dM6FXTZJqDjgu3vzYnYy
        subject_person_id: p_EXWMEY77h2ZixCBJTGZN8L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sJV4grVAFXsPwZuzAV8RZ7
          claim_id: c_51dM6FXTZJqDjgu3vzYnYy
          source_id: s_mspaKvtFWSbB4qe49Xevk1
          stance: supports
          locator: CBDB:126720
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126720）
          source: &a1
            id: s_mspaKvtFWSbB4qe49Xevk1
            source_type: api_record
            title: 中国历代人物传记资料库：王朝遠（CBDB 126720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126720&o=json
            external_identifier: CBDB:126720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.182Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ghHAPAPXyMoh5WAy1QJo9X
        subject_person_id: p_EXWMEY77h2ZixCBJTGZN8L
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1423年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AqV7M1oKiQ4v87CMo9Yh61
          claim_id: c_ghHAPAPXyMoh5WAy1QJo9X
          source_id: s_mspaKvtFWSbB4qe49Xevk1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_RCqQiLN7Ka97LYhgRFTDNG
        subject_person_id: p_EXWMEY77h2ZixCBJTGZN8L
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1480年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o1GcbLKPQ55giqWMLzrfQo
          claim_id: c_RCqQiLN7Ka97LYhgRFTDNG
          source_id: s_mspaKvtFWSbB4qe49Xevk1
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
        id: c_aNYBq527hazq1f1SqW5Rh3
        subject_person_id: p_EXWMEY77h2ZixCBJTGZN8L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝遠（1423年—1480年），明人物。明清進士進士，籍贯進賢，身份为以疾廢，入仕進士。（中国历代人物传记资料库 CBDB 126720）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gjTpH4kqItq-Ifau2Of8ZX
          claim_id: c_aNYBq527hazq1f1SqW5Rh3
          source_id: s_mspaKvtFWSbB4qe49Xevk1
          stance: supports
          locator: CBDB:126720
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
  spouses:
    - claim:
        id: c_wxNwWt5OFQ6rBy-EQ0zxEd
        subject_person_id: p_EXWMEY77h2ZixCBJTGZN8L
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Nmg6KFkS7bckA1rhgdfQW6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pWpD97taoVUK79if-ZpHTZ
          claim_id: c_wxNwWt5OFQ6rBy-EQ0zxEd
          source_id: s_VICba2pWJzJRrcCvldGPEz
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第二甲第十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VICba2pWJzJRrcCvldGPEz
            source_type: api_record
            title: 中国历代人物传记资料库：某氏(王朝遠妻)（CBDB 249255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249255&o=json
            external_identifier: CBDB:249255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Nmg6KFkS7bckA1rhgdfQW6
        status: active
        display_name: 某氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_vhmFUcwaXdtkQgCCx1f_C0
        subject_person_id: p_g5Ha41wvakoJ9LUZR1yboJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EXWMEY77h2ZixCBJTGZN8L
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lrMrUOsTBOW5yXWkpby7AI
          claim_id: c_vhmFUcwaXdtkQgCCx1f_C0
          source_id: s_mspaKvtFWSbB4qe49Xevk1
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第二甲第十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_g5Ha41wvakoJ9LUZR1yboJ
        status: active
        display_name: 王伯某
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王朝遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝遠 | accepted |
| birth.date | 1423年 | accepted |
| death.date | 1480年 | accepted |
| bio.summary | 王朝遠（1423年—1480年），明人物。明清進士進士，籍贯進賢，身份为以疾廢，入仕進士。（中国历代人物传记资料库 CBDB 126720） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Nmg6KFkS7bckA1rhgdfQW6 | 某氏 | accepted |
| ancestors | p_g5Ha41wvakoJ9LUZR1yboJ | 王伯某 | accepted |

## 外部来源

- [中国历代人物传记资料库：某氏(王朝遠妻)（CBDB 249255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249255&o=json)
- [中国历代人物传记资料库：王朝遠（CBDB 126720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126720&o=json)
