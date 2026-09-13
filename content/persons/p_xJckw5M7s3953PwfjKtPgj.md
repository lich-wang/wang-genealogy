---
schema: wang-person/v1
id: p_xJckw5M7s3953PwfjKtPgj
status: active
merged_into: null
display_name: 王東溪
cbdb_id: 261338
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nfy7Qur5PCJjyYcRGJdPLJ
        subject_person_id: p_xJckw5M7s3953PwfjKtPgj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王東溪，明人物。弘治三年進士，籍贯慈溪，曾任義官。（中国历代人物传记资料库 CBDB 261338）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_9iZ6-1u102PSzDOsd18XnF
          claim_id: c_nfy7Qur5PCJjyYcRGJdPLJ
          source_id: s_nwQ37XeqP8XiBynqejnHsn
          stance: supports
          locator: CBDB:261338
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_nwQ37XeqP8XiBynqejnHsn
            source_type: api_record
            title: 中国历代人物传记资料库：王東溪（CBDB 261338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261338&o=json
            external_identifier: CBDB:261338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_72acGEcwMMsiEXAJwPasrk
        subject_person_id: p_xJckw5M7s3953PwfjKtPgj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王東溪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hCAZPsKkxFRNjSLK4o6pPE
          claim_id: c_72acGEcwMMsiEXAJwPasrk
          source_id: s_nwQ37XeqP8XiBynqejnHsn
          stance: supports
          locator: CBDB:261338
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_VkL_kdzIfQ3P3W_rcM8QC4
        subject_person_id: p_xJckw5M7s3953PwfjKtPgj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f1bLsqqsW0CFbrfWPQxfK3
          claim_id: c_VkL_kdzIfQ3P3W_rcM8QC4
          source_id: s_nwQ37XeqP8XiBynqejnHsn
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第二甲第四十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nwQ37XeqP8XiBynqejnHsn
            source_type: api_record
            title: 中国历代人物传记资料库：王東溪（CBDB 261338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261338&o=json
            external_identifier: CBDB:261338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        status: active
        display_name: 王惠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王東溪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王東溪，明人物。弘治三年進士，籍贯慈溪，曾任義官。（中国历代人物传记资料库 CBDB 261338） | accepted |
| name.primary | 王東溪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Z5nYxV4Tqg6P2c2jCvDNPx | 王惠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王東溪（CBDB 261338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261338&o=json)
