---
schema: wang-person/v1
id: p_nNerJv9E76uS8JU7v6HpMS
status: active
merged_into: null
display_name: 王恪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gL5vs5e9eCCes6vv7gGVPH
        subject_person_id: p_nNerJv9E76uS8JU7v6HpMS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TeymQxHPX61ANYCCXYxuZS
          claim_id: c_gL5vs5e9eCCes6vv7gGVPH
          source_id: s_5TEsEXENfUC5UM8JNuxb7Q
          stance: supports
          locator: CBDB:303478
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（303478）
          source: &a1
            id: s_5TEsEXENfUC5UM8JNuxb7Q
            source_type: api_record
            title: 中国历代人物传记资料库：王恪（CBDB 303478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303478&o=json
            external_identifier: CBDB:303478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.689Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G5cJDnQJ69349EFnhJ4Ekc
        subject_person_id: p_nNerJv9E76uS8JU7v6HpMS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恪，明人物。嘉靖二十年進士，籍贯崑山，入仕監生。（中国历代人物传记资料库 CBDB 303478）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ORAO95NZUTAdpd-W-nKemn
          claim_id: c_G5cJDnQJ69349EFnhJ4Ekc
          source_id: s_5TEsEXENfUC5UM8JNuxb7Q
          stance: supports
          locator: CBDB:303478
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
  descendants: []
  other: []
---

# 王恪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恪 | accepted |
| bio.summary | 王恪，明人物。嘉靖二十年進士，籍贯崑山，入仕監生。（中国历代人物传记资料库 CBDB 303478） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恪（CBDB 303478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303478&o=json)
