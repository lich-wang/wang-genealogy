---
schema: wang-person/v1
id: p_8n1kUJ7hBbdoNQpRaTs2kQ
status: active
merged_into: null
display_name: 胡氏
revision: 1
cbdb_id: 570712
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_39CSLVbD72dJlGMgizSPBE
        subject_person_id: p_8n1kUJ7hBbdoNQpRaTs2kQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 胡氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b1umELynspg3WWfH5w0QaR
          claim_id: c_39CSLVbD72dJlGMgizSPBE
          source_id: s_1XQc2-ESPuJppS3psTg2W8
          stance: supports
          locator: CBDB:570712
          quotation: null
          interpretation_note: CBDB 明确记录的王淳配偶
          source: &a1
            id: s_1XQc2-ESPuJppS3psTg2W8
            source_type: api_record
            title: 中国历代人物传记资料库：胡氏(王淳妻)（CBDB 570712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570712&o=json
            external_identifier: CBDB:570712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_0rrRx3wCoUnlGKlVvFmlb7
        subject_person_id: p_sfsKYpH8iJoAHuoaD9gXym
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8n1kUJ7hBbdoNQpRaTs2kQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gyutl5N-lEF7ljurUxiIDp
          claim_id: c_0rrRx3wCoUnlGKlVvFmlb7
          source_id: s_1XQc2-ESPuJppS3psTg2W8
          stance: supports
          locator: 紹興府志:八十卷，lgid=316843：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sfsKYpH8iJoAHuoaD9gXym
        status: active
        display_name: 王淳
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 胡氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 胡氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_sfsKYpH8iJoAHuoaD9gXym | 王淳 | accepted |

## 外部来源

- [中国历代人物传记资料库：胡氏(王淳妻)（CBDB 570712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570712&o=json)
