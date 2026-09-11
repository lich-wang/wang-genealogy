---
schema: wang-person/v1
id: p_DBSpMx5KF2ajdMrE1Fppef
status: active
merged_into: null
display_name: 王奎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uLiXa8LZBhAWLc46ygK7fm
        subject_person_id: p_DBSpMx5KF2ajdMrE1Fppef
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yhZtvFp5dLVTQN6X6DHsAP
          claim_id: c_uLiXa8LZBhAWLc46ygK7fm
          source_id: s_eggYyrDukjfUCHDVDFS77Q
          stance: supports
          locator: CBDB:126602
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126602）
          source: &a1
            id: s_eggYyrDukjfUCHDVDFS77Q
            source_type: api_record
            title: 中国历代人物传记资料库：王奎（CBDB 126602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126602&o=json
            external_identifier: CBDB:126602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.049Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ykhQCyqGWFGoYRe6A49dkW
        subject_person_id: p_DBSpMx5KF2ajdMrE1Fppef
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1460年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UMZu1PJmWf9w19e9jVHqwU
          claim_id: c_ykhQCyqGWFGoYRe6A49dkW
          source_id: s_eggYyrDukjfUCHDVDFS77Q
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
        id: c_gmEfiDfpDAbyKz8AU5P5ZF
        subject_person_id: p_DBSpMx5KF2ajdMrE1Fppef
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1515年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6jrx19MLnaHEah4ow9ZQc2
          claim_id: c_gmEfiDfpDAbyKz8AU5P5ZF
          source_id: s_eggYyrDukjfUCHDVDFS77Q
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
        id: c_PVZNoLeDv6LK27edus3Psv
        subject_person_id: p_DBSpMx5KF2ajdMrE1Fppef
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
        - id: cs_wNyZ7mZHNdSdKNZF3NZHHS
          claim_id: c_PVZNoLeDv6LK27edus3Psv
          source_id: s_eggYyrDukjfUCHDVDFS77Q
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
  ancestors:
    - claim:
        id: c_Pf7iF7W4aIGw7ExxxPppqW
        subject_person_id: p_6fP6yoQB92HAJJGNQ4imGY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DBSpMx5KF2ajdMrE1Fppef
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B_tfmZC9pGQo3S2vF5z2jB
          claim_id: c_Pf7iF7W4aIGw7ExxxPppqW
          source_id: s_oYF7ZLmmtS2oBi57enr1RW
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第一百七十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oYF7ZLmmtS2oBi57enr1RW
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 272406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272406&o=json
            external_identifier: CBDB:272406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.888Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6fP6yoQB92HAJJGNQ4imGY
        status: active
        display_name: 王珪
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奎 | accepted |
| birth.date | 1460年 | accepted |
| death.date | 1515年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_6fP6yoQB92HAJJGNQ4imGY | 王珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 272406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272406&o=json)
- [中国历代人物传记资料库：王奎（CBDB 126602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126602&o=json)
