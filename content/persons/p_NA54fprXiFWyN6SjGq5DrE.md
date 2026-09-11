---
schema: wang-person/v1
id: p_NA54fprXiFWyN6SjGq5DrE
status: active
merged_into: null
display_name: 王秀三
cbdb_id: 278789
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G8JDfB5DtqggCkt9XLW1L4
        subject_person_id: p_NA54fprXiFWyN6SjGq5DrE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秀三，明人物。中国历代人物传记资料库（CBDB）以人物编号 278789 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_oE7Kzv5dtAZxCw7EuEqsO6
          claim_id: c_G8JDfB5DtqggCkt9XLW1L4
          source_id: s_2yEkj4NYQ5CDrLyPJVbrAU
          stance: supports
          locator: CBDB:278789
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_2yEkj4NYQ5CDrLyPJVbrAU
            source_type: api_record
            title: 中国历代人物传记资料库：王秀三（CBDB 278789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278789&o=json
            external_identifier: CBDB:278789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fPxqnYxGSJLHGXR8SKNiBD
        subject_person_id: p_NA54fprXiFWyN6SjGq5DrE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秀三
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EyK1uitcKSeBnniXLuU6xN
          claim_id: c_fPxqnYxGSJLHGXR8SKNiBD
          source_id: s_2yEkj4NYQ5CDrLyPJVbrAU
          stance: supports
          locator: CBDB:278789
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_2yEkj4NYQ5CDrLyPJVbrAU
            source_type: api_record
            title: 中国历代人物传记资料库：王秀三（CBDB 278789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278789&o=json
            external_identifier: CBDB:278789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
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
        id: c_XQ0k80M5YwzrxC0WR-RKqz
        subject_person_id: p_NA54fprXiFWyN6SjGq5DrE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kAYn8y3iQCatmSJGkXFLhh
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tuJfOa0IZXtVAHaQrMpkNd
          claim_id: c_XQ0k80M5YwzrxC0WR-RKqz
          source_id: s_xjN2TJXyA6Vs3DyR5m6myd
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百八十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xjN2TJXyA6Vs3DyR5m6myd
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 126621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126621&o=json
            external_identifier: CBDB:126621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.068Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kAYn8y3iQCatmSJGkXFLhh
        status: active
        display_name: 王紀
        merged_into_person_id: null
  other: []
---

# 王秀三

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王秀三，明人物。中国历代人物传记资料库（CBDB）以人物编号 278789 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王秀三 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_kAYn8y3iQCatmSJGkXFLhh | 王紀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紀（CBDB 126621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126621&o=json)
- [中国历代人物传记资料库：王秀三（CBDB 278789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278789&o=json)
