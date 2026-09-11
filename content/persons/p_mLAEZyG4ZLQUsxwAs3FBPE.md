---
schema: wang-person/v1
id: p_mLAEZyG4ZLQUsxwAs3FBPE
status: active
merged_into: null
display_name: 王承璟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zBncMiEPzh7kYACMHj9nFa
        subject_person_id: p_mLAEZyG4ZLQUsxwAs3FBPE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承璟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8q9JwDmXobZQYBRke8E93X
          claim_id: c_zBncMiEPzh7kYACMHj9nFa
          source_id: s_ZUeWeM86Jgrao9XvXgmBCN
          stance: supports
          locator: CBDB:191810
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191810）
          source: &a1
            id: s_ZUeWeM86Jgrao9XvXgmBCN
            source_type: api_record
            title: 中国历代人物传记资料库：王承璟（CBDB 191810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191810&o=json
            external_identifier: CBDB:191810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.286Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_kW7QJNvgC2xCqxCDaDD8Hw
        subject_person_id: p_mLAEZyG4ZLQUsxwAs3FBPE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 767年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dWoqjBv2jjbM53AAf89fHp
          claim_id: c_kW7QJNvgC2xCqxCDaDD8Hw
          source_id: s_ZUeWeM86Jgrao9XvXgmBCN
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
        id: c_DXGA3aTmn1x3jpxiAHZD57
        subject_person_id: p_mLAEZyG4ZLQUsxwAs3FBPE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LztnPTHAML1Wo7R6kC981K
          claim_id: c_DXGA3aTmn1x3jpxiAHZD57
          source_id: s_ZUeWeM86Jgrao9XvXgmBCN
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
        id: c_m8HRm5S7llycr42Dt_DiEU
        subject_person_id: p_WMa1QLHmNSGif1KrYC4BMm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mLAEZyG4ZLQUsxwAs3FBPE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ufw__ThwAxcJpp2lV2bZoM
          claim_id: c_m8HRm5S7llycr42Dt_DiEU
          source_id: s_ZUeWeM86Jgrao9XvXgmBCN
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WMa1QLHmNSGif1KrYC4BMm
        status: active
        display_name: 王守儉
        merged_into_person_id: null
  children:
    - claim:
        id: c_d_wPBfk7NBrglD8SJcfMWe
        subject_person_id: p_mLAEZyG4ZLQUsxwAs3FBPE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hpkb5p14cGd4ZGWstBx7hV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ctgk3JyTZAN8H1Ebk-9ndp
          claim_id: c_d_wPBfk7NBrglD8SJcfMWe
          source_id: s_idVqaUxQv9h9182j1mi7EL
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_idVqaUxQv9h9182j1mi7EL
            source_type: api_record
            title: 中国历代人物传记资料库：王晤（CBDB 191809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191809&o=json
            external_identifier: CBDB:191809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.379Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Hpkb5p14cGd4ZGWstBx7hV
        status: active
        display_name: 王晤
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承璟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承璟 | accepted |
| death.date | 767年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WMa1QLHmNSGif1KrYC4BMm | 王守儉 | accepted |
| children | p_Hpkb5p14cGd4ZGWstBx7hV | 王晤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承璟（CBDB 191810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191810&o=json)
- [中国历代人物传记资料库：王晤（CBDB 191809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191809&o=json)
