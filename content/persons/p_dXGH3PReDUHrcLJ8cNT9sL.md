---
schema: wang-person/v1
id: p_dXGH3PReDUHrcLJ8cNT9sL
status: active
merged_into: null
display_name: 王賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Px1UErHMwy3ey1kQrJQfE3
        subject_person_id: p_dXGH3PReDUHrcLJ8cNT9sL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o4GE3tut7bm27uUhKnyWqw
          claim_id: c_Px1UErHMwy3ey1kQrJQfE3
          source_id: s_Eyr79R5VV433JLm8FojLU1
          stance: supports
          locator: CBDB:100951
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100951）
          source: &a1
            id: s_Eyr79R5VV433JLm8FojLU1
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 100951）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100951&o=json
            external_identifier: CBDB:100951
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.595Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZehpBrp2nDdEzCQfC2Tiq1
        subject_person_id: p_dXGH3PReDUHrcLJ8cNT9sL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢，元人物。籍贯元城，入仕進士，曾任都轉運鹽使司使、肅政廉訪司廉訪使。（中国历代人物传记资料库 CBDB 100951）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RPbxD4jDkT69bs5kB-aW3R
          claim_id: c_ZehpBrp2nDdEzCQfC2Tiq1
          source_id: s_Eyr79R5VV433JLm8FojLU1
          stance: supports
          locator: CBDB:100951
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

# 王賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賢 | accepted |
| bio.summary | 王賢，元人物。籍贯元城，入仕進士，曾任都轉運鹽使司使、肅政廉訪司廉訪使。（中国历代人物传记资料库 CBDB 100951） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賢（CBDB 100951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100951&o=json)
