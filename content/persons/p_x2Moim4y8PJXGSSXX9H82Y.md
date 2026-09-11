---
schema: wang-person/v1
id: p_x2Moim4y8PJXGSSXX9H82Y
status: active
merged_into: null
display_name: 王元敬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xrQ6qcvPGKEJe2MNTGcHfg
        subject_person_id: p_x2Moim4y8PJXGSSXX9H82Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SPDLEyQX4ZiS8QvjQq5FZk
          claim_id: c_xrQ6qcvPGKEJe2MNTGcHfg
          source_id: s_yA2bgjdXYPx2Bc2JrCTd8T
          stance: supports
          locator: CBDB:152396
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（152396）
          source: &a1
            id: s_yA2bgjdXYPx2Bc2JrCTd8T
            source_type: api_record
            title: 中国历代人物传记资料库：王元敬（CBDB 152396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152396&o=json
            external_identifier: CBDB:152396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.849Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LyEyQgyskN1sFEebqeN82V
        subject_person_id: p_x2Moim4y8PJXGSSXX9H82Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元敬，唐人物。籍贯新豐。（中国历代人物传记资料库 CBDB 152396）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_catm87Wj9Bns1c63j_mVM-
          claim_id: c_LyEyQgyskN1sFEebqeN82V
          source_id: s_yA2bgjdXYPx2Bc2JrCTd8T
          stance: supports
          locator: CBDB:152396
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__YwE6JJA1GHTrTdIQc_1wL
        subject_person_id: p_H5XJ9wsBqaUG7iLGVt5LMg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x2Moim4y8PJXGSSXX9H82Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_60Hsy2Yf6SJgXpOqbysYLN
          claim_id: c__YwE6JJA1GHTrTdIQc_1wL
          source_id: s_HcviPY7mVXpgS4JqnPVLWr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 340：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HcviPY7mVXpgS4JqnPVLWr
            source_type: api_record
            title: 中国历代人物传记资料库：王崇禮（CBDB 140514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140514&o=json
            external_identifier: CBDB:140514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.507Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_H5XJ9wsBqaUG7iLGVt5LMg
        status: active
        display_name: 王崇禮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元敬 | accepted |
| bio.summary | 王元敬，唐人物。籍贯新豐。（中国历代人物传记资料库 CBDB 152396） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_H5XJ9wsBqaUG7iLGVt5LMg | 王崇禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇禮（CBDB 140514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140514&o=json)
- [中国历代人物传记资料库：王元敬（CBDB 152396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152396&o=json)
