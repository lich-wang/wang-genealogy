---
schema: wang-person/v1
id: p_8Z1UQ2GEaLW3fJdsaEnJcd
status: active
merged_into: null
display_name: 王哲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PNMiBgpDNCqJcrE9uQ2DVX
        subject_person_id: p_8Z1UQ2GEaLW3fJdsaEnJcd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王哲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vo3er7s2MgYgmos3hDXsRQ
          claim_id: c_PNMiBgpDNCqJcrE9uQ2DVX
          source_id: s_YEFc76BF7d689AbSJF4e5B
          stance: supports
          locator: CBDB:126636
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126636）
          source: &a1
            id: s_YEFc76BF7d689AbSJF4e5B
            source_type: api_record
            title: 中国历代人物传记资料库：王哲（CBDB 126636）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126636&o=json
            external_identifier: CBDB:126636
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.078Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YQsQ56bBSEmt7ND7rKcrNM
        subject_person_id: p_8Z1UQ2GEaLW3fJdsaEnJcd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1457年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jn7fitTzyttRiimkzEEgWe
          claim_id: c_YQsQ56bBSEmt7ND7rKcrNM
          source_id: s_YEFc76BF7d689AbSJF4e5B
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
        id: c_71ys1BPk5922jFwbhBjvsQ
        subject_person_id: p_8Z1UQ2GEaLW3fJdsaEnJcd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1513年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4CHWNAD89X3eYLNhBzK3so
          claim_id: c_71ys1BPk5922jFwbhBjvsQ
          source_id: s_YEFc76BF7d689AbSJF4e5B
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
        id: c_zk2SXdPh2HY9wxEL9NNvDA
        subject_person_id: p_8Z1UQ2GEaLW3fJdsaEnJcd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J63Dr69RRy3zQhvkAaUxNH
          claim_id: c_zk2SXdPh2HY9wxEL9NNvDA
          source_id: s_YEFc76BF7d689AbSJF4e5B
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
        id: c_1N2mkv4ukXNxA73MxKU5c3
        subject_person_id: p_qH965HRtNLEtPyefHwgvpn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8Z1UQ2GEaLW3fJdsaEnJcd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vS4Kzjgv4fYK1EkhDfWocF
          claim_id: c_1N2mkv4ukXNxA73MxKU5c3
          source_id: s_YEFc76BF7d689AbSJF4e5B
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第一百一十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qH965HRtNLEtPyefHwgvpn
        status: active
        display_name: 王宗吉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_n8KmYcvB0IOUaxbD_oWJlo
        subject_person_id: p_bsxBFWWTq3r1yzvpU9nNr1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8Z1UQ2GEaLW3fJdsaEnJcd
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__75TYO-66ILGcxWiJQU2eV
          claim_id: c_n8KmYcvB0IOUaxbD_oWJlo
          source_id: s_YEFc76BF7d689AbSJF4e5B
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第一百一十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bsxBFWWTq3r1yzvpU9nNr1
        status: active
        display_name: 王湜
        merged_into_person_id: null
    - claim:
        id: c_1dzAWuuwm-in9rRTZIK30R
        subject_person_id: p_9BAMAYsYbLvwtewfm2SjBY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8Z1UQ2GEaLW3fJdsaEnJcd
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JbM5MyaXknJTTPSlimlGUG
          claim_id: c_1dzAWuuwm-in9rRTZIK30R
          source_id: s_YEFc76BF7d689AbSJF4e5B
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第一百一十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9BAMAYsYbLvwtewfm2SjBY
        status: active
        display_name: 王恭
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王哲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王哲 | accepted |
| birth.date | 1457年 | accepted |
| death.date | 1513年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qH965HRtNLEtPyefHwgvpn | 王宗吉 | accepted |
| ancestors | p_bsxBFWWTq3r1yzvpU9nNr1 | 王湜 | accepted |
| ancestors | p_9BAMAYsYbLvwtewfm2SjBY | 王恭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王哲（CBDB 126636）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126636&o=json)
