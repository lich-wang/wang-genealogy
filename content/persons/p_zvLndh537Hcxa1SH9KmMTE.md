---
schema: wang-person/v1
id: p_zvLndh537Hcxa1SH9KmMTE
status: merged
merged_into: p_G6A9Mv1GnTEMMvApxP4pWa
display_name: 王融
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uw3A4RB8bBL6t6LKoEKs3x
        subject_person_id: p_zvLndh537Hcxa1SH9KmMTE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王融
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YQ6jVqY8cqx7GaCLGrLy14
          claim_id: c_uw3A4RB8bBL6t6LKoEKs3x
          source_id: s_Ryk63SHKrZTRUAwkwCd77h
          stance: supports
          locator: CBDB:25784
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25784）
          source: &a1
            id: s_Ryk63SHKrZTRUAwkwCd77h
            source_type: api_record
            title: 中国历代人物传记资料库：王融（CBDB 25784）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25784&o=json
            external_identifier: CBDB:25784
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_62GMh4jZFBG1ZLFCQt1x3N
        subject_person_id: p_zvLndh537Hcxa1SH9KmMTE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王融，東漢人物。籍贯沂水。（中国历代人物传记资料库 CBDB 25784）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qEST6WdKqUP-nFHFPKYCd8
          claim_id: c_62GMh4jZFBG1ZLFCQt1x3N
          source_id: s_Ryk63SHKrZTRUAwkwCd77h
          stance: supports
          locator: CBDB:25784
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

# 王融

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王融 | accepted |
| bio.summary | 王融，東漢人物。籍贯沂水。（中国历代人物传记资料库 CBDB 25784） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王融（CBDB 25784）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25784&o=json)
