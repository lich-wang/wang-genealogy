---
schema: wang-person/v1
id: p_g8hBVrZnnTJHTnjkjttuVs
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 276122
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VOZm_I7LZvTLbjpI-VWZed
        subject_person_id: p_g8hBVrZnnTJHTnjkjttuVs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏，明人物。正德六年進士。（中国历代人物传记资料库 CBDB 276122）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a7aCIc0OEYn-rFqyePkmS7
          claim_id: c_VOZm_I7LZvTLbjpI-VWZed
          source_id: s_LWku-H3TQj5UlvZ95b9VbD
          stance: supports
          locator: CBDB:276122
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LWku-H3TQj5UlvZ95b9VbD
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王元凱妻)（CBDB 276122）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276122&o=json
            external_identifier: CBDB:276122
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_0mWpzMnWDfKccyeO-U_i_2
        subject_person_id: p_g8hBVrZnnTJHTnjkjttuVs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J-WvAyPEviah2KOxEn7lYd
          claim_id: c_0mWpzMnWDfKccyeO-U_i_2
          source_id: s_LWku-H3TQj5UlvZ95b9VbD
          stance: supports
          locator: CBDB:276122
          quotation: null
          interpretation_note: CBDB 明确记录的王元凱配偶
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
        id: c_MFanLdB0_SFhhN44BeuEhc
        subject_person_id: p_DYYX5QMN2Am56hJCjJrxsQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_g8hBVrZnnTJHTnjkjttuVs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EvBLXW5OqNRn_WgsO83uad
          claim_id: c_MFanLdB0_SFhhN44BeuEhc
          source_id: s_LWku-H3TQj5UlvZ95b9VbD
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第三十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DYYX5QMN2Am56hJCjJrxsQ
        status: active
        display_name: 王元凱
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 張氏，明人物。正德六年進士。（中国历代人物传记资料库 CBDB 276122） | accepted |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_DYYX5QMN2Am56hJCjJrxsQ | 王元凱 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王元凱妻)（CBDB 276122）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276122&o=json)
