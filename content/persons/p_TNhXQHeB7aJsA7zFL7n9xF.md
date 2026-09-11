---
schema: wang-person/v1
id: p_TNhXQHeB7aJsA7zFL7n9xF
status: active
merged_into: null
display_name: 王景沂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nZcy3zCAy5N89Q66Ca7yjv
        subject_person_id: p_TNhXQHeB7aJsA7zFL7n9xF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景沂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QqwQ4MaWKM9DN2c4oGQPNZ
          claim_id: c_nZcy3zCAy5N89Q66Ca7yjv
          source_id: s_28CbAcQzDx9rKfYxj5dBQ6
          stance: supports
          locator: CBDB:72065
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72065）
          source: &a1
            id: s_28CbAcQzDx9rKfYxj5dBQ6
            source_type: api_record
            title: 中国历代人物传记资料库：王景沂（CBDB 72065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72065&o=json
            external_identifier: CBDB:72065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MEJfqKCGhax3pB4hEUDVs5
        subject_person_id: p_TNhXQHeB7aJsA7zFL7n9xF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1871年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3tKWjemuFpkKhjw5aEUTEn
          claim_id: c_MEJfqKCGhax3pB4hEUDVs5
          source_id: s_28CbAcQzDx9rKfYxj5dBQ6
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
        id: c_o429QMWSXyC8R4FmUhTVXH
        subject_person_id: p_TNhXQHeB7aJsA7zFL7n9xF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1921年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hR98Jpbe7u2hoocYyoMrS8
          claim_id: c_o429QMWSXyC8R4FmUhTVXH
          source_id: s_28CbAcQzDx9rKfYxj5dBQ6
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
        id: c_U8y41tZDjPm5hqXoojJM47
        subject_person_id: p_TNhXQHeB7aJsA7zFL7n9xF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景沂（1871年—1921年），中華民國人物。籍贯江都。（中国历代人物传记资料库 CBDB 72065）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_87Zklxwjtf5_NT4VEhclMd
          claim_id: c_U8y41tZDjPm5hqXoojJM47
          source_id: s_28CbAcQzDx9rKfYxj5dBQ6
          stance: supports
          locator: CBDB:72065
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

# 王景沂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景沂 | accepted |
| birth.date | 1871年 | accepted |
| death.date | 1921年 | accepted |
| bio.summary | 王景沂（1871年—1921年），中華民國人物。籍贯江都。（中国历代人物传记资料库 CBDB 72065） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景沂（CBDB 72065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72065&o=json)
