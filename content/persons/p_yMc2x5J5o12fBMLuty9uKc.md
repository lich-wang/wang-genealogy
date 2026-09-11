---
schema: wang-person/v1
id: p_yMc2x5J5o12fBMLuty9uKc
status: active
merged_into: null
display_name: 王在文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5xa6WmPCBToos19PXxc3tz
        subject_person_id: p_yMc2x5J5o12fBMLuty9uKc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王在文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6jat8DHnKFkdVAb9fyvHsH
          claim_id: c_5xa6WmPCBToos19PXxc3tz
          source_id: s_UFawdADZ1ZFzpeRJRG6mJB
          stance: supports
          locator: CBDB:551383
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551383）
          source: &a1
            id: s_UFawdADZ1ZFzpeRJRG6mJB
            source_type: api_record
            title: 中国历代人物传记资料库：王在文（CBDB 551383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551383&o=json
            external_identifier: CBDB:551383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.507Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FquaRP3fyrQa5emDuiFEKi
        subject_person_id: p_yMc2x5J5o12fBMLuty9uKc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LSjvVKhN2hiQCH186kPQUZ
          claim_id: c_FquaRP3fyrQa5emDuiFEKi
          source_id: s_UFawdADZ1ZFzpeRJRG6mJB
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
        id: c_5_Mu7GeAdA1S1AqyXpoJ4u
        subject_person_id: p_RuQhs8uJ9fucx5As4cNei9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yMc2x5J5o12fBMLuty9uKc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g0gbI1LFNC8JCe8WLEKdEc
          claim_id: c_5_Mu7GeAdA1S1AqyXpoJ4u
          source_id: s_eZqkMQXh96bG8hubaii9QH
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160561：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eZqkMQXh96bG8hubaii9QH
            source_type: api_record
            title: 中国历代人物传记资料库：王作霖（CBDB 551382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551382&o=json
            external_identifier: CBDB:551382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.590Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RuQhs8uJ9fucx5As4cNei9
        status: active
        display_name: 王作霖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王在文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王在文 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RuQhs8uJ9fucx5As4cNei9 | 王作霖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王在文（CBDB 551383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551383&o=json)
- [中国历代人物传记资料库：王作霖（CBDB 551382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551382&o=json)
