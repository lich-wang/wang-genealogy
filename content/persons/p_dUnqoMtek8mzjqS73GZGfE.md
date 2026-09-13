---
schema: wang-person/v1
id: p_dUnqoMtek8mzjqS73GZGfE
status: active
merged_into: null
display_name: 王錫純
cbdb_id: 72117
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QWdHpZxZfTHXQpYPndJ7rr
        subject_person_id: p_dUnqoMtek8mzjqS73GZGfE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王錫純（卒于1878年），清人物。籍贯清河，身份为曲譜曲韻作家，入仕貢生: 副貢，曾任主事。（中国历代人物传记资料库 CBDB 72117）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_rtudlhGs10OMkbWc_FnLm5
          claim_id: c_QWdHpZxZfTHXQpYPndJ7rr
          source_id: s_8hNzzcH7Jj6qdb81jd7K6X
          stance: supports
          locator: CBDB:72117
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8hNzzcH7Jj6qdb81jd7K6X
            source_type: api_record
            title: 中国历代人物传记资料库：王錫純（CBDB 72117）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72117&o=json
            external_identifier: CBDB:72117
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:37.980Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_91pBevA2Z44wCcMvKFxXzv
        subject_person_id: p_dUnqoMtek8mzjqS73GZGfE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1878年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1878-01-01
            latest: 1878-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HuFibUGwh4RgpgGpnFpKyo
          claim_id: c_91pBevA2Z44wCcMvKFxXzv
          source_id: s_8hNzzcH7Jj6qdb81jd7K6X
          stance: supports
          locator: CBDB:72117
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（301-400）｜历史性依据：CBDB 卒年 = 1878
          source:
            id: s_8hNzzcH7Jj6qdb81jd7K6X
            source_type: api_record
            title: 中国历代人物传记资料库：王錫純（CBDB 72117）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72117&o=json
            external_identifier: CBDB:72117
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:37.980Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZNZ8JwsGNKNk3GcTYgWVwv
        subject_person_id: p_dUnqoMtek8mzjqS73GZGfE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7GhyW8h8W32uSy7NzryuGa
          claim_id: c_ZNZ8JwsGNKNk3GcTYgWVwv
          source_id: s_8hNzzcH7Jj6qdb81jd7K6X
          stance: supports
          locator: CBDB:72117
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（301-400）｜历史性依据：CBDB 卒年 = 1878
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

# 王錫純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王錫純（卒于1878年），清人物。籍贯清河，身份为曲譜曲韻作家，入仕貢生: 副貢，曾任主事。（中国历代人物传记资料库 CBDB 72117） | accepted |
| death.date | 1878年 | accepted |
| name.primary | 王錫純 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫純（CBDB 72117）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72117&o=json)
