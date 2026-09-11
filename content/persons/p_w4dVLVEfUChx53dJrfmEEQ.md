---
schema: wang-person/v1
id: p_w4dVLVEfUChx53dJrfmEEQ
status: active
merged_into: null
display_name: 王松
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2wUXcVB9k15Q49C5xU5b2g
        subject_person_id: p_w4dVLVEfUChx53dJrfmEEQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ujocz1TePsNv5ESTgCwuVC
          claim_id: c_2wUXcVB9k15Q49C5xU5b2g
          source_id: s_HVyyMtL1ygSxY6SRTJZcpd
          stance: supports
          locator: CBDB:215739
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215739）
          source: &a1
            id: s_HVyyMtL1ygSxY6SRTJZcpd
            source_type: api_record
            title: 中国历代人物传记资料库：王松（CBDB 215739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215739&o=json
            external_identifier: CBDB:215739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.192Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KsgfFRfa39gjUJ5u8AtE7n
        subject_person_id: p_w4dVLVEfUChx53dJrfmEEQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松，明人物。萬曆五年進士。（中国历代人物传记资料库 CBDB 215739）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HmzYfR9LBNfflerHG2eCSx
          claim_id: c_KsgfFRfa39gjUJ5u8AtE7n
          source_id: s_HVyyMtL1ygSxY6SRTJZcpd
          stance: supports
          locator: CBDB:215739
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  descendants:
    - claim:
        id: c_I2EBwZl0oZ7AocxLQPtoD7
        subject_person_id: p_w4dVLVEfUChx53dJrfmEEQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dJSjDNjDHVG2RbXzuMWW8y
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bbig2f-iGYuYfzOUcZYHaX
          claim_id: c_I2EBwZl0oZ7AocxLQPtoD7
          source_id: s_srhDtd6DbjLfh4nqE5bLrk
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第二十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_srhDtd6DbjLfh4nqE5bLrk
            source_type: api_record
            title: 中国历代人物传记资料库：王豫（CBDB 206279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206279&o=json
            external_identifier: CBDB:206279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dJSjDNjDHVG2RbXzuMWW8y
        status: active
        display_name: 王豫
        merged_into_person_id: null
  other: []
---

# 王松

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王松 | accepted |
| bio.summary | 王松，明人物。萬曆五年進士。（中国历代人物传记资料库 CBDB 215739） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_dJSjDNjDHVG2RbXzuMWW8y | 王豫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王松（CBDB 215739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215739&o=json)
- [中国历代人物传记资料库：王豫（CBDB 206279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206279&o=json)
