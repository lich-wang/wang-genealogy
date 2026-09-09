---
schema: wang-person/v1
id: p_F7AEiEU2jAU3jdAk1ZXndp
status: active
merged_into: null
display_name: 王宗衡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hUZFTqfs2SakxsG6BFE17V
        subject_person_id: p_F7AEiEU2jAU3jdAk1ZXndp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗衡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D3nujgBHHr9mjppPdeSH6P
          claim_id: c_hUZFTqfs2SakxsG6BFE17V
          source_id: s_bxKGM5HBretcrNdDtBirBg
          stance: supports
          locator: CBDB:23406
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23406）
          source: &a1
            id: s_bxKGM5HBretcrNdDtBirBg
            source_type: api_record
            title: 中国历代人物传记资料库：王宗衡（CBDB 23406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23406&o=json
            external_identifier: CBDB:23406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_P7CZKSsMCui8u1YsyrB3xW
        subject_person_id: p_F7AEiEU2jAU3jdAk1ZXndp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1124年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AEy4BLvhnkXxeDjz9AbxdK
          claim_id: c_P7CZKSsMCui8u1YsyrB3xW
          source_id: s_bxKGM5HBretcrNdDtBirBg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qxftG2hT7v7b4CXNxJNfZM
        subject_person_id: p_F7AEiEU2jAU3jdAk1ZXndp
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
        - id: cs_zb7PigmtFbmGSGSdMVyF4W
          claim_id: c_qxftG2hT7v7b4CXNxJNfZM
          source_id: s_bxKGM5HBretcrNdDtBirBg
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
  descendants: []
  other: []
---

# 王宗衡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗衡 | accepted |
| birth.date | 1124年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗衡（CBDB 23406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23406&o=json)
