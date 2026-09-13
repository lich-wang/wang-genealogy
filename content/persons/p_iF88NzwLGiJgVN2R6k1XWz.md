---
schema: wang-person/v1
id: p_iF88NzwLGiJgVN2R6k1XWz
status: active
merged_into: null
display_name: 王滸
cbdb_id: 39073
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GDGT2ihgDWNEkxHhdWCEDj
        subject_person_id: p_iF88NzwLGiJgVN2R6k1XWz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滸（卒于1129年），宋人物。曾任通判。（中国历代人物传记资料库 CBDB 39073）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_15nLc5NEXpXXKYIDphUBcN
          claim_id: c_GDGT2ihgDWNEkxHhdWCEDj
          source_id: s_E4vBjFjkuWk5oPKcBMDG2Z
          stance: supports
          locator: CBDB:39073
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_E4vBjFjkuWk5oPKcBMDG2Z
            source_type: api_record
            title: 中国历代人物传记资料库：王滸（CBDB 39073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39073&o=json
            external_identifier: CBDB:39073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_tEaU2k3uwcayjTVhSAKbEG
        subject_person_id: p_iF88NzwLGiJgVN2R6k1XWz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1129年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1129-01-01
            latest: 1129-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aReyJydZYBLGfTmbPuDKnB
          claim_id: c_tEaU2k3uwcayjTVhSAKbEG
          source_id: s_E4vBjFjkuWk5oPKcBMDG2Z
          stance: supports
          locator: CBDB:39073
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1129
          source:
            id: s_E4vBjFjkuWk5oPKcBMDG2Z
            source_type: api_record
            title: 中国历代人物传记资料库：王滸（CBDB 39073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39073&o=json
            external_identifier: CBDB:39073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_asnCB44DbdCP5a114h4euP
        subject_person_id: p_iF88NzwLGiJgVN2R6k1XWz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xdvt91qn9QDtpk3dNt4raX
          claim_id: c_asnCB44DbdCP5a114h4euP
          source_id: s_E4vBjFjkuWk5oPKcBMDG2Z
          stance: supports
          locator: CBDB:39073
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1129
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

# 王滸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王滸（卒于1129年），宋人物。曾任通判。（中国历代人物传记资料库 CBDB 39073） | accepted |
| death.date | 1129年 | accepted |
| name.primary | 王滸 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王滸（CBDB 39073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39073&o=json)
