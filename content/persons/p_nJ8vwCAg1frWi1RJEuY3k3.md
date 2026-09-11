---
schema: wang-person/v1
id: p_nJ8vwCAg1frWi1RJEuY3k3
status: active
merged_into: null
display_name: 朱氏
revision: 1
cbdb_id: 262531
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_0dRZEJ4FC1szJJnw-dE9kC
        subject_person_id: p_nJ8vwCAg1frWi1RJEuY3k3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 朱氏，明人物。弘治三年進士。（中国历代人物传记资料库 CBDB 262531）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PgySu89T0kaudjSzix-yEg
          claim_id: c_0dRZEJ4FC1szJJnw-dE9kC
          source_id: s_lTlOdCm8qGhfQpbB93aYCM
          stance: supports
          locator: CBDB:262531
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_lTlOdCm8qGhfQpbB93aYCM
            source_type: api_record
            title: 中国历代人物传记资料库：朱氏(王璟妻)（CBDB 262531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262531&o=json
            external_identifier: CBDB:262531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SWFVwXqDqraJy9n3Jj3OVD
        subject_person_id: p_nJ8vwCAg1frWi1RJEuY3k3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 朱氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a9ocQM_0Pb0Fn_x9ygerIy
          claim_id: c_SWFVwXqDqraJy9n3Jj3OVD
          source_id: s_lTlOdCm8qGhfQpbB93aYCM
          stance: supports
          locator: CBDB:262531
          quotation: null
          interpretation_note: CBDB 明确记录的王璟配偶
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
        id: c_8yvVhCaS30zwFgIveccIXN
        subject_person_id: p_7SVdDrTGrqKd7fHd7JZ1J7
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_nJ8vwCAg1frWi1RJEuY3k3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sNi8cfMQHBXc9nDj2Jegdu
          claim_id: c_8yvVhCaS30zwFgIveccIXN
          source_id: s_lTlOdCm8qGhfQpbB93aYCM
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第七十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7SVdDrTGrqKd7fHd7JZ1J7
        status: active
        display_name: 王璟
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 朱氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 朱氏，明人物。弘治三年進士。（中国历代人物传记资料库 CBDB 262531） | accepted |
| name.primary | 朱氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_7SVdDrTGrqKd7fHd7JZ1J7 | 王璟 | accepted |

## 外部来源

- [中国历代人物传记资料库：朱氏(王璟妻)（CBDB 262531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262531&o=json)
