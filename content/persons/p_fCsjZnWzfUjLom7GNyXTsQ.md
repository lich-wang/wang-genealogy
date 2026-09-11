---
schema: wang-person/v1
id: p_fCsjZnWzfUjLom7GNyXTsQ
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 238409
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M20-j_6p64yWyUxEgyeJpM
        subject_person_id: p_fCsjZnWzfUjLom7GNyXTsQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏，明人物。成化二年進士。（中国历代人物传记资料库 CBDB 238409）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zhYfBZyAC1_p2RQI3HnMMr
          claim_id: c_M20-j_6p64yWyUxEgyeJpM
          source_id: s_YQJk-Imzltb0ydI6NGlwUH
          stance: supports
          locator: CBDB:238409
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_YQJk-Imzltb0ydI6NGlwUH
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王相妻)（CBDB 238409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238409&o=json
            external_identifier: CBDB:238409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iakCBfJnZgROlBZYFty-fM
        subject_person_id: p_fCsjZnWzfUjLom7GNyXTsQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_defnDBWzYe2GZT0av7H01H
          claim_id: c_iakCBfJnZgROlBZYFty-fM
          source_id: s_YQJk-Imzltb0ydI6NGlwUH
          stance: supports
          locator: CBDB:238409
          quotation: null
          interpretation_note: CBDB 明确记录的王相配偶
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
        id: c_p7-5xlRUjPEmuEFBXpIkNS
        subject_person_id: p_b2PRCnVEBsHtgqHZaJPLzQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fCsjZnWzfUjLom7GNyXTsQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fuuoDvYRr43Bcqi9mTzSWD
          claim_id: c_p7-5xlRUjPEmuEFBXpIkNS
          source_id: s_YQJk-Imzltb0ydI6NGlwUH
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第九十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_b2PRCnVEBsHtgqHZaJPLzQ
        status: active
        display_name: 王相
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陳氏，明人物。成化二年進士。（中国历代人物传记资料库 CBDB 238409） | accepted |
| name.primary | 陳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_b2PRCnVEBsHtgqHZaJPLzQ | 王相 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王相妻)（CBDB 238409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238409&o=json)
