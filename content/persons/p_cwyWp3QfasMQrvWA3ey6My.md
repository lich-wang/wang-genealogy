---
schema: wang-person/v1
id: p_cwyWp3QfasMQrvWA3ey6My
status: active
merged_into: null
display_name: 王韜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y7Bq4RheBfXJcM2JSQNRQV
        subject_person_id: p_cwyWp3QfasMQrvWA3ey6My
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gu3Em2XZ1jXNUistbiW94S
          claim_id: c_y7Bq4RheBfXJcM2JSQNRQV
          source_id: s_6fB85ZJiK63veSRMTD41NG
          stance: supports
          locator: CBDB:343060
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343060）
          source: &a1
            id: s_6fB85ZJiK63veSRMTD41NG
            source_type: api_record
            title: 中国历代人物传记资料库：王韜（CBDB 343060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343060&o=json
            external_identifier: CBDB:343060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.192Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o4VGAvX2isFNca4vSKwoD8
        subject_person_id: p_cwyWp3QfasMQrvWA3ey6My
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韜，明人物。明清進士進士，籍贯垣曲，入仕進士。（中国历代人物传记资料库 CBDB 343060）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NRp82GUoLgNvtAkb1Hw_E-
          claim_id: c_o4VGAvX2isFNca4vSKwoD8
          source_id: s_6fB85ZJiK63veSRMTD41NG
          stance: supports
          locator: CBDB:343060
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

# 王韜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王韜 | accepted |
| bio.summary | 王韜，明人物。明清進士進士，籍贯垣曲，入仕進士。（中国历代人物传记资料库 CBDB 343060） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王韜（CBDB 343060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343060&o=json)
